<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of friends for a given membershipType.
* **URI:** [[/Activity/Friends/Paged/{membershipType}/{currentPage}/|https://www.bungie.net/Platform/Activity/Friends/Paged/{membershipType}/{currentPage}/]]
* **Method:** GET
* **Accessibility:** Private
* **Service:** [[ActivityService|Endpoints#ActivityService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.
currentPage | The current page to return. Starts at 1.

### Query String Parameters
None

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Activity/Friends/Paged/2/1/

Expired PSN token.
```javascript
{
    "ErrorCode": 1204,
    "ThrottleSeconds": 0,
    "ErrorStatus": "PSNExExpiredTicket",
    "Message": "Something went awry while trying to log you in.",
    "MessageData": {

    }
}
```

Expired Xbox Live token.
```javascript
{
    "ErrorCode": 1304,
    "ThrottleSeconds": 0,
    "ErrorStatus": "XblStsMissingToken",
    "Message": "We were unable to lookup your Gamertag or your Xbox Live Access Token is missing.  Please reauthenticate\/sign-out and sign back in. If you continue to see this message head over to help.bungie.net or the #bnetissues forum.",
    "MessageData": {

    }
}
```

With a valid token.
```javascript
{
    "Response": {
        "results": [
            {
                "friendType": 2,
                "platformUserInfo": {
                    "iconPath": "http:\/\/psn-rsc.prod.dl.playstation.net\/psn-rsc\/avatar\/EP0001\/CUSA01788_00-AV00000000000027_32CF644B9024AC7B36B0_s.png",
                    "membershipType": 2,
                    "membershipId": "4611686018433191341",
                    "displayName": "baker_kfc"
                },
                "bungieNetUserInfo": {
                    "membershipId": "6706398",
                    "uniqueName": "6706398",
                    "displayName": "bakerkfc",
                    "profilePicture": 70477,
                    "profileTheme": 87,
                    "userTitle": 0,
                    "successMessageFlags": "0",
                    "isDeleted": false,
                    "about": "",
                    "firstAccess": "2014-09-14T21:49:50.67Z",
                    "lastUpdate": "2014-11-11T07:42:07.06Z",
                    "context": {
                        "isFollowing": true,
                        "ignoreStatus": {
                            "isIgnored": false,
                            "ignoreFlags": 0
                        }
                    },
                    "psnDisplayName": "baker_kfc",
                    "showActivity": true,
                    "followerCount": 155,
                    "followingUserCount": 163,
                    "locale": "en",
                    "localeInheritDefault": false,
                    "showGroupMessaging": true,
                    "profilePicturePath": "\/img\/profile\/avatars\/bungiedayav3.jpg",
                    "profileThemeName": "bungieday1306",
                    "userTitleDisplay": "Newbie",
                    "statusText": "",
                    "statusDate": "0001-01-01T00:00:00Z"
                },
                "onlineStatus": 1,
                "presenceString": "Grand Theft Auto V"
            }
        ],
        "totalResults": "1",
        "hasMore": false,
        "query": {
            "itemsPerPage": 500,
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
