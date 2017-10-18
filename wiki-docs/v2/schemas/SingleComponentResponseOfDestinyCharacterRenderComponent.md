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
        "customization": {
            // Type: integer:uint32
            "personality": 0,
            // Type: integer:uint32
            "face": 0,
            // Type: integer:uint32
            "skinColor": 0,
            // Type: integer:uint32
            "lipColor": 0,
            // Type: integer:uint32
            "eyeColor": 0,
            // Type: integer:uint32[]
            "hairColors": [
               // Type: integer:uint32
                0
            ],
            // Type: integer:uint32[]
            "featureColors": [
               // Type: integer:uint32
                0
            ],
            // Type: integer:uint32
            "decalColor": 0,
            // Type: boolean
            "wearHelmet": false,
            // Type: integer:int32
            "hairIndex": 0,
            // Type: integer:int32
            "featureIndex": 0,
            // Type: integer:int32
            "decalIndex": 0
        },
        // Type: [[DestinyCharacterPeerView|Destiny-Character-DestinyCharacterPeerView]]
        "peerView": {
            // Type: [[DestinyItemPeerView|Destiny-Character-DestinyItemPeerView]][]
            "equipment": [
               // Type: [[DestinyItemPeerView|Destiny-Character-DestinyItemPeerView]]
                {
                    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                    "itemHash": 0,
                    // Type: [[DyeReference|Destiny-DyeReference]][]
                    "dyes": [
                       // Type: [[DyeReference|Destiny-DyeReference]]
                        {
                            // Type: integer:uint32
                            "channelHash": 0,
                            // Type: integer:uint32
                            "dyeHash": 0
                        }
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
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyCharacterRenderComponent.html#schema_SingleComponentResponseOfDestinyCharacterRenderComponent
