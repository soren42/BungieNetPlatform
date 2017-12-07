<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:uint32,[[DestinyVendorCategoriesComponent|Destiny-Entities-Vendors-DestinyVendorCategoriesComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:uint32,[[DestinyVendorCategoriesComponent|Destiny-Entities-Vendors-DestinyVendorCategoriesComponent]]&gt;
    "data": {
        "0": {
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
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent.html#schema_DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent
