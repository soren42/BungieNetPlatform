<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Designate a member as the new founder of a group. 
* **URI:** [[/Group/{groupId}/DesignateClanFounderForMigration/{membershipId}/{clanMembershipType}/|https://www.bungie.net/Platform/Group/{groupId}/DesignateClanFounderForMigration/{membershipId}/{clanMembershipType}/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.
membershipId | A valid Bungie.net membershipId that is in the group.
[[clanMembershipType|Enums#BungieMembershipType]] | A valid clan membership type. 1=Xbox, 2=PSN, 10=Demon

### Query String Parameters
None

### JSON POST Parameters
None

## Example
POST https://www.bungie.net/Platform/Group/177526/DesignateClanFounderForMigration/5197148/2/
 ```javascript

```

## References
1. https://www.bungie.net/Scripts/bungienet/clans/clans.min.js
