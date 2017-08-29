<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Advanced InventoryItem search.
* **URI:** [[/Destiny/Explorer/Items/|https://www.bungie.net/Platform/Destiny/Explorer/Items/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Description
---- | -----------
tpage | 
count | The number of results to return. Default is 10.
name | Filter by name.
[[order|Enums#DestinyExplorerOrderBy]] | Order results.
orderstathash | 
direction | 
[[rarity|Enums#TierType]] | Filter by item rarity.
step | 
categories | 
weaponPerformance | 
impactEffects | 
guardianAttributes | 
lightAbilities | 
[[damageTypes|Enums#DamageType]] | Filter by damage type.
matchrandomsteps | 
definitions | Include definitions in the response. Use while testing.
sourcecat | 
sourcehash | 

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Explorer/Items/
```javascript
{
    "Response": {
        "data": {
            "itemHashes": [
                2162108613,
                2942304051,
                3006793116,
                2982560407,
                2323518127,
                2726580011,
                360567933,
                1724270993,
                1481627858,
                1672674592
            ],
            "totalResults": "2311",
            "hasMore": true,
            "query": {
                "itemsPerPage": 10,
                "currentPage": 0
            },
            "useTotalResults": true
        }
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {

    }
}
```

## References
