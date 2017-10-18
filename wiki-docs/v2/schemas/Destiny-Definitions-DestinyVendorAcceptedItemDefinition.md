<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If you ever wondered how the Vault works, here it is. The Vault is merely a set of inventory buckets that exist on your Profile/Account level.When you transfer items in the Vault, the game is using the Vault Vendor's DestinyVendorAcceptedItemDefinitionsto see where the appropriate destination bucket is for the source bucket from whence your item is moving.If it finds such an entry, it transfers the item to the other bucket. The mechanics for Postmaster works similarly, which is also a vendor.  All driven by Accepted Items.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
acceptedInventoryBucketHash | [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32 | The &quot;source&quot; bucket for a transfer.  When a user wants to transfer an item, the appropriate DestinyVendorDefinition'sacceptedItems property is evaluated, looking for an entry where acceptedInventoryBucketHash matchesthe bucket that the item being transferred is currently located.  If it exists, the item will betransferred into whatever bucket is defined by destinationInventoryBucketHash.
destinationInventoryBucketHash | [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32 | This is the bucket where the item being transferred will be put, given that it was beingtransferred *from* the bucket defined in acceptedInventoryBucketHash.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32
    "acceptedInventoryBucketHash": 0,
    // Type: [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32
    "destinationInventoryBucketHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyVendorAcceptedItemDefinition.html#schema_Destiny-Definitions-DestinyVendorAcceptedItemDefinition
