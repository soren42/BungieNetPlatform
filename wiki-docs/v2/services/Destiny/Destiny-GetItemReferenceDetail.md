<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/Destiny/{param1}/Account/{param2}/Character/{param3}/ItemReference/{param4}/|https://bungie.net/d1/Platform/Destiny/{param1}/Account/{param2}/Character/{param3}/ItemReference/{param4}/]]
* **Basepath:** https://bungie.net/d1/Platform
* **Method:** GET
* **Service:** [[Destiny|Endpoints#Destiny]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
param1 | string | Yes | 
param2 | string | Yes | 
param3 | string | Yes | 
param4 | string | Yes | 

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
definitions | string | No | 

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/{param1}/Account/{param2}/Character/{param3}/ItemReference/{param4}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetItemReferenceDetail]
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
