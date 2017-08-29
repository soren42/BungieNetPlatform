<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Unban a member from a group that the current user is an admin for.
* **URI:** [[/Group/{groupId}/Members/{membershipId}/Unban/|https://www.bungie.net/Platform/Group/{groupId}/Members/{membershipId}/Unban/]]
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
None

## Example
POST https://www.bungie.net/Platform/Group/177526/Members/5197148/Unban/
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
