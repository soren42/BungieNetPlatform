<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/User/GetAvailableAvatars/|https://www.bungie.net/Platform/User/GetAvailableAvatars/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[User|Endpoints#User]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/User/GetAvailableAvatars/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/User.GetAvailableAvatars]
    "Response": null,
    // Type: [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum
    "ErrorCode": 0,
    // Type: integer:int32
    "ThrottleSeconds": 0,
    // Type: string
    "ErrorStatus": "",
    // Type: string
    "Message": "",
    // Type: Dictionary&lt;string,string&gt;
    "MessageData": {
        "{string}": ""
    },
    // Type: object
}

```

## References
