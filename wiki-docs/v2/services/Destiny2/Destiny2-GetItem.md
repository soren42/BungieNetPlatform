<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.

* **URI:** [[/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Item/{itemInstanceId}/|https://www.bungie.net/Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Item/{itemInstanceId}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
destinyMembershipId | integer:int64 | Yes | The membership ID of the destiny profile.
itemInstanceId | integer:int64 | Yes | The Instance ID of the destiny item.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | A valid non-BungieNet membership type.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
components | [[DestinyComponentType|Destiny-DestinyComponentType]]:Enum[] | No | A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.

## Example
### Request
GET https://www.bungie.net/Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Item/{itemInstanceId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyItemResponse|Destiny-Responses-DestinyItemResponse]]
    "Response": {
        // Type: integer:int64:nullable
        "characterId": 0,
        // Type: [[SingleComponentResponseOfDestinyItemComponent|SingleComponentResponseOfDestinyItemComponent]]
        "item": {},
        // Type: [[SingleComponentResponseOfDestinyItemInstanceComponent|SingleComponentResponseOfDestinyItemInstanceComponent]]
        "instance": {},
        // Type: [[SingleComponentResponseOfDestinyItemObjectivesComponent|SingleComponentResponseOfDestinyItemObjectivesComponent]]
        "objectives": {},
        // Type: [[SingleComponentResponseOfDestinyItemPerksComponent|SingleComponentResponseOfDestinyItemPerksComponent]]
        "perks": {},
        // Type: [[SingleComponentResponseOfDestinyItemRenderComponent|SingleComponentResponseOfDestinyItemRenderComponent]]
        "renderData": {},
        // Type: [[SingleComponentResponseOfDestinyItemStatsComponent|SingleComponentResponseOfDestinyItemStatsComponent]]
        "stats": {},
        // Type: [[SingleComponentResponseOfDestinyItemTalentGridComponent|SingleComponentResponseOfDestinyItemTalentGridComponent]]
        "talentGrid": {},
        // Type: [[SingleComponentResponseOfDestinyItemSocketsComponent|SingleComponentResponseOfDestinyItemSocketsComponent]]
        "sockets": {}
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetItem.html#operation_get_Destiny2-GetItem
