<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
groupId | integer:int64 | 
creationDate | string:date-time | 
resolveState | [[GroupApplicationResolveState|GroupsV2-GroupApplicationResolveState]]:Enum | 
resolveDate | string:date-time:nullable | 
resolvedByMembershipId | integer:int64:nullable | 
requestMessage | string | 
resolveMessage | string | 
destinyUserInfo | [[UserInfoCard|User-UserInfoCard]] | 
bungieNetUserInfo | [[UserInfoCard|User-UserInfoCard]] | 

## Example
```javascript
{
    // Type: integer:int64
    "groupId": 0,
    // Type: string:date-time
    "creationDate": "",
    // Type: [[GroupApplicationResolveState|GroupsV2-GroupApplicationResolveState]]:Enum
    "resolveState": 0,
    // Type: string:date-time:nullable
    "resolveDate": "",
    // Type: integer:int64:nullable
    "resolvedByMembershipId": 0,
    // Type: string
    "requestMessage": "",
    // Type: string
    "resolveMessage": "",
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
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_GroupsV2-GroupMemberApplication.html#schema_GroupsV2-GroupMemberApplication
