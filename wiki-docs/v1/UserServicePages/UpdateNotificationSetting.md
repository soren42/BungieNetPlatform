<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Updates the current user's notification settings.
* **URI:** [[/User/Notification/Update/|https://www.bungie.net/Platform/User/Notification/Update/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[UserService|Endpoints#UserService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
None

## Example
POST https://www.bungie.net/Platform/User/Notification/Update/
```javascript
{
    "settings": [{
        "notificationType": 1,
        "notifyEmail": false,
        "notifyMobile": false,
        "notifyWeb": false
    }]
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
