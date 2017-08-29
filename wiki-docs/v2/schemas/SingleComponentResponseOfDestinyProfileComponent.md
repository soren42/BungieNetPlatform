<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyProfileComponent|Destiny-Entities-Profiles-DestinyProfileComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyProfileComponent|Destiny-Entities-Profiles-DestinyProfileComponent]]
    "data": {
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
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyProfileComponent.html#schema_SingleComponentResponseOfDestinyProfileComponent
