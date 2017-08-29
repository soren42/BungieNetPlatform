<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
maximumMembers | integer:int32 | 
maximumMembershipsOfGroupType | integer:int32 | Maximum number of groups of this type a typical membership may join. For example,a user may join about 50 General groups with their Bungie.net account.  They mayjoin one clan per Destiny membership.
capabilities | [[Capabilities|GroupsV2-Capabilities]]:Enum | 
membershipTypes | [[BungieMembershipType|BungieMembershipType]]:Enum[] | 
invitePermissionOverride | boolean | Minimum Member Level allowed to invite new members to group Always Allowed: Founder, Acting Founder True means admins have this power, false means they don't Default is false for clans, true for groups.
updateCulturePermissionOverride | boolean | Minimum Member Level allowed to update group culture Always Allowed: Founder, Acting Founder True means admins have this power, false means they don't Default is false for clans, true for groups.
hostGuidedGamePermissionOverride | [[HostGuidedGamesPermissionLevel|GroupsV2-HostGuidedGamesPermissionLevel]]:Enum | Minimum Member Level allowed to host guided games Always Allowed: Founder, Acting Founder, Admin Allowed Overrides: None, Member, Beginner Default is Member for clans, None for groups, although this means nothing for groups.
updateBannerPermissionOverride | boolean | Minimum Member Level allowed to update banner Always Allowed: Founder, Acting Founder True means admins have this power, false means they don't Default is false for clans, true for groups.
joinLevel | [[RuntimeGroupMemberType|GroupsV2-RuntimeGroupMemberType]]:Enum | Level to join a member at when accepting an invite, application, or joining an open clan Default is Beginner.

## Example
```javascript
{
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
    "hostGuidedGamePermissionOverride": 0,
    // Type: boolean
    "updateBannerPermissionOverride": false,
    // Type: [[RuntimeGroupMemberType|GroupsV2-RuntimeGroupMemberType]]:Enum
    "joinLevel": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_GroupsV2-GroupFeatures.html#schema_GroupsV2-GroupFeatures
