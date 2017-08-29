<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
An item's &quot;Quality&quot; determines its calculated stats.  The Level at which the item spawnsis combined with its &quot;qualityLevel&quot; along with some additional calculations to determinethe value of those stats. In Destiny 2, most items don't have default item levels and quality, making this propertyless useful: these apparently are almost always determined by the complex mechanisms ofthe Reward system rather than statically.  They are still provided here in case theyare still useful for people.  This also contains some information about Infusion.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
itemLevels | integer:int32[] | The &quot;base&quot; defined level of an item.  This is a list because, in theory,each Expansion could define its own base level for an item. In practice, not only was that never done in Destiny 1, but now thisisn't even populated at all.  When it's not populated, the level at whichit spawns has to be inferred by Reward information, of which BNet receives an imperfectview and will only be reliable on instanced data as a result.
qualityLevel | integer:int32 | qualityLevel is used in combination with the item's level to calculate stats likeAttack and Defense.  It plays a role in that calculation, but not nearly as large asitemLevel does.
infusionCategoryName | string | The string identifier for this item's &quot;infusability&quot;, if any. Items that match the same infusionCategoryName are allowed to infuse with each other.
infusionCategoryHash | integer:uint32 | The hash identifier for the infusion.  It does not map to a Definition entity.
progressionLevelRequirementHash | [[DestinyProgressionLevelRequirementDefinition|Destiny-Definitions-Progression-DestinyProgressionLevelRequirementDefinition]]:ManifestDefinition:integer:uint32 | An item can refer to pre-set level requirements.  They are defined in DestinyProgressionLevelRequirementDefinition,and you can use this hash to find the appropriate definition.

## Example
```javascript
{
    // Type: integer:int32[]
    "itemLevels": [
       // Type: integer:int32
        0
    ],
    // Type: integer:int32
    "qualityLevel": 0,
    // Type: string
    "infusionCategoryName": "",
    // Type: integer:uint32
    "infusionCategoryHash": 0,
    // Type: [[DestinyProgressionLevelRequirementDefinition|Destiny-Definitions-Progression-DestinyProgressionLevelRequirementDefinition]]:ManifestDefinition:integer:uint32
    "progressionLevelRequirementHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemQualityBlockDefinition.html#schema_Destiny-Definitions-DestinyItemQualityBlockDefinition
