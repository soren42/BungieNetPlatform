<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Milestones can have associated activities which provide additional information about the context, challenges, modifiers, state etc...related to this Milestone. Information we need to be able to return that data is defined here, along with Tier data to establisha relationship between a conceptual Activity and its difficulty levels and variants.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
conceptualActivityHash | [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32 | The &quot;Conceptual&quot; activity hash.  Basically, we picked the lowest level activityand are treating it as the canonical definition of the activity for rendering purposes. If you care about the specific difficulty modes and variations, use the activities under&quot;Variants&quot;.
variants | Dictionary&lt;[[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32,[[DestinyMilestoneActivityVariantDefinition|Destiny-Definitions-Milestones-DestinyMilestoneActivityVariantDefinition]]:Definition&gt; | A milestone-referenced activity can have many variants, such as Tiers or alternative modes of play. Even if there is only a single variant, the details for these are represented within as a variant definition. It is assumed that, if this DestinyMilestoneActivityDefinition is active, then all variants should be active. If a Milestone could ever split the variants' active status conditionally, they should all have their own DestinyMilestoneActivityDefinition instead!  The potential duplication will be worth it for the obviousness of processingand use.

## Example
```javascript
{
    // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
    "conceptualActivityHash": 0,
    // Type: Dictionary&lt;[[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32,[[DestinyMilestoneActivityVariantDefinition|Destiny-Definitions-Milestones-DestinyMilestoneActivityVariantDefinition]]:Definition&gt;
    "variants": {
        "0": {
            // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
            "activityHash": 0,
            // Type: integer:int32
            "order": 0
        }
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Milestones-DestinyMilestoneActivityDefinition.html#schema_Destiny-Definitions-Milestones-DestinyMilestoneActivityDefinition
