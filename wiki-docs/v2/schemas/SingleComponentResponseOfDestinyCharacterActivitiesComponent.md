<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyCharacterActivitiesComponent|Destiny-Entities-Characters-DestinyCharacterActivitiesComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyCharacterActivitiesComponent|Destiny-Entities-Characters-DestinyCharacterActivitiesComponent]]
    "data": {
        // Type: string:date-time
        "dateActivityStarted": "",
        // Type: [[DestinyActivity|Destiny-DestinyActivity]][]
        "availableActivities": [
           // Type: [[DestinyActivity|Destiny-DestinyActivity]]
            {
                // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
                "activityHash": 0,
                // Type: boolean
                "isNew": false,
                // Type: boolean
                "canLead": false,
                // Type: boolean
                "canJoin": false,
                // Type: boolean
                "isCompleted": false,
                // Type: boolean
                "isVisible": false,
                // Type: integer:int32:nullable
                "displayLevel": 0,
                // Type: integer:int32:nullable
                "recommendedLight": 0,
                // Type: [[DestinyActivityDifficultyTier|Destiny-DestinyActivityDifficultyTier]]:Enum
                "difficultyTier": {}
            }
        ],
        // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
        "currentActivityHash": 0,
        // Type: [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32
        "currentActivityModeHash": 0,
        // Type: [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:int32:nullable
        "currentActivityModeType": 0,
        // Type: [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32[]
        "currentActivityModeHashes": [
           // Type: integer:uint32
            0
        ],
        // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum[]
        "currentActivityModeTypes": [
           // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
            0
        ],
        // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32:nullable
        "currentPlaylistActivityHash": 0,
        // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
        "lastCompletedStoryHash": 0
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyCharacterActivitiesComponent.html#schema_SingleComponentResponseOfDestinyCharacterActivitiesComponent
