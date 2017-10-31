<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This defines the properties of a &quot;Talent Node Step&quot;. When you see a talent node in game, the actual visible properties that you see (its icon, description, the perks and stats it provides) are not provided by the Node itself, but rather by the currently active Step on the node. When a Talent Node is activated, the currently active step's benefits are conferred upon the item and character. The currently active step on talent nodes are determined when an item is first instantiated. Sometimes it is random, sometimes it is more deterministic (particularly when a node has only a single step). Note that, when dealing with Talent Node Steps, you must ensure that you have the latest version of content. stepIndex and nodeStepHash - two ways of identifying the step within a node - are both content version dependent, and thus are subject to change between content updates.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | These are the display properties actually used to render the Talent Node. The currently active step's displayProperties are shown.
stepIndex | integer:int32 | The index of this step in the list of Steps on the Talent Node. Unfortunately, this is the closest thing we have to an identifier for the Step: steps are not provided a content version agnostic identifier. This means that, when you are dealing with talent nodes, you will need to first ensure that you have the latest version of content.
nodeStepHash | integer:uint32 | The hash of this node step. Unfortunately, while it can be used to uniquely identify the step within a node, it is also content version dependent and should not be relied on without ensuring you have the latest vesion of content.
interactionDescription | string | If you can interact with this node in some way, this is the localized description of that interaction.
damageType | [[DamageType|Destiny-DamageType]]:Enum | An enum representing a damage type granted by activating this step, if any.
damageTypeHash | [[Destiny.Definitions.DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:integer:uint32:nullable | If the step provides a damage type, this will be the hash identifier used to look up the damage type's DestinyDamageTypeDefinition.
activationRequirement | [[DestinyNodeActivationRequirement|Destiny-Definitions-DestinyNodeActivationRequirement]]:Definition | If the step has requirements for activation (they almost always do, if nothing else than for the Talent Grid's Progression to have reached a certain level), they will be defined here.
canActivateNextStep | boolean | There was a time when talent nodes could be activated multiple times, and the effects of subsequent Steps would be compounded on each other, essentially &quot;upgrading&quot; the node. We have moved away from this, but theoretically the capability still exists. I continue to return this in case it is used in the future: if true and this step is the current step in the node, you are allowed to activate the node a second time to receive the benefits of the next step in the node, which will then become the active step.
nextStepIndex | integer:int32 | The stepIndex of the next step in the talent node, or -1 if this is the last step or if the next step to be chosen is random. This doesn't really matter anymore unless canActivateNextStep begins to be used again.
isNextStepRandom | boolean | If true, the next step to be chosen is random, and if you're allowed to activate the next step. (if canActivateNextStep = true)
perkHashes | [[Destiny.Definitions.DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:integer:uint32[] | The list of hash identifiers for Perks (DestinySandboxPerkDefinition) that are applied when this step is active. Perks provide a variety of benefits and modifications - examine DestinySandboxPerkDefinition to learn more.
startProgressionBarAtProgress | integer:int32 | When the Talent Grid's progression reaches this value, the circular &quot;progress bar&quot; that surrounds the talent node should be shown. This also indicates the lower bound of said progress bar, with the upper bound being the progress required to reach activationRequirement.gridLevel. (at some point I should precalculate the upper bound and put it in the definition to save people time)
statHashes | [[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32[] | When the step provides stat benefits on the item or character, this is the list of hash identifiers for stats (DestinyStatDefinition) that are provided.
affectsQuality | boolean | If this is true, the step affects the item's Quality in some way. See DestinyInventoryItemDefinition for more information about the meaning of Quality. I already made a joke about Zen and the Art of Motorcycle Maintenance elsewhere in the documentation, so I will avoid doing it again. Oops too late
stepGroups | [[DestinyTalentNodeStepGroups|Destiny-Definitions-DestinyTalentNodeStepGroups]]:Definition | In Destiny 1, the Armory's Perk Filtering was driven by a concept of TalentNodeStepGroups: categorizations of talent nodes based on their functionality. While the Armory isn't a BNet-facing thing for now, and the new Armory will need to account for Sockets rather than Talent Nodes, this categorization capability feels useful enough to still keep around.
affectsLevel | boolean | If true, this step can affect the level of the item. See DestinyInventoryItemDefintion for more information about item levels and their effect on stats.
socketReplacements | [[DestinyNodeSocketReplaceResponse|Destiny-Definitions-DestinyNodeSocketReplaceResponse]]:Definition[] | If this step is activated, this will be a list of information used to replace socket items with new Plugs. See DestinyInventoryItemDefinition for more information about sockets and plugs.

## Example
```javascript
{
    // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
    "displayProperties": {},
    // Type: integer:int32
    "stepIndex": 0,
    // Type: integer:uint32
    "nodeStepHash": 0,
    // Type: string
    "interactionDescription": "",
    // Type: [[DamageType|Destiny-DamageType]]:Enum
    "damageType": {},
    // Type: [[Destiny.Definitions.DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:integer:uint32:nullable
    "damageTypeHash": 0,
    // Type: [[DestinyNodeActivationRequirement|Destiny-Definitions-DestinyNodeActivationRequirement]]:Definition
    "activationRequirement": {},
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
    "stepGroups": {},
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyNodeStepDefinition.html#schema_Destiny-Definitions-DestinyNodeStepDefinition
