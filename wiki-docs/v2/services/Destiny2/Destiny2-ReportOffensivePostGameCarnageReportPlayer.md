<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.

* **URI:** [[/Destiny2/Stats/PostGameCarnageReport/{activityId}/Report/|https://www.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/{activityId}/Report/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** BnetWrite
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
activityId | integer:int64 | Yes | The ID of the activity where you ran into the brigand that you're reporting.

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/{activityId}/Report/
```javascript
{
    // Type: [[Destiny.Definitions.Reporting.DestinyReportReasonCategoryDefinition|Destiny-Definitions-Reporting-DestinyReportReasonCategoryDefinition]]:integer:uint32[]
    "reasonCategoryHashes": [
       // Type: integer:uint32
        0
    ],
    // Type: integer:uint32[]
    "reasonHashes": [
       // Type: integer:uint32
        0
    ],
    // Type: integer:int64
    "offendingCharacterId": 0,
    // Type: [[Destiny.Reporting.Requests.DestinyReportOffensePgcrRequest|Destiny-Reporting-Requests-DestinyReportOffensePgcrRequest]]
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: integer:int32
    "Response": 0,
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
1. https://bungie-net.github.io/multi/operation_post_Destiny2-ReportOffensivePostGameCarnageReportPlayer.html#operation_post_Destiny2-ReportOffensivePostGameCarnageReportPlayer
