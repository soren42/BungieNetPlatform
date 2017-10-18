<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents the public-facing status of an activity: any data about what is currently active in theActivity, regardless of an individual character's progress in it.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
challengeObjectiveHashes | [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32[] | Active Challenges for the activity, if any - represented as hashes for DestinyObjectiveDefinitions.
modifierHashes | [[Destiny.Definitions.ActivityModifiers.DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]]:integer:uint32[] | The active modifiers on this activity, if any - represented as hashes for DestinyActivityModifierDefinitions.
rewardTooltipItems | [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][] | If the activity itself provides any specific &quot;mock&quot; rewards, this will be the items and their quantity. Why &quot;mock&quot;, you ask?  Because these are the rewards as they are represented in the tooltip of the Activity. These are often pointers to fake items that look good in a tooltip, but represent an abstract concept of what you will get for a reward rather than the specific items you may obtain.

## Example
```javascript
{
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Activities-DestinyPublicActivityStatus.html#schema_Destiny-Activities-DestinyPublicActivityStatus
