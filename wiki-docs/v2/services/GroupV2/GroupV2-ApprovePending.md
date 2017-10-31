<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Approve the given membershipId to join the group/clan as long as they have applied.

* **URI:** [[/GroupV2/{groupId}/Members/Approve/{membershipType}/{membershipId}/|https://www.bungie.net/Platform/GroupV2/{groupId}/Members/Approve/{membershipType}/{membershipId}/]]
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
membershipId | integer:int64 | Yes | The membership id being approved.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | Membership type of the supplied membership ID.

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/GroupV2/{groupId}/Members/Approve/{membershipType}/{membershipId}/
```javascript
{
    // Type: string
    "message": "",
    // Type: [[GroupApplicationRequest|GroupsV2-GroupApplicationRequest]]
    // Type: [[GroupApplicationRequest|GroupsV2-GroupApplicationRequest]]
    // Type: [[GroupApplicationRequest|GroupsV2-GroupApplicationRequest]]
    // Type: [[GroupApplicationRequest|GroupsV2-GroupApplicationRequest]]
}

```

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
1. https://bungie-net.github.io/multi/operation_post_GroupV2-ApprovePending.html#operation_post_GroupV2-ApprovePending
