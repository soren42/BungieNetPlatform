<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Information about a single inventory bucket in a vendor flyout UI and how it is shown.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
collapsible | boolean | If true, the inventory bucket should be able to be collapsed visually.
inventoryBucketHash | [[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:ManifestDefinition:integer:uint32 | The inventory bucket whose contents should be shown.
sortItemsBy | [[DestinyItemSortType|Destiny-DestinyItemSortType]]:Enum | The methodology to use for sorting items from the flyout.

## Example
```javascript
{
    // Type: boolean
    "collapsible": false,
    // Type: [[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:ManifestDefinition:integer:uint32
    "inventoryBucketHash": 0,
    // Type: [[DestinyItemSortType|Destiny-DestinyItemSortType]]:Enum
    "sortItemsBy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyVendorInventoryFlyoutBucketDefinition.html#schema_Destiny-Definitions-DestinyVendorInventoryFlyoutBucketDefinition
