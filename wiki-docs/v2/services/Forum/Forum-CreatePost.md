<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/Forum/CreatePost/|https://www.bungie.net/Platform/Forum/CreatePost/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[Forum|Endpoints#Forum]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/Forum/CreatePost/
```javascript
{
    // Type: string
    "body": "",
    // Type: string
    "category": "",
    // Type: string
    "groupId": "",
    // Type: string
    "isGroupPrivate": "",
    // Type: string
    "metadata": "",
    // Type: string
    "parentPostId": "",
    // Type: string
    "subTopicOverride": "",
    // Type: string
    "subject": "",
    // Type: string
    "urlLinkOrImage": "",
    // Type: object
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Forum.CreatePost]
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
