<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Deny all pending members to group. 
* **URI:** [[/Group/{groupId}/Members/DenyAll/|https://www.bungie.net/Platform/Group/{groupId}/Members/DenyAll/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.

### Query String Parameters
None

### JSON POST Parameters
Name | Description
---- | -----------
message | A message to include with the denial. 

## Example
POST https://www.bungie.net/Platform/Group/177526/Members/DenyAll/
```javascript
{
    "message": "Sorry, we discovered you were a smelly hipster and denied you access to our exclusive clan."
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
