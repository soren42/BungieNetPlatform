<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Talent Grids on items have Nodes.  These nodes have positions in the talent grid's UI,and contain &quot;Steps&quot; (DestinyTalentNodeStepDefinition), one of whom will be the &quot;Current&quot; step. The Current Step determines the visual properties of the node, as well as what the node grantswhen it is activated. See DestinyTalentGridDefinition for a more complete overview of how Talent Grids work, and howthey are used in Destiny 2 (and how they were used in Destiny 1).

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
nodeIndex | integer:int32 | The index into the DestinyTalentGridDefinition's &quot;nodes&quot; property where this nodeis located.  Used to uniquely identify the node within the Talent Grid.  Note thatthis is content version dependent: make sure you have the latest version of contentbefore trying to use these properties.
nodeHash | integer:uint32 | The hash identifier for the node, which unfortunately is also content version dependentbut can be (and ideally, should be) used instead of the nodeIndex to uniquely identify the node. The two exist side-by-side for backcompat reasons due to the Great Talent Node Restructuringof Destiny 1, and I ran out of time to remove one of them and standardize on the other.  Sorry!
row | integer:int32 | The visual &quot;row&quot; where the node should be shown in the UI.  If negative, then the node is hidden.
column | integer:int32 | The visual &quot;column&quot; where the node should be shown in the UI.  If negative, the node is hidden.
prerequisiteNodeIndexes | integer:int32[] | Indexes into the DestinyTalentGridDefinition.nodes property for any nodesthat must be activated before this one is allowed to be activated. I would have liked to change this to hashes for Destiny 2, but we have run out of time.
binaryPairNodeIndex | integer:int32 | At one point, Talent Nodes supported the idea of &quot;Binary Pairs&quot;: nodes that overlapped eachother visually, and where activating one deactivated the other.  They ended up not being used,mostly because Exclusive Sets are *almost* a superset of this concept, but the potentialfor it to be used still exists in theory. If this is ever used, this will be the index intothe DestinyTalentGridDefinition.nodes property for the node that is the binary pair matchto this node.  Activating one deactivates the other.
autoUnlocks | boolean | If true, this node will automatically unlock when the Talent Grid's level reachesthe required level of the current step of this node.
lastStepRepeats | boolean | At one point, Nodes were going to be able to be activated multiple times, changingthe current step and potentially piling on multiple effects from the previouslyactivated steps.  This property would indicate if the last step could be activatedmultiple times. This is not currently used, but it isn't out of the question thatthis could end up being used again in a theoretical future.
isRandom | boolean | If this is true, the node's step is determined randomly rather thanthe first step being chosen.
randomActivationRequirement | [[DestinyNodeActivationRequirement|Destiny-Definitions-DestinyNodeActivationRequirement]]:Definition | At one point, you were going to be able to repurchase talent nodes that had random steps,to &quot;re-roll&quot; the current step of the node (and thus change the properties of your item).This was to be the activation requirement for performing that re-roll. The system still exists to do this, as far as I know, so it may yet come back around!
isRandomRepurchasable | boolean | If this is true, the node can be &quot;re-rolled&quot; to acquire a different random current step.This is not used, but still exists for a theoretical future of talent grids.
steps | [[DestinyNodeStepDefinition|Destiny-Definitions-DestinyNodeStepDefinition]]:Definition[] | At this point, &quot;steps&quot; have been obfuscated into conceptual entities, aggregating the underlying notions of &quot;properties&quot; and &quot;true steps&quot;. If you need to know a step as it truly exists - such as when recreating Node logic when processingVendor data - you'll have to use the &quot;realSteps&quot; property below.
exclusiveWithNodeHashes | integer:uint32[] | The nodeHash values for nodes that are in an Exclusive Set with this node. See DestinyTalentGridDefinition.exclusiveSets for more info about exclusive sets. Again, note that these are nodeHashes and *not* nodeIndexes.
randomStartProgressionBarAtProgression | integer:int32 | If the node's step is randomly selected, this is the amount of the Talent Grid's progression experienceat which the progression bar for the node should be shown.
layoutIdentifier | string | A string identifier for a custom visual layout to apply to this talent node.  Unfortunately,we do not have any data for rendering these custom layouts.  It will be up to you to interpretthese strings and change your UI if you want to have custom UI matching these layouts.
groupHash | integer:uint32:nullable | As of Destiny 2, nodes can exist as part of &quot;Exclusive Groups&quot;.  These differ from exclusive sets in that,within the group, many nodes can be activated.  But the act of activating any node in the group will cause &quot;opposing&quot; nodes(nodes in groups that are not allowed to be activated at the same time as this group) to deactivate. See DestinyTalentExclusiveGroup for more information on the details.  This is an identifier for this node's group,if it is part of one.
loreHash | [[DestinyLoreDefinition|Destiny-Definitions-Lore-DestinyLoreDefinition]]:ManifestDefinition:integer:uint32:nullable | Talent nodes can be associated with a piece of Lore, generally rendered in a tooltip.  This is the hash identifierof the lore element to show, if there is one to be show.
nodeStyleIdentifier | string | Comes from the talent grid node style: this identifier should be used to determinehow to render the node in the UI.
ignoreForCompletion | boolean | Comes from the talent grid node style: if true, then this node should be ignored for determining whether the grid is complete.

## Example
```javascript
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
            // Type: [[DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:ManifestDefinition:integer:uint32:nullable
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
            // Type: [[DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:ManifestDefinition:integer:uint32[]
            "perkHashes": [
               // Type: integer:uint32
                0
            ],
            // Type: integer:int32
            "startProgressionBarAtProgress": 0,
            // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32[]
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
                    // Type: [[DestinySocketTypeDefinition|Destiny-Definitions-Sockets-DestinySocketTypeDefinition]]:ManifestDefinition:integer:uint32
                    "socketTypeHash": 0,
                    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
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
    // Type: [[DestinyLoreDefinition|Destiny-Definitions-Lore-DestinyLoreDefinition]]:ManifestDefinition:integer:uint32:nullable
    "loreHash": 0,
    // Type: string
    "nodeStyleIdentifier": "",
    // Type: boolean
    "ignoreForCompletion": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyTalentNodeDefinition.html#schema_Destiny-Definitions-DestinyTalentNodeDefinition
