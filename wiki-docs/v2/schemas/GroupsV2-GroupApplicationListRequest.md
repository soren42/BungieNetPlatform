<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
memberships | [[UserMembership|User-UserMembership]][] | 
message | string | 

## Example
```javascript
{
    // Type: [[UserMembership|User-UserMembership]][]
    "memberships": [
       // Type: [[UserMembership|User-UserMembership]]
        {
            // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
            "membershipType": {},
            // Type: integer:int64
            "membershipId": 0,
            // Type: string
            "displayName": ""
        }
    ],
    // Type: string
    "message": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_GroupsV2-GroupApplicationListRequest.html#schema_GroupsV2-GroupApplicationListRequest
