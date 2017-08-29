<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.

* **URI:** [[/Destiny2/Clan/{groupId}/WeeklyRewardState/|https://bungie.net/Platform/Destiny2/Clan/{groupId}/WeeklyRewardState/]]
* **Basepath:** https://bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
groupId | integer:int64 | Yes | A valid group id of clan.

### Query String Parameters
None

## Example
### Request
GET https://bungie.net/Platform/Destiny2/Clan/{groupId}/WeeklyRewardState/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyMilestone|Destiny-Milestones-DestinyMilestone]]
    "Response": {
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
    },
    // Type: [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum
    "ErrorCode": 0,
    // Type: integer:int32
    "ThrottleSeconds": 0,
    // Type: string
    "ErrorStatus": "",
    // Type: string
    "Message": "",
    // Type: Dictionary&lt;string,string&gt;
    "MessageData": {
        "{string}": ""
    },
    // Type: object
}

```

## References
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetClanWeeklyRewardState.html#operation_get_Destiny2-GetClanWeeklyRewardState
