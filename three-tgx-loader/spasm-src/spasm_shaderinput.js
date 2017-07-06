Spasm = Spasm || {};
Spasm.ShaderInput = function(inputType, valueType, name, count) {
	count = count || 1;
	Spasm.assertString(inputType);
	Spasm.assertString(valueType);
	Spasm.assertString(name);
	Spasm.assertInteger(count);
	Spasm.assert(count >= 1);
	Spasm.assert(inputType in Spasm.Shader.InputTypes);
	Spasm.assert(valueType in Spasm.Shader.ValueTypes);
	this.inputType = inputType;
	this.name = name;
	this.valueType = valueType;
	this.count = count;
	this.isArray = this.count > 1;
	this.declaration = this.inputType + " " + this.valueType + " " + this.name + (this.isArray ? "[" + this.count + "]" : "") + ";"
};
Spasm.ShaderInput.prototype = {
	constructor: Spasm.ShaderInput
};
Spasm.ShaderInput.prototype.equals = function(n) {
	Spasm.assertInstance(n, Spasm.ShaderInput);
	var t = this.inputType === n.inputType && this.name === n.name && this.valueType === n.valueType && this.count === n.count;
	return Spasm.assertEqual(t, this.declaration === n.declaration), t
};