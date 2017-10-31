<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns historical stat information about a given Destiny character.

* **URI:** [[/Destiny/Stats/{membershipType}/{destinyMembershipId}/{characterId}/|https://bungie.net/d1/Platform/Destiny/Stats/{membershipType}/{destinyMembershipId}/{characterId}/]]
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
periodType | [[PeriodType|Destiny-PeriodType]]:Enum | No | Indicates a specific period type to return.
modes | [#/components/schemas/Destiny.ActivityModeType][] | No | Game modes to return. Comma separated.
groups | [#/components/schemas/Destiny.StatsGroupType][] | No | Group of stats to include, otherwise only general stats are returned. Comma separated.
monthstart | string | No | First month to return when monthly stats are requested. Use the format YYYY-MM.
monthend | string | No | Last month to return when monthly stats are requested. Use the format YYYY-MM.
daystart | string | No | First day to return when daily stats are requested. Use the format YYYY-MM-DD.
dayend | string | No | Last day to return when daily stats are requested. Use the format YYYY-MM-DD.

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/Stats/{membershipType}/{destinyMembershipId}/{characterId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetHistoricalStats]
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
