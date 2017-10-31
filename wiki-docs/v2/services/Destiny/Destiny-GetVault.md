<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the contents of player's Vault.

* **URI:** [[/Destiny/{membershipType}/MyAccount/Vault/|https://bungie.net/d1/Platform/Destiny/{membershipType}/MyAccount/Vault/]]
* **Basepath:** https://bungie.net/d1/Platform
* **Method:** GET
* **Service:** [[Destiny|Endpoints#Destiny]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | The type of account for which info will be extracted.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
definitions | boolean | No | Include definitions in the response. Use while testing.
accountId | integer:int64 | No | Destiny membership ID.

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/{membershipType}/MyAccount/Vault/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetVault]
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
