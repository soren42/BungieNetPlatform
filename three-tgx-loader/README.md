# three-tgx-loader

Load Destiny model assets from Bungie.net with the BungieNetPlatform APIs.

Example:
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

This implementation is based on Bungie's Spasm library (see [https://www.bungie.net/sharedbundle/spasm]). Since the production files are minified, an unminified copy of the source code has been included with this repo.