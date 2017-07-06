Spasm = Spasm || {};
Spasm.Texture = function(n, t, i) {
	Spasm.assertWebGLContext(n);
	Spasm.assertInteger(t);
	Spasm.assertImage(i);
	Spasm.assert(t >= 0, "texture index is less than 0: " + t);
	Spasm.assert(t < 32, "texture index is greater or equal to 32: " + t);
	this.gl = n;
	this.index = t;
	this.image = i;
	this.glTextureIndex = n["TEXTURE" + t];
	Spasm.assertInteger(this.glTextureIndex);
	this.textureHandle = n.createTexture();
	this.setTextureImage()
};
Spasm.Texture.prototype = {};
Spasm.Texture.prototype.bindTexture = function() {
	var n = this.gl;
	n.activeTexture(this.glTextureIndex);
	n.bindTexture(n.TEXTURE_2D, this.textureHandle)
};
Spasm.Texture.prototype.setTextureImage = function() {
	this.bindTexture();
	var n = this.gl,
		t = this.image;
	n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, t);
	t.width === t.height ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR_MIPMAP_NEAREST), n.generateMipmap(n.TEXTURE_2D)) : (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR))
};
Spasm.Texture.prototype.setTextureUniform = function(n) {
	Spasm.assertShaderUniform(n);
	this.bindTexture();
	var t = this.gl,
		i = this.index;
	t.uniform1i(n, i)
};