<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents the status and other related information for a challenge that is - or was - availableto a player. A challenge is a bonus objective, generally tacked onto Quests or Activities, thatprovide additional variations on play.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
objective | [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]] | The progress - including completion status - of the active challenge.

## Example
```javascript
{
    // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]]
    "objective": {
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
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Challenges-DestinyChallengeStatus.html#schema_Destiny-Challenges-DestinyChallengeStatus
