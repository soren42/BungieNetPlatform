<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Loads aliases of a bungienet membership id.

* **URI:** [[/User/GetUserAliases/{id}/|https://bungie.net/Platform/User/GetUserAliases/{id}/]]
* **Basepath:** https://bungie.net/Platform
* **Method:** GET
* **Service:** [[User|Endpoints#User]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
id | integer:int64 | Yes | The requested Bungie.net membership id.

### Query String Parameters
None

## Example
### Request
GET https://bungie.net/Platform/User/GetUserAliases/{id}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[UserAlias|User-Models-UserAlias]][]
    "Response": [
       // Type: [[UserAlias|User-Models-UserAlias]]
        {
            // Type: string
            "cachePrefix": ""
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
1. https://bungie-net.github.io/multi/operation_get_User-GetUserAliases.html#operation_get_User-GetUserAliases
