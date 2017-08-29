<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of players by username and platform.
* **URI:** [[/Destiny/SearchDestinyPlayer/{membershipType}/{displayName}/|https://www.bungie.net/Platform/Destiny/SearchDestinyPlayer/{membershipType}/{displayName}/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.
displayName | A valid display name to search for.

### Query String Parameters
None

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/SearchDestinyPlayer/2/lowlines/
```javascript
{
    "Response": [
        {
            "iconPath": "\/img\/theme\/destiny\/icons\/icon_psn.png",
            "membershipType": 2,
            "membershipId": "4611686018428939884",
            "displayName": "lowlines"
        }
    ],
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {

    }
}
```

## References
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=SearchDestinyPlayer%2f%7bmembershipType%7d%2f%7bdisplayName%7d%2f
