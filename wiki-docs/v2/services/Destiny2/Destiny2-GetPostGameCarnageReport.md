<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets the available post game carnage report for the activity ID.

* **URI:** [[/Destiny2/Stats/PostGameCarnageReport/{activityId}/|https://bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/{activityId}/]]
* **Basepath:** https://bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
activityId | integer:int64 | Yes | The ID of the activity whose PGCR is requested.

### Query String Parameters
None

## Example
### Request
GET https://bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/{activityId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyPostGameCarnageReportData|Destiny-HistoricalStats-DestinyPostGameCarnageReportData]]
    "Response": {
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
                            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetPostGameCarnageReport.html#operation_get_Destiny2-GetPostGameCarnageReport
