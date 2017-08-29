<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the equivalent of the [[DestinyHistoricalStatsDefinition]] with the statId as the key.
* **URI:** [[/Destiny/Stats/Definition/|https://www.bungie.net/Platform/Destiny/Stats/Definition/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Stats/Definition/
```javascript
{
    "Response": {
        "activitiesCleared": {
            "statId": "activitiesCleared",
            "group": 1,
            "periodTypes": [
                3,
                2,
                1
            ],
            "modes": [
                7,
                6,
                4,
                2,
                3,
                17,
                16,
                18,
                20,
                22,
                21
            ],
            "category": 0,
            "statName": "Activities Cleared",
            "statDescription": "Successful completions of this mission type.",
            "unitType": 1,
            "unitLabel": "",
            "weight": 1
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
