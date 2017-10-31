<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Get information about the groups that a given member has applied to or been invited to.

* **URI:** [[/GroupV2/User/Potential/{membershipType}/{membershipId}/{filter}/{groupType}/|https://www.bungie.net/Platform/GroupV2/User/Potential/{membershipType}/{membershipId}/{filter}/{groupType}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
filter | [[GroupPotentialMemberStatus|GroupsV2-GroupPotentialMemberStatus]]:Enum | Yes | Filter apply to list of potential joined groups.
groupType | [[GroupType|GroupsV2-GroupType]]:Enum | Yes | Type of group the supplied member applied.
membershipId | integer:int64 | Yes | Membership ID to for which to find applied groups.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | Membership type of the supplied membership ID.

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/GroupV2/User/Potential/{membershipType}/{membershipId}/{filter}/{groupType}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[GroupPotentialMembershipSearchResponse|GroupsV2-GroupPotentialMembershipSearchResponse]]
    "Response": {
        // Type: [[GroupPotentialMembership|GroupsV2-GroupPotentialMembership]][]
        "results": [
           // Type: [[GroupPotentialMembership|GroupsV2-GroupPotentialMembership]]
            {
                // Type: [[GroupPotentialMember|GroupsV2-GroupPotentialMember]]
                "member": {
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
                },
                // Type: [[GroupV2|GroupsV2-GroupV2]]
                "group": {
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
                            "gonfalonDetailColorId": 0,
                            // Type: [[ClanBanner|GroupsV2-ClanBanner]]
                        }
                    }
                }
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
1. https://bungie-net.github.io/multi/operation_get_GroupV2-GetPotentialGroupsForMember.html#operation_get_GroupV2-GetPotentialGroupsForMember
