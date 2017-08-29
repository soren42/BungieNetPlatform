<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of recent notifications for the current user.
* **URI:** [[/Notification/GetRecent/|https://www.bungie.net/Platform/Notification/GetRecent/]]
* **Method:** GET
* **Accessibility:** Private
* **Service:** [[NotificationService|Endpoints#NotificationService]]

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Description
---- | -----------
format | Unknown. Default is 0.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Notification/GetRecent/
 ```javascript
{
    "Response": {
        "notifications": [
            {
                "notificationId": "81280877",
                "membershipId": "5197148",
                "notificationType": 9,
                "createdDate": "2015-06-21T12:06:50.388Z",
                "sendOnDate": "2015-06-23T04:56:43.815Z",
                "notificationDetail": "Depleted Hand Cannon Bounty 2 *Feels Almost* Impos...",
                "memberInitiatedId": "8783046",
                "relatedItemId": "69241986",
                "relatedChildItemId": "69241986",
                "groupId": "0",
                "isNew": false,
                "icon": "\/img\/profile\/avatars\/default_avatar.gif",
                "notifySelf": false,
                "memberInitiated": {
                    "membershipId": "8783046",
                    "uniqueName": "8783046",
                    "displayName": "PoZER937",
                    "profilePicture": 0,
                    "profileTheme": 0,
                    "userTitle": 0,
                    "successMessageFlags": "0",
                    "isDeleted": false,
                    "about": "",
                    "firstAccess": "2014-11-25T22:19:52.789Z",
                    "lastUpdate": "2014-11-25T22:19:52.789Z",
                    "context": {
                        "isFollowing": false,
                        "ignoreStatus": {
                            "isIgnored": false,
                            "ignoreFlags": 0
                        }
                    },
                    "psnDisplayName": "PoZER937",
                    "showActivity": true,
                    "followerCount": 0,
                    "followingUserCount": 3,
                    "locale": "en",
                    "localeInheritDefault": false,
                    "showGroupMessaging": true,
                    "profilePicturePath": "\/img\/profile\/avatars\/default_avatar.gif",
                    "profileThemeName": "septagon",
                    "userTitleDisplay": "Newbie"
                },
                "relatedItemDetail": "",
                "NotifySelf": false,
                "relatedEntityType": 3
            }
        ],
        "invitations": {

        },
        "tagActivityCount": 0,
        "groupActivityCount": 0
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
