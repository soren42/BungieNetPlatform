<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Advanced InventoryItem search.

* **URI:** [[/Destiny/Explorer/Items/|https://bungie.net/d1/Platform/Destiny/Explorer/Items/]]
* **Basepath:** https://bungie.net/d1/Platform
* **Method:** GET
* **Service:** [[Destiny|Endpoints#Destiny]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
count | integer:int32 | No | The number of results to return. Default is 10.
name | string | No | Filter by name.
order | [#/components/schemas/Destiny.ExplorerOrderBy] | No | Order results.
rarity | [#/components/schemas/TierType] | No | Filter by item rarity.
damageTypes | [#/components/schemas/DamageType][] | No | Filter by damage type.
definitions | boolean | No | Include definitions in the response. Use while testing.
rarity | string | No | 
step | string | No | 
categories | string | No | 
weaponPerformance | string | No | 
impactEffects | string | No | 
guardianAttributes | string | No | 
lightAbilities | string | No | 
damageTypes | string | No | 
matchrandomsteps | string | No | 
definitions | string | No | 
sourcecat | string | No | 
sourcehash | string | No | 

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/Explorer/Items/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetDestinyExplorerItems]
    "Response": null,
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
