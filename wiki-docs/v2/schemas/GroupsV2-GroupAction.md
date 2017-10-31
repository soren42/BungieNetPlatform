<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
groupType | [[GroupType|GroupsV2-GroupType]]:Enum | Type of group, either Bungie.net hosted group, or a game services hosted clan.
name | string | 
about | string | 
motto | string | 
theme | string | 
avatarImageIndex | integer:int32 | 
tags | string | 
isPublic | boolean | 
membershipOption | [[MembershipOption|GroupsV2-MembershipOption]]:Enum | 
isPublicTopicAdminOnly | boolean | 
isDefaultPostPublic | boolean | 
allowChat | boolean | 
isDefaultPostAlliance | boolean | 
chatSecurity | [[ChatSecuritySetting|GroupsV2-ChatSecuritySetting]]:Enum | 
callsign | string | 
locale | string | 
homepage | [[GroupHomepage|GroupsV2-GroupHomepage]]:Enum | 
platformMembershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | When operation needs a platform specific account ID for the present user, use this property. In particular, groupType of Clan requires this value to be set.

## Example
```javascript
{
    // Type: [[GroupType|GroupsV2-GroupType]]:Enum
    "groupType": {},
    // Type: string
    "name": "",
    // Type: string
    "about": "",
    // Type: string
    "motto": "",
    // Type: string
    "theme": "",
    // Type: integer:int32
    "avatarImageIndex": 0,
    // Type: string
    "tags": "",
    // Type: boolean
    "isPublic": false,
    // Type: [[MembershipOption|GroupsV2-MembershipOption]]:Enum
    "membershipOption": 0,
    // Type: boolean
    "isPublicTopicAdminOnly": false,
    // Type: boolean
    "isDefaultPostPublic": false,
    // Type: boolean
    "allowChat": false,
    // Type: boolean
    "isDefaultPostAlliance": false,
    // Type: [[ChatSecuritySetting|GroupsV2-ChatSecuritySetting]]:Enum
    "chatSecurity": 0,
    // Type: string
    "callsign": "",
    // Type: string
    "locale": "",
    // Type: [[GroupHomepage|GroupsV2-GroupHomepage]]:Enum
    "homepage": 0,
    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
    "platformMembershipType": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_GroupsV2-GroupAction.html#schema_GroupsV2-GroupAction
