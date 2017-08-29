<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns information about a Vendor for a given Destiny character with metadata.
* **URI:** [[/Destiny/{membershipType}/MyAccount/Character/{characterId}/Vendor/{vendorId}/Metadata/|https://www.bungie.net/Platform/Destiny/{membershipType}/MyAccount/Character/{characterId}/Vendor/{vendorId}/Metadata/]]
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

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/2/MyAccount/Character/2305843009221011538/Vendor/134701236/Metadata/
```javascript
{
    "Response": {
        "data": {
            "vendor": {
                "vendorHash": 134701236,
                "ackState": {
                    "needsAck": false,
                    "ackId": ""
                },
                "nextRefreshDate": "2015-10-14T08:00:00Z",
                "enabled": true,
                "saleItemCategories": [
                    {
                        "categoryTitle": "Emblems",
                        "saleItems": [
                            {
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
                            }
                        ]
                    }
                ],
                "inventoryBuckets": [],
                "canPurchase": false,
                "currencies": {
                    "3159615086": 19734,
                    "937555249": 475
                }
            },
            "featuredSaleIndexes": [],
            "itemMetadata": {
                "2121165345": {
                    "itemHash": 2121165345,
                    "images": [],
                    "videos": [],
                    "sourceItemHash": 0
                }
            },
            "relatedItemSections": []
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
