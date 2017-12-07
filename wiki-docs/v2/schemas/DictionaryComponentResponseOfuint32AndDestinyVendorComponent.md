<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:uint32,[[DestinyVendorComponent|Destiny-Entities-Vendors-DestinyVendorComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:uint32,[[DestinyVendorComponent|Destiny-Entities-Vendors-DestinyVendorComponent]]&gt;
    "data": {
        "0": {
            // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32
            "vendorHash": 0,
            // Type: string:date-time
            "nextRefreshDate": "",
            // Type: boolean
            "enabled": false,
            // Type: boolean
            "canPurchase": false,
            // Type: [[DestinyProgression|Destiny-DestinyProgression]]
            "progression": {}
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfuint32AndDestinyVendorComponent.html#schema_DictionaryComponentResponseOfuint32AndDestinyVendorComponent
