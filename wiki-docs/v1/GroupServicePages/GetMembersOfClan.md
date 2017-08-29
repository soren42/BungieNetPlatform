<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a paged list of members in a clan.
* **URI:** [[/Group/{groupId}/ClanMembers/|https://www.bungie.net/Platform/Group/{groupId}/ClanMembers/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.

### Query String Parameters
Name | Description
---- | -----------
currentPage | The current page to return. Starts at 1.
memberType | Default is -1. -1=All Members, 0=Member, 1=Admin, 2=Founder
sort | Default is 0.
platformType | A valid clan membership type. Default is 0. Required. 0=None, 1=Xbox, 2=PSN

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Group/177526/ClanMembers/
 ```javascript
{
    "Response": {
        "results": [
            {
                "bungieNetUserInfo": {
                    "iconPath": "\/img\/profile\/avatars\/bungieday_03.jpg",
                    "membershipType": 254,
                    "membershipId": "5197148",
                    "displayName": "lowlines"
                },
                "hasPendingApplication": false,
                "hasRated": false,
                "approvalDate": "2014-09-02T09:08:36.038Z",
                "approvedByMembershipId": "5197148",
                "rating": 0,
                "groupId": "177526",
                "membershipType": 254,
                "membershipId": "5197148",
                "isMember": true,
                "memberType": 2,
                "isOriginalFounder": true
            }
        ],
        "totalResults": "1",
        "hasMore": false,
        "query": {
            "groupId": "177526",
            "memberType": -1,
            "platformType": 2,
            "sort": 0,
            "nameSearch": "",
            "itemsPerPage": 10,
            "currentPage": 1
        },
        "useTotalResults": true
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {}
}
```

## References
