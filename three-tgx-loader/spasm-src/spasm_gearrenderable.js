Spasm = Spasm || {};
Spasm.GearRenderable = function(itemId, renderableModels) {
	Spasm.assertString(itemId);
	Spasm.assertArrayInstances(renderableModels, Spasm.GearRenderableModel);
	this.itemId = itemId;
	this.renderableModels = renderableModels
};
Spasm.GearRenderable.prototype = {};
Spasm.GearRenderable.prototype.getBoundingVolume = function() {
	var n = this.getBoundingVolumes();
	return Spasm.boundingVolumeFromBoundingVolumes(n)
};
Spasm.GearRenderable.prototype.getBoundingVolumes = function() {
	for (var renderableModels = this.renderableModels,
			 renderableModelsLength = renderableModels.length,
			 boundingVolumes = [],
			 t,
			 renderable,
			 boundingVolume,
			 n = 0; n < renderableModelsLength; n++) {
		var renderableModel = renderableModels[n],
			renderables = renderableModel.renderables,
			renderablesLength = renderables.length;
		for (t = 0; t < renderablesLength; t++)
			renderable = renderables[t],
			boundingVolume = renderable.boundingVolume,
			boundingVolumes.push(boundingVolume)
	}
	return boundingVolumes
};
Spasm.GearRenderable.prototype.setGearShaders = function(n) {
	var i, r, t, u;
	for (Spasm.assertInstance(n, Spasm.GearShader),
			 this.gearShaders = n,
			 i = this.renderableModels,
			 r = i.length,
			 t = 0; t < r; t++)
		u = i[t],
		u.setGearShaders(n)
};
Spasm.GearRenderable.prototype.getResolvedDyeList = function(gearDyes, useCustomDyes) {
	var r, defaultDye, customDyes, customDyesLength, u, customDye, lockedDyesLength, f, lockedDye, e, dyeSlotTypeKey, resolvedDye;
	Spasm.assertValid(gearDyes);
	var defaultDyes = gearDyes.defaultDyes,
		lockedDyes = gearDyes.lockedDyes,
		dyeSlotTypes = {},
		defaultDyesLength = defaultDyes.length;

	for (r = 0; r < defaultDyesLength; r++)
		defaultDye = defaultDyes[r],
		dyeSlotTypes[defaultDye.slotTypeIndex] = defaultDye;

	if (useCustomDyes)
		for (Spasm.assertValid(useCustomDyes),
				 customDyes = useCustomDyes.customDyes,
				 customDyesLength = customDyes.length,
				 u = 0; u < customDyesLength; u++)
			customDye = customDyes[u],
			dyeSlotTypes[customDye.slotTypeIndex] = customDye;

	for (lockedDyesLength = lockedDyes.length,
			 f = 0; f < lockedDyesLength; f++)
		lockedDye = lockedDyes[f],
		dyeSlotTypes[lockedDye.slotTypeIndex] = lockedDye;

	var dyeSlotTypeKeys = Object.keys(dyeSlotTypes),
		dyeSlotTypeKeysLength = dyeSlotTypeKeys.length,
		resolvedDyeList = [];
	for (e = 0; e < dyeSlotTypeKeysLength; e++)
		dyeSlotTypeKey = dyeSlotTypeKeys[e],
		resolvedDye = dyeSlotTypes[dyeSlotTypeKey],
		resolvedDyeList.push(resolvedDye);
	return resolvedDyeList
};
Spasm.GearRenderable.prototype.setGearDyes = function(gearDyes) {
	var t, renderableModel;
	Spasm.assertValid(gearDyes);
	this.gearDyes = gearDyes;
	var resolvedDyeList = this.getResolvedDyeList(gearDyes, null),
		renderableModels = this.renderableModels,
		renderableModelsLength = renderableModels.length;
	for (t = 0; t < renderableModelsLength; t++)
		renderableModel = renderableModels[t],
		renderableModel.setGearDyes(resolvedDyeList)
};
Spasm.GearRenderable.prototype.setShaderOverrideDyes = function(n) {
	var t, r;
	if (n) {
		Spasm.assertValid(n);
		this.shaderOverrideDyes = n;
		var u = this.getResolvedDyeList(this.gearDyes, n),
			i = this.renderableModels,
			f = i.length;
		for (t = 0; t < f; t++) r = i[t], r.setGearDyes(u)
	} else this.setGearDyes(this.gearDyes)
};
Spasm.GearRenderable.prototype.render = function(n, t) {
	for (var renderableModels = this.renderableModels,
			 renderableModelsLength = renderableModels.length,
			 renderableModel,
			 i = 0; i < renderableModelsLength; i++)
		renderableModel = renderableModels[i],
		renderableModel.render(n, t)
};
Spasm.GearRenderableModel = function(renderModelId, renderables) {
	var u, i, r, e;
	for (Spasm.assertString(renderModelId),
			 Spasm.assertArrayInstances(renderables, Spasm.Renderable),
			 this.renderModelId = renderModelId,
			 this.renderables = renderables,
			 this.partExternalIdentifiers = {},
			 u = renderables.length,
			 i = 0; i < u; i++) {
		var o = renderables[i],
			partExternalIdentifiers = o.partExternalIdentifiers,
			partExternalIdentifiersList = Object.keys(partExternalIdentifiers),
			partExternalIdentifiersListLength = partExternalIdentifiersList.length;
		for (r = 0; r < partExternalIdentifiersListLength; r++)
			e = partExternalIdentifiersList[r],
			this.partExternalIdentifiers[e] = ""
	}
	this.partExternalIdentifierCount = Object.keys(this.partExternalIdentifiers).length
};
Spasm.GearRenderableModel.prototype = {};
Spasm.GearRenderableModel.prototype.setGearShaders = function(n) {
	var i, r, t, u;
	for (Spasm.assertInstance(n, Spasm.GearShader), this.gearShaders = n, i = this.renderables, r = i.length, t = 0; t < r; t++) u = i[t], u.setGearShaders(n)
};
Spasm.GearRenderableModel.prototype.setGearDyes = function(n) {
	var i, r, t, u;
	for (Spasm.assertArrayInstances(n, Spasm.GearDye), this.gearDyes = n, i = this.renderables, r = i.length, t = 0; t < r; t++) u = i[t], u.setGearDyes(n)
};
Spasm.GearRenderableModel.prototype.render = function(n, t) {
	var renderables = this.renderables,
		u = null,
		renderablesLength, i, renderable;
	for (t && (u = t[this.partExternalIdentifierCount]), renderablesLength = renderables.length, i = 0; i < renderablesLength; i++)
		renderable = renderables[i],
		renderable.render(n, u)
};
