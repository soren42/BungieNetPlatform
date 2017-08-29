<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Generic

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:int64,[[DestinyCharacterComponent|Destiny-Entities-Characters-DestinyCharacterComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:int64,[[DestinyCharacterComponent|Destiny-Entities-Characters-DestinyCharacterComponent]]&gt;
    "data": {
        "0": {
            // Type: integer:int64
            "membershipId": 0,
            // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
            "membershipType": 0,
            // Type: integer:int64
            "characterId": 0,
            // Type: string:date-time
            "dateLastPlayed": "",
            // Type: integer:int64
            "minutesPlayedThisSession": 0,
            // Type: integer:int64
            "minutesPlayedTotal": 0,
            // Type: integer:int32
            "light": 0,
            // Type: Dictionary&lt;integer:uint32,integer:int32&gt;
            "stats": {
                "0": 0
            },
            // Type: [[DestinyRaceDefinition|Destiny-Definitions-DestinyRaceDefinition]]:ManifestDefinition:integer:uint32
            "raceHash": 0,
            // Type: [[DestinyGenderDefinition|Destiny-Definitions-DestinyGenderDefinition]]:ManifestDefinition:integer:uint32
            "genderHash": 0,
            // Type: [[DestinyClassDefinition|Destiny-Definitions-DestinyClassDefinition]]:ManifestDefinition:integer:uint32
            "classHash": 0,
            // Type: [[DestinyRace|Destiny-DestinyRace]]:Enum
            "raceType": 0,
            // Type: [[DestinyClass|Destiny-DestinyClass]]:Enum
            "classType": 0,
            // Type: [[DestinyGender|Destiny-DestinyGender]]:Enum
            "genderType": 0,
            // Type: string
            "emblemPath": "",
            // Type: string
            "emblemBackgroundPath": "",
            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
            "emblemHash": 0,
            // Type: [[DestinyProgression|Destiny-DestinyProgression]]
            "levelProgression": {
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
            },
            // Type: integer:int32
            "baseCharacterLevel": 0,
            // Type: number:float
            "percentToNextLevel": 0
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfint64AndDestinyCharacterComponent.html#schema_DictionaryComponentResponseOfint64AndDestinyCharacterComponent
