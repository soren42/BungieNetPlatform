<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
results | [[GroupMember|GroupsV2-GroupMember]][] | 
totalResults | integer:int32 | 
hasMore | boolean | 
query | [[PagedQuery|Queries-PagedQuery]] | 
replacementContinuationToken | string | 
useTotalResults | boolean | If useTotalResults is true, then totalResults represents an accurate count. If False, it does not, and may be estimated/only the size of the current page. Either way, you should probably always only trust hasMore. This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.

## Example
```javascript
{
    // Type: [[GroupMember|GroupsV2-GroupMember]][]
    "results": [
       // Type: [[GroupMember|GroupsV2-GroupMember]]
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
1. https://bungie-net.github.io/multi/schema_SearchResultOfGroupMember.html#schema_SearchResultOfGroupMember
