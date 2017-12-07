<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyVendorComponent|Destiny-Entities-Vendors-DestinyVendorComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyVendorComponent|Destiny-Entities-Vendors-DestinyVendorComponent]]
    "data": {
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
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyVendorComponent.html#schema_SingleComponentResponseOfDestinyVendorComponent
