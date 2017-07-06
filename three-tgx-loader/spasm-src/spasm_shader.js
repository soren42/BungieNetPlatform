Spasm = Spasm || {};
Spasm.Shader = function(n, t, i, r) {
	var e, o, f, u;
	for (Spasm.assertWebGLContext(n), Spasm.assertNumber(t), Spasm.assertArray(i), Spasm.assertArrayInstances(r, Spasm.ShaderInput), e = i.join("\n"), this.gl = n, this.type = t, this.lines = i, this.source = e, this.inputs = r, this.assertInputs(), this.uniforms = [], this.attributes = [], this.varyings = [], o = r.length, f = 0; f < o; f++) {
		u = r[f];
		switch (u.inputType) {
			case Spasm.Shader.InputTypes.uniform:
				this.uniforms.push(u);
				break;
			case Spasm.Shader.InputTypes.attribute:
				this.attributes.push(u);
				break;
			case Spasm.Shader.InputTypes.varying:
				this.varyings.push(u);
				break;
			default:
				Spasm.assert(!1)
		}
	}
	this.shader = n.createShader(t);
	Spasm.assertInstance(this.shader, WebGLShader);
	this.compile()
};
Spasm.Shader.InputTypes = {
	uniform: "uniform",
	attribute: "attribute",
	varying: "varying"
};
Spasm.Shader.ValueTypes = {
	bool: "bool",
	int: "int",
	float: "float",
	vec2: "vec2",
	vec3: "vec3",
	vec4: "vec4",
	bvec2: "bvec2",
	bvec3: "bvec3",
	bvec4: "bvec4",
	ivec2: "ivec2",
	ivec3: "ivec3",
	ivec4: "ivec4",
	mat2: "mat2",
	mat3: "mat3",
	mat4: "mat4",
	sampler2D: "sampler2D",
	samplerCube: "samplerCube"
};
Spasm.Shader.prototype = {
	constructor: Spasm.Shader
};
Spasm.Shader.prototype.compile = function() {
	var n = this.gl,
		i = this.source,
		t = this.shader;
	n.shaderSource(t, i);
	n.compileShader(t);
	this.assertCompileStatus()
};
Spasm.Shader.prototype.assertCompileStatus = function() {
	var t = this.gl,
		i = this.shader,
		n;
	if (0) {
		n = t.getShaderInfoLog(i);
		throw n;
	}
};
Spasm.Shader.prototype.assertInputs = function() {
	for (var i = this.source, t = this.inputs, r = t.length, n = 0; n < r; n++) {
		var u = t[n],
			f = u.declaration,
			e = i.indexOf(f);
		Spasm.assert(e >= 0)
	}
};