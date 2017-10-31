<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Bans the requested member from the requested group for the specified period of time.

* **URI:** [[/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Ban/|https://www.bungie.net/Platform/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Ban/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** AdminGroups
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
groupId | integer:int64 | Yes | Group ID that has the member to ban.
membershipId | integer:int64 | Yes | Membership ID of the member to ban from the group.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | Membership type of the provided membership ID.

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Ban/
```javascript
{
    // Type: string
    "comment": "",
    // Type: [[IgnoreLength|Ignores-IgnoreLength]]:Enum
    "length": 0,
    // Type: [[GroupBanRequest|GroupsV2-GroupBanRequest]]
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
1. https://bungie-net.github.io/multi/operation_post_GroupV2-BanMember.html#operation_post_GroupV2-BanMember
