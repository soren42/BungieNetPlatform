<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Used in a number of Destiny contracts to return data about an item stack and its quantity.Can optionally return an itemInstanceId if the item is instanced - in which case, the quantity returnedwill be 1.  If it's not... uh, let me know okay?  Thanks.

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
itemHash | [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32 | The hash identifier for the item in question.  Use it to look up the item's DestinyInventoryItemDefinition.
itemInstanceId | integer:int64:nullable | If this quantity is referring to a specific instance of an item, this will have the item's instance ID.Normally, this will be null.
quantity | integer:int32 | The amount of the item needed/available depending on the context of where DestinyItemQuantity is being used.

## Example
```javascript
{
    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
    "itemHash": 0,
    // Type: integer:int64:nullable
    "itemInstanceId": 0,
    // Type: integer:int32
    "quantity": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-DestinyItemQuantity.html#schema_Destiny-DestinyItemQuantity
