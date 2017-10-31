<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
memberType | [[RuntimeGroupMemberType|GroupsV2-RuntimeGroupMemberType]]:Enum | 
isOnline | boolean | 
groupId | integer:int64 | 
destinyUserInfo | [[UserInfoCard|User-UserInfoCard]] | 
bungieNetUserInfo | [[UserInfoCard|User-UserInfoCard]] | 
joinDate | string:date-time | 

## Example
```javascript
{
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

```

## References
1. https://bungie-net.github.io/multi/schema_GroupsV2-GroupMember.html#schema_GroupsV2-GroupMember
