<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
dateStatusUpdated | string:date-time | 
url | string | 
partnershipIdentifier | string | 
partnershipType | [[PartnershipType|Partnerships-PartnershipType]]:Enum | 
thumbnail | string | 
thumbnailSmall | string | 
thumbnailLarge | string | 
destinyCharacterId | integer:int64 | 
userInfo | [[UserInfoCard|User-UserInfoCard]] | 
currentActivityHash | integer:uint32 | 
dateLastPlayed | string:date-time | 
dateStreamStarted | string:date-time | 
locale | string | 
currentViewers | integer:int32 | 
followers | integer:int32 | 
overallViewers | integer:int32 | 
isFeatured | boolean | 
title | string | 
activityModeHash | integer:uint32 | 
dateFeatured | string:date-time:nullable | 
trendingValue | number:float | 
isSubscribable | boolean | 

## Example
```javascript
{
    // Type: string:date-time
    "dateStatusUpdated": "",
    // Type: string
    "url": "",
    // Type: string
    "partnershipIdentifier": "",
    // Type: [[PartnershipType|Partnerships-PartnershipType]]:Enum
    "partnershipType": 0,
    // Type: string
    "thumbnail": "",
    // Type: string
    "thumbnailSmall": "",
    // Type: string
    "thumbnailLarge": "",
    // Type: integer:int64
    "destinyCharacterId": 0,
    // Type: [[UserInfoCard|User-UserInfoCard]]
    "userInfo": {
        // Type: string
        "supplementalDisplayName": "",
        // Type: string
        "iconPath": "",
        // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
        "membershipType": {},
        // Type: integer:int64
        "membershipId": 0,
        // Type: string
        "displayName": ""
    },
    // Type: integer:uint32
    "currentActivityHash": 0,
    // Type: string:date-time
    "dateLastPlayed": "",
    // Type: string:date-time
    "dateStreamStarted": "",
    // Type: string
    "locale": "",
    // Type: integer:int32
    "currentViewers": 0,
    // Type: integer:int32
    "followers": 0,
    // Type: integer:int32
    "overallViewers": 0,
    // Type: boolean
    "isFeatured": false,
    // Type: string
    "title": "",
    // Type: integer:uint32
    "activityModeHash": 0,
    // Type: string:date-time:nullable
    "dateFeatured": "",
    // Type: number:float
    "trendingValue": 0,
    // Type: boolean
    "isSubscribable": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Community-CommunityLiveStatus.html#schema_Community-CommunityLiveStatus
