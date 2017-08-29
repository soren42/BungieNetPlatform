<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Whether you can transfer an item, and why not if you can't.

## Schema
* **Type:** Enum
* **Format:** int32

## Enum Values
Identifier | Value | Description
---------- | ----- | -----------
CanTransfer | 0 | The item can be transferred.
ItemIsEquipped | 1 | You can't transfer the item because it is equipped on a character.
NotTransferrable | 2 | The item is defined as not transferrable in its DestinyInventoryItemDefinition.nonTransferrable property.
NoRoomInDestination | 4 | You could transfer the item, but the place you're trying to put it has run out of room!  Checkyour remaining Vault and/or character space.

## References
1. https://bungie-net.github.io/multi/schema_Destiny-TransferStatuses.html#schema_Destiny-TransferStatuses
