<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
An Inventory (be it Character or Profile level) is comprised of many Buckets.  An example ofa bucket is &quot;Primary Weapons&quot;, where all of the primary weapons on a character are gathered togetherinto a single visual element in the UI: a subset of the inventory that has a limited number of slots, andin this case also has an associated Equipment Slot for equipping an item in the bucket. Item definitions declare what their &quot;default&quot; bucket is (DestinyInventoryItemDefinition.inventory.bucketTypeHash),and Item instances will tell you which bucket they are currently residing in (DestinyItemComponent.bucketHash).You can use this information along with the DestinyInventoryBucketDefinition to show these items grouped bybucket. You cannot transfer an item to a bucket that is not its Default without going through a Vendor's &quot;accepted items&quot;(DestinyVendorDefinition.acceptedItems).  This is how transfer functionality like the Vault is implemented, as afeature of a Vendor.  See the vendor's acceptedItems property for more details.

## Schema
* **Type:** Definition
* **Mobile Manifest:** InventoryBuckets

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
scope | [[BucketScope|Destiny-BucketScope]]:Enum | Where the bucket is found.  0 = Character, 1 = Account
category | [[BucketCategory|Destiny-BucketCategory]]:Enum | An enum value for what items can be found in the bucket.  See the BucketCategory enumfor more details.
bucketOrder | integer:int32 | Use this property to provide a quick-and-dirty recommended ordering for buckets in the UI.Most UIs will likely want to forsake this for something more custom and manual.
itemCount | integer:int32 | The maximum # of item &quot;slots&quot; in a bucket.  A slot is a given combination of item + quantity. For instance, a Weapon will always take up a single slot, and always have a quantity of 1.But a material could take up only a single slot with hundreds of quantity.
location | [[ItemLocation|Destiny-ItemLocation]]:Enum | Sometimes, inventory buckets represent conceptual &quot;locations&quot; in the game that might not be expected.This value indicates the conceptual location of the bucket, regardless of where it is actuallycontained on the character/account. See ItemLocation for details. Note that location includes the Vault and the Postmaster (both of whom being just inventory buckets with additional actions that can be performed on them through a Vendor)
hasTransferDestination | boolean | If TRUE, there is at least one Vendor that can transfer items to/from this bucket.  See the DestinyVendorDefinition'sacceptedItems property for more information on how transferring works.
enabled | boolean | If True, this bucket is enabled.  Disabled buckets may include buckets that were included for test purposes, orthat were going to be used but then were abandoned but never removed from content *cough*.
fifo | boolean | if a FIFO bucket fills up, it will delete the oldest item from said bucket when a new item tries to be addedto it.  If this is FALSE, the bucket will not allow new items to be placed in it until room is made by the usermanually deleting items from it.  You can see an example of this with the Postmaster's bucket.
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
    // Type: [[BucketScope|Destiny-BucketScope]]:Enum
    "scope": 0,
    // Type: [[BucketCategory|Destiny-BucketCategory]]:Enum
    "category": 0,
    // Type: integer:int32
    "bucketOrder": 0,
    // Type: integer:int32
    "itemCount": 0,
    // Type: [[ItemLocation|Destiny-ItemLocation]]:Enum
    "location": 0,
    // Type: boolean
    "hasTransferDestination": false,
    // Type: boolean
    "enabled": false,
    // Type: boolean
    "fifo": false,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyInventoryBucketDefinition.html#schema_Destiny-Definitions-DestinyInventoryBucketDefinition
