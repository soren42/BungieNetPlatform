<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Deny a pending member for a group that the current user is an admin for. 
* **URI:** [[/Group/{groupId}/Members/{membershipId}/DenyV2/|https://www.bungie.net/Platform/Group/{groupId}/Members/{membershipId}/DenyV2/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.
membershipId | A valid Bungie.net membershipId that is in the group.

### Query String Parameters
None

### JSON POST Parameters
Name | Description
---- | -----------
message | A message to send to the pending member.

## Example
POST https://www.bungie.net/Platform/Group/177526/Members/5197148/DenyV2/
```javascript
{
    "message": "Sorry, we discovered you were a smelly hipster and denied you access to our exclusive clan."
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
