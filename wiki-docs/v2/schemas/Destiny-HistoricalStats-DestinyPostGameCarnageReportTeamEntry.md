<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
teamId | integer:int32 | Integer ID for the team.
standing | [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]] | Team's standing relative to other teams.
score | [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]] | Score earned by the team
teamName | string | Alpha or Bravo

## Example
```javascript
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyPostGameCarnageReportTeamEntry.html#schema_Destiny-HistoricalStats-DestinyPostGameCarnageReportTeamEntry
