<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This contract supplies basic information commonly used to display a minimal amount of information about a user.  Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used.  Avoid adding game specific or platform specific details here. In caseswhere UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
supplementalDisplayName | string | A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
iconPath | string | URL the Icon if available.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Type of the membership.
membershipId | integer:int64 | Membership ID as they user is known in the Accounts service
displayName | string | Display Name the player has chosen for themselves. Thie display name is optional whenthe data type is used as input to a platform API.

## Example
```javascript
{
    // Type: string
    "supplementalDisplayName": "",
    // Type: string
    "iconPath": "",
    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
    "membershipType": 0,
    // Type: integer:int64
    "membershipId": 0,
    // Type: string
    "displayName": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_User-UserInfoCard.html#schema_User-UserInfoCard
