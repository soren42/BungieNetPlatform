Spasm = Spasm || {};
Spasm.TextureLoader = function(filePath, callback) {
	var image, scope;
	Spasm.assertPath(filePath);
	Spasm.assertFunction(callback);
	this.filePath = filePath;
	this.callback = callback;
	this.loadComplete = !1;
	this.loadSuccess = !1;
	image = document.createElement("img");
	this.image = image;
	scope = this;
	image.onload = function() {
		scope.onImageLoad()
	};
	image.onerror = function() {
		scope.onImageError()
	};
	image.src = filePath
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