<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns information about current daily, weekly and special events.
* **URI:** [[/Destiny/Advisors/|https://www.bungie.net/Platform/Destiny/Advisors/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Advisors
```javascript
{
    "Response": {
        "data": {
            "nightfallActivityHash": 572368820,
            "heroicStrikeHashes": [
                308091854,
                308091855,
                308091852
            ],
            "dailyChapterHashes": [
                3861480070,
                3861480069,
                3861480068
            ],
            "nightfallResetDate": "2015-06-16T09:00:00Z",
            "heroicStrikeResetDate": "2015-06-16T09:00:00Z",
            "dailyChapterResetDate": "2015-06-12T09:00:00Z",
            "dailyCrucibleHash": 2593008450,
            "dailyCrucibleResetDate": "2015-06-12T09:00:00Z",
            "nightfallRewardIndexes": [
                0
            ],
            "dailyCrucibleRewardIndexes": [
                0,
                1,
                2,
                3
            ],
            "heroicStrikeRewardIndexes": {
                "308091854": [
                    0,
                    1,
                    2
                ],
                "308091855": [
                    0,
                    1,
                    2
                ],
                "308091852": [
                    0,
                    1,
                    2
                ]
            },
            "dailyChapterRewardIndexes": {
                "3861480070": [
                    0,
                    1,
                    2
                ],
                "3861480069": [
                    2,
                    3,
                    4
                ],
                "3861480068": [
                    2,
                    3,
                    4
                ]
            },
            "arena": [
                {
                    "activityHash": 1208087916,
                    "iconPath": "\/img\/destiny_content\/arena\/32_challenge.v2.png",
                    "rounds": [
                        {
                            "enemyRaceHash": 546070638,
                            "skulls": [
                                8
                            ]
                        },
                        {
                            "enemyRaceHash": 1636291695,
                            "skulls": [
                                19
                            ]
                        },
                        {
                            "enemyRaceHash": 1636291695,
                            "skulls": [
                                4
                            ]
                        },
                        {
                            "enemyRaceHash": 1636291695,
                            "skulls": [
                                3
                            ]
                        },
                        {
                            "enemyRaceHash": 1636291695,
                            "skulls": [
                                2
                            ]
                        }
                    ],
                    "bossFight": false,
                    "bossSkulls": [

                    ],
                    "activeRewardIndexes": [
                        0
                    ],
                    "isCompleted": false
                },
                {
                    "activityHash": 3508129770,
                    "iconPath": "\/img\/destiny_content\/arena\/34_challenge.v2.png",
                    "rounds": [
                        {
                            "enemyRaceHash": 711470098,
                            "skulls": [
                                4
                            ]
                        },
                        {
                            "enemyRaceHash": 3265589059,
                            "skulls": [
                                2
                            ]
                        },
                        {
                            "enemyRaceHash": 711470098,
                            "skulls": [
                                11
                            ]
                        },
                        {
                            "enemyRaceHash": 3265589059,
                            "skulls": [
                                12
                            ]
                        },
                        {
                            "enemyRaceHash": 3265589059,
                            "skulls": [
                                3
                            ]
                        }
                    ],
                    "bossFight": false,
                    "bossSkulls": [

                    ],
                    "activeRewardIndexes": [
                        0
                    ],
                    "isCompleted": false
                },
                {
                    "activityHash": 2326253031,
                    "iconPath": "\/img\/destiny_content\/arena\/35_challenge.v2.png",
                    "rounds": [
                        {
                            "enemyRaceHash": 3265589059,
                            "skulls": [
                                3,
                                6
                            ]
                        },
                        {
                            "enemyRaceHash": 711470098,
                            "skulls": [
                                2,
                                4
                            ]
                        },
                        {
                            "enemyRaceHash": 546070638,
                            "skulls": [
                                7,
                                9
                            ]
                        },
                        {
                            "enemyRaceHash": 1636291695,
                            "skulls": [
                                8,
                                13
                            ]
                        },
                        {
                            "enemyRaceHash": 1636291695,
                            "skulls": [
                                1,
                                5
                            ]
                        }
                    ],
                    "bossFight": true,
                    "bossSkulls": [
                        10
                    ],
                    "activeRewardIndexes": [
                        0
                    ],
                    "isCompleted": false
                }
            ],
            "events": {
                "events": [
                    {
                        "eventHash": 4,
                        "eventIdentifier": "SPECIAL_EVENT_SALVAGE",
                        "expirationDate": "2015-06-16T09:00:00Z",
                        "startDate": "2015-06-09T09:00:00Z",
                        "expirationKnown": true
                    }
                ]
            },
            "nightfall": {
                "activityBundleHash": 572368820,
                "expirationDate": "2015-06-16T09:00:00Z",
                "tiers": [
                    {
                        "activityHash": 572368820,
                        "isCompleted": false,
                        "isSuccessful": false,
                        "activeRewardIndexes": [
                            0
                        ]
                    }
                ],
                "iconPath": "\/img\/theme\/destiny\/icons\/node_strike_nightfall.png"
            },
            "heroicStrike": {
                "activityBundleHash": 308091854,
                "expirationDate": "2015-06-16T09:00:00Z",
                "tiers": [
                    {
                        "activityHash": 308091854,
                        "isCompleted": false,
                        "activeRewardIndexes": [
                            0,
                            1,
                            2
                        ]
                    },
                    {
                        "activityHash": 308091855,
                        "isCompleted": false,
                        "activeRewardIndexes": [
                            0,
                            1,
                            2
                        ]
                    },
                    {
                        "activityHash": 308091852,
                        "isCompleted": false,
                        "activeRewardIndexes": [
                            0,
                            1,
                            2
                        ]
                    }
                ],
                "iconPath": "\/img\/theme\/destiny\/icons\/node_strike_featured.png"
            },
            "dailyChapter": {
                "activityBundleHash": 3861480070,
                "expirationDate": "2015-06-12T09:00:00Z",
                "isCompleted": false,
                "isLocked": false,
                "tierActivityHashes": [
                    3861480070,
                    3861480069,
                    3861480068
                ],
                "activeRewardIndexes": {
                    "3861480070": [
                        0,
                        1,
                        2
                    ],
                    "3861480069": [
                        2,
                        3,
                        4
                    ],
                    "3861480068": [
                        2,
                        3,
                        4
                    ]
                },
                "iconPath": "\/img\/theme\/destiny\/icons\/node_story_featured.png"
            },
            "dailyCrucible": {
                "activityBundleHash": 2593008450,
                "expirationDate": "2015-06-12T09:00:00Z",
                "isCompleted": false,
                "activeRewardIndexes": [
                    0,
                    1,
                    2,
                    3
                ],
                "iconPath": "\/img\/theme\/destiny\/icons\/node_pvp_featured.png"
            }
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
