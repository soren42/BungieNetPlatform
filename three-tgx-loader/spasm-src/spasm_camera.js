Spasm = Spasm || {};
Spasm.Camera = function(n) {
	Spasm.assertCanvas(n);
	this.canvas = n;
	this.canvasSize = {
		width: n.width,
		height: n.height,
		aspectRatio: n.width / n.height
	};
	this.orientation = {
		modelTranslationHorizontal: 0,
		modelTranslationVertical: 1,
		modelTranslationDepth: 0,
		modelRotationHorizontal: 0,
		modelRotationVertical: 0,
		modelRotationZ: 0,
		viewDistance: 9,
		viewTranslationHorizontal: 0,
		viewTranslationVertical: 0
	};
	this.bounds = {
		viewTranslationMinHorizontal: -2,
		viewTranslationMinVertical: -2,
		viewTranslationMaxHorizontal: 2,
		viewTranslationMaxVertical: 2,
		modelRotationMinVertical: -85 * Spasm.Deg2Rad,
		modelRotationMaxVertical: 85 * Spasm.Deg2Rad,
		viewDistanceDefault: 9,
		viewDistanceMin: .5,
		viewDistanceMax: 20
	};
	this.dirtyFlags = {
		modelTranslation: !0,
		modelRotation: !0,
		view: !0,
		projection: !0
	};
	this.projection = {
		fieldOfView: 15 * Spasm.Deg2Rad,
		nearPlane: .1,
		farPlane: 10
	};
	this.vectors = {
		viewDirection: vec3.set(vec3.create(), 1, 0, 0),
		viewPosition: vec3.set(vec3.create(), 5, 0, 0),
		viewTarget: vec3.create(),
		viewUp: vec3.set(vec3.create(), 0, 0, 1),
		viewTranslation: vec3.create(),
		modelTranslation: vec3.create(),
		modelRotationAxis: vec3.set(vec3.create(), 1, 0, 0)
	};
	var t = Spasm.Shader.InputTypes,
		i = Spasm.Shader.ValueTypes;
	this.matrices = {
		identity: mat4.create(),
		identity34: mat4.create().subarray(0, 12),
		cameraRotation: mat4.create(),
		modelTranslation: mat4.create(),
		modelRotation: mat4.create(),
		model: mat4.create(),
		view: mat4.create(),
		projection: mat4.create()
	};
	this.uniforms = {
		modelMatrix: new Spasm.ShaderInput(t.uniform, i.mat4, "u_model_matrix"),
		viewMatrix: new Spasm.ShaderInput(t.uniform, i.mat4, "u_view_matrix"),
		projectionMatrix: new Spasm.ShaderInput(t.uniform, i.mat4, "u_projection_matrix")
	};
	this.uniformDatas = {
		modelMatrix: new Spasm.UniformData(this.uniforms.modelMatrix, this.matrices.model),
		viewMatrix: new Spasm.UniformData(this.uniforms.viewMatrix, this.matrices.view),
		projectionMatrix: new Spasm.UniformData(this.uniforms.projectionMatrix, this.matrices.projection)
	}
};
Spasm.Camera.prototype = {};
Spasm.Camera.prototype.updateCanvasSize = function() {
	var r = this.canvas,
		n = this.canvasSize,
		t = Math.abs(r.width),
		i = Math.abs(r.height);
	(t !== n.width || i !== n.height) && (n.width = t, n.height = i, n.aspectRatio = t / i, this.dirtyFlags.projection = !0)
};
Spasm.Camera.prototype.updateMatrices = function() {
	var f, r, c, l;
	this.updateCanvasSize();
	var t = this.orientation,
		i = this.dirtyFlags,
		o = this.projection,
		a = this.canvasSize,
		u = this.vectors,
		n = this.matrices;
	if (i.projection && (mat4.perspective(n.projection, o.fieldOfView, a.aspectRatio, o.nearPlane, o.farPlane), i.projection = !1), f = !1, i.modelTranslation && (vec3.set(u.modelTranslation, t.modelTranslationDepth, t.modelTranslationHorizontal, -t.modelTranslationVertical), mat4.translate(n.modelTranslation, n.identity, u.modelTranslation), f = !0, i.modelTranslation = !1), i.modelRotation && (r = n.modelRotation, mat4.identity(r), mat4.rotateY(r, r, t.modelRotationVertical), mat4.rotateZ(r, r, t.modelRotationHorizontal), mat4.rotateY(r, r, t.modelRotationZ), f = !0, i.modelRotation = !1), f && mat4.multiply(n.model, n.modelRotation, n.modelTranslation), i.view) {
		var v = u.viewDirection,
			e = u.viewPosition,
			s = u.viewTarget,
			y = u.viewUp,
			h = u.viewTranslation,
			p = t.viewDistance;
		vec3.scale(e, v, p);
		vec3.add(e, e, s);
		mat4.lookAt(n.view, e, s, y);
		c = t.viewTranslationHorizontal;
		l = t.viewTranslationVertical;
		vec3.set(h, c, -l, 0);
		mat4.translate(n.view, n.view, h);
		i.view = !1
	}
};
Spasm.Camera.prototype.updateForBoundingVolume = function(n, t, i) {
	var o, c, f, s, u;
	Spasm.assertInstance(n, Spasm.BoundingVolume);
	Spasm.assertBoolean(t);
	Spasm.assertBoolean(i);
	var l = n.getMaxLength(),
		e = n.getCenterPoint(),
		h = e[0],
		a = e[1],
		v = e[2],
		r = this.orientation;
	r.modelTranslationHorizontal = -a;
	r.modelTranslationVertical = v * .9;
	o = this.bound(l * 4.5, 4, 90);
	i ? (c = this.canvasSize.aspectRatio, r.viewDistance = o / c, r.viewTranslationHorizontal = 0, r.modelTranslationDepth = -h, r.modelRotationHorizontal = -60 * Spasm.Deg2Rad, r.modelRotationVertical = 15 * Spasm.Deg2Rad) : t ? (r.viewDistance = o, r.viewTranslationHorizontal = 0, r.modelTranslationDepth = -h, r.modelRotationHorizontal = -60 * Spasm.Deg2Rad, r.modelRotationVertical = 15 * Spasm.Deg2Rad) : (r.modelTranslationDepth = 0, r.viewTranslationVertical = 0, r.viewTranslationHorizontal = 0, r.modelRotationHorizontal = 10 * Spasm.Deg2Rad, r.modelRotationVertical = 0, r.viewDistance = 8.2);
	f = this.bounds;
	f.viewDistanceDefault = r.viewDistance;
	f.viewDistanceMin = r.viewDistance * .5;
	f.viewDistanceMax = r.viewDistance * 2;
	s = this.projection;
	s.farPlane = r.viewDistance * 3;
	s.nearPlane = r.viewDistance * .1;
	u = this.dirtyFlags;
	u.modelTranslation = !0;
	u.modelRotation = !0;
	u.view = !0;
	u.projection = !0
};
Spasm.Camera.prototype.bound = function(n, t, i) {
	Spasm.assertNumber(n);
	Spasm.assertNumber(t);
	Spasm.assertNumber(i);
	Spasm.assert(t <= i);
	return Math.max(Math.min(n, i), t)
};
Spasm.Camera.prototype.setRotationZDegrees = function(n) {
	Spasm.assertNumber(n, "Spasm.Camera.setRotationZDegrees: input is not a number" + n);
	var t = this.orientation;
	t.modelRotationZ = n * Spasm.Deg2Rad
};
Spasm.Camera.prototype.userRotate = function(n, t) {
	Spasm.assertNumber(n);
	Spasm.assertNumber(t);
	var i = this.orientation,
		r = this.bounds,
		u = this.dirtyFlags;
	i.modelRotationHorizontal += n * .01;
	i.modelRotationVertical += t * .01;
	i.modelRotationVertical = this.bound(i.modelRotationVertical, r.modelRotationMinVertical, r.modelRotationMaxVertical);
	u.modelRotation = !0
};
Spasm.Camera.prototype.userTranslate = function(n, t) {
	Spasm.assertNumber(n);
	Spasm.assertNumber(t);
	var i = this.orientation,
		r = this.bounds,
		u = this.dirtyFlags;
	i.viewTranslationHorizontal += n * .005;
	i.viewTranslationVertical += t * .005;
	i.viewTranslationHorizontal = this.bound(i.viewTranslationHorizontal, r.viewTranslationMinHorizontal, r.viewTranslationMaxHorizontal);
	i.viewTranslationVertical = this.bound(i.viewTranslationVertical, r.viewTranslationMinVertical, r.viewTranslationMaxVertical);
	u.modelTranslation = !0
};
Spasm.Camera.prototype.userZoom = function(n) {
	Spasm.assertNumber(n);
	var t = this.orientation,
		i = this.bounds,
		r = this.dirtyFlags;
	t.viewDistance += n * -.001;
	t.viewDistance = this.bound(t.viewDistance, i.viewDistanceMin, i.viewDistanceMax);
	r.view = !0
};
Spasm.Camera.prototype.isDirty = function() {
	for (var t = this.dirtyFlags, i = Object.keys(t), f = i.length, r = !1, u, n = 0; n < f; n++) u = i[n], t[u] && (r = !0);
	return r
};
Spasm.Camera.prototype.resetZoom = function() {
	var n = this.orientation,
		t = this.bounds,
		i = this.dirtyFlags;
	n.viewDistance = t.viewDistanceDefault;
	i.view = !0
};