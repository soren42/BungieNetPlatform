<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets all activities the character has participated in together with aggregate statistics for those activities.
* **URI:** [[/Destiny/Stats/AggregateActivityStats/{membershipType}/{destinyMembershipId}/{characterId}/|https://www.bungie.net/Platform/Destiny/Stats/AggregateActivityStats/{membershipType}/{destinyMembershipId}/{characterId}/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.
destinyMembershipId | A valid destinyMembershipId.
characterId | A valid characterId that is associated with the given account.

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Stats/AggregateActivityStats/2/4611686018428939884/2305843009214854213/

This response has been truncated to make it easier to see the full structure.
```javascript
{
    "Response": {
        "data": {
            "activities": [
                {
                    "activityHash": 2167126461,
                    "values": { // Note this is an associative array
                        "activityCompletions": {
                            "statId": "activityCompletions",
                            "basic": {
                                "value": 6,
                                "displayValue": "6"
                            }
                        }
                    }
                }
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
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Stats%2fAggregateActivityStats%2f%7bmembershipType%7d%2f%7bdestinyMembershipId%7d%2f%7bcharacterId%7d%2f
