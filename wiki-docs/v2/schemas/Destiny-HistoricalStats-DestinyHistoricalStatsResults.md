<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Example
```javascript
{
    "{string}": {
        // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
        "allTime": {
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
        },
        // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
        "allTimeTier1": {
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
        },
        // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
        "allTimeTier2": {
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
        },
        // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
        "allTimeTier3": {
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
        },
        // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]][]
        "daily": [
           // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]]
            {
                // Type: string:date-time
                "period": "",
                // Type: [[DestinyHistoricalStatsActivity|Destiny-HistoricalStats-DestinyHistoricalStatsActivity]]
                "activityDetails": {},
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
        ],
        // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]][]
        "monthly": [
           // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]]
            {
                // Type: string:date-time
                "period": "",
                // Type: [[DestinyHistoricalStatsActivity|Destiny-HistoricalStats-DestinyHistoricalStatsActivity]]
                "activityDetails": {},
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
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyHistoricalStatsResults.html#schema_Destiny-HistoricalStats-DestinyHistoricalStatsResults
