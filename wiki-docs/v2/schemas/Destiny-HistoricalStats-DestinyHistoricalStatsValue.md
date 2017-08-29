<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
statId | string | Unique ID for this stat
basic | [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]] | Basic stat value.
pga | [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]] | Per game average for the statistic, if applicable
weighted | [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]] | Weighted value of the stat if a weight greater than 1 has been assigned.

## Example
```javascript
{
    // Type: string
    "statId": "",
    // Type: [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]]
    "basic": {
        // Type: number:double
        "value": 0,
        // Type: string
        "displayValue": ""
    },
    // Type: [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]]
    "pga": {
        // Type: number:double
        "value": 0,
        // Type: string
        "displayValue": ""
    },
    // Type: [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]]
    "weighted": {
        // Type: number:double
        "value": 0,
        // Type: string
        "displayValue": ""
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyHistoricalStatsValue.html#schema_Destiny-HistoricalStats-DestinyHistoricalStatsValue
