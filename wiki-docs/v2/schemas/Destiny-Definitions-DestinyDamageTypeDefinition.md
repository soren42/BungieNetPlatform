<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
All damage types that are possible in the game are defined here, along with localized info and icons as needed.

## Schema
* **Schema Type:** Definition
* **Mobile Manifest:** DamageTypes

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | The description of the damage type, icon etc...
transparentIconPath | string | A variant of the icon that is transparent and colorless.
showIcon | boolean | If TRUE, the game shows this damage type's icon.  Otherwise, it doesn't.  Whether you show it or not is up to you.
enumValue | [[DamageType|Destiny-DamageType]]:Enum | We have an enumeration for damage types for quick reference.  This is the current definition's damage type enum value.
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
    "transparentIconPath": "",
    // Type: boolean
    "showIcon": false,
    // Type: [[DamageType|Destiny-DamageType]]:Enum
    "enumValue": 0,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyDamageTypeDefinition.html#schema_Destiny-Definitions-DestinyDamageTypeDefinition
