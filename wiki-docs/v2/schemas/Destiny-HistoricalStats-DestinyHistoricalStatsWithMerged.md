<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
results | Dictionary&lt;string,[[DestinyHistoricalStatsByPeriod|Destiny-HistoricalStats-DestinyHistoricalStatsByPeriod]]&gt; | 
merged | [[DestinyHistoricalStatsByPeriod|Destiny-HistoricalStats-DestinyHistoricalStatsByPeriod]] | 

## Example
```javascript
{
    // Type: Dictionary&lt;string,[[DestinyHistoricalStatsByPeriod|Destiny-HistoricalStats-DestinyHistoricalStatsByPeriod]]&gt;
    "results": {
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
    },
    // Type: [[DestinyHistoricalStatsByPeriod|Destiny-HistoricalStats-DestinyHistoricalStatsByPeriod]]
    "merged": {
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
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyHistoricalStatsWithMerged.html#schema_Destiny-HistoricalStats-DestinyHistoricalStatsWithMerged
