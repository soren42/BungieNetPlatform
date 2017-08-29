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
                // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
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
                "difficultyTier": 0
            }
        ],
        // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
        "currentActivityHash": 0,
        // Type: [[DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:ManifestDefinition:integer:uint32
        "currentActivityModeHash": 0,
        // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
        "lastCompletedStoryHash": 0
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyCharacterActivitiesComponent.html#schema_SingleComponentResponseOfDestinyCharacterActivitiesComponent
