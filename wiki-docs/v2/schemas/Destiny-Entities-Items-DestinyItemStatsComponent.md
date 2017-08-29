<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If you want the stats on an item's instanced data, get this component. These are stats like Attack, Defense etc... and *not* historical stats. Note that some stats have additional computation in-game at runtime - for instance, Magazine Size - and thus these stats might not be 100% accurate compared to what you seein-game for some stats.  I know, it sucks.  I hate it too.

## Schema
* **Type:** Class
* **Component Type Dependency:** ItemStats

## Properties
Name | Type | Description
---- | ---- | -----------
stats | Dictionary&lt;[[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32,[[DestinyStat|Destiny-DestinyStat]]&gt; | If the item has stats that it provides (damage, defense, etc...), it will be given here.

## Example
```javascript
{
    // Type: Dictionary&lt;[[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32,[[DestinyStat|Destiny-DestinyStat]]&gt;
    "stats": {
        "0": {
            // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
            "statHash": 0,
            // Type: integer:int32
            "value": 0,
            // Type: integer:int32
            "maximumValue": 0
        }
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Items-DestinyItemStatsComponent.html#schema_Destiny-Entities-Items-DestinyItemStatsComponent
