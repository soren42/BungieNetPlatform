<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## <a name="Headers"></a>Headers
Name | Schema | Required | Description
---- | ------ | -------- | -----------
X-API-Key | string | Yes | When you have registered an Application at https://www.bungie.net/en/Application, you will receive an API key.  You should pass it in via this header with every request.

## <a name="Security"></a>Security (2)
Name | Type | Description
---- | ---- | -----------
[[apiKey|SecuritySchemas#apiKey]] | apiKey | Every request requires an API key.  To get an API key, register a new application at https://www.bungie.net/en/Application.
[[oauth2|SecuritySchemas#oauth2]] | oauth2 | For requests that require Authentication, you will need to have your users authenticate via our OAuth mechanisms.  See https://github.com/Bungie-net/api/wiki/OAuth-Documentation for more details.
## <a name="Schemas"></a>Schemas (454)
## <a name="Schemas-ManifestDefinition"></a>Manifest Definition Schemas
Name | Description
---- | -----------
[[Destiny.Definitions.ActivityModifiers.DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyActivityTypeDefinition|Destiny-Definitions-DestinyActivityTypeDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyClassDefinition|Destiny-Definitions-DestinyClassDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyFactionVendorDefinition|Destiny-Definitions-DestinyFactionVendorDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyGenderDefinition|Destiny-Definitions-DestinyGenderDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyItemCategoryDefinition|Destiny-Definitions-DestinyItemCategoryDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyLocationDefinition|Destiny-Definitions-DestinyLocationDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyPlaceDefinition|Destiny-Definitions-DestinyPlaceDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyRaceDefinition|Destiny-Definitions-DestinyRaceDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyRewardSourceDefinition|Destiny-Definitions-DestinyRewardSourceDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyStatGroupDefinition|Destiny-Definitions-DestinyStatGroupDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyTalentGridDefinition|Destiny-Definitions-DestinyTalentGridDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.Director.DestinyActivityGraphDefinition|Destiny-Definitions-Director-DestinyActivityGraphDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.Items.DestinyItemTierTypeDefinition|Destiny-Definitions-Items-DestinyItemTierTypeDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.Lore.DestinyLoreDefinition|Destiny-Definitions-Lore-DestinyLoreDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.Milestones.DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.Progression.DestinyProgressionLevelRequirementDefinition|Destiny-Definitions-Progression-DestinyProgressionLevelRequirementDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.Reporting.DestinyReportReasonCategoryDefinition|Destiny-Definitions-Reporting-DestinyReportReasonCategoryDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.Sockets.DestinySocketCategoryDefinition|Destiny-Definitions-Sockets-DestinySocketCategoryDefinition]] | Scope: <i></i><br/>
[[Destiny.Definitions.Sockets.DestinySocketTypeDefinition|Destiny-Definitions-Sockets-DestinySocketTypeDefinition]] | Scope: <i></i><br/>
[[Destiny.HistoricalStats.Definitions.DestinyHistoricalStatsDefinition|Destiny-HistoricalStats-Definitions-DestinyHistoricalStatsDefinition]] | Scope: <i></i><br/>

## <a name="Schemas-Definition"></a>Definition Schemas
Name | Manifest | Description
---- | -------- | -----------
[[DestinyActivityChallengeDefinition|Destiny-Definitions-DestinyActivityChallengeDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Represents a reference to a Challenge, which for now is just an Objective.
[[DestinyActivityGraphArtElementDefinition|Destiny-Definitions-Director-DestinyActivityGraphArtElementDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>These Art Elements are meant to represent one-off visual effects overlaid on the map. Currently, we do not have a pipeline to import the assets for these overlays, so this info exists as a placeholder for when such a pipeline exists (if it ever will)
[[DestinyActivityGraphConnectionDefinition|Destiny-Definitions-Director-DestinyActivityGraphConnectionDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>Nodes on a graph can be visually connected: this appears to be the information about which nodes to link. It appears to lack more detailed information, such as the path for that linking.
[[DestinyActivityGraphDisplayObjectiveDefinition|Destiny-Definitions-Director-DestinyActivityGraphDisplayObjectiveDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>When a Graph needs to show active Objectives, this defines those objectives as well as an identifier.
[[DestinyActivityGraphDisplayProgressionDefinition|Destiny-Definitions-Director-DestinyActivityGraphDisplayProgressionDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>When a Graph needs to show active Progressions, this defines those objectives as well as an identifier.
[[DestinyActivityGraphListEntryDefinition|Destiny-Definitions-DestinyActivityGraphListEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Destinations and Activities may have default Activity Graphs that should be shown when you bring up the Director and are playing in either. (truncated)
[[DestinyActivityGraphNodeActivityDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeActivityDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>The actual activity to be redirected to when you click on the node. Note that a node can have many Activities attached to it: but only one will be active at any given time. The list of Node Activities will be traversed, and the first one found to be active will be displayed. This way, a node can layer multiple variants of an activity on top of each other. For instance, one node can control the weekly Crucible Playlist. There are multiple possible playlists, but only one is active for the week.
[[DestinyActivityGraphNodeDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>This is the position and other data related to nodes in the activity graph that you can click to launch activities. An Activity Graph node will only have one active Activity at a time, which will determine the activity to be launched (and, unless overrideDisplay information is provided, will also determine the tooltip and other UI related to the node)
[[DestinyActivityGraphNodeFeaturingStateDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeFeaturingStateDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>Nodes can have different visual states. This object represents a single visual state (&quot;highlight type&quot;) that a node can be in, and the unlock expression condition to determine whether it should be set.
[[DestinyActivityGuidedBlockDefinition|Destiny-Definitions-DestinyActivityGuidedBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Guided Game information for this activity.
[[DestinyActivityMatchmakingBlockDefinition|Destiny-Definitions-DestinyActivityMatchmakingBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Information about matchmaking and party size for the activity.
[[DestinyActivityModifierReferenceDefinition|Destiny-Definitions-DestinyActivityModifierReferenceDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>A reference to an Activity Modifier from another entity, such as an Activity (for now, just Activities). (truncated)
[[DestinyActivityPlaylistItemDefinition|Destiny-Definitions-DestinyActivityPlaylistItemDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>If the activity is a playlist, this is the definition for a specific entry in the playlist: a single possible combination of Activity and Activity Mode that can be chosen.
[[DestinyActivityRewardDefinition|Destiny-Definitions-DestinyActivityRewardDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Activities can refer to one or more sets of tooltip-friendly reward data. These are the definitions for those tooltip friendly rewards.
[[DestinyActivityUnlockStringDefinition|Destiny-Definitions-DestinyActivityUnlockStringDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Represents a status string that could be conditionally displayed about an activity. Note that externally, you can only see the strings themselves. Internally we combine this information with server state to determine which strings should be shown.
[[DestinyAnimationReference|Destiny-Definitions-Animations-DestinyAnimationReference]] |  | Scope: <i>Destiny.Definitions.Animations</i><br/>
[[DestinyBubbleDefinition|Destiny-Definitions-DestinyBubbleDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Basic identifying data about the bubble. Combine with DestinyDestinationBubbleSettingDefinition - see DestinyDestinationDefinition.bubbleSettings for more information.
[[DestinyDefinition|Destiny-Definitions-DestinyDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Provides common properties for destiny definitions.
[[DestinyDerivedItemCategoryDefinition|Destiny-Definitions-Items-DestinyDerivedItemCategoryDefinition]] |  | Scope: <i>Destiny.Definitions.Items</i><br/>A shortcut for the fact that some items have a &quot;Preview Vendor&quot; - See DestinyInventoryItemDefinition.preview.previewVendorHash - that is intended to be used to show what items you can get as a result of acquiring or using this item. (truncated)
[[DestinyDerivedItemDefinition|Destiny-Definitions-Items-DestinyDerivedItemDefinition]] |  | Scope: <i>Destiny.Definitions.Items</i><br/>This is a reference to, and summary data for, a specific item that you can get as a result of Using or Acquiring some other Item (For example, this could be summary information for an Emote that you can get by opening an an Eververse Box) See DestinyDerivedItemCategoryDefinition for more information.
[[DestinyDestinationBubbleSettingDefinition|Destiny-Definitions-DestinyDestinationBubbleSettingDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Human readable data about the bubble. Combine with DestinyBubbleDefinition - see DestinyDestinationDefinition.bubbleSettings for more information.
[[DestinyDisplayCategoryDefinition|Destiny-Definitions-DestinyDisplayCategoryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Display Categories are different from &quot;categories&quot; in that these are specifically for visual grouping and display of categories in Vendor UI. The &quot;categories&quot; structure is for validation of the contained items, and can be categorized entirely separately from &quot;Display Categories&quot;, there need be and often will be no meaningful relationship between the two.
[[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]] |  | Scope: <i>Destiny.Definitions.Common</i><br/>Many Destiny*Definition contracts - the &quot;first order&quot; entities of Destiny that have their own tables in the Manifest Database - also have displayable information. This is the base class for that display information.
[[DestinyEntitySearchResult|Destiny-Definitions-DestinyEntitySearchResult]] |  | Scope: <i>Destiny.Definitions</i><br/>The results of a search for Destiny content. This will be improved on over time, I've been doing some experimenting to see what might be useful.
[[DestinyEntitySearchResultItem|Destiny-Definitions-DestinyEntitySearchResultItem]] |  | Scope: <i>Destiny.Definitions</i><br/>An individual Destiny Entity returned from the entity search.
[[DestinyEquipmentSlotDefinition|Destiny-Definitions-DestinyEquipmentSlotDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Characters can not only have Inventory buckets (containers of items that are generally matched by their type or functionality), they can also have Equipment Slots. (truncated)
[[DestinyEquippingBlockDefinition|Destiny-Definitions-DestinyEquippingBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Items that can be equipped define this block. It contains information we need to understand how and when the item can be equipped.
[[DestinyGearArtArrangementReference|Destiny-Definitions-DestinyGearArtArrangementReference]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyInsertPlugActionDefinition|Destiny-Definitions-Sockets-DestinyInsertPlugActionDefinition]] |  | Scope: <i>Destiny.Definitions.Sockets</i><br/>Data related to what happens while a plug is being inserted, mostly for UI purposes.
[[DestinyInventoryItemStatDefinition|Destiny-Definitions-DestinyInventoryItemStatDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Defines a specific stat value on an item, and the minimum/maximum range that we could compute for the item based on our heuristics for how the item might be generated. (truncated)
[[DestinyItemActionBlockDefinition|Destiny-Definitions-DestinyItemActionBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>If an item can have an action performed on it (like &quot;Dismantle&quot;), it will be defined here if you care.
[[DestinyItemActionRequiredItemDefinition|Destiny-Definitions-DestinyItemActionRequiredItemDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>The definition of an item and quantity required in a character's inventory in order to perform an action.
[[DestinyItemCreationEntryLevelDefinition|Destiny-Definitions-DestinyItemCreationEntryLevelDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>An overly complicated wrapper for the item level at which the item should spawn.
[[DestinyItemGearsetBlockDefinition|Destiny-Definitions-DestinyItemGearsetBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>If an item has a related gearset, this is the list of items in that set, and an unlock expression that evaluates to a number representing the progress toward gearset completion (a very rare use for unlock expressions!)
[[DestinyItemInventoryBlockDefinition|Destiny-Definitions-DestinyItemInventoryBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>If the item can exist in an inventory - the overwhelming majority of them can and do - then this is the basic properties regarding the item's relationship with the inventory.
[[DestinyItemInvestmentStatDefinition|Destiny-Definitions-DestinyItemInvestmentStatDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Represents a &quot;raw&quot; investment stat, before calculated stats are calculated and before any DestinyStatGroupDefinition is applied to transform the stat into something closer to what you see in-game. (truncated)
[[DestinyItemObjectiveBlockDefinition|Destiny-Definitions-DestinyItemObjectiveBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>An item can have objectives on it. In practice, these are the exclusive purview of &quot;Quest Step&quot; items: DestinyInventoryItemDefinitions that represent a specific step in a Quest. (truncated)
[[DestinyItemPerkEntryDefinition|Destiny-Definitions-DestinyItemPerkEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>An intrinsic perk on an item, and the requirements for it to be activated.
[[DestinyItemPlugDefinition|Destiny-Definitions-Items-DestinyItemPlugDefinition]] |  | Scope: <i>Destiny.Definitions.Items</i><br/>If an item is a Plug, its DestinyInventoryItemDefinition.plug property will be populated with an instance of one of these bad boys. (truncated)
[[DestinyItemPreviewBlockDefinition|Destiny-Definitions-DestinyItemPreviewBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Items like Sacks or Boxes can have items that it shows in-game when you view details that represent the items you can obtain if you use or acquire the item. (truncated)
[[DestinyItemQualityBlockDefinition|Destiny-Definitions-DestinyItemQualityBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>An item's &quot;Quality&quot; determines its calculated stats. The Level at which the item spawns is combined with its &quot;qualityLevel&quot; along with some additional calculations to determine the value of those stats. (truncated)
[[DestinyItemSackBlockDefinition|Destiny-Definitions-DestinyItemSackBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Some items are &quot;sacks&quot; - they can be &quot;opened&quot; to produce other items. This is information related to its sack status, mostly UI strings. Engrams are an example of items that are considered to be &quot;Sacks&quot;.
[[DestinyItemSetBlockDefinition|Destiny-Definitions-DestinyItemSetBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Primarily for Quests, this is the definition of properties related to the item if it is a quest and its various quest steps.
[[DestinyItemSetBlockEntryDefinition|Destiny-Definitions-DestinyItemSetBlockEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Defines a particular entry in an ItemSet (AKA a particular Quest Step in a Quest)
[[DestinyItemSocketBlockDefinition|Destiny-Definitions-DestinyItemSocketBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>If defined, the item has at least one socket.
[[DestinyItemSocketCategoryDefinition|Destiny-Definitions-DestinyItemSocketCategoryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Sockets are grouped into categories in the UI. These define which category and which sockets are under that category.
[[DestinyItemSocketEntryDefinition|Destiny-Definitions-DestinyItemSocketEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>The definition information for a specific socket on an item. This will determine how the socket behaves in-game.
[[DestinyItemSocketEntryPlugItemDefinition|Destiny-Definitions-DestinyItemSocketEntryPlugItemDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>The definition of a known, reusable plug that can be applied to a socket.
[[DestinyItemSourceBlockDefinition|Destiny-Definitions-DestinyItemSourceBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Data about an item's &quot;sources&quot;: ways that the item can be obtained.
[[DestinyItemSourceDefinition|Destiny-Definitions-Sources-DestinyItemSourceDefinition]] |  | Scope: <i>Destiny.Definitions.Sources</i><br/>Properties of a DestinyInventoryItemDefinition that store all of the information we were able to discern about how the item spawns, and where you can find the item. (truncated)
[[DestinyItemStatBlockDefinition|Destiny-Definitions-DestinyItemStatBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Information about the item's calculated stats, with as much data as we can find for the stats without having an actual instance of the item. (truncated)
[[DestinyItemSummaryBlockDefinition|Destiny-Definitions-DestinyItemSummaryBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>This appears to be information used when rendering rewards. We don't currently use it on BNet.
[[DestinyItemTalentGridBlockDefinition|Destiny-Definitions-DestinyItemTalentGridBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>This defines information that can only come from a talent grid on an item. Items mostly have negligible talent grid data these days, but instanced items still retain grids as a source for some of this common information. (truncated)
[[DestinyItemTierTypeInfusionBlock|Destiny-Definitions-Items-DestinyItemTierTypeInfusionBlock]] |  | Scope: <i>Destiny.Definitions.Items</i><br/>
[[DestinyItemTranslationBlockDefinition|Destiny-Definitions-DestinyItemTranslationBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>This Block defines the rendering data associated with the item, if any.
[[DestinyItemValueBlockDefinition|Destiny-Definitions-DestinyItemValueBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>This defines an item's &quot;Value&quot;. Unfortunately, this appears to be used in different ways depending on the way that the item itself is used. (truncated)
[[DestinyLinkedGraphDefinition|Destiny-Definitions-Director-DestinyLinkedGraphDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>This describes links between the current graph and others, as well as when that link is relevant.
[[DestinyLinkedGraphEntryDefinition|Destiny-Definitions-Director-DestinyLinkedGraphEntryDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>
[[DestinyLocationReleaseDefinition|Destiny-Definitions-DestinyLocationReleaseDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>A specific &quot;spot&quot; referred to by a location. Only one of these can be active at a time for a given Location.
[[DestinyMaterialRequirement|Destiny-Definitions-DestinyMaterialRequirement]] |  | Scope: <i>Destiny.Definitions</i><br/>Many actions relating to items require you to expend materials: - Activating a talent node - Inserting a plug into a socket The items will refer to material requirements by a materialRequirementsHash in these cases, and this is the definition for those requirements in terms of the item required, how much of it is required and other interesting info. This is one of the rare/strange times where a single contract class is used both in definitions *and* in live data response contracts. I'm not sure yet whether I regret that.
[[DestinyMaterialRequirementSetDefinition|Destiny-Definitions-DestinyMaterialRequirementSetDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Represent a set of material requirements: Items that either need to be owned or need to be consumed in order to perform an action. (truncated)
[[DestinyMilestoneActivityDefinition|Destiny-Definitions-Milestones-DestinyMilestoneActivityDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>Milestones can have associated activities which provide additional information about the context, challenges, modifiers, state etc... related to this Milestone.  (truncated)
[[DestinyMilestoneActivityVariantDefinition|Destiny-Definitions-Milestones-DestinyMilestoneActivityVariantDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>Represents a variant on an activity for a Milestone: a specific difficulty tier, or a specific activity variant for example. (truncated)
[[DestinyMilestoneQuestDefinition|Destiny-Definitions-Milestones-DestinyMilestoneQuestDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>Any data we need to figure out whether this Quest Item is the currently active one for the conceptual Milestone. Even just typing this description, I already regret it.
[[DestinyMilestoneQuestRewardItem|Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardItem]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>A subclass of DestinyItemQuantity, that provides not just the item and its quantity but also information that BNet can - at some point - use internally to provide more robust runtime information about the item's qualities. (truncated)
[[DestinyMilestoneQuestRewardsDefinition|Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardsDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>If rewards are given in a quest - as opposed to overall in the entire Milestone - there's way less to track. We're going to simplify this contract as a result. However, this also gives us the opportunity to potentially put more than just item information into the reward data if we're able to mine it out in the future. Remember this if you come back and ask &quot;why are quest reward items nested inside of their own class?&quot;
[[DestinyMilestoneRewardCategoryDefinition|Destiny-Definitions-Milestones-DestinyMilestoneRewardCategoryDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>The definition of a category of rewards, that contains many individual rewards.
[[DestinyMilestoneRewardEntryDefinition|Destiny-Definitions-Milestones-DestinyMilestoneRewardEntryDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>The definition of a specific reward, which may be contained in a category of rewards and that has optional information about how it is obtained.
[[DestinyMilestoneValueDefinition|Destiny-Definitions-Milestones-DestinyMilestoneValueDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>The definition for information related to a key/value pair that is relevant for a particular Milestone or component within the Milestone.  (truncated)
[[DestinyMilestoneVendorDefinition|Destiny-Definitions-Milestones-DestinyMilestoneVendorDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>If the Milestone or a component has vendors whose inventories could/should be displayed that are relevant to it, this will return the vendor in question.  (truncated)
[[DestinyNodeActivationRequirement|Destiny-Definitions-DestinyNodeActivationRequirement]] |  | Scope: <i>Destiny.Definitions</i><br/>Talent nodes have requirements that must be met before they can be activated. (truncated)
[[DestinyNodeSocketReplaceResponse|Destiny-Definitions-DestinyNodeSocketReplaceResponse]] |  | Scope: <i>Destiny.Definitions</i><br/>This is a bit of an odd duck. Apparently, if talent nodes steps have this data, the game will go through on step activation and alter the first Socket it finds on the item that has a type matching the given socket type, inserting the indicated plug item.
[[DestinyNodeStepDefinition|Destiny-Definitions-DestinyNodeStepDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>This defines the properties of a &quot;Talent Node Step&quot;. When you see a talent node in game, the actual visible properties that you see (its icon, description, the perks and stats it provides) are not provided by the Node itself, but rather by the currently active Step on the node. (truncated)
[[DestinyObjectivePerkEntryDefinition|Destiny-Definitions-DestinyObjectivePerkEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Defines the conditions under which an intrinsic perk is applied while participating in an Objective. (truncated)
[[DestinyObjectiveStatEntryDefinition|Destiny-Definitions-DestinyObjectiveStatEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Defines the conditions under which stat modifications will be applied to a Character while participating in an objective.
[[DestinyPlugRuleDefinition|Destiny-Definitions-Items-DestinyPlugRuleDefinition]] |  | Scope: <i>Destiny.Definitions.Items</i><br/>Dictates a rule around whether the plug is enabled or insertable. (truncated)
[[DestinyPlugWhitelistEntryDefinition|Destiny-Definitions-Sockets-DestinyPlugWhitelistEntryDefinition]] |  | Scope: <i>Destiny.Definitions.Sockets</i><br/>Defines a plug &quot;Category&quot; that is allowed to be plugged into a socket of this type. (truncated)
[[DestinyPositionDefinition|Destiny-Definitions-Common-DestinyPositionDefinition]] |  | Scope: <i>Destiny.Definitions.Common</i><br/>
[[DestinyProgressionDisplayPropertiesDefinition|Destiny-Definitions-DestinyProgressionDisplayPropertiesDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyProgressionMappingDefinition|Destiny-Definitions-DestinyProgressionMappingDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Aggregations of multiple progressions. (truncated)
[[DestinyProgressionRewardDefinition|Destiny-Definitions-DestinyProgressionRewardDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Inventory Items can reward progression when actions are performed on them. A common example of this in Destiny 1 was Bounties, which would reward Experience on your Character and the like when you completed the bounty. (truncated)
[[DestinyProgressionStepDefinition|Destiny-Definitions-DestinyProgressionStepDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>This defines a single Step in a progression (which roughly equates to a level. See DestinyProgressionDefinition for caveats).
[[DestinyReportReasonDefinition|Destiny-Definitions-Reporting-DestinyReportReasonDefinition]] |  | Scope: <i>Destiny.Definitions.Reporting</i><br/>A specific reason for being banned. Only accessible under the related category (DestinyReportReasonCategoryDefinition) under which it is shown. Note that this means that report reasons' reasonHash are not globally unique: and indeed, entries like &quot;Other&quot; are defined under most categories for example.
[[DestinyStatDisplayDefinition|Destiny-Definitions-DestinyStatDisplayDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Describes the way that an Item Stat (see DestinyStatDefinition) is transformed using the DestinyStatGroupDefinition related to that item. See both of the aforementioned definitions for more information about the stages of stat transformation. (truncated)
[[DestinyStatOverrideDefinition|Destiny-Definitions-DestinyStatOverrideDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Stat Groups (DestinyStatGroupDefinition) has the ability to override the localized text associated with stats that are to be shown on the items with which they are associated. (truncated)
[[DestinyTalentExclusiveGroup|Destiny-Definitions-DestinyTalentExclusiveGroup]] |  | Scope: <i>Destiny.Definitions</i><br/>As of Destiny 2, nodes can exist as part of &quot;Exclusive Groups&quot;. These differ from exclusive sets in that, within the group, many nodes can be activated. But the act of activating any node in the group will cause &quot;opposing&quot; nodes (nodes in groups that are not allowed to be activated at the same time as this group) to deactivate.
[[DestinyTalentNodeCategory|Destiny-Definitions-DestinyTalentNodeCategory]] |  | Scope: <i>Destiny.Definitions</i><br/>An artificial construct provided by Bungie.Net, where we attempt to group talent nodes by functionality. (truncated)
[[DestinyTalentNodeDefinition|Destiny-Definitions-DestinyTalentNodeDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Talent Grids on items have Nodes. These nodes have positions in the talent grid's UI, and contain &quot;Steps&quot; (DestinyTalentNodeStepDefinition), one of whom will be the &quot;Current&quot; step. (truncated)
[[DestinyTalentNodeExclusiveSetDefinition|Destiny-Definitions-DestinyTalentNodeExclusiveSetDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>The list of indexes into the Talent Grid's &quot;nodes&quot; property for nodes in this exclusive set. (See DestinyTalentNodeDefinition.nodeIndex)
[[DestinyTalentNodeStepGroups|Destiny-Definitions-DestinyTalentNodeStepGroups]] |  | Scope: <i>Destiny.Definitions</i><br/>These properties are an attempt to categorize talent node steps by certain common properties. See the related enumerations for the type of properties being categorized.
[[DestinyUnlockExpressionDefinition|Destiny-Definitions-DestinyUnlockExpressionDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Where the sausage gets made. Unlock Expressions are the foundation of the game's gating mechanics and investment-related restrictions. They can test Unlock Flags and Unlock Values for certain states, using a sufficient amount of logical operators such that unlock expressions are effectively Turing complete. (truncated)
[[DestinyVendorAcceptedItemDefinition|Destiny-Definitions-DestinyVendorAcceptedItemDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>If you ever wondered how the Vault works, here it is. (truncated)
[[DestinyVendorActionDefinition|Destiny-Definitions-DestinyVendorActionDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>If a vendor can ever end up performing actions, these are the properties that will be related to those actions. I'm not going to bother documenting this yet, as it is unused and unclear if it will ever be used... but in case it is ever populated and someone finds it useful, it is defined here.
[[DestinyVendorCategoryEntryDefinition|Destiny-Definitions-DestinyVendorCategoryEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>This is the definition for a single Vendor Category, into which Sale Items are grouped.
[[DestinyVendorCategoryOverlayDefinition|Destiny-Definitions-DestinyVendorCategoryOverlayDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>The details of an overlay prompt to show to a user. They are all fairly self-explanatory localized strings that can be shown.
[[DestinyVendorDisplayPropertiesDefinition|Destiny-Definitions-DestinyVendorDisplayPropertiesDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorInteractionDefinition|Destiny-Definitions-DestinyVendorInteractionDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>A Vendor Interaction is a dialog shown by the vendor other than sale items or transfer screens. The vendor is showing you something, and asking you to reply to it by choosing an option or reward.
[[DestinyVendorInteractionReplyDefinition|Destiny-Definitions-DestinyVendorInteractionReplyDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>When the interaction is replied to, Reward sites will fire and items potentially selected based on whether the given unlock expression is TRUE. (truncated)
[[DestinyVendorInteractionSackEntryDefinition|Destiny-Definitions-DestinyVendorInteractionSackEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Compare this sackType to the sack identifier in the DestinyInventoryItemDefinition.vendorSackType property of items. If they match, show this sack with this interaction.
[[DestinyVendorInventoryFlyoutBucketDefinition|Destiny-Definitions-DestinyVendorInventoryFlyoutBucketDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Information about a single inventory bucket in a vendor flyout UI and how it is shown.
[[DestinyVendorInventoryFlyoutDefinition|Destiny-Definitions-DestinyVendorInventoryFlyoutDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>The definition for an &quot;inventory flyout&quot;: a UI screen where we show you part of an otherwise hidden vendor inventory: like the Vault inventory buckets.
[[DestinyVendorItemDefinition|Destiny-Definitions-DestinyVendorItemDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>This represents an item being sold by the vendor.
[[DestinyVendorRequirementDisplayEntryDefinition|Destiny-Definitions-DestinyVendorRequirementDisplayEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>The localized properties of the requirementsDisplay, allowing information about the requirement or item being featured to be seen.
[[DestinyVendorSaleItemActionBlockDefinition|Destiny-Definitions-DestinyVendorSaleItemActionBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>Not terribly useful, some basic cooldown interaction info.
[[DestinyVendorServiceDefinition|Destiny-Definitions-DestinyVendorServiceDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>When a vendor provides services, this is the localized name of those services.

## <a name="Schemas-Enum"></a>Enum Schemas
Name | Description
---- | -----------
[[ActivityGraphNodeHighlightType|Destiny-ActivityGraphNodeHighlightType]] | Scope: <i>Destiny</i><br/>
[[ApplicationScopes|Applications-ApplicationScopes]] | Scope: <i>Applications</i><br/>
[[BucketCategory|Destiny-BucketCategory]] | Scope: <i>Destiny</i><br/>
[[BucketScope|Destiny-BucketScope]] | Scope: <i>Destiny</i><br/>
[[BungieMembershipType|BungieMembershipType]] | Scope: <i></i><br/>
[[Capabilities|GroupsV2-Capabilities]] | Scope: <i>GroupsV2</i><br/>
[[ChatSecuritySetting|GroupsV2-ChatSecuritySetting]] | Scope: <i>GroupsV2</i><br/>
[[CommunityContentSortMode|Forum-CommunityContentSortMode]] | Scope: <i>Forum</i><br/>
[[CommunityStatusSort|Community-CommunityStatusSort]] | Scope: <i>Community</i><br/>
[[ComponentPrivacySetting|Components-ComponentPrivacySetting]] | Scope: <i>Components</i><br/>
[[DamageType|Destiny-DamageType]] | Scope: <i>Destiny</i><br/>
[[DefinitionType|Destiny-DefinitionType]] | Scope: <i>Destiny</i><br/>
[[DestinyActivityDifficultyTier|Destiny-DestinyActivityDifficultyTier]] | Scope: <i>Destiny</i><br/>
[[DestinyActivityModeCategory|Destiny-DestinyActivityModeCategory]] | Scope: <i>Destiny</i><br/>
[[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]] | Scope: <i>Destiny.HistoricalStats.Definitions</i><br/>
[[DestinyActivityNavPointType|Destiny-DestinyActivityNavPointType]] | Scope: <i>Destiny</i><br/>
[[DestinyClass|Destiny-DestinyClass]] | Scope: <i>Destiny</i><br/>
[[DestinyComponentType|Destiny-DestinyComponentType]] | Scope: <i>Destiny</i><br/>
[[DestinyGameVersions|Destiny-DestinyGameVersions]] | Scope: <i>Destiny</i><br/>
[[DestinyGatingScope|Destiny-DestinyGatingScope]] | Scope: <i>Destiny</i><br/>
[[DestinyGender|Destiny-DestinyGender]] | Scope: <i>Destiny</i><br/>
[[DestinyItemSortType|Destiny-DestinyItemSortType]] | Scope: <i>Destiny</i><br/>
[[DestinyItemSubType|Destiny-DestinyItemSubType]] | Scope: <i>Destiny</i><br/>
[[DestinyItemType|Destiny-DestinyItemType]] | Scope: <i>Destiny</i><br/>
[[DestinyMilestoneType|Destiny-Definitions-Milestones-DestinyMilestoneType]] | Scope: <i>Destiny.Definitions.Milestones</i><br/>
[[DestinyObjectiveGrantStyle|Destiny-DestinyObjectiveGrantStyle]] | Scope: <i>Destiny</i><br/>
[[DestinyProgressionScope|Destiny-DestinyProgressionScope]] | Scope: <i>Destiny</i><br/>
[[DestinyProgressionStepDisplayEffect|Destiny-DestinyProgressionStepDisplayEffect]] | Scope: <i>Destiny</i><br/>
[[DestinyRace|Destiny-DestinyRace]] | Scope: <i>Destiny</i><br/>
[[DestinyRewardSourceCategory|Destiny-Definitions-DestinyRewardSourceCategory]] | Scope: <i>Destiny.Definitions</i><br/>
[[DestinySocketVisibility|Destiny-DestinySocketVisibility]] | Scope: <i>Destiny</i><br/>
[[DestinyStatAggregationType|Destiny-DestinyStatAggregationType]] | Scope: <i>Destiny</i><br/>
[[DestinyStatsCategoryType|Destiny-HistoricalStats-Definitions-DestinyStatsCategoryType]] | Scope: <i>Destiny.HistoricalStats.Definitions</i><br/>
[[DestinyStatsGroupType|Destiny-HistoricalStats-Definitions-DestinyStatsGroupType]] | Scope: <i>Destiny.HistoricalStats.Definitions</i><br/>
[[DestinyStatsMergeMethod|Destiny-HistoricalStats-Definitions-DestinyStatsMergeMethod]] | Scope: <i>Destiny.HistoricalStats.Definitions</i><br/>
[[DestinyTalentNodeState|Destiny-DestinyTalentNodeState]] | Scope: <i>Destiny</i><br/>
[[DestinyTalentNodeStepDamageTypes|Destiny-Definitions-DestinyTalentNodeStepDamageTypes]] | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyTalentNodeStepGuardianAttributes|Destiny-Definitions-DestinyTalentNodeStepGuardianAttributes]] | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyTalentNodeStepImpactEffects|Destiny-Definitions-DestinyTalentNodeStepImpactEffects]] | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyTalentNodeStepLightAbilities|Destiny-Definitions-DestinyTalentNodeStepLightAbilities]] | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyTalentNodeStepWeaponPerformances|Destiny-Definitions-DestinyTalentNodeStepWeaponPerformances]] | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyUnlockValueUIStyle|Destiny-DestinyUnlockValueUIStyle]] | Scope: <i>Destiny</i><br/>
[[DestinyVendorInteractionRewardSelection|Destiny-DestinyVendorInteractionRewardSelection]] | Scope: <i>Destiny</i><br/>
[[DestinyVendorItemRefundPolicy|Destiny-DestinyVendorItemRefundPolicy]] | Scope: <i>Destiny</i><br/>
[[DestinyVendorReplyType|Destiny-DestinyVendorReplyType]] | Scope: <i>Destiny</i><br/>
[[EquipFailureReason|Destiny-EquipFailureReason]] | Scope: <i>Destiny</i><br/>
[[EquippingItemBlockAttributes|Destiny-EquippingItemBlockAttributes]] | Scope: <i>Destiny</i><br/>
[[ForumFlagsEnum|Forum-ForumFlagsEnum]] | Scope: <i>Forum</i><br/>
[[ForumMediaType|Forum-ForumMediaType]] | Scope: <i>Forum</i><br/>
[[ForumPostCategoryEnums|Forum-ForumPostCategoryEnums]] | Scope: <i>Forum</i><br/>
[[ForumPostPopularity|Forum-ForumPostPopularity]] | Scope: <i>Forum</i><br/>
[[ForumPostSortEnum|Forum-ForumPostSortEnum]] | Scope: <i>Forum</i><br/>
[[ForumRecruitmentIntensityLabel|Forum-ForumRecruitmentIntensityLabel]] | Scope: <i>Forum</i><br/>
[[ForumRecruitmentToneLabel|Forum-ForumRecruitmentToneLabel]] | Scope: <i>Forum</i><br/>
[[ForumTopicsCategoryFiltersEnum|Forum-ForumTopicsCategoryFiltersEnum]] | Scope: <i>Forum</i><br/>
[[ForumTopicsQuickDateEnum|Forum-ForumTopicsQuickDateEnum]] | Scope: <i>Forum</i><br/>
[[ForumTopicsSortEnum|Forum-ForumTopicsSortEnum]] | Scope: <i>Forum</i><br/>
[[GroupAllianceStatus|GroupsV2-GroupAllianceStatus]] | Scope: <i>GroupsV2</i><br/>
[[GroupApplicationResolveState|GroupsV2-GroupApplicationResolveState]] | Scope: <i>GroupsV2</i><br/>
[[GroupDateRange|GroupsV2-GroupDateRange]] | Scope: <i>GroupsV2</i><br/>
[[GroupHomepage|GroupsV2-GroupHomepage]] | Scope: <i>GroupsV2</i><br/>
[[GroupMemberCountFilter|GroupsV2-GroupMemberCountFilter]] | Scope: <i>GroupsV2</i><br/>
[[GroupPostPublicity|GroupsV2-GroupPostPublicity]] | Scope: <i>GroupsV2</i><br/>
[[GroupPotentialMemberStatus|GroupsV2-GroupPotentialMemberStatus]] | Scope: <i>GroupsV2</i><br/>
[[GroupsForMemberFilter|GroupsV2-GroupsForMemberFilter]] | Scope: <i>GroupsV2</i><br/>
[[GroupSortBy|GroupsV2-GroupSortBy]] | Scope: <i>GroupsV2</i><br/>
[[GroupType|GroupsV2-GroupType]] | Scope: <i>GroupsV2</i><br/>
[[HostGuidedGamesPermissionLevel|GroupsV2-HostGuidedGamesPermissionLevel]] | Scope: <i>GroupsV2</i><br/>
[[IgnoreLength|Ignores-IgnoreLength]] | Scope: <i>Ignores</i><br/>
[[IgnoreStatus|Ignores-IgnoreStatus]] | Scope: <i>Ignores</i><br/>
[[ItemBindStatus|Destiny-ItemBindStatus]] | Scope: <i>Destiny</i><br/>
[[ItemLocation|Destiny-ItemLocation]] | Scope: <i>Destiny</i><br/>
[[ItemState|Destiny-ItemState]] | Scope: <i>Destiny</i><br/>
[[MembershipOption|GroupsV2-MembershipOption]] | Scope: <i>GroupsV2</i><br/>
[[PartnershipType|Partnerships-PartnershipType]] | Scope: <i>Partnerships</i><br/>
[[PeriodType|Destiny-HistoricalStats-Definitions-PeriodType]] | Scope: <i>Destiny.HistoricalStats.Definitions</i><br/>
[[PeriodType|Destiny-PeriodType]] | Scope: <i>Destiny</i><br/>
[[PlatformErrorCodes|Exceptions-PlatformErrorCodes]] | Scope: <i>Exceptions</i><br/>
[[RuntimeGroupMemberType|GroupsV2-RuntimeGroupMemberType]] | Scope: <i>GroupsV2</i><br/>
[[SpecialItemType|Destiny-SpecialItemType]] | Scope: <i>Destiny</i><br/>
[[TierType|Destiny-TierType]] | Scope: <i>Destiny</i><br/>
[[TransferStatuses|Destiny-TransferStatuses]] | Scope: <i>Destiny</i><br/>
[[TrendingEntryType|Trending-TrendingEntryType]] | Scope: <i>Trending</i><br/>
[[UnitType|Destiny-HistoricalStats-Definitions-UnitType]] | Scope: <i>Destiny.HistoricalStats.Definitions</i><br/>
[[VendorItemStatus|Destiny-VendorItemStatus]] | Scope: <i>Destiny</i><br/>

## <a name="Schemas-Class"></a>Class Schemas
Name | Description
---- | -----------
[[ClanBanner|GroupsV2-ClanBanner]] | Scope: <i>GroupsV2</i><br/>
[[CommentSummary|Content-CommentSummary]] | Scope: <i>Content</i><br/>
[[CommunityLiveStatus|Community-CommunityLiveStatus]] | Scope: <i>Community</i><br/>
[[ComponentResponse|Components-ComponentResponse]] | Scope: <i>Components</i><br/>
[[ContentItemPublicContract|Content-ContentItemPublicContract]] | Scope: <i>Content</i><br/>
[[ContentRepresentation|Content-ContentRepresentation]] | Scope: <i>Content</i><br/>
[[DateRange|Dates-DateRange]] | Scope: <i>Dates</i><br/>
[[DestinyActionRequest|Destiny-Requests-Actions-DestinyActionRequest]] | Scope: <i>Destiny.Requests.Actions</i><br/>
[[DestinyActivity|Destiny-DestinyActivity]] | Scope: <i>Destiny</i><br/>
[[DestinyActivityHistoryResults|Destiny-HistoricalStats-DestinyActivityHistoryResults]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyAggregateActivityResults|Destiny-HistoricalStats-DestinyAggregateActivityResults]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyAggregateActivityStats|Destiny-HistoricalStats-DestinyAggregateActivityStats]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyChallengeStatus|Destiny-Challenges-DestinyChallengeStatus]] | Scope: <i>Destiny.Challenges</i><br/>
[[DestinyCharacterActionRequest|Destiny-Requests-Actions-DestinyCharacterActionRequest]] | Scope: <i>Destiny.Requests.Actions</i><br/>
[[DestinyCharacterActivitiesComponent|Destiny-Entities-Characters-DestinyCharacterActivitiesComponent]] | Scope: <i>Destiny.Entities.Characters</i><br/>
[[DestinyCharacterComponent|Destiny-Entities-Characters-DestinyCharacterComponent]] | Scope: <i>Destiny.Entities.Characters</i><br/>
[[DestinyCharacterCustomization|Destiny-Character-DestinyCharacterCustomization]] | Scope: <i>Destiny.Character</i><br/>
[[DestinyCharacterPeerView|Destiny-Character-DestinyCharacterPeerView]] | Scope: <i>Destiny.Character</i><br/>
[[DestinyCharacterProgressionComponent|Destiny-Entities-Characters-DestinyCharacterProgressionComponent]] | Scope: <i>Destiny.Entities.Characters</i><br/>
[[DestinyCharacterRenderComponent|Destiny-Entities-Characters-DestinyCharacterRenderComponent]] | Scope: <i>Destiny.Entities.Characters</i><br/>
[[DestinyCharacterResponse|Destiny-Responses-DestinyCharacterResponse]] | Scope: <i>Destiny.Responses</i><br/>
[[DestinyClanAggregateStat|Destiny-HistoricalStats-DestinyClanAggregateStat]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyColor|Destiny-Misc-DestinyColor]] | Scope: <i>Destiny.Misc</i><br/>
[[DestinyEquipItemResult|Destiny-DestinyEquipItemResult]] | Scope: <i>Destiny</i><br/>
[[DestinyEquipItemResults|Destiny-DestinyEquipItemResults]] | Scope: <i>Destiny</i><br/>
[[DestinyFactionProgression|Destiny-Progression-DestinyFactionProgression]] | Scope: <i>Destiny.Progression</i><br/>
[[DestinyHistoricalStatsAccountResult|Destiny-HistoricalStats-DestinyHistoricalStatsAccountResult]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyHistoricalStatsActivity|Destiny-HistoricalStats-DestinyHistoricalStatsActivity]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyHistoricalStatsByPeriod|Destiny-HistoricalStats-DestinyHistoricalStatsByPeriod]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyHistoricalStatsPerCharacter|Destiny-HistoricalStats-DestinyHistoricalStatsPerCharacter]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyHistoricalStatsPeriodGroup|Destiny-HistoricalStats-DestinyHistoricalStatsPeriodGroup]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyHistoricalStatsResults|Destiny-HistoricalStats-DestinyHistoricalStatsResults]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyHistoricalStatsWithMerged|Destiny-HistoricalStats-DestinyHistoricalStatsWithMerged]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyHistoricalWeaponStats|Destiny-HistoricalStats-DestinyHistoricalWeaponStats]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyHistoricalWeaponStatsData|Destiny-HistoricalStats-DestinyHistoricalWeaponStatsData]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyInventoryComponent|Destiny-Entities-Inventory-DestinyInventoryComponent]] | Scope: <i>Destiny.Entities.Inventory</i><br/>
[[DestinyItemActionRequest|Destiny-Requests-Actions-DestinyItemActionRequest]] | Scope: <i>Destiny.Requests.Actions</i><br/>
[[DestinyItemComponent|Destiny-Entities-Items-DestinyItemComponent]] | Scope: <i>Destiny.Entities.Items</i><br/>
[[DestinyItemInstanceComponent|Destiny-Entities-Items-DestinyItemInstanceComponent]] | Scope: <i>Destiny.Entities.Items</i><br/>
[[DestinyItemObjectivesComponent|Destiny-Entities-Items-DestinyItemObjectivesComponent]] | Scope: <i>Destiny.Entities.Items</i><br/>
[[DestinyItemPeerView|Destiny-Character-DestinyItemPeerView]] | Scope: <i>Destiny.Character</i><br/>
[[DestinyItemPerksComponent|Destiny-Entities-Items-DestinyItemPerksComponent]] | Scope: <i>Destiny.Entities.Items</i><br/>
[[DestinyItemPlugComponent|Destiny-Components-Items-DestinyItemPlugComponent]] | Scope: <i>Destiny.Components.Items</i><br/>
[[DestinyItemQuantity|Destiny-DestinyItemQuantity]] | Scope: <i>Destiny</i><br/>
[[DestinyItemRenderComponent|Destiny-Entities-Items-DestinyItemRenderComponent]] | Scope: <i>Destiny.Entities.Items</i><br/>
[[DestinyItemResponse|Destiny-Responses-DestinyItemResponse]] | Scope: <i>Destiny.Responses</i><br/>
[[DestinyItemSetActionRequest|Destiny-Requests-Actions-DestinyItemSetActionRequest]] | Scope: <i>Destiny.Requests.Actions</i><br/>
[[DestinyItemSocketsComponent|Destiny-Entities-Items-DestinyItemSocketsComponent]] | Scope: <i>Destiny.Entities.Items</i><br/>
[[DestinyItemSocketState|Destiny-Entities-Items-DestinyItemSocketState]] | Scope: <i>Destiny.Entities.Items</i><br/>
[[DestinyItemStateRequest|Destiny-Requests-Actions-DestinyItemStateRequest]] | Scope: <i>Destiny.Requests.Actions</i><br/>
[[DestinyItemStatsComponent|Destiny-Entities-Items-DestinyItemStatsComponent]] | Scope: <i>Destiny.Entities.Items</i><br/>
[[DestinyItemTalentGridComponent|Destiny-Entities-Items-DestinyItemTalentGridComponent]] | Scope: <i>Destiny.Entities.Items</i><br/>
[[DestinyItemTransferRequest|Destiny-Requests-DestinyItemTransferRequest]] | Scope: <i>Destiny.Requests</i><br/>
[[DestinyKioskItem|Destiny-Components-Kiosks-DestinyKioskItem]] | Scope: <i>Destiny.Components.Kiosks</i><br/>
[[DestinyKiosksComponent|Destiny-Components-Kiosks-DestinyKiosksComponent]] | Scope: <i>Destiny.Components.Kiosks</i><br/>
[[DestinyLeaderboard|Destiny-HistoricalStats-DestinyLeaderboard]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyLeaderboardEntry|Destiny-HistoricalStats-DestinyLeaderboardEntry]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyLeaderboardResults|Destiny-HistoricalStats-DestinyLeaderboardResults]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyManifest|Destiny-Config-DestinyManifest]] | Scope: <i>Destiny.Config</i><br/>
[[DestinyMilestone|Destiny-Milestones-DestinyMilestone]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyMilestoneActivity|Destiny-Milestones-DestinyMilestoneActivity]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyMilestoneActivityCompletionStatus|Destiny-Milestones-DestinyMilestoneActivityCompletionStatus]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyMilestoneActivityPhase|Destiny-Milestones-DestinyMilestoneActivityPhase]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyMilestoneActivityVariant|Destiny-Milestones-DestinyMilestoneActivityVariant]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyMilestoneContent|Destiny-Milestones-DestinyMilestoneContent]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyMilestoneContentItemCategory|Destiny-Milestones-DestinyMilestoneContentItemCategory]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyMilestoneQuest|Destiny-Milestones-DestinyMilestoneQuest]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyMilestoneRewardCategory|Destiny-Milestones-DestinyMilestoneRewardCategory]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyMilestoneRewardEntry|Destiny-Milestones-DestinyMilestoneRewardEntry]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyMilestoneVendor|Destiny-Milestones-DestinyMilestoneVendor]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]] | Scope: <i>Destiny.Quests</i><br/>
[[DestinyPerkReference|Destiny-Perks-DestinyPerkReference]] | Scope: <i>Destiny.Perks</i><br/>
[[DestinyPlayer|Destiny-HistoricalStats-DestinyPlayer]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyPostGameCarnageReportData|Destiny-HistoricalStats-DestinyPostGameCarnageReportData]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyPostGameCarnageReportEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportEntry]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyPostGameCarnageReportExtendedData|Destiny-HistoricalStats-DestinyPostGameCarnageReportExtendedData]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyPostGameCarnageReportTeamEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportTeamEntry]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyPostmasterTransferRequest|Destiny-Requests-Actions-DestinyPostmasterTransferRequest]] | Scope: <i>Destiny.Requests.Actions</i><br/>
[[DestinyProfileComponent|Destiny-Entities-Profiles-DestinyProfileComponent]] | Scope: <i>Destiny.Entities.Profiles</i><br/>
[[DestinyProfileResponse|Destiny-Responses-DestinyProfileResponse]] | Scope: <i>Destiny.Responses</i><br/>
[[DestinyProgression|Destiny-DestinyProgression]] | Scope: <i>Destiny</i><br/>
[[DestinyPublicActivityStatus|Destiny-Activities-DestinyPublicActivityStatus]] | Scope: <i>Destiny.Activities</i><br/>
[[DestinyPublicMilestone|Destiny-Milestones-DestinyPublicMilestone]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyPublicMilestoneActivity|Destiny-Milestones-DestinyPublicMilestoneActivity]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyPublicMilestoneActivityVariant|Destiny-Milestones-DestinyPublicMilestoneActivityVariant]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyPublicMilestoneChallenge|Destiny-Milestones-DestinyPublicMilestoneChallenge]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyPublicMilestoneQuest|Destiny-Milestones-DestinyPublicMilestoneQuest]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyPublicMilestoneVendor|Destiny-Milestones-DestinyPublicMilestoneVendor]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyQuestStatus|Destiny-Quests-DestinyQuestStatus]] | Scope: <i>Destiny.Quests</i><br/>
[[DestinyStat|Destiny-DestinyStat]] | Scope: <i>Destiny</i><br/>
[[DestinyTalentNode|Destiny-DestinyTalentNode]] | Scope: <i>Destiny</i><br/>
[[DestinyTalentNodeStatBlock|Destiny-DestinyTalentNodeStatBlock]] | Scope: <i>Destiny</i><br/>
[[DestinyUnlockStatus|Destiny-DestinyUnlockStatus]] | Scope: <i>Destiny</i><br/>
[[DestinyVendorCategoriesComponent|Destiny-Entities-Vendors-DestinyVendorCategoriesComponent]] | Scope: <i>Destiny.Entities.Vendors</i><br/>
[[DestinyVendorCategory|Destiny-Entities-Vendors-DestinyVendorCategory]] | Scope: <i>Destiny.Entities.Vendors</i><br/>
[[DestinyVendorComponent|Destiny-Entities-Vendors-DestinyVendorComponent]] | Scope: <i>Destiny.Entities.Vendors</i><br/>
[[DestinyVendorReceipt|Destiny-Vendors-DestinyVendorReceipt]] | Scope: <i>Destiny.Vendors</i><br/>
[[DestinyVendorReceiptsComponent|Destiny-Entities-Profiles-DestinyVendorReceiptsComponent]] | Scope: <i>Destiny.Entities.Profiles</i><br/>
[[DestinyVendorResponse|Destiny-Responses-DestinyVendorResponse]] | Scope: <i>Destiny.Responses</i><br/>
[[DestinyVendorSaleItemComponent|Destiny-Entities-Vendors-DestinyVendorSaleItemComponent]] | Scope: <i>Destiny.Entities.Vendors</i><br/>
[[DestinyVendorSaleItemSetComponent|Destiny-Components-Vendors-DestinyVendorSaleItemSetComponent]] | Scope: <i>Destiny.Components.Vendors</i><br/>
[[DestinyVendorsResponse|Destiny-Responses-DestinyVendorsResponse]] | Scope: <i>Destiny.Responses</i><br/>
[[DyeReference|Destiny-DyeReference]] | Scope: <i>Destiny</i><br/>
[[EntityActionResult|Entities-EntityActionResult]] | Scope: <i>Entities</i><br/>
[[ForumRecruitmentDetail|Forum-ForumRecruitmentDetail]] | Scope: <i>Forum</i><br/>
[[GearAssetDataBaseDefinition|Destiny-Config-GearAssetDataBaseDefinition]] | Scope: <i>Destiny.Config</i><br/>
[[GeneralUser|User-GeneralUser]] | Scope: <i>User</i><br/>
[[GroupAction|GroupsV2-GroupAction]] | Scope: <i>GroupsV2</i><br/>
[[GroupApplicationListRequest|GroupsV2-GroupApplicationListRequest]] | Scope: <i>GroupsV2</i><br/>
[[GroupApplicationRequest|GroupsV2-GroupApplicationRequest]] | Scope: <i>GroupsV2</i><br/>
[[GroupApplicationResponse|GroupsV2-GroupApplicationResponse]] | Scope: <i>GroupsV2</i><br/>
[[GroupBan|GroupsV2-GroupBan]] | Scope: <i>GroupsV2</i><br/>
[[GroupBanRequest|GroupsV2-GroupBanRequest]] | Scope: <i>GroupsV2</i><br/>
[[GroupCreationResponse|GroupsV2-GroupCreationResponse]] | Scope: <i>GroupsV2</i><br/>
[[GroupEditAction|GroupsV2-GroupEditAction]] | Scope: <i>GroupsV2</i><br/>
[[GroupFeatures|GroupsV2-GroupFeatures]] | Scope: <i>GroupsV2</i><br/>
[[GroupMember|GroupsV2-GroupMember]] | Scope: <i>GroupsV2</i><br/>
[[GroupMemberApplication|GroupsV2-GroupMemberApplication]] | Scope: <i>GroupsV2</i><br/>
[[GroupMemberLeaveResult|GroupsV2-GroupMemberLeaveResult]] | Scope: <i>GroupsV2</i><br/>
[[GroupMembership|GroupsV2-GroupMembership]] | Scope: <i>GroupsV2</i><br/>
[[GroupMembershipBase|GroupsV2-GroupMembershipBase]] | Scope: <i>GroupsV2</i><br/>
[[GroupMembershipSearchResponse|GroupsV2-GroupMembershipSearchResponse]] | Scope: <i>GroupsV2</i><br/>
[[GroupOptionalConversation|GroupsV2-GroupOptionalConversation]] | Scope: <i>GroupsV2</i><br/>
[[GroupOptionalConversationAddRequest|GroupsV2-GroupOptionalConversationAddRequest]] | Scope: <i>GroupsV2</i><br/>
[[GroupOptionalConversationEditRequest|GroupsV2-GroupOptionalConversationEditRequest]] | Scope: <i>GroupsV2</i><br/>
[[GroupOptionsEditAction|GroupsV2-GroupOptionsEditAction]] | Scope: <i>GroupsV2</i><br/>
[[GroupPotentialMember|GroupsV2-GroupPotentialMember]] | Scope: <i>GroupsV2</i><br/>
[[GroupPotentialMembership|GroupsV2-GroupPotentialMembership]] | Scope: <i>GroupsV2</i><br/>
[[GroupPotentialMembershipSearchResponse|GroupsV2-GroupPotentialMembershipSearchResponse]] | Scope: <i>GroupsV2</i><br/>
[[GroupQuery|GroupsV2-GroupQuery]] | Scope: <i>GroupsV2</i><br/>
[[GroupResponse|GroupsV2-GroupResponse]] | Scope: <i>GroupsV2</i><br/>
[[GroupSearchResponse|GroupsV2-GroupSearchResponse]] | Scope: <i>GroupsV2</i><br/>
[[GroupTheme|Config-GroupTheme]] | Scope: <i>Config</i><br/>
[[GroupUserBase|GroupsV2-GroupUserBase]] | Scope: <i>GroupsV2</i><br/>
[[GroupV2|GroupsV2-GroupV2]] | Scope: <i>GroupsV2</i><br/>
[[GroupV2Card|GroupsV2-GroupV2Card]] | Scope: <i>GroupsV2</i><br/>
[[GroupV2ClanInfo|GroupsV2-GroupV2ClanInfo]] | Scope: <i>GroupsV2</i><br/>
[[GroupV2ClanInfoAndInvestment|GroupsV2-GroupV2ClanInfoAndInvestment]] | Scope: <i>GroupsV2</i><br/>
[[HyperlinkReference|Links-HyperlinkReference]] | Scope: <i>Links</i><br/>
[[IgnoreResponse|Ignores-IgnoreResponse]] | Scope: <i>Ignores</i><br/>
[[InterpolationPoint|Interpolation-InterpolationPoint]] | Scope: <i>Interpolation</i><br/>
[[InterpolationPointFloat|Interpolation-InterpolationPointFloat]] | Scope: <i>Interpolation</i><br/>
[[PagedQuery|Queries-PagedQuery]] | Scope: <i>Queries</i><br/>
[[PollResponse|Forum-PollResponse]] | Scope: <i>Forum</i><br/>
[[PollResult|Forum-PollResult]] | Scope: <i>Forum</i><br/>
[[PostResponse|Forum-PostResponse]] | Scope: <i>Forum</i><br/>
[[PostSearchResponse|Forum-PostSearchResponse]] | Scope: <i>Forum</i><br/>
[[PublicPartnershipDetail|Partnerships-PublicPartnershipDetail]] | Scope: <i>Partnerships</i><br/>
[[SaveMessageResult|Messages-Responses-SaveMessageResult]] | Scope: <i>Messages.Responses</i><br/>
[[SearchDestinyPlayer|Destiny-SearchDestinyPlayer]] | Scope: <i>Destiny</i><br/>
[[SearchResult|Queries-SearchResult]] | Scope: <i>Queries</i><br/>
[[TagResponse|Tags-Models-Contracts-TagResponse]] | Scope: <i>Tags.Models.Contracts</i><br/>
[[TrendingCategories|Trending-TrendingCategories]] | Scope: <i>Trending</i><br/>
[[TrendingCategory|Trending-TrendingCategory]] | Scope: <i>Trending</i><br/>
[[TrendingDetail|Trending-TrendingDetail]] | Scope: <i>Trending</i><br/>
[[TrendingEntry|Trending-TrendingEntry]] | Scope: <i>Trending</i><br/>
[[TrendingEntryCommunityCreation|Trending-TrendingEntryCommunityCreation]] | Scope: <i>Trending</i><br/>
[[TrendingEntryCommunityStream|Trending-TrendingEntryCommunityStream]] | Scope: <i>Trending</i><br/>
[[TrendingEntryDestinyActivity|Trending-TrendingEntryDestinyActivity]] | Scope: <i>Trending</i><br/>
[[TrendingEntryDestinyItem|Trending-TrendingEntryDestinyItem]] | Scope: <i>Trending</i><br/>
[[TrendingEntryDestinyRitual|Trending-TrendingEntryDestinyRitual]] | Scope: <i>Trending</i><br/>
[[TrendingEntryNews|Trending-TrendingEntryNews]] | Scope: <i>Trending</i><br/>
[[TrendingEntrySupportArticle|Trending-TrendingEntrySupportArticle]] | Scope: <i>Trending</i><br/>
[[UserAlias|User-Models-UserAlias]] | Scope: <i>User.Models</i><br/>
[[UserInfoCard|User-UserInfoCard]] | Scope: <i>User</i><br/>
[[UserMembership|User-UserMembership]] | Scope: <i>User</i><br/>
[[UserMembershipData|User-UserMembershipData]] | Scope: <i>User</i><br/>
[[UserTheme|Config-UserTheme]] | Scope: <i>Config</i><br/>
[[UserToUserContext|User-UserToUserContext]] | Scope: <i>User</i><br/>

## <a name="Schemas-Array"></a>Array Schemas
Name | Description
---- | -----------
[[BungieMembershipType&#91;&#93;|BungieMembershipType--]] | Scope: <i></i><br/>
[[DestinyActivityModeType&#91;&#93;|Destiny-HistoricalStats-Definitions-DestinyActivityModeType--]] | Scope: <i>Destiny.HistoricalStats.Definitions</i><br/>
[[PeriodType&#91;&#93;|Destiny-HistoricalStats-Definitions-PeriodType--]] | Scope: <i>Destiny.HistoricalStats.Definitions</i><br/>

## <a name="Schemas-GenericClass"></a>Generic Class Schemas
Name | Description
---- | -----------
[[Destiny.Reporting.Requests.DestinyReportOffensePgcrRequest|Destiny-Reporting-Requests-DestinyReportOffensePgcrRequest]] | Scope: <i></i><br/>
[[DestinyItemComponentSetOfint32|DestinyItemComponentSetOfint32]] | Scope: <i></i><br/>
[[DestinyItemComponentSetOfint64|DestinyItemComponentSetOfint64]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent|DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent|DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint32AndDestinyItemPerksComponent|DictionaryComponentResponseOfint32AndDestinyItemPerksComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint32AndDestinyItemRenderComponent|DictionaryComponentResponseOfint32AndDestinyItemRenderComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent|DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint32AndDestinyItemStatsComponent|DictionaryComponentResponseOfint32AndDestinyItemStatsComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent|DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent|DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent|DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint64AndDestinyCharacterComponent|DictionaryComponentResponseOfint64AndDestinyCharacterComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent|DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent|DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint64AndDestinyInventoryComponent|DictionaryComponentResponseOfint64AndDestinyInventoryComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent|DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent|DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint64AndDestinyItemPerksComponent|DictionaryComponentResponseOfint64AndDestinyItemPerksComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint64AndDestinyItemRenderComponent|DictionaryComponentResponseOfint64AndDestinyItemRenderComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent|DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint64AndDestinyItemStatsComponent|DictionaryComponentResponseOfint64AndDestinyItemStatsComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent|DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfint64AndDestinyKiosksComponent|DictionaryComponentResponseOfint64AndDestinyKiosksComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent|DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent|DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfuint32AndDestinyVendorComponent|DictionaryComponentResponseOfuint32AndDestinyVendorComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponseOfuint32AndDestinyVendorSaleItemSetComponent|DictionaryComponentResponseOfuint32AndDestinyVendorSaleItemSetComponent]] | Scope: <i></i><br/>
[[SearchResultOfCommunityLiveStatus|SearchResultOfCommunityLiveStatus]] | Scope: <i></i><br/>
[[SearchResultOfDestinyEntitySearchResultItem|SearchResultOfDestinyEntitySearchResultItem]] | Scope: <i></i><br/>
[[SearchResultOfGroupBan|SearchResultOfGroupBan]] | Scope: <i></i><br/>
[[SearchResultOfGroupMember|SearchResultOfGroupMember]] | Scope: <i></i><br/>
[[SearchResultOfGroupMemberApplication|SearchResultOfGroupMemberApplication]] | Scope: <i></i><br/>
[[SearchResultOfGroupMembership|SearchResultOfGroupMembership]] | Scope: <i></i><br/>
[[SearchResultOfGroupPotentialMembership|SearchResultOfGroupPotentialMembership]] | Scope: <i></i><br/>
[[SearchResultOfGroupV2Card|SearchResultOfGroupV2Card]] | Scope: <i></i><br/>
[[SearchResultOfPostResponse|SearchResultOfPostResponse]] | Scope: <i></i><br/>
[[SearchResultOfTrendingEntry|SearchResultOfTrendingEntry]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyCharacterActivitiesComponent|SingleComponentResponseOfDestinyCharacterActivitiesComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyCharacterComponent|SingleComponentResponseOfDestinyCharacterComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyCharacterProgressionComponent|SingleComponentResponseOfDestinyCharacterProgressionComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyCharacterRenderComponent|SingleComponentResponseOfDestinyCharacterRenderComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyInventoryComponent|SingleComponentResponseOfDestinyInventoryComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyItemComponent|SingleComponentResponseOfDestinyItemComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyItemInstanceComponent|SingleComponentResponseOfDestinyItemInstanceComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyItemObjectivesComponent|SingleComponentResponseOfDestinyItemObjectivesComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyItemPerksComponent|SingleComponentResponseOfDestinyItemPerksComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyItemRenderComponent|SingleComponentResponseOfDestinyItemRenderComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyItemSocketsComponent|SingleComponentResponseOfDestinyItemSocketsComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyItemStatsComponent|SingleComponentResponseOfDestinyItemStatsComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyItemTalentGridComponent|SingleComponentResponseOfDestinyItemTalentGridComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyKiosksComponent|SingleComponentResponseOfDestinyKiosksComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyProfileComponent|SingleComponentResponseOfDestinyProfileComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyVendorCategoriesComponent|SingleComponentResponseOfDestinyVendorCategoriesComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyVendorComponent|SingleComponentResponseOfDestinyVendorComponent]] | Scope: <i></i><br/>
[[SingleComponentResponseOfDestinyVendorReceiptsComponent|SingleComponentResponseOfDestinyVendorReceiptsComponent]] | Scope: <i></i><br/>

