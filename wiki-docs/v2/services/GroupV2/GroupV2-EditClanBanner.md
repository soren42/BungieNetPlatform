<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.

* **URI:** [[/GroupV2/{groupId}/EditClanBanner/|https://www.bungie.net/Platform/GroupV2/{groupId}/EditClanBanner/]]
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
POST https://www.bungie.net/Platform/GroupV2/{groupId}/EditClanBanner/
```javascript
{
    // Type: integer:uint32
    "decalId": 0,
    // Type: integer:uint32
    "decalColorId": 0,
    // Type: integer:uint32
    "decalBackgroundColorId": 0,
    // Type: integer:uint32
    "gonfalonId": 0,
    // Type: integer:uint32
    "gonfalonColorId": 0,
    // Type: integer:uint32
    "gonfalonDetailId": 0,
    // Type: integer:uint32
    "gonfalonDetailColorId": 0,
    // Type: [[ClanBanner|GroupsV2-ClanBanner]]
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
1. https://bungie-net.github.io/multi/operation_post_GroupV2-EditClanBanner.html#operation_post_GroupV2-EditClanBanner
