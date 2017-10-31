<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Sockets on an item are organized into Categories visually. You can find references to the socket category defined on an item's DestinyInventoryItemDefinition.sockets.socketCategories property. This has the display information for rendering the categories' header, and a hint for how the UI should handle showing this category.

## Schema
* **Schema Type:** Manifest Definition
* **Type:** object
* **Mobile Manifest:** SocketCategories

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
uiCategoryStyle | integer:uint32 | A string hinting to the game's UI system about how the sockets in this category should be displayed. BNet doesn't use it: it's up to you to find valid values and make your own special UI if you want to honor this category style.
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
    "uiCategoryStyle": 0,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Sockets-DestinySocketCategoryDefinition.html#schema_Destiny-Definitions-Sockets-DestinySocketCategoryDefinition
