<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This Enumeration further classifies items by more specific categorizations than DestinyItemType. The &quot;Sub-Type&quot; is where we classify and categorize items one step further in specificity: &quot;Auto Rifle&quot; instead of just &quot;Weapon&quot; for example, or &quot;Vanguard Bounty&quot; instead of merely &quot;Bounty&quot;. These sub-types are provided for historical compatibility with Destiny 1, but an ideal alternative is to use DestinyItemCategoryDefinitions and the DestinyItemDefinition.itemCategories property instead. Item Categories allow for arbitrary hierarchies of specificity, and for items to belong to multiple categories across multiple hierarchies simultaneously. For this enum, we pick a single type as a &quot;best guess&quot; fit. NOTE: This is not all of the item types available, and some of these are holdovers from Destiny 1 that may or may not still exist.

## Schema
* **Schema Type:** Enum
* **Type:** integer
* **Format:** int32

## Enum Values
Identifier | Value | Description
---------- | ----- | -----------
None | 0 | 
Crucible | 1 | 
Vanguard | 2 | 
Exotic | 5 | 
AutoRifle | 6 | 
Shotgun | 7 | 
Machinegun | 8 | 
HandCannon | 9 | 
RocketLauncher | 10 | 
FusionRifle | 11 | 
SniperRifle | 12 | 
PulseRifle | 13 | 
ScoutRifle | 14 | 
Crm | 16 | 
Sidearm | 17 | 
Sword | 18 | 
Mask | 19 | 
Shader | 20 | 

## References
1. https://bungie-net.github.io/multi/schema_Destiny-DestinyItemSubType.html#schema_Destiny-DestinyItemSubType
