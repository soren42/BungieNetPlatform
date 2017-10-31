<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Deny all of the pending users for the given group that match the passed-in .

* **URI:** [[/GroupV2/{groupId}/Members/DenyList/|https://www.bungie.net/Platform/GroupV2/{groupId}/Members/DenyList/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** AdminGroups
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
groupId | integer:int64 | Yes | ID of the group.

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/GroupV2/{groupId}/Members/DenyList/
```javascript
{
    // Type: [[UserMembership|User-UserMembership]][]
    "memberships": [
       // Type: [[UserMembership|User-UserMembership]]
        {
            // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
            "membershipType": {},
            // Type: integer:int64
            "membershipId": 0,
            // Type: string
            "displayName": ""
        }
    ],
    // Type: string
    "message": "",
    // Type: [[GroupApplicationListRequest|GroupsV2-GroupApplicationListRequest]]
    // Type: [[GroupApplicationListRequest|GroupsV2-GroupApplicationListRequest]]
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[EntityActionResult|Entities-EntityActionResult]][]
    "Response": [
       // Type: [[EntityActionResult|Entities-EntityActionResult]]
        {
            // Type: integer:int64
            "entityId": 0,
            // Type: [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum
            "result": 0
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
1. https://bungie-net.github.io/multi/operation_post_GroupV2-DenyPendingForList.html#operation_post_GroupV2-DenyPendingForList
