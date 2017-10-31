<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns recent activity history for a given character.

* **URI:** [[/Destiny/Stats/ActivityHistory/{membershipType}/{destinyMembershipId}/{characterId}/|https://bungie.net/d1/Platform/Destiny/Stats/ActivityHistory/{membershipType}/{destinyMembershipId}/{characterId}/]]
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
mode | [#/components/schemas/Destiny.ActivityModeType] | No | Game mode to return. Required.
count | integer:int32 | No | The number of results to return.
page | integer:int32 | No | The current page to return. Starts at 1.
definitions | boolean | No | Include definitions in the response. Use while testing.

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/Stats/ActivityHistory/{membershipType}/{destinyMembershipId}/{characterId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetActivityHistory]
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
