<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
destinyUserInfo | [[UserInfoCard|User-UserInfoCard]] | Details about the player as they are known in game (platform display name, Destiny emblem)
characterClass | string | Class of the character if applicable and available.
characterLevel | integer:int32 | Level of the character if available. Zero if it is not available.
lightLevel | integer:int32 | Light Level of the character if available. Zero if it is not available.
bungieNetUserInfo | [[UserInfoCard|User-UserInfoCard]] | Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
clanName | string | Current clan name for the player. This value may be null or an empty string if the user does not have a clan.
clanTag | string | Current clan tag for the player. This value may be null or an empty string if the user does not have a clan.

## Example
```javascript
{
    // Type: [[UserInfoCard|User-UserInfoCard]]
    "destinyUserInfo": {},
    // Type: string
    "characterClass": "",
    // Type: integer:int32
    "characterLevel": 0,
    // Type: integer:int32
    "lightLevel": 0,
    // Type: [[UserInfoCard|User-UserInfoCard]]
    "bungieNetUserInfo": {},
    // Type: string
    "clanName": "",
    // Type: string
    "clanTag": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyPlayer.html#schema_Destiny-HistoricalStats-DestinyPlayer
