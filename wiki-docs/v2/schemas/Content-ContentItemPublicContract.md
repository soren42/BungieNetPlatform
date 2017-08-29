<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
contentId | integer:int64 | 
cType | string | 
cmsPath | string | 
creationDate | string:date-time | 
modifyDate | string:date-time | 
allowComments | boolean | 
hasAgeGate | boolean | 
minimumAge | integer:int32 | 
ratingImagePath | string | 
author | [[GeneralUser|User-GeneralUser]] | 
autoEnglishPropertyFallback | boolean | 
properties | Dictionary&lt;string,object&gt; | Firehose content is really a collection of metadata and &quot;properties&quot;, which arethe potentially-but-not-strictly localizable data that comprises the meat ofwhatever content is being shown. As Cole Porter would have crooned, &quot;Anything Goes&quot; with Firehose properties.They are most often strings, but they can theoretically be anything.  They are JSONencoded, and could be JSON structures, simple strings, numbers etc...  The Content Typeof the item (cType) will describe the properties, and thus how they ought to be deserialized.
representations | [[ContentRepresentation|Content-ContentRepresentation]][] | 
tags | string[] | 
commentSummary | [[CommentSummary|Content-CommentSummary]] | 

## Example
```javascript
{
    // Type: integer:int64
    "contentId": 0,
    // Type: string
    "cType": "",
    // Type: string
    "cmsPath": "",
    // Type: string:date-time
    "creationDate": "",
    // Type: string:date-time
    "modifyDate": "",
    // Type: boolean
    "allowComments": false,
    // Type: boolean
    "hasAgeGate": false,
    // Type: integer:int32
    "minimumAge": 0,
    // Type: string
    "ratingImagePath": "",
    // Type: [[GeneralUser|User-GeneralUser]]
    "author": {
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
    },
    // Type: boolean
    "autoEnglishPropertyFallback": false,
    // Type: Dictionary&lt;string,object&gt;
    "properties": {
        "{string}": {}
    },
    // Type: [[ContentRepresentation|Content-ContentRepresentation]][]
    "representations": [
       // Type: [[ContentRepresentation|Content-ContentRepresentation]]
        {
            // Type: string
            "name": "",
            // Type: string
            "path": "",
            // Type: string
            "validationString": ""
        }
    ],
    // Type: string[]
    "tags": [
       // Type: string
        ""
    ],
    // Type: [[CommentSummary|Content-CommentSummary]]
    "commentSummary": {
        // Type: integer:int64
        "topicId": 0,
        // Type: integer:int32
        "commentCount": 0
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Content-ContentItemPublicContract.html#schema_Content-ContentItemPublicContract
