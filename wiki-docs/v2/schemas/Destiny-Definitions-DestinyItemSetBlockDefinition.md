<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Primarily for Quests, this is the definition of properties related to the item if it is a questand its various quest steps.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
itemList | [[DestinyItemSetBlockEntryDefinition|Destiny-Definitions-DestinyItemSetBlockEntryDefinition]]:Definition[] | A collection of hashes of set items, for items such as Quest Metadata items that possess this data.
requireOrderedSetItemAdd | boolean | If true, items in the set can only be added in increasing order, and adding an item will remove any previous item.For Quests, this is by necessity true.  Only one quest step is present at a time, and previous steps are removedas you advance in the quest.
setIsFeatured | boolean | If true, the UI should treat this quest as &quot;featured&quot;
setType | string | A string identifier we can use to attempt to identify the category of the Quest.

## Example
```javascript
{
    // Type: [[DestinyItemSetBlockEntryDefinition|Destiny-Definitions-DestinyItemSetBlockEntryDefinition]]:Definition[]
    "itemList": [
       // Type: [[DestinyItemSetBlockEntryDefinition|Destiny-Definitions-DestinyItemSetBlockEntryDefinition]]:Definition
        {
            // Type: integer:int32
            "trackingValue": 0,
            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
            "itemHash": 0
        }
    ],
    // Type: boolean
    "requireOrderedSetItemAdd": false,
    // Type: boolean
    "setIsFeatured": false,
    // Type: string
    "setType": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemSetBlockDefinition.html#schema_Destiny-Definitions-DestinyItemSetBlockDefinition
