<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of members for a given group.
* **URI:** [[/Group/{groupId}/MembersV3/|https://www.bungie.net/Platform/Group/{groupId}/MembersV3/]]
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
itemsPerPage | Items per page. Default is 10.
currentPage | The current page to return. Starts at 1.
memberType | Default is -1. -1=All Members, 0=Member, 1=Admin, 2=Founder
platformType | A valid clan membership type. Default is 0. 0=None, 1=Xbox, 2=PSN
sort | Default is 0.
nameSearch | Not working?

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Group/177526/MembersV3/?currentPage=1
 ```javascript
{
    "Response": {
        "results": [
            {
                "user": {
                    "membershipId": "5197148",
                    "uniqueName": "5197148",
                    "displayName": "lowlines",
                    "profilePicture": 70525,
                    "profileTheme": 84,
                    "userTitle": 0,
                    "successMessageFlags": "33",
                    "isDeleted": false,
                    "about": "",
                    "firstAccess": "2014-07-18T08:03:04.916Z",
                    "lastUpdate": "2015-03-10T04:12:13.322Z",
                    "context": {
                        "isFollowing": false,
                        "ignoreStatus": {
                            "isIgnored": false,
                            "ignoreFlags": 0
                        }
                    },
                    "psnDisplayName": "lowlines",
                    "xboxDisplayName": "Low Lines",
                    "showActivity": true,
                    "followerCount": 48,
                    "followingUserCount": 52,
                    "locale": "en",
                    "localeInheritDefault": true,
                    "showGroupMessaging": true,
                    "profilePicturePath": "\/img\/profile\/avatars\/bungieday_03.jpg",
                    "profileThemeName": "bungieday1303",
                    "userTitleDisplay": "Newbie"
                },
                "hasPendingApplication": false,
                "hasRated": false,
                "approvalDate": "2014-09-02T09:08:36.038Z",
                "approvedByMembershipId": "5197148",
                "rating": 0,
                "groupId": "177526",
                "membershipType": 0,
                "membershipId": "5197148",
                "isMember": true,
                "memberType": 2,
                "isOriginalFounder": true
            }
        ],
        "totalResults": "5",
        "hasMore": false,
        "query": {
            "groupId": "177526",
            "memberType": -1,
            "platformType": 0,
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
    "MessageData": {

    }
}
```

## References
