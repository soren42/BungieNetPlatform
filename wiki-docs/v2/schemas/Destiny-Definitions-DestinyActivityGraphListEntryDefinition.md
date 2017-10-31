<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Destinations and Activities may have default Activity Graphs that should be shown when you bring up the Director and are playing in either. This contract defines the graph referred to and the gating for when it is relevant.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
activityGraphHash | [[Destiny.Definitions.Director.DestinyActivityGraphDefinition|Destiny-Definitions-Director-DestinyActivityGraphDefinition]]:integer:uint32 | The hash identifier of the DestinyActivityGraphDefinition that should be shown when opening the director.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.Director.DestinyActivityGraphDefinition|Destiny-Definitions-Director-DestinyActivityGraphDefinition]]:integer:uint32
    "activityGraphHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyActivityGraphListEntryDefinition.html#schema_Destiny-Definitions-DestinyActivityGraphListEntryDefinition
