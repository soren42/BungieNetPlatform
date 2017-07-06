Spasm = Spasm || {};
Spasm.TGXBinLoader = function(n, t) {
	Spasm.BufferLoader.call(this, n, t);
	this.filePositions = []
};
Spasm.TGXBinLoader.prototype = Object.create(Spasm.BufferLoader.prototype);
Spasm.TGXBinLoader.prototype.onStateChange = function() {
	var t = this.request,
		n;
	this.isComplete() && (this.isCompleteAndOK() && (n = t.response, this.parseFileIndex(n)), this.callback(this))
};
Spasm.TGXBinLoader.prototype.parseFileIndex = function(n) {
	var c, e, a, g, v, o, s, h, y;
	Spasm.assertArrayBuffer(n);
	this.buffer = n;
	var i = !0,
		r = new DataView(n),
		p = [r.getUint8(0), r.getUint8(1), r.getUint8(2), r.getUint8(3)],
		f = "TGXM",
		tt = [f.charCodeAt(0), f.charCodeAt(1), f.charCodeAt(2), f.charCodeAt(3)];
	for (c in p) Spasm.assertEqual(p[c], tt[c]);
	var w = 16,
		t = 128,
		l = 8,
		b = r.getInt32(4, i);
	if (b === 1) t = 128;
	else if (b === 2) {
		t = 256;
		var k = t,
			it = new DataView(n, 16, k),
			d = "";
		for (e = 0; e < k; e++) a = it.getUint8(e), a !== 0 && (d += String.fromCharCode(a));
		this.fileIdentifier = d;
		w += 256
	} else Spasm.assert(!1, "unknown TGX file pack version");
	for (g = r.getInt32(8, i), v = r.getInt32(12, i), Spasm.assert(v >= 0), o = t + l + 8, Spasm.assertEqual(g, o), s = 0; s < v; s++) {
		var rt = w + o * s,
			u = new DataView(n, rt, o),
			nt = "";
		for (h = 0; h < t; h++) y = u.getUint8(h), y !== 0 && (nt += String.fromCharCode(y));
		var ut = u.getUint32(t, i),
			ft = u.getUint32(t + 4, i),
			et = ut + Math.pow(2, 32) * ft,
			ot = u.getUint32(t + l, i),
			st = u.getUint32(t + l + 4, i),
			ht = ot + Math.pow(2, 32) * st;
		this.filePositions.push({
			fileName: nt,
			fileByteOffset: et,
			fileByteSize: ht
		})
	}
};
Spasm.TGXBinLoader.prototype.getFileBuffers = function() {
	var r = this.buffer,
		u = this.filePositions,
		t, f, n;
	for (Spasm.assertArrayBuffer(r), t = {}, f = u.length, n = 0; n < f; n++) {
		var i = u[n],
			h = i.fileName,
			e = i.fileByteOffset,
			o = i.fileByteSize,
			s = r.slice(e, o + e);
		t[h] = s;
		Spasm.assertEqual(s.byteLength, o)
	}
	return t
};