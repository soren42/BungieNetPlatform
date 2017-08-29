<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns all items for a given account.
* **URI:** [[/Destiny/{membershipType}/Account/{destinyMembershipId}/Items/|https://www.bungie.net/Platform/Destiny/{membershipType}/Account/{destinyMembershipId}/Items/]]
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
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
https://www.bungie.net/Platform/Destiny/2/Account/4611686018428939884/Items/
 ```javascript
{
    "url": "https:\/\/www.bungie.net\/Platform\/Destiny\/2\/Account\/4611686018428939884\/Items\/?",
    "endpoint": "\/Destiny\/{membershipType}\/Account\/{membershipId}\/Items\/",
    "uri": {
        "membershipType": "2",
        "membershipId": "4611686018428939884"
    },
    "params": []
}
{
    "Response": {
        "data": {
            "items": [
                {
                    "itemHash": 512022568,
                    "itemId": "6917529081642941722",
                    "quantity": 1,
                    "damageType": 0,
                    "damageTypeHash": 0,
                    "isGridComplete": false,
                    "transferStatus": 2,
                    "state": 0,
                    "characterIndex": 0,
                    "bucketHash": 1801258597
                }
            ],
            "characters": [
                {
                    "characterBase": {
                        "membershipId": "4611686018428939884",
                        "membershipType": 2,
                        "characterId": "2305843009234425075",
                        "dateLastPlayed": "2016-03-02T13:42:09Z",
                        "minutesPlayedThisSession": "16",
                        "minutesPlayedTotal": "57198",
                        "powerLevel": 316,
                        "raceHash": 898834093,
                        "genderHash": 2204441813,
                        "classHash": 2271682572,
                        "currentActivityHash": 0,
                        "lastCompletedStoryHash": 0,
                        "stats": {
                            "STAT_DEFENSE": {
                                "statHash": 3897883278,
                                "value": 0,
                                "maximumValue": 0
                            },
                            "STAT_INTELLECT": {
                                "statHash": 144602215,
                                "value": 339,
                                "maximumValue": 0
                            },
                            "STAT_DISCIPLINE": {
                                "statHash": 1735777505,
                                "value": 132,
                                "maximumValue": 0
                            },
                            "STAT_STRENGTH": {
                                "statHash": 4244567218,
                                "value": 172,
                                "maximumValue": 0
                            },
                            "STAT_LIGHT": {
                                "statHash": 2391494160,
                                "value": 316,
                                "maximumValue": 0
                            },
                            "STAT_ARMOR": {
                                "statHash": 392767087,
                                "value": 4,
                                "maximumValue": 0
                            },
                            "STAT_AGILITY": {
                                "statHash": 2996146975,
                                "value": 8,
                                "maximumValue": 0
                            },
                            "STAT_RECOVERY": {
                                "statHash": 1943323491,
                                "value": 5,
                                "maximumValue": 0
                            },
                            "STAT_OPTICS": {
                                "statHash": 3555269338,
                                "value": 52,
                                "maximumValue": 0
                            }
                        },
                        "customization": {
                            "personality": 2166136261,
                            "face": 2552882599,
                            "skinColor": 2808827061,
                            "lipColor": 1955118884,
                            "eyeColor": 4187018148,
                            "hairColor": 1273209244,
                            "featureColor": 2166136261,
                            "decalColor": 424152528,
                            "wearHelmet": false,
                            "hairIndex": 13,
                            "featureIndex": 0,
                            "decalIndex": 0
                        },
                        "grimoireScore": 4820,
                        "peerView": {
                            "equipment": [
                                {
                                    "itemHash": 3658182170,
                                    "dyes": []
                                }
                            ]
                        },
                        "genderType": 1,
                        "classType": 2,
                        "buildStatGroupHash": 1997970403
                    },
                    "levelProgression": {
                        "dailyProgress": 0,
                        "weeklyProgress": 0,
                        "currentProgress": 346000,
                        "level": 40,
                        "step": 0,
                        "progressToNextLevel": 0,
                        "nextLevelAt": 0,
                        "progressionHash": 1716568313
                    },
                    "emblemPath": "\/common\/destiny_content\/icons\/09d544fa46401c9f9e9026395da13d83.jpg",
                    "backgroundPath": "\/common\/destiny_content\/icons\/fb4f99e00fa3641b4d1631c906fbe0e0.jpg",
                    "emblemHash": 2267965729,
                    "characterLevel": 40,
                    "baseCharacterLevel": 40,
                    "isPrestigeLevel": false,
                    "percentToNextLevel": 0
                }
            ]
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
