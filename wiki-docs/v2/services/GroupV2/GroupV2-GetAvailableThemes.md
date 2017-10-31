<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of all available group themes.

* **URI:** [[/GroupV2/GetAvailableThemes/|https://www.bungie.net/Platform/GroupV2/GetAvailableThemes/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/GroupV2/GetAvailableThemes/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[GroupTheme|Config-GroupTheme]][]
    "Response": [
       // Type: [[GroupTheme|Config-GroupTheme]]
        {
            // Type: string
            "name": "",
            // Type: string
            "folder": "",
            // Type: string
            "description": ""
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
1. https://bungie-net.github.io/multi/operation_get_GroupV2-GetAvailableThemes.html#operation_get_GroupV2-GetAvailableThemes
