Spasm = Spasm || {};
Spasm.Skeleton = function(skeletonPath, callback) {
	Spasm.assertPath(skeletonPath);
	Spasm.assertFunction(callback);
	this.skeletonPath = skeletonPath;
	this.callback = callback;
	this.loadComplete = !1;
	this.loadSuccess = !1;
	var scope = this,
		onLoad = function(n) {
			scope.onLoadSkeleton(n)
		};
	this.skeleton = null;
	this.skeletonLoader = new Spasm.JSONLoader(skeletonPath, onLoad);
	this.inverseObjectSpaceTransformMatrices = null;
	this.parentNodeIndices = null;
	this.nodeCount = 0
};
Spasm.Skeleton.prototype = {};
Spasm.Skeleton.prototype.onLoadSkeletonSuccess = function(data) {
	var t, node, parent_node_index;
	Spasm.assertValid(data);
	this.loadSuccess = !0;
	var definition = data.definition,
		default_inverse_object_space_transforms = definition.default_inverse_object_space_transforms,
		nodes = definition.nodes,
		matrices = [],
		parentNodeIndices = [],
		default_inverse_object_space_transforms_length = default_inverse_object_space_transforms.length;
	for (t = 0; t < default_inverse_object_space_transforms_length; t++) {
		var default_inverse_object_space_transform = default_inverse_object_space_transforms[t],
			ts = default_inverse_object_space_transform.ts,
			scale = ts[3],
			rotation = default_inverse_object_space_transform.r,
			translation = [ts[0], ts[1], ts[2]],
			transform = new Spasm.TransformSRT(scale, rotation, translation),
			matrix = mat4.create();
		transform.setMatrix(matrix);
		console.log('Skeleton', t, translation, rotation, scale, matrix);
		matrices.push(matrix);
		node = nodes[t];
		parent_node_index = node.parent_node_index;
		parentNodeIndices.push(parent_node_index)
	}
	this.inverseObjectSpaceTransformMatrices = matrices;
	this.parentNodeIndices = parentNodeIndices;
	this.callback && (this.callback(this, !0), this.callback = null)
};
Spasm.Skeleton.prototype.onLoadSkeletonFailure = function() {
	this.loadSuccess = !1;
	this.callback && (this.callback(this, !1), this.callback = null)
};
Spasm.Skeleton.prototype.onLoadSkeleton = function(n) {
	if (Spasm.assertInstance(n, Spasm.JSONLoader), this.loadComplete = !0, n.isCompleteAndOK()) {
		var parsedResponse = n.parsedResponse;
		this.onLoadSkeletonSuccess(parsedResponse)
	} else this.onLoadSkeletonFailure()
};