<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Generic

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:int32,[[DestinyItemPerksComponent|Destiny-Entities-Items-DestinyItemPerksComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:int32,[[DestinyItemPerksComponent|Destiny-Entities-Items-DestinyItemPerksComponent]]&gt;
    "data": {
        "0": {
            // Type: [[DestinyPerkReference|Destiny-Perks-DestinyPerkReference]][]
            "perks": [
               // Type: [[DestinyPerkReference|Destiny-Perks-DestinyPerkReference]]
                {
                    // Type: [[DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:ManifestDefinition:integer:uint32
                    "perkHash": 0,
                    // Type: string
                    "iconPath": "",
                    // Type: boolean
                    "isActive": false,
                    // Type: boolean
                    "visible": false
                }
            ]
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfint32AndDestinyItemPerksComponent.html#schema_DictionaryComponentResponseOfint32AndDestinyItemPerksComponent
