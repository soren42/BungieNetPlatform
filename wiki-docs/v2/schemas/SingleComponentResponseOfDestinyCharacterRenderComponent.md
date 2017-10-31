<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyCharacterRenderComponent|Destiny-Entities-Characters-DestinyCharacterRenderComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyCharacterRenderComponent|Destiny-Entities-Characters-DestinyCharacterRenderComponent]]
    "data": {
        // Type: [[DyeReference|Destiny-DyeReference]][]
        "customDyes": [
           // Type: [[DyeReference|Destiny-DyeReference]]
            {
                // Type: integer:uint32
                "channelHash": 0,
                // Type: integer:uint32
                "dyeHash": 0
            }
        ],
        // Type: [[DestinyCharacterCustomization|Destiny-Character-DestinyCharacterCustomization]]
        "customization": {},
        // Type: [[DestinyCharacterPeerView|Destiny-Character-DestinyCharacterPeerView]]
        "peerView": {}
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyCharacterRenderComponent.html#schema_SingleComponentResponseOfDestinyCharacterRenderComponent
