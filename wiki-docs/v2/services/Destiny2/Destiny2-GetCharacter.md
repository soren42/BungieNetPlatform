<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns character information for the supplied character.

* **URI:** [[/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/|https://www.bungie.net/Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
characterId | integer:int64 | Yes | ID of the character.
destinyMembershipId | integer:int64 | Yes | Destiny membership ID.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | A valid non-BungieNet membership type.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
components | [[DestinyComponentType|Destiny-DestinyComponentType]]:Enum[] | No | A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.

## Example
### Request
GET https://www.bungie.net/Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyCharacterResponse|Destiny-Responses-DestinyCharacterResponse]]
    "Response": {
        // Type: [[SingleComponentResponseOfDestinyInventoryComponent|SingleComponentResponseOfDestinyInventoryComponent]]
        "inventory": {},
        // Type: [[SingleComponentResponseOfDestinyCharacterComponent|SingleComponentResponseOfDestinyCharacterComponent]]
        "character": {},
        // Type: [[SingleComponentResponseOfDestinyCharacterProgressionComponent|SingleComponentResponseOfDestinyCharacterProgressionComponent]]
        "progressions": {},
        // Type: [[SingleComponentResponseOfDestinyCharacterRenderComponent|SingleComponentResponseOfDestinyCharacterRenderComponent]]
        "renderData": {},
        // Type: [[SingleComponentResponseOfDestinyCharacterActivitiesComponent|SingleComponentResponseOfDestinyCharacterActivitiesComponent]]
        "activities": {},
        // Type: [[SingleComponentResponseOfDestinyInventoryComponent|SingleComponentResponseOfDestinyInventoryComponent]]
        "equipment": {},
        // Type: [[SingleComponentResponseOfDestinyKiosksComponent|SingleComponentResponseOfDestinyKiosksComponent]]
        "kiosks": {},
        // Type: [[DestinyItemComponentSetOfint64|DestinyItemComponentSetOfint64]]
        "itemComponents": {}
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetCharacter.html#operation_get_Destiny2-GetCharacter
