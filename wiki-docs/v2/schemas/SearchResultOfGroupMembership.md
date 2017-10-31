<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
results | [[GroupMembership|GroupsV2-GroupMembership]][] | 
totalResults | integer:int32 | 
hasMore | boolean | 
query | [[PagedQuery|Queries-PagedQuery]] | 
replacementContinuationToken | string | 
useTotalResults | boolean | If useTotalResults is true, then totalResults represents an accurate count. If False, it does not, and may be estimated/only the size of the current page. Either way, you should probably always only trust hasMore. This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.

## Example
```javascript
{
    // Type: [[GroupMembership|GroupsV2-GroupMembership]][]
    "results": [
       // Type: [[GroupMembership|GroupsV2-GroupMembership]]
        {
            // Type: [[GroupMember|GroupsV2-GroupMember]]
            "member": {
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
}

```

## References
1. https://bungie-net.github.io/multi/schema_SearchResultOfGroupMembership.html#schema_SearchResultOfGroupMembership
