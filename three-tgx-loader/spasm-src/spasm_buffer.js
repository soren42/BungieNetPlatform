Spasm = Spasm || {};
Spasm.Buffer = function(n, t, i) {
	Spasm.assertWebGLContext(n);
	Spasm.assertValid(t);
	Spasm.assertInteger(i);
	this.gl = n;
	this.arrayBuffer = t;
	this.bufferType = i;
	var r = n.createBuffer();
	this.bufferHandle = r;
	n.bindBuffer(i, r);
	n.bufferData(i, t, n.STATIC_DRAW)
};
Spasm.Buffer.prototype = {
	constructor: Spasm.Buffer
};
Spasm.Buffer.prototype.bindBuffer = function() {
	var n = this.gl,
		t = this.bufferType,
		i = this.bufferHandle;
	n.bindBuffer(t, i)
};