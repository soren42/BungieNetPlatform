<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets aggregate historical stats organized around each character for a given account.
* **URI:** [[/Destiny/Stats/Account/{membershipType}/{destinyMembershipId}/|https://www.bungie.net/Platform/Destiny/Stats/Account/{membershipType}/{destinyMembershipId}/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.
destinyMembershipId | A valid destinyMembershipId.

### Query String Parameters
Name | Description
---- | -----------
[[groups|Enums#DestinyStatsGroupType]] | Groups of stats to include, otherwise only general stats are returned. Comma separated.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Stats/Account/2/4611686018428939884/

This response has been truncated to make it easier to see the full structure.
```javascript
{
    "Response": {
        "mergedDeletedCharacters": {
            "results": {

            },
            "merged": {

            }
        },
        "mergedAllCharacters": {
            "results": {
                "allPvE": {
                    "allTime": { // Note this is an associative array
                        "weaponKillsSuper": {
                            "statId": "weaponKillsSuper",
                            "basic": {
                                "value": 13374,
                                "displayValue": "13374"
                            },
                            "pga": {
                                "value": 3.11385331781,
                                "displayValue": "3.1"
                            }
                        }
                    }
                },
                "allPvP": {
                    "allTime": {
                    }
                }
            },
            "merged": {
                "allTime": {
                }
            }
        },
        "characters": [
            {
                "characterId": "2305843009214854213",
                "deleted": false,
                "results": {
                    "allPvE": {
                        "allTime": {
                        }
                    },
                    "allPvP": {
                        "allTime": {
                        }
                    }
                },
                "merged": {
                    "allTime": {
                    }
                }
            }
        ]
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {

    }
}
```

## References
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Stats%2fAccount%2f%7bmembershipType%7d%2f%7bdestinyMembershipId%7d%2f
