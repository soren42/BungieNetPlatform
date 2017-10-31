<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents a category of &quot;summary&quot; rewards that can be earned for the Milestone regardless of specific quest rewards that can be earned.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
rewardCategoryHash | integer:uint32 | Look up the relevant DestinyMilestoneDefinition, and then use rewardCategoryHash to look up the category info in DestinyMilestoneDefinition.rewards.
entries | [[DestinyMilestoneRewardEntry|Destiny-Milestones-DestinyMilestoneRewardEntry]][] | The individual reward entries for this category, and their status.

## Example
```javascript
{
    // Type: integer:uint32
    "rewardCategoryHash": 0,
    // Type: [[DestinyMilestoneRewardEntry|Destiny-Milestones-DestinyMilestoneRewardEntry]][]
    "entries": [
       // Type: [[DestinyMilestoneRewardEntry|Destiny-Milestones-DestinyMilestoneRewardEntry]]
        {
            // Type: integer:uint32
            "rewardEntryHash": 0,
            // Type: boolean
            "earned": false,
            // Type: boolean
            "redeemed": false
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyMilestoneRewardCategory.html#schema_Destiny-Milestones-DestinyMilestoneRewardCategory
