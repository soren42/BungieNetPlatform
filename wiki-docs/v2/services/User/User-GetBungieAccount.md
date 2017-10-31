<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/User/GetBungieAccount/{membershipId}/{membershipType}/|https://www.bungie.net/Platform/User/GetBungieAccount/{membershipId}/{membershipType}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[User|Endpoints#User]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
membershipId | integer:int64 | Yes | The membershipId related to that type.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | The type of account for which info will be extracted.

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/User/GetBungieAccount/{membershipId}/{membershipType}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/User.GetBungieAccount]
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
