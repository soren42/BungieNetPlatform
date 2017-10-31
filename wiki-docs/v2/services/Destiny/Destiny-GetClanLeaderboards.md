<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info


* **URI:** [[/Destiny/Stats/ClanLeaderboards/{clanId}/|https://bungie.net/d1/Platform/Destiny/Stats/ClanLeaderboards/{clanId}/]]
* **Basepath:** https://bungie.net/d1/Platform
* **Method:** GET
* **Service:** [[Destiny|Endpoints#Destiny]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
clanId | integer:int32 | Yes | A valid clan ID.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
modes | [#/components/schemas/Destiny.ActivityModeType][] | No | Game modes to return. Comma separated.
statid | string | No | 
maxtop | string | No | 

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/Stats/ClanLeaderboards/{clanId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetClanLeaderboards]
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
