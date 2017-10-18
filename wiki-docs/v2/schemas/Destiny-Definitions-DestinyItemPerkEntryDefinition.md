<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
An intrinsic perk on an item, and the requirements for it to be activated.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
requirementDisplayString | string | If this perk is not active, this is the string to show for whyit's not providing its benefits.
perkHash | [[Destiny.Definitions.DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:integer:uint32 | A hash identifier for the DestinySandboxPerkDefinition being provided on the item.

## Example
```javascript
{
    // Type: string
    "requirementDisplayString": "",
    // Type: [[Destiny.Definitions.DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:integer:uint32
    "perkHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemPerkEntryDefinition.html#schema_Destiny-Definitions-DestinyItemPerkEntryDefinition
