// Sources
// https://www.bungie.net/sharedbundle/spasm
// http://www.gdcvault.com/play/1020412/Building-Customizable-Characters-for-Bungie
// http://advances.realtimerendering.com/destiny/siggraph2014/bungie_gear_production_siggraph_2014_web_ready.pdf

THREE.TGXLoaderUtils = (function() {
	var scope = {
		// https://www.khronos.org/opengl/wiki/Normalized_Integer
		unormalize: function(value, bits) {
			var max = Math.pow(2, bits) - 1;
			return value/max;
		},

		normalize: function(value, bits) {
			var max = Math.pow(2, bits-1) - 1;
			return Math.max(value/max, -1);
		},

		byte: function(data, offset) {
			return scope.decodeSigned(data, offset, 1);
		},

		ubyte: function(data, offset) {
			return scope.decodeUnsigned(data, offset, 1);
		},

		short: function(data, offset) {
			return scope.decodeSigned(data, offset, 2);
		},

		ushort: function(data, offset) {
			return scope.decodeUnsigned(data, offset, 2);
		},

		int: function(data, offset) {
			return scope.decodeSigned(data, offset, 4);
		},

		uint: function(data, offset) {
			return scope.decodeUnsigned(data, offset, 4);
		},

		float: function(data, offset) {
			return scope.decodeFloat(scope.bytes(data, offset, 4), 1, 8, 23, -126, 127);
		},

		bytes: function(data, offset, length) {
			var bytes = [];
			for (var i=0; i<length; i++) {
				bytes.push(scope.ubyte(data, offset+i));
			}
			return bytes;
		},

		string: function(data, offset, length) {
			var str = '';
			if (offset == undefined) offset = 0;
			if (length == undefined) length = data.length-offset;
			for (var i=0; i<length; i++) {
				var chr = data[offset+i];
				if (chr == 0) continue;
				str += String.fromCharCode(chr);
			}
			//var str = data.substr(offset, length);
			//if (str.indexOf("\0") != -1) str = str.substr(0, str.indexOf("\0"));
			return str;
		},

		padNum: function(num, length) {
			num = num.toString();
			while(num.length < length) {
				num = '0'+num;
			}
			return num;
		},

		decodeHex: function(data, offset, length) {
			var hex = '';

			if (typeof data == 'number') {
				length = offset != undefined ? offset : 4;
				for (var i=0; i<length; i++) {
					var u8 = (data >> (i*8)) & 0xFF;
					hex = scope.padNum(u8.toString(16), 2).toUpperCase() + hex;
				}
				return '0x'+hex;
			}

			if (offset == undefined) offset = 0;
			if (length == undefined) length = data.length;
			for (var i=0; i<length; i++) {
				hex = scope.padNum(data.charCodeAt(offset+i).toString(16).toUpperCase(), 2) + hex;
			}
			return '0x'+hex;
		},

		decodeUnsigned: function(data, offset, length) {
			var int = 0;
			for (var i=0; i<length; i++) {
				int |= data[offset+i] << (i*8);
			}
			return int;
		},

		decodeSigned: function(data, offset, length) {
			if (typeof data != 'number') data = scope.decodeUnsigned(data, offset, length);
			else length = offset;
			var bits = length * 8;
			var max = (1 << bits) - 1;
			if (data & (1 << (bits - 1))) {
				data = (data & max) - max;
			}
			return data;
		},

		decodeFloat: function(bytes, signBits, exponentBits, fractionBits, eMin, eMax, littleEndian) {
			if (littleEndian == undefined) littleEndian = true;
			var totalBits = (signBits + exponentBits + fractionBits);

			var binary = "";
			for (var i = 0, l = bytes.length; i < l; i++) {
				var bits = bytes[i].toString(2);
				while (bits.length < 8)
					bits = "0" + bits;

				if (littleEndian)
					binary = bits + binary;
				else
					binary += bits;
			}

			var sign = (binary.charAt(0) == '1')?-1:1;
			var exponent = parseInt(binary.substr(signBits, exponentBits), 2) - eMax;
			var significandBase = binary.substr(signBits + exponentBits, fractionBits);
			var significandBin = '1'+significandBase;
			var i = 0;
			var val = 1;
			var significand = 0;

			if (exponent == -eMax) {
				if (significandBase.indexOf('1') == -1)
					return 0;
				else {
					exponent = eMin;
					significandBin = '0'+significandBase;
				}
			}

			while (i < significandBin.length) {
				significand += val * parseInt(significandBin.charAt(i));
				val = val / 2;
				i++;
			}

			return sign * significand * Math.pow(2, exponent);
		}
	};
	return scope;
})();

THREE.TGXLoader = function (manager) {
	this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;
};

THREE.TGXLoader.APIKey = null;
THREE.TGXLoader.Basepath = 'https://www.bungie.net';
THREE.TGXLoader.Platform = 'web';

Object.assign(THREE.TGXLoader.prototype, {
	load: function(options, onLoad, onProgress, onError) {
		if (typeof options != 'object') {
			options = {
				itemHash: options,
				classHash: 0,
				isFemale: false,
				apiKey: THREE.TGXLoader.APIKey
			};
		}
		var scope = this;

		if (!onError) {
			onError = function(event) {

			}
		}

		var url = THREE.TGXLoader.Basepath+'/Platform/Destiny/Manifest/22/'+options.itemHash+'/';

		console.log('GetDestinySingleDefinition', url);

		var loader = new THREE.BungieNetLoader( this.manager );
		loader.load(url, options.apiKey, function (response) {
			response = JSON.parse(response);
			if (!response) return; // Invalid JSON response
			if (response.ErrorCode == 1) {
				scope.parse(response.Response.data, options, onLoad, onProgress, onError);
			} else {
				console.error('Bungie responded with an error', response);
			}
		}, onProgress, onError);
	},
	parse: (function() {
		var itemHash = 0;
		var isFemale = false;
		var classHash = 0;

		var contentLoaded = null;
		var assetLoadCount = 0;
		var assetLoadTotal = 0;

		var onLoadCallback, onProgressCallback, onErrorCallback;

		var utils = THREE.TGXLoaderUtils;

		// Spasm.TGXAssetLoader.prototype.onLoadAssetManifest
		function loadAssetManifest(gearAsset) {
			//console.log('GearAsset', gearAsset);
			for (var i=0; i<gearAsset.content.length; i++) {
				var content = gearAsset.content[i];
				//console.log('Content['+i+']', content);

				// Filter Regions
				var filteredRegionIndexSets = [];
				if (content.region_index_sets) { // Use gender neutral sets
					for (var setIndex in content.region_index_sets) {
						var regionIndexSet = content.region_index_sets[setIndex];
						//console.log('RegionIndexSet', setIndex, regionIndexSet);
						//switch(parseInt(setIndex)) {
						//	case 2:
						//	case 6:
						//	case 21:
						//	//default:
						//		filteredRegionIndexSets.push(regionIndexSet[0]);
						//		break;
						//}
						filteredRegionIndexSets.push(regionIndexSet[0]);
					}
				} else { // Use gender-specific set (ie armor)
					filteredRegionIndexSets.push(isFemale ? content.female_index_set : content.male_index_set);
				}

				// Build Asset Index Table
				var geometryIndexes = {};
				var textureIndexes = {};
				var platedTextureIndexes = {};

				for (var filteredRegionIndex in filteredRegionIndexSets) {
					var filteredRegionIndexSet = filteredRegionIndexSets[filteredRegionIndex];
					var index, i;
					for (i=0; i<filteredRegionIndexSet.geometry.length; i++) {
						index = filteredRegionIndexSet.geometry[i];
						geometryIndexes[index] = index;
					}
					for (i=0; i<filteredRegionIndexSet.textures.length; i++) {
						index = filteredRegionIndexSet.textures[i];
						textureIndexes[index] = index;
					}
					for (i=0; i<filteredRegionIndexSet.plate_regions.length; i++) {
						index = filteredRegionIndexSet.plate_regions[i];
						platedTextureIndexes[index] = index;
					}
				}

				//console.log('Assets | Geometry', geometryIndexes, 'Textures', textureIndexes, 'PlatedTextures', platedTextureIndexes);

				contentLoaded = {
					gear: {},
					geometry: {},
					textures: {},
					platedTextures: {}
				};
				assetLoadCount = 0;
				assetLoadTotal = 0;

				// Load Geometry
				for (var geometryIndex in geometryIndexes) {
					assetLoadTotal++;
					loadTGXBin(content.geometry[geometryIndex], function(geometry) {
						contentLoaded.geometry[geometry.fileIdentifier] = geometry;
						assetLoadCount++;
						checkContentLoaded();
					});
				}

				// Load Gear
				for (var gearIndex in gearAsset.gear) {
					assetLoadTotal++;
					var gearUrl = THREE.TGXLoader.Basepath+'/common/destiny_content/geometry/gear/'+gearAsset.gear[gearIndex];
					loadPart(gearUrl, function(gear) {
						gear = JSON.parse(utils.string(gear));
						//console.log('LoadGear', gearUrl);
						//console.log(gear);
						contentLoaded.gear[gear.reference_id] = gear;
						assetLoadCount++;
						checkContentLoaded();
					}, onProgressCallback, onErrorCallback);
				}

				// Load Textures
				for (var textureIndex in textureIndexes) {
					var texture = content.textures[textureIndex];
					//console.log('LoadTexture', textureIndex, texture);
					contentLoaded.textures[texture.split('.')[0]] = loadTexture(texture, function(texture) {

					}, onProgressCallback, onErrorCallback);
				}

				// Load Plated Textures
				for (var platedTextureIndex in platedTextureIndexes) {
					var platedTexture = content.plate_regions[platedTextureIndex];
					//console.log('LoadPlatedTexture', platedTextureIndex, platedTexture);
					contentLoaded.platedTextures[platedTexture.split('.')[0]] = loadPlatedTexture(platedTexture, function(texture) {

					}, onProgressCallback, onErrorCallback);
				}
			}
		}

		// Check for when all content has loaded
		function checkContentLoaded() {
			if (assetLoadCount < assetLoadTotal) return;
			parseContent(contentLoaded);
		}

		function loadPart(url, onLoad, onProgress, onError) {
			var loader = new THREE.BungieNetLoader( this.manager );
			loader.load(url, null, function (response) {
				onLoad(new Uint8Array(response));
			}, onProgress, onError);
		}

		// Spasm.TGXBinLoader
		function loadTGXBin(geometry, onLoad, onProgress, onError) {
			var url = THREE.TGXLoader.Basepath+'/common/destiny_content/geometry/platform/'+THREE.TGXLoader.Platform+'/geometry/'+geometry;
			loadPart(url, function(data) {
				//console.log(data);
				var magic = utils.string(data, 0x0, 0x4); // TGXM
				var version = utils.uint(data, 0x4);
				var fileOffset = utils.uint(data, 0x8);
				var fileCount = utils.uint(data, 0xC);
				var fileIdentifier = utils.string(data, 0x10, 0x100);
				//console.log(magic, version, fileOffset.toString(16), fileCount, fileIdentifier);
				var files = [];
				var fileLookup = [];
				var renderMetadata = false;
				for (var f=0; f<fileCount; f++) {
					var headerOffset = fileOffset+0x110*f;
					var name = utils.string(data, headerOffset, 0x100);
					var offset = utils.uint(data, headerOffset+0x100);
					var size = utils.uint(data, headerOffset+0x108);
					var fileData = data.slice(offset, offset+size);
					//console.log('file['+f+']', headerOffset.toString(16), name, offset.toString(16), size);
					if (name.indexOf('.js') != -1) { // render_metadata.js
						fileData = JSON.parse(utils.string(fileData));
						renderMetadata = fileData;
					}
					files.push({
						name: name,
						offset: offset,
						size: size,
						data: fileData
					});
					fileLookup.push(name);
				}
				var tgxBin = {
					filename: geometry,
					fileIdentifier: fileIdentifier,
					files: files,
					lookup: fileLookup,
					metadata: renderMetadata
				};
				//console.log('LoadTGXBin', url);
				//console.log(tgxBin);
				onLoad(tgxBin);
			}, onProgress, onError);
		}

		function loadPlatedTexture(texturePath, onLoad, onProgress, onError) {
			var url = THREE.TGXLoader.Basepath+'/common/destiny_content/geometry/platform/'+THREE.TGXLoader.Platform+'/plated_textures/'+texturePath;
			var loader = new THREE.TextureLoader();
			return loader.load(url, function(texture) {
				//console.log('LoadPlatedTexture', url);
				//console.log(texture);
				onLoad(texture);
			}, onProgress, onError);
		}

		function loadTexture(texturePath, onLoad, onProgress, onError) {
			var url = THREE.TGXLoader.Basepath+'/common/destiny_content/geometry/platform/'+THREE.TGXLoader.Platform+'/textures/'+texturePath;
			var loader = new THREE.TextureLoader();
			return loader.load(url, function(texture) {
				//console.log('LoadTexture', url);
				//console.log(texture);
				onLoad(texture);
			}, onProgress, onError);
		}

		function parseContent() {
			//console.log('ContentLoaded', contentLoaded);

			// Figure out which geometry should be loaded ie class, gender
			var geometryHashes = [];
			for (var gearId in contentLoaded.gear) {
				var gear = contentLoaded.gear[gearId];
				var artContent = gear.art_content;
				var artContentSets = gear.art_content_sets;
				if (artContentSets && artContentSets.length > 1) {
					//console.log('Requires Arrangement', artContentSets);
					for (var r=0; r<artContentSets.length; r++) {
						var artContentSet = artContentSets[r];
						if (artContentSet.classHash == classHash) {
							artContent = artContentSet.arrangement;
							break;
						}
					}
				}
				if (artContent) {
					var gearSet = artContent.gear_set;
					var regions = gearSet.regions;
					if (regions.length > 0) {
						for (var u=0; u<regions.length; u++) {
							var region = regions[u];
							if (region.pattern_list.length > 0) {
								var pattern = region.pattern_list[0]; // Always 1?
								for (var h=0; h<pattern.geometry_hashes.length; h++) {
									geometryHashes.push(pattern.geometry_hashes[h]);
								}
							}
						}
					} else {
						var overrideArtArrangement = this.isFemale ? gearSet.female_override_art_arrangement : gearSet.base_art_arrangement;
						for (var o=0; o<overrideArtArrangement.geometry_hashes.length; o++) {
							geometryHashes.push(overrideArtArrangement.geometry_hashes[o]);
						}
					}
				}
			}
			//console.log('GeometryHashes', geometryHashes);

			var defaultMaterial = new THREE.MeshLambertMaterial({
				emissive: 0x444444,
				color: 0x777777,
				shading: THREE.FlatShading,
				side: THREE.DoubleSide,
				skinning: false
			});
			var materials = [defaultMaterial];

			var geometry = new THREE.Geometry();
			geometry.bones = [];

			// Compress geometry into a single THREE.Geometry
			var vertexOffset = 0;
			for (var g=0; g<geometryHashes.length; g++) {
				var geometryHash = geometryHashes[g];
				var tgxBin = contentLoaded.geometry[geometryHash];
				//console.log('Geometry['+geometryHash+'], tgxBin);

				var renderMeshes = parseTGXAsset(tgxBin, geometryHash);

				var diffuseTexture = null;
				var normalTexture = null;
				var gearstackTexture = null;

				var metadata = tgxBin.metadata;
				var texturePlates = metadata.texture_plates;

				// To Do :: Implement texture loading
				//if (texturePlates.length == 1) {
				//	var texturePlate = texturePlates[0];
				//	var texturePlateSet = texturePlate.plate_set;
				//	diffuseTexture = contentLoaded.platedTextures[texturePlateSet.diffuse.reference_id];
				//	normalTexture = contentLoaded.platedTextures[texturePlateSet.normal.reference_id];
				//	gearstackTexture = contentLoaded.platedTextures[texturePlateSet.gearstack.reference_id];
				//	console.log(texturePlateSet, diffuseTexture, normalTexture, gearstackTexture);
				//} else {
				//	var textures = contentLoaded.textures;
				//	if (metadata.render_model.render_meshes.length > 0) {
				//		var renderMesh = metadata.render_model.render_meshes[0];
				//		var stagePartList = renderMesh.stage_part_list;
				//		for (var i=0; i<stagePartList.length; i++) {
				//			var stagePart = stagePartList[i];
				//			var shader = stagePart.shader;
				//			console.warn('LoadingStagePartTextures['+i+']', stagePart);
				//		}
				//	}
				//}
				//
				//var material = new THREE.MeshPhongMaterial({
				//	side: THREE.DoubleSide,
				//	skinning: true,
				//	map: diffuseTexture,
				//	normalMap: normalTexture,
				//	gearstackMap: gearstackTexture
				//});
				//materials.push(material);
				//
				var materialIndex = 0;//materials.length-1;

				//console.log('RenderMeshes', renderMeshes);
				for (var m=0; m<renderMeshes.length; m++) {
					var renderMesh = renderMeshes[m];
					var indexBuffer = renderMesh.indexBuffer;
					var vertexBuffer = renderMesh.vertexBuffer;
					var positionOffset = renderMesh.positionOffset;
					var positionScale = renderMesh.positionScale;
					var texcoord0ScaleOffset = renderMesh.texcoord0ScaleOffset;
					var texcoordOffset = renderMesh.texcoordOffset;
					var texcoordScale = renderMesh.texcoordScale;
					var parts = renderMesh.parts;

					if (parts.length == 0) continue; // Skip meshes with no parts

					//console.log('RenderMesh['+m+']', renderMesh);

					for (var p=0; p<parts.length; p++) {
						var part = parts[p];
						if (part.lodCategory.name.indexOf('0') == -1) continue; // Skip any lods not matchin "_lod_category_01" ?
						//console.log('RenderMeshPart['+p+']', part);

						var increment = 3;
						var start = part.indexStart;
						var count = part.indexCount;

						// PrimitiveType, 3=TRIANGLES, 5=TRIANGLE_STRIP
						// https://stackoverflow.com/questions/3485034/convert-triangle-strips-to-triangles

						if (part.primitiveType === 5) {
							increment = 1;
							count -= 2;
						}

						for (var i=0; i<count; i+= increment) {
							var faceVertexNormals = [];
							var faceVertexUvs = [];
							var faceVertex = [];

							var faceIndex = start+i;

							var tri = part.primitiveType === 3 || i & 1 ? [0, 1, 2] : [2, 1, 0];

							for (var j=0; j<3; j++) {
								var index = indexBuffer[faceIndex+tri[j]];
								var vertex = vertexBuffer[index];
								var normal = vertex.normal0;
								var uv = vertex.texcoord0;

								faceVertex.push(index+vertexOffset);
								faceVertexNormals.push(new THREE.Vector3(normal[0], normal[1], normal[2]));
								faceVertexUvs.push(new THREE.Vector2(uv[0]*texcoordScale[0]+texcoordOffset[0], uv[1]*texcoordScale[1]+texcoordOffset[1]));
							}
							var face = new THREE.Face3(faceVertex[0], faceVertex[1], faceVertex[2], faceVertexNormals);
							face.materialIndex = materialIndex;
							geometry.faces.push(face);
							geometry.faceVertexUvs[0].push(faceVertexUvs);
						}
					}

					for (var v=0; v<vertexBuffer.length; v++) {
						var vertex = vertexBuffer[v];
						var position = vertex.position0;
						var x = position[0]*positionScale[0]+positionOffset[0];
						var y = position[1]*positionScale[1]+positionOffset[1];
						var z = position[2]*positionScale[2]+positionOffset[2];
						geometry.vertices.push(new THREE.Vector3(x, y, z));
					}
					vertexOffset += vertexBuffer.length;
				}
			}

			onLoadCallback(geometry, materials);
		}

		// Spasm.TGXAssetLoader.prototype.getGearRenderableModel
		function parseTGXAsset(tgxBin, geometryHash) {
			var metadata = tgxBin.metadata; // Arrangement
			//console.log('Metadata['+geometryHash+']', metadata);

			var meshes = [];

			for (var renderMeshIndex in metadata.render_model.render_meshes) {
				//for (var i=0; i<metadata.render_model.render_meshes.length; i++) {
				var renderMesh = metadata.render_model.render_meshes[renderMeshIndex]; // BoB Bunch of Bits

				//console.log('RenderMesh['+renderMeshIndex+']', renderMesh);

				// IndexBuffer
				var indexBufferInfo = renderMesh.index_buffer;
				var indexBufferData = tgxBin.files[tgxBin.lookup.indexOf(indexBufferInfo.file_name)].data;

				var indexBuffer = [];
				for (var j=0; j<indexBufferInfo.byte_size; j+=indexBufferInfo.value_byte_size) {
					var indexValue = utils.ushort(indexBufferData, j);
					indexBuffer.push(indexValue);
				}
				//console.log('IndexBuffer', indexBufferInfo);

				// VertexBuffer
				var vertexBuffer = parseVertexBuffers(tgxBin, renderMesh);

				// Spasm.RenderMesh.prototype.getRenderableParts
				var parts = [];
				var stagesToRender = [0]; // Hardcoded?
				for (var r=0; r<stagesToRender.length; r++) {
					var stageIndex = stagesToRender[r];
					var start = renderMesh.stage_part_offsets[stageIndex];
					var end = renderMesh.stage_part_offsets[stageIndex+1];
					for (var i=start; i<end; i++) {
						var stagePart = renderMesh.stage_part_list[i];
						//console.log('StagePart['+renderMeshIndex+']['+i+']', stagePart);
						parts.push(parseStagePart(stagePart));
					}
				}

				// Spasm.RenderMesh
				meshes.push({
					positionOffset: renderMesh.position_offset,
					positionScale: renderMesh.position_scale,
					texcoordOffset: renderMesh.texcoord_offset,
					texcoordScale: renderMesh.texcoord_scale,
					texcoord0ScaleOffset: renderMesh.texcoord0_scale_offset,
					indexBuffer: indexBuffer,
					vertexBuffer: vertexBuffer,
					parts: parts
				})
			}

			return meshes;
		}

		// Spasm.RenderMesh.prototype.getAttributes
		function parseVertexBuffers(tgxBin, renderMesh) {
			var stagePartVertexStreamLayoutDefinition = renderMesh.stage_part_vertex_stream_layout_definitions[0];
			var formats = stagePartVertexStreamLayoutDefinition.formats;

			var vertexBuffer = [];

			for (var vertexBufferIndex in renderMesh.vertex_buffers) {
				//for (var j=0; renderMesh.vertex_buffers.length; j++) {
				var vertexBufferInfo = renderMesh.vertex_buffers[vertexBufferIndex];
				var vertexBufferData = tgxBin.files[tgxBin.lookup.indexOf(vertexBufferInfo.file_name)].data;
				var format = formats[vertexBufferIndex];

				//console.log('VertexBuffer['+vertexBufferIndex+']', vertexBufferInfo.file_name, vertexBufferInfo, format);

				var vertexIndex = 0;
				for (var v=0; v<vertexBufferInfo.byte_size; v+= vertexBufferInfo.stride_byte_size) {
					var vertexOffset = v;
					if (vertexBuffer.length <= vertexIndex) vertexBuffer[vertexIndex] = {};
					for (var e=0; e<format.elements.length; e++) {
						var element = format.elements[e];
						var values = [];

						var elementType = element.type.replace('_vertex_format_attribute_', '');
						var types = ["ubyte", "byte", "ushort", "short", "uint", "int", "float"];
						for (var typeIndex in types) {
							var type = types[typeIndex];
							if (elementType.indexOf(type) === 0) {
								var count = parseInt(elementType.replace(type, ''));
								var j, value;
								switch(type) {
									case 'ubyte':
										for (j=0; j<count; j++) {
											value = utils.ubyte(vertexBufferData, vertexOffset);
											if (element.normalized) value = utils.unormalize(value, 8);
											values.push(value);
											vertexOffset++;
										}
										break;
									case 'byte':
										for (j=0; j<count; j++) {
											value = utils.byte(vertexBufferData, vertexOffset);
											if (element.normalized) value = utils.normalize(value, 8);
											values.push(value);
											vertexOffset++;
										}
										break;
									case 'ushort':
										for(j=0; j<count; j++) {
											value = utils.ushort(vertexBufferData, vertexOffset);
											if (element.normalized) value = utils.unormalize(value, 16);
											values.push(value);
											vertexOffset += 2;
										}
										break;
									case 'short':
										for(j=0; j<count; j++) {
											value = utils.short(vertexBufferData, vertexOffset);
											if (element.normalized) value = utils.normalize(value, 16);
											values.push(value);
											vertexOffset += 2;
										}
										break;
									case 'uint':
										for(j=0; j<count; j++) {
											value = utils.uint(vertexBufferData, vertexOffset);
											if (element.normalized) value = utils.unormalize(value, 32);
											values.push(value);
											vertexOffset += 4;
										}
										break;
									case 'int':
										for(j=0; j<count; j++) {
											value = utils.int(vertexBufferData, vertexOffset);
											if (element.normalized) value = utils.normalize(value, 32);
											values.push(value);
											vertexOffset += 4;
										}
										break;
									case 'float':
										for(j=0; j<count; j++) {
											value = utils.float(vertexBufferData, vertexOffset);
											values.push(value);
											vertexOffset += 4;
										}
										break;
								}
								break;
							}
						}

						var semantic = element.semantic.replace('_tfx_vb_semantic_', '');
						vertexBuffer[vertexIndex][semantic+element.semantic_index] = values;
					}
					vertexIndex++;
				}
			}
			return vertexBuffer;
		}

		// Spasm.RenderablePart
		function parseStagePart(stagePart) {
			var gearDyeSlot = 0;
			var usePrimaryColor = true;
			var useInvestmentDecal = false;

			switch(stagePart.gear_dye_change_color_index) {
				case 0:
					gearDyeSlot = 0;
					break;
				case 1:
					gearDyeSlot = 0;
					usePrimaryColor = false;
					break;
				case 2:
					gearDyeSlot = 1;
					break;
				case 3:
					gearDyeSlot = 1;
					usePrimaryColor = false;
					break;
				case 4:
					gearDyeSlot = 2;
					break;
				case 5:
					gearDyeSlot = 2;
					usePrimaryColor = false;
					break;
				case 6:
					gearDyeSlot = 3;
					useInvestmentDecal = true;
					break;
				case 7:
					gearDyeSlot = 3;
					useInvestmentDecal = true;
					break;
			}

			return {
				externalIdentifier: stagePart.external_identifier,
				changeColorIndex: stagePart.gear_dye_change_color_index,
				primitiveType: stagePart.primitive_type,
				lodCategory: stagePart.lod_category,
				gearDyeSlot: gearDyeSlot,
				usePrimaryColor: usePrimaryColor,
				useInvestmentDecal: useInvestmentDecal,
				indexMin: stagePart.index_min,
				indexMax: stagePart.index_max,
				indexStart: stagePart.start_index,
				indexCount: stagePart.index_count
			};
		}

		return function(data, options, onLoad, onProgress, onError) {
			itemHash = options.itemHash;
			isFemale = options.isFemale;
			classHash = options.classHash;
			onLoadCallback = onLoad;
			onProgressCallback = onProgress;
			onErrorCallback = onError;

			loadAssetManifest(data.gearAsset);
		}
	})()
});

// This is a copy of THREE.FileLoader with some extra settings applied to the XMLHttpRequest
// Was getting this error when trying to apply it to a standard THREE.FileLoader
// Error: Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.
THREE.BungieNetLoader = function(manager) {
	this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;
};
Object.assign(THREE.BungieNetLoader.prototype, {
	load: function (url, apiKey, onLoad, onProgress, onError ) {

		if ( url === undefined ) url = '';

		if ( this.path !== undefined ) url = this.path + url;

		var scope = this;

		var cached = THREE.Cache.get( url );

		if ( cached !== undefined ) {

			scope.manager.itemStart( url );

			setTimeout( function () {

				if ( onLoad ) onLoad( cached );

				scope.manager.itemEnd( url );

			}, 0 );

			return cached;

		}

		var request = new XMLHttpRequest();
		request.open( 'GET', url, true );

		// If an API Key is supplied, add it to the request header
		// otherwise assume we want binary data
		if (typeof apiKey == 'string') request.setRequestHeader('X-API-Key', apiKey);
		else request.responseType = 'arraybuffer';

		request.addEventListener( 'load', function ( event ) {

			var response = event.target.response;

			THREE.Cache.add( url, response );

			if ( this.status === 200 ) {

				if ( onLoad ) onLoad( response );

				scope.manager.itemEnd( url );

			} else if ( this.status === 0 ) {

				// Some browsers return HTTP Status 0 when using non-http protocol
				// e.g. 'file://' or 'data://'. Handle as success.

				console.warn( 'THREE.FileLoader: HTTP Status 0 received.' );

				if ( onLoad ) onLoad( response );

				scope.manager.itemEnd( url );

			} else {

				if ( onError ) onError( event );

				scope.manager.itemError( url );

			}

		}, false );

		if ( onProgress !== undefined ) {

			request.addEventListener( 'progress', function ( event ) {

				onProgress( event );

			}, false );

		}

		request.addEventListener( 'error', function ( event ) {

			if ( onError ) onError( event );

			scope.manager.itemError( url );

		}, false );

		if ( this.responseType !== undefined ) request.responseType = this.responseType;
		if ( this.withCredentials !== undefined ) request.withCredentials = this.withCredentials;

		if ( request.overrideMimeType ) request.overrideMimeType( this.mimeType !== undefined ? this.mimeType : 'text/plain' );

		request.send( null );

		scope.manager.itemStart( url );

		return request;

	}
});