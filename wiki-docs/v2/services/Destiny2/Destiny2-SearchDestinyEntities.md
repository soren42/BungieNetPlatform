<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets a page list of Destiny items.

* **URI:** [[/Destiny2/Armory/Search/{type}/{searchTerm}/|https://bungie.net/Platform/Destiny2/Armory/Search/{type}/{searchTerm}/]]
* **Basepath:** https://bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
searchTerm | string | Yes | The string to use when searching for Destiny entities.
type | string | Yes | The type of entity for whom you would like results.  These correspond to the entity's definition contract name.  For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'.  PREVIEW: This endpoint is still in beta, and may experience rough edges.  The schema is tentatively in final form, but there may be bugs that prevent desirable operation.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
page | integer:int32 | No | Page number to return, starting with 0.

## Example
### Request
GET https://bungie.net/Platform/Destiny2/Armory/Search/{type}/{searchTerm}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyEntitySearchResult|Destiny-Definitions-DestinyEntitySearchResult]]:Definition
    "Response": {
        // Type: string[]
        "suggestedWords": [
           // Type: string
            ""
        ],
        // Type: [[SearchResultOfDestinyEntitySearchResultItem|SearchResultOfDestinyEntitySearchResultItem]]
        "results": {
            // Type: [[DestinyEntitySearchResultItem|Destiny-Definitions-DestinyEntitySearchResultItem]]:Definition[]
            "results": [
               // Type: [[DestinyEntitySearchResultItem|Destiny-Definitions-DestinyEntitySearchResultItem]]:Definition
                {
                    // Type: integer:uint32
                    "hash": 0,
                    // Type: string
                    "entityType": "",
                    // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
                    "displayProperties": {
                        // Type: string
                        "description": "",
                        // Type: string
                        "name": "",
                        // Type: string
                        "icon": "",
                        // Type: boolean
                        "hasIcon": false
                    },
                    // Type: number:double
                    "weight": 0
                }
            ],
            // Type: integer:int32
            "totalResults": 0,
            // Type: boolean
            "hasMore": false,
            // Type: [[PagedQuery|Queries-PagedQuery]]
            "query": {
                // Type: integer:int32
                "itemsPerPage": 0,
                // Type: integer:int32
                "currentPage": 0,
                // Type: string
                "requestContinuationToken": ""
            },
            // Type: string
            "replacementContinuationToken": "",
            // Type: boolean
            "useTotalResults": false
        }
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-SearchDestinyEntities.html#operation_get_Destiny2-SearchDestinyEntities
