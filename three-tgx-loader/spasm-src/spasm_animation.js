Spasm = Spasm || {};
Spasm.Animation = function(n, t) {
	Spasm.assertPath(n);
	Spasm.assertFunction(t);
	this.animationPath = n;
	this.callback = t;
	this.loadComplete = !1;
	this.loadSuccess = !1;
	var i = this,
		r = function(n) {
			i.onLoadAnimation(n)
		};
	this.animation = null;
	this.animationLoader = new Spasm.JSONLoader(n, r);
	this.frameCount = 0;
	this.nodeCount = 0;
	this.framesMatrices = null;
	this.animationMatrices = null;
	this.tempMatrix0 = mat4.create()
};
Spasm.Animation.prototype = {};
Spasm.Animation.prototype.frameFillTransformBuffer = function(n, t, i, r) {
	var c, u, a;
	Spasm.assertNumber(n);
	Spasm.assertInstance(t, Float32Array);
	Spasm.assertArrayInstances(i, Float32Array);
	n = Math.floor(n);
	var v = this.framesMatrices,
		h = this.animationMatrices,
		f = this.tempMatrix0,
		y = this.frameCount,
		e = this.nodeCount,
		p = i.length,
		w = t.length;
	for (Spasm.assert(n >= 0), Spasm.assert(n < y), Spasm.assert(w === e * 12), Spasm.assertEqual(e, p), c = v[n], u = 0; u < e; u++) {
		var l = c[u],
			o = h[u],
			b = i[u],
			s = r[u];
		s >= 0 ? (Spasm.assert(s < u), a = h[s], mat4.multiply(o, a, l)) : mat4.copy(o, l);
		mat4.multiply(f, o, b);
		mat4.transpose(f, f);
		t.set(f.subarray(0, 12), u * 12)
	}
};
Spasm.Animation.prototype.onLoadAnimationSuccess = function(n) {
	var a, f, t, tt, h, c, l, it;
	Spasm.assertArray(n);
	this.loadSuccess = !0;
	a = n.length;
	Spasm.assert(a > 0);
	var i = n[0],
		e = i.node_count,
		v = i.frame_count,
		r = i.static_bone_data,
		rt = r.scale_control_map,
		ut = r.rotation_control_map,
		ft = r.translation_control_map,
		o = r.transform_stream_header.streams.frames[0],
		et = o.scales,
		ot = o.rotations,
		st = o.translations,
		u = i.animated_bone_data,
		ht = u.scale_control_map,
		ct = u.rotation_control_map,
		lt = u.translation_control_map,
		at = u.transform_stream_header.streams.frames,
		y = [];
	for (f = 0; f < v; f++) {
		var p = [],
			s = at[f],
			vt = s.scales,
			yt = s.rotations,
			pt = s.translations;
		for (t = 0; t < e; t++) {
			var w = rt.indexOf(t),
				b = ut.indexOf(t),
				k = ft.indexOf(t),
				wt = ht.indexOf(t),
				bt = ct.indexOf(t),
				kt = lt.indexOf(t),
				d = w >= 0 ? et[w] : vt[wt],
				g = b >= 0 ? ot[b] : yt[bt],
				nt = k >= 0 ? st[k] : pt[kt];
			Spasm.assertValid(d);
			Spasm.assertValid(g);
			Spasm.assertValid(nt);
			tt = new Spasm.TransformSRT(d, g, nt);
			h = mat4.create();
			tt.setMatrix(h);
			p.push(h)
		}
		y.push(p)
	}
	for (this.nodeCount = e, this.frameCount = v, this.framesMatrices = y, c = [], l = 0; l < e; l++) it = mat4.create(), c.push(it);
	this.animationMatrices = c;
	this.callback && (this.callback(this, !0), this.callback = null)
};
Spasm.Animation.prototype.onLoadAnimationFailure = function() {
	this.loadSuccess = !1;
	this.callback && (this.callback(this, !1), this.callback = null)
};
Spasm.Animation.prototype.onLoadAnimation = function(n) {
	if (Spasm.assertInstance(n, Spasm.JSONLoader), this.loadComplete = !0, n.isCompleteAndOK()) {
		var t = n.parsedResponse;
		this.onLoadAnimationSuccess(t)
	} else this.onLoadAnimationFailure()
};