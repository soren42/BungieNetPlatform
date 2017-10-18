<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gender is a social construct, and as such we have definitions for Genders.  Right now there happensto only be two, but we'll see what the future holds.

## Schema
* **Schema Type:** Manifest Definition
* **Mobile Manifest:** Genders

## Properties
Name | Type | Description
---- | ---- | -----------
genderType | [[DestinyGender|Destiny-DestinyGender]]:Enum | This is a quick reference enumeration for all of the currently defined Genders.  We use the enumerationfor quicker lookups in related data, like DestinyClassDefinition.genderedClassNames.
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
hash | integer:uint32 | The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet isnot yet allowed to show it.  Sorry!

## Example
```javascript
{
    // Type: [[DestinyGender|Destiny-DestinyGender]]:Enum
    "genderType": 0,
    // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
    "displayProperties": {
        // Type: string
        "description": "",
        // Type: string
        "name": "",
        // Type: string
        "icon": "",
        // Type: boolean
        "hasIcon": false
    },
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyGenderDefinition.html#schema_Destiny-Definitions-DestinyGenderDefinition
