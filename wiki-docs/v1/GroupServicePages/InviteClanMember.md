<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Send a member an invitation to join the clan.
* **URI:** [[/Group/{groupId}/InviteToClan/{membershipId}/{clanMembershipType}/|https://www.bungie.net/Platform/Group/{groupId}/InviteToClan/{membershipId}/{clanMembershipType}/]]
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
Name | Description
---- | -----------
title | The message title. Not displayed anywhere.
message | The message to send with the invitation.

## Example
POST https://www.bungie.net/Platform/Group/177526/InviteToClan/5197148/2/
```javascript
{
    "title": "",
    "message": "Join our clan bro!"
}
```
 ```javascript
{
    "Response": 0,
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {}
}
```

## References
