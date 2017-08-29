<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Information about the category and items currently sold in that category.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
categoryIndex | integer:int32 | An index into the DestinyVendorDefinition.categories property, so you can grab the display data for this category.
itemIndexes | integer:int32[] | An ordered list of indexes into items being sold in this category (DestinyVendorDefinition.itemList)which will contain more information about the items being sold themselves.  Can also be used to index intoDestinyVendorSaleItemComponent data, if you asked for that data to be returned.

## Example
```javascript
{
    // Type: integer:int32
    "categoryIndex": 0,
    // Type: integer:int32[]
    "itemIndexes": [
       // Type: integer:int32
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Vendors-DestinyVendorCategory.html#schema_Destiny-Entities-Vendors-DestinyVendorCategory
