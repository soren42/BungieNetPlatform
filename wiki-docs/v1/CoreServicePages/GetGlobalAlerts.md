<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns current alerts issues by Bungie regarding Destiny, Bungie.net, etc... They are the same alerts displayed on bungie.net.
* **URI:** [[//GlobalAlerts/|https://www.bungie.net/Platform//GlobalAlerts/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[CoreService|Endpoints#CoreService]]

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Description
---- | -----------
includestreaming | 

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/GlobalAlerts/

```javascript
{
   "Response":[
      {
         "AlertKey":"PatchingWithKickTomorrow",
         "AlertHtml":"We will be pushing a patch live tomorrow. Players will be returned to the title screen from their activities and then be required to log in to Destiny again after installing the patch.",
         "AlertTimestamp":"2015-06-01T20:19:11Z",
         "AlertLevel":2
      }
   ],
   "ErrorCode":1,
   "ThrottleSeconds":0,
   "ErrorStatus":"Success",
   "Message":"Ok",
   "MessageData":{

   }
}
```

## References
