<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The definition information for a specific socket on an item.This will determine how the socket behaves in-game.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
socketTypeHash | [[DestinySocketTypeDefinition|Destiny-Definitions-Sockets-DestinySocketTypeDefinition]]:ManifestDefinition:integer:uint32 | All sockets have a type, and this is the hash identifier for this particular type.Use it to look up the DestinySocketTypeDefinition: read there for more information onhow socket types affect the behavior of the socket.
singleInitialItemHash | [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32 | If a valid hash, this is the hash identifier for the DestinyInventoryItemDefinitionrepresenting the Plug that will be initially inserted into the item on item creation.Otherwise, this Socket will either start without a plug inserted, or will have one randomlyinserted.
reusablePlugItems | [[DestinyItemSocketEntryPlugItemDefinition|Destiny-Definitions-DestinyItemSocketEntryPlugItemDefinition]]:Definition[] | This is a list of pre-determined plugs that can *always* be plugged into this socket, withoutthe character having the plug in their inventory. If this list is populated, you will not be allowed to plug an arbitrary item in the socket: youwill only be able to choose from one of these reusable plugs.

## Example
```javascript
{
    // Type: [[DestinySocketTypeDefinition|Destiny-Definitions-Sockets-DestinySocketTypeDefinition]]:ManifestDefinition:integer:uint32
    "socketTypeHash": 0,
    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
    "singleInitialItemHash": 0,
    // Type: [[DestinyItemSocketEntryPlugItemDefinition|Destiny-Definitions-DestinyItemSocketEntryPlugItemDefinition]]:Definition[]
    "reusablePlugItems": [
       // Type: [[DestinyItemSocketEntryPlugItemDefinition|Destiny-Definitions-DestinyItemSocketEntryPlugItemDefinition]]:Definition
        {
            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
            "plugItemHash": 0
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemSocketEntryDefinition.html#schema_Destiny-Definitions-DestinyItemSocketEntryDefinition
