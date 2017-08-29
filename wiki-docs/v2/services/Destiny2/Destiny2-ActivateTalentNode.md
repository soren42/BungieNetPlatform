<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Activate a Talent Node.  Chill out, everyone: we haven't decided yet whether this will be able to activate nodes with costs, but if we do it will require special scope permission for an application attempting to do so.  You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.  PREVIEW: This service is not actually implemented yet, but we are returning the planned schema of the endpoint for review, comment, and preparation for its eventual implementation.

* **URI:** [[/Destiny2/Actions/Items/ActivateTalentNode/|https://bungie.net/Platform/Destiny2/Actions/Items/ActivateTalentNode/]]
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
POST https://bungie.net/Platform/Destiny2/Actions/Items/ActivateTalentNode/
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
1. https://bungie-net.github.io/multi/operation_post_Destiny2-ActivateTalentNode.html#operation_post_Destiny2-ActivateTalentNode
