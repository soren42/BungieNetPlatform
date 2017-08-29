<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
lastReplyTimestamp | string:date-time | 
IsPinned | boolean | 
urlMediaType | [[ForumMediaType|Forum-ForumMediaType]]:Enum | 
thumbnail | string | 
popularity | [[ForumPostPopularity|Forum-ForumPostPopularity]]:Enum | 
isActive | boolean | 
isAnnouncement | boolean | 
userRating | integer:int32 | 
userHasRated | boolean | 
userHasMutedPost | boolean | 
latestReplyPostId | integer:int64 | 
latestReplyAuthorId | integer:int64 | 
ignoreStatus | [[IgnoreResponse|Ignores-IgnoreResponse]] | 
locale | string | 

## Example
```javascript
{
    // Type: string:date-time
    "lastReplyTimestamp": "",
    // Type: boolean
    "IsPinned": false,
    // Type: [[ForumMediaType|Forum-ForumMediaType]]:Enum
    "urlMediaType": 0,
    // Type: string
    "thumbnail": "",
    // Type: [[ForumPostPopularity|Forum-ForumPostPopularity]]:Enum
    "popularity": 0,
    // Type: boolean
    "isActive": false,
    // Type: boolean
    "isAnnouncement": false,
    // Type: integer:int32
    "userRating": 0,
    // Type: boolean
    "userHasRated": false,
    // Type: boolean
    "userHasMutedPost": false,
    // Type: integer:int64
    "latestReplyPostId": 0,
    // Type: integer:int64
    "latestReplyAuthorId": 0,
    // Type: [[IgnoreResponse|Ignores-IgnoreResponse]]
    "ignoreStatus": {
        // Type: boolean
        "isIgnored": false,
        // Type: [[IgnoreStatus|Ignores-IgnoreStatus]]:Enum
        "ignoreFlags": 0
    },
    // Type: string
    "locale": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_Forum-PostResponse.html#schema_Forum-PostResponse
