<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A minimal view of a character's equipped items, for the purpose of rendering a summaryscreen or showing the character in 3D.

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
equipment | [[DestinyItemPeerView|Destiny-Character-DestinyItemPeerView]][] | 

## Example
```javascript
{
    // Type: [[DestinyItemPeerView|Destiny-Character-DestinyItemPeerView]][]
    "equipment": [
       // Type: [[DestinyItemPeerView|Destiny-Character-DestinyItemPeerView]]
        {
            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
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
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Character-DestinyCharacterPeerView.html#schema_Destiny-Character-DestinyCharacterPeerView
