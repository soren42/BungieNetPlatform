<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets public information about currently available Milestones.

* **URI:** [[/Destiny2/Milestones/|https://www.bungie.net/Platform/Destiny2/Milestones/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/Destiny2/Milestones/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: Dictionary&lt;integer:uint32,[[DestinyPublicMilestone|Destiny-Milestones-DestinyPublicMilestone]]&gt;
    "Response": {
        "0": {
            // Type: [[Destiny.Definitions.Milestones.DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:integer:uint32
            "milestoneHash": 0,
            // Type: [[DestinyPublicMilestoneQuest|Destiny-Milestones-DestinyPublicMilestoneQuest]][]
            "availableQuests": [
               // Type: [[DestinyPublicMilestoneQuest|Destiny-Milestones-DestinyPublicMilestoneQuest]]
                {
                    // Type: [[Destiny.Definitions.Milestones.DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:integer:uint32
                    "questItemHash": 0,
                    // Type: [[DestinyPublicMilestoneActivity|Destiny-Milestones-DestinyPublicMilestoneActivity]]
                    "activity": {},
                    // Type: [[DestinyPublicMilestoneChallenge|Destiny-Milestones-DestinyPublicMilestoneChallenge]][]
                    "challenges": [
                       // Type: [[DestinyPublicMilestoneChallenge|Destiny-Milestones-DestinyPublicMilestoneChallenge]]
                        {
                            // Type: [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32
                            "objectiveHash": 0,
                            // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32:nullable
                            "activityHash": 0
                        }
                    ]
                }
            ],
            // Type: integer:uint32[]
            "vendorHashes": [
               // Type: integer:uint32
                0
            ],
            // Type: [[DestinyPublicMilestoneVendor|Destiny-Milestones-DestinyPublicMilestoneVendor]][]
            "vendors": [
               // Type: [[DestinyPublicMilestoneVendor|Destiny-Milestones-DestinyPublicMilestoneVendor]]
                {
                    // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32
                    "vendorHash": 0,
                    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32:nullable
                    "previewItemHash": 0
                }
            ],
            // Type: string:date-time:nullable
            "startDate": "",
            // Type: string:date-time:nullable
            "endDate": ""
        }
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetPublicMilestones.html#operation_get_Destiny2-GetPublicMilestones
