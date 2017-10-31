<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns leaderboard stats compared against PSN friends. Note, you may need re-authenticate with PSN in order to see full rankings.

* **URI:** [[/Destiny/Stats/LeaderboardsForPsn/|https://bungie.net/d1/Platform/Destiny/Stats/LeaderboardsForPsn/]]
* **Basepath:** https://bungie.net/d1/Platform
* **Method:** GET
* **Service:** [[Destiny|Endpoints#Destiny]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
modes | [#/components/schemas/Destiny.ActivityModeType][] | No | Game modes to return. Comma separated.
code | string | No | 

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/Stats/LeaderboardsForPsn/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetLeaderboardsForPsn]
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
