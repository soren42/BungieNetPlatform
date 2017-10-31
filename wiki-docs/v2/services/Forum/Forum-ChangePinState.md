<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/Forum/ChangePinState/{param1}/{param2}/|https://www.bungie.net/Platform/Forum/ChangePinState/{param1}/{param2}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[Forum|Endpoints#Forum]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
param1 | string | Yes | 
param2 | string | Yes | 

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/Forum/ChangePinState/{param1}/{param2}/
```javascript
{
    // Type: object
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Forum.ChangePinState]
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
