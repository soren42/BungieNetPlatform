<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Leave the clan for a given group. 
* **URI:** [[/Group/{groupId}/Clans/Leave/{clanMembershipType}/|https://www.bungie.net/Platform/Group/{groupId}/Clans/Leave/{clanMembershipType}/]]
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
None

## Example
POST https://www.bungie.net/Platform/Group/177526/Clans/Leave/2/
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
