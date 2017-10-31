<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
focusMembershipId | integer:int64:nullable | Indicate the membership ID of the account that is the focal point of the provided leaderboards.
focusCharacterId | integer:int64:nullable | Indicate the character ID of the character that is the focal point of the provided leaderboards. May be null, in which case any character from the focus membership can appear in the provided leaderboards.

## Example
```javascript
{
    // Type: integer:int64:nullable
    "focusMembershipId": 0,
    // Type: integer:int64:nullable
    "focusCharacterId": 0,
    "{string}": {
        "{string}": {
            // Type: string
            "statId": "",
            // Type: [[DestinyLeaderboardEntry|Destiny-HistoricalStats-DestinyLeaderboardEntry]][]
            "entries": [
               // Type: [[DestinyLeaderboardEntry|Destiny-HistoricalStats-DestinyLeaderboardEntry]]
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
            ]
        }
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyLeaderboardResults.html#schema_Destiny-HistoricalStats-DestinyLeaderboardResults
