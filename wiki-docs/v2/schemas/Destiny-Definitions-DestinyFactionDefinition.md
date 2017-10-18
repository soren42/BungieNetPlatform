<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
These definitions represent Factions in the game.  Factions have ended up unilaterally beingrelated to Vendors that represent them, but that need not necessarily be the case. A Faction is really just an entity that has a related progression for which a character can gainexperience.  In Destiny 1, Dead Orbit was an example of a Faction: there happens to be a Vendor that representsDead Orbit (and indeed, DestinyVendorDefinition.factionHash defines to this relationship), butDead Orbit could theoretically exist without the Vendor that provides rewards.

## Schema
* **Schema Type:** Manifest Definition
* **Mobile Manifest:** Factions

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
progressionHash | [[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:integer:uint32 | The hash identifier for the DestinyProgressionDefinition that indicates the character's relationshipwith this faction in terms of experience and levels.
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
    // Type: [[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:integer:uint32
    "progressionHash": 0,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyFactionDefinition.html#schema_Destiny-Definitions-DestinyFactionDefinition
