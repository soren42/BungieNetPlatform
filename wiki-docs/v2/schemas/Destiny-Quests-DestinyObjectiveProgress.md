<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns data about a character's status with a given Objective. Combine with DestinyObjectiveDefinition static data for display purposes.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
objectiveHash | [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32 | The unique identifier of the Objective being referred to. Use to look up the DestinyObjectiveDefinition in static data.
destinationHash | [[Destiny.Definitions.DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:integer:uint32:nullable | If the Objective has a Destination associated with it, this is the unique identifier of the Destination being referred to. Use to look up the DestinyDestinationDefinition in static data. This will give localized data about *where* in the universe the objective should be achieved.
activityHash | [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32:nullable | If the Objective has an Activity associated with it, this is the unique identifier of the Activity being referred to. Use to look up the DestinyActivityDefinition in static data. This will give localized data about *what* you should be playing for the objective to be achieved.
progress | integer:int32:nullable | If progress has been made, and the progress can be measured numerically, this will be the value of that progress. You can compare it to the DestinyObjectiveDefinition.completionValue property for current vs. upper bounds, and use DestinyObjectiveDefinition.valueStyle to determine how this should be rendered. Note that progress, in Destiny 2, need not be a literal numeric progression. It could be one of a number of possible values, even a Timestamp. Always examine DestinyObjectiveDefinition.valueStyle before rendering progress.
complete | boolean | Whether or not the Objective is completed.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32
    "objectiveHash": 0,
    // Type: [[Destiny.Definitions.DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:integer:uint32:nullable
    "destinationHash": 0,
    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32:nullable
    "activityHash": 0,
    // Type: integer:int32:nullable
    "progress": 0,
    // Type: boolean
    "complete": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Quests-DestinyObjectiveProgress.html#schema_Destiny-Quests-DestinyObjectiveProgress
