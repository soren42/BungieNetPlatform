Spasm = Spasm || {};
Spasm.Skeleton = function(n, t) {
	Spasm.assertPath(n);
	Spasm.assertFunction(t);
	this.skeletonPath = n;
	this.callback = t;
	this.loadComplete = !1;
	this.loadSuccess = !1;
	var i = this,
		r = function(n) {
			i.onLoadSkeleton(n)
		};
	this.skeleton = null;
	this.skeletonLoader = new Spasm.JSONLoader(n, r);
	this.inverseObjectSpaceTransformMatrices = null;
	this.parentNodeIndices = null;
	this.nodeCount = 0
};
Spasm.Skeleton.prototype = {};
Spasm.Skeleton.prototype.onLoadSkeletonSuccess = function(n) {
	var t, h, c;
	Spasm.assertValid(n);
	this.loadSuccess = !0;
	var r = n.definition,
		u = r.default_inverse_object_space_transforms,
		l = r.nodes,
		f = [],
		e = [],
		a = u.length;
	for (t = 0; t < a; t++) {
		var o = u[t],
			i = o.ts,
			v = i[3],
			y = o.r,
			p = [i[0], i[1], i[2]],
			w = new Spasm.TransformSRT(v, y, p),
			s = mat4.create();
		w.setMatrix(s);
		f.push(s);
		h = l[t];
		c = h.parent_node_index;
		e.push(c)
	}
	this.inverseObjectSpaceTransformMatrices = f;
	this.parentNodeIndices = e;
	this.callback && (this.callback(this, !0), this.callback = null)
};
Spasm.Skeleton.prototype.onLoadSkeletonFailure = function() {
	this.loadSuccess = !1;
	this.callback && (this.callback(this, !1), this.callback = null)
};
Spasm.Skeleton.prototype.onLoadSkeleton = function(n) {
	if (Spasm.assertInstance(n, Spasm.JSONLoader), this.loadComplete = !0, n.isCompleteAndOK()) {
		var t = n.parsedResponse;
		this.onLoadSkeletonSuccess(t)
	} else this.onLoadSkeletonFailure()
};