<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
image | string | 
icon | string | 
title | string | 
subtitle | string | 
dateStart | string:date-time:nullable | 
dateEnd | string:date-time:nullable | 
milestoneDetails | [[DestinyPublicMilestone|Destiny-Milestones-DestinyPublicMilestone]] | A destiny event does not necessarily have a related Milestone, but if it does the details will be returned here.
eventContent | [[DestinyMilestoneContent|Destiny-Milestones-DestinyMilestoneContent]] | A destiny event will not necessarily have milestone &quot;custom content&quot;, but if it does the details will be here.

## Example
```javascript
{
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
}

```

## References
1. https://bungie-net.github.io/multi/schema_Trending-TrendingEntryDestinyRitual.html#schema_Trending-TrendingEntryDestinyRitual
