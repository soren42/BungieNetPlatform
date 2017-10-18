<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets historical stats definitions.

* **URI:** [[/Destiny2/Stats/Definition/|https://bungie.net/Platform/Destiny2/Stats/Definition/]]
* **Basepath:** https://bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
GET https://bungie.net/Platform/Destiny2/Stats/Definition/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: Dictionary&lt;string,[[Destiny.HistoricalStats.Definitions.DestinyHistoricalStatsDefinition|Destiny-HistoricalStats-Definitions-DestinyHistoricalStatsDefinition]]&gt;
    "Response": {
        "{string}": {
            // Type: string
            "statId": "",
            // Type: [[DestinyStatsGroupType|Destiny-HistoricalStats-Definitions-DestinyStatsGroupType]]:Enum
            "group": 0,
            // Type: [[PeriodType|Destiny-HistoricalStats-Definitions-PeriodType]]:Enum[]
            "periodTypes": [
               // Type: [[PeriodType|Destiny-HistoricalStats-Definitions-PeriodType]]:Enum
                0
            ],
            // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum[]
            "modes": [
               // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
                0
            ],
            // Type: [[DestinyStatsCategoryType|Destiny-HistoricalStats-Definitions-DestinyStatsCategoryType]]:Enum
            "category": 0,
            // Type: string
            "statName": "",
            // Type: string
            "statDescription": "",
            // Type: [[UnitType|Destiny-HistoricalStats-Definitions-UnitType]]:Enum
            "unitType": 0,
            // Type: string
            "iconImage": "",
            // Type: integer:int32:nullable
            "mergeMethod": 0,
            // Type: string
            "unitLabel": "",
            // Type: integer:int32
            "weight": 0,
            // Type: integer:uint32:nullable
            "medalTierHash": 0
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetHistoricalStatsDefinition.html#operation_get_Destiny2-GetHistoricalStatsDefinition
