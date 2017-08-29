<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:int32,[[DestinyVendorSaleItemComponent|Destiny-Entities-Vendors-DestinyVendorSaleItemComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:int32,[[DestinyVendorSaleItemComponent|Destiny-Entities-Vendors-DestinyVendorSaleItemComponent]]&gt;
    "data": {
        "0": {
            // Type: integer:int32
            "vendorItemIndex": 0,
            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
            "itemHash": 0,
            // Type: [[VendorItemStatus|Destiny-VendorItemStatus]]:Enum
            "saleStatus": 0,
            // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
            "costs": [
               // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]]
                {
                    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
                    "itemHash": 0,
                    // Type: integer:int64:nullable
                    "itemInstanceId": 0,
                    // Type: integer:int32
                    "quantity": 0
                }
            ],
            // Type: [[DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]]:ManifestDefinition:integer:uint32[]
            "requiredUnlocks": [
               // Type: integer:uint32
                0
            ],
            // Type: [[DestinyUnlockStatus|Destiny-DestinyUnlockStatus]][]
            "unlockStatuses": [
               // Type: [[DestinyUnlockStatus|Destiny-DestinyUnlockStatus]]
                {
                    // Type: [[DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]]:ManifestDefinition:integer:uint32
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
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent.html#schema_DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent
