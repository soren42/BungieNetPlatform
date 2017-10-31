<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.

* **URI:** [[/Destiny2/Manifest/{entityType}/{hashIdentifier}/|https://www.bungie.net/Platform/Destiny2/Manifest/{entityType}/{hashIdentifier}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
entityType | string | Yes | The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is tentatively in final form, but there may be bugs that prevent desirable operation.
hashIdentifier | integer:uint32 | Yes | The hash identifier for the specific Entity you want returned.

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/Destiny2/Manifest/{entityType}/{hashIdentifier}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyDefinition|Destiny-Definitions-DestinyDefinition]]:Definition
    "Response": {
        // Type: integer:uint32
        "hash": 0,
        // Type: integer:int32
        "index": 0,
        // Type: boolean
        "redacted": false
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetDestinyEntityDefinition.html#operation_get_Destiny2-GetDestinyEntityDefinition
