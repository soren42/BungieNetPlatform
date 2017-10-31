<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.

* **URI:** [[/GroupV2/{groupId}/EditFounderOptions/|https://www.bungie.net/Platform/GroupV2/{groupId}/EditFounderOptions/]]
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
POST https://www.bungie.net/Platform/GroupV2/{groupId}/EditFounderOptions/
```javascript
{
    // Type: boolean:nullable
    "InvitePermissionOverride": false,
    // Type: boolean:nullable
    "UpdateCulturePermissionOverride": false,
    // Type: integer:int32:nullable
    "HostGuidedGamePermissionOverride": 0,
    // Type: boolean:nullable
    "UpdateBannerPermissionOverride": false,
    // Type: integer:int32:nullable
    "JoinLevel": 0,
    // Type: [[GroupOptionsEditAction|GroupsV2-GroupOptionsEditAction]]
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
1. https://bungie-net.github.io/multi/operation_post_GroupV2-EditFounderOptions.html#operation_post_GroupV2-EditFounderOptions
