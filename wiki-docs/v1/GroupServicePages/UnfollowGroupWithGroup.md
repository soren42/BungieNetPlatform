<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Unfollow another group followed by a group the current user is an admin for. 
* **URI:** [[/Group/{groupId}/Unfollow/{followGroupId}/|https://www.bungie.net/Platform/Group/{groupId}/Unfollow/{followGroupId}/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.
followGroupId | The groupId of the group to unfollow.

### Query String Parameters
None

### JSON POST Parameters
None

## Example
POST https://www.bungie.net/Platform/Group/{groupId}/Unfollow/{followGroupId}/
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
