<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
identifier | string | 
entityType | [[TrendingEntryType|Trending-TrendingEntryType]]:Enum | 
news | [[TrendingEntryNews|Trending-TrendingEntryNews]] | 
support | [[TrendingEntrySupportArticle|Trending-TrendingEntrySupportArticle]] | 
destinyItem | [[TrendingEntryDestinyItem|Trending-TrendingEntryDestinyItem]] | 
destinyActivity | [[TrendingEntryDestinyActivity|Trending-TrendingEntryDestinyActivity]] | 
destinyRitual | [[TrendingEntryDestinyRitual|Trending-TrendingEntryDestinyRitual]] | 
creation | [[TrendingEntryCommunityCreation|Trending-TrendingEntryCommunityCreation]] | 
stream | [[TrendingEntryCommunityStream|Trending-TrendingEntryCommunityStream]] | 

## Example
```javascript
{
    // Type: string
    "identifier": "",
    // Type: [[TrendingEntryType|Trending-TrendingEntryType]]:Enum
    "entityType": 0,
    // Type: [[TrendingEntryNews|Trending-TrendingEntryNews]]
    "news": {
        // Type: [[ContentItemPublicContract|Content-ContentItemPublicContract]]
        "article": {
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
    },
    // Type: [[TrendingEntrySupportArticle|Trending-TrendingEntrySupportArticle]]
    "support": {
        // Type: [[ContentItemPublicContract|Content-ContentItemPublicContract]]
        "article": {
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
    },
    // Type: [[TrendingEntryDestinyItem|Trending-TrendingEntryDestinyItem]]
    "destinyItem": {
        // Type: integer:uint32
        "itemHash": 0
    },
    // Type: [[TrendingEntryDestinyActivity|Trending-TrendingEntryDestinyActivity]]
    "destinyActivity": {
        // Type: integer:uint32
        "activityHash": 0,
        // Type: [[DestinyPublicActivityStatus|Destiny-Activities-DestinyPublicActivityStatus]]
        "status": {
            // Type: [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32[]
            "challengeObjectiveHashes": [
               // Type: integer:uint32
                0
            ],
            // Type: [[Destiny.Definitions.ActivityModifiers.DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]]:integer:uint32[]
            "modifierHashes": [
               // Type: integer:uint32
                0
            ],
            // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
            "rewardTooltipItems": [
               // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]]
                {
                    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                    "itemHash": 0,
                    // Type: integer:int64:nullable
                    "itemInstanceId": 0,
                    // Type: integer:int32
                    "quantity": 0
                }
            ]
        }
    },
    // Type: [[TrendingEntryDestinyRitual|Trending-TrendingEntryDestinyRitual]]
    "destinyRitual": {
        // Type: string
        "image": "",
        // Type: string
        "icon": "",
        // Type: string
        "title": "",
        // Type: string
        "subtitle": "",
        // Type: string:date-time:nullable
        "dateStart": "",
        // Type: string:date-time:nullable
        "dateEnd": "",
        // Type: [[DestinyPublicMilestone|Destiny-Milestones-DestinyPublicMilestone]]
        "milestoneDetails": {},
        // Type: [[DestinyMilestoneContent|Destiny-Milestones-DestinyMilestoneContent]]
        "eventContent": {}
    },
    // Type: [[TrendingEntryCommunityCreation|Trending-TrendingEntryCommunityCreation]]
    "creation": {
        // Type: string
        "media": "",
        // Type: string
        "title": "",
        // Type: string
        "author": "",
        // Type: integer:int64
        "authorMembershipId": 0,
        // Type: integer:uint64
        "postId": 0,
        // Type: string
        "body": "",
        // Type: integer:int32
        "upvotes": 0
    },
    // Type: [[TrendingEntryCommunityStream|Trending-TrendingEntryCommunityStream]]
    "stream": {
        // Type: string
        "image": "",
        // Type: string
        "title": "",
        // Type: string
        "partnershipIdentifier": "",
        // Type: [[PartnershipType|Partnerships-PartnershipType]]:Enum
        "partnershipType": 0
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Trending-TrendingDetail.html#schema_Trending-TrendingDetail
