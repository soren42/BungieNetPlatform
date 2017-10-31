<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Defines a particular entry in an ItemSet (AKA a particular Quest Step in a Quest)

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
trackingValue | integer:int32 | Used for tracking which step a user reached. These values will be populated in the user's internal state, which we expose externally as a more usable DestinyQuestStatus object. If this item has been obtained, this value will be set in trackingUnlockValueHash.
itemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | This is the hash identifier for a DestinyInventoryItemDefinition representing this quest step.

## Example
```javascript
{
    // Type: integer:int32
    "trackingValue": 0,
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "itemHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemSetBlockEntryDefinition.html#schema_Destiny-Definitions-DestinyItemSetBlockEntryDefinition
