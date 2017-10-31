<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.

* **URI:** [[/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/SetMembershipType/{memberType}/|https://www.bungie.net/Platform/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/SetMembershipType/{memberType}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** AdminGroups
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
groupId | integer:int64 | Yes | ID of the group to which the member belongs.
membershipId | integer:int64 | Yes | Membership ID to modify.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | Membership type of the provide membership ID.
memberType | [[RuntimeGroupMemberType|GroupsV2-RuntimeGroupMemberType]]:Enum | Yes | New membertype for the specified member.

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/SetMembershipType/{memberType}/

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
1. https://bungie-net.github.io/multi/operation_post_GroupV2-EditGroupMembership.html#operation_post_GroupV2-EditGroupMembership
