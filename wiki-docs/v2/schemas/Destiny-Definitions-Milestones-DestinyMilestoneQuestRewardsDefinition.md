<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If rewards are given in a quest - as opposed to overall in the entire Milestone - there's way less to track. We're going to simplify this contract as a result. However, this also gives us the opportunity to potentially put more than just item information into the reward data if we're able to mine it out in the future. Remember this if you come back and ask &quot;why are quest reward items nested inside of their own class?&quot;

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
items | [[DestinyMilestoneQuestRewardItem|Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardItem]]:Definition[] | The items that represent your reward for completing the quest. Be warned, these could be &quot;dummy&quot; items: items that are only used to render a good-looking in-game tooltip, but aren't the actual items themselves. For instance, when experience is given there's often a dummy item representing &quot;experience&quot;, with quantity being the amount of experience you got. We don't have a programmatic association between those and whatever Progression is actually getting that experience... yet.

## Example
```javascript
{
    // Type: [[DestinyMilestoneQuestRewardItem|Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardItem]]:Definition[]
    "items": [
       // Type: [[DestinyMilestoneQuestRewardItem|Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardItem]]:Definition
        {
            // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32:nullable
            "vendorHash": 0,
            // Type: integer:int32:nullable
            "vendorItemIndex": 0,
            // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
            "itemHash": 0,
            // Type: integer:int64:nullable
            "itemInstanceId": 0,
            // Type: integer:int32
            "quantity": 0
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardsDefinition.html#schema_Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardsDefinition
