<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns information about a Vendor for a given Destiny character with metadata.

* **URI:** [[/Destiny/{membershipType}/MyAccount/Character/{characterId}/Vendor/{vendorHash}/Metadata/|https://bungie.net/d1/Platform/Destiny/{membershipType}/MyAccount/Character/{characterId}/Vendor/{vendorHash}/Metadata/]]
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
characterId | string | Yes | 
vendorHash | integer:int64 | Yes | A valid vendorHash.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
definitions | boolean | No | Include definitions in the response. Use while testing.

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/{membershipType}/MyAccount/Character/{characterId}/Vendor/{vendorHash}/Metadata/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetVendorForCurrentCharacterWithMetadata]
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
