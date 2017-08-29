<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
BNet's custom categorization of reward sources.  We took a look at the existingways that items could be spawned, and tried to make high-level categorizations ofthem.  This needs to be re-evaluated for Destiny 2.

## Schema
* **Schema Type:** Enum
* **Type:** integer
* **Format:** int32

## Enum Values
Identifier | Value | Description
---------- | ----- | -----------
None | 0 | The source doesn't fit well into any of the other types.
Activity | 1 | The source is directly related to the rewards gained by playing an activity orset of activities.  This currently includes Quests and other action in-game.
Vendor | 2 | This source is directly related to items that Vendors sell.
Aggregate | 3 | This source is a custom aggregation of items that can be earned in many ways, but thatshare some other property in common that is useful to share.  For instance, in Destiny 1we would make &quot;Reward Sources&quot; for every game expansion: that way, you could searchreward sources to see what items became available with any given Expansion.

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyRewardSourceCategory.html#schema_Destiny-Definitions-DestinyRewardSourceCategory
