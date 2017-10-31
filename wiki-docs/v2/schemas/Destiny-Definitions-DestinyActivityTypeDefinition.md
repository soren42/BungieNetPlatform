<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The definition for an Activity Type. In Destiny 2, an Activity Type represents a conceptual categorization of Activities. These are most commonly used in the game for the subtitle under Activities, but BNet uses them extensively to identify and group activities by their common properties. Unfortunately, there has been a movement away from providing the richer data in Destiny 2 that we used to get in Destiny 1 for Activity Types. For instance, Nightfalls are grouped under the same Activity Type as regular Strikes. For this reason, BNet will eventually migrate toward Activity Modes as a better indicator of activity category. But for the time being, it is still referred to in many places across our codebase.

## Schema
* **Schema Type:** Manifest Definition
* **Type:** object
* **Mobile Manifest:** ActivityTypes

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
hash | integer:uint32 | The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

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
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyActivityTypeDefinition.html#schema_Destiny-Definitions-DestinyActivityTypeDefinition
