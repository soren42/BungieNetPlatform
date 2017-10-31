<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.

* **URI:** [[/Destiny2/Clan/{groupId}/WeeklyRewardState/|https://www.bungie.net/Platform/Destiny2/Clan/{groupId}/WeeklyRewardState/]]
* **Basepath:** https://www.bungie.net/Platform
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
GET https://www.bungie.net/Platform/Destiny2/Clan/{groupId}/WeeklyRewardState/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyMilestone|Destiny-Milestones-DestinyMilestone]]
    "Response": {
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
