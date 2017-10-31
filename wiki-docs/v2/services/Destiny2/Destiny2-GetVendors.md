<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Get currently available vendors. PREVIEW: This service is not yet active, but we are returning the planned schema of the endpoint for review, comment, and preparation for its eventual implementation.

* **URI:** [[/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/|https://www.bungie.net/Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
characterId | integer:int64 | Yes | The Destiny Character ID of the character for whom we're getting vendor info.
destinyMembershipId | integer:int64 | Yes | Destiny membership ID of another user. You may be denied.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | A valid non-BungieNet membership type.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
components | [[DestinyComponentType|Destiny-DestinyComponentType]]:Enum[] | No | A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.

## Example
### Request
GET https://www.bungie.net/Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyVendorResponse|Destiny-Responses-DestinyVendorResponse]][]
    "Response": [
       // Type: [[DestinyVendorResponse|Destiny-Responses-DestinyVendorResponse]]
        {
            // Type: [[SingleComponentResponseOfDestinyVendorComponent|SingleComponentResponseOfDestinyVendorComponent]]
            "vendor": {},
            // Type: [[SingleComponentResponseOfDestinyVendorCategoriesComponent|SingleComponentResponseOfDestinyVendorCategoriesComponent]]
            "categories": {},
            // Type: [[DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent|DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent]]
            "sales": {},
            // Type: [[DestinyItemComponentSetOfint32|DestinyItemComponentSetOfint32]]
            "items": {}
        }
    ],
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetVendors.html#operation_get_Destiny2-GetVendors
