<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the specific item from the current manifest a json object.
* **URI:** [[/Destiny/Manifest/{definitionType}/{definitionId}/|https://www.bungie.net/Platform/Destiny/Manifest/{definitionType}/{definitionId}/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[definitionType|Enums#DestinyDefinitionType]] | The type of definition to return.
definitionId | A valid definitionId.

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.
version | 

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Manifest/1/2167126461/
```javascript
{
    "Response": {
        "data": {
            "requestedId": 2167126461,
            "activity": {
                "activityHash": 2167126461,
                "activityName": "Twilight Gap",
                "activityDescription": "City Perimeter, Earth",
                "icon": "\/common\/destiny_content\/icons\/icon_pvp_d0a189071d8eb5d009f4252bef78b551.png",
                "releaseIcon": "\/img\/misc\/missing_icon.png",
                "releaseTime": 0,
                "activityLevel": 0,
                "completionFlagHash": 0,
                "activityPower": 0,
                "minParty": 1,
                "maxParty": 6,
                "maxPlayers": 12,
                "destinationHash": 2777041980,
                "placeHash": 4088006058,
                "activityTypeHash": 3614615911,
                "tier": -1,
                "pgcrImage": "\/img\/theme\/destiny\/bgs\/pgcrs\/crucible_twilight_gap_2.jpg",
                "rewards": [

                ],
                "skulls": [

                ]
            }
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
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Manifest%2f%7btype%7d%2f%7bid%7d%2f
