Spasm = Spasm || {};
Spasm.GearShader = function(n) {
	Spasm.assertWebGLContext(n);
	this.gl = n;
	var inputTypes = Spasm.Shader.InputTypes,
		valueTypes = Spasm.Shader.ValueTypes;
	this.uniforms = {
		projectionMatrix: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.mat4, "u_projection_matrix"),
		modelMatrix: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.mat4, "u_model_matrix"),
		viewMatrix: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.mat4, "u_view_matrix"),
		positionScale: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec3, "u_position_scale"),
		positionOffset: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec3, "u_position_offset"),
		texcoordScale: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec2, "u_texcoord_scale"),
		texcoordOffset: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec2, "u_texcoord_offset"),
		skinningMatrices: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec4, "u_skinning_matrices", 216),
		textureDiffuse: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.sampler2D, "u_texture_diffuse"),
		textureNormal: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.sampler2D, "u_texture_normal"),
		textureGearstack: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.sampler2D, "u_texture_gearstack"),
		textureDyeDiffuse: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.sampler2D, "u_texture_dye_diffuse"),
		textureDyeNormal: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.sampler2D, "u_texture_dye_normal"),
		blendModeUniform: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.int, "u_blend_mode"),
		changeColor: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec4, "u_change_color"),
		decalAlphaMapTransform: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec4, "u_decal_alpha_map_transform"),
		decalBlendOption: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.int, "u_decal_blend_option"),
		detailNormalContributionStrength: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec4, "u_detail_normal_contribution_strength"),
		detailTransform: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec4, "u_detail_transform"),
		specularProperties: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec4, "u_specular_properties"),
		subsurfaceScatteringStrength: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec4, "u_subsurface_scattering_strength"),
		cameraPosition: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec3, "u_camera_position"),
		lightPosition: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec3, "u_light_position"),
		mutedColorDiffuse: new Spasm.ShaderInput(inputTypes.uniform, valueTypes.vec4, "u_muted_color_diffuse")
	};
	this.attributes = {
		position: new Spasm.ShaderInput(inputTypes.attribute, valueTypes.vec4, "a_position"),
		normal: new Spasm.ShaderInput(inputTypes.attribute, valueTypes.vec4, "a_normal"),
		tangent: new Spasm.ShaderInput(inputTypes.attribute, valueTypes.vec4, "a_tangent"),
		texcoord: new Spasm.ShaderInput(inputTypes.attribute, valueTypes.vec2, "a_texcoord"),
		texcoord1: new Spasm.ShaderInput(inputTypes.attribute, valueTypes.vec2, "a_texcoord1"),
		texcoord2: new Spasm.ShaderInput(inputTypes.attribute, valueTypes.vec2, "a_texcoord2"),
		blendIndices: new Spasm.ShaderInput(inputTypes.attribute, valueTypes.vec4, "a_blendindices"),
		blendWeights: new Spasm.ShaderInput(inputTypes.attribute, valueTypes.vec4, "a_blendweight")
	};
	this.varyings = {
		position: new Spasm.ShaderInput(inputTypes.varying, valueTypes.vec3, "v_position"),
		normal: new Spasm.ShaderInput(inputTypes.varying, valueTypes.vec3, "v_normal"),
		binormal: new Spasm.ShaderInput(inputTypes.varying, valueTypes.vec3, "v_binormal"),
		tangent: new Spasm.ShaderInput(inputTypes.varying, valueTypes.vec3, "v_tangent"),
		texcoord: new Spasm.ShaderInput(inputTypes.varying, valueTypes.vec2, "v_texcoord"),
		texcoord2: new Spasm.ShaderInput(inputTypes.varying, valueTypes.vec2, "v_texcoord2")
	};
	this.vertexShaders = {};
	this.vertexShaderInputs = {};
	this.fragmentShaders = {};
	this.fragmentShaderInputs = {};
	this.shaderPrograms = {};
	this.uniformDatas = {}
};
Spasm.GearShader.prototype = {};
Spasm.GearShader.prototype.getVertexShaderSourceLines = function(n, t, i) {
	var f = this.getVertexShaderInput(n, t, i),
		vertexShader = [],
		e, u, o;
	for (vertexShader.push("precision mediump float;"), vertexShader.push(""), e = f.length, u = 0; u < e; u++) o = f[u], vertexShader.push(o.declaration);
	return vertexShader.push(""),
		vertexShader.push("mat4 transpose(mat4 inMatrix) {vec4 i0 = inMatrix[0];vec4 i1 = inMatrix[1];vec4 i2 = inMatrix[2];vec4 i3 = inMatrix[3];mat4 outMatrix = mat4(vec4(i0.x, i1.x, i2.x, i3.x),vec4(i0.y, i1.y, i2.y, i3.y),vec4(i0.z, i1.z, i2.z, i3.z),vec4(i0.w, i1.w, i2.w, i3.w));return outMatrix;}"),
		vertexShader.push("mat4 get_bone_transform(int bone_index)"),
		vertexShader.push("{"),
			vertexShader.push("int stride_bone_index = bone_index * 3;"),
			vertexShader.push("vec4 i0 = u_skinning_matrices[stride_bone_index + 0];vec4 i1 = u_skinning_matrices[stride_bone_index + 1];vec4 i2 = u_skinning_matrices[stride_bone_index + 2];vec4 i3 = vec4(0.0, 0.0, 0.0, 1.0);"),
			vertexShader.push("mat4 bone_transform = mat4(vec4(i0.x, i1.x, i2.x, i3.x),vec4(i0.y, i1.y, i2.y, i3.y),vec4(i0.z, i1.z, i2.z, i3.z),vec4(i0.w, i1.w, i2.w, i3.w));return bone_transform;"),
		vertexShader.push("}"),
		vertexShader.push(""),
		vertexShader.push("void main()"),
		vertexShader.push("{"),
			n ? (
					vertexShader.push("ivec4 blend_indices = ivec4(a_blendindices);"),
					t ? (
							vertexShader.push("mat4 skinning_transform = (get_bone_transform(blend_indices[0]) * a_blendweight[0]);"),
							vertexShader.push("skinning_transform += (get_bone_transform(blend_indices[1]) * a_blendweight[1]);"),
							vertexShader.push("skinning_transform += (get_bone_transform(blend_indices[2]) * a_blendweight[2]);"),
							vertexShader.push("skinning_transform += (get_bone_transform(blend_indices[3]) * a_blendweight[3]);")
						) :
						(
							vertexShader.push("vec2 blend_weight = vec2(a_blendindices.zw)/255.0;"),
							vertexShader.push("mat4 skinning_transform = get_bone_transform(blend_indices[0]) * blend_weight[0];"),
							vertexShader.push("skinning_transform += get_bone_transform(blend_indices[1]) * blend_weight[1];")
						)
				) :
				(
					vertexShader.push("int bone_index = int((a_position.w * 32767.0) + 0.01);"),
					vertexShader.push("mat4 skinning_transform = get_bone_transform(bone_index);")
				),
			vertexShader.push("mat4 model_view_matrix = u_view_matrix * u_model_matrix;"),
			vertexShader.push("mat4 camera_matrix = u_projection_matrix * model_view_matrix;"),
			vertexShader.push("vec4 position_transformed = vec4((a_position.x * u_position_scale.x) + u_position_offset.x,(a_position.y * u_position_scale.y) + u_position_offset.y,(a_position.z * u_position_scale.z) + u_position_offset.z,1.0);"),
			vertexShader.push("vec4 position_skinned = vec4((skinning_transform * position_transformed).xyz, 1.0);"),
			vertexShader.push("mat3 skinning_rotation_transform = mat3(skinning_transform);"),
			vertexShader.push("mat3 model_view_rotation_transform = mat3(model_view_matrix);"),
			vertexShader.push("vec3 object_space_normal = vec3(a_normal.xyz);"),
			vertexShader.push("vec3 object_space_tangent = vec3(a_tangent.xyz);"),
			vertexShader.push("vec3 object_space_binormal = vec3(cross(object_space_normal, object_space_tangent) * a_tangent.w);"),
			vertexShader.push("mat3 normal_transform = skinning_rotation_transform;"),
			vertexShader.push("v_normal = model_view_rotation_transform * (skinning_rotation_transform * object_space_normal);"),
			vertexShader.push("v_tangent = model_view_rotation_transform * (skinning_rotation_transform * object_space_tangent);"),
			vertexShader.push("v_binormal = model_view_rotation_transform * (skinning_rotation_transform * object_space_binormal);"),
			vertexShader.push("vec2 texcoord = vec2((a_texcoord.x * u_texcoord_scale.x) + u_texcoord_offset.x,(a_texcoord.y * u_texcoord_scale.y) + u_texcoord_offset.y);"),
			vertexShader.push("v_position = (model_view_matrix * position_skinned).xyz;"),
			vertexShader.push("v_texcoord = texcoord;"),
			vertexShader.push("v_texcoord2 = ((texcoord * a_texcoord2) * u_detail_transform.xy) + u_detail_transform.zw;"),
			vertexShader.push("gl_Position = camera_matrix * position_skinned;"),
		vertexShader.push("}"),
		vertexShader.push(""),
		vertexShader
};
Spasm.GearShader.prototype.getVertexShaderInput = function(n, t, i) {
	var o = this.getVertexShaderKey(n, t, i),
		vertexShaderInputs = this.vertexShaderInputs,
		vertexShaderInput = vertexShaderInputs[o];
	if (!vertexShaderInput) {
		var uniforms = this.uniforms,
			attributes = this.attributes,
			varyings = this.varyings;
		vertexShaderInput = [];
		vertexShaderInput.push(uniforms.projectionMatrix);
		vertexShaderInput.push(uniforms.modelMatrix);
		vertexShaderInput.push(uniforms.viewMatrix);
		vertexShaderInput.push(uniforms.skinningMatrices);
		vertexShaderInput.push(uniforms.positionScale);
		vertexShaderInput.push(uniforms.positionOffset);
		vertexShaderInput.push(uniforms.texcoordScale);
		vertexShaderInput.push(uniforms.texcoordOffset);
		vertexShaderInput.push(attributes.position);
		vertexShaderInput.push(attributes.normal);
		vertexShaderInput.push(attributes.tangent);
		vertexShaderInput.push(attributes.texcoord);
		vertexShaderInput.push(uniforms.detailTransform);
		vertexShaderInput.push(attributes.texcoord2);
		n && (vertexShaderInput.push(attributes.blendIndices), t && vertexShaderInput.push(attributes.blendWeights));
		vertexShaderInput.push(varyings.position);
		vertexShaderInput.push(varyings.normal);
		vertexShaderInput.push(varyings.binormal);
		vertexShaderInput.push(varyings.tangent);
		vertexShaderInput.push(varyings.texcoord);
		vertexShaderInput.push(varyings.texcoord2);
		vertexShaderInputs[o] = vertexShaderInput
	}
	return vertexShaderInput
};
Spasm.GearShader.prototype.getFragmentShaderInput = function(n, t) {
	var f = this.getFragmentShaderKey(n, t),
		fragmentShaderInputs = this.fragmentShaderInputs,
		fragmentShaderInput = fragmentShaderInputs[f],
		r, u;
	return fragmentShaderInput || (r = this.uniforms,
		u = this.varyings,
		fragmentShaderInput = [],
		t && fragmentShaderInput.push(r.mutedColorDiffuse),
		fragmentShaderInput.push(r.textureDiffuse),
		fragmentShaderInput.push(r.textureNormal),
		fragmentShaderInput.push(r.textureGearstack),
		fragmentShaderInput.push(r.changeColor),
		fragmentShaderInput.push(r.cameraPosition),
		fragmentShaderInput.push(r.lightPosition),
		fragmentShaderInput.push(u.position),
		fragmentShaderInput.push(u.normal),
		fragmentShaderInput.push(u.binormal),
		fragmentShaderInput.push(u.tangent),
		fragmentShaderInput.push(u.texcoord),
		fragmentShaderInput.push(r.textureDyeDiffuse),
		fragmentShaderInput.push(r.textureDyeNormal),
		fragmentShaderInput.push(u.texcoord2),
		fragmentShaderInputs[f] = fragmentShaderInput),
		fragmentShaderInput
};
Spasm.GearShader.prototype.getFragmentShaderSourceLines = function(n, ignoreTextures) {
	var u = this.getFragmentShaderInput(n, ignoreTextures),
		fragmentShader = [],
		f, r, e;
	for (fragmentShader.push("precision mediump float;"),fragmentShader.push(""), f = u.length, r = 0; r < f; r++) e = u[r], fragmentShader.push(e.declaration);
	return fragmentShader.push(""),
		fragmentShader.push("#define saturate(value) clamp(value, 0.0, 1.0)"),
		fragmentShader.push("const float gamma_correction_power = 2.2;"),
		fragmentShader.push("const float gamma_correction_power_inverse = 1.0/2.2;"),
		fragmentShader.push("vec4 blend_overlay(vec4 back, vec4 front)"),
		fragmentShader.push("{"),
			fragmentShader.push("return front * saturate(back * 4.0) + saturate(back - 0.25);"),
		fragmentShader.push("}"),
		fragmentShader.push(""),
		fragmentShader.push("void main()"),
		fragmentShader.push("{"),
			fragmentShader.push("vec4 color_diffuse = pow(texture2D(u_texture_diffuse, v_texcoord), vec4(gamma_correction_power));"),
			fragmentShader.push("vec2 normal_sample_raw = texture2D(u_texture_normal, v_texcoord).xy;"),
			fragmentShader.push("vec2 normal_sample = normal_sample_raw;"),
			fragmentShader.push("vec3 tangent_world_space = normalize(v_tangent);"),
			fragmentShader.push("vec3 binormal_world_space = normalize(v_binormal);"),
			fragmentShader.push("vec3 normal_world_space = normalize(v_normal);"),
			fragmentShader.push("normal_sample = normal_sample * 2.0 - 1.0;"),
			fragmentShader.push("vec4 color_dye_diffuse_texture = texture2D(u_texture_dye_diffuse, v_texcoord2);"),
			fragmentShader.push("float dye_alpha = color_dye_diffuse_texture.w;"),
			fragmentShader.push("float dye_color_normalize = (1.0 - dye_alpha) * 0.5;"),
			fragmentShader.push("vec4 color_dye_diffuse = pow(vec4(color_dye_diffuse_texture.x * dye_alpha + dye_color_normalize, color_dye_diffuse_texture.y * dye_alpha + dye_color_normalize, color_dye_diffuse_texture.z * dye_alpha + dye_color_normalize, 1.0), vec4(gamma_correction_power));"),
			fragmentShader.push("color_diffuse = blend_overlay(color_dye_diffuse, color_diffuse);"),
			fragmentShader.push("vec4 color_dye_normal = texture2D(u_texture_dye_normal, v_texcoord2);"),
			fragmentShader.push("color_dye_normal = color_dye_normal * 2.0 - 1.0;"),
			fragmentShader.push("normal_sample = normal_sample + color_dye_normal.xy;"),
			fragmentShader.push("vec4 color_gearstack = texture2D(u_texture_gearstack, v_texcoord);"),
			ignoreTextures && (
				fragmentShader.push("color_diffuse = u_muted_color_diffuse; // vec4(0.447, 0.498, 0.465, 1.0);"),
				fragmentShader.push("color_gearstack.r = 0.0; // = vec4(0.3, 0.3, 0.3, 1.0);")
			),
			fragmentShader.push("float z = sqrt(saturate(1.0 - dot(normal_sample, normal_sample)));"),
			fragmentShader.push("vec3 normal_tangent_space = vec3(normal_sample.x, normal_sample.y, z);"),
			fragmentShader.push("vec3 bumpy_normal = (tangent_world_space * normal_tangent_space.x) + (binormal_world_space * normal_tangent_space.y) + (normal_world_space * normal_tangent_space.z);"),
			fragmentShader.push("vec3 camera_direction = normalize(u_camera_position - v_position);"),
			fragmentShader.push("float nDotL = saturate(dot(camera_direction, bumpy_normal) * (-1.0 + 2.0 * float(gl_FrontFacing)));"),
			fragmentShader.push("vec3 reflection = (bumpy_normal * (nDotL * 2.00)) - camera_direction;"),
			fragmentShader.push("float rDotV = max(0.0, dot(reflection, camera_direction));"),
			fragmentShader.push("vec3 specular = saturate(vec3(0.2,0.2,0.2) * pow(rDotV, color_gearstack.g * 255.0)) * color_gearstack.g;"),
			fragmentShader.push("vec4 blend_color_uncorrected = mix(color_diffuse,blend_overlay(color_diffuse, u_change_color),color_gearstack.r);"),
			fragmentShader.push("vec3 blend_color = pow(blend_color_uncorrected.xyz, vec3(gamma_correction_power_inverse));"),
			fragmentShader.push("vec3 ambient_color = 0.60 * blend_color;"),
			fragmentShader.push("vec3 diffuse_color = 0.40 * (nDotL * blend_color);"),
			fragmentShader.push("gl_FragColor = vec4(ambient_color + diffuse_color + specular, 1.0);"),
		fragmentShader.push("}"),
		fragmentShader.push(""),
		fragmentShader
};
Spasm.GearShader.prototype.getShaderProgramKey = function(n, t, i, r) {
	Spasm.assertBoolean(n);
	Spasm.assertBoolean(t);
	Spasm.assertBoolean(i);
	Spasm.assertBoolean(r);
	Spasm.assert(t ? n : !0);
	return JSON.stringify({
		vertexShader: this.getVertexShaderKey(n, t, i),
		fragmentShader: this.getFragmentShaderKey(i, r)
	})
};
Spasm.GearShader.prototype.getVertexShaderKey = function(hasBlendIndices, hasBlendWeights, i) {
	Spasm.assertBoolean(hasBlendIndices);
	Spasm.assertBoolean(hasBlendWeights);
	Spasm.assertBoolean(i);
	Spasm.assert(hasBlendWeights ? hasBlendIndices : !0);
	var r = {
		hasBlendWeights: hasBlendWeights,
		hasBlendIndices: hasBlendIndices
	};
	return JSON.stringify(r)
};
Spasm.GearShader.prototype.getFragmentShaderKey = function(n, ignoresTextures) {
	Spasm.assertBoolean(n);
	Spasm.assertBoolean(ignoresTextures);
	var i = {
		ignoresTextures: ignoresTextures
	};
	return JSON.stringify(i)
};
Spasm.GearShader.prototype.getVertexShader = function(hasBlendIndices, hasBlendWeights, i) {
	var shaderKey = this.getVertexShaderKey(hasBlendIndices, hasBlendWeights, i),
		shader = this.vertexShaders[shaderKey];
	if (!shader) {
		var gl = this.gl,
			shaderSourceLines = this.getVertexShaderSourceLines(hasBlendIndices, hasBlendWeights, i),
			shaderInput = this.getVertexShaderInput(hasBlendIndices, hasBlendWeights, i);
		shader = new Spasm.Shader(gl, gl.VERTEX_SHADER, shaderSourceLines, shaderInput);
		this.vertexShaders[shaderKey] = shader
	}
	return shader
};
Spasm.GearShader.prototype.getFragmentShader = function(n, ignoresTextures) {
	var shaderKey = this.getFragmentShaderKey(n, ignoresTextures),
		shader = this.fragmentShaders[shaderKey];
	if (!shader) {
		var gl = this.gl,
			shaderSourceLines = this.getFragmentShaderSourceLines(n, ignoresTextures),
			shaderInput = this.getFragmentShaderInput(n, ignoresTextures);
		shader = new Spasm.Shader(gl, gl.FRAGMENT_SHADER, shaderSourceLines, shaderInput);
		this.fragmentShaders[shaderKey] = shader
	}
	return shader
};
Spasm.GearShader.prototype.getShaderProgram = function(n, t, i, r) {
	var o, s, f, h, c, l;
	Spasm.assertBoolean(n);
	Spasm.assertBoolean(t);
	Spasm.assertBoolean(i);
	Spasm.assertBoolean(r);
	Spasm.assert(t ? n : !0, "cannot have blend weights without blend indices");
	var a = this.gl,
		e = this.getShaderProgramKey(n, t, i, r),
		u = this.shaderPrograms[e];
	if (!u) {
		if (o = this.getVertexShader(n, t, i), s = this.getFragmentShader(i, r), u = new Spasm.ShaderProgram(a, o, s), f = this.uniformDatas, h = Object.keys(f), h.length > 0) {
			u.useProgram();
			for (c in f) l = f[c], u.setUniformData(l)
		}
		this.shaderPrograms[e] = u
	}
	return u
};
Spasm.GearShader.prototype.setUniformData = function(n) {
	var r, u, t, f, i;
	Spasm.assertInstance(n, Spasm.UniformData);
	r = n.shaderInput;
	u = r.name;
	this.uniformDatas[u] = n;
	t = this.shaderPrograms;
	for (f in t) i = t[f], i.useProgram(), i.setUniformData(n)
};