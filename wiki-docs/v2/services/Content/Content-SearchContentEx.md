<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/Content/SearchEx/{param1}/|https://www.bungie.net/Platform/Content/SearchEx/{param1}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[Content|Endpoints#Content]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
param1 | string | Yes | 

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
head | string | No | 

## Example
### Request
POST https://www.bungie.net/Platform/Content/SearchEx/{param1}/
```javascript
{
    // Type: object
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Content.SearchContentEx]
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
