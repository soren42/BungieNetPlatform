<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Sometimes, we know the specific activity that the Milestone wants you to play. This entity provides additional information about that Activity and all of its variants. (sometimes there's only one variant, but I think you get the point)

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
activityHash | [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32 | The hash of an arbitrarily chosen variant of this activity. We'll go ahead and call that the &quot;canonical&quot; activity, because if you're using this value you should only use it for properties that are common across the variants: things like the name of the activity, it's location, etc... Use this hash to look up the DestinyActivityDefinition of this activity for rendering data.
modifierHashes | [[Destiny.Definitions.ActivityModifiers.DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]]:integer:uint32[] | If the activity has modifiers, this will be the list of modifiers that all variants have in common. Perform lookups against DestinyActivityModifierDefinition which defines the modifier being applied to get at the modifier data. Note that, in the DestiyActivityDefinition, you will see many more modifiers than this being referred to: those are all *possible* modifiers for the activity, not the active ones. Use only the active ones to match what's really live.
variants | [[DestinyMilestoneActivityVariant|Destiny-Milestones-DestinyMilestoneActivityVariant]][] | If you want more than just name/location/etc... you're going to have to dig into and show the variants of the conceptual activity. These will differ in seemingly arbitrary ways, like difficulty level and modifiers applied. Show it in whatever way tickles your fancy.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
    "activityHash": 0,
    // Type: [[Destiny.Definitions.ActivityModifiers.DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]]:integer:uint32[]
    "modifierHashes": [
       // Type: integer:uint32
        0
    ],
    // Type: [[DestinyMilestoneActivityVariant|Destiny-Milestones-DestinyMilestoneActivityVariant]][]
    "variants": [
       // Type: [[DestinyMilestoneActivityVariant|Destiny-Milestones-DestinyMilestoneActivityVariant]]
        {
            // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
            "activityHash": 0,
            // Type: [[DestinyMilestoneActivityCompletionStatus|Destiny-Milestones-DestinyMilestoneActivityCompletionStatus]]
            "completionStatus": {}
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyMilestoneActivity.html#schema_Destiny-Milestones-DestinyMilestoneActivity
