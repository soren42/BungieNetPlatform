<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Any data we need to figure out whether this Quest Item is the currently active one for the conceptual Milestone. Even just typing this description, I already regret it.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
questItemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | The item representing this Milestone quest. Use this hash to look up the DestinyInventoryItemDefinition for the quest to find its steps and human readable data.
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | The individual quests may have different definitions from the overall milestone: if there's a specific active quest, use these displayProperties instead of that of the overall DestinyMilestoneDefinition.
overrideImage | string | If populated, this image can be shown instead of the generic milestone's image when this quest is live, or it can be used to show a background image for the quest itself that differs from that of the Activity or the Milestone.
questRewards | [[DestinyMilestoneQuestRewardsDefinition|Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardsDefinition]]:Definition | The rewards you will get for completing this quest, as best as we could extract them from our data. Sometimes, it'll be a decent amount of data. Sometimes, it's going to be sucky. Sorry.
activities | Dictionary&lt;[[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32,[[DestinyMilestoneActivityDefinition|Destiny-Definitions-Milestones-DestinyMilestoneActivityDefinition]]:Definition&gt; | The full set of all possible &quot;conceptual activities&quot; that are related to this Milestone. Tiers or alternative modes of play within these conceptual activities will be defined as sub-entities. Keyed by the Conceptual Activity Hash. Use the key to look up DestinyActivityDefinition.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "questItemHash": 0,
    // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
    "displayProperties": {},
    // Type: string
    "overrideImage": "",
    // Type: [[DestinyMilestoneQuestRewardsDefinition|Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardsDefinition]]:Definition
    "questRewards": {},
    // Type: Dictionary&lt;[[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32,[[DestinyMilestoneActivityDefinition|Destiny-Definitions-Milestones-DestinyMilestoneActivityDefinition]]:Definition&gt;
    "activities": {
        "0": {
            // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
            "conceptualActivityHash": 0,
            // Type: Dictionary&lt;[[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32,[[DestinyMilestoneActivityVariantDefinition|Destiny-Definitions-Milestones-DestinyMilestoneActivityVariantDefinition]]:Definition&gt;
            "variants": {
                "0": {
                    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
                    "activityHash": 0,
                    // Type: integer:int32
                    "order": 0
                }
            }
        }
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Milestones-DestinyMilestoneQuestDefinition.html#schema_Destiny-Definitions-Milestones-DestinyMilestoneQuestDefinition
