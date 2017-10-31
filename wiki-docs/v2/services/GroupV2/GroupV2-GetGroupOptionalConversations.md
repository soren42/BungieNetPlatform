<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets a list of available optional conversation channels and their settings.

* **URI:** [[/GroupV2/{groupId}/OptionalConversations/|https://www.bungie.net/Platform/GroupV2/{groupId}/OptionalConversations/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
groupId | integer:int64 | Yes | Requested group's id.

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/GroupV2/{groupId}/OptionalConversations/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[GroupOptionalConversation|GroupsV2-GroupOptionalConversation]][]
    "Response": [
       // Type: [[GroupOptionalConversation|GroupsV2-GroupOptionalConversation]]
        {
            // Type: integer:int64
            "groupId": 0,
            // Type: integer:int64
            "conversationId": 0,
            // Type: boolean
            "chatEnabled": false,
            // Type: string
            "chatName": "",
            // Type: [[ChatSecuritySetting|GroupsV2-ChatSecuritySetting]]:Enum
            "chatSecurity": 0
        }
    ],
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
1. https://bungie-net.github.io/multi/operation_get_GroupV2-GetGroupOptionalConversations.html#operation_get_GroupV2-GetGroupOptionalConversations
