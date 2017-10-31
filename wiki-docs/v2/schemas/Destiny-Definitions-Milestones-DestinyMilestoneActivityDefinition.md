<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Milestones can have associated activities which provide additional information about the context, challenges, modifiers, state etc... related to this Milestone. Information we need to be able to return that data is defined here, along with Tier data to establish a relationship between a conceptual Activity and its difficulty levels and variants.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
conceptualActivityHash | [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32 | The &quot;Conceptual&quot; activity hash. Basically, we picked the lowest level activity and are treating it as the canonical definition of the activity for rendering purposes. If you care about the specific difficulty modes and variations, use the activities under &quot;Variants&quot;.
variants | Dictionary&lt;[[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32,[[DestinyMilestoneActivityVariantDefinition|Destiny-Definitions-Milestones-DestinyMilestoneActivityVariantDefinition]]:Definition&gt; | A milestone-referenced activity can have many variants, such as Tiers or alternative modes of play. Even if there is only a single variant, the details for these are represented within as a variant definition. It is assumed that, if this DestinyMilestoneActivityDefinition is active, then all variants should be active. If a Milestone could ever split the variants' active status conditionally, they should all have their own DestinyMilestoneActivityDefinition instead! The potential duplication will be worth it for the obviousness of processing and use.

## Example
```javascript
{
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Milestones-DestinyMilestoneActivityDefinition.html#schema_Destiny-Definitions-Milestones-DestinyMilestoneActivityDefinition
