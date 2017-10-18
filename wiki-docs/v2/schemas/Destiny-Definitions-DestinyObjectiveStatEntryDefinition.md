<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Defines the conditions under which stat modifications will be applied to a Character whileparticipating in an objective.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
stat | [[DestinyItemInvestmentStatDefinition|Destiny-Definitions-DestinyItemInvestmentStatDefinition]]:Definition | The stat being modified, and the value used.
style | [[DestinyObjectiveGrantStyle|Destiny-DestinyObjectiveGrantStyle]]:Enum | Whether it will be applied as long as the objective is active, when it's completed, or until it's completed.

## Example
```javascript
{
    // Type: [[DestinyItemInvestmentStatDefinition|Destiny-Definitions-DestinyItemInvestmentStatDefinition]]:Definition
    "stat": {
        // Type: [[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32
        "statTypeHash": 0,
        // Type: integer:int32
        "value": 0
    },
    // Type: [[DestinyObjectiveGrantStyle|Destiny-DestinyObjectiveGrantStyle]]:Enum
    "style": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyObjectiveStatEntryDefinition.html#schema_Destiny-Definitions-DestinyObjectiveStatEntryDefinition
