<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This defines a single Step in a progression (which roughly equates to a level. See DestinyProgressionDefinition for caveats).

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
stepName | string | Very rarely, Progressions will have localized text describing the Level of the progression. This will be that localized text, if it exists. Otherwise, the standard appears to be to simply show the level numerically.
displayEffectType | [[DestinyProgressionStepDisplayEffect|Destiny-DestinyProgressionStepDisplayEffect]]:Enum | This appears to be, when you &quot;level up&quot;, whether a visual effect will display and on what entity. See DestinyProgressionStepDisplayEffect for slightly more info.
progressTotal | integer:int32 | The total amount of progression points/&quot;experience&quot; you will need to initially reach this step. If this is the last step and the progression is repeating indefinitely (DestinyProgressionDefinition.repeatLastStep), this will also be the progress needed to level it up further by repeating this step again.
rewardItems | [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][] | A listing of items rewarded as a result of reaching this level.

## Example
```javascript
{
    // Type: string
    "stepName": "",
    // Type: [[DestinyProgressionStepDisplayEffect|Destiny-DestinyProgressionStepDisplayEffect]]:Enum
    "displayEffectType": {},
    // Type: integer:int32
    "progressTotal": 0,
    // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
    "rewardItems": [
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
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyProgressionStepDefinition.html#schema_Destiny-Definitions-DestinyProgressionStepDefinition
