<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.

* **URI:** [[/Forum/GetPostsThreadedPaged/{parentPostId}/{page}/{pageSize}/{replySize}/{getParentPost}/{rootThreadMode}/{sortMode}/|https://www.bungie.net/Platform/Forum/GetPostsThreadedPaged/{parentPostId}/{page}/{pageSize}/{replySize}/{getParentPost}/{rootThreadMode}/{sortMode}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Forum|Endpoints#Forum]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
getParentPost | boolean | Yes | 
page | integer:int32 | Yes | 
pageSize | integer:int32 | Yes | 
parentPostId | integer:uint64 | Yes | 
replySize | integer:int32 | Yes | 
rootThreadMode | boolean | Yes | 
sortMode | [[ForumPostSortEnum|Forum-ForumPostSortEnum]]:Enum | Yes | 

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
showbanned | string | No | If this value is not null or empty, banned posts are requested to be returned

## Example
### Request
GET https://www.bungie.net/Platform/Forum/GetPostsThreadedPaged/{parentPostId}/{page}/{pageSize}/{replySize}/{getParentPost}/{rootThreadMode}/{sortMode}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[PostSearchResponse|Forum-PostSearchResponse]]
    "Response": {
        // Type: [[PostResponse|Forum-PostResponse]][]
        "relatedPosts": [
           // Type: [[PostResponse|Forum-PostResponse]]
            {
                // Type: string:date-time
                "lastReplyTimestamp": "",
                // Type: boolean
                "IsPinned": false,
                // Type: [[ForumMediaType|Forum-ForumMediaType]]:Enum
                "urlMediaType": 0,
                // Type: string
                "thumbnail": "",
                // Type: [[ForumPostPopularity|Forum-ForumPostPopularity]]:Enum
                "popularity": 0,
                // Type: boolean
                "isActive": false,
                // Type: boolean
                "isAnnouncement": false,
                // Type: integer:int32
                "userRating": 0,
                // Type: boolean
                "userHasRated": false,
                // Type: boolean
                "userHasMutedPost": false,
                // Type: integer:int64
                "latestReplyPostId": 0,
                // Type: integer:int64
                "latestReplyAuthorId": 0,
                // Type: [[IgnoreResponse|Ignores-IgnoreResponse]]
                "ignoreStatus": {
                    // Type: boolean
                    "isIgnored": false,
                    // Type: [[IgnoreStatus|Ignores-IgnoreStatus]]:Enum
                    "ignoreFlags": 0
                },
                // Type: string
                "locale": ""
            }
        ],
        // Type: [[GeneralUser|User-GeneralUser]][]
        "authors": [
           // Type: [[GeneralUser|User-GeneralUser]]
            {
                // Type: integer:int64
                "membershipId": 0,
                // Type: string
                "uniqueName": "",
                // Type: string
                "normalizedName": "",
                // Type: string
                "displayName": "",
                // Type: integer:int32
                "profilePicture": 0,
                // Type: integer:int32
                "profileTheme": 0,
                // Type: integer:int32
                "userTitle": 0,
                // Type: integer:int64
                "successMessageFlags": 0,
                // Type: boolean
                "isDeleted": false,
                // Type: string
                "about": "",
                // Type: string:date-time:nullable
                "firstAccess": "",
                // Type: string:date-time:nullable
                "lastUpdate": "",
                // Type: integer:int64:nullable
                "legacyPortalUID": 0,
                // Type: [[UserToUserContext|User-UserToUserContext]]
                "context": {
                    // Type: boolean
                    "isFollowing": false,
                    // Type: [[IgnoreResponse|Ignores-IgnoreResponse]]
                    "ignoreStatus": {
                        // Type: boolean
                        "isIgnored": false,
                        // Type: [[IgnoreStatus|Ignores-IgnoreStatus]]:Enum
                        "ignoreFlags": 0
                    },
                    // Type: string:date-time:nullable
                    "globalIgnoreEndDate": ""
                },
                // Type: string
                "psnDisplayName": "",
                // Type: string
                "xboxDisplayName": "",
                // Type: string
                "fbDisplayName": "",
                // Type: boolean:nullable
                "showActivity": false,
                // Type: string
                "locale": "",
                // Type: boolean
                "localeInheritDefault": false,
                // Type: integer:int64:nullable
                "lastBanReportId": 0,
                // Type: boolean
                "showGroupMessaging": false,
                // Type: string
                "profilePicturePath": "",
                // Type: string
                "profilePictureWidePath": "",
                // Type: string
                "profileThemeName": "",
                // Type: string
                "userTitleDisplay": "",
                // Type: string
                "statusText": "",
                // Type: string:date-time
                "statusDate": "",
                // Type: string:date-time:nullable
                "profileBanExpire": "",
                // Type: string
                "blizzardDisplayName": ""
            }
        ],
        // Type: [[GroupResponse|GroupsV2-GroupResponse]][]
        "groups": [
           // Type: [[GroupResponse|GroupsV2-GroupResponse]]
            {
                // Type: [[GroupV2|GroupsV2-GroupV2]]
                "detail": {
                    // Type: integer:int64
                    "groupId": 0,
                    // Type: string
                    "name": "",
                    // Type: [[GroupType|GroupsV2-GroupType]]:Enum
                    "groupType": 0,
                    // Type: integer:int64
                    "membershipIdCreated": 0,
                    // Type: string:date-time
                    "creationDate": "",
                    // Type: string:date-time
                    "modificationDate": "",
                    // Type: string
                    "about": "",
                    // Type: string[]
                    "tags": [
                       // Type: string
                        ""
                    ],
                    // Type: integer:int32
                    "memberCount": 0,
                    // Type: boolean
                    "isPublic": false,
                    // Type: boolean
                    "isPublicTopicAdminOnly": false,
                    // Type: integer:int64
                    "primaryAlliedGroupId": 0,
                    // Type: string
                    "motto": "",
                    // Type: boolean
                    "allowChat": false,
                    // Type: boolean
                    "isDefaultPostPublic": false,
                    // Type: [[ChatSecuritySetting|GroupsV2-ChatSecuritySetting]]:Enum
                    "chatSecurity": 0,
                    // Type: string
                    "locale": "",
                    // Type: integer:int32
                    "avatarImageIndex": 0,
                    // Type: [[GroupHomepage|GroupsV2-GroupHomepage]]:Enum
                    "homepage": 0,
                    // Type: [[MembershipOption|GroupsV2-MembershipOption]]:Enum
                    "membershipOption": 0,
                    // Type: [[GroupPostPublicity|GroupsV2-GroupPostPublicity]]:Enum
                    "defaultPublicity": 0,
                    // Type: string
                    "theme": "",
                    // Type: string
                    "bannerPath": "",
                    // Type: string
                    "avatarPath": "",
                    // Type: boolean
                    "isAllianceOwner": false,
                    // Type: integer:int64
                    "conversationId": 0,
                    // Type: boolean
                    "enableInvitationMessagingForAdmins": false,
                    // Type: string:date-time:nullable
                    "banExpireDate": "",
                    // Type: [[GroupFeatures|GroupsV2-GroupFeatures]]
                    "features": {
                        // Type: integer:int32
                        "maximumMembers": 0,
                        // Type: integer:int32
                        "maximumMembershipsOfGroupType": 0,
                        // Type: [[Capabilities|GroupsV2-Capabilities]]:Enum
                        "capabilities": 0,
                        // Type: [[BungieMembershipType|BungieMembershipType]]:Enum[]
                        "membershipTypes": [
                           // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                            0
                        ],
                        // Type: boolean
                        "invitePermissionOverride": false,
                        // Type: boolean
                        "updateCulturePermissionOverride": false,
                        // Type: [[HostGuidedGamesPermissionLevel|GroupsV2-HostGuidedGamesPermissionLevel]]:Enum
                        "hostGuidedGamePermissionOverride": {},
                        // Type: boolean
                        "updateBannerPermissionOverride": false,
                        // Type: [[RuntimeGroupMemberType|GroupsV2-RuntimeGroupMemberType]]:Enum
                        "joinLevel": {}
                    },
                    // Type: [[GroupV2ClanInfoAndInvestment|GroupsV2-GroupV2ClanInfoAndInvestment]]
                    "clanInfo": {
                        // Type: Dictionary&lt;integer:uint32,[[DestinyProgression|Destiny-DestinyProgression]]&gt;
                        "d2ClanProgressions": {
                            "0": {
                                // Type: [[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:integer:uint32
                                "progressionHash": 0,
                                // Type: integer:int32
                                "dailyProgress": 0,
                                // Type: integer:int32
                                "dailyLimit": 0,
                                // Type: integer:int32
                                "weeklyProgress": 0,
                                // Type: integer:int32
                                "weeklyLimit": 0,
                                // Type: integer:int32
                                "currentProgress": 0,
                                // Type: integer:int32
                                "level": 0,
                                // Type: integer:int32
                                "levelCap": 0,
                                // Type: integer:int32
                                "stepIndex": 0,
                                // Type: integer:int32
                                "progressToNextLevel": 0,
                                // Type: integer:int32
                                "nextLevelAt": 0
                            }
                        },
                        // Type: string
                        "clanCallsign": "",
                        // Type: [[ClanBanner|GroupsV2-ClanBanner]]
                        "clanBannerData": {
                            // Type: integer:uint32
                            "decalId": 0,
                            // Type: integer:uint32
                            "decalColorId": 0,
                            // Type: integer:uint32
                            "decalBackgroundColorId": 0,
                            // Type: integer:uint32
                            "gonfalonId": 0,
                            // Type: integer:uint32
                            "gonfalonColorId": 0,
                            // Type: integer:uint32
                            "gonfalonDetailId": 0,
                            // Type: integer:uint32
                            "gonfalonDetailColorId": 0
                        }
                    }
                },
                // Type: [[GroupMember|GroupsV2-GroupMember]]
                "founder": {
                    // Type: [[RuntimeGroupMemberType|GroupsV2-RuntimeGroupMemberType]]:Enum
                    "memberType": 0,
                    // Type: boolean
                    "isOnline": false,
                    // Type: integer:int64
                    "groupId": 0,
                    // Type: [[UserInfoCard|User-UserInfoCard]]
                    "destinyUserInfo": {
                        // Type: string
                        "supplementalDisplayName": "",
                        // Type: string
                        "iconPath": "",
                        // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                        "membershipType": {},
                        // Type: integer:int64
                        "membershipId": 0,
                        // Type: string
                        "displayName": ""
                    },
                    // Type: [[UserInfoCard|User-UserInfoCard]]
                    "bungieNetUserInfo": {
                        // Type: string
                        "supplementalDisplayName": "",
                        // Type: string
                        "iconPath": "",
                        // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                        "membershipType": {},
                        // Type: integer:int64
                        "membershipId": 0,
                        // Type: string
                        "displayName": ""
                    },
                    // Type: string:date-time
                    "joinDate": ""
                },
                // Type: integer:int64[]
                "alliedIds": [
                   // Type: integer:int64
                    0
                ],
                // Type: [[GroupV2|GroupsV2-GroupV2]]
                "parentGroup": {
                    // Type: integer:int64
                    "groupId": 0,
                    // Type: string
                    "name": "",
                    // Type: [[GroupType|GroupsV2-GroupType]]:Enum
                    "groupType": 0,
                    // Type: integer:int64
                    "membershipIdCreated": 0,
                    // Type: string:date-time
                    "creationDate": "",
                    // Type: string:date-time
                    "modificationDate": "",
                    // Type: string
                    "about": "",
                    // Type: string[]
                    "tags": [
                       // Type: string
                        ""
                    ],
                    // Type: integer:int32
                    "memberCount": 0,
                    // Type: boolean
                    "isPublic": false,
                    // Type: boolean
                    "isPublicTopicAdminOnly": false,
                    // Type: integer:int64
                    "primaryAlliedGroupId": 0,
                    // Type: string
                    "motto": "",
                    // Type: boolean
                    "allowChat": false,
                    // Type: boolean
                    "isDefaultPostPublic": false,
                    // Type: [[ChatSecuritySetting|GroupsV2-ChatSecuritySetting]]:Enum
                    "chatSecurity": 0,
                    // Type: string
                    "locale": "",
                    // Type: integer:int32
                    "avatarImageIndex": 0,
                    // Type: [[GroupHomepage|GroupsV2-GroupHomepage]]:Enum
                    "homepage": 0,
                    // Type: [[MembershipOption|GroupsV2-MembershipOption]]:Enum
                    "membershipOption": 0,
                    // Type: [[GroupPostPublicity|GroupsV2-GroupPostPublicity]]:Enum
                    "defaultPublicity": 0,
                    // Type: string
                    "theme": "",
                    // Type: string
                    "bannerPath": "",
                    // Type: string
                    "avatarPath": "",
                    // Type: boolean
                    "isAllianceOwner": false,
                    // Type: integer:int64
                    "conversationId": 0,
                    // Type: boolean
                    "enableInvitationMessagingForAdmins": false,
                    // Type: string:date-time:nullable
                    "banExpireDate": "",
                    // Type: [[GroupFeatures|GroupsV2-GroupFeatures]]
                    "features": {
                        // Type: integer:int32
                        "maximumMembers": 0,
                        // Type: integer:int32
                        "maximumMembershipsOfGroupType": 0,
                        // Type: [[Capabilities|GroupsV2-Capabilities]]:Enum
                        "capabilities": 0,
                        // Type: [[BungieMembershipType|BungieMembershipType]]:Enum[]
                        "membershipTypes": [
                           // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                            0
                        ],
                        // Type: boolean
                        "invitePermissionOverride": false,
                        // Type: boolean
                        "updateCulturePermissionOverride": false,
                        // Type: [[HostGuidedGamesPermissionLevel|GroupsV2-HostGuidedGamesPermissionLevel]]:Enum
                        "hostGuidedGamePermissionOverride": {},
                        // Type: boolean
                        "updateBannerPermissionOverride": false,
                        // Type: [[RuntimeGroupMemberType|GroupsV2-RuntimeGroupMemberType]]:Enum
                        "joinLevel": {}
                    },
                    // Type: [[GroupV2ClanInfoAndInvestment|GroupsV2-GroupV2ClanInfoAndInvestment]]
                    "clanInfo": {
                        // Type: Dictionary&lt;integer:uint32,[[DestinyProgression|Destiny-DestinyProgression]]&gt;
                        "d2ClanProgressions": {
                            "0": {
                                // Type: [[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:integer:uint32
                                "progressionHash": 0,
                                // Type: integer:int32
                                "dailyProgress": 0,
                                // Type: integer:int32
                                "dailyLimit": 0,
                                // Type: integer:int32
                                "weeklyProgress": 0,
                                // Type: integer:int32
                                "weeklyLimit": 0,
                                // Type: integer:int32
                                "currentProgress": 0,
                                // Type: integer:int32
                                "level": 0,
                                // Type: integer:int32
                                "levelCap": 0,
                                // Type: integer:int32
                                "stepIndex": 0,
                                // Type: integer:int32
                                "progressToNextLevel": 0,
                                // Type: integer:int32
                                "nextLevelAt": 0
                            }
                        },
                        // Type: string
                        "clanCallsign": "",
                        // Type: [[ClanBanner|GroupsV2-ClanBanner]]
                        "clanBannerData": {
                            // Type: integer:uint32
                            "decalId": 0,
                            // Type: integer:uint32
                            "decalColorId": 0,
                            // Type: integer:uint32
                            "decalBackgroundColorId": 0,
                            // Type: integer:uint32
                            "gonfalonId": 0,
                            // Type: integer:uint32
                            "gonfalonColorId": 0,
                            // Type: integer:uint32
                            "gonfalonDetailId": 0,
                            // Type: integer:uint32
                            "gonfalonDetailColorId": 0
                        }
                    }
                },
                // Type: [[GroupAllianceStatus|GroupsV2-GroupAllianceStatus]]:Enum
                "allianceStatus": 0,
                // Type: integer:int32
                "groupJoinInviteCount": 0,
                // Type: Dictionary&lt;[[BungieMembershipType|BungieMembershipType]]:Enum,[[GroupMember|GroupsV2-GroupMember]]&gt;
                "currentUserMemberMap": {
                    "0": {
                        // Type: [[RuntimeGroupMemberType|GroupsV2-RuntimeGroupMemberType]]:Enum
                        "memberType": 0,
                        // Type: boolean
                        "isOnline": false,
                        // Type: integer:int64
                        "groupId": 0,
                        // Type: [[UserInfoCard|User-UserInfoCard]]
                        "destinyUserInfo": {
                            // Type: string
                            "supplementalDisplayName": "",
                            // Type: string
                            "iconPath": "",
                            // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                            "membershipType": {},
                            // Type: integer:int64
                            "membershipId": 0,
                            // Type: string
                            "displayName": ""
                        },
                        // Type: [[UserInfoCard|User-UserInfoCard]]
                        "bungieNetUserInfo": {
                            // Type: string
                            "supplementalDisplayName": "",
                            // Type: string
                            "iconPath": "",
                            // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                            "membershipType": {},
                            // Type: integer:int64
                            "membershipId": 0,
                            // Type: string
                            "displayName": ""
                        },
                        // Type: string:date-time
                        "joinDate": ""
                    }
                },
                // Type: Dictionary&lt;[[BungieMembershipType|BungieMembershipType]]:Enum,[[GroupPotentialMember|GroupsV2-GroupPotentialMember]]&gt;
                "currentUserPotentialMemberMap": {
                    "0": {
                        // Type: [[GroupPotentialMemberStatus|GroupsV2-GroupPotentialMemberStatus]]:Enum
                        "potentialStatus": 0,
                        // Type: integer:int64
                        "groupId": 0,
                        // Type: [[UserInfoCard|User-UserInfoCard]]
                        "destinyUserInfo": {
                            // Type: string
                            "supplementalDisplayName": "",
                            // Type: string
                            "iconPath": "",
                            // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                            "membershipType": {},
                            // Type: integer:int64
                            "membershipId": 0,
                            // Type: string
                            "displayName": ""
                        },
                        // Type: [[UserInfoCard|User-UserInfoCard]]
                        "bungieNetUserInfo": {
                            // Type: string
                            "supplementalDisplayName": "",
                            // Type: string
                            "iconPath": "",
                            // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                            "membershipType": {},
                            // Type: integer:int64
                            "membershipId": 0,
                            // Type: string
                            "displayName": ""
                        },
                        // Type: string:date-time
                        "joinDate": ""
                    }
                }
            }
        ],
        // Type: [[TagResponse|Tags-Models-Contracts-TagResponse]][]
        "searchedTags": [
           // Type: [[TagResponse|Tags-Models-Contracts-TagResponse]]
            {
                // Type: string
                "tagText": "",
                // Type: [[IgnoreResponse|Ignores-IgnoreResponse]]
                "ignoreStatus": {
                    // Type: boolean
                    "isIgnored": false,
                    // Type: [[IgnoreStatus|Ignores-IgnoreStatus]]:Enum
                    "ignoreFlags": 0
                }
            }
        ],
        // Type: [[PollResponse|Forum-PollResponse]][]
        "polls": [
           // Type: [[PollResponse|Forum-PollResponse]]
            {
                // Type: integer:int64
                "topicId": 0,
                // Type: [[PollResult|Forum-PollResult]][]
                "results": [
                   // Type: [[PollResult|Forum-PollResult]]
                    {
                        // Type: string
                        "answerText": "",
                        // Type: integer:int32
                        "answerSlot": 0,
                        // Type: string:date-time
                        "lastVoteDate": "",
                        // Type: integer:int32
                        "votes": 0,
                        // Type: boolean
                        "requestingUserVoted": false
                    }
                ],
                // Type: integer:int32
                "totalVotes": 0
            }
        ],
        // Type: [[ForumRecruitmentDetail|Forum-ForumRecruitmentDetail]][]
        "recruitmentDetails": [
           // Type: [[ForumRecruitmentDetail|Forum-ForumRecruitmentDetail]]
            {
                // Type: integer:int64
                "topicId": 0,
                // Type: boolean
                "microphoneRequired": false,
                // Type: [[ForumRecruitmentIntensityLabel|Forum-ForumRecruitmentIntensityLabel]]:Enum
                "intensity": 0,
                // Type: [[ForumRecruitmentToneLabel|Forum-ForumRecruitmentToneLabel]]:Enum
                "tone": 0,
                // Type: boolean
                "approved": false,
                // Type: integer:int64:nullable
                "conversationId": 0,
                // Type: integer:int32
                "playerSlotsTotal": 0,
                // Type: integer:int32
                "playerSlotsRemaining": 0,
                // Type: [[GeneralUser|User-GeneralUser]][]
                "Fireteam": [
                   // Type: [[GeneralUser|User-GeneralUser]]
                    {
                        // Type: integer:int64
                        "membershipId": 0,
                        // Type: string
                        "uniqueName": "",
                        // Type: string
                        "normalizedName": "",
                        // Type: string
                        "displayName": "",
                        // Type: integer:int32
                        "profilePicture": 0,
                        // Type: integer:int32
                        "profileTheme": 0,
                        // Type: integer:int32
                        "userTitle": 0,
                        // Type: integer:int64
                        "successMessageFlags": 0,
                        // Type: boolean
                        "isDeleted": false,
                        // Type: string
                        "about": "",
                        // Type: string:date-time:nullable
                        "firstAccess": "",
                        // Type: string:date-time:nullable
                        "lastUpdate": "",
                        // Type: integer:int64:nullable
                        "legacyPortalUID": 0,
                        // Type: [[UserToUserContext|User-UserToUserContext]]
                        "context": {
                            // Type: boolean
                            "isFollowing": false,
                            // Type: [[IgnoreResponse|Ignores-IgnoreResponse]]
                            "ignoreStatus": {
                                // Type: boolean
                                "isIgnored": false,
                                // Type: [[IgnoreStatus|Ignores-IgnoreStatus]]:Enum
                                "ignoreFlags": 0
                            },
                            // Type: string:date-time:nullable
                            "globalIgnoreEndDate": ""
                        },
                        // Type: string
                        "psnDisplayName": "",
                        // Type: string
                        "xboxDisplayName": "",
                        // Type: string
                        "fbDisplayName": "",
                        // Type: boolean:nullable
                        "showActivity": false,
                        // Type: string
                        "locale": "",
                        // Type: boolean
                        "localeInheritDefault": false,
                        // Type: integer:int64:nullable
                        "lastBanReportId": 0,
                        // Type: boolean
                        "showGroupMessaging": false,
                        // Type: string
                        "profilePicturePath": "",
                        // Type: string
                        "profilePictureWidePath": "",
                        // Type: string
                        "profileThemeName": "",
                        // Type: string
                        "userTitleDisplay": "",
                        // Type: string
                        "statusText": "",
                        // Type: string:date-time
                        "statusDate": "",
                        // Type: string:date-time:nullable
                        "profileBanExpire": "",
                        // Type: string
                        "blizzardDisplayName": ""
                    }
                ],
                // Type: integer:int64[]
                "kickedPlayerIds": [
                   // Type: integer:int64
                    0
                ]
            }
        ],
        // Type: integer:int32:nullable
        "availablePages": 0,
        // Type: [[PostResponse|Forum-PostResponse]][]
        "results": [
           // Type: [[PostResponse|Forum-PostResponse]]
            {
                // Type: string:date-time
                "lastReplyTimestamp": "",
                // Type: boolean
                "IsPinned": false,
                // Type: [[ForumMediaType|Forum-ForumMediaType]]:Enum
                "urlMediaType": 0,
                // Type: string
                "thumbnail": "",
                // Type: [[ForumPostPopularity|Forum-ForumPostPopularity]]:Enum
                "popularity": 0,
                // Type: boolean
                "isActive": false,
                // Type: boolean
                "isAnnouncement": false,
                // Type: integer:int32
                "userRating": 0,
                // Type: boolean
                "userHasRated": false,
                // Type: boolean
                "userHasMutedPost": false,
                // Type: integer:int64
                "latestReplyPostId": 0,
                // Type: integer:int64
                "latestReplyAuthorId": 0,
                // Type: [[IgnoreResponse|Ignores-IgnoreResponse]]
                "ignoreStatus": {
                    // Type: boolean
                    "isIgnored": false,
                    // Type: [[IgnoreStatus|Ignores-IgnoreStatus]]:Enum
                    "ignoreFlags": 0
                },
                // Type: string
                "locale": ""
            }
        ],
        // Type: integer:int32
        "totalResults": 0,
        // Type: boolean
        "hasMore": false,
        // Type: [[PagedQuery|Queries-PagedQuery]]
        "query": {
            // Type: integer:int32
            "itemsPerPage": 0,
            // Type: integer:int32
            "currentPage": 0,
            // Type: string
            "requestContinuationToken": ""
        },
        // Type: string
        "replacementContinuationToken": "",
        // Type: boolean
        "useTotalResults": false
    },
    // Type: [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum
    "ErrorCode": 0,
    // Type: integer:int32
    "ThrottleSeconds": 0,
    // Type: string
    "ErrorStatus": "",
    // Type: string
    "Message": "",
    // Type: Dictionary&lt;string,string&gt;
    "MessageData": {
        "{string}": ""
    },
    // Type: object
}

```

## References
1. https://bungie-net.github.io/multi/operation_get_Forum-GetPostsThreadedPaged.html#operation_get_Forum-GetPostsThreadedPaged
