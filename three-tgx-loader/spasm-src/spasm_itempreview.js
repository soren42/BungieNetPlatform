Spasm = Spasm || {};
Spasm.ItemPreview = function(canvas, contentBaseURL) {
	var canvasWidth, canvasHeight, f, h;
	Spasm.assertCanvas(canvas);
	Spasm.assertString(contentBaseURL);
	this.canvas = canvas;
	this.contentBaseURL = contentBaseURL;
	Spasm.Content.setContentBaseURL(contentBaseURL);
	this.renderer = new Spasm.Renderer(canvas);
	this.gearShaders = this.renderer.canRender() ? new Spasm.GearShader(this.renderer.gl) : null;
	this.gearShaders !== null && (this.gearShaders.getShaderProgram(!1, !1, !1, !1), this.gearShaders.getShaderProgram(!0, !1, !1, !1), this.gearShaders.getShaderProgram(!0, !0, !1, !1));
	this.dropShadowEnabled = !1;
	this.renderer.canRender() && (this.dropShadow = new Spasm.DropShadow(this.renderer.gl));
	this.camera = new Spasm.Camera(canvas);
	this.cameraControls = new Spasm.CameraControls(canvas, this.camera);
	canvasWidth = Math.abs(canvas.width);
	canvasHeight = Math.abs(canvas.height);
	this.canvasSize = {
		width: canvasWidth,
		height: canvasHeight
	};
	this.shouldAnimate = !1;
	this.isAnimating = !1;
	this.limitToFrame = !1;
	this.isAnimationPaused = !1;
	this.assetLoaders = null;
	this.assetLoadersCount = 0;
	this.genderType = 1;
	this.classHash = 0;
	this.frameIndex = 0;
	this.callback = null;
	this.itemReferenceIds = [];
	this.mutedItemReferenceIds = [];
	this.gearRenderables = [];
	this.renderWithHelmet = !0;
	this.variantItemReferenceIds = {};
	this.renderWithHelmetVariantsByCount = {
		0: {},
		1: {
			0: ""
		},
		2: {
			0: "",
			1: ""
		},
		3: {
			0: "",
			2: ""
		}
	};
	this.renderWithoutHelmetVariantsByCount = {
		0: {},
		1: {
			0: ""
		},
		2: {
			0: ""
		},
		3: {
			1: "",
			2: ""
		}
	};
	this.gearRenderableCache = {};
	this.femaleGearRenderableCache = {};
	this.maleGearRenderableCache = {};
	this.boundingVolume = null;
	this.focusedItemReferenceId = null;
	this.centeredItemReferenceId = null;
	this.loadProgressPerItem = {};
	this.totalLoadProgress = {
		loading: -1,
		loaded: -1
	};
	this.loadProgressCallback = function() {};
	this.primaryWeaponItemDefinition = null;
	this.assetManifests = null;
	this.animations = {};
	this.skeletons = {};
	this.skeletonFilePath = Spasm.Path.combine(Spasm.Content.AnimationsPath, "destiny_player_skeleton.js");
	this.animationFilePath = Spasm.Path.combine(Spasm.Content.AnimationsPath, "destiny_player_animation.js");
	var inputTypes = Spasm.Shader.InputTypes,
		valueTypes = Spasm.Shader.ValueTypes,
		i = 72,
		e = 12;
	for (this.identityMatrices = new Float32Array(i * e),
			 this.identityMatricesUniform = new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec4, "u_skinning_matrices", i),
			 this.identityMatricesUniformData = new Spasm.UniformData(this.identityMatricesUniform, this.identityMatrices),
			 f = 0; f < i; f++) this.identityMatrices.set(this.camera.matrices.identity34, f * e);
	this.skinningMatrices = new Float32Array(i * e);
	this.skinningMatricesUniform = new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec4, "u_skinning_matrices", i);
	this.skinningMatricesUniformData = new Spasm.UniformData(this.skinningMatricesUniform, this.skinningMatrices);
	this.lightPosition = new Float32Array([0, 10, 0]);
	this.lightPositionUniform = new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec3, "u_light_position");
	this.lightPositionUniformData = new Spasm.UniformData(this.lightPositionUniform, this.lightPosition);
	this.mutedColor = .3;
	this.mutedColorDiffuse = new Float32Array([this.mutedColor, this.mutedColor, this.mutedColor, 1]);
	this.mutedColorDiffuseUniform = new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec4, "u_muted_color_diffuse");
	this.mutedColorDiffuseUnfiformData = new Spasm.UniformData(this.mutedColorDiffuseUniform, this.mutedColorDiffuse);
	h = this;
	this.animationFrame = function() {
		h.animate()
	}
};
Spasm.ItemPreview.prototype = {};
Spasm.ItemPreview.prototype.setRenderWithHelmet = function(n) {
	Spasm.assertBoolean(n);
	this.renderWithHelmet = n
};
Spasm.ItemPreview.prototype.setVariantItemReferenceIds = function(n) {
	var i, r, t, u;
	for (Spasm.assertArray(n), i = {}, r = n.length, t = 0; t < r; t++) u = n[t], i[u] = "";
	this.variantItemReferenceIds = i
};
Spasm.ItemPreview.prototype.getGearRenderableCache = function() {
	return this.itemReferenceIds.length === 1 ? this.gearRenderableCache : this.isFemale() ? this.femaleGearRenderableCache : this.maleGearRenderableCache
};
Spasm.ItemPreview.prototype.onLoadAnimation = function(n, t) {
	Spasm.assertInstance(n, Spasm.Animation);
	Spasm.assertBoolean(t);
	n === this.animation && this.checkLoadComplete()
};
Spasm.ItemPreview.prototype.onLoadSkeleton = function(n, t) {
	Spasm.assertInstance(n, Spasm.Skeleton);
	Spasm.assertBoolean(t);
	this.checkLoadComplete()
};
Spasm.ItemPreview.prototype.checkLoadComplete = function() {
	this.assetLoadersCount === 0 && this.skeleton.loadComplete && this.animation.loadComplete && this.onLoadComplete()
};
Spasm.ItemPreview.prototype.onLoadFailure = function() {
	this.onFinishedLoading(!1)
};
Spasm.ItemPreview.prototype.setGenderType = function(n) {
	this.genderType = n
};
Spasm.ItemPreview.prototype.setClassHash = function(n) {
	this.classHash = n
};
Spasm.ItemPreview.prototype.setFocusedItemReferenceId = function(n) {
	n ? (this.focusedItemReferenceId = n, this.centeredItemReferenceId = null) : this.focusedItemReferenceId = null
};
Spasm.ItemPreview.prototype.setCenteredItemReferenceId = function(n) {
	n ? (this.centeredItemReferenceId = n, this.focusedItemReferenceId = null) : this.centeredItemReferenceId = null
};
Spasm.ItemPreview.prototype.setDropShadowEnabled = function(n) {
	Spasm.assertBoolean(n);
	this.dropShadowEnabled = n
};
Spasm.ItemPreview.prototype.setRotationZDegrees = function(n) {
	Spasm.assertNumber(n, "Spasm.ItemPreview.setRotationZDegrees: input is not a number" + n);
	this.camera.setRotationZDegrees(n)
};
Spasm.ItemPreview.prototype.genderTypeFemale = 1;
Spasm.ItemPreview.prototype.isFemale = function() {
	return this.genderType == this.genderTypeFemale
};
Spasm.ItemPreview.prototype.hasItemReferenceId = function(id) {
	var hasItemReferenceId = !1,
		itemReferenceIds = this.itemReferenceIds,
		itemReferenceIdsLength, t, itemReferenceId;
	if (itemReferenceIds)
		for (itemReferenceIdsLength = itemReferenceIds.length, t = 0; t < itemReferenceIdsLength; t++)
			if (itemReferenceId = itemReferenceIds[t], itemReferenceId == id) {
				hasItemReferenceId = !0;
				break
			}
	return hasItemReferenceId
};
Spasm.ItemPreview.prototype.loadItemAssetManifests = function() {
	var itemReferenceIds = this.itemReferenceIds,
		assetManifests = this.assetManifests,
		scope, definitionType, contentVersion, itemReferenceIdsLength, t, itemReferenceId, assetManifest, definitions, shaderItemReferenceId, shaderItemDefinition, a;
	for (assetManifests || (assetManifests = {}, this.assetManifests = assetManifests),
			 scope = this,
			 definitionType = "GearAsset",
			 Spasm.assertValid(bungieNetPlatform, "missing bungie.net platform library"),
			 Spasm.assertValid(bungieNetPlatform.platformSettings, "missing bungie.net platform settings"),
			 contentVersion = bungieNetPlatform.platformSettings.contentVersion,
			 itemReferenceIdsLength = itemReferenceIds.length,
			 t = 0; t < itemReferenceIdsLength; t++)
					itemReferenceId = itemReferenceIds[t], assetManifest = itemReferenceId in assetManifests,
					assetManifest || (definitions = !1, bungieNetPlatform.destinyService.GetDestinySingleDefinition(definitionType, itemReferenceId, definitions, contentVersion, function(response) {
		Spasm.assertValid(response);
		var data = response.data,
			gearAsset = data.gearAsset,
			requestedId = data.requestedId;
		scope.onLoadItemAssetManifest(requestedId, gearAsset)
	}, function(n) {
		Spasm.assert(!1, "error loading equipment item definition: " + n)
	}));
	shaderItemReferenceId = this.shaderItemReferenceId;
	shaderItemDefinition = this.shaderItemDefinition;
	shaderItemReferenceId &&
		(!shaderItemDefinition || shaderItemDefinition.itemHash != shaderItemReferenceId) &&
		(a = !1, bungieNetPlatform.destinyService.GetDestinySingleDefinition(definitionType, shaderItemReferenceId, a, contentVersion, function(n) {
		Spasm.assertValid(n);
		var data = n.data,
			gearAsset = data.gearAsset,
			requestedId = data.requestedId;
		scope.onLoadItemAssetManifest(requestedId, gearAsset)
	}, function(n) {
		Spasm.assert(!1, "error loading equipment item definition: " + n)
	}));
	this.checkItemAssetManifestsLoadComplete()
};
Spasm.ItemPreview.prototype.addItemAssetManifest = function(requestedId, gearAsset) {
	Spasm.assertValid(requestedId);
	Spasm.assertValid(gearAsset);
	var assetManifests = this.assetManifests;
	assetManifests || (assetManifests = {}, this.assetManifests = assetManifests);
	assetManifests[requestedId] = gearAsset
};
Spasm.ItemPreview.prototype.onLoadItemAssetManifest = function(requestedId, gearAsset) {
	this.addItemAssetManifest(requestedId, gearAsset);
	this.hasItemReferenceId(requestedId) && this.checkItemAssetManifestsLoadComplete()
};
Spasm.ItemPreview.prototype.checkItemAssetManifestsLoadComplete = function() {
	var t = !1,
		assetManifests = this.assetManifests,
		n, itemReferenceId, asset;
	if (assetManifests) {
		var r = !1,
			itemReferenceIds = this.itemReferenceIds,
			itemReferenceIdsLength = itemReferenceIds.length;
		for (n = 0; n < itemReferenceIdsLength; n++)
			if (itemReferenceId = itemReferenceIds[n], asset = itemReferenceId in assetManifests, !asset) {
				r = !0;
				break
			}
		r || (this.loadItems(), t = !0)
	}
	return t
};
Spasm.ItemPreview.prototype.loadItems = function() {
	var gearShaders = this.gearShaders,
		itemReferenceIds = this.itemReferenceIds,
		assetManifests = this.assetManifests,
		scope = this,
		shaderItemDefinition = this.shaderItemDefinition,
		callback = function(n, i) {
			if (i) {
				scope.onLoadAssets(n);
				scope.checkLoadComplete()
			} else scope.onLoadFailure()
		},
		progressCallback = function(n, i) {
			scope.loadProgressPerItem[i] = n.loadProgress;
			scope.determineItemPreviewLoadProgress()
		},
		e, itemReferenceId, assetManifest, itemHash, equippingBlock, assetManifest, b;
	if (gearShaders && itemReferenceIds && assetManifests) {
		this.assetLoaders = {};
		this.gearRenderables.length = 0;
		var isFemale = this.isFemale(),
			classHash = this.classHash,
			gearRenderable = this.getGearRenderableCache(),
			itemReferenceIdsLength = itemReferenceIds.length;
		for (e = 0; e < itemReferenceIdsLength; e++)
			itemReferenceId = itemReferenceIds[e],
				assetManifest = assetManifests[itemReferenceId],
				itemReferenceId in gearRenderable ?
					this.gearRenderables.push(gearRenderable[itemReferenceId]) :
					assetManifest ?
						assetManifest.content &&
							assetManifest.content.length > 0 &&
							(this.assetLoaders[itemReferenceId] = new Spasm.TGXAssetLoader(itemReferenceId, assetManifest, isFemale, classHash, callback, progressCallback), this.assetLoadersCount++) :
						console.log("ItemPreview: missing asset manifest for item id: " + itemReferenceId);
		if (shaderItemDefinition && (itemHash = "" + shaderItemDefinition.itemHash, equippingBlock = shaderItemDefinition.equippingBlock, itemHash && equippingBlock)) {
			var defaultDyes = equippingBlock.defaultDyes,
				customDyes = equippingBlock.customDyes,
				lockedDyes = equippingBlock.lockedDyes;
			(defaultDyes && defaultDyes.length > 0 || customDyes && customDyes.length > 0 || lockedDyes && lockedDyes.length > 0) &&
			(assetManifest = assetManifests[itemHash], assetManifest && assetManifest.content && assetManifest.content.length > 0 && (this.assetLoaders[itemHash] = new Spasm.TGXAssetLoader(itemHash, assetManifest, isFemale, classHash, callback), this.assetLoadersCount++))
		}
		b = Object.keys(this.assetLoaders);
		b.length === 0 && setTimeout(function() {
			scope.checkLoadComplete()
		}, 0)
	}
};
Spasm.ItemPreview.prototype.loadAnimation = function(n) {
	var t = Spasm.Path.addVersionQuery(Spasm.Path.combine(Spasm.Content.StaticPath, n));
	t in this.animations || (this.animations[t] = new Spasm.Animation(t))
};
Spasm.ItemPreview.prototype.setAnimation = function() {
	var u = this,
		animationFilePath = Spasm.Path.addVersionQuery(Spasm.Path.combine(Spasm.Content.StaticPath, this.animationFilePath)),
		skeletonFilePath = Spasm.Path.addVersionQuery(Spasm.Path.combine(Spasm.Content.StaticPath, this.skeletonFilePath)),
		i = null,
		r = null;
	animationFilePath in this.animations ? i = this.animations[animationFilePath] : (i = new Spasm.Animation(animationFilePath, function(n, t) {
		u.onLoadAnimation(n, t)
	}), this.animations[animationFilePath] = i);
	skeletonFilePath in this.skeletons ? r = this.skeletons[skeletonFilePath] : (r = new Spasm.Skeleton(skeletonFilePath, function(n, t) {
		u.onLoadSkeleton(n, t)
	}), this.skeletons[skeletonFilePath] = r);
	this.animation = i;
	this.skeleton = r
};
Spasm.ItemPreview.prototype.setItemReferenceIds = function(itemReferenceIds, primaryWeaponItemDefinition, shaderItemDefinition, assetManifests, callback) {
	this.setItemReferenceIdsWithMutedItems(itemReferenceIds, primaryWeaponItemDefinition, shaderItemDefinition, {}, assetManifests, callback)
};
Spasm.ItemPreview.prototype.setItemReferenceIdsWithMutedItems = function(itemReferenceIds, primaryWeaponItemDefinition, shaderItemDefinition, mutedItemReferenceIds, assetManifests, callback) {
	this.setAnimation();
	Spasm.assertArray(itemReferenceIds);
	Spasm.assertValid(mutedItemReferenceIds);
	Spasm.assertValid(assetManifests);
	Spasm.assertFunction(callback);
	this.itemReferenceIds = itemReferenceIds;
	this.primaryWeaponItemDefinition = primaryWeaponItemDefinition;
	this.shaderItemDefinition = shaderItemDefinition;
	this.mutedItemReferenceIds = mutedItemReferenceIds;
	this.assetManifests = assetManifests;
	this.callback = callback;
	var scope = this;
	this.renderer.canRender() ? this.loadItems() : setTimeout(function() {
		scope.checkLoadComplete()
	}, 0)
};
Spasm.ItemPreview.prototype.loadItemReferenceIds = function(itemReferenceIds, shaderItemReferenceId, callback) {
	this.loadItemReferenceIdsWithMutedItems(itemReferenceIds, shaderItemReferenceId, {}, callback)
};
Spasm.ItemPreview.prototype.loadItemReferenceIdsWithMutedItems = function(itemReferenceIds, shaderItemReferenceId, mutedItemReferenceIds, callback) {
	this.setAnimation();
	Spasm.assertArray(itemReferenceIds);
	Spasm.assertValid(mutedItemReferenceIds);
	Spasm.assertFunction(callback);
	this.itemReferenceIds = itemReferenceIds;
	this.shaderItemReferenceId = shaderItemReferenceId;
	this.mutedItemReferenceIds = mutedItemReferenceIds;
	this.callback = callback;
	this.loadItemAssetManifests()
};
Spasm.ItemPreview.prototype.onLoadAssets = function(loader) {
	var gearDyes, gearRenderable, gearRenderableCache;
	Spasm.assertInstance(loader, Spasm.TGXAssetLoader);
	loader.itemReferenceId in this.assetLoaders && (gearDyes = loader.getGearDyes(this.renderer),
		gearRenderable = loader.getGearRenderable(this.renderer),
		gearRenderable.setGearShaders(this.gearShaders),
		gearRenderable.setGearDyes(gearDyes),
		gearRenderableCache = this.getGearRenderableCache(),
		gearRenderableCache[loader.itemReferenceId] = gearRenderable,
		this.gearRenderables.push(gearRenderable),
		delete this.assetLoaders[loader.itemReferenceId],
		this.assetLoadersCount--)
};
Spasm.ItemPreview.prototype.getTotalBoundingVolume = function() {
	for (var i = this.gearRenderables, r = [], e = i.length, t, f, n = 0; n < e; n++) {
		var o = i[n],
			u = o.getBoundingVolumes(),
			s = u.length;
		for (t = 0; t < s; t++) f = u[t], r.push(f)
	}
	return Spasm.boundingVolumeFromBoundingVolumes(r)
};
Spasm.ItemPreview.prototype.getBoundingVolumeForItemReferenceId = function(gearRenderableCacheIndex) {
	var gearRenderableCache = this.getGearRenderableCache(),
		boundingVolume, r;
	return gearRenderableCacheIndex && gearRenderableCacheIndex in gearRenderableCache ?
			(r = gearRenderableCache[gearRenderableCacheIndex], boundingVolume = r.getBoundingVolume()) :
			boundingVolume = null, boundingVolume
};
Spasm.ItemPreview.prototype.onLoadComplete = function() {
	var gearRenderables = this.gearRenderables,
		focusedItemReferenceId = this.focusedItemReferenceId,
		centeredItemReferenceId = this.centeredItemReferenceId,
		gearRenderableCache = this.getGearRenderableCache(),
		b = [],
		gearDyes = null,
		shaderItemDefinition = this.shaderItemDefinition,
		a, e, gearRenderablesLength, r, gearRenderable, boundingVolumes, y, u, boundingVolume, i, w;
	for (shaderItemDefinition && (a = "" + shaderItemDefinition.itemHash,
		e = gearRenderableCache[a],
		e && (gearDyes = e.gearDyes)),
		gearRenderablesLength = gearRenderables.length,
		r = 0; r < gearRenderablesLength; r++)
		for (gearRenderable = gearRenderables[r],
				 gearRenderable.setShaderOverrideDyes(gearDyes),
				 boundingVolumes = gearRenderable.getBoundingVolumes(),
				 y = boundingVolumes.length,
				 u = 0; u < y; u++)
			boundingVolume = boundingVolumes[u],
			b.push(boundingVolume);
	i = null;
	centeredItemReferenceId && centeredItemReferenceId in gearRenderableCache && (i = this.getBoundingVolumeForItemReferenceId(centeredItemReferenceId));
	i = focusedItemReferenceId && focusedItemReferenceId in gearRenderableCache ? this.getBoundingVolumeForItemReferenceId(focusedItemReferenceId) : this.getTotalBoundingVolume();
	this.boundingVolume = i;
	this.camera.updateForBoundingVolume(i, !!focusedItemReferenceId, !!centeredItemReferenceId);
	focusedItemReferenceId || centeredItemReferenceId || (this.camera.orientation.modelTranslationVertical = 1);
	w = this.renderer.canRender() && this.skeleton.loadSuccess && this.animation.loadSuccess;
	this.onFinishedLoading(w)
};
Spasm.ItemPreview.prototype.onFinishedLoading = function(n) {
	var callback = this.callback;
	callback && (n || this.stopAnimating(!0), callback(n), this.callback = null)
};
Spasm.ItemPreview.prototype.startAnimating = function() {
	this.shouldAnimate || (this.shouldAnimate = !0, this.canvas.style.display = "block", this.isAnimating || this.animate())
};
Spasm.ItemPreview.prototype.stopAnimating = function(n) {
	if (!this.shouldAnimate) return !1;
	this.shouldAnimate = !1;
	this.isAnimating = !1;
	var t = typeof n == "undefined" ? !0 : n;
	t && (this.canvas.style.display = "none")
};
Spasm.ItemPreview.prototype.animate = function() {
	var k, f, tt;
	if (this.isAnimating = !1, this.shouldAnimate && this.renderer.canRender()) this.isAnimating = !0, window.requestAnimationFrame(this.animationFrame);
	else {
		this.stopAnimating();
		return
	}
	var r = this.renderer.gl,
		it = this.skinningMatrices,
		rt = this.itemReferenceIds,
		n = this.gearShaders,
		v = this.gearRenderables,
		t = this.skeleton,
		e = this.animation,
		i, o;
	if (rt.length > 1)
		if (o = !0, t.loadComplete && e.loadComplete)
			if (t.loadSuccess && t.loadSuccess) {
				i = !0;
				var s = this.frameIndex,
					h = e.frameCount,
					c, y = t.inverseObjectSpaceTransformMatrices,
					p = t.parentNodeIndices;
				h > 0 && y && p && (c = this.limitToFrame ? 0 : s >= h ? 0 : s < 0 ? h - 1 : s, e.frameFillTransformBuffer(c, it, y, p), this.isAnimationPaused || (this.frameIndex = c + .5))
			} else i = !1;
		else i = !1;
	else i = !0, o = !1;
	var w = this.canvas,
		u = this.canvasSize,
		l = Math.abs(w.width),
		a = Math.abs(w.height),
		b = l !== u.width || a !== u.height;
	if (b && (r.viewport(0, 0, l, a), u.width = l, u.height = a), (!this.limitToFrame || this.camera.isDirty() || b) && (this.camera.updateMatrices(), r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT), n && i && this.assetLoaders && Object.keys(this.assetLoaders).length === 0)) {
		for (n.setUniformData(this.lightPositionUniformData), n.setUniformData(this.mutedColorDiffuseUnfiformData), n.setUniformData(this.camera.uniformDatas.projectionMatrix), n.setUniformData(this.camera.uniformDatas.modelMatrix), n.setUniformData(this.camera.uniformDatas.viewMatrix), o ? n.setUniformData(this.skinningMatricesUniformData) : n.setUniformData(this.identityMatricesUniformData), k = v.length, f = 0; f < k; f++) {
			var d = v[f],
				g = d.itemId,
				ut = !!this.mutedItemReferenceIds && g in this.mutedItemReferenceIds,
				nt = null,
				ft = g in this.variantItemReferenceIds;
			ft && (tt = this.renderWithHelmet, nt = tt ? this.renderWithHelmetVariantsByCount : this.renderWithoutHelmetVariantsByCount);
			d.render(ut, nt)
		}
		this.dropShadowEnabled && this.boundingVolume && (this.dropShadow.setBoundingVolume(this.boundingVolume), this.itemReferenceIds.length > 1 && (this.dropShadow.dropShadowTranslation[0] -= .15), this.dropShadow.setUniformData(this.camera.uniformDatas.projectionMatrix), this.dropShadow.setUniformData(this.camera.uniformDatas.modelMatrix), this.dropShadow.setUniformData(this.camera.uniformDatas.viewMatrix), this.dropShadow.render())
	}
};
Spasm.ItemPreview.prototype.determineItemPreviewLoadProgress = function() {
	var n, t, r, i;
	this.totalLoadProgress = {
		loading: 0,
		loaded: 0
	};
	n = this.totalLoadProgress;
	t = this.loadProgressPerItem;
	for (r in t) i = t[r], n.loading += i.loading, n.loaded += i.loaded;
	this.loadProgressCallback()
};
Spasm.ItemPreview.prototype.pauseAnimation = function() {
	this.isAnimationPaused = !0
};
Spasm.ItemPreview.prototype.unPauseAnimation = function() {
	this.isAnimationPaused = !1
};