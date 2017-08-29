<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
In Destiny, &quot;Races&quot; are really more like &quot;Species&quot;.  Sort of.  I mean, are the Awoken a separate species fromhumans?  I'm not sure.  But either way, they're defined here.  You'll see Exo, Awoken, and Human as examplesof these Species.  Players will choose one for their character.

## Schema
* **Schema Type:** Definition
* **Mobile Manifest:** Races

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
raceType | [[DestinyRace|Destiny-DestinyRace]]:Enum | An enumeration defining the existing, known Races/Species for player characters.  This valuewill be the enum value matching this definition.
genderedRaceNames | Dictionary&lt;[[DestinyGender|Destiny-DestinyGender]]:Enum,string&gt; | A localized string referring to the singular form of the Race's name when referred to in gendered form.Keyed by the DestinyGender.
hash | integer:uint32 | The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet isnot yet allowed to show it.  Sorry!

## Example
```javascript
{
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
    // Type: [[DestinyRace|Destiny-DestinyRace]]:Enum
    "raceType": 0,
    // Type: Dictionary&lt;[[DestinyGender|Destiny-DestinyGender]]:Enum,string&gt;
    "genderedRaceNames": {
        "0": ""
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
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyRaceDefinition.html#schema_Destiny-Definitions-DestinyRaceDefinition
