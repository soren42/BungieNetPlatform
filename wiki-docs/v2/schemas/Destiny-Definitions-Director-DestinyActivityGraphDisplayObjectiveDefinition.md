<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
When a Graph needs to show active Objectives, this defines those objectives as well as an identifier.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
id | integer:uint32 | $NOTE $amola 2017-01-19 This field is apparently something that CUI uses to manually wire up objectivesto display info.  I am unsure how it works.
objectiveHash | [[DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:ManifestDefinition:integer:uint32 | The objective being shown on the map.

## Example
```javascript
{
    // Type: integer:uint32
    "id": 0,
    // Type: [[DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:ManifestDefinition:integer:uint32
    "objectiveHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Director-DestinyActivityGraphDisplayObjectiveDefinition.html#schema_Destiny-Definitions-Director-DestinyActivityGraphDisplayObjectiveDefinition
