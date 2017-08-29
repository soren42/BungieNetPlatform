<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns recent activity history for a given character.
* **URI:** [[/Destiny/Stats/ActivityHistory/{membershipType}/{destinyMembershipId}/{characterId}/|https://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/{membershipType}/{destinyMembershipId}/{characterId}/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.
destinyMembershipId | A valid destinyMembershipId.
characterId | A valid characterId that is associated with the given account.

### Query String Parameters
Name | Description
---- | -----------
[[mode|Enums#DestinyActivityModeType]] | Game mode to return. Required.
count | The number of results to return.
page | The current page to return. Starts at 1.
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/2/4611686018428939884/2305843009214854213/?mode=ArenaChallenge
```javascript
{
    "Response": {
        "data": {
            "activities": [
                {
                    "period": "2015-05-27T09:54:13Z",
                    "activityDetails": {
                        "referenceId": 1441430567,
                        "instanceId": "2612614223",
                        "mode": 22
                    },
                    "values": {
                        "assists": {
                            "statId": "assists",
                            "basic": {
                                "value": 29,
                                "displayValue": "29"
                            }
                        },
                        "completed": {
                            "statId": "completed",
                            "basic": {
                                "value": 1,
                                "displayValue": "Yes"
                            }
                        },
                        "deaths": {
                            "statId": "deaths",
                            "basic": {
                                "value": 9,
                                "displayValue": "9"
                            }
                        },
                        "kills": {
                            "statId": "kills",
                            "basic": {
                                "value": 246,
                                "displayValue": "246"
                            }
                        },
                        "killsDeathsRatio": {
                            "statId": "killsDeathsRatio",
                            "basic": {
                                "value": 27.3333333333,
                                "displayValue": "27.33"
                            }
                        },
                        "killsDeathsAssists": {
                            "statId": "killsDeathsAssists",
                            "basic": {
                                "value": 28.9444444444,
                                "displayValue": "28.94"
                            }
                        },
                        "activityDurationSeconds": {
                            "statId": "activityDurationSeconds",
                            "basic": {
                                "value": 3283,
                                "displayValue": "54m 43s"
                            }
                        },
                        "completionReason": {
                            "statId": "completionReason",
                            "basic": {
                                "value": 0,
                                "displayValue": "0"
                            }
                        },
                        "fireTeamId": {
                            "statId": "fireTeamId",
                            "basic": {
                                "value": 0,
                                "displayValue": ""
                            }
                        },
                        "playerCount": {
                            "statId": "playerCount",
                            "basic": {
                                "value": 4,
                                "displayValue": "4"
                            }
                        }
                    }
                }
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
