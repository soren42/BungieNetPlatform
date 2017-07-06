Spasm = Spasm || {};
Spasm.TransformSRT = function(n, t, i) {
	n = n || 1;
	t = t || [0, 0, 0, 1];
	i = i || [0, 0, 0];
	this.scale = n;
	this.rotation = quat.create();
	this.translation = vec3.create();
	quat.copy(this.rotation, t);
	vec3.copy(this.translation, i)
};
Spasm.TransformSRT.prototype = {};
Spasm.TransformSRT.prototype.copy = function(n) {
	Spasm.assertInstance(n, Spasm.TransformSRT);
	this.scale = n.scale;
	this.rotation.copy(n.rotation);
	this.translation.copy(n.translation)
};
Spasm.TransformSRT.prototype.multiply = function(n, t) {
	Spasm.assertInstance(n, Spasm.TransformSRT);
	Spasm.assertInstance(n, Spasm.TransformSRT);
	quat.multiply(this.rotation, n.rotation, t.rotation);
	this.scale = n.scale * t.scale;
	vec3.copy(this.translation, t.translation);
	vec3.transformQuat(this.translation, this.translation, n.rotation);
	vec3.scale(this.translation, this.translation, n.scale);
	vec3.add(this.translation, this.translation, n.translation)
};
Spasm.TransformSRT.prototype.setMatrix = function(n) {
	var t = this.scale,
		i = this.translation;
	return mat4.fromQuat(n, this.rotation), mat4.scale(n, n, [t, t, t]), n[12] = i[0], n[13] = i[1], n[14] = i[2], n
};