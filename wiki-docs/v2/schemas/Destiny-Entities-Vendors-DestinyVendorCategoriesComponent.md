<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A vendor can have many categories of items that they sell. This component will return the category information for available items, as well as the index into those items in the user's sale item list. Note that, since both the category and items are indexes, this data is Content Version dependent. Be sure to check that your content is up to date before using this data. This is an unfortunate, but permanent, limitation of Vendor data.

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** VendorCategories

## Properties
Name | Type | Description
---- | ---- | -----------
categories | [[DestinyVendorCategory|Destiny-Entities-Vendors-DestinyVendorCategory]][] | The list of categories for items that the vendor sells, in rendering order.

## Example
```javascript
{
    // Type: [[DestinyVendorCategory|Destiny-Entities-Vendors-DestinyVendorCategory]][]
    "categories": [
       // Type: [[DestinyVendorCategory|Destiny-Entities-Vendors-DestinyVendorCategory]]
        {
            // Type: integer:int32
            "categoryIndex": 0,
            // Type: integer:int32[]
            "itemIndexes": [
               // Type: integer:int32
                0
            ]
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Vendors-DestinyVendorCategoriesComponent.html#schema_Destiny-Entities-Vendors-DestinyVendorCategoriesComponent
