<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
An enumeration that indicates the high-level &quot;type&quot; of the item, attempting to iron out the context specific differences for specific instances of an entity.  For instance, though a weapon may be of various wepaon &quot;Types&quot;, in DestinyItemType they are all classified as &quot;Weapon&quot;. This allows for better filtering on a higher level of abstraction for the concept of types. This enum is provided for historical compatibility with Destiny 1, but an ideal alternative is to use DestinyItemCategoryDefinitions and the DestinyItemDefinition.itemCategories property instead. Item Categories allow for arbitrary hierarchies of specificity, and for items to belong to multiple categories across multiple hierarchies simultaneously.  For this enum, we pick a single type as a &quot;best guess&quot; fit. NOTE: This is not all of the item types available, and some of these are holdovers from Destiny 1 that may or may not still exist.

## Schema
* **Type:** Enum
* **Format:** int32

## Enum Values
Identifier | Value | Description
---------- | ----- | -----------
None | 0 | 
Currency | 1 | 
Armor | 2 | 
Weapon | 3 | 
Message | 7 | 
Engram | 8 | 
Consumable | 9 | 
ExchangeMaterial | 10 | 
MissionReward | 11 | 
QuestStep | 12 | 
QuestStepComplete | 13 | 
Emblem | 14 | 
Quest | 15 | 
Subclass | 16 | 
ClanBanner | 17 | 
Aura | 18 | 
Mod | 19 | 

## References
1. https://bungie-net.github.io/multi/schema_Destiny-DestinyItemType.html#schema_Destiny-DestinyItemType
