<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The reasons why an item cannot be equipped, if any.  Many flags can be set, or &quot;None&quot; if

## Schema
* **Schema Type:** Enum
* **Type:** integer
* **Format:** int32

## Enum Values
Identifier | Value | Description
---------- | ----- | -----------
None | 0 | The item is/was able to be equipped.
ItemUnequippable | 1 | This is not the kind of item that can be equipped.  Did you try equipping Glimmer or something?
ItemUniqueEquipRestricted | 2 | This item is part of a &quot;unique set&quot;, and you can't have more than one item of that same set type equipped at once.For instance, if you already have an Exotic Weapon equipped, you can't equip a second one in another weapon slot.
ItemFailedUnlockCheck | 4 | This item has state-based gating that prevents it from being equipped in certain circumstances.  For instance, an itemmight be for Warlocks only and you're a Titan, or it might require you to have beaten some special quest that you haven'tbeaten yet.  Use the additional failure data passed on the item itself to get more information about what the specificfailure case was (See DestinyInventoryItemDefinition and DestinyItemInstanceComponent)
ItemFailedLevelCheck | 8 | This item requires you to have reached a specific character level in order to equip it, and you haven't reached that level yet.
ItemNotOnCharacter | 16 | This item can't be equipped on the character requested, because it must be in that character's inventory first.Transfer the item to the character you want to equip it before you attempt to equip it.

## References
1. https://bungie-net.github.io/multi/schema_Destiny-EquipFailureReason.html#schema_Destiny-EquipFailureReason
