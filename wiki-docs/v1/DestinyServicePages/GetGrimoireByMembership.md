<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the Grimoire for a given account.
* **URI:** [[/Destiny/Vanguard/Grimoire/{membershipType}/{destinyMembershipId}/|https://www.bungie.net/Platform/Destiny/Vanguard/Grimoire/{membershipType}/{destinyMembershipId}/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.
destinyMembershipId | A valid destinyMembershipId.

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.
flavour | Indicates flavour stats should be included with player card data. More testing needed.
single | Return data for a single cardId.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Vanguard/Grimoire/2/4611686018428939884/?single=101010
```javascript
{
    "Response": {
        "data": {
            "score": 3475,
            "cardCollection": [
                {
                    "cardId": 101010,
                    "score": 40,
                    "points": 0,
                    "statisticCollection": [
                        {
                            "statNumber": 1,
                            "value": 100041,
                            "displayValue": "100041",
                            "rankCollection": [
                                {
                                    "rank": 1,
                                    "points": 5
                                },
                                {
                                    "rank": 2,
                                    "points": 5
                                },
                                {
                                    "rank": 3,
                                    "points": 5
                                }
                            ]
                        },
                        {
                            "statNumber": 2,
                            "value": 4196,
                            "displayValue": "4196",
                            "rankCollection": [
                                {
                                    "rank": 1,
                                    "points": 5
                                },
                                {
                                    "rank": 2,
                                    "points": 5
                                }
                            ]
                        },
                        {
                            "statNumber": 3,
                            "value": 5904,
                            "displayValue": "5904",
                            "rankCollection": [
                                {
                                    "rank": 1,
                                    "points": 5
                                },
                                {
                                    "rank": 2,
                                    "points": 5
                                },
                                {
                                    "rank": 3,
                                    "points": 5
                                }
                            ]
                        }
                    ]
                }
            ],
            "cardsToHide": [

            ],
            "bonuses": [

            ]
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
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Vanguard%2fGrimoire%2f%7bmembershipType%7d%2f%7bmembershipId%7d%2f
