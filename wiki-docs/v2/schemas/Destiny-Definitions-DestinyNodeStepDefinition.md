<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This defines the properties of a &quot;Talent Node Step&quot;.  When you see a talent nodein game, the actual visible properties that you see (its icon, description, theperks and stats it provides) are not provided by the Node itself, but rather by the currently active Step on the node. When a Talent Node is activated, the currently active step's benefits are conferredupon the item and character. The currently active step on talent nodes are determined when an item is first instantiated.  Sometimes it is random, sometimes it is more deterministic(particularly when a node has only a single step). Note that, when dealing with Talent Node Steps, you must ensure that you havethe latest version of content.  stepIndex and nodeStepHash - two ways ofidentifying the step within a node - are both content version dependent, and thusare subject to change between content updates.

## Schema
* **Schema Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | These are the display properties actually used to render the Talent Node.The currently active step's displayProperties are shown.
stepIndex | integer:int32 | The index of this step in the list of Steps on the Talent Node. Unfortunately, this is the closest thing we have to an identifier for the Step:steps are not provided a content version agnostic identifier.  This means that,when you are dealing with talent nodes, you will need to first ensure that you havethe latest version of content.
nodeStepHash | integer:uint32 | The hash of this node step.  Unfortunately, while it can be used to uniquely identifythe step within a node, it is also content version dependent and should not be relied onwithout ensuring you have the latest vesion of content.
interactionDescription | string | If you can interact with this node in some way, this is the localized descriptionof that interaction.
damageType | [[DamageType|Destiny-DamageType]]:Enum | An enum representing a damage type granted by activating this step, if any.
damageTypeHash | [[DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:ManifestDefinition:integer:uint32:nullable | If the step provides a damage type, this will be the hash identifier used to look upthe damage type's DestinyDamageTypeDefinition.
activationRequirement | [[DestinyNodeActivationRequirement|Destiny-Definitions-DestinyNodeActivationRequirement]]:Definition | If the step has requirements for activation (they almost always do, if nothingelse than for the Talent Grid's Progression to have reached a certain level),they will be defined here.
canActivateNextStep | boolean | There was a time when talent nodes could be activated multiple times, andthe effects of subsequent Steps would be compounded on each other, essentially&quot;upgrading&quot; the node.  We have moved away from this, but theoretically the capabilitystill exists. I continue to return this in case it is used in the future: if true andthis step is the current step in the node, you are allowed to activate the nodea second time to receive the benefits of the next step in the node, which will thenbecome the active step.
nextStepIndex | integer:int32 | The stepIndex of the next step in the talent node, or -1 if this is the last step or ifthe next step to be chosen is random. This doesn't really matter anymore unless canActivateNextStep begins to be used again.
isNextStepRandom | boolean | If true, the next step to be chosen is random, and if you're allowed to activate thenext step. (if canActivateNextStep = true)
perkHashes | [[DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:ManifestDefinition:integer:uint32[] | The list of hash identifiers for Perks (DestinySandboxPerkDefinition) that are appliedwhen this step is active.  Perks provide a variety of benefits and modifications - examineDestinySandboxPerkDefinition to learn more.
startProgressionBarAtProgress | integer:int32 | When the Talent Grid's progression reaches this value, the circular &quot;progress bar&quot; thatsurrounds the talent node should be shown. This also indicates the lower bound of saidprogress bar, with the upper bound being the progress required to reach activationRequirement.gridLevel. (at some point I should precalculate the upper bound and putit in the definition to save people time)
statHashes | [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32[] | When the step provides stat benefits on the item or character, this is the list of hash identifiersfor stats (DestinyStatDefinition) that are provided.
affectsQuality | boolean | If this is true, the step affects the item's Quality in some way.  See DestinyInventoryItemDefinitionfor more information about the meaning of Quality.  I already made a joke about Zen and the Art ofMotorcycle Maintenance elsewhere in the documentation, so I will avoid doing it again.  Oops too late
stepGroups | [[DestinyTalentNodeStepGroups|Destiny-Definitions-DestinyTalentNodeStepGroups]]:Definition | In Destiny 1, the Armory's Perk Filtering was driven by a concept of TalentNodeStepGroups: categorizationsof talent nodes based on their functionality.  While the Armory isn't a BNet-facing thing for now, andthe new Armory will need to account for Sockets rather than Talent Nodes, this categorization capabilityfeels useful enough to still keep around.
affectsLevel | boolean | If true, this step can affect the level of the item.  See DestinyInventoryItemDefintion for moreinformation about item levels and their effect on stats.
socketReplacements | [[DestinyNodeSocketReplaceResponse|Destiny-Definitions-DestinyNodeSocketReplaceResponse]]:Definition[] | If this step is activated, this will be a list of information used to replace socket itemswith new Plugs.  See DestinyInventoryItemDefinition for more information about sockets and plugs.

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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyNodeStepDefinition.html#schema_Destiny-Definitions-DestinyNodeStepDefinition
