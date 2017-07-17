Spasm = Spasm || {};
Spasm.TransformSRT = function(scale, rotation, translation) {
	scale = scale || 1;
	rotation = rotation || [0, 0, 0, 1];
	translation = translation || [0, 0, 0];
	this.scale = scale;
	this.rotation = quat.create();
	this.translation = vec3.create();
	quat.copy(this.rotation, rotation);
	vec3.copy(this.translation, translation)
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
Spasm.TransformSRT.prototype.setMatrix = function(matrix) {
	var scale = this.scale,
		translation = this.translation;
	return mat4.fromQuat(matrix, this.rotation),
		mat4.scale(matrix, matrix, [scale, scale, scale]),
		matrix[12] = translation[0],
		matrix[13] = translation[1],
		matrix[14] = translation[2],
		matrix
};