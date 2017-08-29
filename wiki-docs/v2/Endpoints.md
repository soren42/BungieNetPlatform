<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## <a name="User"></a>User (7 Endpoints)
Method | Name | Endpoint
------ | ---- | --------
GET | [[GetBungieNetUserById|User-GetBungieNetUserById]] | /User/GetBungieNetUserById/{id}/
GET | [[GetUserAliases|User-GetUserAliases]] | /User/GetUserAliases/{id}/
GET | [[SearchUsers|User-SearchUsers]] | /User/SearchUsers/
GET | [[GetAvailableThemes|User-GetAvailableThemes]] | /User/GetAvailableThemes/
GET | [[GetMembershipDataById|User-GetMembershipDataById]] | /User/GetMembershipsById/{membershipId}/{membershipType}/
GET | [[GetMembershipDataForCurrentUser|User-GetMembershipDataForCurrentUser]] | /User/GetMembershipsForCurrentUser/
GET | [[GetPartnerships|User-GetPartnerships]] | /User/{membershipId}/Partnerships/


## <a name="Forum"></a>Forum (14 Endpoints)
Method | Name | Endpoint
------ | ---- | --------
GET | [[GetTopicsPaged|Forum-GetTopicsPaged]] | /Forum/GetTopicsPaged/{page}/{pageSize}/{group}/{sort}/{quickDate}/{categoryFilter}/
GET | [[GetCoreTopicsPaged|Forum-GetCoreTopicsPaged]] | /Forum/GetCoreTopicsPaged/{page}/{sort}/{quickDate}/{categoryFilter}/
GET | [[GetPostsThreadedPaged|Forum-GetPostsThreadedPaged]] | /Forum/GetPostsThreadedPaged/{parentPostId}/{page}/{pageSize}/{replySize}/{getParentPost}/{rootThreadMode}/{sortMode}/
GET | [[GetPostsThreadedPagedFromChild|Forum-GetPostsThreadedPagedFromChild]] | /Forum/GetPostsThreadedPagedFromChild/{childPostId}/{page}/{pageSize}/{replySize}/{rootThreadMode}/{sortMode}/
GET | [[GetPostAndParent|Forum-GetPostAndParent]] | /Forum/GetPostAndParent/{childPostId}/
GET | [[GetPostAndParentAwaitingApproval|Forum-GetPostAndParentAwaitingApproval]] | /Forum/GetPostAndParentAwaitingApproval/{childPostId}/
GET | [[GetTopicForContent|Forum-GetTopicForContent]] | /Forum/GetTopicForContent/{contentId}/
GET | [[GetForumTagSuggestions|Forum-GetForumTagSuggestions]] | /Forum/GetForumTagSuggestions/
GET | [[GetPoll|Forum-GetPoll]] | /Forum/Poll/{topicId}/
POST | [[JoinFireteamThread|Forum-JoinFireteamThread]] | /Forum/Recruit/Join/{topicId}/
POST | [[LeaveFireteamThread|Forum-LeaveFireteamThread]] | /Forum/Recruit/Leave/{topicId}/
POST | [[KickBanFireteamApplicant|Forum-KickBanFireteamApplicant]] | /Forum/Recruit/KickBan/{topicId}/{targetMembershipId}/
POST | [[ApproveFireteamThread|Forum-ApproveFireteamThread]] | /Forum/Recruit/Approve/{topicId}/
POST | [[GetRecruitmentThreadSummaries|Forum-GetRecruitmentThreadSummaries]] | /Forum/Recruit/Summaries/


## <a name="Destiny2"></a>Destiny2 (28 Endpoints)
Method | Name | Endpoint
------ | ---- | --------
GET | [[GetDestinyManifest|Destiny2-GetDestinyManifest]] | /Destiny2/Manifest/
GET | [[SearchDestinyPlayer|Destiny2-SearchDestinyPlayer]] | /Destiny2/SearchDestinyPlayer/{membershipType}/{displayName}/
GET | [[GetProfile|Destiny2-GetProfile]] | /Destiny2/{membershipType}/Profile/{destinyMembershipId}/
GET | [[GetCharacter|Destiny2-GetCharacter]] | /Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/
GET | [[GetClanWeeklyRewardState|Destiny2-GetClanWeeklyRewardState]] | /Destiny2/Clan/{groupId}/WeeklyRewardState/
GET | [[GetItem|Destiny2-GetItem]] | /Destiny2/{membershipType}/Profile/{destinyMembershipId}/Item/{itemInstanceId}/
GET | [[GetVendors|Destiny2-GetVendors]] | /Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/
GET | [[GetVendor|Destiny2-GetVendor]] | /Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/{vendorHash}/
POST | [[TransferItem|Destiny2-TransferItem]] | /Destiny2/Actions/Items/TransferItem/
POST | [[EquipItem|Destiny2-EquipItem]] | /Destiny2/Actions/Items/EquipItem/
POST | [[EquipItems|Destiny2-EquipItems]] | /Destiny2/Actions/Items/EquipItems/
POST | [[SetItemLockState|Destiny2-SetItemLockState]] | /Destiny2/Actions/Items/SetLockState/
POST | [[InsertSocketPlug|Destiny2-InsertSocketPlug]] | /Destiny2/Actions/Items/InsertSocketPlug/
POST | [[ActivateTalentNode|Destiny2-ActivateTalentNode]] | /Destiny2/Actions/Items/ActivateTalentNode/
GET | [[GetPostGameCarnageReport|Destiny2-GetPostGameCarnageReport]] | /Destiny2/Stats/PostGameCarnageReport/{activityId}/
GET | [[GetHistoricalStatsDefinition|Destiny2-GetHistoricalStatsDefinition]] | /Destiny2/Stats/Definition/
GET | [[GetClanLeaderboards|Destiny2-GetClanLeaderboards]] | /Destiny2/Stats/Leaderboards/Clans/{groupId}/
GET | [[GetClanAggregateStats|Destiny2-GetClanAggregateStats]] | /Destiny2/Stats/AggregateClanStats/{groupId}/
GET | [[GetLeaderboards|Destiny2-GetLeaderboards]] | /Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/Leaderboards/
GET | [[GetLeaderboardsForCharacter|Destiny2-GetLeaderboardsForCharacter]] | /Destiny2/Stats/Leaderboards/{membershipType}/{destinyMembershipId}/{characterId}/
GET | [[SearchDestinyEntities|Destiny2-SearchDestinyEntities]] | /Destiny2/Armory/Search/{type}/{searchTerm}/
GET | [[GetHistoricalStats|Destiny2-GetHistoricalStats]] | /Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/
GET | [[GetHistoricalStatsForAccount|Destiny2-GetHistoricalStatsForAccount]] | /Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/
GET | [[GetActivityHistory|Destiny2-GetActivityHistory]] | /Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/Activities/
GET | [[GetUniqueWeaponHistory|Destiny2-GetUniqueWeaponHistory]] | /Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/UniqueWeapons/
GET | [[GetDestinyAggregateActivityStats|Destiny2-GetDestinyAggregateActivityStats]] | /Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/AggregateActivityStats/
GET | [[GetPublicMilestoneContent|Destiny2-GetPublicMilestoneContent]] | /Destiny2/Milestones/{milestoneHash}/Content/
GET | [[GetPublicMilestones|Destiny2-GetPublicMilestones]] | /Destiny2/Milestones/


## <a name="CommunityContent"></a>CommunityContent (6 Endpoints)
Method | Name | Endpoint
------ | ---- | --------
GET | [[GetCommunityContent|CommunityContent-GetCommunityContent]] | /CommunityContent/Get/{sort}/{mediaFilter}/{page}/
GET | [[GetCommunityLiveStatuses|CommunityContent-GetCommunityLiveStatuses]] | /CommunityContent/Live/All/{partnershipType}/{sort}/{page}/
GET | [[GetCommunityLiveStatusesForClanmates|CommunityContent-GetCommunityLiveStatusesForClanmates]] | /CommunityContent/Live/Clan/{partnershipType}/{sort}/{page}/
GET | [[GetCommunityLiveStatusesForFriends|CommunityContent-GetCommunityLiveStatusesForFriends]] | /CommunityContent/Live/Friends/{partnershipType}/{sort}/{page}/
GET | [[GetFeaturedCommunityLiveStatuses|CommunityContent-GetFeaturedCommunityLiveStatuses]] | /CommunityContent/Live/Featured/{partnershipType}/{sort}/{page}/
GET | [[GetStreamingStatusForMember|CommunityContent-GetStreamingStatusForMember]] | /CommunityContent/Live/Users/{partnershipType}/{membershipType}/{membershipId}/


## <a name="Trending"></a>Trending (3 Endpoints)
Method | Name | Endpoint
------ | ---- | --------
GET | [[GetTrendingCategories|Trending-GetTrendingCategories]] | /Trending/Categories/
GET | [[GetTrendingCategory|Trending-GetTrendingCategory]] | /Trending/Categories/{categoryId}/{pageNumber}/
GET | [[GetTrendingEntryDetail|Trending-GetTrendingEntryDetail]] | /Trending/Details/{trendingEntryType}/{identifier}/


