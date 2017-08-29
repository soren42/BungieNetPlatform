<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Talent nodes have requirements that must be met before they can be activated. This describes the material costs, the Level of the Talent Grid's progressionrequired, and other conditional information that limits whether a talent node can beactivated.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
gridLevel | integer:int32 | The Progression level on the Talent Grid required to activate this node. See DestinyTalentGridDefinition.progressionHash for the related Progression, and readDestinyProgressionDefinition's documentation to learn more about Progressions.
materialRequirementHashes | [[DestinyMaterialRequirementSetDefinition|Destiny-Definitions-DestinyMaterialRequirementSetDefinition]]:Definition:integer:uint32[] | The list of hash identifiers for material requirement sets: materials thatare required for the node to be activated.  See DestinyMaterialRequirementSetDefinition formore information about material requirements. In this case, only a single DestinyMaterialRequirementSetDefinition will be chosenfrom this list, and we won't know which one will be chosen until an instance of the item is created.

## Example
```javascript
{
    // Type: integer:int32
    "gridLevel": 0,
    // Type: [[DestinyMaterialRequirementSetDefinition|Destiny-Definitions-DestinyMaterialRequirementSetDefinition]]:Definition:integer:uint32[]
    "materialRequirementHashes": [
       // Type: integer:uint32
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyNodeActivationRequirement.html#schema_Destiny-Definitions-DestinyNodeActivationRequirement
