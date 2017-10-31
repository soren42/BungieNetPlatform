<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Inventory Items can reward progression when actions are performed on them. A common example of this in Destiny 1 was Bounties, which would reward Experience on your Character and the like when you completed the bounty. Note that this maps to a DestinyProgressionMappingDefinition, and *not* a DestinyProgressionDefinition directly. This is apparently so that multiple progressions can be granted progression points/experience at the same time.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
progressionMappingHash | [[DestinyProgressionMappingDefinition|Destiny-Definitions-DestinyProgressionMappingDefinition]]:Definition:integer:uint32 | The hash identifier of the DestinyProgressionMappingDefinition that contains the progressions for which experience should be applied.
amount | integer:int32 | The amount of experience to give to each of the mapped progressions.
applyThrottles | boolean | If true, the game's internal mechanisms to throttle progression should be applied.

## Example
```javascript
{
    // Type: [[DestinyProgressionMappingDefinition|Destiny-Definitions-DestinyProgressionMappingDefinition]]:Definition:integer:uint32
    "progressionMappingHash": 0,
    // Type: integer:int32
    "amount": 0,
    // Type: boolean
    "applyThrottles": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyProgressionRewardDefinition.html#schema_Destiny-Definitions-DestinyProgressionRewardDefinition
