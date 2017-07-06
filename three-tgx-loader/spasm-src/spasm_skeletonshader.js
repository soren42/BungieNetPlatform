Spasm = Spasm || {};
Spasm.SkeletonShader = function(n) {
	Spasm.assertWebGLContext(n);
	this.gl = n;
	var t = Spasm.Shader.InputTypes,
		i = Spasm.Shader.ValueTypes;
	this.uniforms = {
		projectionMatrix: new Spasm.ShaderInput(t.uniform, i.mat4, "u_projection_matrix"),
		modelMatrix: new Spasm.ShaderInput(t.uniform, i.mat4, "u_model_matrix"),
		viewMatrix: new Spasm.ShaderInput(t.uniform, i.mat4, "u_view_matrix"),
		vertexColor: new Spasm.ShaderInput(t.uniform, i.vec4, "u_vertex_color"),
		pointSize: new Spasm.ShaderInput(t.uniform, i.float, "u_point_size")
	};
	this.attributes = {
		boneIndex: new Spasm.ShaderInput(t.attribute, i.float, "a_bone_index"),
		vertexColor: new Spasm.ShaderInput(t.attribute, i.vec4, "a_vertex_color")
	};
	this.varyings = {
		vertexColor: new Spasm.ShaderInput(t.varying, i.vec4, "v_vertex_color")
	};
	this.vertexShaders = {};
	this.vertexShaderInputs = {};
	this.vertexShaderSources = {};
	this.fragmentShaders = {};
	this.fragmentShaderInputs = {};
	this.fragmentShaderSources = {};
	this.shaderPrograms = {}
};
Spasm.SkeletonShader.prototype = {};
Spasm.SkeletonShader.prototype.maxBoneCount = 72;
Spasm.SkeletonShader.prototype.getBoneTransformsUniform = function(n) {
	Spasm.assertInteger(n);
	Spasm.assert(n > 0);
	Spasm.assert(n <= this.maxBoneCount);
	var t = Spasm.Shader.InputTypes,
		i = Spasm.Shader.ValueTypes;
	return new Spasm.ShaderInput(t.uniform, i.vec4, "u_bone_transforms", n * 3)
};
Spasm.SkeletonShader.prototype.getVertexShaderKey = function(n, t) {
	Spasm.assertInteger(n);
	Spasm.assertBoolean(t);
	return "" + n + t
};
Spasm.SkeletonShader.prototype.getFragmentShaderKey = function(n) {
	Spasm.assertBoolean(n);
	return "" + n
};
Spasm.SkeletonShader.prototype.getShaderProgramKey = function(n, t) {
	Spasm.assertInteger(n);
	Spasm.assertBoolean(t);
	return "" + n + t
};
Spasm.SkeletonShader.prototype.getVertexShaderInput = function(n, t) {
	var u, i, e;
	if (Spasm.assertInteger(n), Spasm.assertBoolean(t), u = this.getVertexShaderKey(n, t), i = this.vertexShaderInputs[u], !i) {
		var r = this.uniforms,
			f = this.attributes,
			o = this.varyings;
		i = [];
		i.push(r.projectionMatrix);
		i.push(r.modelMatrix);
		i.push(r.viewMatrix);
		i.push(r.pointSize);
		e = this.getBoneTransformsUniform(n);
		i.push(e);
		t ? (i.push(f.vertexColor), i.push(o.vertexColor)) : i.push(r.vertexColor);
		i.push(f.boneIndex);
		this.vertexShaderInputs[u] = i
	}
	return i
};
Spasm.SkeletonShader.prototype.getVertexShaderSource = function(n, t) {
	var u, r, i, e, o, f, s;
	if (Spasm.assertInteger(n), Spasm.assertBoolean(t), u = this.getVertexShaderKey(n, t), r = this.vertexShaderSources[u], !r) {
		for (i = [], i.push("// Spasm.SkeletonShader vertex shader"), i.push("// key = " + u), i.push(""), i.push("precision mediump float;"), i.push(""), i.push("// inputs"), e = this.getVertexShaderInput(n, t), o = e.length, f = 0; f < o; f++) s = e[f], i.push(s.declaration);
		i.push("");
		i.push("void main()");
		i.push("{");
		i.push("// bone transform");
		i.push("int bone_index = int(a_bone_index);");
		i.push("int stride_bone_index = 3 * bone_index;");
		i.push("mat4 bone_transform = mat4(u_bone_transforms[stride_bone_index + 0],u_bone_transforms[stride_bone_index + 1],u_bone_transforms[stride_bone_index + 2],vec4(0.0, 0.0, 0.0, 1.0));");
		i.push("vec4 bone_position = vec4(bone_transform[0][3],bone_transform[1][3],bone_transform[2][3],1.0);");
		i.push("");
		i.push("// position");
		i.push("vec4 position = (u_projection_matrix * u_view_matrix * u_model_matrix) * bone_position;");
		i.push("gl_Position = position;");
		i.push("");
		i.push("gl_PointSize = u_point_size;");
		t && (i.push("v_vertex_color = a_vertex_color;"), i.push(""));
		i.push("}");
		i.push("");
		r = i.join("\n");
		this.vertexShaderSources[u] = r
	}
	return r
};
Spasm.SkeletonShader.prototype.getFragmentShaderInput = function(n) {
	var i = this.getFragmentShaderKey(n),
		t = this.fragmentShaderInputs[i],
		r, u;
	return t || (r = this.uniforms, u = this.varyings, t = [], n ? t.push(u.vertexColor) : t.push(r.vertexColor), this.fragmentShaderInputs[i] = t), t
};
Spasm.SkeletonShader.prototype.getFragmentShaderSource = function(n) {
	var u = this.getFragmentShaderKey(n),
		i = this.fragmentShaderSources[u],
		t, f, e, r, o;
	if (!i) {
		for (t = [], t.push("// Spasm.SkeletonShader fragment shader"), t.push("// key = " + u), t.push(""), t.push("precision mediump float;"), t.push(""), t.push("// inputs"), f = this.getFragmentShaderInput(n), e = f.length, r = 0; r < e; r++) o = f[r], t.push(o.declaration);
		t.push("");
		t.push("void main()");
		t.push("{");
		n ? t.push("gl_FragColor = v_vertex_color;") : t.push("gl_FragColor = u_vertex_color;");
		t.push("}");
		t.push("");
		i = t.join("\n");
		this.fragmentShaderSources[u] = i
	}
	return i
};
Spasm.SkeletonShader.prototype.getFragmentShader = function(n) {
	var i = this.getFragmentShaderKey(n),
		t = this.fragmentShaders[i];
	if (!t) {
		var u = this.getFragmentShaderInput(n),
			f = this.getFragmentShaderSource(n),
			r = this.gl;
		t = new Spasm.Shader(r, r.FRAGMENT_SHADER, f, u);
		this.fragmentShaders[i] = t
	}
	return t
};
Spasm.SkeletonShader.prototype.getVertexShader = function(n, t) {
	var r, i;
	if (Spasm.assertInteger(n), Spasm.assertBoolean(t), r = this.getVertexShaderKey(n, t), i = this.vertexShaders[r], !i) {
		var f = this.getVertexShaderInput(n, t),
			e = this.getVertexShaderSource(n, t),
			u = this.gl;
		i = new Spasm.Shader(u, u.VERTEX_SHADER, e, f);
		this.vertexShaders[r] = i
	}
	return i
};
Spasm.SkeletonShader.prototype.getShaderProgram = function(n, t) {
	var r = this.getShaderProgramKey(n, t),
		i = this.shaderPrograms[r];
	if (!i) {
		var u = this.getVertexShader(n, t),
			f = this.getFragmentShader(t),
			e = this.gl;
		i = new Spasm.ShaderProgram(e, u, f);
		this.shaderPrograms[r] = i
	}
	return i
};