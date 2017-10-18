<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyItemPerksComponent|Destiny-Entities-Items-DestinyItemPerksComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyItemPerksComponent|Destiny-Entities-Items-DestinyItemPerksComponent]]
    "data": {
        // Type: [[DestinyPerkReference|Destiny-Perks-DestinyPerkReference]][]
        "perks": [
           // Type: [[DestinyPerkReference|Destiny-Perks-DestinyPerkReference]]
            {
                // Type: [[Destiny.Definitions.DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:integer:uint32
                "perkHash": 0,
                // Type: string
                "iconPath": "",
                // Type: boolean
                "isActive": false,
                // Type: boolean
                "visible": false
            }
        ]
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyItemPerksComponent.html#schema_SingleComponentResponseOfDestinyItemPerksComponent
