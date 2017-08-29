<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents the status and other related information for a challenge that is - or was - availableto a player. A challenge is a bonus objective, generally tacked onto Quests or Activities, thatprovide additional variations on play.

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
objective | [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]] | The progress - including completion status - of the active challenge.

## Example
```javascript
{
    // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]]
    "objective": {
        // Type: [[DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:ManifestDefinition:integer:uint32
        "objectiveHash": 0,
        // Type: [[DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:ManifestDefinition:integer:uint32:nullable
        "destinationHash": 0,
        // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32:nullable
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
