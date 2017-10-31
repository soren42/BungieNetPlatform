<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
period | string:date-time | Date and time for the activity.
activityDetails | [[DestinyHistoricalStatsActivity|Destiny-HistoricalStats-DestinyHistoricalStatsActivity]] | Details about the activity.
entries | [[DestinyPostGameCarnageReportEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportEntry]][] | Collection of players and their data for this activity.
teams | [[DestinyPostGameCarnageReportTeamEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportTeamEntry]][] | Collection of stats for the player in this activity.

## Example
```javascript
{
    // Type: string:date-time
    "period": "",
    // Type: [[DestinyHistoricalStatsActivity|Destiny-HistoricalStats-DestinyHistoricalStatsActivity]]
    "activityDetails": {},
    // Type: [[DestinyPostGameCarnageReportEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportEntry]][]
    "entries": [
       // Type: [[DestinyPostGameCarnageReportEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportEntry]]
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
    ],
    // Type: [[DestinyPostGameCarnageReportTeamEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportTeamEntry]][]
    "teams": [
       // Type: [[DestinyPostGameCarnageReportTeamEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportTeamEntry]]
        {
            // Type: integer:int32
            "teamId": 0,
            // Type: [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]
            "standing": {},
            // Type: [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]
            "score": {},
            // Type: string
            "teamName": ""
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyPostGameCarnageReportData.html#schema_Destiny-HistoricalStats-DestinyPostGameCarnageReportData
