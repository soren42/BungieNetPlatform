<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If a Milestone has one or more Quests, this will contain the live information for the character's status withone of those quests.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
questItemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | Quests are defined as Items in content.  As such, this is the hash identifier of the DestinyInventoryItemDefinition that represents this quest.  It will have pointers to all of the stepsin the quest, and display information for the quest (title, description, icon etc)Individual steps will be referred to in the Quest item's DestinyInventoryItemDefinition.setDataproperty, and themselves are Items with their own renderable data.
status | [[DestinyQuestStatus|Destiny-Quests-DestinyQuestStatus]] | The current status of the quest for the character making the request.
activity | [[DestinyMilestoneActivity|Destiny-Milestones-DestinyMilestoneActivity]] | *IF* the Milestone has an active Activity that can give you greater detailsabout what you need to do, it will be returned here.Remember to associate this with the DestinyMilestoneDefinition's activitiesto get details about the activity, including what specific quest it is related to if youhave multiple quests to choose from.
challenges | [[DestinyChallengeStatus|Destiny-Challenges-DestinyChallengeStatus]][] | The activities referred to by this quest can have many associated challenges.They are all contained here, with activityHashes so that you can associate them withthe specific activity variants in which they can be found.In retrospect, I probably should have put these under the specific Activity Variants,but it's too late to change it now.Theoretically, a quest without Activities can still have Challenges, which is whythis is on a higher level than activity/variants, but it probably should have beenin both places.  That may come as a later revision.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "questItemHash": 0,
    // Type: [[DestinyQuestStatus|Destiny-Quests-DestinyQuestStatus]]
    "status": {
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
    },
    // Type: [[DestinyMilestoneActivity|Destiny-Milestones-DestinyMilestoneActivity]]
    "activity": {
        // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
        "activityHash": 0,
        // Type: [[Destiny.Definitions.ActivityModifiers.DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]]:integer:uint32[]
        "modifierHashes": [
           // Type: integer:uint32
            0
        ],
        // Type: [[DestinyMilestoneActivityVariant|Destiny-Milestones-DestinyMilestoneActivityVariant]][]
        "variants": [
           // Type: [[DestinyMilestoneActivityVariant|Destiny-Milestones-DestinyMilestoneActivityVariant]]
            {
                // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
                "activityHash": 0,
                // Type: [[DestinyMilestoneActivityCompletionStatus|Destiny-Milestones-DestinyMilestoneActivityCompletionStatus]]
                "completionStatus": {
                    // Type: boolean
                    "completed": false,
                    // Type: [[DestinyMilestoneActivityPhase|Destiny-Milestones-DestinyMilestoneActivityPhase]][]
                    "phases": [
                       // Type: [[DestinyMilestoneActivityPhase|Destiny-Milestones-DestinyMilestoneActivityPhase]]
                        {
                            // Type: boolean
                            "complete": false
                        }
                    ]
                }
            }
        ]
    },
    // Type: [[DestinyChallengeStatus|Destiny-Challenges-DestinyChallengeStatus]][]
    "challenges": [
       // Type: [[DestinyChallengeStatus|Destiny-Challenges-DestinyChallengeStatus]]
        {
            // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]]
            "objective": {
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
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyMilestoneQuest.html#schema_Destiny-Milestones-DestinyMilestoneQuest
