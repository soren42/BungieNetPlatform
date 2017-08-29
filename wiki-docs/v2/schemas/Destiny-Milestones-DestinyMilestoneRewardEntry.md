<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The character-specific data for a milestone's reward entry.  See DestinyMilestoneDefinition formore information about Reward Entries.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
rewardEntryHash | integer:uint32 | The identifier for the reward entry in question.  It is important to look up the relatedDestinyMilestoneRewardEntryDefinition to get the static details about the reward, whichyou can do by looking up the milestone's DestinyMilestoneDefinition and examining theDestinyMilestoneDefinition.rewards[rewardCategoryHash].rewardEntries[rewardEntryHash] data.
earned | boolean | If TRUE, the player has earned this reward.
redeemed | boolean | If TRUE, the player has redeemed/picked up/obtained this reward.Feel free to alias this to &quot;gotTheShinyBauble&quot; in your own codebase.

## Example
```javascript
{
    // Type: integer:uint32
    "rewardEntryHash": 0,
    // Type: boolean
    "earned": false,
    // Type: boolean
    "redeemed": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyMilestoneRewardEntry.html#schema_Destiny-Milestones-DestinyMilestoneRewardEntry
