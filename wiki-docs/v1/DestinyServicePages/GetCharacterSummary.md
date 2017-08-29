<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns Destiny character information for the given characterId.<br/>To get a more detailed overview, see the private endpoint [[GetDestinyAccountCharacterComplete]].
* **URI:** [[/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/|https://www.bungie.net/Platform/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/]]
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
GET https://www.bungie.net/Platform/Destiny/2/Account/4611686018428939884/Character/2305843009221011538/
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
            "emblemPath": "\/common\/destiny_content\/icons\/552621dd6b31a1d088d72e640b86ebb8.jpg",
            "backgroundPath": "\/common\/destiny_content\/icons\/495a7949cf4a439ba4dc0c26ab9105c8.jpg",
            "emblemHash": 3656150980,
            "characterLevel": 34,
            "baseCharacterLevel": 20,
            "isPrestigeLevel": true,
            "percentToNextLevel": 0
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
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Stats%2fActivityHistory%2f%7bmembershipType%7d%2f%7bdestinyMembershipId%7d%2f%7bcharacterId%7d%2f
