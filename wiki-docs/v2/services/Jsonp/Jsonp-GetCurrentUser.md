<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/JSONP/GetBungieNetUser/|https://www.bungie.net/Platform/JSONP/GetBungieNetUser/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Jsonp|Endpoints#Jsonp]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
callback | string | No | 

## Example
### Request
GET https://www.bungie.net/Platform/JSONP/GetBungieNetUser/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Jsonp.GetCurrentUser]
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
