<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
These are pre-constructed collections of data that can be used to determine the Level Requirementfor an item given a Progression to be tested (such as the Character's level). For instance, say a character receives a new Auto Rifle, and that Auto Rifle'sDestinyInventoryItemDefinition.quality.progressionLevelRequirementHash property is pointingat one of these DestinyProgressionLevelRequirementDefinitions.  Let's pretend also that the progressionHashit is pointing at is the Character Level progression.  In that situation, the character's level will be usedto interpolate a value in the requirementCurve property.  The value picked up from that interpolation willbe the required level for the item.

## Schema
* **Type:** Definition
* **Mobile Manifest:** ProgressionLevelRequirements

## Properties
Name | Type | Description
---- | ---- | -----------
requirementCurve | [[InterpolationPointFloat|Interpolation-InterpolationPointFloat]][] | A curve of level requirements, weighted by the related progressions' level. Interpolate against this curve with the character's progression level to determinewhat the level requirement of the generated item that is using this data will be.
progressionHash | [[DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:ManifestDefinition:integer:uint32 | The progression whose level should be used to determine the level requirement. Look up the DestinyProgressionDefinition with this hash for more information aboutthe progression in question.
hash | integer:uint32 | The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet isnot yet allowed to show it.  Sorry!

## Example
```javascript
{
    // Type: [[InterpolationPointFloat|Interpolation-InterpolationPointFloat]][]
    "requirementCurve": [
       // Type: [[InterpolationPointFloat|Interpolation-InterpolationPointFloat]]
        {
            // Type: number:float
            "value": 0,
            // Type: number:float
            "weight": 0
        }
    ],
    // Type: [[DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:ManifestDefinition:integer:uint32
    "progressionHash": 0,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Progression-DestinyProgressionLevelRequirementDefinition.html#schema_Destiny-Definitions-Progression-DestinyProgressionLevelRequirementDefinition
