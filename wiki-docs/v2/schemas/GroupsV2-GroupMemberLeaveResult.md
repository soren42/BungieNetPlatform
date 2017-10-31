<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
group | [[GroupV2|GroupsV2-GroupV2]] | 
groupDeleted | boolean | 

## Example
```javascript
{
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
    },
    // Type: boolean
    "groupDeleted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_GroupsV2-GroupMemberLeaveResult.html#schema_GroupsV2-GroupMemberLeaveResult
