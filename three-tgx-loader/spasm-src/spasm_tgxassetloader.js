Spasm = Spasm || {};
Spasm.TGXAssetLoader = function(itemReferenceId, assetManifest, isFemale, classHash, callback, progressCallback) {
	Spasm.assertString(itemReferenceId);
	Spasm.assertValid(assetManifest);
	Spasm.assertBoolean(isFemale);
	Spasm.assertFunction(callback);
	this.itemReferenceId = itemReferenceId;
	this.assetManifest = assetManifest;
	this.isFemale = isFemale;
	this.classHash = classHash;
	this.callback = callback;
	this.progressCallback = typeof progressCallback != "undefined" ? progressCallback : function() {};
	this.contentLoaders = {
		gear: {},
		geometry: {},
		textures: {},
		platedTextures: {}
	};
	this.contentLoaded = {
		gear: {},
		geometry: {},
		textures: {},
		platedTextures: {}
	};
	this.loadProgress = {
		loading: -1,
		loaded: -1
	};
	this.onLoadAssetManifest()
};
Spasm.TGXAssetLoader.prototype = {};
Spasm.TGXAssetLoader.prototype.onContentLoadComplete = function() {
	this.callback && (this.callback(this, !0), this.callback = null)
};
Spasm.TGXAssetLoader.prototype.onLoadFailure = function() {
	this.callback && (this.callback(this, !1), this.callback = null)
};
Spasm.TGXAssetLoader.prototype.getGearDyes = function(n) {
	var gl, u, f, o, r, s, diffuseDyeTextureIndex, ut;
	Spasm.assertInstance(n, Spasm.Renderer);
	gl = n.gl;
	Spasm.assertWebGLContext(gl);
	var gear = this.contentLoaded.gear,
		a = Object.keys(gear),
		ft = a.length;
	Spasm.assert(ft >= 1);
	var textures = this.contentLoaded.textures,
		y = Object.keys(textures),
		et = y.length,
		ot = a[0],
		h = gear[ot],
		dyes = {
			customDyes: h.custom_dyes || [],
			defaultDyes: h.default_dyes || [],
			lockedDyes: h.locked_dyes || []
		},
		w = {},
		dyeKeys = Object.keys(dyes),
		st = dyeKeys.length;
	for (u = 0; u < st; u++) {
		var k = dyeKeys[u],
			dye = dyes[k],
			dyeLength = dye.length,
			g = [];
		for (f = 0; f < dyeLength; f++) {
			var nt = dye[f],
				dyeTextures = nt.textures,
				dyeDiffuse = dyeTextures.diffuse,
				dyeNormal = dyeTextures.normal,
				dyeDecal = dyeTextures.decal,
				dyeDiffuseId = dyeDiffuse.reference_id,
				dyeNormalId = dyeNormal.reference_id,
				dyeDecalId = dyeDecal.reference_id,
				e = {};
			for (o = 0; o < et; o++)
				r = y[o],
				s = textures[r],
				dyeDiffuseId && r.indexOf(dyeDiffuseId) >= 0 ?
					(diffuseDyeTextureIndex = n.getDiffuseDyeTextureIndex(), e.diffuse = new Spasm.Texture(gl, diffuseDyeTextureIndex, s)) :
					dyeNormalId && r.indexOf(dyeNormalId) >= 0 ?
						(diffuseDyeTextureIndex = n.getNormalDyeTextureIndex(), e.normal = new Spasm.Texture(gl, diffuseDyeTextureIndex, s)) :
						dyeDecalId && r.indexOf(dyeDecalId) >= 0 ?
							(diffuseDyeTextureIndex = n.getDecalDyeTextureIndex(), e.decal = new Spasm.Texture(gl, diffuseDyeTextureIndex, s)) :
							diffuseDyeTextureIndex = null;
			ut = new Spasm.GearDye(nt, e);
			g.push(ut)
		}
		w[k] = g
	}
	return w
};
Spasm.TGXAssetLoader.prototype.getGearRenderable = function(n) {
	var gl;
	Spasm.assertInstance(n, Spasm.Renderer);
	gl = n.gl;
	Spasm.assertWebGLContext(gl);
	var itemReferenceId = this.itemReferenceId,
		gearRenderableModels = this.getGearRenderableModels(n);
	return new Spasm.GearRenderable(itemReferenceId, gearRenderableModels)
};
Spasm.TGXAssetLoader.prototype.getGearRenderableModels = function(renderer) {
	var gl, gearIndex, art_content_sets_length, classHash, t, r, art_content_set, u, f, ot, overrideArtArrangement, override_geometry_hashes, st, o, override_geometry_hash, ct, s, geometryHash, fileBuffers, gearRenderableModel;
	Spasm.assertInstance(renderer, Spasm.Renderer);
	gl = renderer.gl;
	Spasm.assertWebGLContext(gl);
	var contentLoaded = this.contentLoaded,
		geometry = contentLoaded.geometry,
		d = [],
		i = [],
		gear = contentLoaded.gear;
	for (gearIndex in gear) {
		var gearEntry = gear[gearIndex],
			art_content = gearEntry.art_content,
			art_content_sets = gearEntry.art_content_sets;
		if (art_content_sets && (art_content_sets_length = art_content_sets.length, art_content_sets_length > 1)) {
			for (classHash = this.classHash, t = null, r = 0; r < art_content_sets_length; r++)
				art_content_set = art_content_sets[r],
				(t === null || art_content_set.classHash == classHash) && (t = art_content_set);
			t !== null && t.arrangement != null && (art_content = t.arrangement)
		}
		if (art_content) {
			var gearSet = art_content.gear_set,
				regions = gearSet.regions,
				regionsLength = regions.length;
			if (regionsLength > 0)
				for (u = 0; u < regionsLength; u++) {
					var region = regions[u],
						pattern_list = region.pattern_list,
						pattern_list_length = pattern_list.length;
					if (pattern_list_length > 0) {
						var pt = pattern_list[0],
							geometry_hashes = pt.geometry_hashes,
							geometry_hashes_length = geometry_hashes.length;
						for (f = 0; f < geometry_hashes_length; f++)
							ot = geometry_hashes[f],
							i.push(ot)
					}
				}
			else if (overrideArtArrangement = null, overrideArtArrangement = this.isFemale ? gearSet.female_override_art_arrangement : gearSet.base_art_arrangement, overrideArtArrangement !== null)
				for (override_geometry_hashes = overrideArtArrangement.geometry_hashes, st = override_geometry_hashes.length, o = 0; o < st; o++)
					override_geometry_hash = override_geometry_hashes[o],
					i.push(override_geometry_hash)
		}
	}
	for (ct = i.length, s = 0; s < ct; s++)
		geometryHash = i[s],
		fileBuffers = geometry[geometryHash],
		fileBuffers && (gearRenderableModel = this.getGearRenderableModel(renderer, geometryHash, fileBuffers), d.push(gearRenderableModel));
	return d
};
Spasm.TGXAssetLoader.prototype.getGearRenderableModel = function(renderer, geometryHash, fileBuffers) {
	var h, platedTextureKey, platedTexture, platedTexture2, platedTexture3, renderMesh, stagePartListLength, l, stagePart, shader, staticTextures, staticTexturesLength, v, textureKey, y, o, vertexBufferData, oi, renderable;
	Spasm.assertInstance(renderer, Spasm.Renderer);
	Spasm.assertString(geometryHash);
	Spasm.assertValid(fileBuffers);
	var gl = renderer.gl,
		contentLoaded = this.contentLoaded,
		renderMetadataBuffer = fileBuffers["render_metadata.js"],
		renderMetadataArray = new Uint8Array(renderMetadataBuffer),
		renderMetadata = Spasm.Utilities.jsonFromCharBuffer(renderMetadataArray);
	Spasm.assertValid(renderMetadata);
	var renderModel = renderMetadata.render_model,
		renderMeshes = renderModel.render_meshes,
		renderMeshesLength = renderMeshes.length,
		diffuseTexture = null,
		normalTexture = null,
		gearstackTexture = null,
		diffusePlateTextureIndex = renderer.getDiffusePlateTextureIndex(),
		normalPlateTextureIndex = renderer.getNormalPlateTextureIndex(),
		gearstackPlateTextureIndex = renderer.getGearstackPlateTextureIndex(),
		texturePlates = renderMetadata.texture_plates,
		texturePlatesLength = texturePlates.length;
	if (texturePlatesLength === 1) {
		var texturePlate = texturePlates[0],
			texturePlateSet = texturePlate.plate_set,
			texturePlateDiffuse = texturePlateSet.diffuse,
			texturePlateNormal = texturePlateSet.normal,
			gearstack = texturePlateSet.gearstack,
			texturePlateDiffuseId = texturePlateDiffuse.reference_id,
			texturePlateNormalId = texturePlateNormal.reference_id,
			gearstackId = gearstack.reference_id,
			platedTextures = contentLoaded.platedTextures,
			platedTextureKeys = Object.keys(platedTextures),
			platedTextureKeysLength = platedTextureKeys.length;
		for (h = 0; h < platedTextureKeysLength; h++)
			platedTextureKey = platedTextureKeys[h],
				platedTextureKey.indexOf(texturePlateDiffuseId) >= 0 ?
					(
						platedTexture = platedTextures[platedTextureKey],
						diffuseTexture = new Spasm.Texture(gl, diffusePlateTextureIndex, platedTexture)
					) :
					platedTextureKey.indexOf(texturePlateNormalId) >= 0 ?
						(
							platedTexture2 = platedTextures[platedTextureKey],
							normalTexture = new Spasm.Texture(gl, normalPlateTextureIndex, platedTexture2)
						) :
						platedTextureKey.indexOf(gearstackId) >= 0 && (
							platedTexture3 = platedTextures[platedTextureKey],
							gearstackTexture = new Spasm.Texture(gl, gearstackPlateTextureIndex, platedTexture3)
						)
	} else {
		var textures = contentLoaded.textures,
			textureKeys = Object.keys(textures),
			textureKeysLength = textureKeys.length;
		if (renderMeshesLength > 0)
			for (renderMesh = renderMeshes[0],
					 stagePartListLength = renderMesh.stage_part_list.length,
					 l = 0; l < stagePartListLength; l++)
				if (stagePart = renderMesh.stage_part_list[l],
					shader = stagePart.shader,
					shader && shader.static_textures && (
							staticTextures = shader.static_textures,
							staticTexturesLength = staticTextures.length,
							staticTexturesLength >= 5
						)
					) {
					var diffuseId = staticTextures[0],
						normalId = staticTextures[2],
						gearstackId = staticTextures[4],
						diffuseKey = null,
						normalKey = null,
						gearstackKey = null;
					for (v = 0; v < textureKeysLength; v++)
						textureKey = textureKeys[v],
						textureKey.indexOf(diffuseId) >= 0 ?
							diffuseKey = textureKey :
							textureKey.indexOf(normalId) >= 0 ?
								normalKey = textureKey :
								textureKey.indexOf(gearstackId) >= 0 && (gearstackKey = textureKey);
					if (diffuseKey && normalKey && gearstackKey) {
						var diffusePlateTexture = textures[diffuseKey],
							normalPlateTexture = textures[normalKey],
							gearstackPlateTexture = textures[gearstackKey];
						diffuseTexture = new Spasm.Texture(gl, diffusePlateTextureIndex, diffusePlateTexture);
						normalTexture = new Spasm.Texture(gl, normalPlateTextureIndex, normalPlateTexture);
						gearstackTexture = new Spasm.Texture(gl, gearstackPlateTextureIndex, gearstackPlateTexture);
						break
					}
				}
	}
	var renderableTextures = {
			diffuse: diffuseTexture,
			normal: normalTexture,
			gearstack: gearstackTexture
		},
		renderableMeshes = [],
		renderables = [];
	for (y = 0; y < renderMeshesLength; y++) {
		var renderMesh = renderMeshes[y],
			p = new Spasm.RenderMesh(renderMesh),
			indexBuffer = renderMesh.index_buffer,
			indexBufferFileName = indexBuffer.file_name,
			indexBufferByteSize = indexBuffer.byte_size,
			indexBufferValueByteSize = indexBuffer.value_byte_size,
			indexBufferLength = indexBufferByteSize / indexBufferValueByteSize,
			indexBufferData = fileBuffers[indexBufferFileName],
			yr = new Spasm.IndexBuffer(gl, indexBufferData, indexBufferLength, gl.UNSIGNED_SHORT);
		p.setIndexBuffer(yr);
		var attributes = p.getAttributes(gl),
			vertexBuffers = renderMesh.vertex_buffers,
			vertexBuffersLength = vertexBuffers.length,
			ui = [];
		for (o = 0; o < vertexBuffersLength; o++) {
			var vertexBuffer = vertexBuffers[o],
				vertexBufferFileName = vertexBuffer.file_name,
				vertexBufferByteSize = vertexBuffer.byte_size,
				vertexBufferStrideByteSize = vertexBuffer.stride_byte_size,
				vertexBufferLength = vertexBufferByteSize / vertexBufferStrideByteSize;
			Spasm.Utilities.stringEndsWith(vertexBufferFileName, ".tgx") || (vertexBufferFileName += ".tgx");
			vertexBufferData = fileBuffers[vertexBufferFileName];
			oi = new Spasm.VertexBuffer(gl, vertexBufferData, vertexBufferStrideByteSize, vertexBufferLength, attributes[o]);
			ui.push(oi)
		}
		p.setVertexBuffers(ui);
		renderable = p.getRenderable(gl, renderableMeshes, renderableTextures);
		renderables.push(renderable)
	}
	return new Spasm.GearRenderableModel(geometryHash, renderables)
};
Spasm.TGXAssetLoader.prototype.onLoadAssetManifest = function() {
	var assetManifest = this.assetManifest,
		assetManifestContent, n, r, regionIndexSetsIndexes, regionIndexSetsIndexesLength, u, setIndex, ht, regionIndexSet, ct, f, filteredRegionIndexSet, geometry, e, nt, texture, o, it, plateRegions, s, ut, c, gearFilename, gearPath, l, a, v;
	for (Spasm.assertValid(assetManifest),
			 assetManifestContent = assetManifest.content,
			 n = null,
			 r = 0; r < assetManifestContent.length; r++)
		if (n = assetManifestContent[r], n.platform === "web") break;
	var filteredRegionSets = [],
		ni = {
			"2": 2,
			"6": 6,
			"21": 21
		},
		dyeIndexSet = n.dye_index_set;
	dyeIndexSet && filteredRegionSets.push(dyeIndexSet);
	var regionIndexSets = n.region_index_sets,
		femaleIndexSet = n.female_index_set,
		maleIndexSet = n.male_index_set;
	if (regionIndexSets)
		for (regionIndexSetsIndexes = Object.keys(regionIndexSets),
				 regionIndexSetsIndexesLength = regionIndexSetsIndexes.length,
				 u = 0; u < regionIndexSetsIndexesLength; u++)
			setIndex = regionIndexSetsIndexes[u],
			ht = "" + setIndex,
			ht in ni || (regionIndexSet = regionIndexSets[setIndex], ct = regionIndexSet.length, ct > 0 && filteredRegionSets.push(regionIndexSet[0]));
	else this.isFemale ? filteredRegionSets.push(femaleIndexSet) : filteredRegionSets.push(maleIndexSet);


	var assetManifestGear = assetManifest.gear,
		assetManifestGeometry = n.geometry,
		assetManifestTextures = n.textures,
		assetManifestPlatedRegions = n.plate_regions,
		geometryIndexes = {},
		textureIndexes = {},
		plateRegionIndexes = {},
		filteredRegionSetsLength = filteredRegionSets.length || 0;
	for (f = 0; f < filteredRegionSetsLength; f++) {
		if (filteredRegionIndexSet = filteredRegionSets[f] || {}, filteredRegionIndexSet.geometry)
			for (geometry = filteredRegionIndexSet.geometry, e = 0; e < geometry.length; e++) nt = geometry[e], geometryIndexes[nt] = nt;
		if (filteredRegionIndexSet.textures)
			for (texture = filteredRegionIndexSet.textures, o = 0; o < texture.length; o++) it = texture[o], textureIndexes[it] = it;
		if (filteredRegionIndexSet.plate_regions)
			for (plateRegions = filteredRegionIndexSet.plate_regions, s = 0; s < plateRegions.length; s++) ut = plateRegions[s], plateRegionIndexes[ut] = ut
	}
	var contentLoadersGear = this.contentLoaders.gear,
		contentLoadersGeometry = this.contentLoaders.geometry,
		contentLoadersTextures = this.contentLoaders.textures,
		contentLoadersPlatedTextures = this.contentLoaders.platedTextures,
		scope = this,
		gearLoaderCallback = function(n) {
			scope.onLoadGearJSON(n)
		},
		ai = assetManifestGear.length;
	for (c = 0; c < ai; c++)
		gearFilename = assetManifestGear[c],
		Spasm.assert(Spasm.Utilities.stringEndsWith(gearFilename, ".js")),
		gearPath = Spasm.Path.addVersionQuery(Spasm.Path.combine(Spasm.Content.GearPath, gearFilename)),
		contentLoadersGear[gearPath] = new Spasm.JSONLoader(gearPath, gearLoaderCallback);
	var vi = function(n) {
			scope.onLoadGeometryBuffer(n)
		},
		pt = Object.keys(geometryIndexes),
		yi = pt.length;
	for (l = 0; l < yi; l++) {
		var pi = pt[l],
			wi = assetManifestGeometry[pi],
			wt = Spasm.Path.addVersionQuery(Spasm.Path.combine(Spasm.Content.GeometryPath, wi));
		contentLoadersGeometry[wt] = new Spasm.TGXBinLoader(wt, vi)
	}
	var onLoadTexture = function(n) {
			scope.onLoadTexture(n)
		},
		bt = Object.keys(textureIndexes),
		ki = bt.length;
	for (a = 0; a < ki; a++) {
		var di = bt[a],
			gi = assetManifestTextures[di],
			textureFilePath = Spasm.Path.addVersionQuery(Spasm.Path.combine(Spasm.Content.TexturesPath, gi));
		contentLoadersTextures[textureFilePath] = new Spasm.TextureLoader(textureFilePath, onLoadTexture)
	}
	var onLoadPlatedTexture = function(n) {
			scope.onLoadPlatedTexture(n)
		},
		dt = Object.keys(plateRegionIndexes),
		tr = dt.length;
	for (v = 0; v < tr; v++) {
		var ir = dt[v],
			rr = assetManifestPlatedRegions[ir],
			platedTexturePath = Spasm.Path.addVersionQuery(Spasm.Path.combine(Spasm.Content.PlatedTexturesPath, rr));
		contentLoadersPlatedTextures[platedTexturePath] = new Spasm.TextureLoader(platedTexturePath, onLoadPlatedTexture)
	}
};
Spasm.TGXAssetLoader.prototype.checkContentLoadComplete = function() {
	var t = this.contentLoaders,
		n;
	this.determineLoadProgress();
	var i = 0,
		r = Object.keys(t),
		u = r.length;
	for (n = 0; n < u; n++) {
		var f = r[n],
			e = t[f],
			o = Object.keys(e);
		i += o.length
	}
	i === 0 && this.onContentLoadComplete()
};
Spasm.TGXAssetLoader.prototype.determineLoadProgress = function() {
	var n, t = this.contentLoaders,
		i = this.contentLoaded,
		r = 0,
		u = 0,
		f, e;
	for (n in t) f = t[n], r += Object.keys(f).length;
	for (n in i) e = i[n], u += Object.keys(e).length;
	this.loadProgress = {
		loading: r,
		loaded: u
	};
	this.progressCallback(this, this.itemReferenceId)
};
Spasm.TGXAssetLoader.prototype.onLoadGearJSON = function(n) {
	var filePath, parsedResponse, gear, u;
	Spasm.assertInstance(n, Spasm.JSONLoader);
	n.isCompleteAndOK() ?
		(filePath = n.filePath, Spasm.assertPath(filePath),
			parsedResponse = n.parsedResponse,
			Spasm.assertValid(parsedResponse),
			this.contentLoaded.gear[filePath] = parsedResponse,
			gear = this.contentLoaders.gear,
			Spasm.assert(filePath in gear),
			u = gear[filePath],
			Spasm.assertEqual(u, n),
			delete gear[filePath],
			this.checkContentLoadComplete()) :
		this.onLoadFailure()
};
Spasm.TGXAssetLoader.prototype.onLoadGeometryBuffer = function(n) {
	var filePath, fileIdentifier, fileBuffers, geometry, f;
	Spasm.assertInstance(n, Spasm.TGXBinLoader);
	n.isCompleteAndOK() ?
		(filePath = n.filePath,
			Spasm.assertPath(filePath),
			fileIdentifier = n.fileIdentifier,
			Spasm.assertString(fileIdentifier),
			fileBuffers = n.getFileBuffers(),
			Spasm.assertValid(fileBuffers),
			this.contentLoaded.geometry[fileIdentifier] = fileBuffers,
			geometry = this.contentLoaders.geometry,
			Spasm.assert(filePath in geometry),
			f = geometry[filePath], Spasm.assertEqual(f, n),
			delete geometry[filePath],
			this.checkContentLoadComplete()
		) :
		this.onLoadFailure()
};
Spasm.TGXAssetLoader.prototype.onLoadTexture = function(textureLoader) {
	var filePath, image, contentLoadersTextures, u;
	Spasm.assertInstance(textureLoader, Spasm.TextureLoader);
	textureLoader.isCompleteAndOK() ?
		(
			filePath = textureLoader.filePath,
			Spasm.assertPath(filePath),
			image = textureLoader.image,
			Spasm.assertValid(image),
			this.contentLoaded.textures[filePath] = image,
			contentLoadersTextures = this.contentLoaders.textures,
			u = contentLoadersTextures[filePath],
			Spasm.assertEqual(u, textureLoader),
			delete contentLoadersTextures[filePath],
			this.checkContentLoadComplete()
		) :
		this.onLoadFailure()
};
Spasm.TGXAssetLoader.prototype.onLoadPlatedTexture = function(textureLoader) {
	var filePath, image, contentLoadersPlatedTextures, u;
	Spasm.assertInstance(textureLoader, Spasm.TextureLoader);
	textureLoader.isCompleteAndOK() ?
		(
			filePath = textureLoader.filePath,
			Spasm.assertPath(filePath),
			image = textureLoader.image,
			Spasm.assertValid(image, Image),
			this.contentLoaded.platedTextures[filePath] = image,
			contentLoadersPlatedTextures = this.contentLoaders.platedTextures,
			u = contentLoadersPlatedTextures[filePath],
			Spasm.assertEqual(u, textureLoader),
			delete contentLoadersPlatedTextures[filePath],
			this.checkContentLoadComplete()
		) :
		this.onLoadFailure()
};