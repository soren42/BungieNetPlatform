<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.

* **URI:** [[/Destiny2/Actions/Items/PullFromPostmaster/|https://www.bungie.net/Platform/Destiny2/Actions/Items/PullFromPostmaster/]]
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
POST https://www.bungie.net/Platform/Destiny2/Actions/Items/PullFromPostmaster/
```javascript
{
    // Type: integer:uint32
    "itemReferenceHash": 0,
    // Type: integer:int32
    "stackSize": 0,
    // Type: integer:int64
    "itemId": 0,
    // Type: integer:int64
    "characterId": 0,
    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
    "membershipType": 0,
    // Type: [[DestinyPostmasterTransferRequest|Destiny-Requests-Actions-DestinyPostmasterTransferRequest]]
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
1. https://bungie-net.github.io/multi/operation_post_Destiny2-PullFromPostmaster.html#operation_post_Destiny2-PullFromPostmaster
