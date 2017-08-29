<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns Destiny character information with a given characterId. This endpoint is an extended version of [[GetCharacterSummary]].
* **URI:** [[/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Complete/|https://www.bungie.net/Platform/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Complete/]]
* **Method:** GET
* **Accessibility:** Private
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
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/2/Account/4611686018428939884/Character/2305843009221011538/Complete
```javascript
{
    "Response": {
        "data": {
            "characterBase": {
                "membershipId": "4611686018428939884",
                "membershipType": 2,
                "characterId": "2305843009221011538",
                "dateLastPlayed": "2015-05-25T15:35:30Z",
                "minutesPlayedThisSession": "90",
                "minutesPlayedTotal": "33654",
                "powerLevel": 34,
                "raceHash": 2803282938,
                "genderHash": 2204441813,
                "classHash": 671679327,
                "currentActivityHash": 0,
                "lastCompletedStoryHash": 0,
                "stats": {
                    "STAT_DEFENSE": {
                        "statHash": 3897883278,
                        "value": 1786,
                        "maximumValue": 0
                    },
                    "STAT_INTELLECT": {
                        "statHash": 144602215,
                        "value": 297,
                        "maximumValue": 0
                    },
                    "STAT_DISCIPLINE": {
                        "statHash": 1735777505,
                        "value": 74,
                        "maximumValue": 0
                    },
                    "STAT_STRENGTH": {
                        "statHash": 4244567218,
                        "value": 197,
                        "maximumValue": 0
                    },
                    "STAT_LIGHT": {
                        "statHash": 2391494160,
                        "value": 168,
                        "maximumValue": 0
                    },
                    "STAT_ARMOR": {
                        "statHash": 392767087,
                        "value": 8,
                        "maximumValue": 0
                    },
                    "STAT_AGILITY": {
                        "statHash": 2996146975,
                        "value": 7,
                        "maximumValue": 0
                    },
                    "STAT_RECOVERY": {
                        "statHash": 1943323491,
                        "value": 1,
                        "maximumValue": 0
                    },
                    "STAT_OPTICS": {
                        "statHash": 3555269338,
                        "value": 49,
                        "maximumValue": 0
                    }
                },
                "customization": {
                    "personality": 2166136261,
                    "face": 2695914758,
                    "skinColor": 1815484271,
                    "lipColor": 2844894625,
                    "eyeColor": 1511637752,
                    "hairColor": 2555993491,
                    "featureColor": 2166136261,
                    "decalColor": 1609827955,
                    "wearHelmet": false,
                    "hairIndex": 12,
                    "featureIndex": 0,
                    "decalIndex": 0
                },
                "grimoireScore": 3405,
                "peerView": {
                    "equipment": [
                        {
                            "itemHash": 144553853,
                            "dyes": [
                                {
                                    "channelHash": 662199250,
                                    "dyeHash": 1844830118
                                }
                            ]
                        }
                    ]
                },
                "genderType": 1,
                "classType": 1,
                "buildStatGroupHash": 3457215711
            },
            "activities": {
                "dateActivityStarted": "2015-05-25T15:30:30Z",
                "available": [
                    {
                        "activityHash": 2330516073,
                        "isNew": false,
                        "canLead": true,
                        "canJoin": true,
                        "isCompleted": false,
                        "isVisible": true
                    }
                ]
            },
            "directorNodeStates": {
                "2190037045": {
                    "1737926756": 4,
                    "752833399": 3,
                    "441808144": 4,
                    "1009484925": 4,
                    "737338014": 4,
                    "573799640": 3,
                    "1077317788": 4,
                    "2494258635": 4
                }
            },
            "visibleBookHashes": [
                2190037045,
                2206814630,
                2223592403,
                2240370044,
                2257147625,
                2273925146,
                2290702727,
                2307480368
            ],
            "defaultBookHash": 2190037045,
            "inventory": {
                "buckets": {
                    "Invisible": [
                        {
                            "items": [
                                {
                                    "itemHash": 2323518127,
                                    "bindStatus": 0,
                                    "isEquipped": false,
                                    "itemInstanceId": "0",
                                    "itemLevel": 0,
                                    "stackSize": 25,
                                    "qualityLevel": 0,
                                    "stats": [],
                                    "canEquip": false,
                                    "equipRequiredLevel": 0,
                                    "unlockFlagHashRequiredToEquip": 0,
                                    "cannotEquipReason": 0,
                                    "damageType": 0,
                                    "damageTypeNodeIndex": -1,
                                    "damageTypeStepIndex": -1,
                                    "talentGridHash": 0,
                                    "nodes": [],
                                    "useCustomDyes": false,
                                    "artRegions": {

                                    },
                                    "isEquipment": false,
                                    "isGridComplete": false,
                                    "perks": [],
                                    "location": 1,
                                    "transferStatus": 2,
                                    "locked": false,
                                    "lockable": false
                                }
                            ],
                            "bucketHash": 2422292810
                        }
                    ],
                    "Equippable": [],
                    "Item": [],
                    "Currency": []
                },
                "currencies": [
                    {
                        "itemHash": 3159615086,
                        "value": 20918
                    }
                ]
            },
            "progressions": {
                "progressions": [
                    {
                        "dailyProgress": -5,
                        "weeklyProgress": 0,
                        "currentProgress": 11,
                        "level": 0,
                        "step": 0,
                        "progressToNextLevel": 11,
                        "nextLevelAt": 50,
                        "progressionHash": 3122728759
                    }
                ],
                "levelProgression": {
                    "dailyProgress": 30221,
                    "weeklyProgress": 397956,
                    "currentProgress": 11734708,
                    "level": 146,
                    "step": 0,
                    "progressToNextLevel": 54708,
                    "nextLevelAt": 80000,
                    "progressionHash": 2030054750
                },
                "baseCharacterLevel": 20,
                "isPrestigeLevel": true,
                "factionProgressionHash": 2778795080,
                "percentToNextLevel": 0
            },
            "customDyes": [
                {
                    "channelHash": 662199250,
                    "dyeHash": 3788705414
                },
                {
                    "channelHash": 1367384683,
                    "dyeHash": 1354634343
                },
                {
                    "channelHash": 218592586,
                    "dyeHash": 3436716102
                }
            ],
            "characterLevel": 34
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
