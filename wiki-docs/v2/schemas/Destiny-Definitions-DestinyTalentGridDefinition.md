<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The time has unfortunately come to talk about Talent Grids. Talent Grids are the most complex and unintuitive part of the Destiny Definition data.  Grab a cup of coffeebefore we begin, I can wait. Talent Grids were the primary way that items could be customized in Destiny 1.  In Destiny 2, for now,talent grids have become exclusively used by Subclass/Build items: but the system is still in place for itto be used by items should the direction change back toward talent grids. Talent Grids have Nodes: the visual circles on the talent grid detail screen that have icons and canbe activated if you meet certain requirements and pay costs.  The actual visual data and effects, however,are driven by the &quot;Steps&quot; on Talent Nodes.  Any given node will have 1:M of these steps, and the specificstep that will be considered the &quot;current&quot; step (and thus the dictator of all benefits, visual state, andactivation requirements on the Node) will almost always not be determined until an instance of the item is created.  This is how, in Destiny 1, items were able to have such a wide variety of what users saw as &quot;Perks&quot;:they were actually Talent Grids with nodes that had a wide variety of Steps, randomly chosen at the timeof item creation. Now that Talent Grids are used exclusively by subclasses and builds, all of the properties withinstill apply: but there are additional visual elements on the Subclass/Build screens that are superimposedon top of the talent nodes.  Unfortunately, BNet doesn't have this data: if you want to build a subclassscreen, you will have to provide your own &quot;decorative&quot; assets, such as the visual connectors betweennodes and the fancy colored-fire-bathed character standing behind the nodes. DestinyInventoryItem.talentGrid.talentGridHash defines an item's linked Talent Grid, which brings you tothis definition that contains enough satic data about talent grids to make your head spin.  These *must* becombined with instanced data - found when live data returns DestinyItemTalentGridComponent - in order toderive meaning.  The instanced data will reference nodes and steps within these definitions, which you willthen have to look up in the definition and combine with the instanced data to give the user thevisual representation of their item's talent grid.

## Schema
* **Schema Type:** Manifest Definition
* **Mobile Manifest:** Talents

## Properties
Name | Type | Description
---- | ---- | -----------
maxGridLevel | integer:int32 | The maximum possible level of the Talent Grid: at this level, any nodes are allowed to be activated.
gridLevelPerColumn | integer:int32 | The meaning of this has been lost in the sands of time: it still exists as a property, but appears to beunused in the modern UI of talent grids.  It used to imply that each visual &quot;column&quot; of talent nodesrequired identical progression levels in order to be activated.  Returning this value in case it is stilluseful to someone?  Perhaps it's just a bit of interesting history.
progressionHash | [[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:integer:uint32 | The hash identifier of the Progression (DestinyProgressionDefinition) that drives whether and whenTalent Nodes can be activated on the Grid.  Items will have instances of this Progression, and willgain experience that will eventually cause the grid to increase in level.  As the grid's level increases,it will cross the threshold where nodes can be activated.  See DestinyTalentGridStepDefinition'sactivation requirements for more information.
nodes | [[DestinyTalentNodeDefinition|Destiny-Definitions-DestinyTalentNodeDefinition]]:Definition[] | The list of Talent Nodes on the Grid (recall that Nodes themselves are really just locations inthe UI to show whatever their current Step is.  You will only know the current step for a nodeby retrieving instanced data through platform calls to the API that return DestinyItemTalentGridComponent).
exclusiveSets | [[DestinyTalentNodeExclusiveSetDefinition|Destiny-Definitions-DestinyTalentNodeExclusiveSetDefinition]]:Definition[] | Talent Nodes can exist in &quot;exclusive sets&quot;: these are sets of nodes in which only a single node in the set can be activated at any given time.  Activating a node in this set will automaticallydeactivate the other nodes in the set (referred to as a &quot;Swap&quot;). If a node in the exclusive set has already been activated, the game will not charge you materialsto activate another node in the set, even if you have never activated it before, because you alreadypaid the cost to activate one node in the set. Not to be confused with Exclusive Groups.  (how the heck do we NOT get confused by that?  Jeez)See the groups property for information about that only-tangentially-related concept.
independentNodeIndexes | integer:int32[] | This is a quick reference to the indexes of nodes that are not part of exclusive sets.  Handyfor knowing which talent nodes can only be activated directly, rather than via swapping.
groups | Dictionary&lt;integer:uint32,[[DestinyTalentExclusiveGroup|Destiny-Definitions-DestinyTalentExclusiveGroup]]:Definition&gt; | Talent Nodes can have &quot;Exclusive Groups&quot;.  These are not to be confused with Exclusive Sets (see exclusiveSets property). Look at the definition of DestinyTalentExclusiveGroup for more information and how they work.  These groupsare keyed by the &quot;groupHash&quot; from DestinyTalentExclusiveGroup.
nodeCategories | [[DestinyTalentNodeCategory|Destiny-Definitions-DestinyTalentNodeCategory]]:Definition[] | BNet wants to show talent nodes grouped by similar purpose with localized titles.This is the ordered list of those categories: if you want to show nodes by category, you caniterate over this list, render the displayProperties for the category as the title, andthen iterate over the talent nodes referenced by the category to show the related nodes. Note that this is different from Exclusive Groups or Sets, because these categoriesalso incorporate &quot;Independent&quot; nodes that belong to neither sets nor groups.  These are purelyfor visual grouping of nodes rather than functional grouping.
hash | integer:uint32 | The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet isnot yet allowed to show it.  Sorry!

## Example
```javascript
{
    // Type: integer:int32
    "maxGridLevel": 0,
    // Type: integer:int32
    "gridLevelPerColumn": 0,
    // Type: [[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:integer:uint32
    "progressionHash": 0,
    // Type: [[DestinyTalentNodeDefinition|Destiny-Definitions-DestinyTalentNodeDefinition]]:Definition[]
    "nodes": [
       // Type: [[DestinyTalentNodeDefinition|Destiny-Definitions-DestinyTalentNodeDefinition]]:Definition
        {
            // Type: integer:int32
            "nodeIndex": 0,
            // Type: integer:uint32
            "nodeHash": 0,
            // Type: integer:int32
            "row": 0,
            // Type: integer:int32
            "column": 0,
            // Type: integer:int32[]
            "prerequisiteNodeIndexes": [
               // Type: integer:int32
                0
            ],
            // Type: integer:int32
            "binaryPairNodeIndex": 0,
            // Type: boolean
            "autoUnlocks": false,
            // Type: boolean
            "lastStepRepeats": false,
            // Type: boolean
            "isRandom": false,
            // Type: [[DestinyNodeActivationRequirement|Destiny-Definitions-DestinyNodeActivationRequirement]]:Definition
            "randomActivationRequirement": {
                // Type: integer:int32
                "gridLevel": 0,
                // Type: [[DestinyMaterialRequirementSetDefinition|Destiny-Definitions-DestinyMaterialRequirementSetDefinition]]:Definition:integer:uint32[]
                "materialRequirementHashes": [
                   // Type: integer:uint32
                    0
                ]
            },
            // Type: boolean
            "isRandomRepurchasable": false,
            // Type: [[DestinyNodeStepDefinition|Destiny-Definitions-DestinyNodeStepDefinition]]:Definition[]
            "steps": [
               // Type: [[DestinyNodeStepDefinition|Destiny-Definitions-DestinyNodeStepDefinition]]:Definition
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
                    // Type: integer:int32
                    "stepIndex": 0,
                    // Type: integer:uint32
                    "nodeStepHash": 0,
                    // Type: string
                    "interactionDescription": "",
                    // Type: [[DamageType|Destiny-DamageType]]:Enum
                    "damageType": 0,
                    // Type: [[Destiny.Definitions.DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:integer:uint32:nullable
                    "damageTypeHash": 0,
                    // Type: [[DestinyNodeActivationRequirement|Destiny-Definitions-DestinyNodeActivationRequirement]]:Definition
                    "activationRequirement": {
                        // Type: integer:int32
                        "gridLevel": 0,
                        // Type: [[DestinyMaterialRequirementSetDefinition|Destiny-Definitions-DestinyMaterialRequirementSetDefinition]]:Definition:integer:uint32[]
                        "materialRequirementHashes": [
                           // Type: integer:uint32
                            0
                        ]
                    },
                    // Type: boolean
                    "canActivateNextStep": false,
                    // Type: integer:int32
                    "nextStepIndex": 0,
                    // Type: boolean
                    "isNextStepRandom": false,
                    // Type: [[Destiny.Definitions.DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:integer:uint32[]
                    "perkHashes": [
                       // Type: integer:uint32
                        0
                    ],
                    // Type: integer:int32
                    "startProgressionBarAtProgress": 0,
                    // Type: [[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32[]
                    "statHashes": [
                       // Type: integer:uint32
                        0
                    ],
                    // Type: boolean
                    "affectsQuality": false,
                    // Type: [[DestinyTalentNodeStepGroups|Destiny-Definitions-DestinyTalentNodeStepGroups]]:Definition
                    "stepGroups": {
                        // Type: [[DestinyTalentNodeStepWeaponPerformances|Destiny-Definitions-DestinyTalentNodeStepWeaponPerformances]]:Enum
                        "weaponPerformance": 0,
                        // Type: [[DestinyTalentNodeStepImpactEffects|Destiny-Definitions-DestinyTalentNodeStepImpactEffects]]:Enum
                        "impactEffects": 0,
                        // Type: [[DestinyTalentNodeStepGuardianAttributes|Destiny-Definitions-DestinyTalentNodeStepGuardianAttributes]]:Enum
                        "guardianAttributes": 0,
                        // Type: [[DestinyTalentNodeStepLightAbilities|Destiny-Definitions-DestinyTalentNodeStepLightAbilities]]:Enum
                        "lightAbilities": 0,
                        // Type: [[DestinyTalentNodeStepDamageTypes|Destiny-Definitions-DestinyTalentNodeStepDamageTypes]]:Enum
                        "damageTypes": 0
                    },
                    // Type: boolean
                    "affectsLevel": false,
                    // Type: [[DestinyNodeSocketReplaceResponse|Destiny-Definitions-DestinyNodeSocketReplaceResponse]]:Definition[]
                    "socketReplacements": [
                       // Type: [[DestinyNodeSocketReplaceResponse|Destiny-Definitions-DestinyNodeSocketReplaceResponse]]:Definition
                        {
                            // Type: [[Destiny.Definitions.Sockets.DestinySocketTypeDefinition|Destiny-Definitions-Sockets-DestinySocketTypeDefinition]]:integer:uint32
                            "socketTypeHash": 0,
                            // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                            "plugItemHash": 0
                        }
                    ]
                }
            ],
            // Type: integer:uint32[]
            "exclusiveWithNodeHashes": [
               // Type: integer:uint32
                0
            ],
            // Type: integer:int32
            "randomStartProgressionBarAtProgression": 0,
            // Type: string
            "layoutIdentifier": "",
            // Type: integer:uint32:nullable
            "groupHash": 0,
            // Type: [[Destiny.Definitions.Lore.DestinyLoreDefinition|Destiny-Definitions-Lore-DestinyLoreDefinition]]:integer:uint32:nullable
            "loreHash": 0,
            // Type: string
            "nodeStyleIdentifier": "",
            // Type: boolean
            "ignoreForCompletion": false
        }
    ],
    // Type: [[DestinyTalentNodeExclusiveSetDefinition|Destiny-Definitions-DestinyTalentNodeExclusiveSetDefinition]]:Definition[]
    "exclusiveSets": [
       // Type: [[DestinyTalentNodeExclusiveSetDefinition|Destiny-Definitions-DestinyTalentNodeExclusiveSetDefinition]]:Definition
        {
            // Type: integer:int32[]
            "nodeIndexes": [
               // Type: integer:int32
                0
            ]
        }
    ],
    // Type: integer:int32[]
    "independentNodeIndexes": [
       // Type: integer:int32
        0
    ],
    // Type: Dictionary&lt;integer:uint32,[[DestinyTalentExclusiveGroup|Destiny-Definitions-DestinyTalentExclusiveGroup]]:Definition&gt;
    "groups": {
        "0": {
            // Type: integer:uint32
            "groupHash": 0,
            // Type: [[Destiny.Definitions.Lore.DestinyLoreDefinition|Destiny-Definitions-Lore-DestinyLoreDefinition]]:integer:uint32:nullable
            "loreHash": 0,
            // Type: integer:uint32[]
            "nodeHashes": [
               // Type: integer:uint32
                0
            ],
            // Type: integer:uint32[]
            "opposingGroupHashes": [
               // Type: integer:uint32
                0
            ],
            // Type: integer:uint32[]
            "opposingNodeHashes": [
               // Type: integer:uint32
                0
            ]
        }
    },
    // Type: [[DestinyTalentNodeCategory|Destiny-Definitions-DestinyTalentNodeCategory]]:Definition[]
    "nodeCategories": [
       // Type: [[DestinyTalentNodeCategory|Destiny-Definitions-DestinyTalentNodeCategory]]:Definition
        {
            // Type: string
            "identifier": "",
            // Type: boolean
            "isLoreDriven": false,
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
            // Type: integer:uint32[]
            "nodeHashes": [
               // Type: integer:uint32
                0
            ]
        }
    ],
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyTalentGridDefinition.html#schema_Destiny-Definitions-DestinyTalentGridDefinition
