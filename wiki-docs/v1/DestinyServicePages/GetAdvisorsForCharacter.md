<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns advisor information about a given character.
* **URI:** [[/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Advisors/|https://www.bungie.net/Platform/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Advisors/]]
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
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/2/Account/4611686018428939884/Character/2305843009234425075/Advisors/

Note: Response has been truncated.
```javascript
{
    "Response": {
        "data": {
            "nextWeeklyReset": "2016-02-02T09:00:00Z",
            "nextDailyReset": "2016-01-27T09:00:00Z",
            "previousWeeklyReset": "2016-01-26T09:00:00Z",
            "previousDailyReset": "2016-01-26T09:00:00Z",
            "vendorAdvisors": {
                "1990950": {
                    "rotationAckId": "",
                    "needsAck": false,
                    "nextRefreshDate": "2016-01-27T08:00:00Z",
                    "progression": {
                        "dailyProgress": 0,
                        "weeklyProgress": 0,
                        "currentProgress": 89347,
                        "level": 36,
                        "step": 0,
                        "progressToNextLevel": 847,
                        "nextLevelAt": 2500,
                        "progressionHash": 3233510749
                    }
                }
            },
            "activityAdvisors": {
                "3645919501": {
                    "activityBundleHash": 3645919501,
                    "materialUpgrades": {
                        "activityBundleHash": 3645919501,
                        "materialItemHash": 2882093969,
                        "itemSoidsUpgradable": [
                            "6917529078306703707",
                            "6917529078753742632",
                            "6917529079424012815"
                        ]
                    }
                },
                "1733556769": {
                    "activityBundleHash": 1733556769,
                    "raidActivities": {
                        "activityBundleHash": 1733556769,
                        "raidIdentifier": "RAID_TAKEN_KING",
                        "expirationDate": "2016-02-02T09:00:00Z",
                        "tiers": [
                            {
                                "activityHash": 1733556769,
                                "stepsComplete": 0,
                                "stepsTotal": 5,
                                "steps": [
                                    {
                                        "isComplete": false
                                    },
                                    {
                                        "isComplete": false
                                    },
                                    {
                                        "isComplete": false
                                    },
                                    {
                                        "isComplete": false
                                    },
                                    {
                                        "isComplete": false
                                    }
                                ],
                                "difficultyIdentifier": "DIFFICULTY_NORMAL",
                                "activeRewardIndexes": [
                                    0
                                ]
                            },
                            {
                                "activityHash": 3534581229,
                                "stepsComplete": 0,
                                "stepsTotal": 5,
                                "steps": [
                                    {
                                        "isComplete": false
                                    },
                                    {
                                        "isComplete": false
                                    },
                                    {
                                        "isComplete": false
                                    },
                                    {
                                        "isComplete": false
                                    },
                                    {
                                        "isComplete": false
                                    }
                                ],
                                "difficultyIdentifier": "DIFFICULTY_HARD",
                                "activeRewardIndexes": [
                                    0
                                ]
                            }
                        ],
                        "iconPath": "\/common\/destiny_content\/icons\/4cf18c022cc56fae82c531ee08e27bef.png"
                    }
                }
            },
            "itemQuantities": {},
            "areOffersAvailable": false,
            "events": [],
            "bonuses": [
                {
                    "cardId": 608050,
                    "cardName": "Rumble",
                    "statName": "Match Wins",
                    "bonusName": "Activity Reward Bonus",
                    "bonusDescription": "Cloaks, marks, and bonds can now drop in this Playlist.",
                    "bonusRank": {
                        "statId": 1,
                        "rank": 1
                    },
                    "value": 7,
                    "threshold": 25,
                    "smallImage": {
                        "rect": {
                            "x": 435,
                            "y": 0,
                            "height": 145,
                            "width": 145
                        },
                        "sheetPath": "\/common\/destiny_content\/grimoire\/hr_images\/CruciblePlaylists-csprites-sm_adc495afd872738cf5a283468d547799.jpg",
                        "sheetSize": {
                            "x": 0,
                            "y": 0,
                            "height": 290,
                            "width": 1160
                        }
                    }
                }
            ],
            "factions": {
                "468098704": {
                    "factionHash": 468098704,
                    "progression": {
                        "dailyProgress": 0,
                        "weeklyProgress": 0,
                        "currentProgress": 89347,
                        "level": 36,
                        "step": 0,
                        "progressToNextLevel": 847,
                        "nextLevelAt": 2500,
                        "progressionHash": 3233510749
                    }
                }
            },
            "arena": [
                {
                    "activityHash": 1441430567,
                    "iconPath": "\/img\/destiny_content\/arena\/32_challenge.v2.png",
                    "rounds": [
                        {
                            "enemyRaceHash": 3265589059,
                            "skulls": [
                                1
                            ]
                        },
                        {
                            "enemyRaceHash": 546070638,
                            "skulls": [
                                5
                            ]
                        },
                        {
                            "enemyRaceHash": 546070638,
                            "skulls": [
                                3
                            ]
                        },
                        {
                            "enemyRaceHash": 3265589059,
                            "skulls": [
                                9
                            ]
                        },
                        {
                            "enemyRaceHash": 3265589059,
                            "skulls": [
                                10
                            ]
                        }
                    ],
                    "bossFight": false,
                    "bossSkulls": [],
                    "activeRewardIndexes": [
                        0
                    ],
                    "isCompleted": false
                }
            ],
            "quests": {
                "quests": [
                    {
                        "questHash": 3690749376,
                        "stepHash": 3813031408,
                        "stepObjectives": [
                            {
                                "objectiveHash": 1692496512,
                                "destinationHash": 0,
                                "activityHash": 0,
                                "progress": 3,
                                "hasProgress": true,
                                "isComplete": false
                            }
                        ],
                        "tracked": false,
                        "itemInstanceId": "6917529078308632143",
                        "completed": false,
                        "started": true
                    }
                ],
                "enabled": true
            },
            "armsDay": {
                "active": false,
                "startDate": "2016-01-27T09:00:00Z",
                "endDate": "2016-01-31T09:00:00Z",
                "nextStartDate": "2016-01-27T09:00:00Z",
                "canPlaceOrder": false,
                "orders": [],
                "testWeapons": [
                    {
                        "item": {
                            "itemHash": 1501850184,
                            "bindStatus": 0,
                            "isEquipped": false,
                            "itemInstanceId": "0",
                            "itemLevel": 40,
                            "stackSize": 1,
                            "qualityLevel": 0,
                            "stats": [
                                {
                                    "statHash": 4284893193,
                                    "value": 66,
                                    "maximumValue": 100
                                },
                                {
                                    "statHash": 4043523819,
                                    "value": 14,
                                    "maximumValue": 100
                                },
                                {
                                    "statHash": 1240592695,
                                    "value": 35,
                                    "maximumValue": 100
                                },
                                {
                                    "statHash": 155624089,
                                    "value": 48,
                                    "maximumValue": 100
                                },
                                {
                                    "statHash": 4188031367,
                                    "value": 52,
                                    "maximumValue": 100
                                },
                                {
                                    "statHash": 3871231066,
                                    "value": 18,
                                    "maximumValue": 100
                                }
                            ],
                            "primaryStat": {
                                "statHash": 368428387,
                                "value": 200,
                                "maximumValue": 0
                            },
                            "canEquip": true,
                            "equipRequiredLevel": 38,
                            "unlockFlagHashRequiredToEquip": 2166136261,
                            "cannotEquipReason": 0,
                            "damageType": 1,
                            "damageTypeHash": 3373582085,
                            "damageTypeNodeIndex": 3,
                            "damageTypeStepIndex": 0,
                            "progression": {
                                "dailyProgress": 0,
                                "weeklyProgress": 0,
                                "currentProgress": 0,
                                "level": 0,
                                "step": 0,
                                "progressToNextLevel": 0,
                                "nextLevelAt": 0,
                                "progressionHash": 0
                            },
                            "talentGridHash": 1288450861,
                            "nodes": [
                                {
                                    "isActivated": true,
                                    "stepIndex": 0,
                                    "state": 10,
                                    "hidden": false,
                                    "nodeHash": 0
                                },
                                {
                                    "isActivated": false,
                                    "stepIndex": 1,
                                    "state": 0,
                                    "hidden": false,
                                    "nodeHash": 1
                                },
                                {
                                    "isActivated": true,
                                    "stepIndex": 1,
                                    "state": 10,
                                    "hidden": false,
                                    "nodeHash": 2
                                },
                                {
                                    "isActivated": true,
                                    "stepIndex": 0,
                                    "state": 10,
                                    "hidden": false,
                                    "nodeHash": 3
                                }
                            ],
                            "useCustomDyes": true,
                            "artRegions": {},
                            "isEquipment": true,
                            "isGridComplete": false,
                            "perks": [],
                            "location": 3,
                            "transferStatus": 2,
                            "locked": false,
                            "lockable": false,
                            "objectives": [
                                {
                                    "objectiveHash": 1501850184,
                                    "destinationHash": 0,
                                    "activityHash": 0,
                                    "progress": 0,
                                    "hasProgress": false,
                                    "isComplete": false
                                }
                            ],
                            "state": 0
                        },
                        "vendorItemIndex": 384,
                        "itemStatus": 0,
                        "costs": [],
                        "unlockStatuses": [],
                        "failureIndexes": []
                    }
                ],
                "redemptions": {},
                "vendorHash": 570929315,
                "purchasedOrders": []
            },
            "weeklyCrucible": [
                {
                    "activityBundleHash": 492319725,
                    "expirationDate": "2016-02-02T09:00:00Z",
                    "isCompleted": false,
                    "activeRewardIndexes": [
                        0
                    ],
                    "iconPath": "\/img\/destiny_content\/advisors\/pvp_Mayhem_Rumble.png",
                    "completionCount": 0,
                    "maxCompletions": 3
                }
            ],
            "recordBooks": {
                "3192310198": {
                    "bookHash": 3192310198,
                    "records": {
                        "217055300": {
                            "recordHash": 217055300,
                            "objectives": [
                                {
                                    "objectiveHash": 2255816006,
                                    "destinationHash": 0,
                                    "activityHash": 0,
                                    "progress": 172,
                                    "hasProgress": true,
                                    "isComplete": true,
                                    "displayValue": "172"
                                }
                            ]
                        }
                    }
                }
            },
            "bounties": {
                "2286495145": {
                    "questHash": 2286495145,
                    "stepHash": 2286495145,
                    "stepObjectives": [
                        {
                            "objectiveHash": 1618231806,
                            "destinationHash": 0,
                            "activityHash": 0,
                            "progress": 1,
                            "hasProgress": true,
                            "isComplete": true
                        },
                        {
                            "objectiveHash": 3870382018,
                            "destinationHash": 0,
                            "activityHash": 0,
                            "progress": 1,
                            "hasProgress": true,
                            "isComplete": true
                        },
                        {
                            "objectiveHash": 238834486,
                            "destinationHash": 0,
                            "activityHash": 0,
                            "progress": 0,
                            "hasProgress": true,
                            "isComplete": false
                        }
                    ],
                    "tracked": false,
                    "itemInstanceId": "6917529078736324527",
                    "completed": false,
                    "started": true
                }
            }
        }
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {}
}
```

## References
