<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Invite a user to join this group.

* **URI:** [[/GroupV2/{groupId}/Members/IndividualInvite/{membershipType}/{membershipId}/|https://www.bungie.net/Platform/GroupV2/{groupId}/Members/IndividualInvite/{membershipType}/{membershipId}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** AdminGroups
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
groupId | integer:int64 | Yes | ID of the group you would like to join.
membershipId | integer:int64 | Yes | Membership id of the account being invited.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | MembershipType of the account being invited.

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/GroupV2/{groupId}/Members/IndividualInvite/{membershipType}/{membershipId}/
```javascript
{
    // Type: string
    "message": "",
    // Type: [[GroupApplicationRequest|GroupsV2-GroupApplicationRequest]]
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
    // Type: [[GroupApplicationResponse|GroupsV2-GroupApplicationResponse]]
    "Response": {
        // Type: [[GroupApplicationResolveState|GroupsV2-GroupApplicationResolveState]]:Enum
        "resolution": 0
    },
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
1. https://bungie-net.github.io/multi/operation_post_GroupV2-IndividualGroupInvite.html#operation_post_GroupV2-IndividualGroupInvite
