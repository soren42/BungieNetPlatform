<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns Public information for a given Vendor.
* **URI:** [[/Destiny/Vendors/{vendorId}/|https://www.bungie.net/Platform/Destiny/Vendors/{vendorId}/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
vendorId | A valid vendorId.

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Vendors/1527174714/
```javascript
{
    "Response": {
        "data": {
            "vendorHash": 1527174714,
            "nextRefreshDate": "2015-10-14T09:00:00Z",
            "enabled": true,
            "saleItemCategories": [
                {
                    "categoryTitle": "Available Bounties",
                    "saleItems": [
                        {
                            "item": {
                                "itemHash": 837448826,
                                "bindStatus": 0,
                                "isEquipped": false,
                                "itemInstanceId": "0",
                                "itemLevel": 0,
                                "stackSize": 1,
                                "qualityLevel": 0,
                                "stats": [],
                                "canEquip": true,
                                "equipRequiredLevel": 0,
                                "unlockFlagHashRequiredToEquip": 0,
                                "cannotEquipReason": 0,
                                "damageType": 0,
                                "damageTypeNodeIndex": -1,
                                "damageTypeStepIndex": -1,
                                "talentGridHash": 0,
                                "nodes": [],
                                "useCustomDyes": false,
                                "artRegions": {},
                                "isEquipment": false,
                                "isGridComplete": false,
                                "perks": [],
                                "location": 3,
                                "transferStatus": 2,
                                "locked": false,
                                "lockable": false,
                                "objectives": [],
                                "state": 0
                            },
                            "vendorItemIndex": 93,
                            "itemStatus": 0,
                            "costs": [],
                            "requiredUnlockFlags": [],
                            "unlockStatuses": [],
                            "failureIndexes": []
                        }
                    ]
                }
            ],
            "canPurchase": false,
            "currencies": {}
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
