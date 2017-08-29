<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## <a name="Headers"></a>Headers
Name | Schema | Required | Description
---- | ------ | -------- | -----------
X-API-Key | string | Yes | When you have registered an Application at https://www.bungie.net/en/Application, you will receive an API key.  You should pass it in via this header with every request.

## <a name="Security"></a>Security
Name | Type | Description
---- | ---- | -----------
[[apiKey|SecuritySchemas#apiKey]] | apiKey | Every request requires an API key.  To get an API key, register a new application at https://www.bungie.net/en/Application.
[[oauth2|SecuritySchemas#oauth2]] | oauth2 | For requests that require Authentication, you will need to have your users authenticate via our OAuth mechanisms.  See https://github.com/Bungie-net/api/wiki/OAuth-Documentation for more details.
## <a name="Schemas"></a>Schemas
## <a name="Schemas-Definition"></a>Definition Schemas
Name | Manifest | Description
---- | -------- | -----------
[[DestinyActivityChallengeDefinition|Destiny-Definitions-DestinyActivityChallengeDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]] | Activities | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyActivityGraphArtElementDefinition|Destiny-Definitions-Director-DestinyActivityGraphArtElementDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>
[[DestinyActivityGraphConnectionDefinition|Destiny-Definitions-Director-DestinyActivityGraphConnectionDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>
[[DestinyActivityGraphDefinition|Destiny-Definitions-Director-DestinyActivityGraphDefinition]] | ActivityGraphs | Scope: <i>Destiny.Definitions.Director</i><br/>
[[DestinyActivityGraphDisplayObjectiveDefinition|Destiny-Definitions-Director-DestinyActivityGraphDisplayObjectiveDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>
[[DestinyActivityGraphDisplayProgressionDefinition|Destiny-Definitions-Director-DestinyActivityGraphDisplayProgressionDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>
[[DestinyActivityGraphListEntryDefinition|Destiny-Definitions-DestinyActivityGraphListEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyActivityGraphNodeActivityDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeActivityDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>
[[DestinyActivityGraphNodeDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>
[[DestinyActivityGraphNodeFeaturingStateDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeFeaturingStateDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>
[[DestinyActivityGuidedBlockDefinition|Destiny-Definitions-DestinyActivityGuidedBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyActivityMatchmakingBlockDefinition|Destiny-Definitions-DestinyActivityMatchmakingBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]] | ActivityModes | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]] | ActivityModifiers | Scope: <i>Destiny.Definitions.ActivityModifiers</i><br/>
[[DestinyActivityModifierReferenceDefinition|Destiny-Definitions-DestinyActivityModifierReferenceDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyActivityRewardDefinition|Destiny-Definitions-DestinyActivityRewardDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyActivityTypeDefinition|Destiny-Definitions-DestinyActivityTypeDefinition]] | ActivityTypes | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyActivityUnlockStringDefinition|Destiny-Definitions-DestinyActivityUnlockStringDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyAnimationReference|Destiny-Definitions-Animations-DestinyAnimationReference]] |  | Scope: <i>Destiny.Definitions.Animations</i><br/>
[[DestinyBubbleDefinition|Destiny-Definitions-DestinyBubbleDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyClassDefinition|Destiny-Definitions-DestinyClassDefinition]] | Classes | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]] | DamageTypes | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyDefinition|Destiny-Definitions-DestinyDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyDerivedItemCategoryDefinition|Destiny-Definitions-Items-DestinyDerivedItemCategoryDefinition]] |  | Scope: <i>Destiny.Definitions.Items</i><br/>
[[DestinyDerivedItemDefinition|Destiny-Definitions-Items-DestinyDerivedItemDefinition]] |  | Scope: <i>Destiny.Definitions.Items</i><br/>
[[DestinyDestinationBubbleSettingDefinition|Destiny-Definitions-DestinyDestinationBubbleSettingDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]] | Destinations | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyDisplayCategoryDefinition|Destiny-Definitions-DestinyDisplayCategoryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]] |  | Scope: <i>Destiny.Definitions.Common</i><br/>
[[DestinyEntitySearchResult|Destiny-Definitions-DestinyEntitySearchResult]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyEntitySearchResultItem|Destiny-Definitions-DestinyEntitySearchResultItem]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyEquipmentSlotDefinition|Destiny-Definitions-DestinyEquipmentSlotDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyEquippingBlockDefinition|Destiny-Definitions-DestinyEquippingBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]] | Factions | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyGearArtArrangementReference|Destiny-Definitions-DestinyGearArtArrangementReference]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyGenderDefinition|Destiny-Definitions-DestinyGenderDefinition]] | Genders | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyHistoricalStatsDefinition|Destiny-HistoricalStats-Definitions-DestinyHistoricalStatsDefinition]] | HistoricalStats | Scope: <i>Destiny.HistoricalStats.Definitions</i><br/>
[[DestinyInsertPlugActionDefinition|Destiny-Definitions-Sockets-DestinyInsertPlugActionDefinition]] |  | Scope: <i>Destiny.Definitions.Sockets</i><br/>
[[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]] | InventoryBuckets | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]] | Items | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyInventoryItemStatDefinition|Destiny-Definitions-DestinyInventoryItemStatDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemActionBlockDefinition|Destiny-Definitions-DestinyItemActionBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemActionRequiredItemDefinition|Destiny-Definitions-DestinyItemActionRequiredItemDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemCategoryDefinition|Destiny-Definitions-DestinyItemCategoryDefinition]] | ItemCategories | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemCreationEntryLevelDefinition|Destiny-Definitions-DestinyItemCreationEntryLevelDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemGearsetBlockDefinition|Destiny-Definitions-DestinyItemGearsetBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemInventoryBlockDefinition|Destiny-Definitions-DestinyItemInventoryBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemInvestmentStatDefinition|Destiny-Definitions-DestinyItemInvestmentStatDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemObjectiveBlockDefinition|Destiny-Definitions-DestinyItemObjectiveBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemPerkEntryDefinition|Destiny-Definitions-DestinyItemPerkEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemPlugDefinition|Destiny-Definitions-Items-DestinyItemPlugDefinition]] |  | Scope: <i>Destiny.Definitions.Items</i><br/>
[[DestinyItemPreviewBlockDefinition|Destiny-Definitions-DestinyItemPreviewBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemQualityBlockDefinition|Destiny-Definitions-DestinyItemQualityBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemSackBlockDefinition|Destiny-Definitions-DestinyItemSackBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemSetBlockDefinition|Destiny-Definitions-DestinyItemSetBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemSetBlockEntryDefinition|Destiny-Definitions-DestinyItemSetBlockEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemSocketBlockDefinition|Destiny-Definitions-DestinyItemSocketBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemSocketCategoryDefinition|Destiny-Definitions-DestinyItemSocketCategoryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemSocketEntryDefinition|Destiny-Definitions-DestinyItemSocketEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemSocketEntryPlugItemDefinition|Destiny-Definitions-DestinyItemSocketEntryPlugItemDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemSourceBlockDefinition|Destiny-Definitions-DestinyItemSourceBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemSourceDefinition|Destiny-Definitions-Sources-DestinyItemSourceDefinition]] |  | Scope: <i>Destiny.Definitions.Sources</i><br/>
[[DestinyItemStatBlockDefinition|Destiny-Definitions-DestinyItemStatBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemSummaryBlockDefinition|Destiny-Definitions-DestinyItemSummaryBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemTalentGridBlockDefinition|Destiny-Definitions-DestinyItemTalentGridBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemTierTypeDefinition|Destiny-Definitions-Items-DestinyItemTierTypeDefinition]] | ItemTierTypes | Scope: <i>Destiny.Definitions.Items</i><br/>
[[DestinyItemTierTypeInfusionBlock|Destiny-Definitions-Items-DestinyItemTierTypeInfusionBlock]] |  | Scope: <i>Destiny.Definitions.Items</i><br/>
[[DestinyItemTranslationBlockDefinition|Destiny-Definitions-DestinyItemTranslationBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyItemValueBlockDefinition|Destiny-Definitions-DestinyItemValueBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyLinkedGraphDefinition|Destiny-Definitions-Director-DestinyLinkedGraphDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>
[[DestinyLinkedGraphEntryDefinition|Destiny-Definitions-Director-DestinyLinkedGraphEntryDefinition]] |  | Scope: <i>Destiny.Definitions.Director</i><br/>
[[DestinyLocationDefinition|Destiny-Definitions-DestinyLocationDefinition]] | Locations | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyLocationReleaseDefinition|Destiny-Definitions-DestinyLocationReleaseDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyLoreDefinition|Destiny-Definitions-Lore-DestinyLoreDefinition]] | Lore | Scope: <i>Destiny.Definitions.Lore</i><br/>
[[DestinyMaterialRequirement|Destiny-Definitions-DestinyMaterialRequirement]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyMaterialRequirementSetDefinition|Destiny-Definitions-DestinyMaterialRequirementSetDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyMilestoneActivityDefinition|Destiny-Definitions-Milestones-DestinyMilestoneActivityDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>
[[DestinyMilestoneActivityVariantDefinition|Destiny-Definitions-Milestones-DestinyMilestoneActivityVariantDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>
[[DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]] | Milestones | Scope: <i>Destiny.Definitions.Milestones</i><br/>
[[DestinyMilestoneQuestDefinition|Destiny-Definitions-Milestones-DestinyMilestoneQuestDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>
[[DestinyMilestoneQuestRewardItem|Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardItem]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>
[[DestinyMilestoneQuestRewardsDefinition|Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardsDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>
[[DestinyMilestoneRewardCategoryDefinition|Destiny-Definitions-Milestones-DestinyMilestoneRewardCategoryDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>
[[DestinyMilestoneRewardEntryDefinition|Destiny-Definitions-Milestones-DestinyMilestoneRewardEntryDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>
[[DestinyMilestoneValueDefinition|Destiny-Definitions-Milestones-DestinyMilestoneValueDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>
[[DestinyMilestoneVendorDefinition|Destiny-Definitions-Milestones-DestinyMilestoneVendorDefinition]] |  | Scope: <i>Destiny.Definitions.Milestones</i><br/>
[[DestinyNodeActivationRequirement|Destiny-Definitions-DestinyNodeActivationRequirement]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyNodeSocketReplaceResponse|Destiny-Definitions-DestinyNodeSocketReplaceResponse]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyNodeStepDefinition|Destiny-Definitions-DestinyNodeStepDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]] | Objectives | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyObjectivePerkEntryDefinition|Destiny-Definitions-DestinyObjectivePerkEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyObjectiveStatEntryDefinition|Destiny-Definitions-DestinyObjectiveStatEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyPlaceDefinition|Destiny-Definitions-DestinyPlaceDefinition]] | Places | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyPlugRuleDefinition|Destiny-Definitions-Items-DestinyPlugRuleDefinition]] |  | Scope: <i>Destiny.Definitions.Items</i><br/>
[[DestinyPlugWhitelistEntryDefinition|Destiny-Definitions-Sockets-DestinyPlugWhitelistEntryDefinition]] |  | Scope: <i>Destiny.Definitions.Sockets</i><br/>
[[DestinyPositionDefinition|Destiny-Definitions-Common-DestinyPositionDefinition]] |  | Scope: <i>Destiny.Definitions.Common</i><br/>
[[DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]] | Progressions | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyProgressionDisplayPropertiesDefinition|Destiny-Definitions-DestinyProgressionDisplayPropertiesDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyProgressionLevelRequirementDefinition|Destiny-Definitions-Progression-DestinyProgressionLevelRequirementDefinition]] | ProgressionLevelRequirements | Scope: <i>Destiny.Definitions.Progression</i><br/>
[[DestinyProgressionMappingDefinition|Destiny-Definitions-DestinyProgressionMappingDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyProgressionRewardDefinition|Destiny-Definitions-DestinyProgressionRewardDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyProgressionStepDefinition|Destiny-Definitions-DestinyProgressionStepDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyRaceDefinition|Destiny-Definitions-DestinyRaceDefinition]] | Races | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyRewardSourceDefinition|Destiny-Definitions-DestinyRewardSourceDefinition]] | RewardSources | Scope: <i>Destiny.Definitions</i><br/>
[[DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]] | SandboxPerks | Scope: <i>Destiny.Definitions</i><br/>
[[DestinySocketTypeDefinition|Destiny-Definitions-Sockets-DestinySocketTypeDefinition]] | SocketTypes | Scope: <i>Destiny.Definitions.Sockets</i><br/>
[[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]] | Stats | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyStatDisplayDefinition|Destiny-Definitions-DestinyStatDisplayDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyStatGroupDefinition|Destiny-Definitions-DestinyStatGroupDefinition]] | StatGroups | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyStatOverrideDefinition|Destiny-Definitions-DestinyStatOverrideDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyTalentExclusiveGroup|Destiny-Definitions-DestinyTalentExclusiveGroup]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyTalentGridDefinition|Destiny-Definitions-DestinyTalentGridDefinition]] | Talents | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyTalentNodeCategory|Destiny-Definitions-DestinyTalentNodeCategory]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyTalentNodeDefinition|Destiny-Definitions-DestinyTalentNodeDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyTalentNodeExclusiveSetDefinition|Destiny-Definitions-DestinyTalentNodeExclusiveSetDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyTalentNodeStepGroups|Destiny-Definitions-DestinyTalentNodeStepGroups]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]] | Unlocks | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyUnlockExpressionDefinition|Destiny-Definitions-DestinyUnlockExpressionDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorAcceptedItemDefinition|Destiny-Definitions-DestinyVendorAcceptedItemDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorActionDefinition|Destiny-Definitions-DestinyVendorActionDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorCategoryEntryDefinition|Destiny-Definitions-DestinyVendorCategoryEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorCategoryOverlayDefinition|Destiny-Definitions-DestinyVendorCategoryOverlayDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]] | Vendors | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorDisplayPropertiesDefinition|Destiny-Definitions-DestinyVendorDisplayPropertiesDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorInteractionDefinition|Destiny-Definitions-DestinyVendorInteractionDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorInteractionReplyDefinition|Destiny-Definitions-DestinyVendorInteractionReplyDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorInteractionSackEntryDefinition|Destiny-Definitions-DestinyVendorInteractionSackEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorInventoryFlyoutBucketDefinition|Destiny-Definitions-DestinyVendorInventoryFlyoutBucketDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorInventoryFlyoutDefinition|Destiny-Definitions-DestinyVendorInventoryFlyoutDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorItemDefinition|Destiny-Definitions-DestinyVendorItemDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorRequirementDisplayEntryDefinition|Destiny-Definitions-DestinyVendorRequirementDisplayEntryDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorSaleItemActionBlockDefinition|Destiny-Definitions-DestinyVendorSaleItemActionBlockDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>
[[DestinyVendorServiceDefinition|Destiny-Definitions-DestinyVendorServiceDefinition]] |  | Scope: <i>Destiny.Definitions</i><br/>

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
[[GroupHomepage|GroupsV2-GroupHomepage]] | Scope: <i>GroupsV2</i><br/>
[[GroupPostPublicity|GroupsV2-GroupPostPublicity]] | Scope: <i>GroupsV2</i><br/>
[[GroupPotentialMemberStatus|GroupsV2-GroupPotentialMemberStatus]] | Scope: <i>GroupsV2</i><br/>
[[GroupType|GroupsV2-GroupType]] | Scope: <i>GroupsV2</i><br/>
[[HostGuidedGamesPermissionLevel|GroupsV2-HostGuidedGamesPermissionLevel]] | Scope: <i>GroupsV2</i><br/>
[[IgnoreStatus|Ignores-IgnoreStatus]] | Scope: <i>Ignores</i><br/>
[[ItemBindStatus|Destiny-ItemBindStatus]] | Scope: <i>Destiny</i><br/>
[[ItemLocation|Destiny-ItemLocation]] | Scope: <i>Destiny</i><br/>
[[ItemState|Destiny-ItemState]] | Scope: <i>Destiny</i><br/>
[[MembershipOption|GroupsV2-MembershipOption]] | Scope: <i>GroupsV2</i><br/>
[[PartnershipType|Partnerships-PartnershipType]] | Scope: <i>Partnerships</i><br/>
[[PeriodType|Destiny-HistoricalStats-Definitions-PeriodType]] | Scope: <i>Destiny.HistoricalStats.Definitions</i><br/>
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
[[AckState|User-AckState]] | Scope: <i>User</i><br/>
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
[[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]] | Scope: <i>Destiny.Quests</i><br/>
[[DestinyPerkReference|Destiny-Perks-DestinyPerkReference]] | Scope: <i>Destiny.Perks</i><br/>
[[DestinyPlayer|Destiny-HistoricalStats-DestinyPlayer]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyPostGameCarnageReportData|Destiny-HistoricalStats-DestinyPostGameCarnageReportData]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyPostGameCarnageReportEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportEntry]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyPostGameCarnageReportExtendedData|Destiny-HistoricalStats-DestinyPostGameCarnageReportExtendedData]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyPostGameCarnageReportTeamEntry|Destiny-HistoricalStats-DestinyPostGameCarnageReportTeamEntry]] | Scope: <i>Destiny.HistoricalStats</i><br/>
[[DestinyProfileComponent|Destiny-Entities-Profiles-DestinyProfileComponent]] | Scope: <i>Destiny.Entities.Profiles</i><br/>
[[DestinyProfileResponse|Destiny-Responses-DestinyProfileResponse]] | Scope: <i>Destiny.Responses</i><br/>
[[DestinyProgression|Destiny-DestinyProgression]] | Scope: <i>Destiny</i><br/>
[[DestinyPublicActivityStatus|Destiny-Activities-DestinyPublicActivityStatus]] | Scope: <i>Destiny.Activities</i><br/>
[[DestinyPublicMilestone|Destiny-Milestones-DestinyPublicMilestone]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyPublicMilestoneActivity|Destiny-Milestones-DestinyPublicMilestoneActivity]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyPublicMilestoneActivityVariant|Destiny-Milestones-DestinyPublicMilestoneActivityVariant]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyPublicMilestoneChallenge|Destiny-Milestones-DestinyPublicMilestoneChallenge]] | Scope: <i>Destiny.Milestones</i><br/>
[[DestinyPublicMilestoneQuest|Destiny-Milestones-DestinyPublicMilestoneQuest]] | Scope: <i>Destiny.Milestones</i><br/>
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
[[DyeReference|Destiny-DyeReference]] | Scope: <i>Destiny</i><br/>
[[ForumRecruitmentDetail|Forum-ForumRecruitmentDetail]] | Scope: <i>Forum</i><br/>
[[GearAssetDataBaseDefinition|Destiny-Config-GearAssetDataBaseDefinition]] | Scope: <i>Destiny.Config</i><br/>
[[GeneralUser|User-GeneralUser]] | Scope: <i>User</i><br/>
[[GroupFeatures|GroupsV2-GroupFeatures]] | Scope: <i>GroupsV2</i><br/>
[[GroupMember|GroupsV2-GroupMember]] | Scope: <i>GroupsV2</i><br/>
[[GroupPotentialMember|GroupsV2-GroupPotentialMember]] | Scope: <i>GroupsV2</i><br/>
[[GroupResponse|GroupsV2-GroupResponse]] | Scope: <i>GroupsV2</i><br/>
[[GroupUserBase|GroupsV2-GroupUserBase]] | Scope: <i>GroupsV2</i><br/>
[[GroupV2|GroupsV2-GroupV2]] | Scope: <i>GroupsV2</i><br/>
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

## <a name="Schemas-Generic"></a>Generic Class Schemas
Name | Description
---- | -----------
[[DestinyItemComponentSet&lt;int32&gt;|DestinyItemComponentSetOfint32]] | Scope: <i></i><br/>
[[DestinyItemComponentSet&lt;int64&gt;|DestinyItemComponentSetOfint64]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int32,DestinyItemInstanceComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int32,DestinyItemObjectivesComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int32,DestinyItemPerksComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemPerksComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int32,DestinyItemRenderComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemRenderComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int32,DestinyItemSocketsComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int32,DestinyItemStatsComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemStatsComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int32,DestinyItemTalentGridComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int32,DestinyVendorSaleItemComponent&gt;|DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int64,DestinyCharacterActivitiesComponent&gt;|DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int64,DestinyCharacterComponent&gt;|DictionaryComponentResponseOfint64AndDestinyCharacterComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int64,DestinyCharacterProgressionComponent&gt;|DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int64,DestinyCharacterRenderComponent&gt;|DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int64,DestinyInventoryComponent&gt;|DictionaryComponentResponseOfint64AndDestinyInventoryComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int64,DestinyItemInstanceComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int64,DestinyItemObjectivesComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int64,DestinyItemPerksComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemPerksComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int64,DestinyItemRenderComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemRenderComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int64,DestinyItemSocketsComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int64,DestinyItemStatsComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemStatsComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int64,DestinyItemTalentGridComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;int64,DestinyKiosksComponent&gt;|DictionaryComponentResponseOfint64AndDestinyKiosksComponent]] | Scope: <i></i><br/>
[[DictionaryComponentResponse&lt;uint32,DestinyItemPlugComponent&gt;|DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent]] | Scope: <i></i><br/>
[[SearchResult&lt;CommunityLiveStatus&gt;|SearchResultOfCommunityLiveStatus]] | Scope: <i></i><br/>
[[SearchResult&lt;DestinyEntitySearchResultItem&gt;|SearchResultOfDestinyEntitySearchResultItem]] | Scope: <i></i><br/>
[[SearchResult&lt;PostResponse&gt;|SearchResultOfPostResponse]] | Scope: <i></i><br/>
[[SearchResult&lt;TrendingEntry&gt;|SearchResultOfTrendingEntry]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyCharacterActivitiesComponent&gt;|SingleComponentResponseOfDestinyCharacterActivitiesComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyCharacterComponent&gt;|SingleComponentResponseOfDestinyCharacterComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyCharacterProgressionComponent&gt;|SingleComponentResponseOfDestinyCharacterProgressionComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyCharacterRenderComponent&gt;|SingleComponentResponseOfDestinyCharacterRenderComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyInventoryComponent&gt;|SingleComponentResponseOfDestinyInventoryComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyItemComponent&gt;|SingleComponentResponseOfDestinyItemComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyItemInstanceComponent&gt;|SingleComponentResponseOfDestinyItemInstanceComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyItemObjectivesComponent&gt;|SingleComponentResponseOfDestinyItemObjectivesComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyItemPerksComponent&gt;|SingleComponentResponseOfDestinyItemPerksComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyItemRenderComponent&gt;|SingleComponentResponseOfDestinyItemRenderComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyItemSocketsComponent&gt;|SingleComponentResponseOfDestinyItemSocketsComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyItemStatsComponent&gt;|SingleComponentResponseOfDestinyItemStatsComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyItemTalentGridComponent&gt;|SingleComponentResponseOfDestinyItemTalentGridComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyKiosksComponent&gt;|SingleComponentResponseOfDestinyKiosksComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyProfileComponent&gt;|SingleComponentResponseOfDestinyProfileComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyVendorCategoriesComponent&gt;|SingleComponentResponseOfDestinyVendorCategoriesComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyVendorComponent&gt;|SingleComponentResponseOfDestinyVendorComponent]] | Scope: <i></i><br/>
[[SingleComponentResponse&lt;DestinyVendorReceiptsComponent&gt;|SingleComponentResponseOfDestinyVendorReceiptsComponent]] | Scope: <i></i><br/>

