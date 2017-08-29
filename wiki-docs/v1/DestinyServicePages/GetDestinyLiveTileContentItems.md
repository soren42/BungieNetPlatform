<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of "tiles" used on the Bungie.net website.
* **URI:** [[/Destiny/LiveTiles/|https://www.bungie.net/Platform/Destiny/LiveTiles/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/LiveTiles
```javascript
{
    "Response": [
        {
            "contentId": "12788",
            "cType": "LiveTile",
            "cmsPath": "HouseofWolvesDefault",
            "creationDate": "2015-04-20T18:55:12Z",
            "modifyDate": "2015-05-18T23:39:42Z",
            "allowComments": false,
            "hasAgeGate": false,
            "minimumAge": 0,
            "ratingImagePath": "",
            "author": {
                "membershipId": "8011",
                "uniqueName": "DeeJ",
                "displayName": "DeeJ",
                "profilePicture": 770057,
                "profileTheme": 67,
                "userTitle": 0,
                "successMessageFlags": "59",
                "isDeleted": false,
                "about": "Your friendly neighborhood Community Manager.",
                "firstAccess": "2004-10-29T18:14:49.77Z",
                "lastUpdate": "2015-02-27T23:28:26.83Z",
                "psnDisplayName": "DeeJ_BNG",
                "xboxDisplayName": "DeeJ BNG",
                "showActivity": true,
                "followerCount": 15307,
                "followingUserCount": 265,
                "locale": "en",
                "localeInheritDefault": true,
                "showGroupMessaging": true,
                "profilePicturePath": "\/img\/profile\/avatars\/admin\/deej_icon.jpg",
                "profileThemeName": "Destiny2",
                "userTitleDisplay": "Newbie"
            },
            "autoEnglishPropertyFallback": true,
            "properties": {
                "Title": "Destiny Expansion II ",
                "TileType": "Store",
                "Subtitle": "House of Wolves \u2013 Available Now",
                "DisplayDate": "",
                "ServiceLabel": "0",
                "ProductLabel": "DESTINYEXPNPACK2",
                "CategoryLabel": "",
                "WebPageLink": "",
                "FourByOne": "",
                "ThreeByOne": "",
                "TwoByOne": "\/pubassets\/37011\/HouseOfWolves.jpg",
                "OneByOne": ""
            },
            "representations": [
                {
                    "name": "TwoByOne",
                    "path": "\/pubassets\/37011\/HouseOfWolves.jpg",
                    "validationString": "520x260 "
                }
            ],
            "tags": [

            ],
            "commentSummary": {
                "topicId": "0",
                "commentCount": 0
            }
        }
    ],
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {

    }
}
```

## References
