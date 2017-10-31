<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets aggregate historical stats organized around each character for a given account. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

* **URI:** [[/Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/|https://www.bungie.net/Platform/Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/]]
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
groups | [[DestinyStatsGroupType|Destiny-HistoricalStats-Definitions-DestinyStatsGroupType]]:Enum[] | No | Groups of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals.

## Example
### Request
GET https://www.bungie.net/Platform/Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyHistoricalStatsAccountResult|Destiny-HistoricalStats-DestinyHistoricalStatsAccountResult]]
    "Response": {
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetHistoricalStatsForAccount.html#operation_get_Destiny2-GetHistoricalStatsForAccount
