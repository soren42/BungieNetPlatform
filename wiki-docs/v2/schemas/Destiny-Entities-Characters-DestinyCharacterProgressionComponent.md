<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This component returns anything that could be considered &quot;Progression&quot; on a user: datawhere the user is gaining levels, reputation, completions, rewards, etc...

## Schema
* **Type:** Class
* **Component Type Dependency:** CharacterProgressions

## Properties
Name | Type | Description
---- | ---- | -----------
progressions | Dictionary&lt;[[DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:ManifestDefinition:integer:uint32,[[DestinyProgression|Destiny-DestinyProgression]]&gt; | A Dictionary of all known progressions for the Character, keyed by the Progression's hash. Not all progressions have user-facing data, but those who do will have that data contained in the DestinyProgressionDefinition.
factions | Dictionary&lt;[[DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]]:ManifestDefinition:integer:uint32,[[DestinyFactionProgression|Destiny-Progression-DestinyFactionProgression]]&gt; | A dictionary of all known Factions, keyed by the Faction's hash.  It contains data about this character'sstatus with the faction.
milestones | Dictionary&lt;[[DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:ManifestDefinition:integer:uint32,[[DestinyMilestone|Destiny-Milestones-DestinyMilestone]]&gt; | Milestones are related to the simple progressions shown in the game, but return additional andhopefully helpful information for users about the specifics of the Milestone's status.
quests | [[DestinyQuestStatus|Destiny-Quests-DestinyQuestStatus]][] | If the user has any active quests, the quests' statuses will be returned here. Note that quests have been largely supplanted by Milestones, but that doesn't mean thatthey won't make a comeback independent of milestones at some point.
uninstancedItemObjectives | Dictionary&lt;[[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32,[[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]][]&gt; | Sometimes, you have items in your inventory that don't have instances, but still haveObjective information.  This provides you that objective information for uninstanceditems. This dictionary is keyed by the item's hash: which you can use to look up thename and description for the overall task(s) implied by the objective.The value is the list of objectives for this item, and their statuses.

## Example
```javascript
{
    // Type: Dictionary&lt;[[DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:ManifestDefinition:integer:uint32,[[DestinyProgression|Destiny-DestinyProgression]]&gt;
    "progressions": {
        "0": {
            // Type: [[DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:ManifestDefinition:integer:uint32
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
    // Type: Dictionary&lt;[[DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]]:ManifestDefinition:integer:uint32,[[DestinyFactionProgression|Destiny-Progression-DestinyFactionProgression]]&gt;
    "factions": {
        "0": {
            // Type: [[DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]]:ManifestDefinition:integer:uint32
            "factionHash": 0,
            // Type: [[DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:ManifestDefinition:integer:uint32
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
    // Type: Dictionary&lt;[[DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:ManifestDefinition:integer:uint32,[[DestinyMilestone|Destiny-Milestones-DestinyMilestone]]&gt;
    "milestones": {
        "0": {
            // Type: [[DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:ManifestDefinition:integer:uint32
            "milestoneHash": 0,
            // Type: [[DestinyMilestoneQuest|Destiny-Milestones-DestinyMilestoneQuest]][]
            "availableQuests": [
               // Type: [[DestinyMilestoneQuest|Destiny-Milestones-DestinyMilestoneQuest]]
                {
                    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
                    "questItemHash": 0,
                    // Type: [[DestinyQuestStatus|Destiny-Quests-DestinyQuestStatus]]
                    "status": {
                        // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
                        "questHash": 0,
                        // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
                        "stepHash": 0,
                        // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]][]
                        "stepObjectives": [
                           // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]]
                            {
                                // Type: [[DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:ManifestDefinition:integer:uint32
                                "objectiveHash": 0,
                                // Type: [[DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:ManifestDefinition:integer:uint32:nullable
                                "destinationHash": 0,
                                // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32:nullable
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
                        // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
                        "activityHash": 0,
                        // Type: [[DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]]:ManifestDefinition:integer:uint32[]
                        "modifierHashes": [
                           // Type: integer:uint32
                            0
                        ],
                        // Type: [[DestinyMilestoneActivityVariant|Destiny-Milestones-DestinyMilestoneActivityVariant]][]
                        "variants": [
                           // Type: [[DestinyMilestoneActivityVariant|Destiny-Milestones-DestinyMilestoneActivityVariant]]
                            {
                                // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
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
                                // Type: [[DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:ManifestDefinition:integer:uint32
                                "objectiveHash": 0,
                                // Type: [[DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:ManifestDefinition:integer:uint32:nullable
                                "destinationHash": 0,
                                // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32:nullable
                                "activityHash": 0,
                                // Type: integer:int32:nullable
                                "progress": 0,
                                // Type: boolean
                                "complete": false
                            }
                        }
                    ]
                }
            ],
            // Type: Dictionary&lt;string,number:float&gt;
            "values": {
                "{string}": 0
            },
            // Type: [[DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:ManifestDefinition:integer:uint32[]
            "vendorHashes": [
               // Type: integer:uint32
                0
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
            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
            "questHash": 0,
            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
            "stepHash": 0,
            // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]][]
            "stepObjectives": [
               // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]]
                {
                    // Type: [[DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:ManifestDefinition:integer:uint32
                    "objectiveHash": 0,
                    // Type: [[DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:ManifestDefinition:integer:uint32:nullable
                    "destinationHash": 0,
                    // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32:nullable
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
    // Type: Dictionary&lt;[[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32,[[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]][]&gt;
    "uninstancedItemObjectives": {
        "0": [
           // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]]
            {
                // Type: [[DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:ManifestDefinition:integer:uint32
                "objectiveHash": 0,
                // Type: [[DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:ManifestDefinition:integer:uint32:nullable
                "destinationHash": 0,
                // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32:nullable
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
