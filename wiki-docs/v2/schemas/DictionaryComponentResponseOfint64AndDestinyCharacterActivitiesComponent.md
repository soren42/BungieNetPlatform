<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:int64,[[DestinyCharacterActivitiesComponent|Destiny-Entities-Characters-DestinyCharacterActivitiesComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:int64,[[DestinyCharacterActivitiesComponent|Destiny-Entities-Characters-DestinyCharacterActivitiesComponent]]&gt;
    "data": {
        "0": {
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
                    "difficultyTier": 0
                }
            ],
            // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
            "currentActivityHash": 0,
            // Type: [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32
            "currentActivityModeHash": 0,
            // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
            "lastCompletedStoryHash": 0
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent.html#schema_DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent
