Spasm = Spasm || {};
Spasm.BoundingVolume = function(n, t, i) {
	Spasm.assertArray(n);
	Spasm.assertArray(t);
	Spasm.assertArray(i);
	this.minX = Math.min.apply(Math, n);
	this.minY = Math.min.apply(Math, t);
	this.minZ = Math.min.apply(Math, i);
	this.maxX = Math.max.apply(Math, n);
	this.maxY = Math.max.apply(Math, t);
	this.maxZ = Math.max.apply(Math, i)
};
Spasm.boundingVolumeFromRenderMetadata = function(n) {
	Spasm.assertValid(n);
	var t = n.min_x,
		i = n.min_y,
		r = n.min_z,
		u = n.max_x,
		f = n.max_y,
		e = n.max_z;
	return new Spasm.BoundingVolume([t, u], [i, f], [r, e])
};
Spasm.boundingVolumeFromBoundingVolumes = function(n) {
	var i, t;
	Spasm.assertArrayInstances(n, Spasm.BoundingVolume);
	var r = [],
		u = [],
		f = [],
		e = n.length;
	for (i = 0; i < e; i++) t = n[i], r.push(t.minX), r.push(t.maxX), u.push(t.minY), u.push(t.maxY), f.push(t.minZ), f.push(t.maxZ);
	return new Spasm.BoundingVolume(r, u, f)
};
Spasm.BoundingVolume.prototype = {};
Spasm.BoundingVolume.prototype.getMaxLength = function() {
	return Math.sqrt(Math.pow(this.maxX - this.minX, 2) + Math.pow(this.maxY - this.minY, 2) + Math.pow(this.maxZ - this.minZ, 2))
};
Spasm.BoundingVolume.prototype.getCenterPoint = function() {
	return [(this.minX + this.maxX) / 2, (this.minY + this.maxY) / 2, (this.minZ + this.maxZ) / 2]
};