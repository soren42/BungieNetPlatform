Spasm = Spasm || {};
Spasm.GearDye = function(n, t) {
	Spasm.assertValid(n);
	Spasm.assertCollectionInstances(t, Spasm.Texture);
	this.dye = n;
	this.textures = t;
	this.identifier = n.identifier;
	this.blendMode = n.blend_mode;
	this.slotTypeIndex = n.slot_type_index;
	this.materialProperties = {
		primaryColor: n.material_properties.primary_color,
		secondaryColor: n.material_properties.secondary_color,
		detailTransform: n.material_properties.detail_transform,
		detailNormalContributionStrength: n.material_properties.detail_normal_contribution_strength,
		decalAlphaMapTransform: n.material_properties.decal_alpha_map_transform,
		decalBlendOption: n.material_properties.decal_blend_option,
		specularProperties: n.material_properties.specular_properties,
		subsurfaceScatteringStrength: n.material_properties.subsurface_scattering_strength
	};
	this.uniformDatas = this.getUniformDatas()
};
Spasm.GearDye.prototype = {};
Spasm.GearDye.prototype.bindTextures = function() {
	for (var t = this.textures, i = Object.keys(t), f = i.length, r, u, n = 0; n < f; n++) r = i[n], u = t[r], u.bindTexture()
};
Spasm.GearDye.prototype.getUniformDatas = function() {
	var n = Spasm.Shader.InputTypes,
		t = Spasm.Shader.ValueTypes,
		r = new Spasm.ShaderInput(n.uniform, t.int, "u_blend_mode"),
		i = new Spasm.ShaderInput(n.uniform, t.vec4, "u_change_color"),
		u = new Spasm.ShaderInput(n.uniform, t.vec4, "u_decal_alpha_map_transform"),
		f = new Spasm.ShaderInput(n.uniform, t.int, "u_decal_blend_option"),
		e = new Spasm.ShaderInput(n.uniform, t.vec4, "u_detail_normal_contribution_strength"),
		o = new Spasm.ShaderInput(n.uniform, t.vec4, "u_detail_transform"),
		s = new Spasm.ShaderInput(n.uniform, t.vec4, "u_specular_properties"),
		h = new Spasm.ShaderInput(n.uniform, t.vec4, "u_subsurface_scattering_strength"),
		c = new Spasm.UniformData(r, this.blendMode.value),
		l = new Spasm.UniformData(u, this.materialProperties.decalAlphaMapTransform),
		a = new Spasm.UniformData(f, this.materialProperties.decalBlendOption),
		v = new Spasm.UniformData(e, this.materialProperties.detailNormalContributionStrength),
		y = new Spasm.UniformData(o, this.materialProperties.detailTransform),
		p = new Spasm.UniformData(s, this.materialProperties.specularProperties),
		w = new Spasm.UniformData(h, this.materialProperties.subsurfaceScatteringStrength),
		b = new Spasm.ShaderInput(n.uniform, t.sampler2D, "u_texture_dye_diffuse"),
		k = new Spasm.ShaderInput(n.uniform, t.sampler2D, "u_texture_dye_normal"),
		d = new Spasm.ShaderInput(n.uniform, t.sampler2D, "u_texture_dye_decal"),
		g = new Spasm.UniformData(b, 3),
		nt = new Spasm.UniformData(k, 4),
		tt = new Spasm.UniformData(d, 5),
		it = [c, l, a, v, y, p, w, g, nt, tt];
	return this.primaryColorUniformData = new Spasm.UniformData(i, this.materialProperties.primaryColor), this.secondaryColorUniformData = new Spasm.UniformData(i, this.materialProperties.secondaryColor), it
};
