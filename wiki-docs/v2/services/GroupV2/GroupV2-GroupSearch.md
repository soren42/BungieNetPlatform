<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Search for Groups.

* **URI:** [[/GroupV2/Search/|https://www.bungie.net/Platform/GroupV2/Search/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/GroupV2/Search/
```javascript
{
    // Type: string
    "name": "",
    // Type: [[GroupType|GroupsV2-GroupType]]:Enum
    "groupType": 0,
    // Type: [[GroupDateRange|GroupsV2-GroupDateRange]]:Enum
    "creationDate": 0,
    // Type: [[GroupSortBy|GroupsV2-GroupSortBy]]:Enum
    "sortBy": 0,
    // Type: integer:int32:nullable
    "groupMemberCountFilter": 0,
    // Type: string
    "localeFilter": "",
    // Type: string
    "tagText": "",
    // Type: integer:int32
    "itemsPerPage": 0,
    // Type: integer:int32
    "currentPage": 0,
    // Type: string
    "requestContinuationToken": "",
    // Type: [[GroupQuery|GroupsV2-GroupQuery]]
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[GroupSearchResponse|GroupsV2-GroupSearchResponse]]
    "Response": {
        // Type: [[GroupV2Card|GroupsV2-GroupV2Card]][]
        "results": [
           // Type: [[GroupV2Card|GroupsV2-GroupV2Card]]
            {
                // Type: integer:int64
                "groupId": 0,
                // Type: string
                "name": "",
                // Type: [[GroupType|GroupsV2-GroupType]]:Enum
                "groupType": 0,
                // Type: string:date-time
                "creationDate": "",
                // Type: string
                "about": "",
                // Type: string
                "motto": "",
                // Type: integer:int32
                "memberCount": 0,
                // Type: string
                "locale": "",
                // Type: [[MembershipOption|GroupsV2-MembershipOption]]:Enum
                "membershipOption": 0,
                // Type: [[Capabilities|GroupsV2-Capabilities]]:Enum
                "capabilities": 0,
                // Type: [[GroupV2ClanInfo|GroupsV2-GroupV2ClanInfo]]
                "clanInfo": {
                    // Type: string
                    "clanCallsign": "",
                    // Type: [[ClanBanner|GroupsV2-ClanBanner]]
                    "clanBannerData": {
                        // Type: integer:uint32
                        "decalId": 0,
                        // Type: integer:uint32
                        "decalColorId": 0,
                        // Type: integer:uint32
                        "decalBackgroundColorId": 0,
                        // Type: integer:uint32
                        "gonfalonId": 0,
                        // Type: integer:uint32
                        "gonfalonColorId": 0,
                        // Type: integer:uint32
                        "gonfalonDetailId": 0,
                        // Type: integer:uint32
                        "gonfalonDetailColorId": 0
                    }
                },
                // Type: string
                "avatarPath": "",
                // Type: string
                "theme": ""
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
1. https://bungie-net.github.io/multi/operation_post_GroupV2-GroupSearch.html#operation_post_GroupV2-GroupSearch
