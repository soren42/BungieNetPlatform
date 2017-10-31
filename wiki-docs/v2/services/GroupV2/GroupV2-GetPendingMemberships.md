<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.

* **URI:** [[/GroupV2/{groupId}/Members/Pending/|https://www.bungie.net/Platform/GroupV2/{groupId}/Members/Pending/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** AdminGroups
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
currentpage | integer:int32 | Yes | Page number (starting with 1). Each page has a fixed size of 50 items per page.
groupId | integer:int64 | Yes | ID of the group.

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/GroupV2/{groupId}/Members/Pending/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[SearchResultOfGroupMemberApplication|SearchResultOfGroupMemberApplication]]
    "Response": {
        // Type: [[GroupMemberApplication|GroupsV2-GroupMemberApplication]][]
        "results": [
           // Type: [[GroupMemberApplication|GroupsV2-GroupMemberApplication]]
            {
                // Type: integer:int64
                "groupId": 0,
                // Type: string:date-time
                "creationDate": "",
                // Type: [[GroupApplicationResolveState|GroupsV2-GroupApplicationResolveState]]:Enum
                "resolveState": 0,
                // Type: string:date-time:nullable
                "resolveDate": "",
                // Type: integer:int64:nullable
                "resolvedByMembershipId": 0,
                // Type: string
                "requestMessage": "",
                // Type: string
                "resolveMessage": "",
                // Type: [[UserInfoCard|User-UserInfoCard]]
                "destinyUserInfo": {
                    // Type: string
                    "supplementalDisplayName": "",
                    // Type: string
                    "iconPath": "",
                    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                    "membershipType": {},
                    // Type: integer:int64
                    "membershipId": 0,
                    // Type: string
                    "displayName": ""
                },
                // Type: [[UserInfoCard|User-UserInfoCard]]
                "bungieNetUserInfo": {
                    // Type: string
                    "supplementalDisplayName": "",
                    // Type: string
                    "iconPath": "",
                    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                    "membershipType": {},
                    // Type: integer:int64
                    "membershipId": 0,
                    // Type: string
                    "displayName": ""
                }
            }
        ],
        // Type: integer:int32
        "totalResults": 0,
        // Type: boolean
        "hasMore": false,
        // Type: [[PagedQuery|Queries-PagedQuery]]
        "query": {
            // Type: integer:int32
            "itemsPerPage": 0,
            // Type: integer:int32
            "currentPage": 0,
            // Type: string
            "requestContinuationToken": ""
        },
        // Type: string
        "replacementContinuationToken": "",
        // Type: boolean
        "useTotalResults": false
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
1. https://bungie-net.github.io/multi/operation_get_GroupV2-GetPendingMemberships.html#operation_get_GroupV2-GetPendingMemberships
