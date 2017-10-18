<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
period | string:date-time | Date and time for the activity.
activityDetails | [[DestinyHistoricalStatsActivity|Destiny-HistoricalStats-DestinyHistoricalStatsActivity]] | Details about the activity.
entries | [[DestinyPostGameCarnageReportEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportEntry]][] | Collection of players and their data for this activity.
teams | [[DestinyPostGameCarnageReportTeamEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportTeamEntry]][] | Collection of stats for the player in this activity.

## Example
```javascript
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
    // Type: [[DestinyPostGameCarnageReportEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportEntry]][]
    "entries": [
       // Type: [[DestinyPostGameCarnageReportEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportEntry]]
        {
            // Type: integer:int32
            "standing": 0,
            // Type: [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]
            "score": {
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
            },
            // Type: [[DestinyPlayer|Destiny-HistoricalStats-DestinyPlayer]]
            "player": {
                // Type: [[UserInfoCard|User-UserInfoCard]]
                "destinyUserInfo": {
                    // Type: string
                    "supplementalDisplayName": "",
                    // Type: string
                    "iconPath": "",
                    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                    "membershipType": 0,
                    // Type: integer:int64
                    "membershipId": 0,
                    // Type: string
                    "displayName": ""
                },
                // Type: string
                "characterClass": "",
                // Type: integer:int32
                "characterLevel": 0,
                // Type: integer:int32
                "lightLevel": 0,
                // Type: [[UserInfoCard|User-UserInfoCard]]
                "bungieNetUserInfo": {
                    // Type: string
                    "supplementalDisplayName": "",
                    // Type: string
                    "iconPath": "",
                    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                    "membershipType": 0,
                    // Type: integer:int64
                    "membershipId": 0,
                    // Type: string
                    "displayName": ""
                },
                // Type: string
                "clanName": "",
                // Type: string
                "clanTag": ""
            },
            // Type: integer:int64
            "characterId": 0,
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
            },
            // Type: [[DestinyPostGameCarnageReportExtendedData|Destiny-HistoricalStats-DestinyPostGameCarnageReportExtendedData]]
            "extended": {
                // Type: [[DestinyHistoricalWeaponStats|Destiny-HistoricalStats-DestinyHistoricalWeaponStats]][]
                "weapons": [
                   // Type: [[DestinyHistoricalWeaponStats|Destiny-HistoricalStats-DestinyHistoricalWeaponStats]]
                    {
                        // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                        "referenceId": 0,
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
        }
    ],
    // Type: [[DestinyPostGameCarnageReportTeamEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportTeamEntry]][]
    "teams": [
       // Type: [[DestinyPostGameCarnageReportTeamEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportTeamEntry]]
        {
            // Type: integer:int32
            "teamId": 0,
            // Type: [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]
            "standing": {
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
            },
            // Type: [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]
            "score": {
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
            },
            // Type: string
            "teamName": ""
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyPostGameCarnageReportData.html#schema_Destiny-HistoricalStats-DestinyPostGameCarnageReportData
