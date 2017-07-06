Spasm = Spasm || {};
Spasm.ReadyStateComplete = 4;
Spasm.HTTPStatusOK = 200;
Spasm.HTTPStatusNotModified = 304;
Spasm.Loader = function(n) {
	Spasm.assertPath(n, "invalid file path");
	this.filePath = n;
	var t = new XMLHttpRequest;
	this.request = t;
	t.onreadystatechange = this.stateChangeCallback();
	t.onprogress = this.progressCallback();
	t.open("GET", n);
	t.send()
};
Spasm.Loader.prototype = {
	constructor: Spasm.Loader,
	stateChangeCallback: function() {
		var n = this;
		return function() {
			n.onStateChange()
		}
	},
	progressCallback: function() {
		var n = this;
		return function() {
			n.onProgress()
		}
	},
	onStateChange: function() {},
	onProgress: function() {}
};
Spasm.Loader.prototype.isComplete = function() {
	var n = this.request;
	return n.readyState === Spasm.ReadyStateComplete
};
Spasm.Loader.prototype.isCompleteAndOK = function() {
	var n = this.request,
		t = n.status;
	return n.readyState === Spasm.ReadyStateComplete && (t >= 200 && t < 300 || n.status === Spasm.HTTPStatusNotModified)
};
Spasm.BufferLoader = function(n, t) {
	Spasm.Loader.call(this, n);
	this.callback = t;
	this.request.responseType = "arraybuffer"
};
Spasm.BufferLoader.prototype = Object.create(Spasm.Loader.prototype);
Spasm.BufferLoader.prototype.onStateChange = function() {
	this.isComplete() && this.callback(this)
};
Spasm.JSONLoader = function(n, t) {
	Spasm.Loader.call(this, n);
	this.callback = t;
	this.parsedResponse = null
};
Spasm.JSONLoader.prototype = Object.create(Spasm.Loader.prototype);
Spasm.JSONLoader.prototype.onStateChange = function() {
	if (this.isComplete()) {
		if (this.isCompleteAndOK()) {
			var n = this.request,
				t = n.responseText;
			try {
				this.parsedResponse = JSON.parse(t)
			} catch (i) {
				console.log("Spasm.JSONLoader parse error : " + i)
			}
		}
		this.callback(this)
	}
};