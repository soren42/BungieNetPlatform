<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Aggregations of multiple progressions. These are used to apply rewards to multiple progressionsat once.  They can sometimes have human readable data as well, but only extremely sporadically.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | Infrequently defined in practice.  Defer to the individual progressions' display properties.
displayUnits | string | The localized unit of measurement for progression across the progressions defined in thismapping.  Unfortunately, this is very infrequently defined.  Defer to the individualprogressions' display units.
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
    // Type: string
    "displayUnits": "",
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyProgressionMappingDefinition.html#schema_Destiny-Definitions-DestinyProgressionMappingDefinition
