<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns progression information for a given Destiny character.
* **URI:** [[/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Progression/|https://www.bungie.net/Platform/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Progression/]]
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
GET https://www.bungie.net/Platform/Destiny/2/Account/4611686018428939884/Character/2305843009221011538/Progression/
```javascript
{
    "Response": {
        "data": {
            "progressions": [
                {
                    "dailyProgress": -5,
                    "weeklyProgress": 0,
                    "currentProgress": 11,
                    "level": 0,
                    "step": 0,
                    "progressToNextLevel": 11,
                    "nextLevelAt": 50,
                    "progressionHash": 3122728759
                }
            ],
            "levelProgression": {
                "dailyProgress": 30221,
                "weeklyProgress": 397956,
                "currentProgress": 11734708,
                "level": 146,
                "step": 0,
                "progressToNextLevel": 54708,
                "nextLevelAt": 80000,
                "progressionHash": 2030054750
            },
            "baseCharacterLevel": 20,
            "isPrestigeLevel": true,
            "factionProgressionHash": 2778795080,
            "percentToNextLevel": 0
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
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=%7bmembershipType%7d%2fAccount%2f%7bdestinyMembershipId%7d%2fCharacter%2f%7bcharacterId%7d%2fProgression%2f
