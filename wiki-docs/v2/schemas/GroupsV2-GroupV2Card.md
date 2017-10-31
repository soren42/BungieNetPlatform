<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A small infocard of group information, usually used for when a list of groups are returned

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
groupId | integer:int64 | 
name | string | 
groupType | [[GroupType|GroupsV2-GroupType]]:Enum | 
creationDate | string:date-time | 
about | string | 
motto | string | 
memberCount | integer:int32 | 
locale | string | 
membershipOption | [[MembershipOption|GroupsV2-MembershipOption]]:Enum | 
capabilities | [[Capabilities|GroupsV2-Capabilities]]:Enum | 
clanInfo | [[GroupV2ClanInfo|GroupsV2-GroupV2ClanInfo]] | 
avatarPath | string | 
theme | string | 

## Example
```javascript
{
    // Type: integer:int64
    "groupId": 0,
    // Type: string
    "name": "",
    // Type: [[GroupType|GroupsV2-GroupType]]:Enum
    "groupType": 0,
    // Type: string:date-time
    "creationDate": "",
    // Type: string
    "about": "",
    // Type: string
    "motto": "",
    // Type: integer:int32
    "memberCount": 0,
    // Type: string
    "locale": "",
    // Type: [[MembershipOption|GroupsV2-MembershipOption]]:Enum
    "membershipOption": 0,
    // Type: [[Capabilities|GroupsV2-Capabilities]]:Enum
    "capabilities": 0,
    // Type: [[GroupV2ClanInfo|GroupsV2-GroupV2ClanInfo]]
    "clanInfo": {
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
    },
    // Type: string
    "avatarPath": "",
    // Type: string
    "theme": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_GroupsV2-GroupV2Card.html#schema_GroupsV2-GroupV2Card
