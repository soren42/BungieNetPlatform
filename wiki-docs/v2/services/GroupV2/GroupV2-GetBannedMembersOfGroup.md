<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.

* **URI:** [[/GroupV2/{groupId}/Banned/|https://www.bungie.net/Platform/GroupV2/{groupId}/Banned/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** AdminGroups
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
currentpage | integer:int32 | Yes | Page number (starting with 1). Each page has a fixed size of 50 entries.
groupId | integer:int64 | Yes | Group ID whose banned members you are fetching

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/GroupV2/{groupId}/Banned/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[SearchResultOfGroupBan|SearchResultOfGroupBan]]
    "Response": {
        // Type: [[GroupBan|GroupsV2-GroupBan]][]
        "results": [
           // Type: [[GroupBan|GroupsV2-GroupBan]]
            {
                // Type: integer:int64
                "groupId": 0,
                // Type: [[UserInfoCard|User-UserInfoCard]]
                "lastModifiedBy": {
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
                "createdBy": {
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
                // Type: string:date-time
                "dateBanned": "",
                // Type: string:date-time
                "dateExpires": "",
                // Type: string
                "comment": "",
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
                },
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
1. https://bungie-net.github.io/multi/operation_get_GroupV2-GetBannedMembersOfGroup.html#operation_get_GroupV2-GetBannedMembersOfGroup
