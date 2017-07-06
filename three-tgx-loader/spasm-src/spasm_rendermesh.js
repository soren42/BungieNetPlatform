Spasm = Spasm || {};
Spasm.RenderMesh = function(renderMesh) {
	var texcoord0ScaleOffset, stagePartListLength, i, stagePart, stagePartMesh, vertexBuffersLength, r, vertexBuffer, vertexBufferMetadata;
	for (Spasm.assertValid(renderMesh),
			 this.renderMesh = renderMesh,
			 this.boundingVolume = Spasm.boundingVolumeFromRenderMetadata(renderMesh.bounding_volume),
			 this.skinning = renderMesh.skinning,
			 this.positionOffset = renderMesh.position_offset,
			 this.positionScale = renderMesh.position_scale,
			 texcoord0ScaleOffset = renderMesh.texcoord0_scale_offset,
			 this.textureScale = [texcoord0ScaleOffset[0], texcoord0ScaleOffset[1]],
			 this.textureOffset = [texcoord0ScaleOffset[2], texcoord0ScaleOffset[3]],
			 this.stageParts = [],
			 stagePartListLength = renderMesh.stage_part_list.length,
			 i = 0; i < stagePartListLength; i++)
				stagePart = renderMesh.stage_part_list[i],
				stagePartMesh = new Spasm.RenderMeshStagePart(stagePart),
				this.stageParts.push(stagePartMesh);
	for (this.stagePartOffsets = renderMesh.stage_part_offsets,
			 this.stagePartVertexStreamLayoutLookup = renderMesh.stage_part_vertex_stream_layout_lookup,
			 this.stagePartVertexStreamLayoutDefintions = renderMesh.stage_part_vertex_stream_layout_definitions,
			 this.indexBufferMetadata = {
				fileName: renderMesh.index_buffer.file_name,
				byteSize: renderMesh.index_buffer.byte_size,
				valueByteSize: renderMesh.index_buffer.value_byte_size
			 },
			 this.vertexBufferMetadatas = [],
			 vertexBuffersLength = renderMesh.vertex_buffers.length,
			 r = 0; r < vertexBuffersLength; r++)
				vertexBuffer = renderMesh.vertex_buffers[r],
				vertexBufferMetadata = {
					fileName: vertexBuffer.file_name,
					byteSize: vertexBuffer.byte_size,
					strideByteSize: vertexBuffer.stride_byte_size
				},
				this.vertexBufferMetadatas.push(vertexBufferMetadata)
};
Spasm.RenderMesh.prototype = {};
Spasm.RenderMesh.prototype.setVertexBuffers = function(n) {
	Spasm.assertArrayInstances(n, Spasm.VertexBuffer);
	this.vertexBuffers = n
};
Spasm.RenderMesh.prototype.setIndexBuffer = function(indexBuffer) {
	Spasm.assertInstance(indexBuffer, Spasm.IndexBuffer);
	this.indexBuffer = indexBuffer
};
Spasm.RenderMesh.prototype.getRenderable = function(gl, renderableMeshes, renderableTextures) {
	Spasm.assertWebGLContext(gl);
	Spasm.assertValid(renderableMeshes);
	var uniformDatas = this.getUniformDatas(renderableMeshes, renderableTextures),
		vertexBuffers = this.vertexBuffers,
		indexBuffer = this.indexBuffer,
		renderableParts = this.getRenderableParts(gl),
		boundingVolume = this.boundingVolume;
	return new Spasm.Renderable(gl, vertexBuffers, indexBuffer, uniformDatas, renderableTextures, renderableParts, boundingVolume)
};
Spasm.RenderMesh.prototype.stagesToRender = [0];
Spasm.RenderMesh.prototype.getRenderableParts = function(gl) {
	var r, stageOffset, stagePartStartOffset, stagePartEndOffset, i;
	Spasm.assertWebGLContext(gl);
	var stageParts = this.stageParts,
		stagePartOffsets = this.stagePartOffsets,
		stagesToRender = this.stagesToRender,
		stagePartsLength = stageParts.length,
		stagePartOffsetsLength = stagePartOffsets.length,
		stagesToRenderLength = stagesToRender.length,
		renderableParts = [];
	for (r = 0; r < stagesToRenderLength; r++)
		for (stageOffset = stagesToRender[r],
				 Spasm.assert(stageOffset + 1 < stagePartOffsetsLength),
				 stagePartStartOffset = stagePartOffsets[stageOffset],
				 stagePartEndOffset = stagePartOffsets[stageOffset + 1],
				 i = stagePartStartOffset; i < stagePartEndOffset; i++) {
			Spasm.assert(i < stagePartsLength);
			var stagePart = stageParts[i],
				externalIdentifier = stagePart.externalIdentifier,
				primitiveType = stagePart.primitiveType,
				primitiveTypeId = primitiveType === 3 ? gl.TRIANGLES : gl.TRIANGLE_STRIP,
				isTriangles = primitiveTypeId === gl.TRIANGLES,
				lodCategory = stagePart.lodCategory,
				stagePartName = lodCategory.name;
			if (stagePartName.indexOf("0") >= 0) {
				var startIndex = stagePart.startIndex,
					indexCount = stagePart.indexCount,
					gearDyeChangeColorIndex = stagePart.gearDyeChangeColorIndex,
					renderablePart = new Spasm.RenderablePart(startIndex, indexCount, gearDyeChangeColorIndex, primitiveTypeId, externalIdentifier, isTriangles);
				renderableParts.push(renderablePart)
			}
		}
	return renderableParts
};
Spasm.RenderMesh.prototype.getAttributes = function(n) {
	var vertexBufferIndex, o, h, c, ht, ct, lt, f, at, vt, a, pt, wt;
	Spasm.assertWebGLContext(n);
	var vertexBufferMetadatas = this.vertexBufferMetadatas,
		vertexBufferMetadatasLength = vertexBufferMetadatas.length,
		stagePartVertexStreamLayoutDefinitions = this.stagePartVertexStreamLayoutDefintions,
		stagePartVertexStreamLayoutDefinitionsLength = stagePartVertexStreamLayoutDefinitions.length;
	Spasm.assertEqual(stagePartVertexStreamLayoutDefinitionsLength, 1);
	var stagePartVertexStreamLayoutDefinition = stagePartVertexStreamLayoutDefinitions[0],
		formats = stagePartVertexStreamLayoutDefinition.formats,
		formatsLength = formats.length;
	Spasm.assertEqual(vertexBufferMetadatasLength, formatsLength);
	var tt = [],
		it = [],
		gt = {};
	for (vertexBufferIndex = 0; vertexBufferIndex < vertexBufferMetadatasLength; vertexBufferIndex++) {
		var rt = [],
			vertexBufferMetadata = vertexBufferMetadatas[vertexBufferIndex],
			strideByteSize = vertexBufferMetadata.strideByteSize,
			format = formats[vertexBufferIndex],
			stride = format.stride;
		Spasm.assertEqual(strideByteSize, stride);
		var elements = format.elements,
			elementsLength = elements.length,
			dataTypes = ["ubyte", "byte", "ushort", "short", "uint", "int", "float"],
			v = {},
			byteOffset = 0;
		for (o = 0; o < elementsLength; o++) {
			var s = elements[o],
				semanticIndex = s.semantic_index,
				semantic = s.semantic,
				semanticType = s.type,
				semanticTypeId = semantic.replace("_tfx_vb_semantic_", ""),
				dataType = semanticType.replace("_vertex_format_attribute_", ""),
				t = "",
				elementValueSize = 0,
				elementValueCount = 0,
				dataTypesLength = dataTypes.length;
			for (h = 0; h < dataTypesLength; h++)
				if (c = dataTypes[h], ht = dataType.indexOf(c), ht === 0) {
					ct = dataType.length;
					lt = dataType[ct - 1];
					elementValueCount = parseInt(lt);
					Spasm.assertInteger(elementValueCount);
					switch (c) {
						case "byte":
							t = "BYTE";
							elementValueSize = 1;
							break;
						case "ubyte":
							t = "UNSIGNED_BYTE";
							elementValueSize = 1;
							break;
						case "short":
							t = "SHORT";
							elementValueSize = 2;
							break;
						case "ushort":
							t = "UNSIGNED_SHORT";
							elementValueSize = 2;
							break;
						case "int":
							t = "INT";
							elementValueSize = 4;
							break;
						case "uint":
							t = "UNSIGNED_INT";
							elementValueSize = 4;
							break;
						case "float":
							t = "FLOAT";
							elementValueSize = 4;
							break;
						default:
							Spasm.assert(!1, "invalid elementValueSizeName: " + c)
					}
					break
				}
			var elementSize = elementValueSize * elementValueCount,
				fi = n[t],
				normalized = s.normalized;
			semanticTypeId.indexOf("position") >= 0 && t === "FLOAT" && (this.positionScale = [1, 1, 1], this.positionOffset = [0, 0, 0]);
			f = "" + semanticTypeId + "" + semanticIndex;
			f in it && console.log("oops - duplicate semantic identifier: " + f);
			it.push(f);
			v[f] = elementSize;
			gt[f] = {
				vertexBufferIndex: vertexBufferIndex,
				byteOffset: byteOffset,
				elementSize: elementSize,
				elementTypeName: semanticType,
				vertexStride: strideByteSize,
				elementValueSize: elementValueSize,
				elementValueCount: elementValueCount
			};
			at = elementValueCount === 1 ? "float" : "vec" + elementValueCount;
			vt = new Spasm.VertexBufferAttribute(semanticTypeId, semanticIndex, at, fi, elementValueCount, normalized, elementSize, byteOffset);
			rt.push(vt);
			byteOffset += elementSize
		}
		var b = 0,
			yt = Object.keys(v),
			oi = yt.length;
		for (a = 0; a < oi; a++) pt = yt[a], b += v[pt];
		wt = b - strideByteSize;
		Spasm.assert(wt === 0, "non-zero stride difference: given - " + strideByteSize + ", calculated - " + b);
		tt.push(rt)
	}
	return tt
};
Spasm.RenderMesh.prototype.getUniformDatas = function(n, t) {
	var h = this.positionScale,
		c = this.positionOffset,
		l = this.textureScale,
		a = this.textureOffset,
		i = Spasm.Shader.InputTypes,
		r = Spasm.Shader.ValueTypes,
		v = new Spasm.ShaderInput(i.uniform, r.vec3, "u_position_scale"),
		y = new Spasm.UniformData(v, new Float32Array(h)),
		p = new Spasm.ShaderInput(i.uniform, r.vec3, "u_position_offset"),
		w = new Spasm.UniformData(p, new Float32Array(c)),
		b = new Spasm.ShaderInput(i.uniform, r.vec2, "u_texcoord_scale"),
		k = new Spasm.UniformData(b, new Float32Array(l)),
		d = new Spasm.ShaderInput(i.uniform, r.vec2, "u_texcoord_offset"),
		g = new Spasm.UniformData(d, new Float32Array(a)),
		e = [y, w, k, g],
		u, f, o, s;
	for (u in t) f = t[u], f && (o = new Spasm.ShaderInput(i.uniform, r.sampler2D, "u_texture_" + u), s = new Spasm.UniformData(o, f.index), e.push(s));
	return e
};