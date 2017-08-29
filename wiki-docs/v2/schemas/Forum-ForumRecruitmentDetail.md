<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
topicId | integer:int64 | 
microphoneRequired | boolean | 
intensity | [[ForumRecruitmentIntensityLabel|Forum-ForumRecruitmentIntensityLabel]]:Enum | 
tone | [[ForumRecruitmentToneLabel|Forum-ForumRecruitmentToneLabel]]:Enum | 
approved | boolean | 
conversationId | integer:int64:nullable | 
playerSlotsTotal | integer:int32 | 
playerSlotsRemaining | integer:int32 | 
Fireteam | [[GeneralUser|User-GeneralUser]][] | 
kickedPlayerIds | integer:int64[] | 

## Example
```javascript
{
    // Type: integer:int64
    "topicId": 0,
    // Type: boolean
    "microphoneRequired": false,
    // Type: [[ForumRecruitmentIntensityLabel|Forum-ForumRecruitmentIntensityLabel]]:Enum
    "intensity": 0,
    // Type: [[ForumRecruitmentToneLabel|Forum-ForumRecruitmentToneLabel]]:Enum
    "tone": 0,
    // Type: boolean
    "approved": false,
    // Type: integer:int64:nullable
    "conversationId": 0,
    // Type: integer:int32
    "playerSlotsTotal": 0,
    // Type: integer:int32
    "playerSlotsRemaining": 0,
    // Type: [[GeneralUser|User-GeneralUser]][]
    "Fireteam": [
       // Type: [[GeneralUser|User-GeneralUser]]
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
    ],
    // Type: integer:int64[]
    "kickedPlayerIds": [
       // Type: integer:int64
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Forum-ForumRecruitmentDetail.html#schema_Forum-ForumRecruitmentDetail
