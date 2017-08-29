<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns an item from a Vendor's inventory for a given character with metadata.
* **URI:** [[/Destiny/{membershipType}/MyAccount/Character/{characterId}/Vendor/{vendorId}/Item/{itemId}/Metadata/|https://www.bungie.net/Platform/Destiny/{membershipType}/MyAccount/Character/{characterId}/Vendor/{vendorId}/Item/{itemId}/Metadata/]]
* **Method:** GET
* **Accessibility:** Private
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.
characterId | A valid characterId that is associated with the given account.
vendorId | A valid vendorId.
itemId | A valid vendorItemIndex see [[GetVendorForCurrentCharacter]]

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/2/MyAccount/Character/2305843009221011538/Vendor/134701236/Item/15/Metadata/
```javascript
{
    "Response": {
        "data": {
            "saleItem": {
                "itemDetail": {
                    "item": {
                        "itemHash": 2121165345,
                        "bindStatus": 0,
                        "isEquipped": false,
                        "itemInstanceId": "0",
                        "itemLevel": 0,
                        "stackSize": 1,
                        "qualityLevel": 0,
                        "stats": [],
                        "canEquip": false,
                        "equipRequiredLevel": 0,
                        "unlockFlagHashRequiredToEquip": 2166136261,
                        "cannotEquipReason": 0,
                        "damageType": 0,
                        "damageTypeNodeIndex": -1,
                        "damageTypeStepIndex": -1,
                        "talentGridHash": 0,
                        "nodes": [],
                        "useCustomDyes": true,
                        "artRegions": {},
                        "isEquipment": true,
                        "isGridComplete": false,
                        "perks": [],
                        "location": 3,
                        "transferStatus": 2,
                        "locked": false,
                        "lockable": false,
                        "objectives": [],
                        "state": 0
                    },
                    "talentNodes": [],
                    "statsOnNodes": {},
                    "characterStatsToDisplay": [],
                    "materialItemHashes": [],
                    "materialQuantities": {}
                },
                "currencies": {
                    "3159615086": 19734
                },
                "vendorItemIndex": 15,
                "itemStatus": 0,
                "costs": [
                    {
                        "itemHash": 3159615086,
                        "value": 580
                    }
                ],
                "unlockStatuses": [],
                "failureIndexes": []
            },
            "itemMetadata": {},
            "otherActiveSales": []
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
