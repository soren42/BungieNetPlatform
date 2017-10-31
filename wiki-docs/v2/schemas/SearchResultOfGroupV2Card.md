<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
results | [[GroupV2Card|GroupsV2-GroupV2Card]][] | 
totalResults | integer:int32 | 
hasMore | boolean | 
query | [[PagedQuery|Queries-PagedQuery]] | 
replacementContinuationToken | string | 
useTotalResults | boolean | If useTotalResults is true, then totalResults represents an accurate count. If False, it does not, and may be estimated/only the size of the current page. Either way, you should probably always only trust hasMore. This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.

## Example
```javascript
{
    // Type: [[GroupV2Card|GroupsV2-GroupV2Card]][]
    "results": [
       // Type: [[GroupV2Card|GroupsV2-GroupV2Card]]
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
1. https://bungie-net.github.io/multi/schema_SearchResultOfGroupV2Card.html#schema_SearchResultOfGroupV2Card
