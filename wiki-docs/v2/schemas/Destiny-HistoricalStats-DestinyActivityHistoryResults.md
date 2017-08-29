<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
activities | [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]][] | List of activities, the most recent activity first.

## Example
```javascript
{
    // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]][]
    "activities": [
       // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]]
        {
            // Type: string:date-time
            "period": "",
            // Type: [[DestinyHistoricalStatsActivity|Destiny-HistoricalStats-DestinyHistoricalStatsActivity]]
            "activityDetails": {
                // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
                "referenceId": 0,
                // Type: integer:int64
                "instanceId": 0,
                // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
                "mode": 0,
                // Type: [[DestinyActivityTypeDefinition|Destiny-Definitions-DestinyActivityTypeDefinition]]:ManifestDefinition:integer:uint32
                "activityTypeHashOverride": 0,
                // Type: boolean
                "isPrivate": false
            },
            // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
            "values": {
                "{string}": {
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
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyActivityHistoryResults.html#schema_Destiny-HistoricalStats-DestinyActivityHistoryResults
