<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents a heuristically-determined &quot;item source&quot; according to Bungie.net.These item sources are non-canonical: we apply a combination of special configurationand often-fragile heuristics to attempt to discern whether an item should be part of a given&quot;source,&quot; but we have known cases of false positives and negatives due to our imperfect heuristics. Still, they provide a decent approximation for people trying to figure out how an item can be obtained.DestinyInventoryItemDefinition refers to sources in the sourceDatas.sourceHashes property for all sourceswe determined the item could spawn from. An example in Destiny 1 of a Source would be &quot;Nightfall&quot;.  If an item has the &quot;Nightfall&quot; source associatedwith it, it's extremely likely that you can earn that item while playing Nightfall, either during playor as an after-completion reward.

## Schema
* **Schema Type:** Definition
* **Mobile Manifest:** RewardSources

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
category | [[DestinyRewardSourceCategory|Destiny-Definitions-DestinyRewardSourceCategory]]:Enum | Sources are grouped into categories: common ways that items are provided.I hope to see this expand in Destiny 2 once we have time to generate accurate reward source data.
hash | integer:uint32 | The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet isnot yet allowed to show it.  Sorry!

## Example
```javascript
{
    // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
    "displayProperties": {
        // Type: string
        "description": "",
        // Type: string
        "name": "",
        // Type: string
        "icon": "",
        // Type: boolean
        "hasIcon": false
    },
    // Type: [[DestinyRewardSourceCategory|Destiny-Definitions-DestinyRewardSourceCategory]]:Enum
    "category": 0,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyRewardSourceDefinition.html#schema_Destiny-Definitions-DestinyRewardSourceDefinition
