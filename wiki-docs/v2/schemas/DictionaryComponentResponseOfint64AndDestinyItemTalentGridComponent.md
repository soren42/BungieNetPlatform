<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:int64,[[DestinyItemTalentGridComponent|Destiny-Entities-Items-DestinyItemTalentGridComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:int64,[[DestinyItemTalentGridComponent|Destiny-Entities-Items-DestinyItemTalentGridComponent]]&gt;
    "data": {
        "0": {
            // Type: [[Destiny.Definitions.DestinyTalentGridDefinition|Destiny-Definitions-DestinyTalentGridDefinition]]:integer:uint32
            "talentGridHash": 0,
            // Type: [[DestinyTalentNode|Destiny-DestinyTalentNode]][]
            "nodes": [
               // Type: [[DestinyTalentNode|Destiny-DestinyTalentNode]]
                {
                    // Type: integer:int32
                    "nodeIndex": 0,
                    // Type: integer:uint32
                    "nodeHash": 0,
                    // Type: [[DestinyTalentNodeState|Destiny-DestinyTalentNodeState]]:Enum
                    "state": 0,
                    // Type: boolean
                    "isActivated": false,
                    // Type: integer:int32
                    "stepIndex": 0,
                    // Type: [[DestinyMaterialRequirement|Destiny-Definitions-DestinyMaterialRequirement]]:Definition[]
                    "materialsToUpgrade": [
                       // Type: [[DestinyMaterialRequirement|Destiny-Definitions-DestinyMaterialRequirement]]:Definition
                        {
                            // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                            "itemHash": 0,
                            // Type: boolean
                            "deleteOnAction": false,
                            // Type: integer:int32
                            "count": 0,
                            // Type: boolean
                            "omitFromRequirements": false
                        }
                    ],
                    // Type: integer:int32
                    "activationGridLevel": 0,
                    // Type: number:float
                    "progressPercent": 0,
                    // Type: boolean
                    "hidden": false,
                    // Type: [[DestinyTalentNodeStatBlock|Destiny-DestinyTalentNodeStatBlock]]
                    "nodeStatsBlock": {
                        // Type: [[DestinyStat|Destiny-DestinyStat]][]
                        "currentStepStats": [
                           // Type: [[DestinyStat|Destiny-DestinyStat]]
                            {
                                // Type: [[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32
                                "statHash": 0,
                                // Type: integer:int32
                                "value": 0,
                                // Type: integer:int32
                                "maximumValue": 0
                            }
                        ],
                        // Type: [[DestinyStat|Destiny-DestinyStat]][]
                        "nextStepStats": [
                           // Type: [[DestinyStat|Destiny-DestinyStat]]
                            {
                                // Type: [[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32
                                "statHash": 0,
                                // Type: integer:int32
                                "value": 0,
                                // Type: integer:int32
                                "maximumValue": 0
                            }
                        ]
                    }
                }
            ],
            // Type: boolean
            "isGridComplete": false,
            // Type: [[DestinyProgression|Destiny-DestinyProgression]]
            "gridProgression": {
                // Type: [[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:integer:uint32
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
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent.html#schema_DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent
