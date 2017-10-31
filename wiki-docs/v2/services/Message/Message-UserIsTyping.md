<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/Message/UserIsTyping/|https://www.bungie.net/Platform/Message/UserIsTyping/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[Message|Endpoints#Message]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/Message/UserIsTyping/
```javascript
{
    // Type: object
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Message.UserIsTyping]
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
