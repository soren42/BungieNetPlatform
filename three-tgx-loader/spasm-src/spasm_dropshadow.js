Spasm = Spasm || {};
Spasm.DropShadow = function(n) {
	var i, t, r, u;
	Spasm.assertWebGLContext(n);
	this.gl = n;
	this.vertices = [-1, -1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, 1, 1, 0, 1];
	this.boundingVolume = null;
	i = Spasm.Shader.InputTypes;
	t = Spasm.Shader.ValueTypes;
	this.uniforms = {
		projectionMatrix: new Spasm.ShaderInput(i.uniform, t.mat4, "u_projection_matrix"),
		modelMatrix: new Spasm.ShaderInput(i.uniform, t.mat4, "u_model_matrix"),
		viewMatrix: new Spasm.ShaderInput(i.uniform, t.mat4, "u_view_matrix"),
		scale: new Spasm.ShaderInput(i.uniform, t.vec4, "u_drop_shadow_scale"),
		translation: new Spasm.ShaderInput(i.uniform, t.vec4, "u_drop_shadow_translation"),
		shadowColor: new Spasm.ShaderInput(i.uniform, t.vec4, "u_shadow_color")
	};
	this.attributes = {
		position: new Spasm.ShaderInput(i.attribute, t.vec4, "a_position")
	};
	this.varyings = {
		position: new Spasm.ShaderInput(i.varying, t.vec4, "v_position")
	};
	this.vertexBufferAttribute = new Spasm.VertexBufferAttribute("position", 0, t.vec4, n.FLOAT, 4, !1, 16, 0);
	this.vertexBuffer = new Spasm.VertexBuffer(n, new Float32Array(this.vertices).buffer, this.vertices.length, 4, [this.vertexBufferAttribute]);
	this.dropShadowScale = new Float32Array([1, 1, 1, 1]);
	this.dropShadowScaleUniform = new Spasm.ShaderInput(i.uniform, t.vec4, "u_drop_shadow_scale");
	this.dropShadowScaleUnfiformData = new Spasm.UniformData(this.dropShadowScaleUniform, this.dropShadowScale);
	this.dropShadowTranslation = new Float32Array([0, 0, 0, 1]);
	this.dropShadowTranslationUniform = new Spasm.ShaderInput(i.uniform, t.vec4, "u_drop_shadow_translation");
	this.dropShadowTranslationUnfiformData = new Spasm.UniformData(this.dropShadowTranslationUniform, this.dropShadowTranslation);
	this.uniformDatas = {};
	r = this.getVertexShaderInputs();
	u = this.getFragmentShaderInputs();
	this.vertexShader = new Spasm.Shader(n, n.VERTEX_SHADER, this.getVertexShaderSourceLines(r), r);
	this.fragmentShader = new Spasm.Shader(n, n.FRAGMENT_SHADER, this.getFragmentShaderSourceLines(u), u);
	this.shaderProgram = new Spasm.ShaderProgram(n, this.vertexShader, this.fragmentShader)
};
Spasm.DropShadow.prototype = {};
Spasm.DropShadow.prototype.setUniformData = function(n) {
	Spasm.assertInstance(n, Spasm.UniformData);
	var t = n.shaderInput,
		i = t.name;
	this.uniformDatas[i] = n;
	this.shaderProgram.useProgram();
	this.shaderProgram.setUniformData(n)
};
Spasm.DropShadow.prototype.render = function() {
	this.setUniformData(this.dropShadowScaleUnfiformData);
	this.setUniformData(this.dropShadowTranslationUnfiformData);
	this.shaderProgram.useProgram();
	this.vertexBuffer.bindBuffer();
	this.shaderProgram.bindVertexAttributes([this.vertexBuffer]);
	var n = this.gl,
		t = n.isEnabled(n.BLEND),
		i = n.isEnabled(n.CULL_FACE);
	n.enable(n.BLEND);
	n.enable(n.CULL_FACE);
	n.drawArrays(n.TRIANGLE_STRIP, 0, 4);
	t || n.disable(n.BLEND);
	i || n.disable(n.CULL_FACE)
};
Spasm.DropShadow.prototype.getVertexShaderSourceLines = function(n) {
	var t, r, i, u;
	for (Spasm.assertArrayInstances(n, Spasm.ShaderInput), t = [], t.push("precision mediump float;"), t.push(""), r = n.length, i = 0; i < r; i++) u = n[i], t.push(u.declaration);
	return t.push(""), t.push("void main()"), t.push("{"), t.push("mat4 model_view_matrix = u_view_matrix * u_model_matrix;"), t.push("mat4 camera_matrix = u_projection_matrix * model_view_matrix;"), t.push("vec4 position_transformed = vec4((a_position.x * u_drop_shadow_scale.x) + u_drop_shadow_translation.x,(a_position.y * u_drop_shadow_scale.y) + u_drop_shadow_translation.y,(a_position.z * u_drop_shadow_scale.z) + u_drop_shadow_translation.z,1.0);"), t.push("gl_Position = camera_matrix * position_transformed;"), t.push("v_position = a_position;"), t.push("}"), t.push(""), t
};
Spasm.DropShadow.prototype.getFragmentShaderSourceLines = function(n) {
	var t, r, i, u;
	for (Spasm.assertArrayInstances(n, Spasm.ShaderInput), t = [], t.push("precision mediump float;"), t.push(""), r = n.length, i = 0; i < r; i++) u = n[i], t.push(u.declaration);
	return t.push(""), t.push("void main()"), t.push("{"), t.push("float distance = (v_position.x * v_position.x)+ (v_position.y * v_position.y);"), t.push("float intensity = 1.0 - (distance * (5.0/3.0));"), t.push("gl_FragColor = vec4(0.0, 0.0, 0.0, intensity - 0.3);"), t.push("}"), t.push(""), t
};
Spasm.DropShadow.prototype.getVertexShaderInputs = function() {
	var n = this.uniforms,
		t = this.attributes,
		i = this.varyings;
	return [n.projectionMatrix, n.modelMatrix, n.viewMatrix, n.scale, n.translation, t.position, i.position]
};
Spasm.DropShadow.prototype.getFragmentShaderInputs = function() {
	var n = this.varyings;
	return [n.position]
};
Spasm.DropShadow.prototype.setBoundingVolume = function(n) {
	Spasm.assertInstance(n, Spasm.BoundingVolume);
	this.boundingVolume = n;
	var t = n.getCenterPoint();
	this.dropShadowTranslation[0] = t[0];
	this.dropShadowTranslation[1] = t[1];
	this.dropShadowTranslation[2] = n.minZ - .005;
	this.dropShadowScale[0] = (n.maxX - n.minX) / 2 * 1.5;
	this.dropShadowScale[1] = (n.maxY - n.minY) / 2 * 1.5
};