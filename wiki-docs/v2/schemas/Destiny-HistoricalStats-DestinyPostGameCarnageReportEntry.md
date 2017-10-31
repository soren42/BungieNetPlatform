<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
standing | integer:int32 | Standing of the player
score | [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]] | Score of the player if available
player | [[DestinyPlayer|Destiny-HistoricalStats-DestinyPlayer]] | Identity details of the player
characterId | integer:int64 | ID of the player's character used in the activity.
values | Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt; | Collection of stats for the player in this activity.
extended | [[DestinyPostGameCarnageReportExtendedData|Destiny-HistoricalStats-DestinyPostGameCarnageReportExtendedData]] | Extended data extracted from the activity blob.

## Example
```javascript
{
    // Type: integer:int32
    "standing": 0,
    // Type: [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]
    "score": {},
    // Type: [[DestinyPlayer|Destiny-HistoricalStats-DestinyPlayer]]
    "player": {},
    // Type: integer:int64
    "characterId": 0,
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
    },
    // Type: [[DestinyPostGameCarnageReportExtendedData|Destiny-HistoricalStats-DestinyPostGameCarnageReportExtendedData]]
    "extended": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyPostGameCarnageReportEntry.html#schema_Destiny-HistoricalStats-DestinyPostGameCarnageReportEntry
