<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus.  PREVIEW: This endpoint is still in beta, and may experience rough edges.  The schema is in final form, but there may be bugs that prevent desirable operation.

* **URI:** [[/Destiny2/Stats/Leaderboards/Clans/{groupId}/|https://bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/{groupId}/]]
* **Basepath:** https://bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
groupId | integer:int64 | Yes | Group ID of the clan whose leaderboards you wish to fetch.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
maxtop | integer:int32 | No | Maximum number of top players to return. Use a large number to get entire leaderboard.
modes | string | No | List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
statid | string | No | ID of stat to return rather than returning all Leaderboard stats.

## Example
### Request
GET https://bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/{groupId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: Dictionary&lt;string,Dictionary&lt;string,[[DestinyLeaderboard|Destiny-HistoricalStats-DestinyLeaderboard]]&gt;&gt;
    "Response": {
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
        }
    },
    // Type: [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum
    "ErrorCode": 0,
    // Type: integer:int32
    "ThrottleSeconds": 0,
    // Type: string
    "ErrorStatus": "",
    // Type: string
    "Message": "",
    // Type: Dictionary&lt;string,string&gt;
    "MessageData": {
        "{string}": ""
    },
    // Type: object
}

```

## References
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetClanLeaderboards.html#operation_get_Destiny2-GetClanLeaderboards
