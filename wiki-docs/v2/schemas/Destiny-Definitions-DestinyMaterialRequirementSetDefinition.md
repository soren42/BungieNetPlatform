<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represent a set of material requirements: Items that either need to be owned or need to be consumed in order to perform an action. A variety of other entities refer to these as gatekeepers and payments for actions that can be performed in game.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
materials | [[DestinyMaterialRequirement|Destiny-Definitions-DestinyMaterialRequirement]]:Definition[] | The list of all materials that are required.
hash | integer:uint32 | The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

## Example
```javascript
{
    // Type: [[DestinyMaterialRequirement|Destiny-Definitions-DestinyMaterialRequirement]]:Definition[]
    "materials": [
       // Type: [[DestinyMaterialRequirement|Destiny-Definitions-DestinyMaterialRequirement]]:Definition
        {
            // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
            "itemHash": 0,
            // Type: boolean
            "deleteOnAction": false,
            // Type: integer:int32
            "count": 0,
            // Type: boolean
            "omitFromRequirements": false
        }
    ],
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyMaterialRequirementSetDefinition.html#schema_Destiny-Definitions-DestinyMaterialRequirementSetDefinition
