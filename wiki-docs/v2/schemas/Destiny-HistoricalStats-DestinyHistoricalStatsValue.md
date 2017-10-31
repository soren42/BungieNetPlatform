<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
statId | string | Unique ID for this stat
basic | [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]] | Basic stat value.
pga | [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]] | Per game average for the statistic, if applicable
weighted | [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]] | Weighted value of the stat if a weight greater than 1 has been assigned.
activityId | integer:int64:nullable | When a stat represents the best, most, longest, fastest or some other personal best, the actual activity ID where that personal best was established is available on this property.

## Example
```javascript
{
    // Type: string
    "statId": "",
    // Type: [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]]
    "basic": {},
    // Type: [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]]
    "pga": {},
    // Type: [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]]
    "weighted": {},
    // Type: integer:int64:nullable
    "activityId": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyHistoricalStatsValue.html#schema_Destiny-HistoricalStats-DestinyHistoricalStatsValue
