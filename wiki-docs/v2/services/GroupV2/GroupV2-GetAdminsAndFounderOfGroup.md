<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Get the list of members in a given group who are of admin level or higher.

* **URI:** [[/GroupV2/{groupId}/AdminsAndFounder/|https://www.bungie.net/Platform/GroupV2/{groupId}/AdminsAndFounder/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
currentpage | integer:int32 | Yes | Page number (starting with 1). Each page has a fixed size of 50 items per page.
groupId | integer:int64 | Yes | The ID of the group.

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/GroupV2/{groupId}/AdminsAndFounder/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[SearchResultOfGroupMember|SearchResultOfGroupMember]]
    "Response": {
        // Type: [[GroupMember|GroupsV2-GroupMember]][]
        "results": [
           // Type: [[GroupMember|GroupsV2-GroupMember]]
            {
                // Type: [[RuntimeGroupMemberType|GroupsV2-RuntimeGroupMemberType]]:Enum
                "memberType": 0,
                // Type: boolean
                "isOnline": false,
                // Type: integer:int64
                "groupId": 0,
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
                },
                // Type: string:date-time
                "joinDate": ""
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
1. https://bungie-net.github.io/multi/operation_get_GroupV2-GetAdminsAndFounderOfGroup.html#operation_get_GroupV2-GetAdminsAndFounderOfGroup
