Spasm = Spasm || {};
Spasm.VertexBufferAttribute = function(semantic, semanticIndex, shaderValueType, bufferValueType, valueCount, normalized, byteCount, o) {
	Spasm.assertString(semantic);
	Spasm.assertInteger(semanticIndex);
	Spasm.assertString(shaderValueType);
	Spasm.assertInteger(bufferValueType);
	Spasm.assertInteger(valueCount);
	Spasm.assertBoolean(normalized);
	Spasm.assertInteger(byteCount);
	Spasm.assertInteger(o);
	this.semantic = semantic;
	this.semanticIndex = semanticIndex;
	this.shaderValueType = shaderValueType;
	this.bufferValueType = bufferValueType;
	this.valueCount = valueCount;
	this.normalized = normalized;
	this.byteCount = byteCount;
	this.byteOffset = obyteOffset;
	this.assertValidAttribute();
	this.shaderValueName = "a_" + semantic + (semanticIndex > 0 ? semanticIndex : "");
	this.declaration = "attribute " + shaderValueType + " " + this.shaderValueName + ";"
};
Spasm.VertexBufferAttribute.prototype = {};
Spasm.VertexBufferAttribute.prototype.assertValidAttribute = function() {
	var semanticIndex = this.semanticIndex,
		shaderValueType = this.shaderValueType,
		bufferValueType = this.bufferValueType,
		valueCount = this.valueCount,
		byteCount = this.byteCount,
		byteOffset = this.byteOffset;
	Spasm.assert(semanticIndex >= 0);
	Spasm.assert(shaderValueType in Spasm.Shader.ValueTypes);
	Spasm.assert(bufferValueType >= 0);
	Spasm.assert(valueCount >= 1);
	Spasm.assert(byteCount >= 1);
	Spasm.assert(byteOffset >= 0)
};
