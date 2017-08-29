<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
destinyMemberships | [[UserInfoCard|User-UserInfoCard]][] | this allows you to see destiny memberships that are visible and linked to this account (regardless of whether or not they have characters on the world server)
bungieNetUser | [[GeneralUser|User-GeneralUser]] | 

## Example
```javascript
{
    // Type: [[UserInfoCard|User-UserInfoCard]][]
    "destinyMemberships": [
       // Type: [[UserInfoCard|User-UserInfoCard]]
        {
            // Type: string
            "supplementalDisplayName": "",
            // Type: string
            "iconPath": "",
            // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
            "membershipType": 0,
            // Type: integer:int64
            "membershipId": 0,
            // Type: string
            "displayName": ""
        }
    ],
    // Type: [[GeneralUser|User-GeneralUser]]
    "bungieNetUser": {
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
}

```

## References
1. https://bungie-net.github.io/multi/schema_User-UserMembershipData.html#schema_User-UserMembershipData
