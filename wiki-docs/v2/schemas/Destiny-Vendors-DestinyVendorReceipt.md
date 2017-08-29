<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If a character purchased an item that is refundable, a Vendor Receipt will be created on the user's Destiny Profile.These expire after a configurable period of time, but until then can be used to get refunds on items.BNet does not provide the ability to refund a purchase *yet*, but you know.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
currencyPaid | [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][] | The amount paid for the item, in terms of items that were consumed in the purchase and their quantity.
itemReceived | [[DestinyItemQuantity|Destiny-DestinyItemQuantity]] | The item that was received, and its quantity.
licenseUnlockHash | integer:uint32 | The unlock flag used to determine whether you still have the purchased item.
purchasedByCharacterId | integer:int64 | The ID of the character who made the purchase.
refundPolicy | [[DestinyVendorItemRefundPolicy|Destiny-DestinyVendorItemRefundPolicy]]:Enum | Whether you can get a refund, and what happens in order for the refund to be received.See the DestinyVendorItemRefundPolicy enum for details.
sequenceNumber | integer:int32 | The identifier of this receipt.
timeToExpiration | integer:int64 | The seconds since epoch at which this receipt is rendered invalid.
expiresOn | string:date-time | The date at which this receipt is rendered invalid.

## Example
```javascript
{
    // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
    "currencyPaid": [
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
    // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]]
    "itemReceived": {
        // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Vendors-DestinyVendorReceipt.html#schema_Destiny-Vendors-DestinyVendorReceipt
