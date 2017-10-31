<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
For now, this isn't used for much: it's a record of the recent refundable purchases that the user has made. In the future, it could be used for providing refunds/buyback via the API. Wouldn't that be fun?

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** VendorReceipts

## Properties
Name | Type | Description
---- | ---- | -----------
receipts | [[DestinyVendorReceipt|Destiny-Vendors-DestinyVendorReceipt]][] | The receipts for refundable purchases made at a vendor.

## Example
```javascript
{
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
            "itemReceived": {},
            // Type: integer:uint32
            "licenseUnlockHash": 0,
            // Type: integer:int64
            "purchasedByCharacterId": 0,
            // Type: [[DestinyVendorItemRefundPolicy|Destiny-DestinyVendorItemRefundPolicy]]:Enum
            "refundPolicy": {},
            // Type: integer:int32
            "sequenceNumber": 0,
            // Type: integer:int64
            "timeToExpiration": 0,
            // Type: string:date-time
            "expiresOn": ""
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Profiles-DestinyVendorReceiptsComponent.html#schema_Destiny-Entities-Profiles-DestinyVendorReceiptsComponent
