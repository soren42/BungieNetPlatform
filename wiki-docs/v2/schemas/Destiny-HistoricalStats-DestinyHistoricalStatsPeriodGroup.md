<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
period | string:date-time | Period for the group. If the stat periodType is day, then this will have a specific day. If the type is monthly, then this value will be the first day of the applicable month. This value is not set when the periodType is 'all time'.
activityDetails | [[DestinyHistoricalStatsActivity|Destiny-HistoricalStats-DestinyHistoricalStatsActivity]] | If the period group is for a specific activity, this property will be set.
values | Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt; | Collection of stats for the period.

## Example
```javascript
{
    // Type: string:date-time
    "period": "",
    // Type: [[DestinyHistoricalStatsActivity|Destiny-HistoricalStats-DestinyHistoricalStatsActivity]]
    "activityDetails": {},
    // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
    "values": {
        "{string}": {
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
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup.html#schema_Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup
