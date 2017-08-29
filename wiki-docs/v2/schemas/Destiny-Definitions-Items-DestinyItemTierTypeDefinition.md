<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Defines the tier type of an item.  Mostly this provides human readable properties for typeslike Common, Rare, etc... It also provides some base data for infusion that could be useful.

## Schema
* **Type:** Definition
* **Mobile Manifest:** ItemTierTypes

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
infusionProcess | [[DestinyItemTierTypeInfusionBlock|Destiny-Definitions-Items-DestinyItemTierTypeInfusionBlock]]:Definition | If this tier defines infusion properties, they will be contained here.
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
    // Type: [[DestinyItemTierTypeInfusionBlock|Destiny-Definitions-Items-DestinyItemTierTypeInfusionBlock]]:Definition
    "infusionProcess": {
        // Type: number:float
        "baseQualityTransferRatio": 0,
        // Type: integer:int32
        "minimumQualityIncrement": 0
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
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Items-DestinyItemTierTypeDefinition.html#schema_Destiny-Definitions-Items-DestinyItemTierTypeDefinition
