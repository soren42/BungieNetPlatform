<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
All Sockets have a &quot;Type&quot;: a set of common properties that determine when the socket allowsPlugs to be inserted, what Categories of Plugs can be inserted, and whether the socket iseven visible at all given the current game/character/account state. See DestinyInventoryItemDefinition for more information about Socketed items and Plugs.

## Schema
* **Schema Type:** Manifest Definition
* **Mobile Manifest:** SocketTypes

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | There are fields for this display data, but they appear to be unpopulated as of now.I am not sure where in the UI these would show if they even were populated, butI will continue to return this data in case it becomes useful.
insertAction | [[DestinyInsertPlugActionDefinition|Destiny-Definitions-Sockets-DestinyInsertPlugActionDefinition]]:Definition | Defines what happens when a plug is inserted into sockets of this type.
plugWhitelist | [[DestinyPlugWhitelistEntryDefinition|Destiny-Definitions-Sockets-DestinyPlugWhitelistEntryDefinition]]:Definition[] | A list of Plug &quot;Categories&quot; that are allowed to be plugged into sockets of this type. These should be compared against a given plug item's DestinyInventoryItemDefinition.plug.plugCategoryHash,which indicates the plug item's category. If the plug's category matches any whitelisted plug, or if the whitelist is empty, it is allowed to be inserted.
socketCategoryHash | integer:uint32 | 
visibility | [[DestinySocketVisibility|Destiny-DestinySocketVisibility]]:Enum | 
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
    // Type: [[DestinyInsertPlugActionDefinition|Destiny-Definitions-Sockets-DestinyInsertPlugActionDefinition]]:Definition
    "insertAction": {
        // Type: integer:int32
        "actionExecuteSeconds": 0
    },
    // Type: [[DestinyPlugWhitelistEntryDefinition|Destiny-Definitions-Sockets-DestinyPlugWhitelistEntryDefinition]]:Definition[]
    "plugWhitelist": [
       // Type: [[DestinyPlugWhitelistEntryDefinition|Destiny-Definitions-Sockets-DestinyPlugWhitelistEntryDefinition]]:Definition
        {
            // Type: integer:uint32
            "categoryHash": 0,
            // Type: string
            "categoryIdentifier": ""
        }
    ],
    // Type: integer:uint32
    "socketCategoryHash": 0,
    // Type: [[DestinySocketVisibility|Destiny-DestinySocketVisibility]]:Enum
    "visibility": 0,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Sockets-DestinySocketTypeDefinition.html#schema_Destiny-Definitions-Sockets-DestinySocketTypeDefinition
