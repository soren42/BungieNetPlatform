<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The status of a given item's socket.  (which plug is inserted, if any: whether it is enabled, what &quot;reusable&quot;plugs can be inserted, etc...)

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
plugHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32:nullable | The currently active plug, if any. Note that, because all plugs are statically defined, its effect on stats and perks can bestatically determined using the plug item's definition.  The stats and perks can be taken at facevalue on the plug item as the stats and perks it will provide to the user/item.
isEnabled | boolean | Even if a plug is inserted, it doesn't mean it's enabled. This flag indicates whether the plug is active and providing its benefits.
enableFailIndexes | integer:int32[] | If a plug is inserted but not enabled, this will be populated with indexes into the plug item definition's plug.enabledRulesproperty, so that you can show the reasons why it is not enabled.
reusablePlugHashes | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32[] | If the item supports reusable plugs, this is the list of plug item hashes that are currentlyallowed to be used for this socket.  (sometimes restrictions may cause reusable plugs defined on the item definition to not be valid, so you should trust the instanced reusablePlugHashes listrather than the definition's list) A Reusable Plug is a plug that you can *always* insert into this socket, regardless of whether or notyou have the plug in your inventory.  In practice, a socket will *either* have reusable plugs *or*it will allow for plugs in your inventory to be inserted.  See DestinyInventoryItemDefinition.socketfor more info.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32:nullable
    "plugHash": 0,
    // Type: boolean
    "isEnabled": false,
    // Type: integer:int32[]
    "enableFailIndexes": [
       // Type: integer:int32
        0
    ],
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32[]
    "reusablePlugHashes": [
       // Type: integer:uint32
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Items-DestinyItemSocketState.html#schema_Destiny-Entities-Items-DestinyItemSocketState
