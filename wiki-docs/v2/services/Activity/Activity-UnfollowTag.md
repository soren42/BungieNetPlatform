<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/Activity/Tag/Unfollow/|https://www.bungie.net/Platform/Activity/Tag/Unfollow/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[Activity|Endpoints#Activity]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
tag | string | No | 

## Example
### Request
POST https://www.bungie.net/Platform/Activity/Tag/Unfollow/
```javascript
{
    // Type: object
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Activity.UnfollowTag]
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
