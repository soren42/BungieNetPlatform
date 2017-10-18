<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
characterId | integer:int64 | 
deleted | boolean | 
results | Dictionary&lt;string,[[DestinyHistoricalStatsByPeriod|Destiny-HistoricalStats-DestinyHistoricalStatsByPeriod]]&gt; | 
merged | [[DestinyHistoricalStatsByPeriod|Destiny-HistoricalStats-DestinyHistoricalStatsByPeriod]] | 

## Example
```javascript
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
            },
            // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
            "allTimeTier1": {
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
            },
            // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
            "allTimeTier2": {
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
            },
            // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
            "allTimeTier3": {
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
            },
            // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]][]
            "daily": [
               // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]]
                {
                    // Type: string:date-time
                    "period": "",
                    // Type: [[DestinyHistoricalStatsActivity|Destiny-HistoricalStats-DestinyHistoricalStatsActivity]]
                    "activityDetails": {
                        // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
                        "referenceId": 0,
                        // Type: integer:int64
                        "instanceId": 0,
                        // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
                        "mode": 0,
                        // Type: [[Destiny.Definitions.DestinyActivityTypeDefinition|Destiny-Definitions-DestinyActivityTypeDefinition]]:integer:uint32
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
            ],
            // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]][]
            "monthly": [
               // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]]
                {
                    // Type: string:date-time
                    "period": "",
                    // Type: [[DestinyHistoricalStatsActivity|Destiny-HistoricalStats-DestinyHistoricalStatsActivity]]
                    "activityDetails": {
                        // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
                        "referenceId": 0,
                        // Type: integer:int64
                        "instanceId": 0,
                        // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
                        "mode": 0,
                        // Type: [[Destiny.Definitions.DestinyActivityTypeDefinition|Destiny-Definitions-DestinyActivityTypeDefinition]]:integer:uint32
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
    },
    // Type: [[DestinyHistoricalStatsByPeriod|Destiny-HistoricalStats-DestinyHistoricalStatsByPeriod]]
    "merged": {
        // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
        "allTime": {
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
        },
        // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
        "allTimeTier1": {
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
        },
        // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
        "allTimeTier2": {
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
        },
        // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
        "allTimeTier3": {
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
        },
        // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]][]
        "daily": [
           // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]]
            {
                // Type: string:date-time
                "period": "",
                // Type: [[DestinyHistoricalStatsActivity|Destiny-HistoricalStats-DestinyHistoricalStatsActivity]]
                "activityDetails": {
                    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
                    "referenceId": 0,
                    // Type: integer:int64
                    "instanceId": 0,
                    // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
                    "mode": 0,
                    // Type: [[Destiny.Definitions.DestinyActivityTypeDefinition|Destiny-Definitions-DestinyActivityTypeDefinition]]:integer:uint32
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
        ],
        // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]][]
        "monthly": [
           // Type: [[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]]
            {
                // Type: string:date-time
                "period": "",
                // Type: [[DestinyHistoricalStatsActivity|Destiny-HistoricalStats-DestinyHistoricalStatsActivity]]
                "activityDetails": {
                    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
                    "referenceId": 0,
                    // Type: integer:int64
                    "instanceId": 0,
                    // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
                    "mode": 0,
                    // Type: [[Destiny.Definitions.DestinyActivityTypeDefinition|Destiny-Definitions-DestinyActivityTypeDefinition]]:integer:uint32
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
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyHistoricalStatsPerCharacter.html#schema_Destiny-HistoricalStats-DestinyHistoricalStatsPerCharacter
