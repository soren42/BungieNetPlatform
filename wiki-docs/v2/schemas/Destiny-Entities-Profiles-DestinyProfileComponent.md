<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The most essential summary information about a Profile (in Destiny 1, we called these &quot;Accounts&quot;).

## Schema
* **Type:** Class
* **Component Type Dependency:** Profiles

## Properties
Name | Type | Description
---- | ---- | -----------
userInfo | [[UserInfoCard|User-UserInfoCard]] | If you need to render the Profile (their platform name, icon, etc...) somewhere, this property containsthat information.
dateLastPlayed | string:date-time | The last time the user played with any character on this Profile.
versionsOwned | [[DestinyGameVersions|Destiny-DestinyGameVersions]]:Enum | If you want to know what expansions they own, this will contain that data.
characterIds | integer:int64[] | A list of the character IDs, for further querying on your part.

## Example
```javascript
{
    // Type: [[UserInfoCard|User-UserInfoCard]]
    "userInfo": {
        // Type: string
        "supplementalDisplayName": "",
        // Type: string
        "iconPath": "",
        // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
        "membershipType": 0,
        // Type: integer:int64
        "membershipId": 0,
        // Type: string
        "displayName": ""
    },
    // Type: string:date-time
    "dateLastPlayed": "",
    // Type: [[DestinyGameVersions|Destiny-DestinyGameVersions]]:Enum
    "versionsOwned": 0,
    // Type: integer:int64[]
    "characterIds": [
       // Type: integer:int64
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Profiles-DestinyProfileComponent.html#schema_Destiny-Entities-Profiles-DestinyProfileComponent
