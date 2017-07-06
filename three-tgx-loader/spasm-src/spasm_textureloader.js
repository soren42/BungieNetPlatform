Spasm = Spasm || {};
Spasm.TextureLoader = function(n, t) {
	var i, r;
	Spasm.assertPath(n);
	Spasm.assertFunction(t);
	this.filePath = n;
	this.callback = t;
	this.loadComplete = !1;
	this.loadSuccess = !1;
	i = document.createElement("img");
	this.image = i;
	r = this;
	i.onload = function() {
		r.onImageLoad()
	};
	i.onerror = function() {
		r.onImageError()
	};
	i.src = n
};
Spasm.TextureLoader.prototype = {
	constructor: Spasm.TextureLoader,
	onImageLoad: function() {
		this.loadComplete = !0;
		this.loadSuccess = !0;
		this.callback(this)
	},
	onImageError: function() {
		this.loadComplete = !0;
		this.loadSuccess = !1;
		this.callback(this)
	},
	isComplete: function() {
		return this.loadComplete
	},
	isCompleteAndOK: function() {
		return this.loadComplete && this.loadSuccess
	}
};