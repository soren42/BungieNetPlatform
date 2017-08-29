<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Many actions relating to items require you to expend materials:- Activating a talent node- Inserting a plug into a socketThe items will refer to material requirements by a materialRequirementsHash in these cases, and thisis the definition for those requirements in terms of the item required, how much of it is required and otherinteresting info.This is one of the rare/strange times where a single contract class is used both in definitions *and*in live data response contracts.  I'm not sure yet whether I regret that.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
itemHash | [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32 | The hash identifier of the material required.  Use it to look up the material's DestinyInventoryItemDefinition.
deleteOnAction | boolean | If True, the material will be removed from the character's inventory when the action is performed.
count | integer:int32 | The amount of the material required.
omitFromRequirements | boolean | If True, this requirement is &quot;silent&quot;: don't bother showing it in a material requirements display.I mean, I'm not your mom: I'm not going to tell you you *can't* show it.  But we won't show it in our UI.

## Example
```javascript
{
    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
    "itemHash": 0,
    // Type: boolean
    "deleteOnAction": false,
    // Type: integer:int32
    "count": 0,
    // Type: boolean
    "omitFromRequirements": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyMaterialRequirement.html#schema_Destiny-Definitions-DestinyMaterialRequirement
