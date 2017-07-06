Spasm = Spasm || {};
Spasm.Path = {};
Spasm.Path.stripLeadingSlash = function(n) {
	Spasm.assertPath(n);
	var t = n.length;
	return t > 0 ? n[0] === "/" ? n.substring(1, n.length) : n : n
};
Spasm.Path.stripTrailingSlash = function(n) {
	Spasm.assertPath(n);
	var t = n.length;
	return t > 0 ? n[t - 1] === "/" ? n.substring(0, n.length - 1) : n : n
};
Spasm.Path.combine = function(n, t) {
	Spasm.assertPath(n);
	Spasm.assertPath(t);
	return Spasm.Path.stripTrailingSlash(n) + "/" + Spasm.Path.stripLeadingSlash(t)
};
Spasm.Path.addVersionQuery = function(n) {
	return Spasm.Content.VersionQuery ? n + "?" + Spasm.Content.VersionQuery : n
};
Spasm.assertEqual(Spasm.Path.stripLeadingSlash("/a/"), "a/");
Spasm.assertEqual(Spasm.Path.stripTrailingSlash("/b/"), "/b");
Spasm.assertEqual(Spasm.Path.combine("/c/", "/d/"), "/c/d/");