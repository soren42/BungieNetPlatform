<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the inventory of a Destiny character.
* **URI:** [[/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Inventory/|https://www.bungie.net/Platform/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Inventory/]]
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
GET https://www.bungie.net/Platform/Destiny/2/Account/4611686018428939884/Character/2305843009221011538/Inventory/
```javascript
{
    "Response": {
        "data": {
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
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=%7bmembershipType%7d%2fAccount%2f%7bdestinyMembershipId%7d%2fCharacter%2f%7bcharacterId%7d%2fInventory%2f
