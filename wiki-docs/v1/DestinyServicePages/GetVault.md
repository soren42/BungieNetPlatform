<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the contents of player's Vault.
* **URI:** [[/Destiny/{membershipType}/MyAccount/Vault/|https://www.bungie.net/Platform/Destiny/{membershipType}/MyAccount/Vault/]]
* **Method:** GET
* **Accessibility:** Private
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.
accountId | A valid destinyMembershipId.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/2/MyAccount/Vault/?accountId=4611686018428939884
```javascript
{
    "Response": {
        "data": {
            "buckets": [
                {
                    "items": [
                        {
                            "itemHash": 1096028869,
                            "bindStatus": 0,
                            "isEquipped": false,
                            "itemInstanceId": "6917529042526510940",
                            "itemLevel": 20,
                            "stackSize": 1,
                            "qualityLevel": 60,
                            "stats": [
                                {
                                    "statHash": 2391494160,
                                    "value": 30,
                                    "maximumValue": 0
                                }
                            ],
                            "primaryStat": {
                                "statHash": 3897883278,
                                "value": 402,
                                "maximumValue": 0
                            },
                            "canEquip": false,
                            "equipRequiredLevel": 20,
                            "unlockFlagHashRequiredToEquip": 3720682193,
                            "cannotEquipReason": 16,
                            "damageType": 0,
                            "damageTypeNodeIndex": -1,
                            "damageTypeStepIndex": -1,
                            "progression": {
                                "dailyProgress": 0,
                                "weeklyProgress": 0,
                                "currentProgress": 127500,
                                "level": 9,
                                "step": 0,
                                "progressToNextLevel": 0,
                                "nextLevelAt": 17000,
                                "progressionHash": 262790308
                            },
                            "talentGridHash": 1542531262,
                            "nodes": [
                                {
                                    "isActivated": false,
                                    "stepIndex": 0,
                                    "state": 0,
                                    "hidden": false,
                                    "nodeHash": 2355026416
                                }
                            ],
                            "useCustomDyes": false,
                            "artRegions": {

                            },
                            "isEquipment": true,
                            "isGridComplete": false,
                            "perks": [
                                {
                                    "iconPath": "\/common\/destiny_content\/icons\/7bae5fb01662288f1e2dbb528af9f4dc.png",
                                    "perkHash": 2152652275,
                                    "isActive": true
                                }
                            ],
                            "location": 2,
                            "transferStatus": 0,
                            "locked": false,
                            "lockable": true
                        }
                    ],
                    "bucketHash": 3003523923
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
