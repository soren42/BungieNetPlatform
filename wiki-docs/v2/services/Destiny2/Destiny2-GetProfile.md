<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns Destiny Profile information for the supplied membership.

* **URI:** [[/Destiny2/{membershipType}/Profile/{destinyMembershipId}/|https://www.bungie.net/Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
destinyMembershipId | integer:int64 | Yes | Destiny membership ID.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | A valid non-BungieNet membership type.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
components | [[DestinyComponentType|Destiny-DestinyComponentType]]:Enum[] | No | A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.

## Example
### Request
GET https://www.bungie.net/Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyProfileResponse|Destiny-Responses-DestinyProfileResponse]]
    "Response": {
        // Type: [[SingleComponentResponseOfDestinyVendorReceiptsComponent|SingleComponentResponseOfDestinyVendorReceiptsComponent]]
        "vendorReceipts": {},
        // Type: [[SingleComponentResponseOfDestinyInventoryComponent|SingleComponentResponseOfDestinyInventoryComponent]]
        "profileInventory": {},
        // Type: [[SingleComponentResponseOfDestinyInventoryComponent|SingleComponentResponseOfDestinyInventoryComponent]]
        "profileCurrencies": {},
        // Type: [[SingleComponentResponseOfDestinyProfileComponent|SingleComponentResponseOfDestinyProfileComponent]]
        "profile": {},
        // Type: [[SingleComponentResponseOfDestinyKiosksComponent|SingleComponentResponseOfDestinyKiosksComponent]]
        "profileKiosks": {},
        // Type: [[DictionaryComponentResponseOfint64AndDestinyCharacterComponent|DictionaryComponentResponseOfint64AndDestinyCharacterComponent]]
        "characters": {},
        // Type: [[DictionaryComponentResponseOfint64AndDestinyInventoryComponent|DictionaryComponentResponseOfint64AndDestinyInventoryComponent]]
        "characterInventories": {},
        // Type: [[DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent|DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent]]
        "characterProgressions": {},
        // Type: [[DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent|DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent]]
        "characterRenderData": {},
        // Type: [[DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent|DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent]]
        "characterActivities": {},
        // Type: [[DictionaryComponentResponseOfint64AndDestinyInventoryComponent|DictionaryComponentResponseOfint64AndDestinyInventoryComponent]]
        "characterEquipment": {},
        // Type: [[DictionaryComponentResponseOfint64AndDestinyKiosksComponent|DictionaryComponentResponseOfint64AndDestinyKiosksComponent]]
        "characterKiosks": {},
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetProfile.html#operation_get_Destiny2-GetProfile
