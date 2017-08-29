<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
membershipId | integer:int64 | 
uniqueName | string | 
normalizedName | string | 
displayName | string | 
profilePicture | integer:int32 | 
profileTheme | integer:int32 | 
userTitle | integer:int32 | 
successMessageFlags | integer:int64 | 
isDeleted | boolean | 
about | string | 
firstAccess | string:date-time:nullable | 
lastUpdate | string:date-time:nullable | 
legacyPortalUID | integer:int64:nullable | 
context | [[UserToUserContext|User-UserToUserContext]] | 
psnDisplayName | string | 
xboxDisplayName | string | 
fbDisplayName | string | 
showActivity | boolean:nullable | 
locale | string | 
localeInheritDefault | boolean | 
lastBanReportId | integer:int64:nullable | 
showGroupMessaging | boolean | 
profilePicturePath | string | 
profilePictureWidePath | string | 
profileThemeName | string | 
userTitleDisplay | string | 
statusText | string | 
statusDate | string:date-time | 
profileBanExpire | string:date-time:nullable | 
blizzardDisplayName | string | 

## Example
```javascript
{
    // Type: integer:int64
    "membershipId": 0,
    // Type: string
    "uniqueName": "",
    // Type: string
    "normalizedName": "",
    // Type: string
    "displayName": "",
    // Type: integer:int32
    "profilePicture": 0,
    // Type: integer:int32
    "profileTheme": 0,
    // Type: integer:int32
    "userTitle": 0,
    // Type: integer:int64
    "successMessageFlags": 0,
    // Type: boolean
    "isDeleted": false,
    // Type: string
    "about": "",
    // Type: string:date-time:nullable
    "firstAccess": "",
    // Type: string:date-time:nullable
    "lastUpdate": "",
    // Type: integer:int64:nullable
    "legacyPortalUID": 0,
    // Type: [[UserToUserContext|User-UserToUserContext]]
    "context": {
        // Type: boolean
        "isFollowing": false,
        // Type: [[IgnoreResponse|Ignores-IgnoreResponse]]
        "ignoreStatus": {
            // Type: boolean
            "isIgnored": false,
            // Type: [[IgnoreStatus|Ignores-IgnoreStatus]]:Enum
            "ignoreFlags": 0
        },
        // Type: string:date-time:nullable
        "globalIgnoreEndDate": ""
    },
    // Type: string
    "psnDisplayName": "",
    // Type: string
    "xboxDisplayName": "",
    // Type: string
    "fbDisplayName": "",
    // Type: boolean:nullable
    "showActivity": false,
    // Type: string
    "locale": "",
    // Type: boolean
    "localeInheritDefault": false,
    // Type: integer:int64:nullable
    "lastBanReportId": 0,
    // Type: boolean
    "showGroupMessaging": false,
    // Type: string
    "profilePicturePath": "",
    // Type: string
    "profilePictureWidePath": "",
    // Type: string
    "profileThemeName": "",
    // Type: string
    "userTitleDisplay": "",
    // Type: string
    "statusText": "",
    // Type: string:date-time
    "statusDate": "",
    // Type: string:date-time:nullable
    "profileBanExpire": "",
    // Type: string
    "blizzardDisplayName": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_User-GeneralUser.html#schema_User-GeneralUser
