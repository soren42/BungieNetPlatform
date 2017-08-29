<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The same as GroupV2ClanInfo, but includes any investment data.

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
d2ClanProgressions | Dictionary&lt;integer:uint32,[[DestinyProgression|Destiny-DestinyProgression]]&gt; | 
clanCallsign | string | 
clanBannerData | [[ClanBanner|GroupsV2-ClanBanner]] | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:uint32,[[DestinyProgression|Destiny-DestinyProgression]]&gt;
    "d2ClanProgressions": {
        "0": {
            // Type: [[DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:ManifestDefinition:integer:uint32
            "progressionHash": 0,
            // Type: integer:int32
            "dailyProgress": 0,
            // Type: integer:int32
            "dailyLimit": 0,
            // Type: integer:int32
            "weeklyProgress": 0,
            // Type: integer:int32
            "weeklyLimit": 0,
            // Type: integer:int32
            "currentProgress": 0,
            // Type: integer:int32
            "level": 0,
            // Type: integer:int32
            "levelCap": 0,
            // Type: integer:int32
            "stepIndex": 0,
            // Type: integer:int32
            "progressToNextLevel": 0,
            // Type: integer:int32
            "nextLevelAt": 0
        }
    },
    // Type: string
    "clanCallsign": "",
    // Type: [[ClanBanner|GroupsV2-ClanBanner]]
    "clanBannerData": {
        // Type: integer:uint32
        "decalId": 0,
        // Type: integer:uint32
        "decalColorId": 0,
        // Type: integer:uint32
        "decalBackgroundColorId": 0,
        // Type: integer:uint32
        "gonfalonId": 0,
        // Type: integer:uint32
        "gonfalonColorId": 0,
        // Type: integer:uint32
        "gonfalonDetailId": 0,
        // Type: integer:uint32
        "gonfalonDetailColorId": 0
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_GroupsV2-GroupV2ClanInfoAndInvestment.html#schema_GroupsV2-GroupV2ClanInfoAndInvestment
