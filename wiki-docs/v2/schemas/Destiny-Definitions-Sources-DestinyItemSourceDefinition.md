<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Properties of a DestinyInventoryItemDefinition that store all of the informationwe were able to discern about how the item spawns, and where you can find the item. Items will have many of these sources, one per level at which it spawns, to tryand give more granular data about where items spawn for specific level ranges.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
level | integer:int32 | The level at which the item spawns.  Essentially the Primary Keyfor this source data: there will be multiple of these source entries per item thathas source data, grouped by the level at which the item spawns.
minQuality | integer:int32 | The minimum Quality at which the item spawns for this level.  Examine DestinyInventoryItemDefinitionfor more information about what Quality means.  Just don't ask Phaedrus about it,he'll never stop talking and you'll have to write a book about it.
maxQuality | integer:int32 | The maximum quality at which the item spawns for this level.
minLevelRequired | integer:int32 | The minimum Character Level required for equipping the item when the item spawns at the item leveldefined on this DestinyItemSourceDefinition, as far as we saw in our processing.
maxLevelRequired | integer:int32 | The maximum Character Level required for equipping the item when the item spawns at the item leveldefined on this DestinyItemSourceDefinition, as far as we saw in our processing.
computedStats | Dictionary&lt;integer:uint32,[[DestinyInventoryItemStatDefinition|Destiny-Definitions-DestinyInventoryItemStatDefinition]]:Definition&gt; | The stats computed for this level/quality range.
sourceHashes | [[DestinyRewardSourceDefinition|Destiny-Definitions-DestinyRewardSourceDefinition]]:ManifestDefinition:integer:uint32[] | The DestinyRewardSourceDefinitions found that can spawn the item at this level.

## Example
```javascript
{
    // Type: integer:int32
    "level": 0,
    // Type: integer:int32
    "minQuality": 0,
    // Type: integer:int32
    "maxQuality": 0,
    // Type: integer:int32
    "minLevelRequired": 0,
    // Type: integer:int32
    "maxLevelRequired": 0,
    // Type: Dictionary&lt;integer:uint32,[[DestinyInventoryItemStatDefinition|Destiny-Definitions-DestinyInventoryItemStatDefinition]]:Definition&gt;
    "computedStats": {
        "0": {
            // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
            "statHash": 0,
            // Type: integer:int32
            "value": 0,
            // Type: integer:int32
            "minimum": 0,
            // Type: integer:int32
            "maximum": 0
        }
    },
    // Type: [[DestinyRewardSourceDefinition|Destiny-Definitions-DestinyRewardSourceDefinition]]:ManifestDefinition:integer:uint32[]
    "sourceHashes": [
       // Type: integer:uint32
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Sources-DestinyItemSourceDefinition.html#schema_Destiny-Definitions-Sources-DestinyItemSourceDefinition
