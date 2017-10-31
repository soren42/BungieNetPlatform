<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The base item component, filled with properties that are generally useful to know in any item request or that don't feel worthwhile to put in their own component.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
itemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | The identifier for the item's definition, which is where most of the useful static information for the item can be found.
itemInstanceId | integer:int64:nullable | If the item is instanced, it will have an instance ID. Lack of an instance ID implies that the item has no distinct local qualities aside from stack size.
quantity | integer:int32 | The quantity of the item in this stack. Note that Instanced items cannot stack. If an instanced item, this value will always be 1 (as the stack has exactly one item in it)
bindStatus | [[ItemBindStatus|Destiny-ItemBindStatus]]:Enum | If the item is bound to a location, it will be specified in this enum.
location | [[ItemLocation|Destiny-ItemLocation]]:Enum | An easy reference for where the item is located. Redundant if you got the item from an Inventory, but useful when making detail calls on specific items.
bucketHash | [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32 | The hash identifier for the specific inventory bucket in which the item is located.
transferStatus | [[TransferStatuses|Destiny-TransferStatuses]]:Enum | If there is a known error state that would cause this item to not be transferable, this Flags enum will indicate all of those error states. Otherwise, it will be 0 (CanTransfer).
lockable | boolean | If the item can be locked, this will indicate that state.
state | [[ItemState|Destiny-ItemState]]:Enum | A flags enumeration indicating the states of the item: whether it's tracked or locked for example.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "itemHash": 0,
    // Type: integer:int64:nullable
    "itemInstanceId": 0,
    // Type: integer:int32
    "quantity": 0,
    // Type: [[ItemBindStatus|Destiny-ItemBindStatus]]:Enum
    "bindStatus": {},
    // Type: [[ItemLocation|Destiny-ItemLocation]]:Enum
    "location": {},
    // Type: [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32
    "bucketHash": 0,
    // Type: [[TransferStatuses|Destiny-TransferStatuses]]:Enum
    "transferStatus": {},
    // Type: boolean
    "lockable": false,
    // Type: [[ItemState|Destiny-ItemState]]:Enum
    "state": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Items-DestinyItemComponent.html#schema_Destiny-Entities-Items-DestinyItemComponent
