<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
standing | integer:int32 | Standing of the player
score | [[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]] | Score of the player if available
player | [[DestinyPlayer|Destiny-HistoricalStats-DestinyPlayer]] | Identity details of the player
characterId | integer:int64 | ID of the player's character used in the activity.
values | Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt; | Collection of stats for the player in this activity.
extended | [[DestinyPostGameCarnageReportExtendedData|Destiny-HistoricalStats-DestinyPostGameCarnageReportExtendedData]] | Extended data extracted from the activity blob.

## Example
```javascript
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyPostGameCarnageReportEntry.html#schema_Destiny-HistoricalStats-DestinyPostGameCarnageReportEntry
