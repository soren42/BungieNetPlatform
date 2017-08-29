<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This Block defines the rendering data associated with the item, if any.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
weaponPatternIdentifier | string | 
weaponPatternHash | integer:uint32 | 
defaultDyes | [[DyeReference|Destiny-DyeReference]][] | 
lockedDyes | [[DyeReference|Destiny-DyeReference]][] | 
customDyes | [[DyeReference|Destiny-DyeReference]][] | 
arrangements | [[DestinyGearArtArrangementReference|Destiny-Definitions-DestinyGearArtArrangementReference]]:Definition[] | 
hasGeometry | boolean | 

## Example
```javascript
{
    // Type: string
    "weaponPatternIdentifier": "",
    // Type: integer:uint32
    "weaponPatternHash": 0,
    // Type: [[DyeReference|Destiny-DyeReference]][]
    "defaultDyes": [
       // Type: [[DyeReference|Destiny-DyeReference]]
        {
            // Type: integer:uint32
            "channelHash": 0,
            // Type: integer:uint32
            "dyeHash": 0
        }
    ],
    // Type: [[DyeReference|Destiny-DyeReference]][]
    "lockedDyes": [
       // Type: [[DyeReference|Destiny-DyeReference]]
        {
            // Type: integer:uint32
            "channelHash": 0,
            // Type: integer:uint32
            "dyeHash": 0
        }
    ],
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
    // Type: [[DestinyGearArtArrangementReference|Destiny-Definitions-DestinyGearArtArrangementReference]]:Definition[]
    "arrangements": [
       // Type: [[DestinyGearArtArrangementReference|Destiny-Definitions-DestinyGearArtArrangementReference]]:Definition
        {
            // Type: integer:uint32
            "classHash": 0,
            // Type: integer:uint32
            "artArrangementHash": 0
        }
    ],
    // Type: boolean
    "hasGeometry": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemTranslationBlockDefinition.html#schema_Destiny-Definitions-DestinyItemTranslationBlockDefinition
