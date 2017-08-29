<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The list entry view for trending items.  Returns just enough to show the item on the trending page.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
weight | number:double | The weighted score of this trending item.
isFeatured | boolean | 
identifier | string | We don't know whether the identifier will be a string, a uint, or a long... so we're going to cast it all to a string.But either way, we need any trending item created to have a single unique identifier for its type.
entityType | [[TrendingEntryType|Trending-TrendingEntryType]]:Enum | An enum - unfortunately - dictating all of the possible kinds of trending items that you might get in your result set,in case you want to do custom rendering or call to get the details of the item.
displayName | string | The localized &quot;display name/article title/'primary localized identifier'&quot; of the entity.
tagline | string | If the entity has a localized tagline/subtitle/motto/whatever, that is found here.
image | string | 
startDate | string:date-time:nullable | 
endDate | string:date-time:nullable | 
link | string | 
webmVideo | string | If this is populated, the entry has a related WebM video to show.I am 100% certain I am going to regret putting this directly on TrendingEntry,but it will work so yolo
mp4Video | string | If this is populated, the entry has a related MP4 video to show.I am 100% certain I am going to regret putting this directly on TrendingEntry,but it will work so yolo
featureImage | string | If isFeatured, this image will be populated with whatever the featured image is.Note that this will likely be a very large image, so don't use it all the time.

## Example
```javascript
{
    // Type: number:double
    "weight": 0,
    // Type: boolean
    "isFeatured": false,
    // Type: string
    "identifier": "",
    // Type: [[TrendingEntryType|Trending-TrendingEntryType]]:Enum
    "entityType": 0,
    // Type: string
    "displayName": "",
    // Type: string
    "tagline": "",
    // Type: string
    "image": "",
    // Type: string:date-time:nullable
    "startDate": "",
    // Type: string:date-time:nullable
    "endDate": "",
    // Type: string
    "link": "",
    // Type: string
    "webmVideo": "",
    // Type: string
    "mp4Video": "",
    // Type: string
    "featureImage": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_Trending-TrendingEntry.html#schema_Trending-TrendingEntry
