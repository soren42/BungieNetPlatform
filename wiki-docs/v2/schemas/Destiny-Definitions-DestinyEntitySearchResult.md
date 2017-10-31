<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The results of a search for Destiny content. This will be improved on over time, I've been doing some experimenting to see what might be useful.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
suggestedWords | string[] | A list of suggested words that might make for better search results, based on the text searched for.
results | [[SearchResultOfDestinyEntitySearchResultItem|SearchResultOfDestinyEntitySearchResultItem]] | The items found that are matches/near matches for the searched-for term, sorted by something vaguely resembling &quot;relevance&quot;. Hopefully this will get better in the future.

## Example
```javascript
{
    // Type: string[]
    "suggestedWords": [
       // Type: string
        ""
    ],
    // Type: [[SearchResultOfDestinyEntitySearchResultItem|SearchResultOfDestinyEntitySearchResultItem]]
    "results": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyEntitySearchResult.html#schema_Destiny-Definitions-DestinyEntitySearchResult
