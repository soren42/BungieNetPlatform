<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Allows the owner of a fireteam thread to approve all joined members and start a private message conversation with them.

* **URI:** [[/Forum/Recruit/Approve/{topicId}/|https://www.bungie.net/Platform/Forum/Recruit/Approve/{topicId}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[Forum|Endpoints#Forum]]
* **Permissions:** WriteGroups, BnetWrite
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
topicId | integer:int64 | Yes | The post id of the recruitment topic to approve.

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/Forum/Recruit/Approve/{topicId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[SaveMessageResult|Messages-Responses-SaveMessageResult]]
    "Response": {
        // Type: integer:int64
        "conversationId": 0,
        // Type: integer:int64
        "messageId": 0
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
1. https://bungie-net.github.io/multi/operation_post_Forum-ApproveFireteamThread.html#operation_post_Forum-ApproveFireteamThread
