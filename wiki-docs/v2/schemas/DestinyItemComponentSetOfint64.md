<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Generic

## Properties
Name | Type | Description
---- | ---- | -----------
instances | [[DictionaryComponentResponse&lt;int64,DestinyItemInstanceComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent]] | 
objectives | [[DictionaryComponentResponse&lt;int64,DestinyItemObjectivesComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent]] | 
perks | [[DictionaryComponentResponse&lt;int64,DestinyItemPerksComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemPerksComponent]] | 
renderData | [[DictionaryComponentResponse&lt;int64,DestinyItemRenderComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemRenderComponent]] | 
stats | [[DictionaryComponentResponse&lt;int64,DestinyItemStatsComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemStatsComponent]] | 
sockets | [[DictionaryComponentResponse&lt;int64,DestinyItemSocketsComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent]] | 
talentGrids | [[DictionaryComponentResponse&lt;int64,DestinyItemTalentGridComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent]] | 
plugStates | [[DictionaryComponentResponse&lt;uint32,DestinyItemPlugComponent&gt;|DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent]] | 

## Example
```javascript
{
    // Type: [[DictionaryComponentResponse&lt;int64,DestinyItemInstanceComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent]]
    "instances": {
        // Type: Dictionary&lt;integer:int64,[[DestinyItemInstanceComponent|Destiny-Entities-Items-DestinyItemInstanceComponent]]&gt;
        "data": {
            "0": {
                // Type: [[DamageType|Destiny-DamageType]]:Enum
                "damageType": 0,
                // Type: [[DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:ManifestDefinition:integer:uint32:nullable
                "damageTypeHash": 0,
                // Type: [[DestinyStat|Destiny-DestinyStat]]
                "primaryStat": {
                    // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
                    "statHash": 0,
                    // Type: integer:int32
                    "value": 0,
                    // Type: integer:int32
                    "maximumValue": 0
                },
                // Type: integer:int32
                "itemLevel": 0,
                // Type: integer:int32
                "quality": 0,
                // Type: boolean
                "isEquipped": false,
                // Type: boolean
                "canEquip": false,
                // Type: integer:int32
                "equipRequiredLevel": 0,
                // Type: [[DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]]:ManifestDefinition:integer:uint32[]
                "unlockHashesRequiredToEquip": [
                   // Type: integer:uint32
                    0
                ],
                // Type: [[EquipFailureReason|Destiny-EquipFailureReason]]:Enum
                "cannotEquipReason": 0
            }
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[DictionaryComponentResponse&lt;int64,DestinyItemObjectivesComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent]]
    "objectives": {
        // Type: Dictionary&lt;integer:int64,[[DestinyItemObjectivesComponent|Destiny-Entities-Items-DestinyItemObjectivesComponent]]&gt;
        "data": {
            "0": {
                // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]][]
                "objectives": [
                   // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]]
                    {
                        // Type: [[DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:ManifestDefinition:integer:uint32
                        "objectiveHash": 0,
                        // Type: [[DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:ManifestDefinition:integer:uint32:nullable
                        "destinationHash": 0,
                        // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32:nullable
                        "activityHash": 0,
                        // Type: integer:int32:nullable
                        "progress": 0,
                        // Type: boolean
                        "complete": false
                    }
                ]
            }
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[DictionaryComponentResponse&lt;int64,DestinyItemPerksComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemPerksComponent]]
    "perks": {
        // Type: Dictionary&lt;integer:int64,[[DestinyItemPerksComponent|Destiny-Entities-Items-DestinyItemPerksComponent]]&gt;
        "data": {
            "0": {
                // Type: [[DestinyPerkReference|Destiny-Perks-DestinyPerkReference]][]
                "perks": [
                   // Type: [[DestinyPerkReference|Destiny-Perks-DestinyPerkReference]]
                    {
                        // Type: [[DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:ManifestDefinition:integer:uint32
                        "perkHash": 0,
                        // Type: string
                        "iconPath": "",
                        // Type: boolean
                        "isActive": false,
                        // Type: boolean
                        "visible": false
                    }
                ]
            }
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[DictionaryComponentResponse&lt;int64,DestinyItemRenderComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemRenderComponent]]
    "renderData": {
        // Type: Dictionary&lt;integer:int64,[[DestinyItemRenderComponent|Destiny-Entities-Items-DestinyItemRenderComponent]]&gt;
        "data": {
            "0": {
                // Type: boolean
                "useCustomDyes": false,
                // Type: Dictionary&lt;integer:int32,integer:int32&gt;
                "artRegions": {
                    "0": 0
                }
            }
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[DictionaryComponentResponse&lt;int64,DestinyItemStatsComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemStatsComponent]]
    "stats": {
        // Type: Dictionary&lt;integer:int64,[[DestinyItemStatsComponent|Destiny-Entities-Items-DestinyItemStatsComponent]]&gt;
        "data": {
            "0": {
                // Type: Dictionary&lt;[[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32,[[DestinyStat|Destiny-DestinyStat]]&gt;
                "stats": {
                    "0": {
                        // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
                        "statHash": 0,
                        // Type: integer:int32
                        "value": 0,
                        // Type: integer:int32
                        "maximumValue": 0
                    }
                }
            }
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[DictionaryComponentResponse&lt;int64,DestinyItemSocketsComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent]]
    "sockets": {
        // Type: Dictionary&lt;integer:int64,[[DestinyItemSocketsComponent|Destiny-Entities-Items-DestinyItemSocketsComponent]]&gt;
        "data": {
            "0": {
                // Type: [[DestinyItemSocketState|Destiny-Entities-Items-DestinyItemSocketState]][]
                "sockets": [
                   // Type: [[DestinyItemSocketState|Destiny-Entities-Items-DestinyItemSocketState]]
                    {
                        // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32:nullable
                        "plugHash": 0,
                        // Type: boolean
                        "isEnabled": false,
                        // Type: integer:int32[]
                        "enableFailIndexes": [
                           // Type: integer:int32
                            0
                        ],
                        // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32[]
                        "reusablePlugHashes": [
                           // Type: integer:uint32
                            0
                        ]
                    }
                ]
            }
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[DictionaryComponentResponse&lt;int64,DestinyItemTalentGridComponent&gt;|DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent]]
    "talentGrids": {
        // Type: Dictionary&lt;integer:int64,[[DestinyItemTalentGridComponent|Destiny-Entities-Items-DestinyItemTalentGridComponent]]&gt;
        "data": {
            "0": {
                // Type: [[DestinyTalentGridDefinition|Destiny-Definitions-DestinyTalentGridDefinition]]:ManifestDefinition:integer:uint32
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
                                // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
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
                                    // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
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
                                    // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
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
            }
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[DictionaryComponentResponse&lt;uint32,DestinyItemPlugComponent&gt;|DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent]]
    "plugStates": {
        // Type: Dictionary&lt;integer:uint32,[[DestinyItemPlugComponent|Destiny-Components-Items-DestinyItemPlugComponent]]&gt;
        "data": {
            "0": {
                // Type: integer:int32[]
                "insertFailIndexes": [
                   // Type: integer:int32
                    0
                ],
                // Type: integer:int32[]
                "enableFailIndexes": [
                   // Type: integer:int32
                    0
                ]
            }
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_DestinyItemComponentSetOfint64.html#schema_DestinyItemComponentSetOfint64
