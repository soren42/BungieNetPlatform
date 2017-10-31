<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets the post Id for the given content item's comments, if it exists.

* **URI:** [[/Forum/GetTopicForContent/{contentId}/|https://www.bungie.net/Platform/Forum/GetTopicForContent/{contentId}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Forum|Endpoints#Forum]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
contentId | integer:int64 | Yes | 

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/Forum/GetTopicForContent/{contentId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: integer:int64
    "Response": 0,
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
1. https://bungie-net.github.io/multi/operation_get_Forum-GetTopicForContent.html#operation_get_Forum-GetTopicForContent
