<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Equips multiple items from a character's inventory and returns the updated inventory and character information. The endpoint will fail if the character is logged in and doing an activity.

**Note:** This is an [experimental endpoint](https://www.bungie.net/en/Clan/Post/39966/187691777/1) that was accidentally left in. While it should work as intended, it may return [incorrect response data and has a higher bandwidth](https://www.bungie.net/en/Clan/Post/39966/196303703/0/0) than simply making multiple [[EquipItem]] requests.

* **URI:** [[/Destiny/EquipItems/|https://bungie.net/d1/Platform/Destiny/EquipItems/]]
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
POST https://bungie.net/d1/Platform/Destiny/EquipItems/
```javascript
{
    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
    "membershipType": 0,
    // Type: integer:int64[]
    "itemIds": [
       // Type: integer:int64
        0
    ],
    // Type: integer:int64
    "characterId": 0,
    // Type: object
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.EquipItems]
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
