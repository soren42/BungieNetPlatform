Spasm = Spasm || {};
Spasm.assert = function(n, t) {
	if (!n) throw t || "assertion failed";
};
Spasm.assertFalse = function(n, t) {
	Spasm.assert(!n, t)
};
Spasm.assertDefined = function(n, t) {
	Spasm.assert(typeof n != "undefined", t)
};
Spasm.assertNotNull = function(n, t) {
	Spasm.assert(n !== null, t)
};
Spasm.assertValid = function(n, t) {
	Spasm.assertDefined(n, t);
	Spasm.assertNotNull(n, t)
};
Spasm.assertEqual = function(n, t, i) {
	Spasm.assert(n === t, i)
};
Spasm.assertType = function(n, t, i) {
	Spasm.assert(typeof n === t, i)
};
Spasm.isArray = function(n) {
	return Object.prototype.toString.call(n) === "[object Array]"
};
Spasm.assertInstance = function(n, t, i) {
	Spasm.assertValid(n, i);
	Spasm.assert(n instanceof t, i)
};
Spasm.assertArray = function(n, t) {
	Spasm.assertValid(n, t);
	Spasm.assert(Spasm.isArray(n), t)
};
Spasm.assertArrayBuffer = function(n, t) {
	Spasm.assertInstance(n, ArrayBuffer, t)
};
Spasm.assertWebGLContext = function(n, t) {
	window.gli ? Spasm.assertValid(n, t) : Spasm.assertInstance(n, WebGLRenderingContext, t)
};
Spasm.assertCanvas = function(n, t) {
	Spasm.assertValid(n, t);
	Spasm.assert(n.tagName === "CANVAS")
};
Spasm.assertDOMEvent = function(n) {
	Spasm.assertValid(n)
};
Spasm.assertFunction = function(n, t) {
	Spasm.assertValid(n, t);
	Spasm.assertType(n, "function", t)
};
Spasm.assertNumber = function(n, t) {
	Spasm.assertValid(n, t);
	Spasm.assertType(n, "number", t)
};
Spasm.assertInteger = function(n, t) {
	Spasm.assertNumber(n, t);
	Spasm.assert(n % 1 == 0, t)
};
Spasm.assertBoolean = function(n, t) {
	Spasm.assertValid(n, t);
	Spasm.assertType(n, "boolean", t)
};
Spasm.assertString = function(n, t) {
	Spasm.assertValid(n, t);
	Spasm.assertType(n, "string", t)
};
Spasm.assertStringArray = function(n, t) {
	var r, i, u;
	for (Spasm.assertArray(n, t), r = n.length, i = 0; i < r; i++) u = n[i], Spasm.assertString(u, t)
};
Spasm.assertPath = function(n, t) {
	Spasm.assertString(n, t)
};
Spasm.assertImage = function(n, t) {
	Spasm.assertValid(n, t)
};
Spasm.assertShaderUniform = function(n, t) {
	Spasm.assertInstance(n, WebGLUniformLocation, t)
};
Spasm.assertArrayInstances = function(n, t, i) {
	var u, r, f;
	for (Spasm.assertArray(n, i), u = n.length, r = 0; r < u; r++) f = n[r], Spasm.assertInstance(f, t, i)
};
Spasm.assertCollectionInstances = function(n, t, i) {
	var r, u;
	Spasm.assertValid(n, i);
	for (r in n) u = n[r], Spasm.assertInstance(u, t, i)
};
Spasm.assert(!0);
Spasm.assertFalse(!1);
Spasm.assertValid({});
Spasm.assertString("");
Spasm.assertArray([]);
Spasm.assertEqual(2, 2);
Spasm.assertInteger(12345678901234567890);
Spasm.assertNumber(0, "zero is a number");
Spasm.assertBoolean(!1, "false is a boolean");