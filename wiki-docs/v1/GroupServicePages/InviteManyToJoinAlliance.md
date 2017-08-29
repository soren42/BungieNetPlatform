<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Invite selected groups to join an alliance that the current user is an admin for. 
* **URI:** [[/Group/{groupId}/Allies/InviteMany/|https://www.bungie.net/Platform/Group/{groupId}/Allies/InviteMany/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.

### Query String Parameters
None

### JSON POST Parameters
Name | Description
---- | -----------
targetIds | An array of groupIds.
messageContent.message | A message to include in the invite.

## Example
POST https://www.bungie.net/Platform/Group/177526/Allies/InviteMany/
```javascript
{
    "messageContent": {
        "message": "You should join our awesome alliance!"
    },
    "targetIds": [177526]
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
1. https://www.bungie.net/Scripts/bungienet/clans/clans.min.js
