<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Sockets are grouped into categories in the UI. These define which category and which sockets are under that category.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
socketCategoryHash | [[Destiny.Definitions.Sockets.DestinySocketCategoryDefinition|Destiny-Definitions-Sockets-DestinySocketCategoryDefinition]]:integer:uint32 | The hash for the Socket Category: a quick way to go get the header display information for the category. Use it to look up DestinySocketCategoryDefinition info.
socketIndexes | integer:int32[] | Use these indexes to look up the sockets in the &quot;sockets.socketEntries&quot; property on the item definition. These are the indexes under the category, in game-rendered order.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.Sockets.DestinySocketCategoryDefinition|Destiny-Definitions-Sockets-DestinySocketCategoryDefinition]]:integer:uint32
    "socketCategoryHash": 0,
    // Type: integer:int32[]
    "socketIndexes": [
       // Type: integer:int32
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemSocketCategoryDefinition.html#schema_Destiny-Definitions-DestinyItemSocketCategoryDefinition
