<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns leaderboard stats for a given character compared against friends. Note you may need to re-authenticate with PSN/Xbox in order to see full rankings.
* **URI:** [[/Destiny/Stats/Leaderboards/{membershipType}/{destinyMembershipId}/{characterId}/|https://www.bungie.net/Platform/Destiny/Stats/Leaderboards/{membershipType}/{destinyMembershipId}/{characterId}/]]
* **Method:** GET
* **Accessibility:** Private
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
[[modes|Enums#DestinyActivityModeType]] | Game modes to return. Comma separated.
statid | 
maxtop | 

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Stats/Leaderboards/2/4611686018428939884/2305843009214854213/

This response has been truncated to make it easier to see the full structure.
```javascript
{
    "Response": {
        "focusMembershipId": "4611686018428939884",
        "focusCharacterId": "2305843009214854213",
        "story": { // Note this is an associative array
            "lbSingleGameKills": {
                "statId": "lbSingleGameKills",
                "entries": [
                    {
                        "rank": 1,
                        "player": {
                            "destinyUserInfo": {
                                "iconPath": "\/common\/destiny_content\/icons\/a9ac444de02308d1410af8a0c201d177.jpg",
                                "membershipType": 2,
                                "membershipId": "4611686018428939884",
                                "displayName": "lowlines"
                            },
                            "characterClass": "Titan",
                            "characterLevel": 34,
                            "bungieNetUserInfo": {
                                "iconPath": "\/img\/profile\/avatars\/bungieday_03.jpg",
                                "membershipType": 254,
                                "membershipId": "5197148",
                                "displayName": "lowlines"
                            },
                            "clanName": "Darwinites",
                            "clanTag": "DRWI"
                        },
                        "characterId": "2305843009214854213",
                        "value": {
                            "basic": {
                                "value": 936,
                                "displayValue": "936"
                            }
                        }
                    }
                ]
            }
        },
        "raid": {
        },
        "patrol": {
        },
        "allPvP": {
        },
        "allStrikes": {
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
