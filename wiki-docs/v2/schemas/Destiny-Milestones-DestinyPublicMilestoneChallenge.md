<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A Milestone can have many Challenges.  Challenges are just extra Objectives that providea fun way to mix-up play and provide extra rewards.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
objectiveHash | [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32 | The objective for the Challenge, which should have human-readable data about whatneeds to be done to accomplish the objective.  Use this hash to look up the DestinyObjectiveDefinition.
activityHash | [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32:nullable | IF the Objective is related to a specific Activity, this will be that activity's hash.Use it to look up the DestinyActivityDefinition for additional data to show.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32
    "objectiveHash": 0,
    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32:nullable
    "activityHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyPublicMilestoneChallenge.html#schema_Destiny-Milestones-DestinyPublicMilestoneChallenge
