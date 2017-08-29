<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the numerical id of a player based on their display name, zero if not found.
* **URI:** [[/Destiny/{membershipType}/Stats/GetMembershipIdByDisplayName/{displayName}/|https://www.bungie.net/Platform/Destiny/{membershipType}/Stats/GetMembershipIdByDisplayName/{displayName}/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.
displayName | A valid PSN Id or Gamertag display name.

### Query String Parameters
Name | Description
---- | -----------
ignorecase | Default is false when not specified. True to cause a caseless search to be used.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/2/Stats/GetMembershipIdByDisplayName/lowlines/
```javascript
{
    "Response": "4611686018428939884",
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {

    }
}
```

## References
1. http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=%7bmembershipType%7d%2fStats%2fGetMembershipIdByDisplayName%2f%7bdisplayName%7d%2f
