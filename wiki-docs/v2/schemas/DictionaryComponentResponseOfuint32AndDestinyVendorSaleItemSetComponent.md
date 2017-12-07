<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:uint32,[[DestinyVendorSaleItemSetComponent|Destiny-Components-Vendors-DestinyVendorSaleItemSetComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:uint32,[[DestinyVendorSaleItemSetComponent|Destiny-Components-Vendors-DestinyVendorSaleItemSetComponent]]&gt;
    "data": {
        "0": {
            // Type: Dictionary&lt;integer:int32,[[DestinyVendorSaleItemComponent|Destiny-Entities-Vendors-DestinyVendorSaleItemComponent]]&gt;
            "saleItems": {
                "0": {
                    // Type: integer:int32
                    "vendorItemIndex": 0,
                    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                    "itemHash": 0,
                    // Type: integer:int32
                    "quantity": 0,
                    // Type: [[VendorItemStatus|Destiny-VendorItemStatus]]:Enum
                    "saleStatus": {},
                    // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
                    "costs": [
                       // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]]
                        {
                            // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                            "itemHash": 0,
                            // Type: integer:int64:nullable
                            "itemInstanceId": 0,
                            // Type: integer:int32
                            "quantity": 0
                        }
                    ],
                    // Type: [[Destiny.Definitions.DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]]:integer:uint32[]
                    "requiredUnlocks": [
                       // Type: integer:uint32
                        0
                    ],
                    // Type: [[DestinyUnlockStatus|Destiny-DestinyUnlockStatus]][]
                    "unlockStatuses": [
                       // Type: [[DestinyUnlockStatus|Destiny-DestinyUnlockStatus]]
                        {
                            // Type: [[Destiny.Definitions.DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]]:integer:uint32
                            "unlockHash": 0,
                            // Type: boolean
                            "isSet": false
                        }
                    ],
                    // Type: integer:int32[]
                    "failureIndexes": [
                       // Type: integer:int32
                        0
                    ]
                }
            }
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfuint32AndDestinyVendorSaleItemSetComponent.html#schema_DictionaryComponentResponseOfuint32AndDestinyVendorSaleItemSetComponent
