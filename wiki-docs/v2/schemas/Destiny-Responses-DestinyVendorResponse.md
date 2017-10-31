<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A response containing all of the components for a vendor.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
vendor | [[SingleComponentResponseOfDestinyVendorComponent|SingleComponentResponseOfDestinyVendorComponent]] | The base properties of the vendor. COMPONENT TYPE: Vendors
categories | [[SingleComponentResponseOfDestinyVendorCategoriesComponent|SingleComponentResponseOfDestinyVendorCategoriesComponent]] | Categories that the vendor has available, and references to the sales therein. COMPONENT TYPE: VendorCategories
sales | [[DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent|DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent]] | Sales, keyed by the vendorItemIndex of the item being sold. COMPONENT TYPE: VendorSales
items | [[DestinyItemComponentSetOfint32|DestinyItemComponentSetOfint32]] | Item components, keyed by the vendorItemIndex of the active sale items. COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]

## Example
```javascript
{
    // Type: [[SingleComponentResponseOfDestinyVendorComponent|SingleComponentResponseOfDestinyVendorComponent]]
    "vendor": {},
    // Type: [[SingleComponentResponseOfDestinyVendorCategoriesComponent|SingleComponentResponseOfDestinyVendorCategoriesComponent]]
    "categories": {},
    // Type: [[DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent|DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent]]
    "sales": {},
    // Type: [[DestinyItemComponentSetOfint32|DestinyItemComponentSetOfint32]]
    "items": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Responses-DestinyVendorResponse.html#schema_Destiny-Responses-DestinyVendorResponse
