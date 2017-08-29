<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns leaderboard stats compared against friends. Note you may need to re-authenticate with PSN/Xbox in order to see full rankings.
* **URI:** [[/Destiny/Stats/Leaderboards/{membershipType}/{destinyMembershipId}/|https://www.bungie.net/Platform/Destiny/Stats/Leaderboards/{membershipType}/{destinyMembershipId}/]]
* **Method:** GET
* **Accessibility:** Private
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
[[modes|Enums#DestinyActivityModeType]] | Game modes to return. Comma separated.
statid | 
maxtop | 

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Stats/Leaderboards/2/4611686018428939884/

This response has been truncated to make it easier to see the full structure.
```javascript
{
    "Response": {
        "focusMembershipId": "4611686018428939884",
        "story": { // Note this is an associative array
            "lbSingleGameKills": {
                "statId": "lbSingleGameKills",
                "entries": [
                    {
                        "rank": 1,
                        "player": {
                            "destinyUserInfo": {
                                "iconPath": "\/common\/destiny_content\/icons\/552621dd6b31a1d088d72e640b86ebb8.jpg",
                                "membershipType": 2,
                                "membershipId": "4611686018428939884",
                                "displayName": "lowlines"
                            },
                            "characterClass": "Hunter",
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
                        "characterId": "2305843009221011538",
                        "value": {
                            "basic": {
                                "value": 1011,
                                "displayValue": "1011"
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
