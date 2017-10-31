<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
results | [[PostResponse|Forum-PostResponse]][] | 
totalResults | integer:int32 | 
hasMore | boolean | 
query | [[PagedQuery|Queries-PagedQuery]] | 
replacementContinuationToken | string | 
useTotalResults | boolean | If useTotalResults is true, then totalResults represents an accurate count. If False, it does not, and may be estimated/only the size of the current page. Either way, you should probably always only trust hasMore. This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.

## Example
```javascript
{
    // Type: [[PostResponse|Forum-PostResponse]][]
    "results": [
       // Type: [[PostResponse|Forum-PostResponse]]
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
1. https://bungie-net.github.io/multi/schema_SearchResultOfPostResponse.html#schema_SearchResultOfPostResponse
