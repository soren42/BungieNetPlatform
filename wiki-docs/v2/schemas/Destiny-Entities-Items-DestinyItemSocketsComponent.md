<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Instanced items can have sockets, which are slots on the item where plugs can be inserted. Sockets are a bit complex: be sure to examine the documentation on the DestinyInventoryItemDefinition's&quot;socket&quot; block and elsewhere on these objects for more details.

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** ItemSockets

## Properties
Name | Type | Description
---- | ---- | -----------
sockets | [[DestinyItemSocketState|Destiny-Entities-Items-DestinyItemSocketState]][] | The list of all sockets on the item, and their status information.

## Example
```javascript
{
    // Type: [[DestinyItemSocketState|Destiny-Entities-Items-DestinyItemSocketState]][]
    "sockets": [
       // Type: [[DestinyItemSocketState|Destiny-Entities-Items-DestinyItemSocketState]]
        {
            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32:nullable
            "plugHash": 0,
            // Type: boolean
            "isEnabled": false,
            // Type: integer:int32[]
            "enableFailIndexes": [
               // Type: integer:int32
                0
            ],
            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32[]
            "reusablePlugHashes": [
               // Type: integer:uint32
                0
            ]
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Items-DestinyItemSocketsComponent.html#schema_Destiny-Entities-Items-DestinyItemSocketsComponent
