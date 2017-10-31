<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/Tokens/ApplyOfferToCurrentDestinyMembership/{param1}/{param2}/|https://www.bungie.net/Platform/Tokens/ApplyOfferToCurrentDestinyMembership/{param1}/{param2}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[Tokens|Endpoints#Tokens]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
param1 | string | Yes | 
param2 | string | Yes | 

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/Tokens/ApplyOfferToCurrentDestinyMembership/{param1}/{param2}/
```javascript
{
    // Type: object
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Tokens.ApplyOfferToCurrentDestinyMembership]
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
