# three-tgx-loader

Load Destiny model assets from Bungie.net with the BungieNetPlatform APIs.

## Example:
```javascript
var itemHash = 1274330687; // Gjallarhorn
THREE.TGXLoader.APIKey = '{insert-api-key}'; // https://www.bungie.net/en/Application
var loader = new THREE.TGXLoader();
loader.load(itemHash, function(geometry, materials) {
	console.log('LoadedItem', geometry, materials);
	mesh = new THREE.Mesh(geometry, new THREE.MultiMaterial(materials));
	mesh.rotation.x = -(90 * Math.PI / 180);
	mesh.scale.set(-500, 500, 500);
	scene.add(mesh);
});
```

## Advanced Options:
This loader can be customized based on your hosting settings and/or preferences. Here is the full list of options you can set either globally or per instance.
```javascript
// Global Defaults
THREE.TGXLoader.APIKey = null;
THREE.TGXLoader.APIBasepath = "https://www.bungie.net/d1/Platform/Destiny"; // The basepath for making API requests
THREE.TGXLoader.Basepath = "https://www.bungie.net"; // The basepath to load gear assets from
THREE.TGXLoader.Platform = "web"; // Whether to use "web" or "mobile" gear assets (note the latter requires extra setup to use.
THREE.TGXLoader.ManifestPath = null; // The url for server-side manifest querying. Must include $itemHash

// Instance options
new THREE.TGXLoader({
	itemHash: 0, // The itemHash to load (required)
	classHash: 0, // The classHash to load
	isFemale: false, // Whether to use male or female geometry sets (for Armor)
	apiKey: THREE.TGXLoader.APIKey,
	apiBasepath: THREE.TGXLoader.APIBasepath,
	basepath: THREE.TGXLoader.Basepath,
	platform: THREE.TGXLoader.Platform,
	manifestPath: THREE.TGXLoader.ManifestPath,
	loadTextures: true, // Whether textures should be loaded
	loadSkeleton: false, // Whether the skeleton should be loaded (not implemented yet)
}, onLoadCallback, onProgressCallback, onErrorCallback);
```

## Loading Mobile Assets
This loader supports both web and mobile versions of loading gear assets however the latter requires access to the mobile manifest. This can be done via one of two methods:

* Client-side loading, requires [sql.js](https://github.com/kripken/sql.js/) and [zip.js](https://gildas-lormeau.github.io/zip.js/) and will take a bit to load initially but won't require and extra calls.
* Server-side loading, requires specifying a cross-origin friendly endpoint that will return a response that matches the format when loading GearAsset definitions from [GetDestinySingleDefinition](https://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetDestinySingleDefinition).

Due to the way compression is applied to the textures, you will get better quality from loading the mobile assets of the web versions.

## Progress Bars
The TGXLoader uses the default Three.js LoadingManager (see https://threejs.org/docs/#api/loaders/managers/LoadingManager).

## Spasm Source Code

This implementation is based on Bungie's Spasm library (see https://www.bungie.net/sharedbundle/spasm). Since the production files are minified, an unminified copy of the source code has been included with this repo.