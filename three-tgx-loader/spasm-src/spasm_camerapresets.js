Spasm = Spasm || {};
Spasm.CameraPresets = function(n) {
	this.buckets = n;
	this.inventoryPresets = {}
};
Spasm.CameraPresets.prototype = {};
Spasm.CameraPresets.prototype.init = function() {
	this.setInventoryBuckets()
};
Spasm.CameraPresets.prototype.setInventoryBuckets = function() {
	var t, n, i;
	for (t in this.buckets)
		if (n = this.buckets[t], bucketDefinition = n.definition) {
			i = bucketDefinition.bucketIdentifier;
			switch (i) {
				case "BUCKET_PRIMARY_WEAPON":
				case "BUCKET_SPECIAL_WEAPON":
				case "BUCKET_HEAVY_WEAPON":
				case "BUCKET_HEAD":
				case "BUCKET_ARMS":
				case "BUCKET_CHEST":
				case "BUCKET_CLASS_ITEMS":
				case "BUCKET_LEGS":
				case "BUCKET_SHIP":
					this.setInventoryPresets(n)
			}
		}
};
Spasm.CameraPresets.prototype.setInventoryPresets = function(n) {
	for (var r = n.items, f = r.length, i = 0; i < f; i++) {
		var e = r[i],
			u = e.itemDefinition,
			o = u.summary.itemTypeName.toLowerCase(),
			s = u.summary.referenceId,
			t = {};
		switch (o) {
			case "hand cannon":
				t = this.presetWeaponSmall();
				break;
			case "auto rifle":
			case "pulse rifle":
			case "scout rifle":
			case "fusion rifle":
			case "shotgun":
				t = this.presetWeaponMedium();
				break;
			case "machine gun":
			case "sniper rifle":
				t = this.presetWeaponLarge();
				break;
			case "rocket launcher":
				t = this.presetWeaponRocket();
				break;
			case "head armor":
				t = this.presetHeadArmor();
				break;
			case "leg armor":
				t = this.presetLegArmor();
				break;
			case "titan mark  ":
				t = this.presetCloth();
				break;
			case "hunter cloak":
				t = this.presetHunterCloth();
				break;
			case "ship":
				t = this.presetShip();
				break;
			case "warlock bond":
			default:
				t = this.presetDefault()
		}
		this.inventoryPresets[s] = t
	}
};
Spasm.CameraPresets.prototype.presetWeaponSmall = function() {
	var n = {};
	return n.modelVertical = .05, n.modelHorizontal = .2, n.cameraDistance = 1.5, n.cameraRotateHorizontal = -90 * Spasm.Deg2Rad, n
};
Spasm.CameraPresets.prototype.presetWeaponMedium = function() {
	var n = {};
	return n.modelVertical = .05, n.modelHorizontal = 0, n.cameraDistance = 2.4, n.cameraRotateVertical = 15 * Spasm.Deg2Rad, n.cameraRotateHorizontal = -90 * Spasm.Deg2Rad, n
};
Spasm.CameraPresets.prototype.presetWeaponLarge = function() {
	var n = {};
	return n.modelVertical = .05, n.modelHorizontal = .4, n.cameraDistance = 2.7, n.cameraRotateVertical = 15 * Spasm.Deg2Rad, n.cameraRotateHorizontal = -90 * Spasm.Deg2Rad, n
};
Spasm.CameraPresets.prototype.presetWeaponRocket = function() {
	var n = {};
	return n.modelVertical = .05, n.modelHorizontal = 0, n.cameraDistance = 3, n.cameraRotateVertical = 15 * Spasm.Deg2Rad, n
};
Spasm.CameraPresets.prototype.presetHeadArmor = function() {
	var n = this.presetDefault();
	return n.modelVertical = 1.7, n.modelHorizontal = 0, n.cameraDistance = 1.2, n
};
Spasm.CameraPresets.prototype.presetCloth = function() {
	var n = this.presetDefault();
	return n.modelVertical = 1, n.cameraDistance = 2.1, n
};
Spasm.CameraPresets.prototype.presetHunterCloth = function() {
	var n = this.presetDefault();
	return n.modelVertical = 1.2, n.cameraDistance = 4.8, n
};
Spasm.CameraPresets.prototype.presetLegArmor = function() {
	var n = this.presetDefault();
	return n.modelVertical = .52, n.modelHorizontal = 0, n.cameraDistance = 6, n
};
Spasm.CameraPresets.prototype.presetDefault = function() {
	var n = {};
	return n.modelVertical = 1.3, n.modelHorizontal = 0, n.cameraDistance = 3, n.cameraRotateHorizontal = -25 * Spasm.Deg2Rad, n.cameraRotateVertical = 1.5 * Spasm.Deg2Rad, n
};
Spasm.CameraPresets.prototype.presetShip = function() {
	var n = {};
	return n.modelVertical = 2.5, n.modelHorizontal = 0, n.cameraDistance = 35, n.cameraRotateHorizontal = -25 * Spasm.Deg2Rad, n.cameraRotateVertical = 20 * Spasm.Deg2Rad, n
};