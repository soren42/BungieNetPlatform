<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Send a user an invitation to join the group.
* **URI:** [[/Group/{groupId}/Invite/{membershipId}/|https://www.bungie.net/Platform/Group/{groupId}/Invite/{membershipId}/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.
membershipId | A valid Bungie.net membershipId.

### Query String Parameters
None

### JSON POST Parameters
Name | Description
---- | -----------
title | The message title. Not displayed anywhere.
message | The message to send with the invitation.

## Example
POST https://www.bungie.net/Platform/Group/177526/InviteGroupMember/5197148/
```javascript
{
    "title": "",
    "message": "Join our group bro!"
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
