<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Defines a plug &quot;Category&quot; that is allowed to be plugged into a socket of this type. This should be compared against a given plug item's DestinyInventoryItemDefinition.plug.plugCategoryHash, which indicates the plug item's category.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
categoryHash | integer:uint32 | The hash identifier of the Plug Category to compare against the plug item's plug.plugCategoryHash. Note that this does NOT relate to any Definition in itself, it is only used for comparison purposes.
categoryIdentifier | string | The string identifier for the category, which is here mostly for debug purposes.

## Example
```javascript
{
    // Type: integer:uint32
    "categoryHash": 0,
    // Type: string
    "categoryIdentifier": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Sockets-DestinyPlugWhitelistEntryDefinition.html#schema_Destiny-Definitions-Sockets-DestinyPlugWhitelistEntryDefinition
