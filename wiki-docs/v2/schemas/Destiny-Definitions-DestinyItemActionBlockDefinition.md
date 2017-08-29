<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If an item can have an action performed on it (like &quot;Dismantle&quot;), it will be defined hereif you care.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
verbName | string | Localized text for the verb of the action being performed.
verbDescription | string | Localized text describing the action being performed.
isPositive | boolean | The content has this property, however it's not entirely clear how it is used.
overlayScreenName | string | If the action has an overlay screen associated with it, this is the name of that screen.Unfortunately, we cannot return the screen's data itself.
overlayIcon | string | The icon associated with the overlay screen for the action, if any.
requiredCooldownSeconds | integer:int32 | The number of seconds to delay before allowing this action to be performed again.
requiredItems | [[DestinyItemActionRequiredItemDefinition|Destiny-Definitions-DestinyItemActionRequiredItemDefinition]]:Definition[] | If the action requires other items to exist or be destroyed, this isthe list of those items and requirements.
progressionRewards | [[DestinyProgressionRewardDefinition|Destiny-Definitions-DestinyProgressionRewardDefinition]]:Definition[] | If performing this action earns you Progression, this is the list of progressions and values grantedfor those progressions by performing this action.
actionTypeLabel | string | The internal identifier for the action.
requiredLocation | string | Theoretically, an item could have a localized string for a hint about the location in whichthe action should be performed.  In practice, no items yet have this property.
requiredCooldownHash | integer:uint32 | The identifier hash for the Cooldown associated with this action.  We have not pulled this data yetfor you to have more data to use for cooldowns.
deleteOnAction | boolean | If true, the item is deleted when the action completes.
consumeEntireStack | boolean | If true, the entire stack is deleted when the action completes.
useOnAcquire | boolean | If true, this action will be performed as soon as you earn this item.Some rewards work this way, providing you a single item to pick up froma reward-granting vendor in-game and then immediately consuming itselfto provide you multiple items.

## Example
```javascript
{
    // Type: string
    "verbName": "",
    // Type: string
    "verbDescription": "",
    // Type: boolean
    "isPositive": false,
    // Type: string
    "overlayScreenName": "",
    // Type: string
    "overlayIcon": "",
    // Type: integer:int32
    "requiredCooldownSeconds": 0,
    // Type: [[DestinyItemActionRequiredItemDefinition|Destiny-Definitions-DestinyItemActionRequiredItemDefinition]]:Definition[]
    "requiredItems": [
       // Type: [[DestinyItemActionRequiredItemDefinition|Destiny-Definitions-DestinyItemActionRequiredItemDefinition]]:Definition
        {
            // Type: integer:int32
            "count": 0,
            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
            "itemHash": 0,
            // Type: boolean
            "deleteOnAction": false
        }
    ],
    // Type: [[DestinyProgressionRewardDefinition|Destiny-Definitions-DestinyProgressionRewardDefinition]]:Definition[]
    "progressionRewards": [
       // Type: [[DestinyProgressionRewardDefinition|Destiny-Definitions-DestinyProgressionRewardDefinition]]:Definition
        {
            // Type: [[DestinyProgressionMappingDefinition|Destiny-Definitions-DestinyProgressionMappingDefinition]]:Definition:integer:uint32
            "progressionMappingHash": 0,
            // Type: integer:int32
            "amount": 0,
            // Type: boolean
            "applyThrottles": false
        }
    ],
    // Type: string
    "actionTypeLabel": "",
    // Type: string
    "requiredLocation": "",
    // Type: integer:uint32
    "requiredCooldownHash": 0,
    // Type: boolean
    "deleteOnAction": false,
    // Type: boolean
    "consumeEntireStack": false,
    // Type: boolean
    "useOnAcquire": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemActionBlockDefinition.html#schema_Destiny-Definitions-DestinyItemActionBlockDefinition
