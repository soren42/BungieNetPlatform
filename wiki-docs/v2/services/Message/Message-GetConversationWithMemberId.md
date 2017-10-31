<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/Message/GetConversationWithMember/{memberId}/|https://www.bungie.net/Platform/Message/GetConversationWithMember/{memberId}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Message|Endpoints#Message]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
memberId | string | Yes | 

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/Message/GetConversationWithMember/{memberId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Message.GetConversationWithMemberId]
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
