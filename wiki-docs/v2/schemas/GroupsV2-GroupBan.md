<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
groupId | integer:int64 | 
lastModifiedBy | [[UserInfoCard|User-UserInfoCard]] | 
createdBy | [[UserInfoCard|User-UserInfoCard]] | 
dateBanned | string:date-time | 
dateExpires | string:date-time | 
comment | string | 
bungieNetUserInfo | [[UserInfoCard|User-UserInfoCard]] | 
destinyUserInfo | [[UserInfoCard|User-UserInfoCard]] | 

## Example
```javascript
{
    // Type: integer:int64
    "groupId": 0,
    // Type: [[UserInfoCard|User-UserInfoCard]]
    "lastModifiedBy": {
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
    "createdBy": {
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
    "dateBanned": "",
    // Type: string:date-time
    "dateExpires": "",
    // Type: string
    "comment": "",
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
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_GroupsV2-GroupBan.html#schema_GroupsV2-GroupBan
