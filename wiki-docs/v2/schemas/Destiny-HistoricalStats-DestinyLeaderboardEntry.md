<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
rank | integer:int32 | Where this player ranks on the leaderboard. A value of 1 is the top rank.
player | [[DestinyPlayer|Destiny-HistoricalStats-DestinyPlayer]] | Identity details of the player
characterId | integer:int64 | ID of the player's best character for the reported stat.
value | [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]] | Value of the stat for this player

## Example
```javascript
{
    // Type: integer:int32
    "rank": 0,
    // Type: [[DestinyPlayer|Destiny-HistoricalStats-DestinyPlayer]]
    "player": {},
    // Type: integer:int64
    "characterId": 0,
    // Type: [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]
    "value": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyLeaderboardEntry.html#schema_Destiny-HistoricalStats-DestinyLeaderboardEntry
