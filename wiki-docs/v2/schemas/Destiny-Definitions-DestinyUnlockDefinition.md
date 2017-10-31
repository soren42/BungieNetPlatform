<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Unlock Flags are small bits (literally, a bit, as in a boolean value) that the game server uses for an extremely wide range of state checks, progress storage, and other interesting tidbits of information.

## Schema
* **Schema Type:** Manifest Definition
* **Type:** object
* **Mobile Manifest:** Unlocks

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | Sometimes, but not frequently, these unlock flags also have human readable information: usually when they are being directly tested for some requirement, in which case the string is a localized description of why the requirement check failed.
hash | integer:uint32 | The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

## Example
```javascript
{
    // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
    "displayProperties": {},
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyUnlockDefinition.html#schema_Destiny-Definitions-DestinyUnlockDefinition
