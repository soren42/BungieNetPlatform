<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents a &quot;raw&quot; investment stat, before calculated stats are calculated and before any DestinyStatGroupDefinition is applied to transform the stat into something closer to what you see in-game. Because these won't match what you see in-game, consider carefully whether you really want to use these stats. I have left them in case someone can do something useful or interesting with the pre-processed statistics.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
statTypeHash | [[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32 | The hash identifier for the DestinyStatDefinition defining this stat.
value | integer:int32 | The raw &quot;Investment&quot; value for the stat, before transformations are performed to turn this raw stat into stats that are displayed in the game UI.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32
    "statTypeHash": 0,
    // Type: integer:int32
    "value": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemInvestmentStatDefinition.html#schema_Destiny-Definitions-DestinyItemInvestmentStatDefinition
