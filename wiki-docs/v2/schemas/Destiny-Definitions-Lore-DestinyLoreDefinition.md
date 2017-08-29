<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
These are definitions for in-game &quot;Lore,&quot; meant to be narrative enhancements of the game experience. DestinyInventoryItemDefinitions for interesting items point to these definitions, but nothing's stoppingyou from scraping all of these and doing something cool with them.  If they end up having cool data.

## Schema
* **Schema Type:** Definition
* **Mobile Manifest:** Lore

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
subtitle | string | 
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
    "subtitle": "",
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Lore-DestinyLoreDefinition.html#schema_Destiny-Definitions-Lore-DestinyLoreDefinition
