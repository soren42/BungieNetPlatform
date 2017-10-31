<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Sets the state of the user's clan invite preferences - true if they wish to be invited to clans, false otherwise.

* **URI:** [[/GroupV2/SetUserClanInviteSetting/{mType}/{allowInvites}/|https://www.bungie.net/Platform/GroupV2/SetUserClanInviteSetting/{mType}/{allowInvites}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** EditUserData
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
allowInvites | boolean | Yes | True to allow invites of this user to clans, false otherwise.
mType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | The Destiny membership type of linked account we are manipulating.

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/GroupV2/SetUserClanInviteSetting/{mType}/{allowInvites}/

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
1. https://bungie-net.github.io/multi/operation_post_GroupV2-SetUserClanInviteSetting.html#operation_post_GroupV2-SetUserClanInviteSetting
