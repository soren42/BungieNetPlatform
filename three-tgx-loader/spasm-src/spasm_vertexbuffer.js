Spasm = Spasm || {};
Spasm.VertexBuffer = function(n, t, vertexStride, vertexCount, attributes) {
	Spasm.Buffer.call(this, n, t, n.ARRAY_BUFFER);
	Spasm.assertInteger(vertexStride);
	Spasm.assertInteger(vertexCount);
	Spasm.assertArrayInstances(attributes, Spasm.VertexBufferAttribute);
	this.vertexStride = vertexStride;
	this.vertexCount = vertexCount;
	this.attributes = attributes;
	Spasm.VertexBuffer.debugAssertValidBuffer(t, vertexCount, vertexStride);
	this.debugAssertValidAttributes()
};
Spasm.VertexBuffer.prototype = Object.create(Spasm.Buffer.prototype);
Spasm.VertexBuffer.debugAssertValidBuffer = function(n, t, i) {
	Spasm.assertArrayBuffer(n);
	Spasm.assertInteger(i);
	Spasm.assertInteger(t);
	var r = t * i,
		u = n.byteLength;
	Spasm.assertEqual(r, u)
};
Spasm.VertexBuffer.prototype.debugAssertValidAttributes = function() {
	var t = this.attributes,
		n;
	Spasm.assertArrayInstances(t, Spasm.VertexBufferAttribute);
	var u = this.vertexStride,
		i = 0,
		f = t.length;
	for (n = 0; n < f; n++) {
		var r = t[n],
			e = r.byteCount,
			o = r.byteOffset;
		Spasm.assertEqual(i, o);
		i += e
	}
	Spasm.assertEqual(i, u)
};
Spasm.VertexBuffer.prototype.setAttributePointer = function(n, t) {
	Spasm.assertInteger(n);
	Spasm.assertInstance(t, Spasm.VertexBufferAttribute);
	var i = this.gl,
		r = this.vertexStride,
		u = t.valueCount,
		f = t.bufferValueType,
		e = t.normalized,
		o = t.byteOffset;
	i.enableVertexAttribArray(n);
	i.vertexAttribPointer(n, u, f, e, r, o)
};