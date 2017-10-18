<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Data about an item's &quot;sources&quot;: ways that the item can be obtained.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
sourceHashes | [[Destiny.Definitions.DestinyRewardSourceDefinition|Destiny-Definitions-DestinyRewardSourceDefinition]]:integer:uint32[] | The list of hash identifiers for Reward Sources that hint where the item can be found (DestinyRewardSourceDefinition).
sources | [[DestinyItemSourceDefinition|Destiny-Definitions-Sources-DestinyItemSourceDefinition]]:Definition[] | A collection of details about the stats that were computed for the ways we found that the itemcould be spawned.
exclusive | [[BungieMembershipType|BungieMembershipType]]:Enum | If we found that this item is exclusive to a specific platform, this will be set to theBungieMembershipType enumeration that matches that platform.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyRewardSourceDefinition|Destiny-Definitions-DestinyRewardSourceDefinition]]:integer:uint32[]
    "sourceHashes": [
       // Type: integer:uint32
        0
    ],
    // Type: [[DestinyItemSourceDefinition|Destiny-Definitions-Sources-DestinyItemSourceDefinition]]:Definition[]
    "sources": [
       // Type: [[DestinyItemSourceDefinition|Destiny-Definitions-Sources-DestinyItemSourceDefinition]]:Definition
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
                    // Type: [[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32
                    "statHash": 0,
                    // Type: integer:int32
                    "value": 0,
                    // Type: integer:int32
                    "minimum": 0,
                    // Type: integer:int32
                    "maximum": 0
                }
            },
            // Type: [[Destiny.Definitions.DestinyRewardSourceDefinition|Destiny-Definitions-DestinyRewardSourceDefinition]]:integer:uint32[]
            "sourceHashes": [
               // Type: integer:uint32
                0
            ]
        }
    ],
    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
    "exclusive": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemSourceBlockDefinition.html#schema_Destiny-Definitions-DestinyItemSourceBlockDefinition
