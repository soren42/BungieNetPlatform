// Sources
// https://www.bungie.net/sharedbundle/spasm
// http://www.gdcvault.com/play/1020412/Building-Customizable-Characters-for-Bungie
// http://advances.realtimerendering.com/destiny/siggraph2014/
// http://advances.realtimerendering.com/destiny/gdc_2017/

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

		radianToDegrees: function(value) {
			return value * 180 / Math.PI;
		},

		degreesToRadian: function(value) {
			return value * Math.PI / 180;
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

// Global defaults
THREE.TGXLoader.APIKey = null;
THREE.TGXLoader.APIBasepath = 'https://www.bungie.net/d1/Platform/Destiny';
THREE.TGXLoader.Basepath = 'https://www.bungie.net';
THREE.TGXLoader.Platform = 'web';
THREE.TGXLoader.ManifestPath = null;
THREE.TGXLoader.DefaultAnimationPath = 'destiny_player_animation.js';
THREE.TGXLoader.Game = 'destiny';
THREE.TGXLoader.NoCache = false;

// Destiny 2
THREE.TGXLoader.APIBasepath2 = 'https://www.bungie.net/Platform/Destiny2';
THREE.TGXLoader.ManifestPath2 = null;

Object.assign(THREE.TGXLoader.prototype, {
	load: function(options, onLoad, onProgress, onError) {
		var defaultOptions = {
			//itemHash: options,
			itemHashes: [options],
			classHash: 0,
			isFemale: false,
			apiKey: THREE.TGXLoader.APIKey,
			//apiBasepath: THREE.TGXLoader.APIBasepath,
			basepath: THREE.TGXLoader.Basepath,
			platform: THREE.TGXLoader.Platform,
			//manifestPath: THREE.TGXLoader.ManifestPath,
			loadTextures: true,
			loadSkeleton: false,
			loadAnimation: false,
			animationPath: THREE.TGXLoader.DefaultAnimationPath,
			game: THREE.TGXLoader.Game,
			noCache: THREE.TGXLoader.NoCache
		};
		if (typeof options != 'object') options = {};

		var game = options.game ? options.game : defaultOptions.game;
		switch(game) {
			case 'destiny2':
				defaultOptions.apiBasepath = THREE.TGXLoader.APIBasepath2;
				defaultOptions.manifestPath = THREE.TGXLoader.ManifestPath2;
				break;
			default:
				defaultOptions.apiBasepath = THREE.TGXLoader.APIBasepath;
				defaultOptions.manifestPath = THREE.TGXLoader.ManifestPath;
				break;
		}
		for (var key in defaultOptions) {
			if (options[key] === undefined) options[key] = defaultOptions[key];
		}

		if (options.itemHash != undefined) options.itemHashes = [options.itemHash];

		console.log('Loader', options);

		var scope = this;

		//if (onProgress === undefined) {
		//	onProgress = function(event) {
		//		console.log(event);
		//	}
		//}

		if (onError === undefined) {
			onError = function(error) {
				console.error(error);
			};
		}

		var url, loader, loadedCount = 0, items = [];

		// Mobile manifest support
		if (options.platform == 'mobile' && !options.manifestPath && !THREE.TGXManifest.isCapable()) {
			options.platform = 'web';
		}

		function itemsLoaded() {
			console.log('LoadedItem', items[items.length-1]);
			if (loadedCount == options.itemHashes.length) {
				scope.parse(items, options, onLoad, onProgress, onError);
			}
		}

		function gearAsset(itemIndex) {
			var itemHash = options.itemHashes[itemIndex];
			if (options.platform == 'mobile') {
				if (options.manifestPath) { // Load manifest server-side
					var url = options.manifestPath.replace('$itemHash', itemHash);
					loader = new THREE.BungieNetLoader(this.manager);
					loader.load(url, options.apiKey, function(response) {
						loadedCount++;
						try { // Invalid JSON response
							response = JSON.parse(response);
							items[itemIndex] = response;
						} catch(e) {
							console.error('Invalid JSON', url);
						}
						itemsLoaded();
					}, onProgress, onError);

				} else { // Load manifest locally
					var manifest = THREE.TGXLoader.Manifest;
					if (!THREE.TGXLoader.Manifest) {
						THREE.TGXLoader.Manifest = manifest = new THREE.TGXManifest(this.manager, options);
					}
					manifest.getAsset(itemHash, function(data) {
						items.push(data);
						loadedCount++;
						itemsLoaded();
					}, onProgress, onError);
				}
				return;
			}

			// Web version support
			url = options.apiBasepath+'/Manifest/22/'+itemHash+'/'; // GetDestinySingleDefinition

			loader = new THREE.BungieNetLoader(this.manager);
			loader.load(url, options.apiKey, function (response) {
				loadedCount++;
				try { // Invalid JSON response
					response = JSON.parse(response);
				} catch(e) {
					console.error('Invalid JSON', url);
				}

				if (response.ErrorCode == 1) {
					items[itemIndex] = response.Response.data;
				} else {
					console.error('Bungie Error Response', response);
				}
				itemsLoaded();
			}, onProgress, onError);
		}

		for (var i=0; i<options.itemHashes.length; i++) {
			gearAsset(i);
		}
	},
	parse: (function() {
		//var itemHash = 0;
		var isFemale = false;
		var classHash = 0;

		var noCache = false;

		var loadSkeleton = false;
		var loadAnimation = false;
		var loadTextures = true;

		var contentLoaded = null;
		var assetLoadCount = 0;
		var assetLoadTotal = 0;
		var contentParsed = false;

		var onLoadCallback, onProgressCallback, onErrorCallback;

		var utils = THREE.TGXLoaderUtils;
		var game = THREE.TGXLoader.Game;
		var basepath = THREE.TGXLoader.Basepath;
		var contentpath = basepath+'/common/'+game+'_content';
		var platform = THREE.TGXLoader.Platform;
		var animationPath = THREE.TGXLoader.DefaultAnimationPath;

		var hasBones = false;
		var defaultMaterial, geometry, materials;
		var vertexOffset = 0;

		// Spasm.TGXAssetLoader.prototype.onLoadAssetManifest
		function loadAssetManifest(gearAsset) {
			//console.log('GearAsset', gearAsset);
			for (var i=0; i<gearAsset.content.length; i++) {
				var content = gearAsset.content[i];
				//console.log('Content['+i+']', content);

				// Filter Regions
				var filteredRegionIndexSets = [];

				if (content.dye_index_set) {
					//console.log('DyeIndexSet', content.dye_index_set);
					filteredRegionIndexSets.push(content.dye_index_set);
				}

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
					//console.log('GenderedIndexSet', content.female_index_set, content.male_index_set);
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
					if (filteredRegionIndexSet.plate_regions) {
						for (i=0; i<filteredRegionIndexSet.plate_regions.length; i++) {
							index = filteredRegionIndexSet.plate_regions[i];
							platedTextureIndexes[index] = index;
						}
					}
				}

				assetLoadTotal += Object.keys(geometryIndexes).length;
				assetLoadTotal += Object.keys(gearAsset.gear).length;
				if (loadSkeleton) assetLoadTotal++;
				if (loadAnimation) assetLoadTotal++;
				if (loadTextures) {
					assetLoadTotal += Object.keys(textureIndexes).length;
					assetLoadTotal += Object.keys(platedTextureIndexes).length;
				}

				// Load Geometry
				for (var geometryIndex in geometryIndexes) {
					loadGeometry(content.geometry[geometryIndex], function(geometry) {
						//console.log('Geometry', geometry);
						contentLoaded.geometry[geometry.fileIdentifier] = geometry;
						assetLoadCount++;
						checkContentLoaded();
					});
				}

				// Load Gear
				for (var gearIndex in gearAsset.gear) {
					var gearUrl = contentpath+'/geometry/gear/'+gearAsset.gear[gearIndex];
					loadPart(gearUrl, function(gear) {
						gear = JSON.parse(utils.string(gear));
						//console.log('LoadGear', gearUrl);
						//console.log(gear);
						contentLoaded.gear[gear.reference_id] = gear;
						assetLoadCount++;
						checkContentLoaded();
					}, onProgressCallback, onErrorCallback);
				}

				// Load Bones / Animations
				if (loadSkeleton && contentLoaded.skeleton == undefined) {
					contentLoaded.skeleton = null;
					loadPart(contentpath+'/animations/destiny_player_skeleton.js', function(skeleton) {
						skeleton = JSON.parse(skeleton);
						contentLoaded.skeleton = skeleton;
						assetLoadCount++;
						checkContentLoaded();
					}, onProgressCallback, onErrorCallback);

					if (loadAnimation) {
						loadPart(contentpath+'/animations/'+animationPath, function(animations) {
							animations = JSON.parse(animations);
							contentLoaded.animations = animations;
							assetLoadCount++;
							checkContentLoaded();
						}, onProgressCallback, onErrorCallback);
					}
				}

				if (!loadTextures) continue;

				// Load Textures
				for (var textureIndex in textureIndexes) {
					var texture = content.textures[textureIndex];
					loadTexture(texture, false, function() {
						assetLoadCount++;
						checkContentLoaded();
					});
				}

				// Load Plated Textures
				for (var platedTextureIndex in platedTextureIndexes) {
					var platedTexture = content.plate_regions[platedTextureIndex];
					loadTexture(platedTexture, true, function() {
						assetLoadCount++;
						checkContentLoaded();
					});
				}
			}
		}

		// Check for when all content has loaded
		function checkContentLoaded() {
			if (assetLoadCount < assetLoadTotal) return;
			console.log('ContentLoaded', assetLoadCount+'/'+assetLoadTotal);
			if (contentParsed) return;
			contentParsed = true;
			parseContent(contentLoaded);
		}

		function loadPart(url, onLoad) {
			var loader = new THREE.BungieNetLoader( this.manager );
			loader.load(url+(noCache ? '?'+new Date().getTime() : ''), null, function (response) {
				if (response instanceof ArrayBuffer) response = new Uint8Array(response);
				if (onLoad) onLoad(response);
			}, onProgressCallback, onErrorCallback);
		}

		function loadGeometry(geometry, onLoad) {
			var url = contentpath+'/geometry/platform/'+platform+'/geometry/'+geometry;
			loadTGXBin(url, onLoad, onProgressCallback, onErrorCallback);
		}

		// Spasm.TGXBinLoader
		function loadTGXBin(url, onLoad) {
			loadPart(url, function(data) {
				//console.log(data);
				var magic = utils.string(data, 0x0, 0x4); // TGXM
				var version = utils.uint(data, 0x4);
				var fileOffset = utils.uint(data, 0x8);
				var fileCount = utils.uint(data, 0xC);
				var fileIdentifier = utils.string(data, 0x10, 0x100);
				//console.log(magic, version, fileOffset.toString(16), fileCount, fileIdentifier);
				if (magic != 'TGXM') {
					console.error('Invalid TGX File', url);
					return;
				}
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
					url: url,
					fileIdentifier: fileIdentifier,
					files: files,
					lookup: fileLookup,
					metadata: renderMetadata
				};
				//console.log('LoadTGXBin', url);
				//console.log(tgxBin);
				if (onLoad) onLoad(tgxBin);
			}, onProgressCallback, onErrorCallback);
		}

		function loadDataTexture(textureUri, referenceId, onLoad) {
			var loader = new THREE.TextureLoader(this.manager);
			var textureData = loader.load(textureUri, function(texture) {
				if (onLoad) onLoad(texture);
			}, onProgressCallback, onErrorCallback);
			textureData.flipY = false;
			textureData.minFilter = THREE.LinearMipMapLinearFilter;
			textureData.magFilter = THREE.NearestFilter;

			contentLoaded['platedTextures'][referenceId] = {
				referenceId: referenceId,
				texture: textureData
			};
		}

		function loadTexture(texture, isPlated, onLoad) {
			if (isPlated === undefined) isPlated = false;
			var url = contentpath+'/geometry/platform/'+platform+'/'+(isPlated ? 'plated_textures' : 'textures')+'/'+texture;

			var referenceId = texture.split('.')[0];

			if (texture.indexOf('.bin') != -1) { // Mobile texture
				//assetLoadTotal++;
				loadTGXBin(url, function(tgxBin) {
					//console.log('MobileTexture', tgxBin);
					contentLoaded.mobileTextures[referenceId] = {
						url: url,
						referenceId: referenceId,
						fileIdentifier: tgxBin.fileIdentifier,
						texture: tgxBin.lookup
					};
					var count = 0;
					var total = tgxBin.files.length;
					for (var i=0; i<tgxBin.files.length; i++) {
						var textureFile = tgxBin.files[i];
						var textureData = loadMobileTexture(textureFile, function() {
							count++;
							if (count == total && onLoad) onLoad(contentLoaded.mobileTextures[referenceId]);
						});
						textureData.flipY = false;
						textureData.minFilter = THREE.LinearMipMapLinearFilter;
						textureData.magFilter = THREE.NearestFilter;
						contentLoaded['textures'][textureFile.name] = {
							url: url,
							mobileReferenceId: referenceId,
							referenceId: textureFile.name,
							texture: textureData
						};
					}
				});
			} else {
				//assetLoadTotal++;
				var loader = new THREE.TextureLoader(this.manager);
				var textureData = loader.load(url, function(texture) {
					if (onLoad) onLoad(texture);
				}, onProgressCallback, onErrorCallback);
				textureData.flipY = false;
				textureData.minFilter = THREE.LinearMipMapLinearFilter;
				textureData.magFilter = THREE.NearestFilter;

				contentLoaded[isPlated ? 'platedTextures' : 'textures'][referenceId] = {
					url: url,
					referenceId: referenceId,
					texture: textureData
				};
			}
		}

		function loadMobileTexture(textureFile, onLoad) {
			var isPng = utils.string(textureFile.data, 1, 3) == 'PNG';
			var mimeType = 'image/'+(isPng ? 'png' : 'jpeg');

			var urlCreator = window.URL || window.webkitURL;
			var imageUrl = urlCreator.createObjectURL(new Blob([textureFile.data], {type: mimeType}));

			var texture = new THREE.Texture();

			var image = new Image();
			image.onload = function () {
				texture.image = image;
				texture.needsUpdate = true;
				if (onLoad) onLoad(texture);
			};
			image.src = imageUrl;

			return texture;
		}

		function parseContent() {
			console.log('ContentLoaded', contentLoaded);

			// Set up THREE.Geometry and load skeleton (if any)
			geometry = new THREE.Geometry();
			geometry.bones = parseSkeleton();
			hasBones = geometry.bones.length > 0;

			var animation = hasBones && loadAnimation ? parseAnimation(geometry.bones) : false;

			// Set up default white material
			defaultMaterial = new THREE.MeshLambertMaterial({
				emissive: 0x444444,
				color: 0x777777,
				shading: THREE.FlatShading,
				side: THREE.DoubleSide,
				skinning: hasBones
			});
			materials = [];
			if (!loadTextures) materials.push(defaultMaterial);

			vertexOffset = 0;
			for (var gearId in contentLoaded.gear) {
				var gear = contentLoaded.gear[gearId];
				parseGear(gear);
			}

			onLoadCallback(geometry, materials, animation ? [animation] : []);
		}

		function parseGear(gear) {
			// Figure out which geometry should be loaded ie class, gender
			var geometryHashes = [];
			var gearDyes = null;
			//for (var gearId in contentLoaded.gear) {
			//	var gear = contentLoaded.gear[gearId];
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
				} else if (artContentSets) {
					artContent = artContentSets[0].arrangement;
				}
				//console.log('Gear', gearId, artContent);
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
						var overrideArtArrangement = isFemale ? gearSet.female_override_art_arrangement : gearSet.base_art_arrangement;
						for (var o=0; o<overrideArtArrangement.geometry_hashes.length; o++) {
							geometryHashes.push(overrideArtArrangement.geometry_hashes[o]);
						}
					}
				}

				gearDyes = parseGearDyes(gear);
			//}
			//console.log('GeometryHashes', geometryHashes);
			//console.log('GearDyes', gearDyes);


			// Compress geometry into a single THREE.Geometry
			if (geometryHashes.length == 0) console.warn('NoGeometry');
			for (var g=0; g<geometryHashes.length; g++) {
				var geometryHash = geometryHashes[g];
				var tgxBin = contentLoaded.geometry[geometryHash];

				//if (g != 0) continue;
				if (tgxBin == undefined) {
					console.warn('MissingGeometry['+g+']', geometryHash);
					continue;
				}

				//console.log('Geometry['+g+']', geometryHash, tgxBin);

				var renderMeshes = parseTGXAsset(tgxBin, geometryHash);

				var metadata = tgxBin.metadata;
				var texturePlates = metadata.texture_plates;

				//console.log('Metadata['+g+']', metadata);

				// Spasm.TGXAssetLoader.prototype.getGearRenderableModel
				var geometryTextures = {};
				//console.log('TexturePlates', texturePlates, contentLoaded);
				if (texturePlates.length == 1) {
					var texturePlate = texturePlates[0];
					var texturePlateSet = texturePlate.plate_set;

					// Stitch together plate sets
					// Web versions are pre-stitched
					for (var texturePlateId in texturePlateSet) {
						var texturePlate = texturePlateSet[texturePlateId];
						var textureData = contentLoaded.platedTextures[texturePlate.reference_id];
						if (!textureData) {
							var canvas = document.createElement('canvas');
							canvas.width = texturePlate.plate_size[0];
							canvas.height = texturePlate.plate_size[1];
							var ctx = canvas.getContext('2d');

							ctx.fillStyle = '#000000';
							ctx.fillRect(0, 0, canvas.width, canvas.height);

							//console.log('BuildTexturePlate['+texturePlateId+']', texturePlate.plate_index, texturePlate.plate_size, texturePlate.reference_id);
							for (var p=0; p<texturePlate.texture_placements.length; p++) {
								var placement = texturePlate.texture_placements[p];
								var placementTexture = contentLoaded.textures[placement.texture_tag_name];
								//console.log('TexturePlacement['+p+']', placement, "\n", placementTexture);

								// Should be fixed, but add these checks in case
								if (!placementTexture) {
									console.warn('MissingPlacementTexture', placement.texture_tag_name, contentLoaded.textures);
									continue;
								}
								if (!placementTexture.texture.image) {
									console.warn('TextureNotLoaded', placementTexture);
									continue;
								}
								ctx.drawImage(placementTexture.texture.image, placement.position_x, placement.position_y, placement.texture_size_x, placement.texture_size_y);
							}

							var dataUrl = canvas.toDataURL('image/png');

							loadDataTexture(dataUrl, texturePlate.reference_id);
							textureData = contentLoaded.platedTextures[texturePlate.reference_id];
						} else {
							//console.log('HasTexture', texture);
						}
						geometryTextures[texturePlateId] = textureData.texture;
					}
				}
				else if (texturePlates.length > 1) {
					console.warn('MultipleTexturePlates?', texturePlates);
				}
				else {
					// This geometry uses static textures
					// Spasm assumes all parts share the same shader, which generally works but has the potential for
					// cross contaminating textures in other parts
					//console.log(texturePlates, metadata.render_model.render_meshes);
					//if (metadata.render_model.render_meshes.length > 0) {
					//	var renderMesh = metadata.render_model.render_meshes[0];
					//	var stagePartList = renderMesh.stage_part_list;
					//	for (var i=0; i<stagePartList.length; i++) {
					//		var stagePart = stagePartList[i];
					//		var shader = stagePart.shader;
					//		console.log(stagePart);
					//		if (stagePart.shader === undefined) continue;
					//		var staticTextures = shader.static_textures;
					//		console.log(staticTextures);
					//		if (staticTextures && staticTextures.length >= 5) {
					//			var diffuseTextureId = staticTextures[0];
					//			var normalTextureId = staticTextures[2];
					//			var gearstackTextureId = staticTextures[4];
					//
					//			geometryTextures['diffuse'] = contentLoaded.textures[diffuseTextureId].texture;
					//			geometryTextures['normal'] = contentLoaded.textures[normalTextureId].texture;
					//			geometryTextures['gearstack'] = contentLoaded.textures[gearstackTextureId].texture;
					//
					//			console.log('TextureSet['+geometryHash+']', diffuseTextureId, normalTextureId, gearstackTextureId);
					//		}
					//	}
					//}
				}

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

					//if (m != 1) continue;

					if (parts.length == 0) {
						console.log('Skipped RenderMesh['+m+']: No parts');
						continue;
					} // Skip meshes with no parts

					//console.log('RenderMesh['+m+']', renderMesh);

					// Spasm.Renderable.prototype.render
					var partCount = -1;
					for (var p=0; p<parts.length; p++) {
						var part = parts[p];

						// Skip any lods not matchin "_lod_category_01" ?
						if (part.lodCategory.name.indexOf('0') == -1) {
							//console.log('SkippedPart['+p+']', part.lodCategory.name, part);
							continue;
						}

						partCount++;

						//if (partCount != 1) continue;

						//console.log('RenderMeshPart['+p+'|'+partCount+']', part);

						// Load Material
						if (loadTextures) {
							var dye = gearDyes[part.gearDyeSlot];

							var textures = {
								diffuse: null,
								normal: null,
								gearstack: null,
							};
							for (var textureId in geometryTextures) {
								textures[textureId] = geometryTextures[textureId];
							}

							// Part has a shader and possibly static textures
							if (part.shader) {
								//console.warn('PartShader', part.shader);
								if (part.staticTextures) {
									for (var s=0; s<part.staticTextures.length; s++) {
										var staticTextureId = part.staticTextures[s];
										var staticTexture = contentLoaded.textures[staticTextureId];
										//console.log(staticTextureId, staticTexture);
										if (!staticTexture) continue;
										switch(part.shader+''+s) {
											// 7n standard shader
											case '70':
												textures.diffuse = staticTexture.texture; break;
											case '71':
												textures.dyeDiffuse = staticTexture.texture; break;
											case '72':
												textures.normal = staticTexture.texture; break;
											case '73':
												textures.dyeNormal = staticTexture.texture; break;
											case '74':
												textures.gearstack = staticTexture.texture; break;
											// 9n cubemap?
										}
									}
								}
							}

							//console.log('RenderMeshPartDye['+part.gearDyeSlot+']', dye);
							//console.log('RenderMeshPartTextures', textures);
							//var material = new THREE.MeshPhongMaterial({
							var materialParams = {
								side: THREE.DoubleSide,
								overdraw: true,
								skinning: hasBones,
								map: textures.diffuse,
								normalMap: textures.normal,
								gearstackMap: textures.gearstack,

								// Dye Properties
								usePrimaryColor: part.usePrimaryColor,

								//isCloth: dye.isCloth,
								//blendMode: dye.blendMode,
								//primaryColor: dye.primaryColor,
								//secondaryColor: dye.secondaryColor,
								//detailTransform: dye.detailTransform,
								//detailNormalContributionStrength: dye.detailNormalContributionStrength,
								//decalAlphaMapTransform: dye.decalAlphaMapTransform,
								//decalBlendOption: dye.decalBlendOption,
								//specularProperties: dye.specularProperties,
								//subsurfaceScatteringStrength: dye.subsurfaceScatteringStrength,
								//
								//dyeDiffuse: dye.diffuse,//dyeDiffuse,
								//dyeNormal: dye.normal,//dyeNormal,
								//dyeDecal: dye.decal,//dyeDecal
								//dyePrimaryDiffuse: dye.primaryDiffuse,
								//dyeSecondaryDiffuse: dye.secondaryDiffuse
							};

							if (dye) {
								for (var dyeKey in dye) {
									var paramKey = dyeKey;
									switch(dyeKey) {
										case 'hash':
										case 'investmentHash':
										case 'slotTypeIndex':
										case 'variant':
											paramKey = '';
											break;
										case 'diffuse': paramKey = 'dyeDiffuse'; break;
										case 'normal': paramKey = 'dyeNormal'; break;
										case 'decal': paramKey = 'dyeDecal'; break;
										case 'primaryDiffuse': paramKey = 'dyePrimaryDiffuse'; break;
										case 'secondaryDiffuse': paramKey = 'dyeSecondaryDiffuse'; break;
									}
									if (paramKey) materialParams[paramKey] = dye[dyeKey];
								}
							} else {
								console.warn('MissingGearDye['+part.gearDyeSlot+']', contentLoaded);
							}

							// Check for vertex colors
							if (vertexBuffer.length > 0 && vertexBuffer[0].color0 !== undefined) {
								console.warn('VertexColors');
							//	materialParams.vertexColors = THREE.VertexColors;
							}

							var material = new THREE.TGXMaterial(materialParams);
							materials.push(material);
						}

						var materialIndex = materials.length > 0 ? materials.length-1 : 0;

						// Load Vertex Stream
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

							var faceColors = [];

							var detailVertexUvs = [];

							var faceIndex = start+i;

							var tri = part.primitiveType === 3 || i & 1 ? [0, 1, 2] : [2, 1, 0];

							for (var j=0; j<3; j++) {
								var index = indexBuffer[faceIndex+tri[j]];
								var vertex = vertexBuffer[index];
								var normal = vertex.normal0;
								var uv = vertex.texcoord0;
								var color = vertex.color0;

								var detailUv = vertex.texcoord2;
								if (!detailUv) detailUv = [0, 0];

								faceVertex.push(index+vertexOffset);
								faceVertexNormals.push(new THREE.Vector3(normal[0], normal[1], normal[2]));

								var uvu = uv[0]*texcoordScale[0]+texcoordOffset[0];
								var uvv = uv[1]*texcoordScale[1]+texcoordOffset[1];
								faceVertexUvs.push(new THREE.Vector2(uvu, uvv));

								if (color) faceColors.push(new THREE.Color(color[0], color[1], color[2]));

								//if (i==0 && j==0) {
								//	console.log('Vertex['+i+','+j+']', vertex);
								//}

								detailVertexUvs.push(new THREE.Vector2(uvu*detailUv[0], uvv*detailUv[1]));
							}
							var face = new THREE.Face3(faceVertex[0], faceVertex[1], faceVertex[2], faceVertexNormals);
							face.materialIndex = materialIndex;
							if (faceColors.length > 0) face.vertexColors = faceColors;
							geometry.faces.push(face);
							geometry.faceVertexUvs[0].push(faceVertexUvs);

							if (geometry.faceVertexUvs.length < 2) geometry.faceVertexUvs.push([]);
							geometry.faceVertexUvs[1].push(detailVertexUvs);
						}
					}

					for (var v=0; v<vertexBuffer.length; v++) {
						var vertex = vertexBuffer[v];
						var position = vertex.position0;
						var x = position[0];//*positionScale[0]+positionOffset[0];
						var y = position[1];//*positionScale[1]+positionOffset[1];
						var z = position[2];//*positionScale[2]+positionOffset[2];
						if (platform == 'web') { // Ignored on mobile?
							x = x*positionScale[0]+positionOffset[0];
							y = y*positionScale[1]+positionOffset[1];
							z = z*positionScale[2]+positionOffset[2];
						}
						geometry.vertices.push(new THREE.Vector3(x, y, z));

						// Set bone weights
						var boneIndex = position[3];//Math.abs((positionOffset[3] * 32767.0) + 0.01);
						//var bone = geometry.bones[boneIndex];

						var blendIndices = vertex.blendindices0 ? vertex.blendindices0 : [boneIndex, 255, 255, 255];
						var blendWeights = vertex.blendweight0 ? vertex.blendweight0: [1, 0, 0, 0];

						var skinIndex = [0, 0, 0, 0];
						var skinWeight = [0, 0, 0, 0];

						var totalWeights = 0;
						for (var w=0; w<blendIndices.length; w++) {
							if (blendIndices[w] == 255) break;
							skinIndex[w] = blendIndices[w];
							skinWeight[w] = blendWeights[w];
							totalWeights += blendWeights[w]*255;
						}
						if (totalWeights != 255) console.error('MissingBoneWeight', 255-totalWeights, i, j);

						geometry.skinIndices.push(new THREE.Vector4().fromArray(skinIndex));
						geometry.skinWeights.push(new THREE.Vector4().fromArray(skinWeight));
						//geometry.skinIndices[index+vertexOffset].fromArray(skinIndex);
						//geometry.skinWeights[index+vertexOffset].fromArray(skinWeight);
					}
					vertexOffset += vertexBuffer.length;
				}
			}

			//geometry.mergeVertices();
			//geometry.computeVertexNormals();
		}

		// Spasm.Skeleton.prototype.onLoadSkeletonSuccess
		// TODO Fix bone loading
		function parseSkeleton() {
			var bones = [];
			var absBones = [];
			if (contentLoaded.skeleton) {
				var definition = contentLoaded.skeleton.definition;
				//var transforms = definition.default_inverse_object_space_transforms;
				var inverseTransforms = definition.default_inverse_object_space_transforms;
				var transforms = definition.default_object_space_transforms;
				//transforms = inverseTransforms;
				var nodes = definition.nodes;

				for (var n=0; n<nodes.length; n++) {
					var node = nodes[n];
					var inverseTransform = inverseTransforms[n];
					var transform = transforms[n];

					//if (n > 26) continue; // For now don't worry about fingers, facial rigs, etc

					//var ts = transform.ts;
					var offset = transform.offset;
					var origin = transform.origin || [0, 0, 0]; // ts[0-2];
					var r = transform.r || [0, 0, 0, 1];
					var s = transform.scale || 1; // ts[3];
					var parentNode = bones[node.parent_node_index];

					var pos = new THREE.Vector3(origin[0], origin[1], origin[2]);
					var scale = new THREE.Vector3(s, s, s);
					var rotq = new THREE.Quaternion(r[0], r[1], r[2], r[3]);
					var euler = new THREE.Euler().setFromQuaternion(rotq);

					euler.set(0, 0, 0);
					rotq.setFromEuler(euler);

					var absPos = new THREE.Vector3(pos.x, pos.y, pos.z);
					var absRotq = new THREE.Quaternion(rotq.x, rotq.y, rotq.z, rotq.w);
					var absEuler = new THREE.Euler().setFromQuaternion(absRotq);

					var absScale = new THREE.Vector3(scale.x, scale.y, scale.z);

					if (n == 0) {
						//euler.y = utils.degreesToRadian(-90);
						//euler.set(utils.degreesToRadian(-90), 0, utils.degreesToRadian(-90));
						//rotq.setFromEuler(euler);
					}

					if (parentNode) {
						//pos.set(parentNode.pos[0]-pos.x, parentNode.pos[1]-pos.y, parentNode.pos[2]-pos.z);

						absPos.x -= parentNode.pos[0];
						absPos.y -= parentNode.pos[1];
						absPos.z -= parentNode.pos[2];

						var parentRotq = new THREE.Quaternion().fromArray(parentNode.rotq);
						var parentEuler = new THREE.Euler().setFromQuaternion(parentRotq);


						absEuler.x -= parentEuler.x;
						absEuler.y -= parentEuler.y;
						absEuler.z -= parentEuler.z;
						//absRotq.setFromEuler(absEuler);

						absRotq = absRotq.multiply(parentRotq.inverse());
					}

					//if (n == 0 || n == 1 || n == 3 || n == 4 || n == 6)
					if (n <= -1/*26*/) console.log('Bone['+n+']', node.name.string+':'+node.name.hash, node.parent_node_index,
						"\n"+'pos: '+pos.x+', '+pos.y+', '+pos.z,
						"\n"+'apos: '+absPos.x+', '+absPos.y+', '+absPos.z,
						//"\n"+'lpos: '+logPos.x+', '+logPos.y+', '+logPos.z,
						//"\n"+'ipos: '+inversePos.x+', '+inversePos.y+', '+inversePos.z,

						//"\n"+'orotq: '+r[0]+', '+r[1]+', '+r[2]+', '+r[3],
						//	"\n"+'rotq: '+rotq.x+','+rotq.y+','+rotq.z+','+rotq.w,
						"\n"+'rot: '+Math.round(utils.radianToDegrees(euler.x))+', '+Math.round(utils.radianToDegrees(euler.y))+', '+Math.round(utils.radianToDegrees(euler.z)),
						"\n"+'arot: '+Math.round(utils.radianToDegrees(absEuler.x))+', '+Math.round(utils.radianToDegrees(absEuler.y))+', '+Math.round(utils.radianToDegrees(absEuler.z)),

						//"\n"+'irot: '+Math.round(utils.radianToDegrees(inverseEuler.x))+', '+Math.round(utils.radianToDegrees(inverseEuler.y))+', '+Math.round(utils.radianToDegrees(inverseEuler.z)),
						//"\n"+'lrot: '+Math.round(utils.radianToDegrees(logEuler.x))+', '+Math.round(utils.radianToDegrees(logEuler.y))+', '+Math.round(utils.radianToDegrees(logEuler.z)),
						////'rotq: '+r[0]+'/'+rotq.x+','+r[1]+'/'+rotq.y+','+r[2]+'/'+rotq.z+','+r[3]+'/'+rotq.w,
						//'scale: '+s,
						"\n"+'scale: '+scale.x+', '+scale.y+', '+scale.z
						//"\n"+'iscale: '+inverseScale.x+', '+inverseScale.y+', '+inverseScale.z
						//	'origin: '+Math.round(offset[0]*100)+', '+Math.round(offset[1]*100)+', '+Math.round(offset[2]*100)
						//origin,
						//r,
						//s,
						//offset,
						//pos,
						//rotq,
						//scale
					);

					bones.push({
						parent: node.parent_node_index,
						nodeHash: node.name.hash,
						name: node.name.string,
						pos: pos.toArray(),
						rotq: rotq.toArray(),
						scl: scale.toArray()
					});
					absBones.push({
						parent: node.parent_node_index,
						nodeHash: node.name.hash,
						name: node.name.string,
						pos: absPos.toArray(),
						rotq: absRotq.toArray(),
						scl: absScale.toArray()
					});
				}
				//console.log('Bones', bones, absBones);
			}
			return absBones;
		}

		function parseAnimation(bones) {
			console.log('Animation['+animationPath+']', contentLoaded.animations);
			var animation = contentLoaded.animations[0];

			var animRate = 30;
			var animLength = animation.duration_in_frames / animRate;

			var staticBoneData = animation.static_bone_data;
			var staticScaleControlMap = staticBoneData.scale_control_map;
			var staticRotationControlMap = staticBoneData.rotation_control_map;
			var staticTranslationControlMap = staticBoneData.translation_control_map;
			var staticTransforms = staticBoneData.transform_stream_header.streams.frames[0];

			var staticScales = staticTransforms.scales;
			var staticRotations = staticTransforms.rotations;
			var staticTranslations = staticTransforms.translations;

			var animatedBoneData = animation.animated_bone_data;
			var animatedScaleControlMap = animatedBoneData.scale_control_map;
			var animatedRotationControlMap = animatedBoneData.rotation_control_map;
			var animatedTranslationControlMap = animatedBoneData.translation_control_map;
			var animatedTransformFrames = animatedBoneData.transform_stream_header.streams.frames;

			var hierarchy = [];

			for (var i=0; i<animation.frame_count; i++) {
				var animatedTransforms = animatedTransformFrames[i];
				var animatedScales = animatedTransforms.scales;
				var animatedRotations = animatedTransforms.rotations;
				var animatedTranslations = animatedTransforms.translations;

				for (var j=0; j<animation.node_count; j++) {
					var staticScaleIndex = staticScaleControlMap.indexOf(j);
					var staticRotationIndex = staticRotationControlMap.indexOf(j);
					var staticTranslationIndex = staticTranslationControlMap.indexOf(j);

					var animatedScaleIndex = animatedScaleControlMap.indexOf(j);
					var animatedRotationIndex = animatedRotationControlMap.indexOf(j);
					var animatedTranslationIndex = animatedTranslationControlMap.indexOf(j);

					var scale = staticScaleIndex >= 0 ?
						staticScales[staticScaleIndex] : animatedScales[animatedScaleIndex];
					var rotation = staticRotationIndex >= 0 ?
						staticRotations[staticRotationIndex] : animatedRotations[animatedRotationIndex];
					var translation = staticTranslationIndex >= 0
						?
						staticTranslations[staticTranslationIndex]
						: animatedTranslations[animatedTranslationIndex];

					var bone = bones[j];

					//console.log('Frame['+i+'-'+j+']', translation, rotation, scale, bone);
					if (i == 0) {
						hierarchy.push({
							parent: bone.parent,
							name: bone.name,
							keys: []
						});
					}
					var node = hierarchy[j];
					node.keys.push({
						time: i/animRate,
						pos: translation,
						rot: rotation,
						scl: [scale, scale, scale]
					});
				}
				//break;
			}

			return {
				name: animationPath.split('.js')[0],
				fps: animRate,
				length: animLength,
				hierarchy: hierarchy
			};
		}

		// Spasm.TGXAssetLoader.prototype.getGearDyes
		function parseGearDyes(gear) {
			var dyeGroups = {
				customDyes: gear.custom_dyes || [],
				defaultDyes: gear.default_dyes || [],
				lockedDyes: gear.locked_dyes || []
			};

			var gearDyeGroups = {};

			for (var dyeType in dyeGroups) {
				var dyes = dyeGroups[dyeType];
				var gearDyes = [];
				for (var i=0; i<dyes.length; i++) {
					var dye = dyes[i];
					var dyeTextures = dye.textures;
					var materialProperties = dye.material_properties;
					console.log('GearDye['+dyeType+']['+i+']', dye);

					var primaryColor = dye.material_properties.primary_color;
					var secondaryColor = dye.material_properties.secondary_color;

					if (game == 'destiny2') {
						primaryColor = dye.material_properties.primary_material_params;
						secondaryColor = dye.material_properties.secondary_material_params;
					}

					if (!primaryColor) console.warn('MissingPrimaryColor['+dyeType+']', dye);
					if (!secondaryColor) console.warn('MissingSecondaryColor['+dyeType+']', dye);

					var gearDyeTextures = {

					};

					for (var dyeTextureId in dyeTextures) {
						var dyeTexture = dyeTextures[dyeTextureId];
						//console.log('DyeTexture['+dyeTextureId+']', dyeTexture);

						if (dyeTexture.reference_id && contentLoaded.textures[dyeTexture.reference_id] !== undefined) {
							gearDyeTextures[dyeTextureId] = contentLoaded.textures[dyeTexture.reference_id];
						}
						else if (dyeTexture.name && contentLoaded.textures[dyeTexture.name] !== undefined) {
							gearDyeTextures[dyeTextureId] = contentLoaded.textures[dyeTexture.name];
						}
					}

					//console.log('DyeTextures', gearDyeTextures);

					// Spasm.GearDye
					var gearDye = {
						//identifier: dye.identifier, // Doesn't exist?
						hash: dye.hash,
						investmentHash: dye.investment_hash,
						slotTypeIndex: dye.slot_type_index,
						variant: dye.variant,

						diffuse: gearDyeTextures.diffuse ? gearDyeTextures.diffuse.texture : null,
						normal: gearDyeTextures.normal ? gearDyeTextures.normal.texture : null,
						decal: gearDyeTextures.decal ? gearDyeTextures.decal.texture : null,

						// Not used?
						primaryDiffuse: gearDyeTextures.primary_diffuse ? gearDyeTextures.primary_diffuse.texture : null,
						secondaryDiffuse: gearDyeTextures.secondary_diffuse ? gearDyeTextures.secondary_diffuse.texture : null,

						//blendMode: dye.blend_mode,
						//isCloth: dye.cloth,

						// Material Properties
						primaryColor: primaryColor ? new THREE.Color(primaryColor[0], primaryColor[1], primaryColor[2]) : new THREE.Color(1, 0, 0),
						secondaryColor: secondaryColor ? new THREE.Color(secondaryColor[0], secondaryColor[1], secondaryColor[2]) : new THREE.Color(0, 1, 0),
						detailTransform: dye.material_properties.detail_transform,
						detailNormalContributionStrength: dye.material_properties.detail_normal_contribution_strength,
						decalAlphaMapTransform: dye.material_properties.decal_alpha_map_transform,
						decalBlendOption: dye.material_properties.decal_blend_option,
						specularProperties: dye.material_properties.specular_properties,
						subsurfaceScatteringStrength: dye.material_properties.subsurface_scattering_strength
					};
					//console.log(gearDye);
					gearDyes.push(gearDye);
				}
				gearDyeGroups[dyeType] = gearDyes;
			}

			//console.log('GearDyes', gearDyeGroups);

			// Spasm.GearRenderable.prototype.getResolvedDyeList
			var resolvedDyes = [];
			var dyeTypeOrder = ['defaultDyes', 'customDyes', 'lockedDyes'];
			for (var i=0; i<dyeTypeOrder.length; i++) {
				var dyeType = dyeTypeOrder[i];
				var dyes = gearDyeGroups[dyeType];
				for (var j=0; j<dyes.length; j++) {
					var dye = dyes[j];
					resolvedDyes[dye.slotTypeIndex] = dye;
				}
			}

			//console.log('ResolvedGearDyes', resolvedDyes);

			return resolvedDyes;
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
				//console.log('RenderMesh['+renderMeshIndex+']', renderMesh.stage_part_offsets, renderMesh);
				var parts = [];
				var partIndexList = [];
				var stagesToRender = [0]; // Hardcoded?
				for (var r=0; r<stagesToRender.length; r++) {
					var stageIndex = stagesToRender[r];
					var start = renderMesh.stage_part_offsets[stageIndex];
					var end = renderMesh.stage_part_offsets[stageIndex+1];
					for (var i=start; i<=end; i++) {
						var stagePart = renderMesh.stage_part_list[i];
						if (!stagePart) {
							console.warn('MissingStagePart['+renderMeshIndex+']['+i+'/'+end+']['+stageIndex+']');
							continue;
						}
						if (partIndexList.indexOf(i) != -1) {
							console.warn('DuplicatePart['+renderMeshIndex+']['+i+'/'+end+']['+stageIndex+']');
							continue;
						}
						partIndexList.push(i);
						//console.log('StagePart['+renderMeshIndex+']['+i+']['+stageIndex+']', stagePart, partIndexList);
						parts.push(parseStagePart(stagePart));
					}
				}

				//var parts = [];
				//var partIndexList = [];
				//for (var r=0; r<renderMesh.stage_part_offsets.length; r+= 2) {
				//	var stageIndex = r;
				//	var start = renderMesh.stage_part_offsets[stageIndex];
				//	var end = renderMesh.stage_part_offsets[stageIndex+1];
				//	for (var i=start; i<=end; i++) {
				//		var stagePart = renderMesh.stage_part_list[i];
				//		if (!stagePart) {
				//			console.warn('MissingStagePart['+renderMeshIndex+']['+i+'/'+end+']['+stageIndex+']');
				//			continue;
				//		}
				//		if (partIndexList.indexOf(i) != -1) {
				//			console.warn('DuplicatePart['+renderMeshIndex+']['+i+'/'+end+']['+stageIndex+']');
				//			continue;
				//		}
				//		partIndexList.push(i);
				//		console.log('StagePart['+renderMeshIndex+']['+i+']['+stageIndex+']', stagePart);
				//		parts.push(parseStagePart(stagePart));
				//	}
				//}

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

				//console.log('VertexBuffer['+vertexBufferIndex+']', vertexBufferInfo.file_name, vertexBufferInfo, "\n"+'Elements', format);

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
										// Turns out all that icky binary2float conversion stuff can be done with a typed array, who knew?
										values = new Float32Array(vertexBufferData.buffer, vertexOffset, count);
										vertexOffset += count*4;
										//console.log(values);
										//console.log(floatArray());
										//for(j=0; j<count; j++) {
										//	value = utils.float(vertexBufferData, vertexOffset);
										//	values.push(value);
										//	vertexOffset += 4;
										//}
										break;
								}
								break;
							}
						}

						var semantic = element.semantic.replace('_tfx_vb_semantic_', '');
						switch(semantic) {
							case 'position':
							case 'normal':
							case 'tangent': // Not used
							case 'texcoord':
							case 'blendweight': // Bone weights 0-1
							case 'blendindices': // Bone indices, 255=none, index starts at 1?
							case 'color':
								break;
							default:
								console.warn('Unknown Vertex Semantic', semantic, element.semantic_index, values);
								break;
						}
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

			var part = {
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

			if (stagePart.shader) {
				var shader = stagePart.shader;
				//console.log('StagePartShader', shader);
				part.shader = shader.type;
				part.staticTextures = shader.static_textures ? shader.static_textures : [];
			}

			return part;
		}

		return function(items, options, onLoad, onProgress, onError) {
			game = options.game;
			basepath = options.basepath;
			contentpath = basepath+'/common/'+game+'_content';
			platform = options.platform;
			animationPath = options.animationPath;
			//itemHash = options.itemHash;
			isFemale = options.isFemale;
			classHash = options.classHash;
			loadSkeleton = options.loadSkeleton;
			loadAnimation = options.loadAnimation;
			loadTextures = options.loadTextures;
			noCache = options.noCache;
			onLoadCallback = onLoad;
			onProgressCallback = onProgress;
			onErrorCallback = onError;

			contentLoaded = {
				gear: {},
				geometry: {},
				textures: {},
				platedTextures: {},
				mobileTextures: {},
				skeleton: null,
				animations: []
			};
			assetLoadCount = 0;
			assetLoadTotal = 0;
			contentParsed = false;

			for (var i=0; i<items.length; i++) {
				var data = items[i];
				if (!data.gearAsset) {
					console.warn('MissingGearAsset['+i+']', data);
					continue;
				}
				loadAssetManifest(data.gearAsset);
			}
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
		if (url.indexOf('geometry') != -1) request.responseType = 'arraybuffer';

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

// A pure javascript loader for querying the mobile manifest.
// It's dependent on the following libraries:
// - zip.js (http://gildas-lormeau.github.io/zip.js/)
// - sql.js (https://github.com/kripken/sql.js)
(function() {
	var manifestBlob = null;
	var apiKey = THREE.TGXLoader.APIKey;
	var apiBasepath = THREE.TGXLoader.APIBasepath;
	var basepath = THREE.TGXLoader.Basepath;

	// https://github.com/DestinyItemManager/DIM/blob/master/src/scripts/services/dimManifestService.factory.js
	// This manifest loader is based on DIM's code
	function loadDatabase(response, onLoad, onProgress, onError) {
		var assetDatabases = response.Response.mobileGearAssetDataBases;
		if (assetDatabases.length > 0) {
			var assetDatabase = assetDatabases[assetDatabases.length - 1];
			var assetDatabaseUrl = basepath+assetDatabase.path;

			//console.log('Database', assetDatabaseUrl);

			// http://gildas-lormeau.github.io/zip.js/
			zip.useWebWorkers = true;
			zip.workerScripts = {
				inflater: ['/lib/zipjs/z-worker.js', '/lib/zipjs/inflate.js']
			};
			zip.createReader(new zip.HttpReader(assetDatabaseUrl), function(zipReader) {
				zipReader.getEntries(function(entries) {
					if (entries.length == 0) {
						console.error('Empty Database');
						return;
					}
					entries[0].getData(new zip.BlobWriter(), function(blob) {
						var blobReader = new FileReader();
						blobReader.addEventListener("error", onError);
						blobReader.addEventListener("load", function() {
							zipReader.close(function() {
								manifestBlob = new Uint8Array(blobReader.result);
								if (onLoad) onLoad();
							});
						});
						blobReader.readAsArrayBuffer(blob);
					});
				});
			}, onError);
		} else {
			console.error('Empty Database');
		}
	}

	function TGXManifest(manager, options) {
		this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;
		if (options === undefined) options = {};
		if (options.apiKey !== undefined) apiKey = options.apiKey;
		if (options.apiBasepath !== undefined) apiBasepath = options.apiBasepath;
		if (options.basepath !== undefined) basepath = options.basepath;

	}
	TGXManifest.isCapable = function() {
		var isCapable = true;
		if (!window.zip) {
			console.warn('Missing zip.js library.');
			isCapable = false;
		}
		if (!window.SQL) {
			console.warn('Missing sql.js library.');
			isCapable = false;
		}
		return isCapable;
	};
	Object.assign(TGXManifest.prototype, {
		load: function(onLoad, onProgress, onError) {
			var scope = this;
			var manifestUrl = apiBasepath+'/Manifest/';
			var loader = new THREE.BungieNetLoader(this.manager);
			loader.load(manifestUrl, apiKey, function(response) {
				response = JSON.parse(response);
				//console.log('Manifest', response);
				if (response.ErrorCode == 1) {
					loadDatabase(response, function() {
						if (onLoad) onLoad(scope);
					}, onProgress, onError);
				} else {
					console.error('Bungie Error Response', response);
				}
			}, onProgress, onError);
		},
		getAsset: function(id, onLoad, onProgress, onError) {
			var scope = this;
			if (!manifestBlob) {
				scope.load(function() {
					scope.getAsset(id, onLoad, onProgress, onError);
				}, onProgress, onError);
				return;
			}
			//console.log(manifestBlob);
			// https://github.com/kripken/sql.js
			var db = new SQL.Database(manifestBlob);

			var res = db.exec("SELECT name FROM sqlite_master WHERE type='table'");
			//console.log(res);

			var key = 'id';
			var where = ' WHERE '+key+'='+id+' OR '+key+'='+(id-4294967296);
			var res = db.exec("SELECT * FROM DestinyGearAssetsDefinition"+where);
			if (res.length > 0) {
				var data = {
					requestedId: id,
					gearAsset: JSON.parse(res[0].values[0][1])
				};
				onLoad(data);
				return;
			}
			console.error('Item Not Found', id);
		}
	});
	THREE.TGXManifest = TGXManifest;
})();

// Custom ShaderMaterial that implements Destiny gear dyes
(function() {
	function parseColor(color) {
		if (!color) color = 0;
		if (typeof color == 'number') color = new THREE.Color().setHex(color);
		return color;
	}
	function colorToFloat(color) {
		color = parseColor(color);
		return new THREE.Vector3(color.r, color.g, color.b);
	}

	function TGXMaterial(params) {
		if (!params) params = {};

		var shaderLib = THREE.ShaderLib.phong;
		var uniforms = THREE.UniformsUtils.clone(shaderLib.uniforms);
		var vertexShader = shaderLib.vertexShader;
		var fragmentShader = shaderLib.fragmentShader;

		THREE.ShaderMaterial.call(this, {
			uniforms: uniforms,
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
			lights: true,
			fog: true
		});

		this.map = null;
		this.normalMap = null;
		this.gearstackMap = null;

		this.dyeDiffuse = null;
		this.dyeNormal = null;
		this.dyeDecal = null;
		this.dyePrimaryDiffuse = null;
		this.dyeSecondaryDiffuse = null;

		//console.log('MaterialParams', params);

		this.isCloth = false;
		this.blendMode = 0;
		this.usePrimaryColor = true;
		this.primaryColor = new THREE.Color(0x000000);
		this.secondaryColor = new THREE.Color(0x000000);
		this.detailTransform = new THREE.Vector4(0, 0, 0, 0);
		this.detailNormalContributionStrength = new THREE.Vector4(0, 0, 0, 0);
		this.decalAlphaMapTransform = new THREE.Vector4(0, 0, 0, 0);
		this.decalBlendOption = 0;
		this.specularProperties = new THREE.Vector4(0, 0, 0, 0);
		this.subsurfaceScatteringStrength = new THREE.Vector4(0, 0, 0, 0);

		this.setValues(params);
		this.extensions.derivatives = true;

		this.update();
	}
	TGXMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);
	TGXMaterial.prototype.constructor = TGXMaterial;
	TGXMaterial.prototype.copy = function(source) {
		THREE.ShaderMaterial.prototype.copy.call( this, source );
		if (source.map !== undefined) this.map = source.map;
		if (source.normalMap !== undefined) this.normalMap = source.normalMap;
		if (source.gearstackMap !== undefined) this.gearstackMap = source.gearstackMap;

		if (source.dyeDiffuse !== undefined) this.dyeDiffuse = source.dyeDiffuse;
		if (source.dyeNormal !== undefined) this.dyeNormal = source.dyeNormal;
		if (source.dyeDecal !== undefined) this.dyeDecal = source.dyeDecal;
		if (source.dyePrimaryDiffuse !== undefined) this.dyePrimaryDiffuse = source.dyePrimaryDiffuse;
		if (source.dyeSecondaryDiffuse !== undefined) this.dyeSecondaryDiffuse = source.dyeSecondaryDiffuse;

		if (source.isCloth !== undefined) this.isCloth = source.isCloth;
		if (source.blendMode !== undefined) this.blendMode = source.blendMode;
		if (source.usePrimaryColor !== undefined) this.usePrimaryColor = source.usePrimaryColor;
		if (source.primaryColor !== undefined) this.primaryColor = source.primaryColor;
		if (source.secondaryColor !== undefined) this.secondaryColor = source.secondaryColor;
		if (source.detailTransform !== undefined) this.detailTransform = source.detailTransform;
		if (source.detailNormalContributionStrength !== undefined) this.detailNormalContributionStrength = source.detailNormalContributionStrength;
		if (source.decalAlphaMapTransform !== undefined) this.decalAlphaMapTransform = source.decalAlphaMapTransform;
		if (source.decalBlendOption !== undefined) this.decalBlendOption = source.decalBlendOption;
		if (source.specularProperties !== undefined) this.specularProperties = source.specularProperties;
		if (source.subsurfaceScatteringStrength !== undefined) this.subsurfaceScatteringStrength = source.subsurfaceScatteringStrength;

		this.update();
		return this;
	};
	TGXMaterial.prototype.update = function() {
		var uniforms = this.uniforms;
		var vertexShader = this.vertexShader;
		var fragmentShader = this.fragmentShader;
		var defines = {};
		if (this.skinning) {
			defines['USE_SKINNING'] = '';
		}
		if (this.map) {
			defines['USE_MAP'] = '';
			uniforms.map = {value: this.map};
		}
		if (this.normalMap) {
			defines['USE_NORMALMAP'] = '';
			uniforms.normalMap = {value: this.normalMap};
		}
		if (this.gearstackMap) {
			defines['USE_GEARSTACKMAP'] = '';
			uniforms.gearstackMap = {value: this.gearstackMap};
		}

		uniforms.blendMode = {value: this.blendMode};
		if (this.isCloth) {
			defines['USE_CLOTH_DYE'] = '';
		}
		uniforms.usePrimaryColor = {value: this.usePrimaryColor};
		uniforms.primaryColor = {value: this.primaryColor};
		uniforms.secondaryColor = {value: this.secondaryColor};
		uniforms.detailTransform = {value: this.detailTransform};
		uniforms.detailNormalContributionStrength = {value: this.detailNormalContributionStrength};
		uniforms.decalAlphaMapTransform = {value: this.decalAlphaMapTransform};
		uniforms.decalBlendOption = {value: this.decalBlendOption};
		uniforms.specularProperties = {value: this.specularProperties};
		uniforms.subsurfaceScatteringStrength = {value: this.subsurfaceScatteringStrength};

		defines['USE_DYE'] = '';

		if (this.dyeDiffuse) {
			defines['USE_DYEDIFFUSE'] = '';
			uniforms.dyeDiffuse = {value: this.dyeDiffuse};
		}
		if (this.dyeNormal) {
			defines['USE_DYENORMAL'] = '';
			uniforms.dyeNormal = {value: this.dyeNormal};
		}
		//if (this.dyeDecal) {
		//	defines['USE_DYEDECAL'] = '';
		//	uniforms.dyeDecal = {value: this.dyeDecal};
		//}

		if (vertexShader.indexOf('USE_DYE') == -1) {
			var uv2ParsVertex = [
				"#ifdef USE_DYE",
				"attribute vec2 uv2;",
				"varying vec2 vUv2;",
				"uniform vec4 detailTransform;",
				"#endif"
			];

			vertexShader = this.insertAfter('#include <uv2_pars_vertex>', vertexShader, uv2ParsVertex);

			var uv2Vertex = [
				"#ifdef USE_DYE",
				"vUv2 = (uv2 * detailTransform.xy) + detailTransform.zw;",
				// vertexShader.push("v_texcoord2 = ((texcoord * a_texcoord2) * u_detail_transform.xy) + u_detail_transform.zw;"),
				"#endif"
			];
			vertexShader = this.insertAfter('#include <uv2_vertex>', vertexShader, uv2Vertex);
		}

		if (fragmentShader.indexOf('USE_DYE') == -1) {
			var gearstackParsFragment = [
				"#ifdef USE_DYE",
				"uniform sampler2D gearstackMap;",
				"uniform sampler2D dyeDiffuse;",
				"uniform sampler2D dyeNormal;",

				"varying vec2 vUv2;",

				"uniform float blendMode;",
				"uniform bool usePrimaryColor;",
				"uniform vec3 primaryColor;",
				"uniform vec3 secondaryColor;",

				//"#define saturate(value) clamp(value, 0.0, 1.0)",
				"const float gamma_correction_power = 2.2;",
				"const float gamma_correction_power_inverse = 1.0/2.2;",
				"vec4 blend_overlay(vec4 back, vec4 front)",
				"{",
					"return front * saturate(back * 4.0) + saturate(back - 0.25);",
				"}",
				"#endif"
			];
			fragmentShader = this.insertAfter('#include <map_pars_fragment>', fragmentShader, gearstackParsFragment);

			// TODO Fix normal detail
			//var gearstackNormalFragment = [
			//	"#ifdef USE_DYENORMAL",
			//	"vec4 color_dye_normal = texture2D(dyeNormal, vUv2);",
			//	"color_dye_normal = color_dye_normal * 2.0 - 1.0;",
			//	"vNormal = vNormal + color_dye_normal.xy;",
			//	"#endif"
			//];
			//fragmentShader = this.insertAfter('#include <normalmap_pars_fragment>', fragmentShader, gearstackNormalFragment);

			var gearstackFragment = [
				"#ifdef USE_DYE",
					"diffuseColor = pow(diffuseColor, vec4(gamma_correction_power));",
					//"vec4 diffuseColorCorrected = pow(texture2D(map, vUv), vec4(gamma_correction_power));",

					// Dye Textures (Detail)
					// TODO is this working?
					"#ifdef USE_DYEDIFFUSE",
						"vec4 color_dye_diffuse_texture = texture2D(dyeDiffuse, vUv2);",
						"float dye_alpha = color_dye_diffuse_texture.w;",
						"float dye_color_normalize = (1.0 - dye_alpha) * 0.5;",
						"vec4 color_dye_diffuse = pow(vec4(color_dye_diffuse_texture.x * dye_alpha + dye_color_normalize, "
							+"color_dye_diffuse_texture.y * dye_alpha + dye_color_normalize, "
							+"color_dye_diffuse_texture.z * dye_alpha + dye_color_normalize, 1.0), "
							+"vec4(gamma_correction_power));",
						"diffuseColor = blend_overlay(color_dye_diffuse, diffuseColor);",
					"#endif",

					// Gearstack Textures
					"#ifdef USE_GEARSTACKMAP",
						"vec4 gearstackColor = texture2D(gearstackMap, vUv);",

						"vec4 mutedColor = vec4(0.3, 0.3, 0.3, 1.0);",

						"vec4 dyeColor = usePrimaryColor ? vec4(primaryColor, 1.0) : vec4(secondaryColor, 1.0);",
						"vec4 blendColorUncorrected = mix(diffuseColor, blend_overlay(diffuseColor, dyeColor), gearstackColor.r);",
						"diffuseColor = blendColorUncorrected;",
						//"vec3 blendColor = pow(blendColorUncorrected.xyz, vec3(gamma_correction_power_inverse));",
						//"diffuseColor = vec4(blendColor, 1.0);",

					"#endif",

					"diffuseColor = vec4(pow(diffuseColor.xyz, vec3(gamma_correction_power_inverse)), 1.0);",
				"#endif"
			];
			fragmentShader = this.insertAfter('#include <map_fragment>', fragmentShader, gearstackFragment);

			// Spasm.GearShader
			// Since most of the rendering is handled by Three.js, only some of this shader code is needed
			var gearstackFragment2 = [
				//"vec4 gearstackColor = texture2D(gearstackMap, vUv);",
				//"gearstackColor = mapTexelToLinear(gearstackColor);",
				//"diffuseColor = gearstackColor;",
				"vec4 u_muted_color_diffuse = vec4(0.3, 0.3, 0.3, 1.0);", // Spasm.ItemPreview
				"vec3 u_camera_position = cameraPosition;",
				"vec3 v_position = vViewPosition;",
				"vec4 u_change_color = vec4(1.0, 0.0, 0.0, 1.0);",

				"vec4 color_diffuse = pow(texture2D(map, vUv), vec4(gamma_correction_power));",
				"vec2 normal_sample_raw = texture2D(normalMap, vUv).xy;",
				"vec2 normal_sample = normal_sample_raw;",
				//"vec3 tangent_world_space = normalize(v_tangent);",
				"vec3 tangent_world_space = vec3(0.0, 0.0, 0.0);",
				//"vec3 binormal_world_space = normalize(v_binormal);",
				"vec3 binormal_world_space = vec3(0.0, 0.0, 0.0);",
				//"vec3 normal_world_space = normalize(v_normal);",
				"vec3 normal_world_space = vec3(0.0, 0.0, 0.0);",
				"normal_sample = normal_sample * 2.0 - 1.0;",

				//"vec4 color_dye_diffuse_texture = texture2D(u_texture_dye_diffuse, vUv2);",
				//"float dye_alpha = color_dye_diffuse_texture.w;",
				//"float dye_color_normalize = (1.0 - dye_alpha) * 0.5;",
				//"vec4 color_dye_diffuse = pow(vec4(color_dye_diffuse_texture.x * dye_alpha + dye_color_normalize, color_dye_diffuse_texture.y * dye_alpha + dye_color_normalize, color_dye_diffuse_texture.z * dye_alpha + dye_color_normalize, 1.0), vec4(gamma_correction_power));",
				//"color_diffuse = blend_overlay(color_dye_diffuse, color_diffuse);",
				//"vec4 color_dye_normal = texture2D(u_texture_dye_normal, vUv2);",
				//"color_dye_normal = color_dye_normal * 2.0 - 1.0;",
				//"normal_sample = normal_sample + color_dye_normal.xy;",

				"vec4 color_gearstack = texture2D(gearstackMap, vUv);",
				//t && (
					"color_diffuse = u_muted_color_diffuse; // vec4(0.447, 0.498, 0.465, 1.0);",
					"color_gearstack.r = 0.0; // = vec4(0.3, 0.3, 0.3, 1.0);",
				//),
				"float z = sqrt(saturate(1.0 - dot(normal_sample, normal_sample)));",
				"vec3 normal_tangent_space = vec3(normal_sample.x, normal_sample.y, z);",
				"vec3 bumpy_normal = (tangent_world_space * normal_tangent_space.x) + (binormal_world_space * normal_tangent_space.y) + (normal_world_space * normal_tangent_space.z);",
				"vec3 camera_direction = normalize(u_camera_position - v_position);",
				"float nDotL = saturate(dot(camera_direction, bumpy_normal) * (-1.0 + 2.0 * float(gl_FrontFacing)));",
				"vec3 reflection = (bumpy_normal * (nDotL * 2.00)) - camera_direction;",
				"float rDotV = max(0.0, dot(reflection, camera_direction));",
				"vec3 specular = saturate(vec3(0.2,0.2,0.2) * pow(rDotV, color_gearstack.g * 255.0)) * color_gearstack.g;",
				"vec4 blend_color_uncorrected = mix(color_diffuse,blend_overlay(color_diffuse, u_change_color),color_gearstack.r);",
				"vec3 blend_color = pow(blend_color_uncorrected.xyz, vec3(gamma_correction_power_inverse));",
				"vec3 ambient_color = 0.60 * blend_color;",
				"vec3 diffuse_color = 0.40 * (nDotL * blend_color);",
				"gl_FragColor = vec4(ambient_color + diffuse_color + specular, 1.0);",
				//"texelColor = pow(texture2D(map, vUv), vec4(gamma_correction_power));",
				//
				//"gearstackColor.r = 0.0;",
				//"gearstackColor = mapTexelToLinear(gearstackColor);",
				//"float nDotL = 1.0;",
				//"vec4 u_change_color = vec4(1.0, 1.0, 0.0, 0.0);",
				////"float rDotV = max(0.0, dot(reflection, camera_direction));",
				//"float rDotV = 0.0;",
				//"vec3 specular = saturate(vec3(0.2,0.2,0.2) * pow(rDotV, gearstackColor.g * 255.0)) * gearstackColor.g;",
				//"vec4 blend_color_uncorrected = mix(texelColor, blend_overlay(texelColor, u_change_color), gearstackColor.r);",
				//"vec3 blend_color = pow(blend_color_uncorrected.xyz, vec3(gamma_correction_power_inverse));",
				//"vec3 ambient_color = 0.60 * blend_color;",
				//"vec3 diffuse_color = 0.40 * (nDotL * blend_color);",
				////"gl_FragColor = vec4(ambient_color + diffuse_color + specular, 1.0);",
				//"diffuseColor = vec4(ambient_color + diffuse_color + specular, 1.0);",
				////"diffuseColor = gearstackColor;"
			];
			//fragmentShader = this.insertAfter('#include <encodings_fragment>', fragmentShader, gearstackFragment);
		}
		//console.log('VertexShader', vertexShader);
		//console.log('FragmentShader', fragmentShader);
		this.defines = defines;
		this.vertexShader = vertexShader;
		this.fragmentShader = fragmentShader;
	};
	TGXMaterial.prototype.insertBefore = function(search, shader, insertCode) {
		search += "\n";
		if (typeof insertCode != 'string') insertCode = insertCode.join("\n")+"\n";
		shader = shader.replace(search, insertCode+search);
		return shader;
	};
	TGXMaterial.prototype.insertAfter = function(search, shader, insertCode) {
		search += "\n";
		if (typeof insertCode != 'string') insertCode = insertCode.join("\n")+"\n";
		shader = shader.replace(search, search+insertCode);
		return shader;
	};
	TGXMaterial.prototype.replace = function(search, shader, insertCode) {
		search += "\n";
		if (typeof insertCode != 'string') insertCode = insertCode.join("\n")+"\n";
		shader = shader.replace(search, insertCode);
		return shader;
	};
	THREE.TGXMaterial = TGXMaterial;
})();