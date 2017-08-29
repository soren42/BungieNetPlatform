<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A subclass of DestinyItemQuantity, that provides not just the item and its quantitybut also information that BNet can - at some point - use internally to providemore robust runtime information about the item's qualities. If you want it, please ask!  We're just out of time to wire it up right now.Or a clever person just may do it with our existing endpoints.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
vendorHash | [[DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:ManifestDefinition:integer:uint32:nullable | The quest reward item *may* be associated with a vendor.  If so,this is that vendor.  Use this hash to look up the DestinyVendorDefinition.
vendorItemIndex | integer:int32:nullable | The quest reward item *may* be associated with a vendor.  If so,this is the index of the item being sold, which we can use at runtimeto find instanced item information for the reward item.
itemHash | [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32 | The hash identifier for the item in question.  Use it to look up the item's DestinyInventoryItemDefinition.
itemInstanceId | integer:int64:nullable | If this quantity is referring to a specific instance of an item, this will have the item's instance ID.Normally, this will be null.
quantity | integer:int32 | The amount of the item needed/available depending on the context of where DestinyItemQuantity is being used.

## Example
```javascript
{
    // Type: [[DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:ManifestDefinition:integer:uint32:nullable
    "vendorHash": 0,
    // Type: integer:int32:nullable
    "vendorItemIndex": 0,
    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
    "itemHash": 0,
    // Type: integer:int64:nullable
    "itemInstanceId": 0,
    // Type: integer:int32
    "quantity": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardItem.html#schema_Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardItem
