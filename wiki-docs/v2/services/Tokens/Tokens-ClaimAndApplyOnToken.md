<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/Tokens/ClaimAndApplyToken/{param1}/|https://www.bungie.net/Platform/Tokens/ClaimAndApplyToken/{param1}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[Tokens|Endpoints#Tokens]]
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
POST https://www.bungie.net/Platform/Tokens/ClaimAndApplyToken/{param1}/
```javascript
{
    // Type: object
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Tokens.ClaimAndApplyOnToken]
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
