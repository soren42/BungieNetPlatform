<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of all available user themes.

* **URI:** [[/User/GetAvailableThemes/|https://www.bungie.net/Platform/User/GetAvailableThemes/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[User|Endpoints#User]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/User/GetAvailableThemes/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[UserTheme|Config-UserTheme]][]
    "Response": [
       // Type: [[UserTheme|Config-UserTheme]]
        {
            // Type: integer:int32
            "userThemeId": 0,
            // Type: string
            "userThemeName": "",
            // Type: string
            "userThemeDescription": ""
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
1. https://bungie-net.github.io/multi/operation_get_User-GetAvailableThemes.html#operation_get_User-GetAvailableThemes
