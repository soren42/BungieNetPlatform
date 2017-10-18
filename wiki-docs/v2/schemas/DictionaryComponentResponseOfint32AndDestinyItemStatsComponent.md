<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:int32,[[DestinyItemStatsComponent|Destiny-Entities-Items-DestinyItemStatsComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:int32,[[DestinyItemStatsComponent|Destiny-Entities-Items-DestinyItemStatsComponent]]&gt;
    "data": {
        "0": {
            // Type: Dictionary&lt;[[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32,[[DestinyStat|Destiny-DestinyStat]]&gt;
            "stats": {
                "0": {
                    // Type: [[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32
                    "statHash": 0,
                    // Type: integer:int32
                    "value": 0,
                    // Type: integer:int32
                    "maximumValue": 0
                }
            }
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfint32AndDestinyItemStatsComponent.html#schema_DictionaryComponentResponseOfint32AndDestinyItemStatsComponent
