<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets all activities the character has participated in together with aggregate statistics for those activities. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

* **URI:** [[/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/AggregateActivityStats/|https://www.bungie.net/Platform/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/AggregateActivityStats/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
characterId | integer:int64 | Yes | The specific character whose activities should be returned.
destinyMembershipId | integer:int64 | Yes | The Destiny membershipId of the user to retrieve.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | A valid non-BungieNet membership type.

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/AggregateActivityStats/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyAggregateActivityResults|Destiny-HistoricalStats-DestinyAggregateActivityResults]]
    "Response": {
        // Type: [[DestinyAggregateActivityStats|Destiny-HistoricalStats-DestinyAggregateActivityStats]][]
        "activities": [
           // Type: [[DestinyAggregateActivityStats|Destiny-HistoricalStats-DestinyAggregateActivityStats]]
            {
                // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
                "activityHash": 0,
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
        ]
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetDestinyAggregateActivityStats.html#operation_get_Destiny2-GetDestinyAggregateActivityStats
