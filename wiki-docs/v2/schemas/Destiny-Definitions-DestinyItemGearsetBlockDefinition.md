<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If an item has a related gearset, this is the list of items in that set, and an unlock expression that evaluates to a number representing the progress toward gearset completion (a very rare use for unlock expressions!)

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
trackingValueMax | integer:int32 | The maximum possible number of items that can be collected.
itemList | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32[] | The list of hashes for items in the gearset. Use them to look up DestinyInventoryItemDefinition entries for the items in the set.

## Example
```javascript
{
    // Type: integer:int32
    "trackingValueMax": 0,
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32[]
    "itemList": [
       // Type: integer:uint32
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemGearsetBlockDefinition.html#schema_Destiny-Definitions-DestinyItemGearsetBlockDefinition
