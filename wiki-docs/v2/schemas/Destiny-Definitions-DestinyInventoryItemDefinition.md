<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
So much of what you see in Destiny is actually an Item used in a new and creative way.This is the definition for Items in Destiny, which started off as just entities that could existin your Inventory but ended up being the backing data for so much more: quests, reward previews,slots, and subclasses. In practice, you will want to associate this data with &quot;live&quot; item datafrom a Bungie.Net Platform call: these definitions describe the item in generic, non-instancedterms: but an actual instance of an item can vary widely from these generic definitions.

## Schema
* **Type:** Definition
* **Mobile Manifest:** Items

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
secondaryIcon | string | A secondary icon associated with the item.  Currently this is used in very context specificapplications, such as Emblem Nameplates.
secondaryOverlay | string | Pulled from the secondary icon, this is the &quot;secondary background&quot; of the secondaryicon.  Confusing?  Sure, that's why I call it &quot;overlay&quot; here: because as far as it'sbeen used thus far, it has been for an optional overlay image.  We'll see if that holds up,but at least for now it explains what this image is a bit better.
secondarySpecial | string | Pulled from the Secondary Icon, this is the &quot;special&quot; background for the item.For Emblems, this is the background image used on the Details view: but it neednot be limited to that for other types of items.
screenshot | string | If we were able to acquire an in-game screenshot for the item, the path to that screenshotwill be returned here.  Note that not all items have screenshots: particularly not any non-equippableitems.
itemTypeDisplayName | string | The localized title/name of the item's type.  This can be whatever the designers want, and has no guaranteeof consistency between items.
itemTypeAndTierDisplayName | string | It became a common enough pattern in our UI to show Item Type and Tier combined into a single localizedstring that I'm just going to go ahead and start pre-creating these for items.
displaySource | string | In theory, it is a localized string telling you about how you can find the item.I really wish this was more consistent.  Many times, it has nothing.  Sometimes, it's instead a more narrative-forwarddescription of the item.  Which is cool, and I wish all properties had that data, but it should really beits own property.
tooltipStyle | string | An identifier that the game UI uses to determine what type of tooltip to show for the item.  These have nocorresponding definitions that BNet can link to: so it'll be up to you to interpret and display your UI differentlyaccording to these styles (or ignore it).
action | [[DestinyItemActionBlockDefinition|Destiny-Definitions-DestinyItemActionBlockDefinition]]:Definition | If the item can be &quot;used&quot;, this block will be non-null, and will have data related to the action performedwhen using the item.  (Guess what?  99% of the time, this action is &quot;dismantle&quot;.  Shocker)
inventory | [[DestinyItemInventoryBlockDefinition|Destiny-Definitions-DestinyItemInventoryBlockDefinition]]:Definition | If this item can exist in an inventory, this block will be non-null.  In practice,every item that currently exists has one of these blocks.  But note that it is not necessarily guaranteed.
setData | [[DestinyItemSetBlockDefinition|Destiny-Definitions-DestinyItemSetBlockDefinition]]:Definition | If this item is a quest, this block will be non-null.  In practice, I wish I had called this the Questblock, but at the time it wasn't clear to me whether it would end up being used for purposes other than quests.It will contain data about the steps in the quest, and mechanics we can use for displaying and tracking the quest.
stats | [[DestinyItemStatBlockDefinition|Destiny-Definitions-DestinyItemStatBlockDefinition]]:Definition | If this item can have stats (such as a weapon, armor, or vehicle), this block will be non-null andpopulated with the stats found on the item.
equippingBlock | [[DestinyEquippingBlockDefinition|Destiny-Definitions-DestinyEquippingBlockDefinition]]:Definition | If this item can be equipped, this block will be non-null and will be populated with the conditionsunder which it can be equipped.
translationBlock | [[DestinyItemTranslationBlockDefinition|Destiny-Definitions-DestinyItemTranslationBlockDefinition]]:Definition | If this item can be rendered, this block will be non-null and will be populated with renderinginformation.
preview | [[DestinyItemPreviewBlockDefinition|Destiny-Definitions-DestinyItemPreviewBlockDefinition]]:Definition | If this item can be Used or Acquired to gain other items (for instance, how Eververse Boxescan be consumed to get items from the box), this block will be non-null and will give summary informationfor the items that can be acquired.
quality | [[DestinyItemQualityBlockDefinition|Destiny-Definitions-DestinyItemQualityBlockDefinition]]:Definition | If this item can have a level or stats, this block will be non-null and will be populatedwith default quality (item level, &quot;quality&quot;, and infusion) data.  See the block for more details, there'soften less upfront information in D2 so you'll want to be aware of how you use quality and item level onthe definition level now.
value | [[DestinyItemValueBlockDefinition|Destiny-Definitions-DestinyItemValueBlockDefinition]]:Definition | The conceptual &quot;Value&quot; of an item, if any was defined.  See the DestinyItemValueBlockDefinition for more details.
sourceData | [[DestinyItemSourceBlockDefinition|Destiny-Definitions-DestinyItemSourceBlockDefinition]]:Definition | If this item has a known source, this block will be non-null and populatedwith source information.  Unfortunately, at this time we are not generating sources: that is someaggressively manual work which we didn't have time for, and I'm hoping to get back to at some point in the future.
objectives | [[DestinyItemObjectiveBlockDefinition|Destiny-Definitions-DestinyItemObjectiveBlockDefinition]]:Definition | If this item has Objectives (extra tasks that can be accomplished related to the item... most frequentlywhen the item is a Quest Step and the Objectives need to be completed to move on to the next Quest Step),this block will be non-null and the objectives defined herein.
plug | [[DestinyItemPlugDefinition|Destiny-Definitions-Items-DestinyItemPlugDefinition]]:Definition | If this item *is* a Plug, this will be non-null and the info defined herein.See DestinyItemPlugDefinition for more information.
gearset | [[DestinyItemGearsetBlockDefinition|Destiny-Definitions-DestinyItemGearsetBlockDefinition]]:Definition | If this item has related items in a &quot;Gear Set&quot;, this will be non-null and the relationships defined herein.
sack | [[DestinyItemSackBlockDefinition|Destiny-Definitions-DestinyItemSackBlockDefinition]]:Definition | If this item is a &quot;reward sack&quot; that can be opened to provide other items, this will be non-null andthe properties of the sack contained herein.
sockets | [[DestinyItemSocketBlockDefinition|Destiny-Definitions-DestinyItemSocketBlockDefinition]]:Definition | If this item has any Sockets, this will be non-null and the individual sockets on the itemwill be defined herein.
summary | [[DestinyItemSummaryBlockDefinition|Destiny-Definitions-DestinyItemSummaryBlockDefinition]]:Definition | Summary data about the item.
talentGrid | [[DestinyItemTalentGridBlockDefinition|Destiny-Definitions-DestinyItemTalentGridBlockDefinition]]:Definition | If the item has a Talent Grid, this will be non-null and the properties of the grid defined herein.Note that, while many items still have talent grids, the only ones with meaningful Nodes still on themwill be Subclass/&quot;Build&quot; items.
investmentStats | [[DestinyItemInvestmentStatDefinition|Destiny-Definitions-DestinyItemInvestmentStatDefinition]]:Definition[] | If the item has stats, this block will be defined.  It has the &quot;raw&quot; investment stats for the item.These investment stats don't take into account the ways that the items can spawn, nor do they takeinto account any Stat Group transformations.  I have retained them for debugging purposes, but Ido not know how useful people will find them.
perks | [[DestinyItemPerkEntryDefinition|Destiny-Definitions-DestinyItemPerkEntryDefinition]]:Definition[] | If the item has any *intrinsic* Perks (Perks that it will provide regardless of Sockets, Talent Grid,and other transitory state), they will be defined here.
loreHash | [[DestinyLoreDefinition|Destiny-Definitions-Lore-DestinyLoreDefinition]]:ManifestDefinition:integer:uint32:nullable | If the item has any related Lore (DestinyLoreDefinition), this will be the hash identifier you can useto look up the lore definition.
summaryItemHash | [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32:nullable | There are times when the game will show you a &quot;summary/vague&quot; version of an item - such as a description of its typerepresented as a DestinyInventoryItemDefinition - rather than display the item itself. This happens sometimes when summarizing possible rewards in a tooltip.  This is the item displayed instead, ifit exists.
animations | [[DestinyAnimationReference|Destiny-Definitions-Animations-DestinyAnimationReference]]:Definition[] | If any animations were extracted from game content for this item, these will be the definitionsof those animations.
allowActions | boolean | BNet may forbid the execution of actions on this item via the API.  If that is occurring, allowActions will be set to false.
links | [[HyperlinkReference|Links-HyperlinkReference]][] | If we added any help or informational URLs about this item, these will be those links.
nonTransferrable | boolean | The intrinsic transferability of an item. I hate that this boolean is negative - but there's a reason. Just because an item is intrinsically transferrable doesn't mean that it can be transferred,and we don't want to imply that this is the only source of that transferability.
itemCategoryHashes | [[DestinyItemCategoryDefinition|Destiny-Definitions-DestinyItemCategoryDefinition]]:ManifestDefinition:integer:uint32[] | BNet attempts to make a more formal definition of item &quot;Categories&quot;, as defined by DestinyItemCategoryDefinition.  This is a list of all Categories that we were able toalgorithmically determine that this item is a member of.  (for instance, that it's a &quot;Weapon&quot;,that it's an &quot;Auto Rifle&quot;, etc...) The algorithm for these is, unfortunately, volatile.  If you believe you see a miscategorizeditem, please let us know on the Bungie API forums.
specialItemType | [[SpecialItemType|Destiny-SpecialItemType]]:Enum | In Destiny 1, we identified some items as having particular categories that we'd like to know aboutfor various internal logic purposes.  These are defined in SpecialItemType, and while these daysthe itemCategoryHashes are the preferred way of identifying types, we have retained this enumfor its convenience.
itemType | [[DestinyItemType|Destiny-DestinyItemType]]:Enum | A value indicating the &quot;base&quot; the of the item.  This enum is a useful but dramatic oversimplificationof what it means for an item to have a &quot;Type&quot;.  Still, it's handy in many situations. itemCategoryHashes are the preferred way of identifying types, we have retained this enumfor its convenience.
itemSubType | [[DestinyItemSubType|Destiny-DestinyItemSubType]]:Enum | A value indicating the &quot;sub-type&quot; of the item.  For instance, where an item might have anitemType value &quot;Weapon&quot;, this will be something more specific like &quot;Auto Rifle&quot;. itemCategoryHashes are the preferred way of identifying types, we have retained this enumfor its convenience.
classType | [[DestinyClass|Destiny-DestinyClass]]:Enum | We run a similarly weak-sauce algorithm to try and determine whether an item is restricted to a specificclass.  If we find it to be restricted in such a way, we set this classType property to matchthe class' enumeration value so that users can easily identify class restricted items. If you see a mis-classed item, please inform the developers in the Bungie API forum.
equippable | boolean | If true, then you will be allowed to equip the item if you pass its other requirements. This being false means that you cannot equip the item under any circumstances.
damageTypeHashes | [[DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:ManifestDefinition:integer:uint32[] | Theoretically, an item can have many possible damage types.  In *practice*, this is not true,but just in case weapons start being made that have multiple (for instance, an item where a sockethas reusable plugs for every possible damage type that you can choose from freely), this fieldwill return all of the possible damage types that are available to the weapon by default.
damageTypes | [[DamageType|Destiny-DamageType]]:Enum[] | This is the list of all damage types that we know ahead of time the item can take on.Unfortunately, this does not preclude the possibility of something funky happeningto give the item a damage type that cannot be predicted beforehand: for example,if some designer decides to create arbitrary non-reusable plugs that cause damage typeto change. This damage type prediction will only use the following to determine potential damage types: - Intrinsic perks - Talent Node perks - Known, reusable plugs for sockets
defaultDamageType | [[DamageType|Destiny-DamageType]]:Enum | If the item has a damage type that could be considered to be default, it will be populated here. For various upsetting reasons, it's surprisingly cumbersome to figure this out.  I hope you're happy.
defaultDamageTypeHash | [[DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:ManifestDefinition:integer:uint32:nullable | Similar to defaultDamageType, but represented as the hash identifier for a DestinyDamageTypeDefinition. I will likely regret leaving in the enumeration versions of these properties, but for now they'revery convenient.
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
    "secondaryIcon": "",
    // Type: string
    "secondaryOverlay": "",
    // Type: string
    "secondarySpecial": "",
    // Type: string
    "screenshot": "",
    // Type: string
    "itemTypeDisplayName": "",
    // Type: string
    "itemTypeAndTierDisplayName": "",
    // Type: string
    "displaySource": "",
    // Type: string
    "tooltipStyle": "",
    // Type: [[DestinyItemActionBlockDefinition|Destiny-Definitions-DestinyItemActionBlockDefinition]]:Definition
    "action": {
        // Type: string
        "verbName": "",
        // Type: string
        "verbDescription": "",
        // Type: boolean
        "isPositive": false,
        // Type: string
        "overlayScreenName": "",
        // Type: string
        "overlayIcon": "",
        // Type: integer:int32
        "requiredCooldownSeconds": 0,
        // Type: [[DestinyItemActionRequiredItemDefinition|Destiny-Definitions-DestinyItemActionRequiredItemDefinition]]:Definition[]
        "requiredItems": [
           // Type: [[DestinyItemActionRequiredItemDefinition|Destiny-Definitions-DestinyItemActionRequiredItemDefinition]]:Definition
            {
                // Type: integer:int32
                "count": 0,
                // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
                "itemHash": 0,
                // Type: boolean
                "deleteOnAction": false
            }
        ],
        // Type: [[DestinyProgressionRewardDefinition|Destiny-Definitions-DestinyProgressionRewardDefinition]]:Definition[]
        "progressionRewards": [
           // Type: [[DestinyProgressionRewardDefinition|Destiny-Definitions-DestinyProgressionRewardDefinition]]:Definition
            {
                // Type: [[DestinyProgressionMappingDefinition|Destiny-Definitions-DestinyProgressionMappingDefinition]]:Definition:integer:uint32
                "progressionMappingHash": 0,
                // Type: integer:int32
                "amount": 0,
                // Type: boolean
                "applyThrottles": false
            }
        ],
        // Type: string
        "actionTypeLabel": "",
        // Type: string
        "requiredLocation": "",
        // Type: integer:uint32
        "requiredCooldownHash": 0,
        // Type: boolean
        "deleteOnAction": false,
        // Type: boolean
        "consumeEntireStack": false,
        // Type: boolean
        "useOnAcquire": false
    },
    // Type: [[DestinyItemInventoryBlockDefinition|Destiny-Definitions-DestinyItemInventoryBlockDefinition]]:Definition
    "inventory": {
        // Type: string
        "stackUniqueLabel": "",
        // Type: integer:int32
        "maxStackSize": 0,
        // Type: [[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:ManifestDefinition:integer:uint32
        "bucketTypeHash": 0,
        // Type: [[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:ManifestDefinition:integer:uint32
        "recoveryBucketTypeHash": 0,
        // Type: [[DestinyItemTierTypeDefinition|Destiny-Definitions-Items-DestinyItemTierTypeDefinition]]:ManifestDefinition:integer:uint32
        "tierTypeHash": 0,
        // Type: boolean
        "isInstanceItem": false,
        // Type: string
        "tierTypeName": "",
        // Type: [[TierType|Destiny-TierType]]:Enum
        "tierType": 0
    },
    // Type: [[DestinyItemSetBlockDefinition|Destiny-Definitions-DestinyItemSetBlockDefinition]]:Definition
    "setData": {
        // Type: [[DestinyItemSetBlockEntryDefinition|Destiny-Definitions-DestinyItemSetBlockEntryDefinition]]:Definition[]
        "itemList": [
           // Type: [[DestinyItemSetBlockEntryDefinition|Destiny-Definitions-DestinyItemSetBlockEntryDefinition]]:Definition
            {
                // Type: integer:int32
                "trackingValue": 0,
                // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
                "itemHash": 0
            }
        ],
        // Type: boolean
        "requireOrderedSetItemAdd": false,
        // Type: boolean
        "setIsFeatured": false,
        // Type: string
        "setType": ""
    },
    // Type: [[DestinyItemStatBlockDefinition|Destiny-Definitions-DestinyItemStatBlockDefinition]]:Definition
    "stats": {
        // Type: [[DestinyStatGroupDefinition|Destiny-Definitions-DestinyStatGroupDefinition]]:ManifestDefinition:integer:uint32:nullable
        "statGroupHash": 0,
        // Type: Dictionary&lt;[[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32,[[DestinyInventoryItemStatDefinition|Destiny-Definitions-DestinyInventoryItemStatDefinition]]:Definition&gt;
        "stats": {
            "0": {
                // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
                "statHash": 0,
                // Type: integer:int32
                "value": 0,
                // Type: integer:int32
                "minimum": 0,
                // Type: integer:int32
                "maximum": 0
            }
        },
        // Type: boolean
        "hasDisplayableStats": false,
        // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
        "primaryBaseStatHash": 0
    },
    // Type: [[DestinyEquippingBlockDefinition|Destiny-Definitions-DestinyEquippingBlockDefinition]]:Definition
    "equippingBlock": {
        // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32:nullable
        "gearsetItemHash": 0,
        // Type: string
        "uniqueLabel": "",
        // Type: integer:uint32
        "uniqueLabelHash": 0,
        // Type: [[DestinyEquipmentSlotDefinition|Destiny-Definitions-DestinyEquipmentSlotDefinition]]:Definition:integer:uint32
        "equipmentSlotTypeHash": 0,
        // Type: [[EquippingItemBlockAttributes|Destiny-EquippingItemBlockAttributes]]:Enum
        "attributes": 0,
        // Type: string[]
        "displayStrings": [
           // Type: string
            ""
        ]
    },
    // Type: [[DestinyItemTranslationBlockDefinition|Destiny-Definitions-DestinyItemTranslationBlockDefinition]]:Definition
    "translationBlock": {
        // Type: string
        "weaponPatternIdentifier": "",
        // Type: integer:uint32
        "weaponPatternHash": 0,
        // Type: [[DyeReference|Destiny-DyeReference]][]
        "defaultDyes": [
           // Type: [[DyeReference|Destiny-DyeReference]]
            {
                // Type: integer:uint32
                "channelHash": 0,
                // Type: integer:uint32
                "dyeHash": 0
            }
        ],
        // Type: [[DyeReference|Destiny-DyeReference]][]
        "lockedDyes": [
           // Type: [[DyeReference|Destiny-DyeReference]]
            {
                // Type: integer:uint32
                "channelHash": 0,
                // Type: integer:uint32
                "dyeHash": 0
            }
        ],
        // Type: [[DyeReference|Destiny-DyeReference]][]
        "customDyes": [
           // Type: [[DyeReference|Destiny-DyeReference]]
            {
                // Type: integer:uint32
                "channelHash": 0,
                // Type: integer:uint32
                "dyeHash": 0
            }
        ],
        // Type: [[DestinyGearArtArrangementReference|Destiny-Definitions-DestinyGearArtArrangementReference]]:Definition[]
        "arrangements": [
           // Type: [[DestinyGearArtArrangementReference|Destiny-Definitions-DestinyGearArtArrangementReference]]:Definition
            {
                // Type: integer:uint32
                "classHash": 0,
                // Type: integer:uint32
                "artArrangementHash": 0
            }
        ],
        // Type: boolean
        "hasGeometry": false
    },
    // Type: [[DestinyItemPreviewBlockDefinition|Destiny-Definitions-DestinyItemPreviewBlockDefinition]]:Definition
    "preview": {
        // Type: [[DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:ManifestDefinition:integer:uint32
        "previewVendorHash": 0,
        // Type: string
        "previewActionString": "",
        // Type: [[DestinyDerivedItemCategoryDefinition|Destiny-Definitions-Items-DestinyDerivedItemCategoryDefinition]]:Definition[]
        "derivedItemCategories": [
           // Type: [[DestinyDerivedItemCategoryDefinition|Destiny-Definitions-Items-DestinyDerivedItemCategoryDefinition]]:Definition
            {
                // Type: string
                "categoryDescription": "",
                // Type: [[DestinyDerivedItemDefinition|Destiny-Definitions-Items-DestinyDerivedItemDefinition]]:Definition[]
                "items": [
                   // Type: [[DestinyDerivedItemDefinition|Destiny-Definitions-Items-DestinyDerivedItemDefinition]]:Definition
                    {
                        // Type: integer:uint32:nullable
                        "itemHash": 0,
                        // Type: string
                        "itemName": "",
                        // Type: string
                        "itemDetail": "",
                        // Type: string
                        "itemDescription": "",
                        // Type: string
                        "iconPath": "",
                        // Type: integer:int32
                        "vendorItemIndex": 0
                    }
                ]
            }
        ]
    },
    // Type: [[DestinyItemQualityBlockDefinition|Destiny-Definitions-DestinyItemQualityBlockDefinition]]:Definition
    "quality": {
        // Type: integer:int32[]
        "itemLevels": [
           // Type: integer:int32
            0
        ],
        // Type: integer:int32
        "qualityLevel": 0,
        // Type: string
        "infusionCategoryName": "",
        // Type: integer:uint32
        "infusionCategoryHash": 0,
        // Type: [[DestinyProgressionLevelRequirementDefinition|Destiny-Definitions-Progression-DestinyProgressionLevelRequirementDefinition]]:ManifestDefinition:integer:uint32
        "progressionLevelRequirementHash": 0
    },
    // Type: [[DestinyItemValueBlockDefinition|Destiny-Definitions-DestinyItemValueBlockDefinition]]:Definition
    "value": {
        // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
        "itemValue": [
           // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]]
            {
                // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
                "itemHash": 0,
                // Type: integer:int64:nullable
                "itemInstanceId": 0,
                // Type: integer:int32
                "quantity": 0
            }
        ],
        // Type: string
        "valueDescription": ""
    },
    // Type: [[DestinyItemSourceBlockDefinition|Destiny-Definitions-DestinyItemSourceBlockDefinition]]:Definition
    "sourceData": {
        // Type: [[DestinyRewardSourceDefinition|Destiny-Definitions-DestinyRewardSourceDefinition]]:ManifestDefinition:integer:uint32[]
        "sourceHashes": [
           // Type: integer:uint32
            0
        ],
        // Type: [[DestinyItemSourceDefinition|Destiny-Definitions-Sources-DestinyItemSourceDefinition]]:Definition[]
        "sources": [
           // Type: [[DestinyItemSourceDefinition|Destiny-Definitions-Sources-DestinyItemSourceDefinition]]:Definition
            {
                // Type: integer:int32
                "level": 0,
                // Type: integer:int32
                "minQuality": 0,
                // Type: integer:int32
                "maxQuality": 0,
                // Type: integer:int32
                "minLevelRequired": 0,
                // Type: integer:int32
                "maxLevelRequired": 0,
                // Type: Dictionary&lt;integer:uint32,[[DestinyInventoryItemStatDefinition|Destiny-Definitions-DestinyInventoryItemStatDefinition]]:Definition&gt;
                "computedStats": {
                    "0": {
                        // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
                        "statHash": 0,
                        // Type: integer:int32
                        "value": 0,
                        // Type: integer:int32
                        "minimum": 0,
                        // Type: integer:int32
                        "maximum": 0
                    }
                },
                // Type: [[DestinyRewardSourceDefinition|Destiny-Definitions-DestinyRewardSourceDefinition]]:ManifestDefinition:integer:uint32[]
                "sourceHashes": [
                   // Type: integer:uint32
                    0
                ]
            }
        ],
        // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
        "exclusive": 0
    },
    // Type: [[DestinyItemObjectiveBlockDefinition|Destiny-Definitions-DestinyItemObjectiveBlockDefinition]]:Definition
    "objectives": {
        // Type: [[DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:ManifestDefinition:integer:uint32[]
        "objectiveHashes": [
           // Type: integer:uint32
            0
        ],
        // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32[]
        "displayActivityHashes": [
           // Type: integer:uint32
            0
        ],
        // Type: boolean
        "requireFullObjectiveCompletion": false,
        // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
        "questlineItemHash": 0,
        // Type: string
        "narrative": "",
        // Type: string
        "objectiveVerbName": "",
        // Type: string
        "questTypeIdentifier": "",
        // Type: integer:uint32
        "questTypeHash": 0
    },
    // Type: [[DestinyItemPlugDefinition|Destiny-Definitions-Items-DestinyItemPlugDefinition]]:Definition
    "plug": {
        // Type: [[DestinyPlugRuleDefinition|Destiny-Definitions-Items-DestinyPlugRuleDefinition]]:Definition[]
        "insertionRules": [
           // Type: [[DestinyPlugRuleDefinition|Destiny-Definitions-Items-DestinyPlugRuleDefinition]]:Definition
            {
                // Type: string
                "failureMessage": ""
            }
        ],
        // Type: string
        "plugCategoryIdentifier": "",
        // Type: integer:uint32
        "plugCategoryHash": 0,
        // Type: boolean
        "onActionRecreateSelf": false,
        // Type: [[DestinyMaterialRequirementSetDefinition|Destiny-Definitions-DestinyMaterialRequirementSetDefinition]]:Definition:integer:uint32
        "insertionMaterialRequirementHash": 0,
        // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
        "previewItemOverrideHash": 0,
        // Type: [[DestinyMaterialRequirementSetDefinition|Destiny-Definitions-DestinyMaterialRequirementSetDefinition]]:Definition:integer:uint32
        "enabledMaterialRequirementHash": 0,
        // Type: [[DestinyPlugRuleDefinition|Destiny-Definitions-Items-DestinyPlugRuleDefinition]]:Definition[]
        "enabledRules": [
           // Type: [[DestinyPlugRuleDefinition|Destiny-Definitions-Items-DestinyPlugRuleDefinition]]:Definition
            {
                // Type: string
                "failureMessage": ""
            }
        ]
    },
    // Type: [[DestinyItemGearsetBlockDefinition|Destiny-Definitions-DestinyItemGearsetBlockDefinition]]:Definition
    "gearset": {
        // Type: integer:int32
        "trackingValueMax": 0,
        // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32[]
        "itemList": [
           // Type: integer:uint32
            0
        ]
    },
    // Type: [[DestinyItemSackBlockDefinition|Destiny-Definitions-DestinyItemSackBlockDefinition]]:Definition
    "sack": {
        // Type: string
        "detailAction": "",
        // Type: string
        "openAction": "",
        // Type: integer:int32
        "selectItemCount": 0,
        // Type: string
        "vendorSackType": ""
    },
    // Type: [[DestinyItemSocketBlockDefinition|Destiny-Definitions-DestinyItemSocketBlockDefinition]]:Definition
    "sockets": {
        // Type: string
        "detail": "",
        // Type: [[DestinyItemSocketEntryDefinition|Destiny-Definitions-DestinyItemSocketEntryDefinition]]:Definition[]
        "socketEntries": [
           // Type: [[DestinyItemSocketEntryDefinition|Destiny-Definitions-DestinyItemSocketEntryDefinition]]:Definition
            {
                // Type: [[DestinySocketTypeDefinition|Destiny-Definitions-Sockets-DestinySocketTypeDefinition]]:ManifestDefinition:integer:uint32
                "socketTypeHash": 0,
                // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
                "singleInitialItemHash": 0,
                // Type: [[DestinyItemSocketEntryPlugItemDefinition|Destiny-Definitions-DestinyItemSocketEntryPlugItemDefinition]]:Definition[]
                "reusablePlugItems": [
                   // Type: [[DestinyItemSocketEntryPlugItemDefinition|Destiny-Definitions-DestinyItemSocketEntryPlugItemDefinition]]:Definition
                    {
                        // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
                        "plugItemHash": 0
                    }
                ]
            }
        ],
        // Type: [[DestinyItemSocketCategoryDefinition|Destiny-Definitions-DestinyItemSocketCategoryDefinition]]:Definition[]
        "socketCategories": [
           // Type: [[DestinyItemSocketCategoryDefinition|Destiny-Definitions-DestinyItemSocketCategoryDefinition]]:Definition
            {
                // Type: [[DestinyItemSocketCategoryDefinition|Destiny-Definitions-DestinyItemSocketCategoryDefinition]]:Definition:integer:uint32
                "socketCategoryHash": 0,
                // Type: integer:int32[]
                "socketIndexes": [
                   // Type: integer:int32
                    0
                ]
            }
        ]
    },
    // Type: [[DestinyItemSummaryBlockDefinition|Destiny-Definitions-DestinyItemSummaryBlockDefinition]]:Definition
    "summary": {
        // Type: integer:int32
        "sortPriority": 0
    },
    // Type: [[DestinyItemTalentGridBlockDefinition|Destiny-Definitions-DestinyItemTalentGridBlockDefinition]]:Definition
    "talentGrid": {
        // Type: [[DestinyTalentGridDefinition|Destiny-Definitions-DestinyTalentGridDefinition]]:ManifestDefinition:integer:uint32
        "talentGridHash": 0,
        // Type: string
        "itemDetailString": "",
        // Type: string
        "buildName": "",
        // Type: [[DamageType|Destiny-DamageType]]:Enum
        "hudDamageType": 0,
        // Type: string
        "hudIcon": ""
    },
    // Type: [[DestinyItemInvestmentStatDefinition|Destiny-Definitions-DestinyItemInvestmentStatDefinition]]:Definition[]
    "investmentStats": [
       // Type: [[DestinyItemInvestmentStatDefinition|Destiny-Definitions-DestinyItemInvestmentStatDefinition]]:Definition
        {
            // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
            "statTypeHash": 0,
            // Type: integer:int32
            "value": 0
        }
    ],
    // Type: [[DestinyItemPerkEntryDefinition|Destiny-Definitions-DestinyItemPerkEntryDefinition]]:Definition[]
    "perks": [
       // Type: [[DestinyItemPerkEntryDefinition|Destiny-Definitions-DestinyItemPerkEntryDefinition]]:Definition
        {
            // Type: string
            "requirementDisplayString": "",
            // Type: [[DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:ManifestDefinition:integer:uint32
            "perkHash": 0
        }
    ],
    // Type: [[DestinyLoreDefinition|Destiny-Definitions-Lore-DestinyLoreDefinition]]:ManifestDefinition:integer:uint32:nullable
    "loreHash": 0,
    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32:nullable
    "summaryItemHash": 0,
    // Type: [[DestinyAnimationReference|Destiny-Definitions-Animations-DestinyAnimationReference]]:Definition[]
    "animations": [
       // Type: [[DestinyAnimationReference|Destiny-Definitions-Animations-DestinyAnimationReference]]:Definition
        {
            // Type: string
            "animName": "",
            // Type: string
            "animIdentifier": "",
            // Type: string
            "path": ""
        }
    ],
    // Type: boolean
    "allowActions": false,
    // Type: [[HyperlinkReference|Links-HyperlinkReference]][]
    "links": [
       // Type: [[HyperlinkReference|Links-HyperlinkReference]]
        {
            // Type: string
            "title": "",
            // Type: string
            "url": ""
        }
    ],
    // Type: boolean
    "nonTransferrable": false,
    // Type: [[DestinyItemCategoryDefinition|Destiny-Definitions-DestinyItemCategoryDefinition]]:ManifestDefinition:integer:uint32[]
    "itemCategoryHashes": [
       // Type: integer:uint32
        0
    ],
    // Type: [[SpecialItemType|Destiny-SpecialItemType]]:Enum
    "specialItemType": 0,
    // Type: [[DestinyItemType|Destiny-DestinyItemType]]:Enum
    "itemType": 0,
    // Type: [[DestinyItemSubType|Destiny-DestinyItemSubType]]:Enum
    "itemSubType": 0,
    // Type: [[DestinyClass|Destiny-DestinyClass]]:Enum
    "classType": 0,
    // Type: boolean
    "equippable": false,
    // Type: [[DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:ManifestDefinition:integer:uint32[]
    "damageTypeHashes": [
       // Type: integer:uint32
        0
    ],
    // Type: [[DamageType|Destiny-DamageType]]:Enum[]
    "damageTypes": [
       // Type: [[DamageType|Destiny-DamageType]]:Enum
        0
    ],
    // Type: [[DamageType|Destiny-DamageType]]:Enum
    "defaultDamageType": 0,
    // Type: [[DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:ManifestDefinition:integer:uint32:nullable
    "defaultDamageTypeHash": 0,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyInventoryItemDefinition.html#schema_Destiny-Definitions-DestinyInventoryItemDefinition
