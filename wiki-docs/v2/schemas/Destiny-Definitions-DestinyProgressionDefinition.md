<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A &quot;Progression&quot; in Destiny is best explained by an example. A Character's &quot;Level&quot; is a progression:it has Experience that can be earned, levels that can be gained, and is evaluated and displayed atvarious points in the game.  A Character's &quot;Faction Reputation&quot; is also a progression for much the same reason. Progression is used by a variety of systems, and the definition of a Progression will generally only be useful if combining with live data (such as a character's DestinyCharacterProgressionComponent.progressionsproperty, which holds that character's live Progression states). Fundamentally, a Progression measures your &quot;Level&quot; by evaluating the thresholds in its Steps (one step per level, exceptfor the last step which can be repeated indefinitely for &quot;Levels&quot; that have no ceiling) against the total earned&quot;progression points&quot;/experience. (for simplicity purposes, we will henceforth refer to earned progression points asexperience, though it need not be a mechanic that in any way resembles Experience in a traditional sense). Earned experience is calculated in a variety of ways, determined by the Progression's scope.  These go fromlooking up a stored value to performing exceedingly obtuse calculations.  This is why we provide live datain DestinyCharacterProgressionComponent.progressions, so you don't have to worry about those.

## Schema
* **Schema Type:** Manifest Definition
* **Mobile Manifest:** Progressions

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyProgressionDisplayPropertiesDefinition|Destiny-Definitions-DestinyProgressionDisplayPropertiesDefinition]]:Definition | 
scope | [[DestinyProgressionScope|Destiny-DestinyProgressionScope]]:Enum | The &quot;Scope&quot; of the progression indicates the source of the progression's live data. See the DestinyProgressionScope enum for more info: but essentially, a Progression can either bebacked by a stored value, or it can be a calculated derivative of other values.
repeatLastStep | boolean | If this is True, then the progression doesn't have a maximum level.
source | string | If there's a description of how to earn this progression in the local config, this willbe that localized description.
steps | [[DestinyProgressionStepDefinition|Destiny-Definitions-DestinyProgressionStepDefinition]]:Definition[] | Progressions are divided into Steps, which roughly equate to &quot;Levels&quot; in the traditionalsense of a Progression.  Notably, the last step can be repeated indefinitely if repeatLastStepis true, meaning that the calculation for your level is not as simple as comparing your currentprogress to the max progress of the steps. These and more calculations are done for you ifyou grab live character progression data, such as in the DestinyCharacterProgressionComponent.
visible | boolean | If true, the Progression is something worth showing to users. If false, BNet isn't going to show it.  But that doesn't mean you can't.  We're all friends here.
factionHash | [[Destiny.Definitions.DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]]:integer:uint32:nullable | If the value exists, this is the hash identifier for the Faction that owns this Progression. This is purely for convenience, if you're looking at a progression and want to know if and whoit's related to in terms of Faction Reputation.
hash | integer:uint32 | The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet isnot yet allowed to show it.  Sorry!

## Example
```javascript
{
    // Type: [[DestinyProgressionDisplayPropertiesDefinition|Destiny-Definitions-DestinyProgressionDisplayPropertiesDefinition]]:Definition
    "displayProperties": {
        // Type: string
        "displayUnitsName": "",
        // Type: string
        "description": "",
        // Type: string
        "name": "",
        // Type: string
        "icon": "",
        // Type: boolean
        "hasIcon": false
    },
    // Type: [[DestinyProgressionScope|Destiny-DestinyProgressionScope]]:Enum
    "scope": 0,
    // Type: boolean
    "repeatLastStep": false,
    // Type: string
    "source": "",
    // Type: [[DestinyProgressionStepDefinition|Destiny-Definitions-DestinyProgressionStepDefinition]]:Definition[]
    "steps": [
       // Type: [[DestinyProgressionStepDefinition|Destiny-Definitions-DestinyProgressionStepDefinition]]:Definition
        {
            // Type: string
            "stepName": "",
            // Type: [[DestinyProgressionStepDisplayEffect|Destiny-DestinyProgressionStepDisplayEffect]]:Enum
            "displayEffectType": 0,
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
    ],
    // Type: boolean
    "visible": false,
    // Type: [[Destiny.Definitions.DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]]:integer:uint32:nullable
    "factionHash": 0,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyProgressionDefinition.html#schema_Destiny-Definitions-DestinyProgressionDefinition
