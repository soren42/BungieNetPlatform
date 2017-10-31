<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/Admin/Member/{param1}/SetBan/|https://www.bungie.net/Platform/Admin/Member/{param1}/SetBan/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[Admin|Endpoints#Admin]]
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
POST https://www.bungie.net/Platform/Admin/Member/{param1}/SetBan/
```javascript
{
    // Type: object
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Admin.OverrideBanOnUser]
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
