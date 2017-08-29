<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns activity progress for a given character.
* **URI:** [[/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Activities/|https://www.bungie.net/Platform/Destiny/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Activities/]]
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
GET https://www.bungie.net/Platform/Destiny/TigerPSN/Account/4611686018428939884/Character/2305843009221011538/Activities/
```javascript
{
    "Response": {
        "data": {
            "dateActivityStarted": "2015-05-25T15:30:30Z",
            "available": [
                {
                    "activityHash": 2330516073,
                    "isNew": false,
                    "canLead": true,
                    "canJoin": true,
                    "isCompleted": false,
                    "isVisible": true
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
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=%7bmembershipType%7d%2fAccount%2f%7bdestinyMembershipId%7d%2fCharacter%2f%7bcharacterId%7d%2fActivities%2f
