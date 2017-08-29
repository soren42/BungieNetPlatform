<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The results of a search for Destiny content.  This will be improved on over time,I've been doing some experimenting to see what might be useful.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
suggestedWords | string[] | A list of suggested words that might make for better search results,based on the text searched for.
results | [[SearchResult&lt;DestinyEntitySearchResultItem&gt;|SearchResultOfDestinyEntitySearchResultItem]] | The items found that are matches/near matches for the searched-for term,sorted by something vaguely resembling &quot;relevance&quot;.  Hopefully this willget better in the future.

## Example
```javascript
{
    // Type: string[]
    "suggestedWords": [
       // Type: string
        ""
    ],
    // Type: [[SearchResult&lt;DestinyEntitySearchResultItem&gt;|SearchResultOfDestinyEntitySearchResultItem]]
    "results": {
        // Type: [[DestinyEntitySearchResultItem|Destiny-Definitions-DestinyEntitySearchResultItem]]:Definition[]
        "results": [
           // Type: [[DestinyEntitySearchResultItem|Destiny-Definitions-DestinyEntitySearchResultItem]]:Definition
            {
                // Type: integer:uint32
                "hash": 0,
                // Type: string
                "entityType": "",
                // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
                "displayProperties": {
                    // Type: string
                    "description": "",
                    // Type: string
                    "name": "",
                    // Type: string
                    "icon": "",
                    // Type: boolean
                    "hasIcon": false
                },
                // Type: number:double
                "weight": 0
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
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyEntitySearchResult.html#schema_Destiny-Definitions-DestinyEntitySearchResult
