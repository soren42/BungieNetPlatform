<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Insert a plug into a socketed item.  I know how it sounds, but I assure you it's much more G-rated than you might be guessing.  We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so.  You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.  PREVIEW: This service is not yet active, but we are returning the planned schema of the endpoint for review, comment, and preparation for its eventual implementation.

* **URI:** [[/Destiny2/Actions/Items/InsertSocketPlug/|https://bungie.net/Platform/Destiny2/Actions/Items/InsertSocketPlug/]]
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
POST https://bungie.net/Platform/Destiny2/Actions/Items/InsertSocketPlug/
```javascript
{
    // Type: integer:int64
    "itemId": 0,
    // Type: integer:int64
    "characterId": 0,
    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
    "membershipType": 0,
    // Type: [[DestinyItemActionRequest|Destiny-Requests-Actions-DestinyItemActionRequest]]
    // Type: [[DestinyItemActionRequest|Destiny-Requests-Actions-DestinyItemActionRequest]]
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
1. https://bungie-net.github.io/multi/operation_post_Destiny2-InsertSocketPlug.html#operation_post_Destiny2-InsertSocketPlug
