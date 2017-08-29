<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Request to join a group's clan.
* **URI:** [[/Group/{groupId}/Clans/Join/{clanMembershipType}/|https://www.bungie.net/Platform/Group/{groupId}/Clans/Join/{clanMembershipType}/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.
[[clanMembershipType|Enums#BungieMembershipType]] | A valid clan membership type. 1=Xbox, 2=PSN, 10=Demon

### Query String Parameters
None

### JSON POST Parameters
Name | Description
---- | -----------
message | A message to include with the request.

## Example
POST https://www.bungie.net/Group/177526/Clans/Join/2/
```javascript
{
    "message": "Hi I want to join your clan."
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
