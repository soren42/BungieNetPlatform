<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The collection of all items currently being sold by a specific Vendor and visible to the given character for which the request was made.

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** VendorSales

## Properties
Name | Type | Description
---- | ---- | -----------
saleItems | Dictionary&lt;integer:int32,[[DestinyVendorSaleItemComponent|Destiny-Entities-Vendors-DestinyVendorSaleItemComponent]]&gt; | The items being sold by this vendor, keyed by the vendorItemIndex of the item being sold. (because showing sale items depends on the ordering dictated by the categories being shown - see DestinyVendorCategoryComponent - this is a dictionary for quick lookup capability.)

## Example
```javascript
{
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Components-Vendors-DestinyVendorSaleItemSetComponent.html#schema_Destiny-Components-Vendors-DestinyVendorSaleItemSetComponent
