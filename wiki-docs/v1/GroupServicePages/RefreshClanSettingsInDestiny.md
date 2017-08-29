<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Refreshes settings for user's clan in Destiny.
* **URI:** [[/Group/MyClans/Refresh/{clanMembershipType}/|https://www.bungie.net/Platform/Group/MyClans/Refresh/{clanMembershipType}/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[clanMembershipType|Enums#BungieMembershipType]] | A valid clan membership type. 1=Xbox, 2=PSN, 10=Demon

### Query String Parameters
None

### JSON POST Parameters
None

## Example
POST https://www.bungie.net/Platform/Group/MyClans/Refresh/2/
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
