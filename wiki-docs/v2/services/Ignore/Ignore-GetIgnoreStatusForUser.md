<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/Ignore/MyIgnores/Users/{param1}/|https://www.bungie.net/Platform/Ignore/MyIgnores/Users/{param1}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Ignore|Endpoints#Ignore]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
param1 | string | Yes | 

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/Ignore/MyIgnores/Users/{param1}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Ignore.GetIgnoreStatusForUser]
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
