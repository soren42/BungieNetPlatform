<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents a variant of an activity that's relevant to a milestone.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
activityHash | integer:uint32 | The hash identifier of this activity variant. Examine the activity's definition in the Manifest database to determine what makes it a distinct variant. Usually it will be difficulty level or whether or not it is a guided game variant of the activity, but theoretically it could be distinguished in any arbitrary way.
activityModeHash | [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32:nullable | The hash identifier of the most specific Activity Mode under which this activity is played. This is useful for situations where the activity in question is - for instance - a PVP map, but it's not clear what mode the PVP map is being played under. If it's a playlist, this will be less specific: but hopefully useful in some way.
activityModeType | integer:int32:nullable | The enumeration equivalent of the most specific Activity Mode under which this activity is played.

## Example
```javascript
{
    // Type: integer:uint32
    "activityHash": 0,
    // Type: [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32:nullable
    "activityModeHash": 0,
    // Type: integer:int32:nullable
    "activityModeType": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyPublicMilestoneActivityVariant.html#schema_Destiny-Milestones-DestinyPublicMilestoneActivityVariant
