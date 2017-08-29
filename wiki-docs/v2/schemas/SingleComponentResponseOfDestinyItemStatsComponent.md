<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Generic

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyItemStatsComponent|Destiny-Entities-Items-DestinyItemStatsComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyItemStatsComponent|Destiny-Entities-Items-DestinyItemStatsComponent]]
    "data": {
        // Type: Dictionary&lt;[[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32,[[DestinyStat|Destiny-DestinyStat]]&gt;
        "stats": {
            "0": {
                // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
                "statHash": 0,
                // Type: integer:int32
                "value": 0,
                // Type: integer:int32
                "maximumValue": 0
            }
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyItemStatsComponent.html#schema_SingleComponentResponseOfDestinyItemStatsComponent
