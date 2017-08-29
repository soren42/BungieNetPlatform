<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets the available post game carnage report for the activity ID.
* **URI:** [[/Destiny/Stats/PostGameCarnageReport/{activityInstanceId}/|https://www.bungie.net/Platform/Destiny/Stats/PostGameCarnageReport/{activityInstanceId}/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
activityInstanceId | A valid activityInstanceId.

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Stats/PostGameCarnageReport/2612614223/

This response has been truncated to make it easier to see the full structure.
```javascript
{
    "Response": {
        "data": {
            "period": "2015-05-27T09:54:13Z",
            "activityDetails": {
                "referenceId": 1441430567,
                "instanceId": "2612614223",
                "mode": 22
            },
            "entries": [
                {
                    "standing": 0,
                    "score": {
                        "basic": {
                            "value": 0,
                            "displayValue": "0"
                        }
                    },
                    "player": {
                        "destinyUserInfo": {
                            "iconPath": "\/common\/destiny_content\/icons\/a9ac444de02308d1410af8a0c201d177.jpg",
                            "membershipType": 2,
                            "membershipId": "4611686018428939884",
                            "displayName": "lowlines"
                        },
                        "characterClass": "Titan",
                        "characterLevel": 34,
                        "bungieNetUserInfo": {
                            "iconPath": "\/img\/profile\/avatars\/bungieday_03.jpg",
                            "membershipType": 254,
                            "membershipId": "5197148",
                            "displayName": "lowlines"
                        },
                        "clanName": "Darwinites",
                        "clanTag": "DRWI"
                    },
                    "characterId": "2305843009214854213",
                    "values": { // Note this is an associative array
                        "assists": {
                            "basic": {
                                "value": 29,
                                "displayValue": "29"
                            }
                        }
                    },
                    "extended": {
                        "weapons": [
                            {
                                "referenceId": 1274330687,
                                "values": {
                                    "uniqueWeaponKills": {
                                        "basic": {
                                            "value": 42,
                                            "displayValue": "42"
                                        }
                                    },
                                    "uniqueWeaponPrecisionKills": {
                                        "basic": {
                                            "value": 0,
                                            "displayValue": "0"
                                        }
                                    },
                                    "uniqueWeaponKillsPrecisionKills": {
                                        "basic": {
                                            "value": 0,
                                            "displayValue": "0%"
                                        }
                                    }
                                }
                            }
                        ],
                        "values": { // Note this is an associative array
                            "assists": {
                                "basic": {
                                    "value": 29,
                                    "displayValue": "29"
                                }
                            }
                        }
                    }
                }
            ],
            "teams": [

            ]
        }
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
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Stats%2fPostGameCarnageReport%2f%7bactivityId%7d%2f
