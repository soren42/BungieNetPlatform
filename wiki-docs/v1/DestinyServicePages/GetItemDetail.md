<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns information about a unique item instance associated with a character.
* **URI:** [[/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Inventory/{itemInstanceId}/|https://www.bungie.net/Platform/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Inventory/{itemInstanceId}/]]
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
itemInstanceId | A valid item instance that is in the character's inventory.

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/2/Account/4611686018428939884/Character/2305843009221011538/Inventory/6917529049922676245
```javascript
{
    "Response": {
        "data": {
            "item": {
                "itemHash": 1283021733,
                "bindStatus": 0,
                "isEquipped": false,
                "itemInstanceId": "6917529049922676245",
                "itemLevel": 24,
                "stackSize": 1,
                "qualityLevel": 60,
                "stats": [
                    {
                        "statHash": 4284893193,
                        "value": 77,
                        "maximumValue": 100
                    }
                ],
                "primaryStat": {
                    "statHash": 368428387,
                    "value": 365,
                    "maximumValue": 0
                },
                "canEquip": true,
                "equipRequiredLevel": 20,
                "unlockFlagHashRequiredToEquip": 2166136261,
                "cannotEquipReason": 0,
                "damageType": 1,
                "damageTypeNodeIndex": 0,
                "damageTypeStepIndex": 0,
                "progression": {
                    "dailyProgress": 0,
                    "weeklyProgress": 109000,
                    "currentProgress": 109000,
                    "level": 7,
                    "step": 0,
                    "progressToNextLevel": 0,
                    "nextLevelAt": 20000,
                    "progressionHash": 2958601622
                },
                "talentGridHash": 54170120,
                "nodes": [
                    {
                        "isActivated": true,
                        "stepIndex": 0,
                        "state": 10,
                        "hidden": false,
                        "nodeHash": 402641165
                    }
                ],
                "useCustomDyes": true,
                "artRegions": {
                    "3": 8,
                    "5": 0,
                    "21": 8
                },
                "isEquipment": true,
                "isGridComplete": true,
                "perks": [
                    {
                        "iconPath": "\/common\/destiny_content\/icons\/50f6d0597c7727280fe1871b0d819379.png",
                        "perkHash": 2507926095,
                        "isActive": true
                    },
                    {
                        "iconPath": "\/common\/destiny_content\/icons\/218295cebc6d079edc5eb0d95ded4372.png",
                        "perkHash": 770631416,
                        "isActive": true
                    }
                ],
                "location": 1,
                "transferStatus": 0,
                "locked": false,
                "lockable": true
            },
            "talentNodes": [
                {
                    "nodeIndex": 0,
                    "nodeHash": 402641165,
                    "state": 10,
                    "stateId": "Complete",
                    "isActivated": true,
                    "stepIndex": 0,
                    "materialsToUpgrade": [],
                    "activationGridLevel": 0,
                    "progressPercent": 100,
                    "hidden": false
                }
            ],
            "statsOnNodes": {
                "312682976": {
                    "currentNodeStats": [],
                    "nextNodeStats": [
                        {
                            "statHash": 1240592695,
                            "value": -4,
                            "maximumValue": 100
                        },
                        {
                            "statHash": 155624089,
                            "value": 7,
                            "maximumValue": 100
                        }
                    ]
                },
                "3872169477": {
                    "currentNodeStats": [],
                    "nextNodeStats": [
                        {
                            "statHash": 155624089,
                            "value": 31,
                            "maximumValue": 100
                        }
                    ]
                },
                "452419628": {
                    "currentNodeStats": [
                        {
                            "statHash": 1240592695,
                            "value": 9,
                            "maximumValue": 100
                        }
                    ],
                    "nextNodeStats": []
                },
                "1503756812": {
                    "currentNodeStats": [],
                    "nextNodeStats": [
                        {
                            "statHash": 155624089,
                            "value": -4,
                            "maximumValue": 100
                        }
                    ]
                },
                "3359939809": {
                    "currentNodeStats": [
                        {
                            "statHash": 1240592695,
                            "value": 28,
                            "maximumValue": 100
                        }
                    ],
                    "nextNodeStats": []
                },
                "2947148901": {
                    "currentNodeStats": [],
                    "nextNodeStats": [
                        {
                            "statHash": 4188031367,
                            "value": 38,
                            "maximumValue": 100
                        }
                    ]
                }
            },
            "characterStatsToDisplay": [],
            "materialItemHashes": []
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
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=%7bmembershipType%7d%2fAccount%2f%7bdestinyMembershipId%7d%2fCharacter%2f%7bcharacterId%7d%2fInventory%2f%7bitemInstanceId%7d%2f
