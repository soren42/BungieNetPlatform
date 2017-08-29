<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A milestone may have one or more conceptual Activities associated with it, and each of those conceptualactivities could have a variety of variants, modes, tiers, what-have-you.Our attempts to determine what qualifies as a conceptual activity are, unfortunately, janky.  So ifyou see missing modes or modes that don't seem appropriate to you, let us know and I'll buy you a beerif we ever meet up in person.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
activityHash | [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32 | The hash identifier of the activity that's been chosen to be considered the canonical &quot;conceptual&quot; activity definition.  This may have many variants, defined herein.
modifierHashes | [[DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]]:ManifestDefinition:integer:uint32[] | The activity may have 0-to-many modifiers: if it does, this will contain the hashesto the DestinyActivityModifierDefinition that defines the modifier being applied.
variants | [[DestinyPublicMilestoneActivityVariant|Destiny-Milestones-DestinyPublicMilestoneActivityVariant]][] | Every relevant variation of this conceptual activity, including the conceptual activity itself,have variants defined here.

## Example
```javascript
{
    // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
    "activityHash": 0,
    // Type: [[DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]]:ManifestDefinition:integer:uint32[]
    "modifierHashes": [
       // Type: integer:uint32
        0
    ],
    // Type: [[DestinyPublicMilestoneActivityVariant|Destiny-Milestones-DestinyPublicMilestoneActivityVariant]][]
    "variants": [
       // Type: [[DestinyPublicMilestoneActivityVariant|Destiny-Milestones-DestinyPublicMilestoneActivityVariant]]
        {
            // Type: integer:uint32
            "activityHash": 0
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyPublicMilestoneActivity.html#schema_Destiny-Milestones-DestinyPublicMilestoneActivity
