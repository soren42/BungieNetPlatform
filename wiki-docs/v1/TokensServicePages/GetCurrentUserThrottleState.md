<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

* **URI:** [[/Tokens/ThrottleState/|https://www.bungie.net/Platform/Tokens/ThrottleState/]]
* **Method:** GET
* **Accessibility:** 
* **Service:** [[TokensService|Endpoints#TokensService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Tokens/ThrottleState/
```javascript
{
    "Response": {
        "IsThrottled": false,
        "ThrottleExpires": "2000-01-01T00:01:00Z",
        "NumberOfFailedAttemptsToday": 0,
        "MaximumFailedAttemptsPerDay": 3,
        "AgeVerificationState": true
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {

    }
}
```

## References
