<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns number of bungie.net notifications.
* **URI:** [[/User/GetCounts/|https://www.bungie.net/Platform/User/GetCounts/]]
* **Method:** GET
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
GET https://www.bungie.net/Platform/User/GetCounts/
 ```javascript
{
   "Response":{
      "onlineFriendCount":9,
      "notificationCount":2,
      "messageCount":4,
      "needReauth":2,
      "lastUpdated":"2015-05-27T13:20:31.385Z"
   },
   "ErrorCode":1,
   "ThrottleSeconds":0,
   "ErrorStatus":"Success",
   "Message":"Ok",
   "MessageData":{

   }
}
```

## References
