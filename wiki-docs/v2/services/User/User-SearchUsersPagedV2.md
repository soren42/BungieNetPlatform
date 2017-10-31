<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/User/SearchUsersPaged/{searchTerm}/{page}/{param3}/|https://www.bungie.net/Platform/User/SearchUsersPaged/{searchTerm}/{page}/{param3}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[User|Endpoints#User]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
searchTerm | string | Yes | 
page | string | Yes | 
param3 | string | Yes | 

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/User/SearchUsersPaged/{searchTerm}/{page}/{param3}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/User.SearchUsersPagedV2]
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
