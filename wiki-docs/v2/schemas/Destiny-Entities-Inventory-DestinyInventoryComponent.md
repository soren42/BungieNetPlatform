<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A list of minimal information for items in an inventory: be it a character's inventory, or a Profile's inventory.(Note that the Vault is a collection of inventory buckets in the Profile's inventory) Inventory Items returned here are in a flat list, but importantly they have a bucketHash property thatindicates the specific inventory bucket that is holding them.  These buckets constitute things like the separatesections of the Vault, the user's inventory slots, etc.  See DestinyInventoryBucketDefinition for more info.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
items | [[DestinyItemComponent|Destiny-Entities-Items-DestinyItemComponent]][] | The items in this inventory.  If you care to bucket them, use the item's bucketHash property to groupthem.

## Example
```javascript
{
    // Type: [[DestinyItemComponent|Destiny-Entities-Items-DestinyItemComponent]][]
    "items": [
       // Type: [[DestinyItemComponent|Destiny-Entities-Items-DestinyItemComponent]]
        {
            // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
            "itemHash": 0,
            // Type: integer:int64:nullable
            "itemInstanceId": 0,
            // Type: integer:int32
            "quantity": 0,
            // Type: [[ItemBindStatus|Destiny-ItemBindStatus]]:Enum
            "bindStatus": 0,
            // Type: [[ItemLocation|Destiny-ItemLocation]]:Enum
            "location": 0,
            // Type: [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32
            "bucketHash": 0,
            // Type: [[TransferStatuses|Destiny-TransferStatuses]]:Enum
            "transferStatus": 0,
            // Type: boolean
            "lockable": false,
            // Type: [[ItemState|Destiny-ItemState]]:Enum
            "state": 0
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Inventory-DestinyInventoryComponent.html#schema_Destiny-Entities-Inventory-DestinyInventoryComponent
