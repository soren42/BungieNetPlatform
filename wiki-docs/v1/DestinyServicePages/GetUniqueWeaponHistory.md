<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets details about unique weapon usage, including all exotic weapons.
* **URI:** [[/Destiny/Stats/UniqueWeapons/{membershipType}/{destinyMembershipId}/{characterId}/|https://www.bungie.net/Platform/Destiny/Stats/UniqueWeapons/{membershipType}/{destinyMembershipId}/{characterId}/]]
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
GET https://www.bungie.net/Platform/Destiny/Stats/UniqueWeapons/2/4611686018428939884/2305843009214854213/
```javascript
{
    "Response": {
        "data": {
            "weapons": [
                {
                    "referenceId": 2344494718,
                    "values": {
                        "uniqueWeaponKills": {
                            "statId": "uniqueWeaponKills",
                            "basic": {
                                "value": 422,
                                "displayValue": "422"
                            }
                        },
                        "uniqueWeaponPrecisionKills": {
                            "statId": "uniqueWeaponPrecisionKills",
                            "basic": {
                                "value": 20,
                                "displayValue": "20"
                            }
                        },
                        "uniqueWeaponKillsPrecisionKills": {
                            "statId": "uniqueWeaponKillsPrecisionKills",
                            "basic": {
                                "value": 0.0473933649289,
                                "displayValue": "5%"
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
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Stats%2fUniqueWeapons%2f%7bmembershipType%7d%2f%7bdestinyMembershipId%7d%2f%7bcharacterId%7d%2f
