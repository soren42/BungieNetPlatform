Spasm = Spasm || {};
Spasm.VertexBufferMetadata = function(n, t, i) {
	Spasm.assertInteger(n);
	Spasm.assertInteger(t);
	Spasm.assertArrayInstances(i, Spasm.VertexBufferAttribute);
	this.vertexCount = n;
	this.vertexStride = t;
	this.attributes = i;
	this.assertMatchingAttributes()
};
Spasm.VertexBufferMetadata.prototype = {};
Spasm.VertexBufferMetadata.prototype.assertMatchingAttributes = function() {
	for (var u = this.vertexStride, t = this.attributes, i = 0, f = t.length, r, n = 0; n < f; n++) r = t[n], i += r.size;
	Spasm.assertEqual(i, u)
}