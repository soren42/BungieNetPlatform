<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
When the interaction is replied to, Reward sites will fire and items potentially selected based on whether the given unlock expression is TRUE. You can potentially choose one from multiple replies when replying to an interaction: this is how you get either/or rewards from vendors.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
itemRewardsSelection | [[DestinyVendorInteractionRewardSelection|Destiny-DestinyVendorInteractionRewardSelection]]:Enum | The rewards granted upon responding to the vendor.
reply | string | The localized text for the reply.
replyType | [[DestinyVendorReplyType|Destiny-DestinyVendorReplyType]]:Enum | An enum indicating the type of reply being made.

## Example
```javascript
{
    // Type: [[DestinyVendorInteractionRewardSelection|Destiny-DestinyVendorInteractionRewardSelection]]:Enum
    "itemRewardsSelection": {},
    // Type: string
    "reply": "",
    // Type: [[DestinyVendorReplyType|Destiny-DestinyVendorReplyType]]:Enum
    "replyType": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyVendorInteractionReplyDefinition.html#schema_Destiny-Definitions-DestinyVendorInteractionReplyDefinition
