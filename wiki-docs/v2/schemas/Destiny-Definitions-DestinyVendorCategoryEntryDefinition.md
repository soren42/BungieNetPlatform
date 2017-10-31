<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This is the definition for a single Vendor Category, into which Sale Items are grouped.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
categoryIndex | integer:int32 | The index of the category in the original category definitions for the vendor.
categoryId | string | The string identifier of the category.
categoryHash | integer:uint32 | The hashed identifier for the category. (note that this is NOT pointing to a DestinyVendorCategoryDefinition, it's confusing but this is a sale item category in a vendor, not a categorization of vendors themselves)
quantityAvailable | integer:int32 | The amount of items that will be available when this category is shown.
showUnavailableItems | boolean | If items aren't up for sale in this category, should we still show them (greyed out)?
hideIfNoCurrency | boolean | If you don't have the currency required to buy items from this category, should the items be hidden?
hideFromRegularPurchase | boolean | True if this category doesn't allow purchases.
buyStringOverride | string | The localized string for making purchases from this category, if it is different from the vendor's string for purchasing.
disabledDescription | string | If the category is disabled, this is the localized description to show.
displayTitle | string | The localized title of the category.
overlay | [[DestinyVendorCategoryOverlayDefinition|Destiny-Definitions-DestinyVendorCategoryOverlayDefinition]]:Definition | If this category has an overlay prompt that should appear, this contains the details of that prompt.

## Example
```javascript
{
    // Type: integer:int32
    "categoryIndex": 0,
    // Type: string
    "categoryId": "",
    // Type: integer:uint32
    "categoryHash": 0,
    // Type: integer:int32
    "quantityAvailable": 0,
    // Type: boolean
    "showUnavailableItems": false,
    // Type: boolean
    "hideIfNoCurrency": false,
    // Type: boolean
    "hideFromRegularPurchase": false,
    // Type: string
    "buyStringOverride": "",
    // Type: string
    "disabledDescription": "",
    // Type: string
    "displayTitle": "",
    // Type: [[DestinyVendorCategoryOverlayDefinition|Destiny-Definitions-DestinyVendorCategoryOverlayDefinition]]:Definition
    "overlay": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyVendorCategoryEntryDefinition.html#schema_Destiny-Definitions-DestinyVendorCategoryEntryDefinition
