<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyVendorCategoriesComponent|Destiny-Entities-Vendors-DestinyVendorCategoriesComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyVendorCategoriesComponent|Destiny-Entities-Vendors-DestinyVendorCategoriesComponent]]
    "data": {
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
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyVendorCategoriesComponent.html#schema_SingleComponentResponseOfDestinyVendorCategoriesComponent
