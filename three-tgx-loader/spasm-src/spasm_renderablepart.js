Spasm = Spasm || {};
Spasm.RenderablePart = function(startIndex, indexCount, changeColorIndex, primitiveType, externalIdentifier, isCloth) {
	Spasm.assertInteger(startIndex);
	Spasm.assertInteger(indexCount);
	Spasm.assertInteger(changeColorIndex);
	Spasm.assertInteger(primitiveType);
	Spasm.assertInteger(externalIdentifier);
	Spasm.assertBoolean(isCloth);
	this.indexStart = startIndex;
	this.indexCount = indexCount;
	this.changeColorIndex = changeColorIndex;
	this.primitiveType = primitiveType;
	this.externalIdentifier = externalIdentifier;
	this.isCloth = isCloth;
	var gearDyeSlot = 0,
		usePrimaryColor = !0,
		useInvestmentDecal = !1;
	switch (changeColorIndex) {
		case 0:
			gearDyeSlot = 0;
			break;
		case 1:
			gearDyeSlot = 0;
			usePrimaryColor = !1;
			break;
		case 2:
			gearDyeSlot = 1;
			break;
		case 3:
			gearDyeSlot = 1;
			usePrimaryColor = !1;
			break;
		case 4:
			gearDyeSlot = 2;
			break;
		case 5:
			gearDyeSlot = 2;
			usePrimaryColor = !1;
			break;
		case 6:
			gearDyeSlot = 3;
			useInvestmentDecal = !0;
			break;
		case 7:
			gearDyeSlot = 3;
			useInvestmentDecal = !0;
			break;
		default:
			Spasm.assert(!1, "unsupported change color index: " + changeColorIndex)
	}
	this.gearDyeSlot = gearDyeSlot;
	this.usePrimaryColor = usePrimaryColor;
	this.useInvestmentDecal = useInvestmentDecal
};