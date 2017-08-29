<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Get a paged list of pending members for a clan in a given group that the current user is an admin for.
* **URI:** [[/Group/{groupId}/Clan/{clanMembershipType}/Pending/{currentPage}/|https://www.bungie.net/Platform/Group/{groupId}/Clan/{clanMembershipType}/Pending/{currentPage}/]]
* **Method:** GET
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.
[[clanMembershipType|Enums#BungieMembershipType]] | A valid clan membership type. 1=Xbox, 2=PSN, 10=Demon
currentPage | The current page to return. Starts at 1.

### Query String Parameters
None

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Group/177526/Clan/2/Pending/1/
 ```javascript
{
    "Response": {
        "users": {},
        "groups": {},
        "memberships": {},
        "invitations": {
            "results": [],
            "totalResults": "0",
            "hasMore": false,
            "query": {
                "itemsPerPage": 10,
                "currentPage": 1
            },
            "useTotalResults": true
        }
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {}
}
```

## References
