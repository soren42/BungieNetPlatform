Spasm = Spasm || {};
Spasm.Content = {};
Spasm.Content.setContentBaseURL = function(n) {
	Spasm.assertString(n);
	var i = n.split("?"),
		t = i[0],
		r = i.length > 1 ? i[1] : null;
	Spasm.Content.BaseURL = t;
	Spasm.Content.VersionQuery = r;
	Spasm.Content.RootPath = Spasm.Path.combine(t, "/common/destiny_content/geometry/");
	Spasm.Content.ContentPath = Spasm.Content.RootPath;
	Spasm.Content.StaticPath = t;
	Spasm.Content.AnimationsPath = Spasm.Path.combine(t, "/common/destiny_content/animations/");
	Spasm.Content.TablesPath = Spasm.Content.StaticPath;
	Spasm.Content.GearDirectory = "gear/";
	Spasm.Content.GearPath = Spasm.Path.combine(Spasm.Content.ContentPath, Spasm.Content.GearDirectory);
	Spasm.Content.PlatformDirectory = "platform/";
	Spasm.Content.PlatformPath = Spasm.Path.combine(Spasm.Content.ContentPath, Spasm.Content.PlatformDirectory);
	Spasm.Content.WebDirectory = "web/";
	Spasm.Content.WebPath = Spasm.Path.combine(Spasm.Content.PlatformPath, Spasm.Content.WebDirectory);
	Spasm.Content.GeometryDirectory = "geometry/";
	Spasm.Content.GeometryPath = Spasm.Path.combine(Spasm.Content.WebPath, Spasm.Content.GeometryDirectory);
	Spasm.Content.TexturesDirectory = "textures/";
	Spasm.Content.TexturesPath = Spasm.Path.combine(Spasm.Content.WebPath, Spasm.Content.TexturesDirectory);
	Spasm.Content.PlatedTexturesDirectory = "plated_textures/";
	Spasm.Content.PlatedTexturesPath = Spasm.Path.combine(Spasm.Content.WebPath, Spasm.Content.PlatedTexturesDirectory)
};