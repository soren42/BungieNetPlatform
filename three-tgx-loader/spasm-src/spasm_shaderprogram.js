Spasm = Spasm || {};
Spasm.ShaderProgram = function(n, t, i) {
	Spasm.assertWebGLContext(n);
	Spasm.assertInstance(t, Spasm.Shader);
	Spasm.assertInstance(i, Spasm.Shader);
	this.gl = n;
	this.vertexShader = t;
	this.fragmentShader = i;
	this.assertMatchingVaryings();
	this.program = n.createProgram();
	Spasm.assertInstance(this.program, WebGLProgram);
	this.handles = {};
	this.hasHandles = !1;
	this.link()
};
Spasm.ShaderProgram.prototype = {
	constructor: Spasm.ShaderProgram
};
Spasm.ShaderProgram.prototype.link = function() {
	var n = this.gl,
		t = this.program,
		i = this.vertexShader,
		r = this.fragmentShader;
	n.attachShader(t, i.shader);
	n.attachShader(t, r.shader);
	n.linkProgram(t)
};
Spasm.ShaderProgram.prototype.assertLinkStatus = function() {
	var t = this.gl,
		i = this.program,
		n;
	if (0) {
		n = t.getProgramInfoLog(i);
		throw n;
	}
};
Spasm.ShaderProgram.prototype.assertValidateStatus = function() {
	var n = this.gl,
		t = this.program,
		i, r;
	if (n.validateProgram(t), i = !0, !i) {
		r = n.getProgramInfoLog(t);
		throw r;
	}
};
Spasm.ShaderProgram.prototype.assertMatchingVaryings = function() {
	var e = this.vertexShader,
		o = this.fragmentShader,
		t = e.varyings,
		i = o.varyings,
		r = t.length,
		s = i.length,
		n, u, f;
	for (Spasm.assertEqual(r, s), n = 0; n < r; n++) u = t[n], f = i[n], Spasm.assert(u.equals(f))
};
Spasm.ShaderProgram.prototype.getHandles = function() {
	for (var u = this.gl, f = this.program, e = this.handles, n = this.vertexShader, s = this.fragmentShader, w = n.uniforms.length, l, i, v, r, t = 0; t < w; t++) {
		var b = n.uniforms[t],
			h = b.name,
			c = u.getUniformLocation(f, h);
		c instanceof WebGLUniformLocation && (e[h] = c)
	}
	for (l = n.attributes.length, i = 0; i < l; i++) {
		var k = n.attributes[i],
			a = k.name,
			o = u.getAttribLocation(f, a);
		Spasm.assertInteger(o);
		o >= 0 && (e[a] = o)
	}
	for (v = s.uniforms.length, r = 0; r < v; r++) {
		var d = s.uniforms[r],
			y = d.name,
			p = u.getUniformLocation(f, y);
		p instanceof WebGLUniformLocation && (e[y] = p)
	}
	this.hasHandles = !0
};
Spasm.ShaderProgram.prototype.useProgram = function() {
	var n = this.gl,
		t = this.program;
	n.useProgram(t)
};
Spasm.ShaderProgram.prototype.bindVertexAttributes = function(n) {
	var l, a, i, v, y, r, u, t, f, p, e, s, h, c;
	for (Spasm.assertArrayInstances(n, Spasm.VertexBuffer), l = this.vertexShader, this.hasHandles || this.getHandles(), a = this.handles, i = l.attributes, Spasm.assertArrayInstances(i, Spasm.ShaderInput), v = i.length, y = n.length, r = 0; r < y; r++)
		for (u = n[r], u.bindBuffer(), t = u.attributes, Spasm.assertArrayInstances(t, Spasm.VertexBufferAttribute), f = t.slice(), p = t.length, e = 0; e < p; e++) {
			var o = t[e],
				w = o.shaderValueName,
				b = o.shaderValueType;
			for (s = 0; s < v; s++)
				if (h = i[s], h.name === w && h.valueType === b) {
					f = f.splice(f.indexOf(o), 1);
					c = a[h.name];
					!c && c !== 0 || u.setAttributePointer(c, o);
					break
				}
		}
};
Spasm.ShaderProgram.prototype.resetVertexAttributes = function() {
	for (var r = this.gl, u = this.vertexShader, f = this.handles, t = u.attributes, e = t.length, n = 0; n < e; n++) {
		var o = t[n],
			s = o.name,
			i = f[s];
		i >= 0 && r.disableVertexAttribArray(i)
	}
};
Spasm.ShaderProgram.prototype.setUniformData = function(n) {
	var i;
	Spasm.assert(n, Spasm.UniformData);
	this.hasHandles || this.getHandles();
	var f = this.handles,
		u = n.shaderInput,
		r = n.data,
		e = u.name,
		o = u.valueType,
		t = f[e];
	if (t) {
		i = this.gl;
		switch (o) {
			case "mat2":
				i.uniformMatrix2fv(t, !1, r);
				break;
			case "mat3":
				i.uniformMatrix3fv(t, !1, r);
				break;
			case "mat4":
				i.uniformMatrix4fv(t, !1, r);
				break;
			case "vec2":
				i.uniform2fv(t, r);
				break;
			case "vec3":
				i.uniform3fv(t, r);
				break;
			case "vec4":
				i.uniform4fv(t, r);
				break;
			case "float":
				i.uniform1f(t, r);
				break;
			case "sampler2D":
				i.uniform1i(t, r);
				break;
			default:
				Spasm.assert(!1, "invalid or missing uniform value type")
		}
	}
};