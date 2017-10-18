<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This is a bit of an odd duck.  Apparently, if talent nodes steps have this data, the game will go through onstep activation and alter the first Socket it finds on the item that has a type matching the givensocket type, inserting the indicated plug item.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
socketTypeHash | [[Destiny.Definitions.Sockets.DestinySocketTypeDefinition|Destiny-Definitions-Sockets-DestinySocketTypeDefinition]]:integer:uint32 | The hash identifier of the socket type to find amidst the item's sockets (the item to which thistalent grid is attached).  See DestinyInventoryItemDefinition.sockets.socketEntries to findthe socket type of sockets on the item in question.
plugItemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | The hash identifier of the plug item that will be inserted into the socket found.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.Sockets.DestinySocketTypeDefinition|Destiny-Definitions-Sockets-DestinySocketTypeDefinition]]:integer:uint32
    "socketTypeHash": 0,
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "plugItemHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyNodeSocketReplaceResponse.html#schema_Destiny-Definitions-DestinyNodeSocketReplaceResponse
