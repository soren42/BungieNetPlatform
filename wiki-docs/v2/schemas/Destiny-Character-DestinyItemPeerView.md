<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Bare minimum summary information for an item, for the sake of 3D rendering the item.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
itemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | The hash identifier of the item in question. Use it to look up the DestinyInventoryItemDefinition of the item for static rendering data.
dyes | [[DyeReference|Destiny-DyeReference]][] | The list of dyes that have been applied to this item.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "itemHash": 0,
    // Type: [[DyeReference|Destiny-DyeReference]][]
    "dyes": [
       // Type: [[DyeReference|Destiny-DyeReference]]
        {
            // Type: integer:uint32
            "channelHash": 0,
            // Type: integer:uint32
            "dyeHash": 0
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Character-DestinyItemPeerView.html#schema_Destiny-Character-DestinyItemPeerView
