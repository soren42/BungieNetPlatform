<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents a reference to a Challenge, which for now is just an Objective.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
objectiveHash | [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32 | The hash for the Objective that matches this challenge.  Use it to look up the DestinyObjectiveDefinition.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32
    "objectiveHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyActivityChallengeDefinition.html#schema_Destiny-Definitions-DestinyActivityChallengeDefinition
