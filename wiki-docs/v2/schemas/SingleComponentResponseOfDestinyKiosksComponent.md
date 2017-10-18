<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyKiosksComponent|Destiny-Components-Kiosks-DestinyKiosksComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyKiosksComponent|Destiny-Components-Kiosks-DestinyKiosksComponent]]
    "data": {
        // Type: Dictionary&lt;[[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32,[[DestinyKioskItem|Destiny-Components-Kiosks-DestinyKioskItem]][]&gt;
        "kioskItems": {
            "0": [
               // Type: [[DestinyKioskItem|Destiny-Components-Kiosks-DestinyKioskItem]]
                {
                    // Type: integer:int32
                    "index": 0,
                    // Type: boolean
                    "canAcquire": false,
                    // Type: integer:int32[]
                    "failureIndexes": [
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
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyKiosksComponent.html#schema_SingleComponentResponseOfDestinyKiosksComponent
