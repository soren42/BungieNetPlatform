<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
activityHash | integer:uint32 | 
status | [[DestinyPublicActivityStatus|Destiny-Activities-DestinyPublicActivityStatus]] | 

## Example
```javascript
{
    // Type: integer:uint32
    "activityHash": 0,
    // Type: [[DestinyPublicActivityStatus|Destiny-Activities-DestinyPublicActivityStatus]]
    "status": {
        // Type: [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32[]
        "challengeObjectiveHashes": [
           // Type: integer:uint32
            0
        ],
        // Type: [[Destiny.Definitions.ActivityModifiers.DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]]:integer:uint32[]
        "modifierHashes": [
           // Type: integer:uint32
            0
        ],
        // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
        "rewardTooltipItems": [
           // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]]
            {
                // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                "itemHash": 0,
                // Type: integer:int64:nullable
                "itemInstanceId": 0,
                // Type: integer:int32
                "quantity": 0
            }
        ]
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Trending-TrendingEntryDestinyActivity.html#schema_Trending-TrendingEntryDestinyActivity
