## About
This page will cover automated updates to the Wiki as well as changes to the [GitHub Pages frontend](http://destinydevs.github.io/BungieNetPlatform).

## December 7, 2017
The one after the long break.

Stats:
* API Version: 2.0.1 > 2.1.0
* Schemas: 445 > 454
* Definitions: 104 > 105
* Endpoints:
 * Destiny2: 29 > 31

Schemas (added):
* [[Destiny.Components.Vendors.DestinyVendorSaleItemSetComponent|Destiny-Components-Vendors-DestinyVendorSaleItemSetComponent]]
* [[Destiny.Definitions.DestinyFactionVendorDefinition|Destiny-Definitions-DestinyFactionVendorDefinition]]
* [[Destiny.Definitions.Reporting.DestinyReportReasonCategoryDefinition|Destiny-Definitions-Reporting-DestinyReportReasonCategoryDefinition]]
* [[Destiny.Definitions.Reporting.DestinyReportReasonDefinition|Destiny-Definitions-Reporting-DestinyReportReasonDefinition]]
* [[Destiny.Reporting.Requests.DestinyReportOffensePgcrRequest|Destiny-Reporting-Requests-DestinyReportOffensePgcrRequest]]
* [[Destiny.Requests.Actions.DestinyPostmasterTransferRequest|Destiny-Requests-Actions-DestinyPostmasterTransferRequest]]
* [[Destiny.Responses.DestinyVendorsResponse|Destiny-Responses-DestinyVendorsResponse]]
* [[DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent]]
* [[DictionaryComponentResponseOfuint32AndDestinyVendorComponent]]
* [[DictionaryComponentResponseOfuint32AndDestinyVendorSaleItemSetComponent]]

Schemas (changed):
* [[Destiny.Definitions.DestinyFactionDefinition||Destiny-Definitions-DestinyFactionDefinition]]
 * Removed: backgroundImagePath | string
 * Removed: rewardVendorPreviewCategoryHashes | integer:int32[]
 * Added: vendors | [[Destiny.Definitions.DestinyFactionVendorDefinition|Destiny-Definitions-DestinyFactionVendorDefinition]][] | List of vendors that are associated with this faction. The last vendor that passes the unlock flag checks is the one that should be shown.
* [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]
 * Added: doesPostmasterPullHaveSideEffects | boolean | The boolean will indicate to us (and you!) whether something *could* happen when you transfer this item from the Postmaster that might be considered a &quot;destructive&quot; action. It is not feasible currently to tell you (or ourelves!) in a consistent way whether this *will* actually cause a destructive action, so we are playing it safe: if it has the potential to do so, we will not allow it to be transferred from the Postmaster by default. You will need to check for this flag before transferring an item from the Postmaster, or else you'll end up receiving an error.
* [[Destiny.Definitions.DestinyItemSackBlockDefinition|Destiny-Definitions-DestinyItemSackBlockDefinition]]
 * Added: openOnAcquire | boolean |
* [[Destiny.Definitions.DestinyVendorCategoryEntryDefinition|Destiny-Definitions-DestinyVendorCategoryEntryDefinition]]
 * Added: vendorItemIndexes | integer:int32[] A shortcut for the vendor item indexes sold under this category. Saves us from some expensive reorganization at runtime.
* [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]
 * Added: returnWithVendorRequest | boolean | As many of you know, Vendor data has historically been pretty brutal on the BNet servers. In an effort to reduce this workload, only Vendors with this flag set will be returned on Vendor requests. This allows us to filter out Vendors that don't dynamic data that's particularly useful: things like &quot;Preview/Sack&quot; vendors, for example, that you can usually suss out the details for using just the definitions themselves.
* [[Destiny.Definitions.DestinyVendorItemDefinition|Destiny-Definitions-DestinyVendorItemDefinition]]
 * Added: exclusivity | [[BungieMembershipType|BungieMembershipType]]:Enum | If this item can only be purchased by a given platform, this indicates the platform to which it is restricted.
 * Added: isOffer | boolean:nullable | If this sale can only be performed as the result of an offer check, this is true.
 * Added: isCrm | boolean:nullable | If this sale can only be performed as the result of receiving a CRM offer, this is true.
* [[Destiny.Definitions.Milestones.DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]
 * Added: explorePrioritizesActivityImage | boolean | If TRUE, &quot;Explore Destiny&quot; (the front page of BNet and the companion app) prioritize using the activity image over any overriding Quest or Milestone image provided. This unfortunate hack is brought to you by Trials of The Nine.
* [[Destiny.DestinyGameVersions|Destiny-DestinyGameVersions]]
 * Added: DLC1 | 2 |
* [[Destiny.Entities.Vendors.DestinyVendorComponent|Destiny-Entities-Vendors-DestinyVendorComponent]]
 * Removed: ackState | [[AckState|User-AckState]] | Long ago, we thought it would be a good idea to have special UI that showed whether or not you've seen a Vendor's inventory after cycling. For now, we don't have that UI anymore. This property still exists for historical purposes. Don't worry about it.
* [[Destiny.Entities.Vendors.DestinyVendorSaleItemComponent|Destiny-Entities-Vendors-DestinyVendorSaleItemComponent]]
 * Added: quantity | integer:int32 | How much of the item you'll be getting.
* [[Destiny.HistoricalStats.Definitions.DestinyHistoricalStatsDefinition|Destiny-HistoricalStats-Definitions-DestinyHistoricalStatsDefinition]]
 * Added: statNameAbbr | string | Display name abbreviated
* [[Destiny.HistoricalStats.Definitions.UnitType|Destiny-HistoricalStats-Definitions-UnitType]]
 * Added: CompletionReason | 13 | The value is a enumeration of the Completion Reason type.
* [[Destiny.HistoricalStats.DestinyPlayer|Destiny-HistoricalStats-DestinyPlayer]]
 * Added: emblemHash | integer:uint32 | If we know the emblem's hash, this can be used to look up the player's emblem at the time of a match when receiving PGCR data, or otherwise their currently equipped emblem (if we are able to obtain it).
* [[Destiny.Milestones.DestinyMilestoneActivity|Destiny-Milestones-DestinyMilestoneActivity]]
 * Added: activityModeHash | [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32:nullable | The hash identifier of the most specific Activity Mode under which this activity is played. This is useful for situations where the activity in question is - for instance - a PVP map, but it's not clear what mode the PVP map is being played under. If it's a playlist, this will be less specific: but hopefully useful in some way.
 * Added: activityModeType | integer:int32:nullable | The enumeration equivalent of the most specific Activity Mode under which this activity is played.
* [[Destiny.Milestones.DestinyMilestoneActivityVariant|Destiny-Milestones-DestinyMilestoneActivityVariant]]
 * Added: activityModeHash | [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32:nullable | The hash identifier of the most specific Activity Mode under which this activity is played. This is useful for situations where the activity in question is - for instance - a PVP map, but it's not clear what mode the PVP map is being played under. If it's a playlist, this will be less specific: but hopefully useful in some way.
 * Added: activityModeType | integer:int32:nullable | The enumeration equivalent of the most specific Activity Mode under which this activity is played.
* [[Destiny.Milestones.DestinyPublicMilestoneActivity|Destiny-Milestones-DestinyPublicMilestoneActivity]]
 * Added: activityModeHash | [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32:nullable | The hash identifier of the most specific Activity Mode under which this activity is played. This is useful for situations where the activity in question is - for instance - a PVP map, but it's not clear what mode the PVP map is being played under. If it's a playlist, this will be less specific: but hopefully useful in some way.
 * Added: activityModeType | integer:int32:nullable | The enumeration equivalent of the most specific Activity Mode under which this activity is played.
* [[Destiny.Milestones.DestinyPublicMilestoneActivityVariant|Destiny-Milestones-DestinyPublicMilestoneActivityVariant]]
 * Added: activityModeHash | [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32:nullable | The hash identifier of the most specific Activity Mode under which this activity is played. This is useful for situations where the activity in question is - for instance - a PVP map, but it's not clear what mode the PVP map is being played under. If it's a playlist, this will be less specific: but hopefully useful in some way.
 * Added: activityModeType | integer:int32:nullable | The enumeration equivalent of the most specific Activity Mode under which this activity is played.
* [[Destiny.Progression.DestinyFactionProgression|Destiny-Progression-DestinyFactionProgression]]
 * Added: factionVendorIndex | integer:int32 | The index of the Faction vendor that is currently available. Will be set to -1 if no vendors are available.
* [[Destiny.Responses.DestinyVendorResponse|Destiny-Responses-DestinyVendorResponse]]
 * Renamed: items > itemComponents | [[DestinyItemComponentSetOfint32|DestinyItemComponentSetOfint32]] | Item components, keyed by the vendorItemIndex of the active sale items. COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
* [[Exceptions.PlatformErrorCodes|Exceptions-PlatformErrorCodes]]
 * Added: DestinyItemNotTransferrableHasSideEffects | 1673 |
 * Added: ReportOffenderNotInPgcr | 2700 |
 * Added: ReportRequestorNotInPgcr | 2701 |
 * Added: ReportSubmissionFailed | 2702 |
* [[Trending.TrendingEntry|Trending-TrendingEntry]]
 * Added: items | [[TrendingEntry|Trending-TrendingEntry]][] | If the item is of entityType TrendingEntryType.Container, it may have items - also Trending Entries - contained within it. This is the ordered list of those to display under the Container's header.
* [[Trending.TrendingEntryType|Trending-TrendingEntryType]]
 * Added: Container | 10 |
 * Added: Release | 11 |

Services/Endpoints (added):
* [[Destiny2.PullFromPostmaster|Destiny2-PullFromPostmaster]]
* [[Destiny2.ReportOffensivePostGameCarnageReportPlayer|Destiny2-ReportOffensivePostGameCarnageReportPlayer]]

Services/Endpoints (changed):
* [[Content.SearchContentWithText|Content-Content-SearchContentWithText]]
 * Added: source | string | No |



## October 31, 2017
The one that got delayed.

Added support for auto-generating unsupported endpoints. Includes Destiny 1 and all other services available in the platformlib file. Pages will have incomplete information (especially response bodies) until I can go through and add all the components into the OpenApi spec.
Added a changelog section to the frontpage as well as a new Community Apps listing to showcase apps that have been submitted to [this form](https://goo.gl/forms/eKTqppizDA3vhD8E3).
Fixed some other issues to do with rendering out pages etc.

Note: For the time being, the diff changelog of past updates will be on hiatus until I have a more stable setup in place. A lot of files are getting touched so its hard to check where is actually new and what is  getting flagged unintentionally.

## August 26, 2017
The one that became official.

The two main pages you will want to look at are [[Components]] and [[Endpoints]]. Example response objects may not be accurate so treat them as a work in progress until it can be determined whether they are being generated properly.

Since there's a bit of a changeover involved with upgrading my scripts to work with the new OpenAPI spec in the official docs, I haven't yet got diff changes working again.
At the moment, the only endpoints included are the ones available in the official specification. This also means legacy endpoints will be missing until I get round to updating them to the new format.

TODO: Add details on what has changed since the changeover on August 23.

## June 29, 2017
The one that prepares for the migration.

Endpoints (changed):
* POST [[GroupService/DesignateClanFounder|DesignateClanFounder]] - renamed, was Migrate

Endpoints (added):
* POST [[GroupService/SaveMigrationSelection|SaveMigrationSelection]]

Enums (changes):
* MigrationSelection - renamed, was MigrationMode
 * "0" None - renamed, was CovertToClan

Enums (added):
* MigrationSelection
 * "2" ConvertToClanKeepContent
 * "3" ConvertToClanNoContent

## June 14, 2017
The one that brought on a Blizzard.

Endpoints (added):
* GET [[UserService/GetMembershipDataForCurrentUser|GetMembershipDataForCurrentUser]]
* GET [[TrendingService/GetTrendingCategories|GetTrendingCategories]]
* GET [[TrendingService/GetTrendingCategory|GetTrendingCategory]]
* GET [[TrendingService/GetTrendingEntryDetail|GetTrendingEntryDetail]]

Endpoints (changed):
* POST [[App/GetOAuthTokens|GetOAuthTokens]] - renamed, was GetOAuthAccessToken

Enums (added):
* BungieCredentialType
 * "14" BattleNetId
* BungieMembershipType
 * "4" TigerBlizzard
* PlatformErrorCodes
 * "2113" ApplicationNotConfiguredForBungieAuth
 * "2114" ApplicationNotConfiguredForOAuth
 * "2115" OAuthAccessTokenExpired
* TrendingEntryType
 * "0" News
 * "1" DestinyItem
 * "2" DestinyActivity
 * "3" DestinyEvent
 * "4" SupportArticle
 * "5" Creation
 * "6" Stream
 * "7" Update
 * "8" Link

Enums (changed):
* MigrationMode
 * "1" DeleteClan - renamed from SplitClan


## May 31, 2017
The one bearing tokens.

Updated the [[User Authentication|Authentication]] page with information about the new OAuth 2.0 implementation.

Endpoints (added):
* POST [[App/GetOAuthAccessToken|GetOAuthAccessToken]]

Enums:
* ApplicationScopes
 * "1024" ReadAndApplyTokens
* OAuthApplicationType
 * "0" None
 * "1" Confidential
 * "2" Public
* PlatformErrorCodes
 * "175" ContentLocaleEditPermissionDenied
 * "2112" ApplicationTokenFormatNotValid

## May 11, 2017
The one that needed documenting.

Endpoints:
* GET [[UserService/GetMembershipDataById|GetMembershipDataById]] changed param1 and param2 to the correct param names.

Pages:
* [[Manifest]] - Fixed an error with the PHP implementation, added code samples for Python 3.X support.

## April 19, 2017
The one that was sacrificed to a machine god.

Endpoints (renamed):
* GET [[UserService/GetMembershipDataById|GetMembershipDataById]] was "GetMembershipById"

## April 5, 2017
The one that was lost in time.

Endpoints (added):
* POST [[AdminService/ReturnAssignedReports|ReturnAssignedReports]]

Endpoints (changed):
* GET [[ForumService/GetCoreTopicsPaged|GetCoreTopicsPaged]] - added "locales" query parameter
* GET [[ForumService/GetTopicsPaged|GetTopicsPaged]] - added "locales" query parameter

## March 30, 2017
The one that followed in hot pursuit.

Definitions:
* [[ActivityBundleDefinition]]: 309 > 310 (+1)
* [[ActivityDefinition]]: 652 > 653 (+1)
* [[UnlockFlagDefinition]]: 7730 > 7731 (+1)

## March 28, 2017
The one aged with triumphs.

Endpoints (removed):
* GET [[ExternalSocialService/GetPentathlonScores|GetPentathlonScores]]

Definitions:
* [[ActivityBundleDefinition]]: 312 > 309 (-3)
* [[ActivityCategoryDefinition]]: 6 > 7 (+1)
* [[ActivityDefinition]]: 568 > 652 (+4) | 2 > 1 (-1 classified)
* [[ActivityTypeDefinition]]: 66 > 67 (+1)
* [[DestinationDefinition]]: 23 > 24 (+1)
* [[GrimoireCardDefinition]]: 823 > 834 (+11)
* [[InventoryItemDefinition]]: 7840 > 8609 (+769) | 207 > 85 (-122 classified)
* [[ObjectiveDefinition]]: 1231 > 1388 (+157)
* [[PlaceDefinition]]: 10 > 11 (+1)
* [[ProgressionDefinition]]: 248 > 252 (+4)
* [[RecordBookDefinition]]: 4 > 5 (+1)
* [[RecordDefinition]]: 72 > 168 (+96)
* [[RewardSourceDefinition]]: 62 > 64 (+2)
* [[SandboxPerkDefinition]]: 1052 > 1058 (+6)
* [[SpecialEventDefinition]]: 6 > 3 (-3)
* [[TalentGridDefinition]]: 1297 > 1405 (+108)
* [[UnlockFlagDefinition]]: 7276 > 7730 (+454)
* [[VendorDefinition]]: 81 > 95 (+14)

## February 10, 2017
The one that was forgotten (again).

Endpoints (added):
* GET [[ExternalSocialService/GetPentathlonScores|GetPentathlonScores]]

Definitions:
* [[InventoryItemDefinition]]: 257 > 207 (-50 classified)

Definition Structure Changes:
* [[BondDefinition]] - "questItemHashes", "providedUnlockHash", "contentIdentifier"
* [[LocationDefinition]] - "uiLocationType", "contentIdentifier", plus changes to "locationReleases"
* [[ObjectiveDefinition]] - "contentIdentifier"
* [[RecordBookDefinition]] - "bookAvailableUnlockExpression", "activeRanges", "webmasterCampaignSystem", "contentIdentifier", plus changes to "pages"
* [[RecordDefinition]] - "actualRewards" array

## December 13, 2016
The one before The Dawning.

Definitions:
* [[MedalTierDefinition]]: New definition for Strike Scoring Medals | 11 entries
* [[ActivityBundleDefinition]]: 305 > 312 entries (+7)
* [[ActivityDefinition]]: 546 > 568 entries (+22)
* [[ActivityTypeDefinition]]: 62 > 66 entries (+4)
* [[GrimoireCardDefinition]]: 812 > 823 entries (+11)
* [[HistoricalStatsDefinition]]: 1797 > 1835 entries (+38)
* [[InventoryItemDefinition]]: 7544 > 7840 entries (+296) | 160 > 257 (+97 classified)
* [[ObjectiveDefinition]]: 1144 > 1231 entries (+87)
* [[ProgressionDefinition]]: 247 > 248 entries (+1)
* [[RecordBookDefinition]]: 3 > 4 entries (+1)
* [[RecordDefinition]]: 56 > 72 entries (+16)
* [[RewardSourceDefinition]]: 60 > 62 entries (+2)
* [[SandboxPerkDefinition]]: 1049 > 1052 entries (+3)
* [[TalentGridDefinition]]: 1285 > 1297 entries (+12)
* [[UnlockFlagDefinition]]: 6944 > 7276 entries (+332)
* [[VendorDefinition]]: 79 > 81 entries (+2)

Endpoints (removed):
* POST [[DestinyService/BuyItem|BuyItem]]
* POST [[DestinyService/RefundItem|RefundItem]]

Endpoints (updated):
* GET [[CommunitycontentService/GetAdminCommunityLiveStatuses|GetAdminCommunityLiveStatuses]]: now takes 3 parameters instead of 2

## December 8, 2016
The one that was finally sanctioned.

User Authentication is now live and then [[Authentication]] page has been updated with the newly "sanctioned" method of accessing private endpoints. Also due to an error with my Wiki script, there's a bunch of Enums and ErrorCodes related to the new ApplicationService which I haven't mentioned in any of my changelogs. Enums include ApiKeyStatus, ApplicationScopes, ApplicationStatus, AuthorizationStatus.

Enums:
* ApplicationScopes
 * "64" ReadPrivateDestinyData renamed to ReadDestinyInventoryAndVault
 * "512" ReadDestinyVendorsAndAdvisors
* PlatformErrorCodes
 * "2111" AccessTokenHasExpired
 * "2208" TwitchNotLinked
 * "2209" TwitchAccountNotFound
 * "2210" TwitchCouldNotLoadDestinyInfo
 * "2230" CommunityStreamingUnavailable

Update:
It turns out there was an extra CommunitycontentService endpoint that wasn't added to the platform-lib in recent changes. It is called "GetStreamingStatusForMember" and it allows you to query information about a specific stream for a given user.

## November 16, 2016
The one for Supremacy.

Definitions:
* [[InventoryItemDefinition]]: 162 > 160 (-2 classified)

Enums:
* AclEnum
 * 28 "BNextApplicationSupervision"
* BNetAccountPrivacy
 * 8 "HideFollowers"
* DestinyActivityModeType
 * 33 "SupremacyRumble"
 * 34 "SupremacyClash"
 * 35 "SupremacyInferno"
 * 36 "SupremacyMayhem"
* DestinyStatAggregationType
 * 0 "CharacterAverage"
 * 1 "Character"
 * 2 "Item"

## November 9, 2016
The one that came with less Silver Dust.

Definitions:
* [[HistoricalStatsDefinition]]: 1788 > 1797 entries (+9)
* [[RewardSourceDefinition]]: 59 > 60 entries (+1)

## October 26, 2016
The one that was forgotten.

Definitions:
* [[ActivityModeDefinition]]: 32 > 36 entries (+4)
* [[GrimoireCardDefinition]]: 810 > 812 entries (+2)

## October 20, 2016
The one before the festival.

Definitions:
* [[ActivityBundleDefinition]]: 300 > 305 entries (+5)
* [[ActivityDefinition]]: 539 > 546 entries (+7)
* [[ActivityModeDefinition]]: new (+32 entries)
* [[ActivityTypeDefinition]]: 61 > 62 (+1 entries)
* [[InventoryBucketDefinition]]: added "fifo" boolean
* [[InventoryItemDefinition]]: 7485 > 7544 (+59 entries) | 163 > 162 (-1 classified)
* [[LocationDefinition]]: 149 > 150 (+1 entry)
* [[ObjectiveDefinition]]: 1101 > 1144 (+43 entries)
* [[RecordDefinition]]: 48 > 56 (+8 entries)
* [[RewardSourceDefinition]]: 58 > 59 (+1 entry)
* [[SandboxPerkDefinition]]: 1043 > 1049 (+6 entries)
* [[StatDefinition]]: added "aggregationType" int and "hasComputedBlock" boolean
* [[TalentGridDefinition]]: added "maximumRandomMaterialRequirements" int
* [[UnlockFlagDefinition]]: 6795 > 6944 (+149 entries)
* [[VendorDefinition]]: 77 > 79 (+2 entries) plus a bunch of new properties under "sales" and "categoryIndex" added to "categories"

Endpoints (added):
* GET [[ApplicationService/GetAuthorizationForUserAndApplication|GetAuthorizationForUserAndApplication]]
* GET [[CommunitycontentService/GetCommunityFeaturedActivityModes|GetCommunityFeaturedActivityModes]]

Enums
* ActivityType
 * 2 "Authorize"
 * 2001 "Revoke"
* AffectedItemType
 * 7 "Application"
* EntityType
 * 9 "Application"
* NotificationType
 * 42 "APPLICATION_AUTHORIZED"

## September 30, 2016
The one about the raid Exotic.

Definitions:
 * [[GrimoireCardDefinition]]: 808 > 810 entries (+2)
 * [[InventoryItemDefinition]]: 164 > 163 classified (-1)

## September 20, 2016
The last minute push before the world ends.

Endpoints (added):
* POST [[CommunitycontentService/AdminSetCommunityLiveMemberBanStatus|AdminSetCommunityLiveMemberBanStatus]]
* POST [[CommunitycontentService/AdminSetCommunityLiveMemberFeatureStatus|AdminSetCommunityLiveMemberFeatureStatus]]
* GET [[CommunitycontentService/GetAdminCommunityLiveStatuses|GetAdminCommunityLiveStatuses]]
* GET [[CommunitycontentService/GetCommunityLiveStatuses|GetCommunityLiveStatuses]]
* GET [[CommunitycontentService/GetCommunityLiveStatusesForClanmates|GetCommunityLiveStatusesForClanmates]]
* GET [[CommunitycontentService/GetCommunityLiveStatusesForFriends|GetCommunityLiveStatusesForFriends]]
* GET [[CommunitycontentService/GetFeaturedCommunityLiveStatuses|GetFeaturedCommunityLiveStatuses]]

Enums
* ActivityType
 * 1 "TransferFromVault"
 * 1001 "TransferToVault"
 * 1002 "TrackQuest"
 * 1003 "UntrackQuest"
 * 1004 "EquipItem"
 * 1005 "BuyItem"
 * 1008 "LockItem"
 * 1009 "UnlockItem"
 * 1010 "RefundItem"
* AffectedItemType
 * 6 "Destiny"
* CommunityStatusSort (added)
 * 0 "Viewers"
 * 1 "Trending"
 * 2 "OverallViewers"
 * 3 "Followers"

Definitions:
 * [[ActivityBundleDefinition]]: 224 > 300 entries (+6)
 * [[ActivityDefinition]]: 337 > 539 entries (+202)
 * [[ActivityTypeDefinition]]: 56 > 61 entries (+5)
 * [[GrimoireCardDefinition]]: 675 > 808 entries (+133)
 * [[HistoricalStatsDefinition]]: 1737 > 1788 entries (+51)
 * [[InventoryBucketDefinition]]: 37 > 40 entries (+3)
 * [[InventoryItemDefinition]]: 6643 > 7485 entries (+842) | 176 > 164 classified (-12)
 * [[ItemCategoryDefinition]]: 55 > 56 entries (+1)
 * [[LocationDefinition]]: 134 > 149 entries (+15)
 * [[ObjectiveDefinition]]: 929 > 1101 entries (+172)
 * [[ProgressionDefinition]]: 246 > 247 entries (+1)
 * [[RecordBookDefinition]]: 2 > 3 entries (+1)
 * [[RecordDefinition]]: 24 > 48 entries (+24)
 * [[RewardSourceDefinition]]: 49 > 58 entries (+9)
 * [[SandboxPerkDefinition]]: 977 > 1043 entries (+66)
 * [[TalentGridDefinition]]: 1145 > 1285 entries (+140)
 * [[UnlockFlagDefinition]]: 6774 > 6795 entries (+21) | 788 > 0 classified (-788)
 * [[VendorCategoryDefinition]]: 12 > 13 entries (+1)
 * [[VendorDefinition]]: 48 > 77 entries (+29)

EnemyHistoricalStats (added)
* AiExpUltraTakenTitanArenaChallengeReef - A Taken Titan in the Challenge of Elders...what??
* AiIronLord - An Iron Lord boss??
* R1S5RaidPromiseSeraphUltraCaptain
* R1S5RaidPromiseWelderUltraCaptain
* R1S5StrikeOathUltraCaptain
* R1S5StrikeStarfishUltraServitor
* Siva
* SivaCaptain
* SivaDreg
* SivaServitor
* SivaShank
* SivaVandal

## September 9, 2016
The "pre-load" before Rise of Iron.

Endpoints (added):
* GET [[UserService/GetPartnerships|GetPartnerships]]
* POST [[UserService/RemovePartnership|RemovePartnership]]
* GET [[ActivityService/GetApplicationActivityForUser|GetApplicationActivityForUser]]

Endpoints (removed):
* GET [[ActivityService/GetAggregatedActivitiesForCurrentUser|GetAggregatedActivitiesForCurrentUser]] - replaced with GetApplicationActivityForUser?

Enums:
* ActivityType
 * 24 "ChangeClanName" renamed to "ChangeGroupName"
* DestinyAccountTransferState - removed
* DestinyActivityModeType
 * 31 "Supremacy"
 * 32 "PrivateMatchesAll"
* DestinyGameVersions
 * 16 "RiseOfIron"
* DestinyRecordUIStyle - added
* PartnershipType - added
* PlatformErrorCodes
 * 2200 "PartnershipInvalidType"
 * 2201 "PartnershipValidationError"
 * 2202 "PartnershipValidationTimeout"
 * 2203 "PartnershipAccessFailure"
 * 2204 "PartnershipAccountInvalid"
 * 2205 "PartnershipGetAccountInfoFailure"
 * 2206 "PartnershipDisabled"
 * 2207 "PartnershipAlreadyExists"

Definitions:
* [[ActivityBundleDefinition]]: 224 > 225 entries (-1)
* [[ActivityDefinition]]: 338 > 337 entries (-1)
* [[DestinationDefinition]]: 22 > 23 entries (+1)
* [[HistoricalStatsDefinition]]: 1731 > 1737 entries (+6)
* [[InventoryItemDefinition]]: 6557 > 6643 entries (+86) | 60 > 176 classified (+116)
* [[LocationDefinition]]: 133 > 134 entries (+1)
* [[ObjectiveDefinition]]: 976 > 929 entries (-47)
* [[RecordDefinition]]: 28 > 24 entries (-4)
* [[TalentGridDefinition]]: 1135 > 1145 entries (+10)
* [[UnlockFlagDefinition]]: 6029 > 6774 entries (+745) | 0 > 788 classified (+788)

EnemyHistoricalStats:
* R1S1StrikeMoon2Ultra0 - "Phogoth, the Untamed" renamed to "Hive Abomination" - RIP Phogoth...
* R1S2StrikeCosmo1Major0 - "Omnigul, the Will of Crota" renamed to "Omnigul, Will of Crota"

GeneralHistoricalStats:
* tagCaptures - "Crests Captured"
* capturedYourOwnKill "Captures From Your Own Kills"
* recoveredTeammateTags "Crests Denied"
* lostTagToOpponent "Crest Losses"
* recoveredOwnDeadTag "Self Crest Recoveries"
* tagsCapturedPerTagLost "Crests Captured Per Crest Lost"


## August 17, 2016
The one during Gamescom.

Endpoints (added):
* GET [[UserService/GetCurrentBungieNetUser|GetCurrentBungieNetUser]]

Endpoints (changed):
* GET [[CoreServices/GetGlobalAlerts|GetGlobalAlerts]] - added "includesteaming" query parameter

Enums:
It appears that the Enum code being generated in the platformlib is broken (and has been for several weeks now), so I am holding of pushing any updates to it until I hear back from the devs as to what is going on with it.

Update:
There was an issue with the Enum export script that was generating errors. A fix has been applied and the correct Enum values should be coming through now.

## August 10, 2016
The one that got redacted.

Definitions:
A "redacted" boolean was added to several definition types, which I assume is used to represent when it has been classified, so no special logic is required to detect missing information.

This includes...
* [[ActivityBundleDefinition]]
* [[ActivityCategoryDefinition]]
* [[ActivityDefinition]]
* [[ActivityTypeDefinition]]
* [[BondDefinition]]
* [[ClassDefinition]]
* [[CombatantDefinition]]
* [[DamageTypeDefinition]]
* [[DestinationDefinition]]
* [[DirectorBookDefinition]]
* [[EnemyRaceDefinition]]
* [[FactionDefinition]]
* [[GenderDefinition]]
* [[InventoryBucketDefinition]]
* [[InventoryItemDefinition]]
* [[ItemCategoryDefinition]]
* [[LocationDefinition]]
* [[ObjectiveDefinition]]
* [[PlaceDefinition]]
* [[ProgressionDefinition]]
* [[RaceDefinition]]
* [[RecordBookDefinition]]
* [[RecordDefinition]]
* [[RewardSourceDefinition]]
* [[SandboxPerkDefinition]]
* [[ScriptedSkullDefinition]]
* [[SpecialEventDefinition]]
* [[StatDefinition]]
* [[StatGroupDefinition]]
* [[TalentGridDefinition]]
* [[TriumphSetDefinition]]
* [[UnlockFlagDefinition]]
* [[VendorCategoryDefinition]]
* [[VendorDefinition]]

You should probably try and account for all these definitions as possibly having classified entries at some point, but it's mainly the ones related to activties and items where it is typically used.

## July 27, 2016
The one that broke my code (again).

Definitions:
* [[UnlockFlagDefinition]]: 6028 > 6029

Endpoints (changed):
* GET [[DestinyService/GetDestinyExplorerItems|GetDestinyExplorerItems]] "page" query parameter changed to "tpage"

Endpoints (added):
* POST [[UserService/UpdateDestinyEmblemAvatar|UpdateDestinyEmblemAvatar]]
* New "ApplicationService" (likely still in development)
* POST [[ApplicationService/ApplicationSearch|ApplicationSearch]]
* POST [[ApplicationService/ChangeApiKeyStatus|ChangeApiKeyStatus]]
* POST [[ApplicationService/CreateApiKey|CreateApiKey]]
* POST [[ApplicationService/CreateApplication|CreateApplication]]
* POST [[ApplicationService/EditApplication|EditApplication]]
* POST [[ApplicationService/GetAccessTokensFromCode|GetAccessTokensFromCode]]
* POST [[ApplicationService/GetAccessTokensFromRefreshToken|GetAccessTokensFromRefreshToken]]
* GET [[ApplicationService/GetApplication|GetApplication]]
* GET [[ApplicationService/GetApplicationApiKeys|GetApplicationApiKeys]]
* GET [[ApplicationService/GetAuthorizations|GetAuthorizations]]
* POST [[ApplicationService/PrivateApplicationSearch|PrivateApplicationSearch]]
* POST [[ApplicationService/RevokeAuthorization|RevokeAuthorization]]

Note: Converted undocumented url parameters to output as "param1", "param2" instead of using the minified names which change frequently.

Enums:
A lot of enums seemed to have changed to the point where simply checking the repo changelog is not practical.
From what I could see at a glance, multiple enums have been significantly simplified or changed entirely as I'm guessing the new system aims to cut away a lot of the clutter that has piled up over the months/years.
Some enums that are still being used by Destiny (such as more than half of the DestinyStatGroupType enums) are gone, which totally broke my Historical Stats section for the Wiki.

Apparently there are also some Error Codes missing as well such as "DestinyPGCRNotFound".

## July 8, 2016
The one after Bungie Day.

Definitions:
* [[InventoryItemDefinition]]: 70 > 60 classified
* [[ProgressionDefinition]]: 2 > 1 classified
* [[RecordBookDefinition]]: 1 > 0 classified
* [[RecordDefinition]]: 12 > 0 classified

Endpoints (added):
* GET [[GroupService/GetAllFoundedGroupsForMember|GetAllFoundedGroupsForMember]]
* GET [[GroupSerivce/GetMyClanMemberships|GetMyClanMemberships]]
* GET [[IgnoreService/GetReportContext|GetReportContext]]
* GET [[DestinyService/GetAdvisorsForAccount|GetAdvisorsForAccount]]
* GET [[DestinyService/GetRecordBookCompletionStatus|GetRecordBookCompletionStatus]]

Enums:
* "Acl" added "BNextDiscountSupport"
* "DestinyAccountTransferState" added
* "DestinyRecordCompletionStatus" added
* "NotificationType" added
 * "BANNED_PERMANENT"
 * "USER_PROFILE_BANNED_PERMANENT"
 * "USER_MESSAGE_BANNED_PERMANENT"
 * "GROUP_WALL_BANNED_PERMANENT"
* "PlatformErrorCodes" added
 * 593 "ForumUserBannedFromThisTopic"
 * 594 "ForumRecruitmentFireteamMembersOnly"
 * 2038 "NoAvailableDiscountCode"
 * 2039 "DiscountAlreadyClaimed"
 * 2040 "DiscountClaimFailure"
 * 2041 "DiscountConfigurationFailure"
 * 2042 "DiscountGenerationFailure"
 * 2043 "DiscountAlreadyExists"

## June 23, 2016
This update broke my code :'(

Definitions:
* [[ProgressionDefinition]]: added "rewardItems" to "steps" property.
* [[RecordBookDefinition]]: 0 > 1 classified (Year Two triumphs are now hidden)
* [[RecordDefinition]]: 0 > 12 classified (Year Two triumphs are now hidden)
* [[SpecialEventDefinition]]: added "unlockEventHash" property.
* [[TriumphSetDefinition]]: added "isRecordBook" property.

Endpoints (added):
* POST [[AdminService/OverrideGroupWallBanOnUser|OverrideGroupWallBanOnUser]]

Endpoints (removed):
* POST [[GroupService/DesignateClanFounderForMigration|DesignateClanFounderForMigration]]
* GET [[DestinyService/GetAdvisorsForCurrentCharacterV2|GetAdvisorsForCurrentCharacterV2]]

Enums (Holy crap!! Where do I start?):
* "ActivityAggregationType" removed
* "ActivityItemOrigin" removed
* "ActivityQueryFilter" removed
* "ActivityStatus" removed
* "ActivityOutputFormat" added
* "AdminHistoryItemFlags" added
* "AdminHistoryMembershipFlags" added
* "AdminHistoryType" added
* "BucketScope" added
* "Capabilities" added
* "ChatSecuritySetting" added
* "ContentPropertyDataType" added
* "CredentialType" added
* "DestinyActivityDifficultyTier" added
* "DestinyCardRarity" added
* "DestinyExcellenceBadgeTier" added
* "DestinyExplorerOrderDirection" added
* "DestinyGameVersions" added
* "DestinyRecordBookPageDisplayStyle" added
* "DestinyRewardSourceCategory" added
* "DestinyStatsCategoryType" added
* "DestinyStatsMergeMethod" added
* "DestinyTalentNodeStepDamageTypes" added
* "DestinyTalentNodeStepGuardianAttributes" added
* "DestinyTalentNodeStepImpactEffects" added
* "DestinyTalentNodeStepLightAbilities" added
* "DestinyTalentNodeStepWeaponPerformances" added
* "DestinyUnlockFlagOperator" added
* "DestinyUnlockValueUIStyle" added
* "DestinyVendorItemRefundPolicy" added
* "DirectorNodeState" added
* "DirectorNodeUIModifier" added
* "DirectorTransitionType" added
* "EventConversationType" added
* "ForumPostCategory" changed to "ForumPostCategorys"
* "GameServiceStatus" added
* "GlobalAcknowledgementItem" added
* "GlobalAlertLevel" added
* "GroupAllianceStatus" added
* "GroupApplicationResolveState" added
* "GroupAttributeType" added
* "GroupMemberSortBy" added
* "GroupMemberType" added
* "GroupPostPublicity" added
* "GroupRelationshipResult" added
* "GroupTypeSearchFilter" removed
* "GroupType" added
* "GroupForMemberFilter" added
* "IgnoreLength" added "GroupWallPost" (8) and "PrivateMessage" (9)
* "InvitationType" added
* "ItemState" added
* "MigrationMode" added
* "NotificationType" added "GROUP_WALL_BANNED" (37)
* "PlatformErrorCodes" added
* "RAFEligibility" added
* "SpecialItemType" added
* "TemplateFormat" added
* "TransferStatuses" added

## June 16, 2016
Definitions:
* [[ActivityDefinition]]: 337 > 338 entries (+1)
* [[InventoryItemDefinition]]: 6549 > 6557 entries (+12) | 60 > 70 classified
* [[ObjectiveDefinition]]: 971 > 976 entries (+5)
* [[ProgressionDefinition]]: 245 > 246 entries (+1) | 1 > 2 classified
* [[RecordBookDefinition]]: Looks like it has been re-purposed for Moments of Triumph challenges.
* [[RecordDefinition]] 16 > 28 entries (+12)
* [[SandboxPerkDefinition]]: 973 > 977 entries (+5)
* [[TalentGridDefinition]]: 1134 > 1135 entries (+1)
* [[UnlockFlagDefinition]]: 5991 > 6028 entries (+37)

Endpoints (Added):
* GET [[DestinyService/GetPublicAdvisorsV2|GetPublicAdvisorsV2]]
* GET [[DestinyService/GetAdvisorsForCharacterV2|GetAdvisorsForCharacterV2]]
* GET [[DestinyService/GetAdvisorsForCurrentCharacterV2|GetAdvisorsForCurrentCharacterV2]]

These were added in the previous release but were not included in the platform.lib.min.js file.

## May 27, 2016
Definitions:
* [[ActivityCategoryDefinition]]: new definition type
* [[HistoricalStatsDefinition]]: 1733 > 1731 entries (-2), Armed and Dangerous (medalsArtifactKillSpree) and The Heist (medalsArtifactHeist) removed.
* [[InventoryItemDefinition]]: 61 > 60 classified
* [[RecordBookDefinition]]: each record now has a "spotlight" property and there's also a "displayStyle" property for each map
* [[SpecialEventDefinition]]: 7 > 6 entries (-1), new properties; backgroundImageMobile, recruitmentIds, playlistActivityHash

Update #1:
Manually added V2 Advisor Endpoints that were left out of the current platform.lib.min.js build.

Endpoints (Added):
* GET [[DestinyService/GetPublicAdvisorsV2|GetPublicAdvisorsV2]]
* GET [[DestinyService/GetAdvisorsForCharacterV2|GetAdvisorsForCharacterV2]]
* GET [[DestinyService/GetAdvisorsForCurrentCharacterV2|GetAdvisorsForCurrentCharacterV2]]

## May 13, 2016

Definitions:
* [[ActivityDefinition]]: added "isMatchmade" property
* [[InventoryItemDefinition]]: 6548 > 6549 entries (+1) | 63 > 61 classified
* [[UnlockFlagDefinition]]: 5990 > 5991 entries (+1)

## April 28, 2016

Endpoints (Added):
* POST [[ForumService/GetRecruitmentThreadSummaries|GetRecruitmentThreadSummaries]]
* POST [[ForumService/LeaveFireteamThread|LeaveFireteamThread]]

Endpoints (Changed):
* POST [[GroupService/Migrate|Migrate]]
* GET [[MessageService/GetConversationThreadV3]]

Enums:
* NotificationType.RECRUIT_THREAD_KICKED = 35
* NotificationType.RECRUIT_THREAD_CANCELED = 36
* RealTimeEventType.RecruitThreadUpdate = 7

Definitions:
* [[InventoryItemDefinition]]: 6548 entries | 64 > 63 classified
* [[RewardSourceDefinition]]: 48 > 49 entries (+1)

## April 21, 2016

Historical Stats:

Added a bunch of unique named enemies found in strikes and other PvE activities that are currently not tracked. If you know of others, please let me know.

Definitions:
* [[UnlockFlagDefinition]]: 5988 > 5990 (+2)

## April 13, 2016
April Update Launched.

Endpoints (Added):
* POST [[ForumService/ApproveFireteamThread|ApproveFireteamThread]]
* POST [[ForumService/JoinFireteamThread|JoinFireteamThread]]
* POST [[ForumService/KickBanFireteamApplicant|KickBanFireteamApplicant]]
* POST [[GroupService/Migrate|Migrate]]
* GET [[DestinyService/GetClanLeaderboards|GetClanLeaderboards]]
* GET [[DestinyService/GetItemReferenceDetail|GetItemReferenceDetail]]

Endpoints (Changed):
* GET [[DestinyService/GetLeaderboards|GetLeaderboards]]
* GET [[DestinyService/GetLeaderboardsForCharacter|GetLeaderboardsForCharacter]]

Enums:
* ForumPostCategory.Recruitment = 1024
* NotificationType.RECRUIT_THREAD_READY = 34
* DestinyActivityModeType.ArenaElderChallenge = 30
* ForumRecruitmentToneLabel.None = 0
* ForumRecruitmentToneLabel.FamilyFriendly = 1
* ForumRecruitmentToneLabel.Rowdy = 2
* ForumRecruitmentIntensityLabel.None = 0
* ForumRecruitmentIntensityLabel.Casual = 1
* ForumRecruitmentIntensityLabel.Professional = 2

Historical Stats:

A handful of stats that previously had no statName now have one. The "Ace" medal has had a description change.

Definitions:
* [[ActivityBundleDefinition]]: 223 > 225 entries (+2)
* [[ActivityDefinition]]: 329 > 337 entries (+8) | 2 > 5 classified
* [[BondDefinition]]: 3 > 4 entries (+1)
* [[CombatantDefinition]] (New): 167 entries (+167)
* [[GrimoireCardDefinition]]: 664 > 675 entries (+11)
* [[InventoryItemDefinition]]: 6271 > 6547 entries (+276) | 50 > 64 classified
* [[LocationDefinition]]: 130 > 133 entries (+3)
* [[ObjectiveDefinition]]: 933 > 971 entries (+38) * new valueStyle property
* [[ProgressionDefinition]]: 243 > 254 entries (+2) | 0 > 1 classified
* [[RewardSourceDefinition]]: 47 > 48 entries (+1)
* [[SandboxPerkDefinition]]: 959 > 973 entries (+14)
* [[SpecialEventDefinition]]: 6 > 7 entries (+1)
* [[TalentGridDefinition]]: 1083 > 1134 entries (+51)
* [[UnlockFlagDefinition]]: 5717 > 5988 entries (+271)
* [[VendorDefinition]]: 33 > 48 entries (+15)

## March 31, 2016
Added [[HistoricalStats]] section.

Endpoints (Added):
* POST [[MessageService/CreateConversationV2|CreateConversationV2]]
* POST [[MessageService/ModerateGroupWall|ModerateGroupWall]]

Endpoints (Removed):
* POST [[ActivityService/FollowGroup|FollowGroup]]
* GET [[ActivityService/GetFollowersOfGroup|GetFollowersOfGroup]]
* GET [[ActivityService/GetGroupActivities|GetGroupActivities]]
* POST [[ActivityService/UnfollowGroup|UnfollowGroup]]

## March 13, 2016
Added 2 new Angular modules to the frontend (see below).

Frontend (Pages):
* Added Search Wiki module.
* Added [[API Test|API-Test]] module.

## March 6, 2016
Initial GitHub Wiki was setup and existing pages were pulled from the old [BungieNetPlatform Wikia](http://bungienetplatform.wikia.com/wiki/Bungienetplatform_Wikia).

Backend (Wiki):
* Endpoints, Enums and most listing pages are generated via a PHP script locally and are then pushed up into the repo. Try not to mess with these too much so automatic updates can be done quickly and easily.
* There will be page errors/missing information for some Endpoints as content was scraped programmatically from the old Wikia.

Frontend (Pages):
* Pages are generated from Wiki Markdown files using [Parsedown](http://parsedown.org/) and some custom regular expressions to keep things tidy.
* Added dark theme using colours sourced from current [Bungie.net](https://www.bungie.net) website.
* Code syntax highlighting supported with [highlight.js](https://highlightjs.org/) library.
* Code examples are collapsed by default to make it easier to skim through a page.
* Added an "Edit Wiki" link at the top of every page to quickly go in and make changes. Note this won't update the frontend until all the static pages have been recompiled and pushed back into the repo.
* Made tables sortable.
* Added JavaScript Table of Contents generator that pulls h2-h6 tags.

Planned Features:
* Add search functionality for looking up pages by name. Will entirely in JavaScript using a lookup table.