<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
When a Stat (DestinyStatDefinition) is aggregated, this is the rules used for determiningthe level and formula used for aggregation. * CharacterAverage = apply a weighted average using the related DestinyStatGroupDefinition on the DestinyInventoryItemDefinition across the character's equipped items.  See both ofthose definitions for details.* Character = don't aggregate: the stat should be located and used directly on the character.* Item = don't aggregate: the stat should be located and used directly on the item.

## Schema
* **Type:** Enum
* **Format:** int32

## Enum Values
Identifier | Value | Description
---------- | ----- | -----------
CharacterAverage | 0 | 
Character | 1 | 
Item | 2 | 

## References
1. https://bungie-net.github.io/multi/schema_Destiny-DestinyStatAggregationType.html#schema_Destiny-DestinyStatAggregationType
