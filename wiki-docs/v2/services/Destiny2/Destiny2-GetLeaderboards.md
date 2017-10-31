<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.

* **URI:** [[/Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/Leaderboards/|https://www.bungie.net/Platform/Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/Leaderboards/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
destinyMembershipId | integer:int64 | Yes | The Destiny membershipId of the user to retrieve.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | A valid non-BungieNet membership type.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
maxtop | integer:int32 | No | Maximum number of top players to return. Use a large number to get entire leaderboard.
modes | string | No | List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
statid | string | No | ID of stat to return rather than returning all Leaderboard stats.

## Example
### Request
GET https://www.bungie.net/Platform/Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/Leaderboards/

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
                        "player": {},
                        // Type: integer:int64
                        "characterId": 0,
                        // Type: [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]
                        "value": {}
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetLeaderboards.html#operation_get_Destiny2-GetLeaderboards
