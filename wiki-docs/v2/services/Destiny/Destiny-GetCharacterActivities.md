<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns activity progress for a given character.

* **URI:** [[/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Activities/|https://bungie.net/d1/Platform/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Activities/]]
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
characterId | string | Yes | 

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
definitions | boolean | No | Include definitions in the response. Use while testing.

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Activities/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetCharacterActivities]
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
