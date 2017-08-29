<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Kick a member from a group/clan that the current user is an admin for. 
* **URI:** [[/Group/{groupId}/Members/{membershipId}/Kick/|https://www.bungie.net/Platform/Group/{groupId}/Members/{membershipId}/Kick/]]
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
Name | Description
---- | -----------
clanPlatformType | A valid clan membership type. 0=Group, 1=Xbox, 2=PSN

### JSON POST Parameters
None

## Example
POST https://www.bungie.net/Platform/Group/177526/Members/5197148/Kick/
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
