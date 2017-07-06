Spasm = Spasm || {};
Spasm.Renderer = function(n) {
	Spasm.assertCanvas(n);
	this.canvas = n;
	this.renderables = [];
	this.features = new Spasm.Features(n);
	this.canRender() ? (this.gl = this.features.gl, this.initWebGL()) : this.gl = null
};
Spasm.Renderer.prototype = {
	constructor: Spasm.Renderer
};
Spasm.Renderer.prototype.canRender = function() {
	return this.features.canRender()
};
Spasm.Renderer.prototype.initWebGL = function() {
	var n = this.gl,
		i, t, r;
	if (n)
		for (Spasm.assertWebGLContext(n), this.gl = n, n.enable(n.DEPTH_TEST), n.depthFunc(n.LESS), n.disable(n.BLEND), n.blendFunc(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA), n.disable(n.CULL_FACE), n.cullFace(n.BACK), n.clearColor(0, 0, 0, 0), this.clearFlags = n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT, n.clear(this.clearFlags), this.glTextures = [], i = 32, t = 0; t < i; t++) r = n["TEXTURE" + t], this.glTextures.push(r)
};
Spasm.Renderer.prototype.render = function() {
	var n, i;
	if (this.canRender()) {
		var r = this.gl,
			t = this.renderables,
			u = t.length;
		for (n = 0; n < u; n++) i = t[n], i.render(r)
	}
};
Spasm.Renderer.prototype.animate = function() {
	if (this.canRender()) {
		var n = this;
		window.requestAnimationFrame(function() {
			n.animate()
		});
		this.render()
	}
};
Spasm.Renderer.prototype.addRenderable = function(n) {
	Spasm.assertInstance(n, Spasm.Renderable);
	this.renderables.push(n)
};
Spasm.Renderer.prototype.getDiffusePlateTextureIndex = function() {
	return 0
};
Spasm.Renderer.prototype.getNormalPlateTextureIndex = function() {
	return 1
};
Spasm.Renderer.prototype.getGearstackPlateTextureIndex = function() {
	return 2
};
Spasm.Renderer.prototype.getDiffuseDyeTextureIndex = function() {
	return 3
};
Spasm.Renderer.prototype.getNormalDyeTextureIndex = function() {
	return 4
};
Spasm.Renderer.prototype.getDecalDyeTextureIndex = function() {
	return 5
};