<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Transfer an item to/from your vault.  You must have a valid Destiny account.  You must also pass BOTH a reference AND an instance ID if it's an instanced item.  itshappening.gif

* **URI:** [[/Destiny2/Actions/Items/TransferItem/|https://bungie.net/Platform/Destiny2/Actions/Items/TransferItem/]]
* **Basepath:** https://bungie.net/Platform
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
POST https://bungie.net/Platform/Destiny2/Actions/Items/TransferItem/
```javascript
{
    // Type: integer:uint32
    "itemReferenceHash": 0,
    // Type: integer:int32
    "stackSize": 0,
    // Type: boolean
    "transferToVault": false,
    // Type: integer:int64
    "itemId": 0,
    // Type: integer:int64
    "characterId": 0,
    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
    "membershipType": 0,
    // Type: [[DestinyItemTransferRequest|Destiny-Requests-DestinyItemTransferRequest]]
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: integer:int32
    "Response": 0,
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
1. https://bungie-net.github.io/multi/operation_post_Destiny2-TransferItem.html#operation_post_Destiny2-TransferItem
