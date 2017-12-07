<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents custom data that we know about an individual variant of an activity.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
activityHash | [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32 | The hash for the specific variant of the activity related to this milestone. You can pull more detailed static info from the DestinyActivityDefinition, such as difficulty level.
completionStatus | [[DestinyMilestoneActivityCompletionStatus|Destiny-Milestones-DestinyMilestoneActivityCompletionStatus]] | An OPTIONAL component: if it makes sense to talk about this activity variant in terms of whether or not it has been completed or what progress you have made in it, this will be returned. Otherwise, this will be NULL.
activityModeHash | [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32:nullable | The hash identifier of the most specific Activity Mode under which this activity is played. This is useful for situations where the activity in question is - for instance - a PVP map, but it's not clear what mode the PVP map is being played under. If it's a playlist, this will be less specific: but hopefully useful in some way.
activityModeType | integer:int32:nullable | The enumeration equivalent of the most specific Activity Mode under which this activity is played.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
    "activityHash": 0,
    // Type: [[DestinyMilestoneActivityCompletionStatus|Destiny-Milestones-DestinyMilestoneActivityCompletionStatus]]
    "completionStatus": {},
    // Type: [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32:nullable
    "activityModeHash": 0,
    // Type: integer:int32:nullable
    "activityModeType": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyMilestoneActivityVariant.html#schema_Destiny-Milestones-DestinyMilestoneActivityVariant
