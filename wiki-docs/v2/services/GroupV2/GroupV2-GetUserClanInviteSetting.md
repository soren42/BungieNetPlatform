<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.

* **URI:** [[/GroupV2/GetUserClanInviteSetting/{mType}/|https://www.bungie.net/Platform/GroupV2/GetUserClanInviteSetting/{mType}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** ReadUserData
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
mType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | The Destiny membership type of the account we wish to access settings.

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/GroupV2/GetUserClanInviteSetting/{mType}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: boolean
    "Response": false,
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
1. https://bungie-net.github.io/multi/operation_get_GroupV2-GetUserClanInviteSetting.html#operation_get_GroupV2-GetUserClanInviteSetting
