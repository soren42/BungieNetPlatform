<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If an item has a related gearset, this is the list of items in that set, and an unlock expressionthat evaluates to a number representing the progress toward gearset completion (a very rare use forunlock expressions!)

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
trackingValueMax | integer:int32 | The maximum possible number of items that can be collected.
itemList | [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32[] | The list of hashes for items in the gearset.  Use them to look up DestinyInventoryItemDefinition entries forthe items in the set.

## Example
```javascript
{
    // Type: integer:int32
    "trackingValueMax": 0,
    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32[]
    "itemList": [
       // Type: integer:uint32
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemGearsetBlockDefinition.html#schema_Destiny-Definitions-DestinyItemGearsetBlockDefinition
