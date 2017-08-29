<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents a variant on an activity for a Milestone: a specific difficulty tier, or a specific activity variant for example. These will often have more specific details, such as an associated Guided Game, progression steps, tier-specific rewards,and custom values.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
activityHash | [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32 | The hash to use for looking up the variant Activity's definition (DestinyActivityDefinition),where you can find its distinguishing characteristics such as difficulty level and recommendedlight level. Frequently, that will be the only distinguishing characteristics in practice, whichis somewhat of a bummer.
order | integer:int32 | If you care to do so, render the variants in the order prescribed by this value. When you combine live Milestone data with the definition, the order becomes more usefulbecause you'll be cross-referencing between the definition and live data.

## Example
```javascript
{
    // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
    "activityHash": 0,
    // Type: integer:int32
    "order": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Milestones-DestinyMilestoneActivityVariantDefinition.html#schema_Destiny-Definitions-Milestones-DestinyMilestoneActivityVariantDefinition
