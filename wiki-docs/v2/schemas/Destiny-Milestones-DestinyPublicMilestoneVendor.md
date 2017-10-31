<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
vendorHash | [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32 | The hash identifier of the Vendor related to this Milestone. You can show useful things from this, such as thier Faction icon or whatever you might care about.
previewItemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32:nullable | If this vendor is featuring a specific item for this event, this will be the hash identifier of that item. I'm taking bets now on how long we go before this needs to be a list or some other, more complex representation instead and I deprecate this too. I'm going to go with 5 months. Calling it now, 2017-09-14 at 9:46pm PST.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32
    "vendorHash": 0,
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32:nullable
    "previewItemHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyPublicMilestoneVendor.html#schema_Destiny-Milestones-DestinyPublicMilestoneVendor
