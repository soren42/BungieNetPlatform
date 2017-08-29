<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Changes the group membership type for a user. 
* **URI:** [[/Group/{groupId}/Members/{membershipId}/SetMembershipType/{groupMembershipType}/|https://www.bungie.net/Platform/Group/{groupId}/Members/{membershipId}/SetMembershipType/{groupMembershipType}/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.
membershipId | A valid Bungie.net membershipId that is in the group.
groupMembershipType | A valid group membershipType. 0=Member, 1=Admin, 2=Founder (probably will throw an error)

### Query String Parameters
Name | Description
---- | -----------
clanPlatformType | Unknown. Default is 0.

### JSON POST Parameters
None

## Example
POST https://www.bungie.net/Platform/Group/177526/Members/6294617/SetMembershipType/0/
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
