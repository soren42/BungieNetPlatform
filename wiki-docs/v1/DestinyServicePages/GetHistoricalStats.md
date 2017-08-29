<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns historical stat information about a given Destiny character.
* **URI:** [[/Destiny/Stats/{membershipType}/{destinyMembershipId}/{characterId}/|https://www.bungie.net/Platform/Destiny/Stats/{membershipType}/{destinyMembershipId}/{characterId}/]]
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
[[periodType|Enums#PeriodType]] | Indicates a specific period type to return.
[[modes|Enums#DestinyActivityModeType]] | Game modes to return. Comma separated.
[[groups|Enums#DestinyStatsGroupType]] | Group of stats to include, otherwise only general stats are returned. Comma separated.
monthstart | First month to return when monthly stats are requested. Use the format YYYY-MM.
monthend | Last month to return when monthly stats are requested. Use the format YYYY-MM.
daystart | First day to return when daily stats are requested. Use the format YYYY-MM-DD.
dayend | Last day to return when daily stats are requested. Use the format YYYY-MM-DD.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Stats/2/4611686018428939884/2305843009214854213/

This response has been truncated to make it easier to see the full structure.
```javascript
{
    "Response": {
        "story": {
            "allTime": { // Note this is an associative array
                "weaponKillsSuper": {
                    "statId": "weaponKillsSuper",
                    "basic": {
                        "value": 1609,
                        "displayValue": "1609"
                    },
                    "pga": {
                        "value": 2.59935379645,
                        "displayValue": "2.6"
                    }
                }
            }
        },
        "raid": {
            "allTime": {
            }
        },
        "patrol": {
            "allTime": {
            }
        },
        "allPvP": {
            "allTime": {
            }
        },
        "allStrikes": {
            "allTime": {
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
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Stats%2f%7bmembershipType%7d%2f%7bdestinyMembershipId%7d%2f%7bcharacterId%7d%2f
