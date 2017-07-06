Spasm = Spasm || {};
Spasm.Features = function(n) {
	var u, e, o, r, s;
	Spasm.assertCanvas(n);
	this.canvas = n;
	var t = null,
		f = null,
		i = null,
		h = Spasm.Features.supportsWebGL();
	if (h) try {
		u = {
			antialias: !0,
			preserveDrawingBuffer: !0
		};
		t = n.getContext("webgl", u) || n.getContext("experimental-webgl", u);
		i = t.getParameter(t.VIEWPORT)
	} catch (c) {
		f = c
	}
	if (this.gl = t, this.glException = f, this.viewport = i, this.requiredShaderValueCountSupported = !1, this.requiredExtensionsSupported = !1, this.requiredFunctionsSupported = !1, i)
		for (e = [], o = i.length, r = 0; r < o; r++) s = i[r], e.push(s);
	this.shaderSupport = {
		vertex: {
			uniformVectors: 0,
			attributes: 0
		},
		fragment: {
			uniformVectors: 0,
			varyingVectors: 0,
			textureCount: 0
		}
	};
	t && (this.requiredShaderValueCountSupported = this.checkMaxShaderValues(t), this.checkContextAttributes(t), this.requiredExtensionsSupported = this.checkExtensions(t), this.requiredFunctionsSupported = this.checkRequiredFunctions())
};
Spasm.Features.prototype = {};
Spasm.Features.prototype.floatingPointTextureExtensionName = "OES_texture_float";
Spasm.Features.prototype.requiredExtensions = [];
Spasm.Features.prototype.optionalExtensions = [Spasm.Features.prototype.floatingPointTextureExtensionName, "WEBGL_lose_context", "WEBKIT_WEBGL_lose_context", "MOZ_WEBGL_lose_context"];
Spasm.Features.prototype.requiredFunctions = ["ArrayBuffer.prototype.slice"];
Spasm.Features.prototype.checkRequiredFunctions = function() {
	var u = this.requiredFunctions,
		t, e, i, r, f;
	for (Spasm.assertStringArray(u), t = !0, e = u.length, i = 0; i < e; i++) {
		var s = u[i],
			o = s.split("."),
			h = o.length,
			n = window;
		for (r = 0; r < h; r++)
			if (f = o[r], n && n[f]) n = n[f];
			else break;
		t = t && typeof n == "function"
	}
	return t
};
Spasm.Features.supportsWebGL = function() {
	return !!window.WebGLRenderingContext
};
Spasm.Features.prototype.supportsFloatingPointTextures = function() {
	return this.floatingPointTextureExtensionStatus
};
Spasm.Features.prototype.canRender = function() {
	var n = this.gl;
	return Spasm.Features.supportsWebGL() && n && this.requiredShaderValueCountSupported && this.requiredExtensionsSupported && this.requiredFunctionsSupported && !n.isContextLost()
};
Spasm.Features.prototype.checkMaxShaderValues = function(n) {
	var u, f, h, c, l;
	Spasm.assertWebGLContext(n);
	var t = !0,
		i = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),
		r = n.getParameter(n.MAX_VERTEX_ATTRIBS);
	this.shaderSupport.vertex.uniformVectors = i;
	this.shaderSupport.vertex.attributes = r;
	u = 250;
	i < u && (console.log("insufficient vertex shader uniform vector count (require " + u + ", have " + i + ")"), t = !1);
	f = 8;
	r < f && (console.log("insufficient vertex shader attribute count (require " + f + ", have " + r + ")"), t = !1);
	var e = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),
		o = n.getParameter(n.MAX_VARYING_VECTORS),
		s = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS);
	return this.shaderSupport.fragment.uniformVectors = e, this.shaderSupport.fragment.varyingVectors = o, this.shaderSupport.fragment.textureCount = s, h = 2, e < h && (console.log("insufficient fragment shader uniform vector count (require " + h + ", have " + e + ")"), t = !1), c = 5, o < c && (console.log("insufficient fragment shader varying vector count (require " + c + ", have " + o + ")"), t = !1), l = 6, s < l && (console.log("insufficient fragment shader texture count (require " + l + ", have " + s + ")"), t = !1), t
};
Spasm.Features.prototype.checkContextAttributes = function(n) {
	Spasm.assertWebGLContext(n);
	var t = n.getContextAttributes();
	Spasm.assertValid(t, "invalid context attributes")
};
Spasm.Features.prototype.checkExtensions = function(n) {
	Spasm.assertWebGLContext(n);
	var t = n.getSupportedExtensions(),
		i = this.requiredExtensions,
		r = this.optionalExtensions,
		u = this.extensionStatus(i, t);
	return this.optionalExtensionStatus = this.extensionStatus(r, t), this.floatingPointTextureExtensionStatus = t.indexOf(this.floatingPointTextureExtensionName), u
};
Spasm.Features.prototype.extensionStatus = function(n, t) {
	var r, f, i, u, e;
	for (Spasm.assertStringArray(n), Spasm.assertStringArray(t), r = {}, f = n.length, i = 0; i < f; i++) u = n[i], e = t.indexOf(u), r[u] = e >= 0;
	return r
};