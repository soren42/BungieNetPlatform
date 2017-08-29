<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a paged list of conversations for the current user.
* **URI:** [[/Message/GetConversationsV5/{currentPage}/|https://www.bungie.net/Platform/Message/GetConversationsV5/{currentPage}/]]
* **Method:** GET
* **Accessibility:** Private
* **Service:** [[MessageService|Endpoints#MessageService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
currentPage | The current page to return. Starts at 1.

### Query String Parameters
Name | Description
---- | -----------
format | Unknown. Default is 0.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Message/GetConversationsV5/1/
 ```javascript
{
    "Response": {
        "users": {
            "5197148": {
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
                "lastUpdate": "2015-06-02T03:27:22.251Z",
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
            }
        },
        "invitationDetails": {
            "3624621": {
                "invitationId": "3624621",
                "membershipId": "5197148",
                "resolutionStatus": 0,
                "expireDate": "2015-01-28T17:44:22.813Z",
                "invitationType": 4,
                "requestingObjectId": "463037",
                "targetObjectId": "5197148",
                "requestMessage": "[redacted]",
                "responseMessage": "This invitation has expired.",
                "responseCode": "",
                "hasExpired": true,
                "message": "[redacted]",
                "membershipIdCreated": "7847916",
                "canRespond": false
            }
        },
        "groups": {

        },
        "unreadCount": 0,
        "results": [
            {
                "detail": {
                    "conversationId": "10965982",
                    "memberFromId": "6208552",
                    "dateStarted": "2015-06-03T16:05:21.155Z",
                    "totalMessageCount": 5,
                    "lastMessageSent": "2015-06-03T18:06:22.525Z",
                    "lastMessageId": "55651884",
                    "isGlobal": false,
                    "isLocked": false,
                    "invitationId": "0",
                    "starter": "6208552",
                    "lastRead": "2015-06-04T00:52:15.063Z",
                    "status": 1,
                    "body": "[redacted]",
                    "isAutoResponse": false,
                    "isRead": true,
                    "ownerEntityId": "0",
                    "ownerEntityType": 0,
                    "targetMembershipId": "5197148"
                },
                "participants": [
                    {
                        "membershipId": "5197148",
                        "isDeleted": false
                    },
                    {
                        "membershipId": "6208552",
                        "isDeleted": false
                    }
                ]
            }
        ],
        "totalResults": "10",
        "hasMore": true,
        "query": {
            "itemsPerPage": 10,
            "currentPage": 1
        },
        "useTotalResults": false
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
