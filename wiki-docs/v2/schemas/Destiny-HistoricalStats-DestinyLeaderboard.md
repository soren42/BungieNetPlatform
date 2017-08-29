<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
statId | string | 
entries | [[DestinyLeaderboardEntry|Destiny-HistoricalStats-DestinyLeaderboardEntry]][] | 

## Example
```javascript
{
    // Type: string
    "statId": "",
    // Type: [[DestinyLeaderboardEntry|Destiny-HistoricalStats-DestinyLeaderboardEntry]][]
    "entries": [
       // Type: [[DestinyLeaderboardEntry|Destiny-HistoricalStats-DestinyLeaderboardEntry]]
        {
            // Type: integer:int32
            "rank": 0,
            // Type: [[DestinyPlayer|Destiny-HistoricalStats-DestinyPlayer]]
            "player": {
                // Type: [[UserInfoCard|User-UserInfoCard]]
                "destinyUserInfo": {
                    // Type: string
                    "supplementalDisplayName": "",
                    // Type: string
                    "iconPath": "",
                    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                    "membershipType": 0,
                    // Type: integer:int64
                    "membershipId": 0,
                    // Type: string
                    "displayName": ""
                },
                // Type: string
                "characterClass": "",
                // Type: integer:int32
                "characterLevel": 0,
                // Type: integer:int32
                "lightLevel": 0,
                // Type: [[UserInfoCard|User-UserInfoCard]]
                "bungieNetUserInfo": {
                    // Type: string
                    "supplementalDisplayName": "",
                    // Type: string
                    "iconPath": "",
                    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                    "membershipType": 0,
                    // Type: integer:int64
                    "membershipId": 0,
                    // Type: string
                    "displayName": ""
                },
                // Type: string
                "clanName": "",
                // Type: string
                "clanTag": ""
            },
            // Type: integer:int64
            "characterId": 0,
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
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyLeaderboard.html#schema_Destiny-HistoricalStats-DestinyLeaderboard
