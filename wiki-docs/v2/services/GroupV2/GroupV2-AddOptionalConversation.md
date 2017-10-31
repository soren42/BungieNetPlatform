<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Add a new optional conversation/chat channel. Requires admin permissions to the group.

* **URI:** [[/GroupV2/{groupId}/OptionalConversations/Add/|https://www.bungie.net/Platform/GroupV2/{groupId}/OptionalConversations/Add/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** AdminGroups
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
groupId | integer:int64 | Yes | Group ID of the group to edit.

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/GroupV2/{groupId}/OptionalConversations/Add/
```javascript
{
    // Type: string
    "chatName": "",
    // Type: [[ChatSecuritySetting|GroupsV2-ChatSecuritySetting]]:Enum
    "chatSecurity": 0,
    // Type: [[GroupOptionalConversationAddRequest|GroupsV2-GroupOptionalConversationAddRequest]]
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: integer:int64
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
1. https://bungie-net.github.io/multi/operation_post_GroupV2-AddOptionalConversation.html#operation_post_GroupV2-AddOptionalConversation
