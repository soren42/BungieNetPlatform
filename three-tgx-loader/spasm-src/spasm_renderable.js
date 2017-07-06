Spasm = Spasm || {};
Spasm.Renderable = function(gl, vertexBuffers, indexBuffer, uniformDatas, textures, parts, boundingVolume) {
	var partsLength, o, part, externalIdentifier, s, h, attribute, shaderValueName;
	for (Spasm.assertWebGLContext(gl),
			 Spasm.assertArrayInstances(vertexBuffers, Spasm.VertexBuffer),
			 Spasm.assertInstance(indexBuffer, Spasm.IndexBuffer),
			 Spasm.assertArrayInstances(uniformDatas, Spasm.UniformData),
			 Spasm.assertArrayInstances(parts, Spasm.RenderablePart),
			 Spasm.assertInstance(boundingVolume, Spasm.BoundingVolume),
			 this.gl = gl,
			 this.vertexBuffers = vertexBuffers,
			 this.indexBuffer = indexBuffer,
			 this.uniformDatas = uniformDatas,
			 this.textures = textures,
			 this.parts = parts,
			 this.boundingVolume = boundingVolume,
			 this.partExternalIdentifiers = {},
			 partsLength = parts.length, o = 0; o < partsLength; o++)
				part = parts[o],
				externalIdentifier = part.externalIdentifier,
				externalIdentifier != null && (this.partExternalIdentifiers[externalIdentifier] = "");
	this.gearShaders = null;
	this.gearDyes = [];
	var hasBlendIndices = !1,
		hasBlendWeights = !1,
		hasTexcoord2 = !1,
		vertexBuffersLength = vertexBuffers.length;
	for (s = 0; s < vertexBuffersLength; s++) {
		var vertexBuffer = vertexBuffers[s],
			attributes = vertexBuffer.attributes,
			attributesLength = attributes.length;
		for (h = 0; h < attributesLength; h++)
			attribute = attributes[h],
				shaderValueName = attribute.shaderValueName,
				shaderValueName === "a_texcoord2" ?
					hasTexcoord2 = !0 :
					shaderValueName === "a_blendindices" ?
						hasBlendIndices = !0 :
						shaderValueName === "a_blendweight" && (hasBlendWeights = !0)
	}
	this.hasTexcoord2 = hasTexcoord2;
	this.hasBlendIndices = hasBlendIndices;
	this.hasBlendWeights = hasBlendWeights;
	this.assertValidVertexBuffers();
	this.assertValidIndexBuffer();
	this.assertValidParts()
};
Spasm.Renderable.prototype = {};
Spasm.Renderable.prototype.bindBuffers = function() {
	var u = this.gl,
		f = this.vertexBuffers,
		e = this.indexBuffer,
		o = this.textures,
		s, n, h, i, c, t, l, r;
	for (e.bindBuffer(), s = f.length, n = 0; n < s; n++) h = f[n], h.bindBuffer(u);
	for (e.bindBuffer(u), i = Object.keys(o), c = i.length, t = 0; t < c; t++) l = i[t], r = o[l], r && r.bindTexture()
};
Spasm.Renderable.prototype.useShaderProgram = function(n) {
	var i, r, u, t, f;
	for (Spasm.assertInstance(n, Spasm.ShaderProgram), i = this.vertexBuffers, r = this.uniformDatas, Spasm.assertArrayInstances(i, Spasm.VertexBuffer), n.useProgram(), n.bindVertexAttributes(i), u = r.length, t = 0; t < u; t++) f = r[t], n.setUniformData(f)
};
Spasm.Renderable.prototype.render = function(n, t) {
	var gearShaders = this.gearShaders,
		c, shaderProgram, f, part, isCloth, partExternalIdentifier, gearDyeSlot, usePrimaryColor, e, gearDye, uniformDatas, uniformDatasLength, o, uniformData, colorUniformData;
	Spasm.assertInstance(gearShaders, Spasm.GearShader);
	this.bindBuffers();
	c = !!n;
	shaderProgram = gearShaders.getShaderProgram(this.hasBlendIndices, this.hasBlendWeights, this.hasTexcoord2, c);
	this.useShaderProgram(shaderProgram);
	var gl = this.gl,
		parts = this.parts,
		elementType = this.indexBuffer.elementType,
		gearDyes = this.gearDyes,
		gearDyesLength = gearDyes.length,
		partsLength = parts.length;
	for (f = 0; f < partsLength; f++)
		if (part = parts[f],
				isCloth = part.isCloth, !t || isCloth || (partExternalIdentifier = part.externalIdentifier,
				partExternalIdentifier in t)) {
			for (gearDyeSlot = part.gearDyeSlot,
					 usePrimaryColor = part.usePrimaryColor,
					 e = 0; e < gearDyesLength; e++)
				if (gearDye = gearDyes[e], gearDye.slotTypeIndex === gearDyeSlot) {
					for (gearDye.bindTextures(),
							 uniformDatas = gearDye.uniformDatas,
							 uniformDatasLength = uniformDatas.length,
							 o = 0; o < uniformDatasLength; o++)
						uniformData = uniformDatas[o],
						shaderProgram.setUniformData(uniformData);
					colorUniformData = usePrimaryColor ? gearDye.primaryColorUniformData : gearDye.secondaryColorUniformData;
					shaderProgram.setUniformData(colorUniformData)
				}
			var primitiveType = part.primitiveType,
				indexStart = part.indexStart,
				indexCount = part.indexCount,
				indexStartOffset = indexStart * 2;
			gl.drawElements(primitiveType, indexCount, elementType, indexStartOffset)
		}
	shaderProgram.resetVertexAttributes()
};
Spasm.Renderable.prototype.assertValidParts = function() {
	for (var r = this.indexBuffer, t = this.parts, u = r.indexCount, f = t.length, n = 0; n < f; n++) {
		var i = t[n],
			e = i.indexStart,
			o = i.indexCount,
			s = e + o;
		Spasm.assert(s <= u)
	}
};
Spasm.Renderable.prototype.setGearShaders = function(n) {
	Spasm.assertInstance(n, Spasm.GearShader);
	this.gearShaders = n
};
Spasm.Renderable.prototype.setGearDyes = function(n) {
	Spasm.assertArrayInstances(n, Spasm.GearDye);
	this.gearDyes = n
};
Spasm.Renderable.prototype.assertValidVertexBuffers = function() {
	var t = this.vertexBuffers,
		i = t.length,
		u = t[0].vertexCount,
		n, r;
	if (i > 1)
		for (n = 1; n < i; n++) r = t[n], Spasm.assertEqual(u, r.vertexCount)
};
Spasm.Renderable.prototype.assertValidIndexBuffer = function() {
	for (var t = this.indexBuffer, r = this.vertexBuffers, u = r[0].vertexCount, f = t.indexCount, e = new Uint16Array(t.arrayBuffer), i, n = 0; n < f; n++) i = e[n], Spasm.assert(i < u)
};