<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This represents an item being sold by the vendor.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
vendorItemIndex | integer:int32 | The index into the DestinyVendorDefinition.saleList. This is what we use to refer to items being sold throughout live and definition data.
itemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | The hash identifier of the item being sold (DestinyInventoryItemDefinition). Note that a vendor can sell the same item in multiple ways, so don't assume that itemHash is a unique identifier for this entity.
quantity | integer:int32 | The amount you will recieve of the item described in itemHash if you make the purchase.
failureIndexes | integer:int32[] | An list of indexes into the DestinyVendorDefinition.failureStrings array, indicating the possible failure strings that can be relevant for this item.
currencies | [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][] | This is a pre-compiled aggregation of item value and priceOverrideList, so that we have one place to check for what the purchaser must pay for the item. Use this instead of trying to piece together the price separately.
refundPolicy | [[DestinyVendorItemRefundPolicy|Destiny-DestinyVendorItemRefundPolicy]]:Enum | If this item can be refunded, this is the policy for what will be refundd, how, and in what time period.
refundTimeLimit | integer:int32 | The amount of time before refundability of the newly purchased item will expire.
creationLevels | [[DestinyItemCreationEntryLevelDefinition|Destiny-Definitions-DestinyItemCreationEntryLevelDefinition]]:Definition[] | The Default level at which the item will spawn. Almost always driven by an adjusto these days. Ideally should be singular. It's a long story how this ended up as a list, but there is always either going to be 0:1 of these entities.
displayCategoryIndex | integer:int32 | This is an index specifically into the display category, as opposed to the server-side Categories (which do not need to match or pair with each other in any way: server side categories are really just structures for common validation. Display Category will let us more easily categorize items visually)
categoryIndex | integer:int32 | The index into the DestinyVendorDefinition.categories array, so you can find the category associated with this item.
originalCategoryIndex | integer:int32 | Same as above, but for the original category indexes.
minimumLevel | integer:int32 | The minimum character level at which this item is available for sale.
maximumLevel | integer:int32 | The maximum character level at which this item is available for sale.
action | [[DestinyVendorSaleItemActionBlockDefinition|Destiny-Definitions-DestinyVendorSaleItemActionBlockDefinition]]:Definition | The action to be performed when purchasing the item, if it's not just &quot;buy&quot;.
displayCategory | string | The string identifier for the category selling this item.
inventoryBucketHash | integer:uint32 | The inventory bucket into which this item will be placed upon purchase.
visibilityScope | [[DestinyGatingScope|Destiny-DestinyGatingScope]]:Enum | The most restrictive scope that determines whether the item is available in the Vendor's inventory. See DestinyGatingScope's documentation for more information. This can be determined by Unlock gating, or by whether or not the item has purchase level requirements (minimumLevel and maximumLevel properties).
purchasableScope | [[DestinyGatingScope|Destiny-DestinyGatingScope]]:Enum | Similar to visibilityScope, it represents the most restrictive scope that determines whether the item can be purchased. It will at least be as restrictive as visibilityScope, but could be more restrictive if the item has additional purchase requirements beyond whether it is merely visible or not. See DestinyGatingScope's documentation for more information.

## Example
```javascript
{
    // Type: integer:int32
    "vendorItemIndex": 0,
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "itemHash": 0,
    // Type: integer:int32
    "quantity": 0,
    // Type: integer:int32[]
    "failureIndexes": [
       // Type: integer:int32
        0
    ],
    // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
    "currencies": [
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
    // Type: [[DestinyVendorItemRefundPolicy|Destiny-DestinyVendorItemRefundPolicy]]:Enum
    "refundPolicy": {},
    // Type: integer:int32
    "refundTimeLimit": 0,
    // Type: [[DestinyItemCreationEntryLevelDefinition|Destiny-Definitions-DestinyItemCreationEntryLevelDefinition]]:Definition[]
    "creationLevels": [
       // Type: [[DestinyItemCreationEntryLevelDefinition|Destiny-Definitions-DestinyItemCreationEntryLevelDefinition]]:Definition
        {
            // Type: integer:int32
            "level": 0
        }
    ],
    // Type: integer:int32
    "displayCategoryIndex": 0,
    // Type: integer:int32
    "categoryIndex": 0,
    // Type: integer:int32
    "originalCategoryIndex": 0,
    // Type: integer:int32
    "minimumLevel": 0,
    // Type: integer:int32
    "maximumLevel": 0,
    // Type: [[DestinyVendorSaleItemActionBlockDefinition|Destiny-Definitions-DestinyVendorSaleItemActionBlockDefinition]]:Definition
    "action": {},
    // Type: string
    "displayCategory": "",
    // Type: integer:uint32
    "inventoryBucketHash": 0,
    // Type: [[DestinyGatingScope|Destiny-DestinyGatingScope]]:Enum
    "visibilityScope": {},
    // Type: [[DestinyGatingScope|Destiny-DestinyGatingScope]]:Enum
    "purchasableScope": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyVendorItemDefinition.html#schema_Destiny-Definitions-DestinyVendorItemDefinition
