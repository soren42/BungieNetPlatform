<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If an item is &quot;instanced&quot;, this will contain information about the item's instance that doesn't fit easilyinto other components.  One might say this is the &quot;essential&quot; instance data for the item. Items are instanced if they require information or state that can vary.  For instance, weapons are Instanced:they are given a unique identifier, uniquely generated stats, and can have their properties altered.  Non-instanceditems have none of these things: for instance, Glimmer has no unique properties aside from how much of it you own. You can tell from an item's definition whether it will be instanced or not by looking at the DestinyInventoryItemDefinition'sdefinition.inventory.isInstanceItem property.

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** ItemInstances

## Properties
Name | Type | Description
---- | ---- | -----------
damageType | [[DamageType|Destiny-DamageType]]:Enum | If the item has a damage type, this is the item's current damage type.
damageTypeHash | [[Destiny.Definitions.DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:integer:uint32:nullable | The current damage type's hash, so you can look up localized info and icons for it.
primaryStat | [[DestinyStat|Destiny-DestinyStat]] | The item stat that we consider to be &quot;primary&quot; for the item.  For instance, this would be &quot;Attack&quot; forWeapons or &quot;Defense&quot; for armor.
itemLevel | integer:int32 | The Item's &quot;Level&quot; has the most significant bearing on its stats, such as Light and Power.
quality | integer:int32 | The &quot;Quality&quot; of the item has a lesser - but still impactful - bearing on stats like Light and Power.
isEquipped | boolean | Is the item currently equipped on the given character?
canEquip | boolean | If this is an equippable item, you can check it here.  There are permanent as well as transitory reasonswhy an item might not be able to be equipped: check cannotEquipReason for details.
equipRequiredLevel | integer:int32 | If the item cannot be equipped until you reach a certain level, that level will be reflected here.
unlockHashesRequiredToEquip | [[Destiny.Definitions.DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]]:integer:uint32[] | Sometimes, there are limitations to equipping that are represented by character-level flags called &quot;unlocks&quot;. This is a list of flags that they need in order to equip the item that the character has not met.Use these to look up the descriptions to show in your UI by looking up the relevant DestinyUnlockDefinitions for the hashes.
cannotEquipReason | [[EquipFailureReason|Destiny-EquipFailureReason]]:Enum | If you cannot equip the item, this is a flags enum that enumerates all of the reasons why you couldn't equipthe item.  You may need to refine your UI further by using unlockHashesRequiredToEquip and equipRequiredLevel.

## Example
```javascript
{
    // Type: [[DamageType|Destiny-DamageType]]:Enum
    "damageType": 0,
    // Type: [[Destiny.Definitions.DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:integer:uint32:nullable
    "damageTypeHash": 0,
    // Type: [[DestinyStat|Destiny-DestinyStat]]
    "primaryStat": {
        // Type: [[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32
        "statHash": 0,
        // Type: integer:int32
        "value": 0,
        // Type: integer:int32
        "maximumValue": 0
    },
    // Type: integer:int32
    "itemLevel": 0,
    // Type: integer:int32
    "quality": 0,
    // Type: boolean
    "isEquipped": false,
    // Type: boolean
    "canEquip": false,
    // Type: integer:int32
    "equipRequiredLevel": 0,
    // Type: [[Destiny.Definitions.DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]]:integer:uint32[]
    "unlockHashesRequiredToEquip": [
       // Type: integer:uint32
        0
    ],
    // Type: [[EquipFailureReason|Destiny-EquipFailureReason]]:Enum
    "cannotEquipReason": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Items-DestinyItemInstanceComponent.html#schema_Destiny-Entities-Items-DestinyItemInstanceComponent
