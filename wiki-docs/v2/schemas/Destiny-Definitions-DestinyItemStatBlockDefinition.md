<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Information about the item's calculated stats, with as much data as we can find for the statswithout having an actual instance of the item. Note that this means the entire concept of providing these stats is fundamentally insufficient:we cannot predict with 100% accuracy the conditions under which an item can spawn, so we use variousheuristics to attempt to simulate the conditions as accurately as possible.  Actual stats for items in-game can and will vary, but these should at least be useful base points for comparisonand display. It is also worth noting that some stats, like Magazine size, have further calculations performed on themby scripts in-game and on the game servers that BNet does not have access to.  We cannot know how those statsare further transformed, and thus some stats will be inaccurate even on instances of items in BNet vs. howthey appear in-game.  This is a known limitation of our item statistics, without any planned fix.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
statGroupHash | [[DestinyStatGroupDefinition|Destiny-Definitions-DestinyStatGroupDefinition]]:ManifestDefinition:integer:uint32:nullable | If the item's stats are meant to be modified by a DestinyStatGroupDefinition, this willbe the identifier for that definition. If you are using live data or precomputed stats data on the DestinyInventoryItemDefinition.stats.statsproperty, you don't have to worry about statGroupHash and how it alters stats: the already alteredstats are provided to you.  But if you want to see how the sausage gets made, or perform computationsyourself, this is valuable information.
stats | Dictionary&lt;[[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32,[[DestinyInventoryItemStatDefinition|Destiny-Definitions-DestinyInventoryItemStatDefinition]]:Definition&gt; | If you are looking for precomputed values for the stats on a weapon, this is where they are stored.Technically these are the &quot;Display&quot; stat values.  Please see DestinyStatsDefinition for whatDisplay Stat Values means, it's a very long story... but essentially these are the closest valuesBNet can get to the item stats that you see in-game. These stats are keyed by the DestinyStatDefinition's hash identifier for the statthat's found on the item.
hasDisplayableStats | boolean | A quick and lazy way to determine whether any stat other than the &quot;primary&quot; stat is actuallyvisible on the item.  Items often have stats that we return in case people find them useful, butthey're not part of the &quot;Stat Group&quot; and thus we wouldn't display them in our UI.  If this is False,then we're not going to display any of these stats other than the primary one.
primaryBaseStatHash | [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32 | This stat is determined to be the &quot;primary&quot; stat, and can be looked up in the stats or anyother stat collection related to the item. Use this hash to look up the stat's value using DestinyInventoryItemDefinition.stats.stats,and the renderable data for the primary stat in the related DestinyStatDefinition.

## Example
```javascript
{
    // Type: [[DestinyStatGroupDefinition|Destiny-Definitions-DestinyStatGroupDefinition]]:ManifestDefinition:integer:uint32:nullable
    "statGroupHash": 0,
    // Type: Dictionary&lt;[[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32,[[DestinyInventoryItemStatDefinition|Destiny-Definitions-DestinyInventoryItemStatDefinition]]:Definition&gt;
    "stats": {
        "0": {
            // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
            "statHash": 0,
            // Type: integer:int32
            "value": 0,
            // Type: integer:int32
            "minimum": 0,
            // Type: integer:int32
            "maximum": 0
        }
    },
    // Type: boolean
    "hasDisplayableStats": false,
    // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
    "primaryBaseStatHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemStatBlockDefinition.html#schema_Destiny-Definitions-DestinyItemStatBlockDefinition
