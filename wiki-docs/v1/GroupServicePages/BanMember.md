<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Ban a member for a period of time from a group that the current user is an admin for. 
* **URI:** [[/Group/{groupId}/Members/{membershipId}/Ban/|https://www.bungie.net/Platform/Group/{groupId}/Members/{membershipId}/Ban/]]
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
comment | A comment to send to the member with the ban.
length | The length of the ban. 1=Week, 2=Two Weeks, 3=Three Weeks, 4=Month, 5=Three Months, 6=Six Months, 7=Year, 8=Forever, 9=Three Minutes, 10=An Hour, 11=Thirty Days

## Example
POST https://www.bungie.net/Group/39966/Members/5197148/Ban/
```javascript
{
    "comment": "You were banned for a week for being too hipster.",
    "length": 1
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
