<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Items that can be equipped define this block. It contains information we need to understand how and when the item can be equipped.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
gearsetItemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32:nullable | If the item is part of a gearset, this is a reference to that gearset item.
uniqueLabel | string | If defined, this is the label used to check if the item has other items of matching types already equipped. For instance, when you aren't allowed to equip more than one Exotic Weapon, that's because all exotic weapons have identical uniqueLabels and the game checks the to-be-equipped item's uniqueLabel vs. all other already equipped items (other than the item in the slot that's about to be occupied).
uniqueLabelHash | integer:uint32 | The hash of that unique label. Does not point to a specific definition.
equipmentSlotTypeHash | [[DestinyEquipmentSlotDefinition|Destiny-Definitions-DestinyEquipmentSlotDefinition]]:Definition:integer:uint32 | An equipped item *must* be equipped in an Equipment Slot. This is the hash identifier of the DestinyEquipmentSlotDefinition into which it must be equipped.
attributes | [[EquippingItemBlockAttributes|Destiny-EquippingItemBlockAttributes]]:Enum | These are custom attributes on the equippability of the item. For now, this can only be &quot;equip on acquire&quot;, which would mean that the item will be automatically equipped as soon as you pick it up.
displayStrings | string[] | These are strings that represent the possible Game/Account/Character state failure conditions that can occur when trying to equip the item. They match up one-to-one with requiredUnlockExpressions.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32:nullable
    "gearsetItemHash": 0,
    // Type: string
    "uniqueLabel": "",
    // Type: integer:uint32
    "uniqueLabelHash": 0,
    // Type: [[DestinyEquipmentSlotDefinition|Destiny-Definitions-DestinyEquipmentSlotDefinition]]:Definition:integer:uint32
    "equipmentSlotTypeHash": 0,
    // Type: [[EquippingItemBlockAttributes|Destiny-EquippingItemBlockAttributes]]:Enum
    "attributes": {},
    // Type: string[]
    "displayStrings": [
       // Type: string
        ""
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyEquippingBlockDefinition.html#schema_Destiny-Definitions-DestinyEquippingBlockDefinition
