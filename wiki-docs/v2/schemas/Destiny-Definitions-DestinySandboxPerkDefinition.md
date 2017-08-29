<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Perks are modifiers to a character or item that can be applied situationally. - Perks determine a weapons' damage type. - Perks put the Mods in Modifiers (they are literally the entity that bestows the Sandboxbenefit for whatever fluff text about the modifier in the Socket, Plug or Talent Node) - Perks are applied for unique alterations of state in Objectives Anyways, I'm sure you can see why perks are so interesting. What Perks often don't have is human readable information, so we attempt to reverse engineerthat by pulling that data from places that uniquely refer to these perks: namely, Talent Nodesand Plugs.  That only gives us a subset of perks that are human readable, but those perks arethe ones people generally care about anyways.  The others are left as a mystery, their truepurpose mostly unknown and undocumented.

## Schema
* **Type:** Definition
* **Mobile Manifest:** SandboxPerks

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | These display properties are by no means guaranteed to be populated.  Usually when it is,it's only because we back-filled them with the displayProperties of some Talent Node orPlug item that happened to be uniquely providing that perk.
perkIdentifier | string | The string identifier for the perk.
isDisplayable | boolean | If true, you can actually show the perk in the UI.  Otherwise, it doesn'thave useful player-facing information.
damageType | [[DamageType|Destiny-DamageType]]:Enum | If this perk grants a damage type to a weapon, the damage type will be defined here. Unless you have a compelling reason to use this enum value, use the damageTypeHash insteadto look up the actual DestinyDamageTypeDefinition.
damageTypeHash | integer:uint32:nullable | The hash identifier for looking up the DestinyDamageTypeDefinition, if this perk has a damage type. This is preferred over using the damageType enumeration value, which has been left purely because it isoccasionally convenient.
perkGroups | [[DestinyTalentNodeStepGroups|Destiny-Definitions-DestinyTalentNodeStepGroups]]:Definition | An old holdover from the original Armory, this was an attempt to group perks by functionality. It is as yet unpopulated, and there will be quite a bit of work needed to restore it to its formerworking order.
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
    // Type: string
    "perkIdentifier": "",
    // Type: boolean
    "isDisplayable": false,
    // Type: [[DamageType|Destiny-DamageType]]:Enum
    "damageType": 0,
    // Type: integer:uint32:nullable
    "damageTypeHash": 0,
    // Type: [[DestinyTalentNodeStepGroups|Destiny-Definitions-DestinyTalentNodeStepGroups]]:Definition
    "perkGroups": {
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
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinySandboxPerkDefinition.html#schema_Destiny-Definitions-DestinySandboxPerkDefinition
