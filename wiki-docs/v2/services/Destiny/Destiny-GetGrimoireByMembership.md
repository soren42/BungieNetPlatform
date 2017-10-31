<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the Grimoire for a given account.

* **URI:** [[/Destiny/Vanguard/Grimoire/{membershipType}/{destinyMembershipId}/|https://bungie.net/d1/Platform/Destiny/Vanguard/Grimoire/{membershipType}/{destinyMembershipId}/]]
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
destinyMembershipId | integer:int64 | Yes | Destiny membership ID.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
definitions | boolean | No | Include definitions in the response. Use while testing.
flavour | string | No | Indicates flavour stats should be included with player card data. More testing needed.
single | integer:int32 | No | Return data for a single cardId.

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/Vanguard/Grimoire/{membershipType}/{destinyMembershipId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetGrimoireByMembership]
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
