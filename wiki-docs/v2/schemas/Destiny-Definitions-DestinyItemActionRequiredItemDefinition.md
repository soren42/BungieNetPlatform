<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The definition of an item and quantity required in a character's inventory in order to perform an action.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
count | integer:int32 | The minimum quantity of the item you have to have.
itemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | The hash identifier of the item you need to have. Use it to look up the DestinyInventoryItemDefinition for more info.
deleteOnAction | boolean | If true, the item/quantity will be deleted from your inventory when the action is performed. Otherwise, you'll retain these required items after the action is complete.

## Example
```javascript
{
    // Type: integer:int32
    "count": 0,
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "itemHash": 0,
    // Type: boolean
    "deleteOnAction": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemActionRequiredItemDefinition.html#schema_Destiny-Definitions-DestinyItemActionRequiredItemDefinition
