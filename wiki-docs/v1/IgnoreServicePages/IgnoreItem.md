<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Ignores a given item
* **URI:** [[/Ignore/Ignore/|https://www.bungie.net/Platform/Ignore/Ignore/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[IgnoreService|Endpoints#IgnoreService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
Name | Description
---- | -----------
ignoredItemId | A valid ignoredItemId.
[[ignoredItemType|Enums#IgnoredItemType]] | The type of item to ignore.
comment | 
reason | 
itemContextId | 
itemContextType | 
ModeratorRequest | 

## Example
POST https://www.bungie.net/Platform/Ignore/Ignore/
```javascript
{
   "ignoredItemId":"8011",
   "ignoredItemType":3,
   "comment":"",
   "reason":"0",
   "itemContextId":0,
   "itemContextType":1,
   "ModeratorRequest":"0"
}
```
```javascript
{
   "Response":{
      "user":{
         "membershipId":"8011",
         "uniqueName":"DeeJ",
         "displayName":"DeeJ",
         "profilePicture":770057,
         "profileTheme":67,
         "userTitle":0,
         "successMessageFlags":"59",
         "isDeleted":false,
         "about":"Your friendly neighborhood Community Manager.",
         "firstAccess":"2004-10-29T18:14:49.77Z",
         "lastUpdate":"2015-02-27T23:28:26.83Z",
         "context":{
            "isFollowing":false,
            "ignoreStatus":{
               "isIgnored":true,
               "ignoreFlags":1
            }
         },
         "psnDisplayName":"DeeJ_BNG",
         "xboxDisplayName":"DeeJ BNG",
         "showActivity":true,
         "followerCount":15375,
         "followingUserCount":265,
         "locale":"en",
         "localeInheritDefault":true,
         "showGroupMessaging":true,
         "profilePicturePath":"/img/profile/avatars/admin/deej_icon.jpg",
         "profileThemeName":"Destiny2",
         "userTitleDisplay":"Newbie"
      },
      "displayName":"DeeJ",
      "dateCreated":"2015-05-29T14:06:17.871Z",
      "dateExpires":"9999-12-31T23:59:59.999Z",
      "dateModified":"2015-05-29T14:06:17.871Z",
      "comment":"",
      "flags":0,
      "reason":"0"
   },
   "ErrorCode":1,
   "ThrottleSeconds":0,
   "ErrorStatus":"Success",
   "Message":"Ok",
   "MessageData":{

   }
}
```

## References
