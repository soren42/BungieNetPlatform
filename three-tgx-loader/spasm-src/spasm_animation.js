Spasm = Spasm || {};
Spasm.Animation = function(animationPath, callback) {
	Spasm.assertPath(animationPath);
	Spasm.assertFunction(callback);
	this.animationPath = animationPath;
	this.callback = callback;
	this.loadComplete = !1;
	this.loadSuccess = !1;
	var scope = this,
		onLoad = function(data) {
			scope.onLoadAnimation(data)
		};
	this.animation = null;
	this.animationLoader = new Spasm.JSONLoader(animationPath, onLoad);
	this.frameCount = 0;
	this.nodeCount = 0;
	this.framesMatrices = null;
	this.animationMatrices = null;
	this.tempMatrix0 = mat4.create()
};
Spasm.Animation.prototype = {};
Spasm.Animation.prototype.frameFillTransformBuffer = function(frameCount, skinningMatrices, inverseObjectSpaceTransformMatrices, parentNodeIndices) {
	var framesMatrix, u, parentAnimationMatrix;
	Spasm.assertNumber(frameCount);
	Spasm.assertInstance(skinningMatrices, Float32Array);
	Spasm.assertArrayInstances(inverseObjectSpaceTransformMatrices, Float32Array);
	frameCount = Math.floor(frameCount);
	var framesMatrices = this.framesMatrices,
		animationMatrices = this.animationMatrices,
		tempMatrix0 = this.tempMatrix0,
		frameCount = this.frameCount,
		nodeCount = this.nodeCount,
		inverseObjectSpaceTransformMatricesLength = inverseObjectSpaceTransformMatrices.length,
		skinningMatricesLength = skinningMatrices.length;
	for (Spasm.assert(frameCount >= 0),
		 Spasm.assert(frameCount < frameCount),
		 Spasm.assert(skinningMatricesLength === nodeCount * 12),
		 Spasm.assertEqual(nodeCount, inverseObjectSpaceTransformMatricesLength),
		 framesMatrix = framesMatrices[frameCount],
		 u = 0; u < nodeCount; u++) {
		var nodeMatrix = framesMatrix[u],
			animationMatrix = animationMatrices[u],
			inverseObjectSpaceTransformMatrix = inverseObjectSpaceTransformMatrices[u],
			parentNodeIndex = parentNodeIndices[u];
		parentNodeIndex >= 0 ?
			(
				Spasm.assert(parentNodeIndex < u),
				parentAnimationMatrix = animationMatrices[parentNodeIndex],
				mat4.multiply(animationMatrix, parentAnimationMatrix, nodeMatrix)
			) :
			mat4.copy(animationMatrix, nodeMatrix);
		mat4.multiply(tempMatrix0, animationMatrix, inverseObjectSpaceTransformMatrix);
		mat4.transpose(tempMatrix0, tempMatrix0);
		skinningMatrices.set(tempMatrix0.subarray(0, 12), u * 12)
	}
};
Spasm.Animation.prototype.onLoadAnimationSuccess = function(animations) {
	var animations_length, f, t, transform, transformMatrix, c, l, boneMatrix;
	Spasm.assertArray(animations);
	this.loadSuccess = !0;
	animations_length = animations.length;
	Spasm.assert(animations_length > 0);
	var animation = animations[0],
		node_count = animation.node_count,
		frame_count = animation.frame_count,
		static_bone_data = animation.static_bone_data,
		scale_control_map = static_bone_data.scale_control_map,
		rotation_control_map = static_bone_data.rotation_control_map,
		translation_control_map = static_bone_data.translation_control_map,
		firstFrame = static_bone_data.transform_stream_header.streams.frames[0],
		frameScales = firstFrame.scales,
		frameRotations = firstFrame.rotations,
		frameTranslations = firstFrame.translations,
		animated_bone_data = animation.animated_bone_data,
		anim_scale_control_map = animated_bone_data.scale_control_map,
		anim_rotation_control_map = animated_bone_data.rotation_control_map,
		anim_translation_control_map = animated_bone_data.translation_control_map,
		anim_frames = animated_bone_data.transform_stream_header.streams.frames,
		framesMatrices = [];
	for (f = 0; f < frame_count; f++) {
		var frameMatrices = [],
			anim_frame = anim_frames[f],
			scales = anim_frame.scales,
			rotations = anim_frame.rotations,
			translations = anim_frame.translations;
		for (t = 0; t < node_count; t++) {
			var bone_scale_control_map_index = scale_control_map.indexOf(t),
				bone_rotation_control_map_index = rotation_control_map.indexOf(t),
				bone_translation_control_map_index = translation_control_map.indexOf(t),
				bone_anim_scale_control_map_index = anim_scale_control_map.indexOf(t),
				bone_anim_rotation_control_map_index = anim_rotation_control_map.indexOf(t),
				bone_anim_translation_control_map_index = anim_translation_control_map.indexOf(t),
				bone_scale = bone_scale_control_map_index >= 0 ? frameScales[bone_scale_control_map_index] : scales[bone_anim_scale_control_map_index],
				bone_rotation = bone_rotation_control_map_index >= 0 ? frameRotations[bone_rotation_control_map_index] : rotations[bone_anim_rotation_control_map_index],
				bone_translation = bone_translation_control_map_index >= 0 ? frameTranslations[bone_translation_control_map_index] : translations[bone_anim_translation_control_map_index];
			Spasm.assertValid(bone_scale);
			Spasm.assertValid(bone_rotation);
			Spasm.assertValid(bone_translation);
			transform = new Spasm.TransformSRT(bone_scale, bone_rotation, bone_translation);
			transformMatrix = mat4.create();
			transform.setMatrix(transformMatrix);
			frameMatrices.push(transformMatrix)
		}
		framesMatrices.push(frameMatrices)
	}
	for (this.nodeCount = node_count,
			 this.frameCount = frame_count,
			 this.framesMatrices = framesMatrices,
			 c = [],
			 l = 0; l < node_count; l++)
		boneMatrix = mat4.create(),
		c.push(boneMatrix);
	this.animationMatrices = c;
	this.callback && (this.callback(this, !0), this.callback = null)
};
Spasm.Animation.prototype.onLoadAnimationFailure = function() {
	this.loadSuccess = !1;
	this.callback && (this.callback(this, !1), this.callback = null)
};
Spasm.Animation.prototype.onLoadAnimation = function(n) {
	if (Spasm.assertInstance(n, Spasm.JSONLoader), this.loadComplete = !0, n.isCompleteAndOK()) {
		var t = n.parsedResponse;
		this.onLoadAnimationSuccess(t)
	} else this.onLoadAnimationFailure()
};