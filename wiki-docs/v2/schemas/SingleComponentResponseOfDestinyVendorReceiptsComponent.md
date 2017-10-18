<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyVendorReceiptsComponent|Destiny-Entities-Profiles-DestinyVendorReceiptsComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyVendorReceiptsComponent|Destiny-Entities-Profiles-DestinyVendorReceiptsComponent]]
    "data": {
        // Type: [[DestinyVendorReceipt|Destiny-Vendors-DestinyVendorReceipt]][]
        "receipts": [
           // Type: [[DestinyVendorReceipt|Destiny-Vendors-DestinyVendorReceipt]]
            {
                // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
                "currencyPaid": [
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
                // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]]
                "itemReceived": {
                    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                    "itemHash": 0,
                    // Type: integer:int64:nullable
                    "itemInstanceId": 0,
                    // Type: integer:int32
                    "quantity": 0
                },
                // Type: integer:uint32
                "licenseUnlockHash": 0,
                // Type: integer:int64
                "purchasedByCharacterId": 0,
                // Type: [[DestinyVendorItemRefundPolicy|Destiny-DestinyVendorItemRefundPolicy]]:Enum
                "refundPolicy": 0,
                // Type: integer:int32
                "sequenceNumber": 0,
                // Type: integer:int64
                "timeToExpiration": 0,
                // Type: string:date-time
                "expiresOn": ""
            }
        ]
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyVendorReceiptsComponent.html#schema_SingleComponentResponseOfDestinyVendorReceiptsComponent
