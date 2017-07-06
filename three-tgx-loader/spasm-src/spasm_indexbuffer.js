Spasm = Spasm || {};
Spasm.IndexBuffer = function(n, t, i, r) {
	Spasm.Buffer.call(this, n, t, n.ELEMENT_ARRAY_BUFFER);
	Spasm.assertInteger(i);
	Spasm.assertInteger(r);
	this.indexCount = i;
	this.elementType = r
};
Spasm.IndexBuffer.prototype = Object.create(Spasm.Buffer.prototype);