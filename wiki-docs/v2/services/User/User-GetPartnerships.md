<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a user's linked Partnerships.

* **URI:** [[/User/{membershipId}/Partnerships/|https://www.bungie.net/Platform/User/{membershipId}/Partnerships/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[User|Endpoints#User]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
membershipId | integer:int64 | Yes | The ID of the member for whom partnerships should be returned.

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/User/{membershipId}/Partnerships/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[PublicPartnershipDetail|Partnerships-PublicPartnershipDetail]][]
    "Response": [
       // Type: [[PublicPartnershipDetail|Partnerships-PublicPartnershipDetail]]
        {
            // Type: [[PartnershipType|Partnerships-PartnershipType]]:Enum
            "partnerType": 0,
            // Type: string
            "identifier": "",
            // Type: string
            "name": "",
            // Type: string
            "icon": ""
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
1. https://bungie-net.github.io/multi/operation_get_User-GetPartnerships.html#operation_get_User-GetPartnerships
