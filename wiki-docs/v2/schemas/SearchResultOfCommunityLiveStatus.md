<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Generic

## Properties
Name | Type | Description
---- | ---- | -----------
results | [[CommunityLiveStatus|Community-CommunityLiveStatus]][] | 
totalResults | integer:int32 | 
hasMore | boolean | 
query | [[PagedQuery|Queries-PagedQuery]] | 
replacementContinuationToken | string | 
useTotalResults | boolean | If useTotalResults is true, then totalResults represents an accurate count. If False, it does not, and may be estimated/only the size of the current page. Either way, you should probably always only trust hasMore. This is a long-held historical throwback to when we used to do paging with known total results.Those queries toasted our database, and we were left to hastily alter our endpoints and create backward-compatible shims, of which useTotalResults is one.

## Example
```javascript
{
    // Type: [[CommunityLiveStatus|Community-CommunityLiveStatus]][]
    "results": [
       // Type: [[CommunityLiveStatus|Community-CommunityLiveStatus]]
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
                "membershipType": 0,
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
    ],
    // Type: integer:int32
    "totalResults": 0,
    // Type: boolean
    "hasMore": false,
    // Type: [[PagedQuery|Queries-PagedQuery]]
    "query": {
        // Type: integer:int32
        "itemsPerPage": 0,
        // Type: integer:int32
        "currentPage": 0,
        // Type: string
        "requestContinuationToken": ""
    },
    // Type: string
    "replacementContinuationToken": "",
    // Type: boolean
    "useTotalResults": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_SearchResultOfCommunityLiveStatus.html#schema_SearchResultOfCommunityLiveStatus
