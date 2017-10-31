<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.

* **URI:** [[/Forum/GetForumTagSuggestions/|https://www.bungie.net/Platform/Forum/GetForumTagSuggestions/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Forum|Endpoints#Forum]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
partialtag | string | No | The partial tag input to generate suggestions from.

## Example
### Request
GET https://www.bungie.net/Platform/Forum/GetForumTagSuggestions/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[TagResponse|Tags-Models-Contracts-TagResponse]][]
    "Response": [
       // Type: [[TagResponse|Tags-Models-Contracts-TagResponse]]
        {
            // Type: string
            "tagText": "",
            // Type: [[IgnoreResponse|Ignores-IgnoreResponse]]
            "ignoreStatus": {
                // Type: boolean
                "isIgnored": false,
                // Type: [[IgnoreStatus|Ignores-IgnoreStatus]]:Enum
                "ignoreFlags": 0
            }
        }
    ],
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
1. https://bungie-net.github.io/multi/operation_get_Forum-GetForumTagSuggestions.html#operation_get_Forum-GetForumTagSuggestions
