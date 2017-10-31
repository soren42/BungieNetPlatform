<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.

* **URI:** [[/Destiny2/Actions/Items/EquipItems/|https://www.bungie.net/Platform/Destiny2/Actions/Items/EquipItems/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** MoveEquipDestinyItems
* **Officially Supported:** Yes

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/Destiny2/Actions/Items/EquipItems/
```javascript
{
    // Type: integer:int64[]
    "itemIds": [
       // Type: integer:int64
        0
    ],
    // Type: integer:int64
    "characterId": 0,
    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
    "membershipType": 0,
    // Type: [[DestinyItemSetActionRequest|Destiny-Requests-Actions-DestinyItemSetActionRequest]]
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyEquipItemResults|Destiny-DestinyEquipItemResults]]
    "Response": {
        // Type: [[DestinyEquipItemResult|Destiny-DestinyEquipItemResult]][]
        "equipResults": [
           // Type: [[DestinyEquipItemResult|Destiny-DestinyEquipItemResult]]
            {
                // Type: integer:int64
                "itemInstanceId": 0,
                // Type: [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum
                "equipStatus": {}
            }
        ]
    },
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
1. https://bungie-net.github.io/multi/operation_post_Destiny2-EquipItems.html#operation_post_Destiny2-EquipItems
