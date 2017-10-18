<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets aggregated stats for a clan using the same categories as the clan leaderboards.  PREVIEW: This endpoint is still in beta, and may experience rough edges.  The schema is in final form, but there may be bugs that prevent desirable operation.

* **URI:** [[/Destiny2/Stats/AggregateClanStats/{groupId}/|https://bungie.net/Platform/Destiny2/Stats/AggregateClanStats/{groupId}/]]
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
modes | string | No | List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.

## Example
### Request
GET https://bungie.net/Platform/Destiny2/Stats/AggregateClanStats/{groupId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyClanAggregateStat|Destiny-HistoricalStats-DestinyClanAggregateStat]][]
    "Response": [
       // Type: [[DestinyClanAggregateStat|Destiny-HistoricalStats-DestinyClanAggregateStat]]
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
    ],
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetClanAggregateStats.html#operation_get_Destiny2-GetClanAggregateStats
