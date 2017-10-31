<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.

* **URI:** [[/GroupV2/{groupId}/Edit/|https://www.bungie.net/Platform/GroupV2/{groupId}/Edit/]]
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
POST https://www.bungie.net/Platform/GroupV2/{groupId}/Edit/
```javascript
{
    // Type: string
    "name": "",
    // Type: string
    "about": "",
    // Type: string
    "motto": "",
    // Type: string
    "theme": "",
    // Type: integer:int32:nullable
    "avatarImageIndex": 0,
    // Type: string
    "tags": "",
    // Type: boolean:nullable
    "isPublic": false,
    // Type: integer:int32:nullable
    "membershipOption": 0,
    // Type: boolean:nullable
    "isPublicTopicAdminOnly": false,
    // Type: boolean:nullable
    "allowChat": false,
    // Type: integer:int32:nullable
    "chatSecurity": 0,
    // Type: string
    "callsign": "",
    // Type: string
    "locale": "",
    // Type: integer:int32:nullable
    "homepage": 0,
    // Type: boolean:nullable
    "enableInvitationMessagingForAdmins": false,
    // Type: integer:int32:nullable
    "defaultPublicity": 0,
    // Type: [[GroupEditAction|GroupsV2-GroupEditAction]]
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
1. https://bungie-net.github.io/multi/operation_post_GroupV2-EditGroup.html#operation_post_GroupV2-EditGroup
