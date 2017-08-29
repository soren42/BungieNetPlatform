<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets custom localized content for the milestone of the given hash, if it exists.

* **URI:** [[/Destiny2/Milestones/{milestoneHash}/Content/|https://bungie.net/Platform/Destiny2/Milestones/{milestoneHash}/Content/]]
* **Basepath:** https://bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
milestoneHash | integer:uint32 | Yes | The identifier for the milestone to be returned.

### Query String Parameters
None

## Example
### Request
GET https://bungie.net/Platform/Destiny2/Milestones/{milestoneHash}/Content/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyMilestoneContent|Destiny-Milestones-DestinyMilestoneContent]]
    "Response": {
        // Type: string
        "about": "",
        // Type: string
        "status": "",
        // Type: string[]
        "tips": [
           // Type: string
            ""
        ],
        // Type: [[DestinyMilestoneContentItemCategory|Destiny-Milestones-DestinyMilestoneContentItemCategory]][]
        "itemCategories": [
           // Type: [[DestinyMilestoneContentItemCategory|Destiny-Milestones-DestinyMilestoneContentItemCategory]]
            {
                // Type: string
                "title": "",
                // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32[]
                "itemHashes": [
                   // Type: integer:uint32
                    0
                ]
            }
        ]
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetPublicMilestoneContent.html#operation_get_Destiny2-GetPublicMilestoneContent
