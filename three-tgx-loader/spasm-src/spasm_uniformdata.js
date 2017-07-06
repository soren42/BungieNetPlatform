Spasm = Spasm || {};
Spasm.UniformData = function(n, t) {
	t = t || null;
	Spasm.assertInstance(n, Spasm.ShaderInput);
	this.shaderInput = n;
	this.data = t
};
Spasm.UniformData.prototype = {};