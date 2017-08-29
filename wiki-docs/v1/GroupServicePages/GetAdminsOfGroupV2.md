<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Return a paged list of admins for a group.
* **URI:** [[/Group/{groupId}/AdminsV2/|https://www.bungie.net/Platform/Group/{groupId}/AdminsV2/]]
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

### JSON POST Parameters
None

## Example
https://www.bungie.net/Platform/Group/177526/AdminsV2/
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
                    "lastUpdate": "2016-02-03T00:03:22.69Z",
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
                    "followerCount": 78,
                    "followingUserCount": 86,
                    "locale": "en",
                    "localeInheritDefault": true,
                    "showGroupMessaging": true,
                    "profilePicturePath": "\/img\/profile\/avatars\/bungieday_03.jpg",
                    "profileThemeName": "bungieday1303",
                    "userTitleDisplay": "Newbie",
                    "statusText": "Join the Friendly Ghosts!",
                    "statusDate": "2016-02-03T00:03:22.69Z"
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
        "totalResults": "1",
        "hasMore": false,
        "query": {
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
