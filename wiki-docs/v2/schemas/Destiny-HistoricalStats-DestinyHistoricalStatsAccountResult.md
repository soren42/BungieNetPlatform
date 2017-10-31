<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
mergedDeletedCharacters | [[DestinyHistoricalStatsWithMerged|Destiny-HistoricalStats-DestinyHistoricalStatsWithMerged]] | 
mergedAllCharacters | [[DestinyHistoricalStatsWithMerged|Destiny-HistoricalStats-DestinyHistoricalStatsWithMerged]] | 
characters | [[DestinyHistoricalStatsPerCharacter|Destiny-HistoricalStats-DestinyHistoricalStatsPerCharacter]][] | 

## Example
```javascript
{
    // Type: [[DestinyHistoricalStatsWithMerged|Destiny-HistoricalStats-DestinyHistoricalStatsWithMerged]]
    "mergedDeletedCharacters": {
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
    },
    // Type: [[DestinyHistoricalStatsWithMerged|Destiny-HistoricalStats-DestinyHistoricalStatsWithMerged]]
    "mergedAllCharacters": {
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
    },
    // Type: [[DestinyHistoricalStatsPerCharacter|Destiny-HistoricalStats-DestinyHistoricalStatsPerCharacter]][]
    "characters": [
       // Type: [[DestinyHistoricalStatsPerCharacter|Destiny-HistoricalStats-DestinyHistoricalStatsPerCharacter]]
        {
            // Type: integer:int64
            "characterId": 0,
            // Type: boolean
            "deleted": false,
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
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyHistoricalStatsAccountResult.html#schema_Destiny-HistoricalStats-DestinyHistoricalStatsAccountResult
