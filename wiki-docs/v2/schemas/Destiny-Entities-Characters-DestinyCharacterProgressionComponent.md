<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This component returns anything that could be considered &quot;Progression&quot; on a user: data where the user is gaining levels, reputation, completions, rewards, etc...

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** CharacterProgressions

## Properties
Name | Type | Description
---- | ---- | -----------
progressions | Dictionary&lt;[[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:integer:uint32,[[DestinyProgression|Destiny-DestinyProgression]]&gt; | A Dictionary of all known progressions for the Character, keyed by the Progression's hash. Not all progressions have user-facing data, but those who do will have that data contained in the DestinyProgressionDefinition.
factions | Dictionary&lt;[[Destiny.Definitions.DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]]:integer:uint32,[[DestinyFactionProgression|Destiny-Progression-DestinyFactionProgression]]&gt; | A dictionary of all known Factions, keyed by the Faction's hash. It contains data about this character's status with the faction.
milestones | Dictionary&lt;[[Destiny.Definitions.Milestones.DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:integer:uint32,[[DestinyMilestone|Destiny-Milestones-DestinyMilestone]]&gt; | Milestones are related to the simple progressions shown in the game, but return additional and hopefully helpful information for users about the specifics of the Milestone's status.
quests | [[DestinyQuestStatus|Destiny-Quests-DestinyQuestStatus]][] | If the user has any active quests, the quests' statuses will be returned here. Note that quests have been largely supplanted by Milestones, but that doesn't mean that they won't make a comeback independent of milestones at some point.
uninstancedItemObjectives | Dictionary&lt;[[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32,[[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]][]&gt; | Sometimes, you have items in your inventory that don't have instances, but still have Objective information. This provides you that objective information for uninstanced items. This dictionary is keyed by the item's hash: which you can use to look up the name and description for the overall task(s) implied by the objective. The value is the list of objectives for this item, and their statuses.

## Example
```javascript
{
    // Type: Dictionary&lt;[[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:integer:uint32,[[DestinyProgression|Destiny-DestinyProgression]]&gt;
    "progressions": {
        "0": {
            // Type: [[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:integer:uint32
            "progressionHash": 0,
            // Type: integer:int32
            "dailyProgress": 0,
            // Type: integer:int32
            "dailyLimit": 0,
            // Type: integer:int32
            "weeklyProgress": 0,
            // Type: integer:int32
            "weeklyLimit": 0,
            // Type: integer:int32
            "currentProgress": 0,
            // Type: integer:int32
            "level": 0,
            // Type: integer:int32
            "levelCap": 0,
            // Type: integer:int32
            "stepIndex": 0,
            // Type: integer:int32
            "progressToNextLevel": 0,
            // Type: integer:int32
            "nextLevelAt": 0
        }
    },
    // Type: Dictionary&lt;[[Destiny.Definitions.DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]]:integer:uint32,[[DestinyFactionProgression|Destiny-Progression-DestinyFactionProgression]]&gt;
    "factions": {
        "0": {
            // Type: [[Destiny.Definitions.DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]]:integer:uint32
            "factionHash": 0,
            // Type: [[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:integer:uint32
            "progressionHash": 0,
            // Type: integer:int32
            "dailyProgress": 0,
            // Type: integer:int32
            "dailyLimit": 0,
            // Type: integer:int32
            "weeklyProgress": 0,
            // Type: integer:int32
            "weeklyLimit": 0,
            // Type: integer:int32
            "currentProgress": 0,
            // Type: integer:int32
            "level": 0,
            // Type: integer:int32
            "levelCap": 0,
            // Type: integer:int32
            "stepIndex": 0,
            // Type: integer:int32
            "progressToNextLevel": 0,
            // Type: integer:int32
            "nextLevelAt": 0
        }
    },
    // Type: Dictionary&lt;[[Destiny.Definitions.Milestones.DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:integer:uint32,[[DestinyMilestone|Destiny-Milestones-DestinyMilestone]]&gt;
    "milestones": {
        "0": {
            // Type: [[Destiny.Definitions.Milestones.DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:integer:uint32
            "milestoneHash": 0,
            // Type: [[DestinyMilestoneQuest|Destiny-Milestones-DestinyMilestoneQuest]][]
            "availableQuests": [
               // Type: [[DestinyMilestoneQuest|Destiny-Milestones-DestinyMilestoneQuest]]
                {
                    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                    "questItemHash": 0,
                    // Type: [[DestinyQuestStatus|Destiny-Quests-DestinyQuestStatus]]
                    "status": {},
                    // Type: [[DestinyMilestoneActivity|Destiny-Milestones-DestinyMilestoneActivity]]
                    "activity": {},
                    // Type: [[DestinyChallengeStatus|Destiny-Challenges-DestinyChallengeStatus]][]
                    "challenges": [
                       // Type: [[DestinyChallengeStatus|Destiny-Challenges-DestinyChallengeStatus]]
                        {
                            // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]]
                            "objective": {}
                        }
                    ]
                }
            ],
            // Type: Dictionary&lt;string,number:float&gt;
            "values": {
                "{string}": 0
            },
            // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32[]
            "vendorHashes": [
               // Type: integer:uint32
                0
            ],
            // Type: [[DestinyMilestoneVendor|Destiny-Milestones-DestinyMilestoneVendor]][]
            "vendors": [
               // Type: [[DestinyMilestoneVendor|Destiny-Milestones-DestinyMilestoneVendor]]
                {
                    // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32
                    "vendorHash": 0,
                    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32:nullable
                    "previewItemHash": 0
                }
            ],
            // Type: [[DestinyMilestoneRewardCategory|Destiny-Milestones-DestinyMilestoneRewardCategory]][]
            "rewards": [
               // Type: [[DestinyMilestoneRewardCategory|Destiny-Milestones-DestinyMilestoneRewardCategory]]
                {
                    // Type: integer:uint32
                    "rewardCategoryHash": 0,
                    // Type: [[DestinyMilestoneRewardEntry|Destiny-Milestones-DestinyMilestoneRewardEntry]][]
                    "entries": [
                       // Type: [[DestinyMilestoneRewardEntry|Destiny-Milestones-DestinyMilestoneRewardEntry]]
                        {
                            // Type: integer:uint32
                            "rewardEntryHash": 0,
                            // Type: boolean
                            "earned": false,
                            // Type: boolean
                            "redeemed": false
                        }
                    ]
                }
            ],
            // Type: string:date-time:nullable
            "startDate": "",
            // Type: string:date-time:nullable
            "endDate": ""
        }
    },
    // Type: [[DestinyQuestStatus|Destiny-Quests-DestinyQuestStatus]][]
    "quests": [
       // Type: [[DestinyQuestStatus|Destiny-Quests-DestinyQuestStatus]]
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
    ],
    // Type: Dictionary&lt;[[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32,[[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]][]&gt;
    "uninstancedItemObjectives": {
        "0": [
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
        ]
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Characters-DestinyCharacterProgressionComponent.html#schema_Destiny-Entities-Characters-DestinyCharacterProgressionComponent
