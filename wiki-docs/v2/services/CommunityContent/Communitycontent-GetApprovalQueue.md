<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/CommunityContent/Queue/{param1}/{param2}/{param3}/|https://www.bungie.net/Platform/CommunityContent/Queue/{param1}/{param2}/{param3}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[CommunityContent|Endpoints#CommunityContent]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
param1 | string | Yes | 
param2 | string | Yes | 
param3 | string | Yes | 

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/CommunityContent/Queue/{param1}/{param2}/{param3}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/CommunityContent.GetApprovalQueue]
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
