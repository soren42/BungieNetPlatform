<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Updates the current user's profile settings. Note this page is for documentation purposes, it is recommended that any profile changes be made through Bungie.net!
* **URI:** [[/User/UpdateUser/|https://www.bungie.net/Platform/User/UpdateUser/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[UserService|Endpoints#UserService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
Name | Description
---- | -----------
about | 
adultMode | true or false
displayName | 
emailAddress | 
emailUsage | Default 31?
locale | 
localeInheritDefault | true or false
profilePicture | A valid profilePictureId.
profileTheme | A valid profileThemeId.
showActivity | true or false
showFacebookPublic | true or false
showGamertagPublic | true or false
showGroupMessaging | true or false
showPsnPublic | true or false
uniqueName | Default to membershipId.

## Example
POST https://www.bungie.net/Platform/User/UpdateUser/
```javascript
{
    "about": "",
    "adultMode": false,
    "displayName": "{displayName}",
    "emailAddress": "{emailAddress}",
    "emailUsage": 31,
    "locale": "en",
    "localeInheritDefault": true,
    "profilePicture": "70525",
    "profileTheme": "84",
    "showActivity": true,
    "showFacebookPublic": false,
    "showGamertagPublic": true,
    "showGroupMessaging": true,
    "showPsnPublic": true,
    "uniqueName": "{membershipId}"
}
```
 ```javascript
{
  "Response": 0,
  "ErrorCode": 1,
  "ThrottleSeconds": 0,
  "ErrorStatus": "Success",
  "Message": "Ok",
  "MessageData": {
 
  }
}
```

## References
