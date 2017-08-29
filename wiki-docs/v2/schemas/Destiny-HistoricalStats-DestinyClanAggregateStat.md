<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
mode | [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum | The id of the mode of stats (allPvp, allPvE, etc)
statId | string | The id of the stat
value | [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]] | Value of the stat for this player

## Example
```javascript
{
    // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
    "mode": 0,
    // Type: string
    "statId": "",
    // Type: [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]
    "value": {
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
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyClanAggregateStat.html#schema_Destiny-HistoricalStats-DestinyClanAggregateStat
