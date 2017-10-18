<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If the Milestone or a component has vendors whose inventories could/should be displayed that are relevant to it,this will return the vendor in question. It also contains information we need to determine whether that vendoris actually relevant at the moment, given the user's current state.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
vendorHash | [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32 | The hash of the vendor whose wares should be shown as associated with the Milestone.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32
    "vendorHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Milestones-DestinyMilestoneVendorDefinition.html#schema_Destiny-Definitions-Milestones-DestinyMilestoneVendorDefinition
