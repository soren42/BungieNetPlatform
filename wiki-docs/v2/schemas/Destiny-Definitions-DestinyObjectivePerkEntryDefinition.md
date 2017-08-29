<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Defines the conditions under which an intrinsic perk is applied while participating in an Objective. These perks will generally not be benefit-granting perks, but rather a perk that modifies gameplayin some interesting way.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
perkHash | [[DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:ManifestDefinition:integer:uint32 | The hash identifier of the DestinySandboxPerkDefinition that will be applied to the character.
style | [[DestinyObjectiveGrantStyle|Destiny-DestinyObjectiveGrantStyle]]:Enum | An enumeration indicating whether it will be applied as long as the Objective is active, when it's completed,or until it's completed.

## Example
```javascript
{
    // Type: [[DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:ManifestDefinition:integer:uint32
    "perkHash": 0,
    // Type: [[DestinyObjectiveGrantStyle|Destiny-DestinyObjectiveGrantStyle]]:Enum
    "style": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyObjectivePerkEntryDefinition.html#schema_Destiny-Definitions-DestinyObjectivePerkEntryDefinition
