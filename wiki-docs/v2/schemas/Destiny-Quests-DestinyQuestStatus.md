<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Data regarding the progress of a Quest for a specific character.Quests are composed of multiple steps, each with potentially multiple objectives:this QuestStatus will return Objective data for the *currently active* step in this quest.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
questHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | The hash identifier for the Quest Item.  (Note: Quests are defined as Items, and thus you woulduse this to look up the quest's DestinyInventoryItemDefinition).For information on all steps in the quest, you can then examine its DestinyInventoryItemDefinition.setDataproperty for Quest Steps (which are *also* items).You can use the Item Definition to display human readable data about the overall quest.
stepHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | The hash identifier of the current Quest Step, which is also a DestinyInventoryItemDefinition.  You can usethis to get human readable data about the current step and what to do in that step.
stepObjectives | [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]][] | A step can have multiple objectives.  This will give you the progress for each objective in the current step,in the order in which they are rendered in-game.
tracked | boolean | Whether or not the quest is tracked
itemInstanceId | integer:int64 | The current Quest Step will be an instanced item in the player's inventory.  If you care about that,this is the instance ID of that item.
completed | boolean | Whether or not the whole quest has been completed, regardless of whether or notyou have redeemed the rewards for the quest.
redeemed | boolean | Whether or not you have redeemed rewards for this quest.
started | boolean | Whether or not you have started this quest.
vendorHash | integer:uint32:nullable | If the quest has a related Vendor that you should talk to in order to initiate the quest/earn rewards/continue the quest, this will be the hash identifier of that Vendor.  Look it up its DestinyVendorDefinition.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "questHash": 0,
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "stepHash": 0,
    // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]][]
    "stepObjectives": [
       // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]]
        {
            // Type: [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32
            "objectiveHash": 0,
            // Type: [[Destiny.Definitions.DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:integer:uint32:nullable
            "destinationHash": 0,
            // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32:nullable
            "activityHash": 0,
            // Type: integer:int32:nullable
            "progress": 0,
            // Type: boolean
            "complete": false
        }
    ],
    // Type: boolean
    "tracked": false,
    // Type: integer:int64
    "itemInstanceId": 0,
    // Type: boolean
    "completed": false,
    // Type: boolean
    "redeemed": false,
    // Type: boolean
    "started": false,
    // Type: integer:uint32:nullable
    "vendorHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Quests-DestinyQuestStatus.html#schema_Destiny-Quests-DestinyQuestStatus
