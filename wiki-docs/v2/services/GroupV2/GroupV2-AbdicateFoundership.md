<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.

* **URI:** [[/GroupV2/{groupId}/Admin/AbdicateFoundership/{membershipType}/{founderIdNew}/|https://www.bungie.net/Platform/GroupV2/{groupId}/Admin/AbdicateFoundership/{membershipType}/{founderIdNew}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
founderIdNew | integer:int64 | Yes | The new founder for this group. Must already be a group admin.
groupId | integer:int64 | Yes | The target group id.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | Membership type of the provided founderIdNew.

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/GroupV2/{groupId}/Admin/AbdicateFoundership/{membershipType}/{founderIdNew}/

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
1. https://bungie-net.github.io/multi/operation_post_GroupV2-AbdicateFoundership.html#operation_post_GroupV2-AbdicateFoundership
