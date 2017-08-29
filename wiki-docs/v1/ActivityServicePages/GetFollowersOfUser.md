<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of Bungie.net users following a given user.
* **URI:** [[/Activity/User/{profileId}/Followers/|https://www.bungie.net/Platform/Activity/User/{profileId}/Followers/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[ActivityService|Endpoints#ActivityService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
profileId | A valid Bungie.net membership ID.

### Query String Parameters
Name | Description
---- | -----------
itemsperpage | The number of items per page. Default is 50.
currentpage | The current page to return. Starts at 1.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Activity/User/5197148/Followers/
 ```javascript
{
    "Response": {
        "results": [
            {
                "user": {
                    "membershipId": "10388222",
                    "uniqueName": "10388222",
                    "displayName": "AmmoDepot",
                    "profilePicture": 70536,
                    "profileTheme": 104,
                    "userTitle": 0,
                    "successMessageFlags": "1",
                    "isDeleted": false,
                    "about": "Cheers Guardians, Meet me at the best universe I know, with the best people around. \n\nI love to be connected with destiny...",
                    "firstAccess": "2015-04-06T05:02:16.488Z",
                    "lastUpdate": "2015-08-05T23:18:44.449Z",
                    "psnDisplayName": "AmmoDepot",
                    "xboxDisplayName": "driZruleZ",
                    "showActivity": true,
                    "followerCount": 180,
                    "followingUserCount": 220,
                    "locale": "en",
                    "localeInheritDefault": true,
                    "showGroupMessaging": true,
                    "profilePicturePath": "\/img\/profile\/avatars\/bungieday_14.jpg",
                    "profileThemeName": "bungie_day15_13",
                    "userTitleDisplay": "Newbie",
                    "statusText": "",
                    "statusDate": "0001-01-01T00:00:00Z"
                },
                "dateFollowed": "2015-04-24T21:27:24.612Z"
            }
        ],
        "totalResults": "1",
        "hasMore": true,
        "query": {
            "itemsPerPage": 50,
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
