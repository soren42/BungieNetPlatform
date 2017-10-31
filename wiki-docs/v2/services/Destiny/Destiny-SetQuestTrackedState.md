<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Set the track state of a given quest.

* **URI:** [[/Destiny/SetQuestTrackedState/|https://bungie.net/d1/Platform/Destiny/SetQuestTrackedState/]]
* **Basepath:** https://bungie.net/d1/Platform
* **Method:** POST
* **Service:** [[Destiny|Endpoints#Destiny]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
POST https://bungie.net/d1/Platform/Destiny/SetQuestTrackedState/
```javascript
{
    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
    "membershipType": 0,
    // Type: integer:int64
    "destinyMembershipId": 0,
    // Type: integer:int64
    "itemId": 0,
    // Type: integer:int64
    "characterId": 0,
    // Type: boolean
    "state": false,
    // Type: object
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.SetQuestTrackedState]
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
