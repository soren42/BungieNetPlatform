<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Raw data about the customization options chosen for a character's face and appearance. You can look up the relevant class/race/gender combo in DestinyCharacterCustomizationOptionDefinition for the character, and then look up these values within the CustomizationOptions found to pull some data about their choices. Warning: not all of that data is meaningful. Some data has useful icons. Others have nothing, and are only meant for 3D rendering purposes (which we sadly do not expose yet)

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
personality | integer:uint32 | 
face | integer:uint32 | 
skinColor | integer:uint32 | 
lipColor | integer:uint32 | 
eyeColor | integer:uint32 | 
hairColors | integer:uint32[] | 
featureColors | integer:uint32[] | 
decalColor | integer:uint32 | 
wearHelmet | boolean | 
hairIndex | integer:int32 | 
featureIndex | integer:int32 | 
decalIndex | integer:int32 | 

## Example
```javascript
{
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
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Character-DestinyCharacterCustomization.html#schema_Destiny-Character-DestinyCharacterCustomization
