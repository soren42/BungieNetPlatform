<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Approve a member into a given group that the current user is an admin for. 
* **URI:** [[/Group/{groupId}/Members/{membershipId}/ApproveV2/|https://www.bungie.net/Platform/Group/{groupId}/Members/{membershipId}/ApproveV2/]]
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
message | A message to include with the approval.

## Example
POST https://www.bungie.net/Platform/Group/177526/Members/5197148/ApproveV2/
```javascript
{
    "message": "Congrats! You are now part of a super exclusive Destiny clan of awesomeness!!"
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
