<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Very basic info about a user as returned by the Account server.

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Type of the membership.
membershipId | integer:int64 | Membership ID as they user is known in the Accounts service
displayName | string | Display Name the player has chosen for themselves. Thie display name is optional whenthe data type is used as input to a platform API.

## Example
```javascript
{
    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
    "membershipType": 0,
    // Type: integer:int64
    "membershipId": 0,
    // Type: string
    "displayName": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_User-UserMembership.html#schema_User-UserMembership
