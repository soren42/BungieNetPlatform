<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns leaderboard stats compared against friends. Note you may need to re-authenticate with PSN/Xbox in order to see full rankings.

* **URI:** [[/Destiny/Stats/Leaderboards/{membershipType}/{destinyMembershipId}/|https://bungie.net/d1/Platform/Destiny/Stats/Leaderboards/{membershipType}/{destinyMembershipId}/]]
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
modes | [#/components/schemas/Destiny.ActivityModeType][] | No | Game modes to return. Comma separated.
statid | string | No | 
maxtop | string | No | 

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/Stats/Leaderboards/{membershipType}/{destinyMembershipId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetLeaderboards]
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
