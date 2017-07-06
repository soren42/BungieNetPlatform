Spasm = Spasm || {};
Spasm.CameraControls = function(n, t) {
	Spasm.assertValid(n, "invalid element");
	Spasm.assertInstance(t, Spasm.Camera);
	this.element = n;
	this.camera = t;
	this.allowRotationHorizontal = !0;
	this.allowRotationVertical = !1;
	this.allowTranslation = !1;
	this.allowZoom = !1;
	this.mouse = {
		tracking: !1,
		oldX: 0,
		oldY: 0
	};
	this.touch = {
		tracking: !1,
		count: 0,
		oldX: 0,
		oldY: 0
	};
	this.staticElementEventNames = ["mousedown", "touchstart", "mousewheel", "DOMMouseScroll"];
	this.staticWindowEventNames = ["mouseup", "touchend", "touchcancel"];
	var i = this;
	this.eventListenerFunctions = {
		mousedown: function(n) {
			i.onMouseDown(n)
		},
		mousemove: function(n) {
			i.onMouseMove(n)
		},
		mouseup: function(n) {
			i.onMouseUp(n)
		},
		mouseout: function(n) {
			i.onMouseOut(n)
		},
		mousewheel: function(n) {
			i.onScroll(n)
		},
		DOMMouseScroll: function(n) {
			i.onScroll(n)
		},
		touchstart: function(n) {
			i.onTouchStart(n)
		},
		touchmove: function(n) {
			i.onTouchMove(n)
		},
		touchend: function(n) {
			i.onTouchEnd(n)
		},
		touchenter: function(n) {
			i.onTouchEnter(n)
		},
		touchleave: function(n) {
			i.onTouchLeave(n)
		},
		touchcancel: function(n) {
			i.onTouchCancel(n)
		}
	};
	this.addStaticElementEventListeners();
	this.addStaticWindowEventListeners()
};
Spasm.CameraControls.prototype = {};
Spasm.CameraControls.prototype.addStaticElementEventListeners = function() {
	for (var u = this.element, f = this.eventListenerFunctions, i = this.staticElementEventNames, e = i.length, t, r, n = 0; n < e; n++) t = i[n], r = f[t], u.addEventListener(t, r, !1)
};
Spasm.CameraControls.prototype.addStaticWindowEventListeners = function() {
	for (var u = this.eventListenerFunctions, i = this.staticWindowEventNames, f = i.length, t, r, n = 0; n < f; n++) t = i[n], r = u[t], window.addEventListener(t, r, !1)
};
Spasm.CameraControls.prototype.onMouseDown = function(n) {
	Spasm.assertDOMEvent(n);
	var t = this.mouse;
	t.tracking = !0;
	t.oldX = n.clientX;
	t.oldY = n.clientY;
	n.preventDefault();
	window.addEventListener("mousemove", this.eventListenerFunctions.mousemove, !1)
};
Spasm.CameraControls.prototype.onMouseMove = function(n) {
	var t, i;
	if (Spasm.assertDOMEvent(n), t = this.mouse, i = this.camera, t.tracking) {
		var r = n.clientX,
			u = n.clientY,
			o = t.oldX,
			s = t.oldY,
			f = r - o,
			e = u - s;
		n.shiftKey && this.allowTranslation ? i.userTranslate(f, e) : this.rotate(f, e);
		t.oldX = r;
		t.oldY = u;
		n.preventDefault()
	}
};
Spasm.CameraControls.prototype.onMouseUp = function(n) {
	Spasm.assertDOMEvent(n);
	this.mouse.tracking = !1;
	window.removeEventListener("mousemove", this.eventListenerFunctions.mousemove, !1)
};
Spasm.CameraControls.prototype.onMouseOut = function(n) {
	Spasm.assertDOMEvent(n)
};
Spasm.CameraControls.prototype.onScroll = function(n) {
	var t, i;
	Spasm.assertDOMEvent(n);
	this.allowZoom && (t = 0, n.wheelDelta ? t = n.wheelDelta : n.detail && (t = n.detail * -40), i = this.camera, i.userZoom(t), n.preventDefault())
};
Spasm.CameraControls.prototype.onTouchStart = function(n) {
	var t;
	if (Spasm.assertDOMEvent(n), t = n.touches, t && t.length === 1) {
		var r = t[0],
			u = r.clientX,
			f = r.clientY,
			i = this.touch;
		i.tracking = !0;
		i.oldX = u;
		i.oldY = f;
		window.addEventListener("touchmove", this.eventListenerFunctions.touchmove, !1)
	}
};
Spasm.CameraControls.prototype.onTouchMove = function(n) {
	var t, i;
	if (Spasm.assertDOMEvent(n), t = this.touch, i = n.touches, t.tracking && i && i.length > 0) {
		var r = i[0],
			u = r.clientX,
			f = r.clientY,
			e = u - t.oldX,
			o = f - t.oldY;
		i.length === 1 && this.rotate(e, o);
		t.oldX = u;
		t.oldY = f;
		n.preventDefault()
	}
};
Spasm.CameraControls.prototype.onTouchEnd = function(n) {
	var t, i;
	Spasm.assertDOMEvent(n);
	t = n.touches;
	(!t || t.length <= 1) && (i = this.touch, i.tracking = !1, window.removeEventListener("touchmove", this.eventListenerFunctions.touchmove, !1))
};
Spasm.CameraControls.prototype.onTouchEnter = function(n) {
	Spasm.assertDOMEvent(n)
};
Spasm.CameraControls.prototype.onTouchLeave = function(n) {
	Spasm.assertDOMEvent(n)
};
Spasm.CameraControls.prototype.onTouchCancel = function(n) {
	var t, i;
	Spasm.assertDOMEvent(n);
	t = n.touches;
	(!t || t.length <= 1) && (i = this.touch, i.tracking = !1, window.removeEventListener("touchmove", this.eventListenerFunctions.touchmove, !1))
};
Spasm.CameraControls.prototype.rotate = function(n, t) {
	if (Spasm.assertNumber(n), Spasm.assertNumber(t), this.allowRotationHorizontal || this.allowRotationVertical) {
		var i = this.allowRotationHorizontal ? n : 0,
			r = this.allowRotationVertical ? t : 0;
		this.camera.userRotate(i, r)
	}
};