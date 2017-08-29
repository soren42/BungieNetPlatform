<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the Grimoire for the currently signed in account.
* **URI:** [[/Destiny/Vanguard/Grimoire/{membershipType}/|https://www.bungie.net/Platform/Destiny/Vanguard/Grimoire/{membershipType}/]]
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
flavour | Indicates flavour stats should be included with player card data. More testing needed.
single | Return data for a single cardId.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Vanguard/Grimoire/2/?single=101005
```javascript
{
    "Response": {
        "data": {
            "score": 3480,
            "cardCollection": [
                {
                    "cardId": 101005,
                    "score": 0,
                    "points": 0
                }
            ],
            "cardsToHide": [

            ],
            "bonuses": [

            ]
        },
        "cardDefinitions": {
            "101005": {
                "cardId": 101005,
                "cardName": "Guardians",
                "cardIntro": "<b>&quot;Legends are carved across history by the brave.&quot;<\/b>",
                "cardDescription": "Guardians are warriors forged in the Traveler&#39;s Light, a final hope in a universe falling into Darkness.<br\/><br\/>\nChosen from the dead by the Traveler&#39;s Ghosts, Guardians are those rare few able to wield the Light as a weapon. For centuries they have defended the City. But that defense cannot hold forever.<br\/><br\/>\nNow, with the Darkness rising again, the time has come to retake our lost worlds. The Guardians who lead the way will save humanity - and become legend.",
                "unlockHowToText": "Unlock this card by playing Destiny.",
                "rarity": 1,
                "unlockFlagHash": 0,
                "points": 0,
                "normalResolution": {
                    "image": {
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "height": 419,
                            "width": 323
                        },
                        "sheetPath": "\/common\/destiny_content\/grimoire\/images\/Classes-csprites_d1fdb3b82ef2fccdc9619346ee0bb09e.jpg",
                        "sheetSize": {
                            "x": 0,
                            "y": 0,
                            "height": 838,
                            "width": 1292
                        }
                    },
                    "smallImage": {
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "height": 83,
                            "width": 83
                        },
                        "sheetPath": "\/common\/destiny_content\/grimoire\/images\/Classes-csprites-sm_572c6179bebaf61f87ab21b188386d01.jpg",
                        "sheetSize": {
                            "x": 0,
                            "y": 0,
                            "height": 83,
                            "width": 664
                        }
                    }
                },
                "highResolution": {
                    "image": {
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "height": 728,
                            "width": 560
                        },
                        "sheetPath": "\/common\/destiny_content\/grimoire\/hr_images\/101005_5c51debee5418264ebc94bac161f42c2.jpg",
                        "sheetSize": {
                            "x": 0,
                            "y": 0,
                            "height": 728,
                            "width": 560
                        }
                    },
                    "smallImage": {
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "height": 145,
                            "width": 145
                        },
                        "sheetPath": "\/common\/destiny_content\/grimoire\/hr_images\/Classes-csprites-sm_000c72c7cff77c1c5844ca8c813fd2c0.jpg",
                        "sheetSize": {
                            "x": 0,
                            "y": 0,
                            "height": 145,
                            "width": 1160
                        }
                    }
                }
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
