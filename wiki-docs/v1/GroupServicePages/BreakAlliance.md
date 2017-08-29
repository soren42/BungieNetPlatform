<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Break alliance with an allied group for a group that the current user is an admin for. 
* **URI:** [[/Group/{groupId}/Relationship/{allyGroupId}/BreakAlliance/|https://www.bungie.net/Platform/Group/{groupId}/Relationship/{allyGroupId}/BreakAlliance/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.
allyGroupId | The groupId of the ally.

### Query String Parameters
None

### JSON POST Parameters
None

## Example
POST https://www.bungie.net/Platform/Group/177526/Relationship/39966/BreakAlliance/
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
