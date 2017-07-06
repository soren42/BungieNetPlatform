Spasm = Spasm || {};
Spasm.Utilities = {};
Spasm.Utilities.stringEndsWith = function(n, t) {
	Spasm.assertString(n);
	Spasm.assertString(t);
	return n.indexOf(t, n.length - t.length) !== -1
};
Spasm.Utilities.jsonFromCharBuffer = function(n) {
	var i = Spasm.Utilities.stringFromCharBuffer(n),
		t = null;
	try {
		t = JSON.parse(i)
	} catch (r) {
		console.log("error parsing json from char buffer: " + r)
	}
	return t
};
Spasm.Utilities.stringFromCharBuffer = function(n) {
	var r, i, t;
	for (Spasm.assertInstance(n, Uint8Array), r = n.byteLength, i = "", t = 0; t < r; t++) i += String.fromCharCode(n[t]);
	return i
};
