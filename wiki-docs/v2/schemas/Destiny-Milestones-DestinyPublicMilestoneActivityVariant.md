<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents a variant of an activity that's relevant to a milestone.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
activityHash | integer:uint32 | The hash identifier of this activity variant.  Examine the activity's definition in the Manifest databaseto determine what makes it a distinct variant.  Usually it will be difficulty level or whether or not it is aguided game variant of the activity, but theoretically it could be distinguished in any arbitrary way.

## Example
```javascript
{
    // Type: integer:uint32
    "activityHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyPublicMilestoneActivityVariant.html#schema_Destiny-Milestones-DestinyPublicMilestoneActivityVariant
