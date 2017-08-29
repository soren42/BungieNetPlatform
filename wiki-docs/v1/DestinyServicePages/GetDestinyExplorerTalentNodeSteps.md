<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Advanced search for TalentNodes.
* **URI:** [[/Destiny/Explorer/TalentNodeSteps/|https://www.bungie.net/Platform/Destiny/Explorer/TalentNodeSteps/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Description
---- | -----------
page | The current page to return. Starts at 1.
count | The number of results per page. Default is 10.
name | Filter by name.
direction | 
weaponPerformance | 
impactEffects | 
guardianAttributes | 
lightAbilities | 
[[damageTypes|Enums#DamageType]] | Filter by damage type.
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Explorer/TalentNodeSteps/
```javascript
{
    "Response": {
        "data": {
            "stepHashes": [
                3449542313,
                2187318329,
                556087844,
                2230841297,
                1927582060,
                1788601689,
                1098891289,
                2641311924,
                912099836,
                1221123134
            ],
            "totalResults": "469",
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
