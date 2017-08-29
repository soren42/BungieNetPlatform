<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The response object for retrieving an individual instanced item.  None of these components are relevantfor an item that doesn't have an &quot;itemInstanceId&quot;: for those, get your information from the DestinyInventoryDefinition.

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
characterId | integer:int64:nullable | If the item is on a character, this will return the ID of the character that is holding the item.
item | [[SingleComponentResponse&lt;DestinyItemComponent&gt;|SingleComponentResponseOfDestinyItemComponent]] | Common data for the item relevant to its non-instanced properties. COMPONENT TYPE: ItemCommonData
instance | [[SingleComponentResponse&lt;DestinyItemInstanceComponent&gt;|SingleComponentResponseOfDestinyItemInstanceComponent]] | Basic instance data for the item. COMPONENT TYPE: ItemInstances
objectives | [[SingleComponentResponse&lt;DestinyItemObjectivesComponent&gt;|SingleComponentResponseOfDestinyItemObjectivesComponent]] | Information specifically about the item's objectives. COMPONENT TYPE: ItemObjectives
perks | [[SingleComponentResponse&lt;DestinyItemPerksComponent&gt;|SingleComponentResponseOfDestinyItemPerksComponent]] | Information specifically about the perks currently active on the item. COMPONENT TYPE: ItemPerks
renderData | [[SingleComponentResponse&lt;DestinyItemRenderComponent&gt;|SingleComponentResponseOfDestinyItemRenderComponent]] | Information about how to render the item in 3D. COMPONENT TYPE: ItemRenderData
stats | [[SingleComponentResponse&lt;DestinyItemStatsComponent&gt;|SingleComponentResponseOfDestinyItemStatsComponent]] | Information about the computed stats of the item: power, defense, etc... COMPONENT TYPE: ItemStats
talentGrid | [[SingleComponentResponse&lt;DestinyItemTalentGridComponent&gt;|SingleComponentResponseOfDestinyItemTalentGridComponent]] | Information about the talent grid attached to the item.  Talent nodes can provide a variety ofbenefits and abilities, and in Destiny 2 are used almost exclusively for the character's &quot;Builds&quot;. COMPONENT TYPE: ItemTalentGrids
sockets | [[SingleComponentResponse&lt;DestinyItemSocketsComponent&gt;|SingleComponentResponseOfDestinyItemSocketsComponent]] | Information about the sockets of the item: which are currently active, what potential socketsyou could have and the stats/abilities/perks you can gain from them. COMPONENT TYPE: ItemSockets

## Example
```javascript
{
    // Type: integer:int64:nullable
    "characterId": 0,
    // Type: [[SingleComponentResponse&lt;DestinyItemComponent&gt;|SingleComponentResponseOfDestinyItemComponent]]
    "item": {
        // Type: [[DestinyItemComponent|Destiny-Entities-Items-DestinyItemComponent]]
        "data": {
            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
            "itemHash": 0,
            // Type: integer:int64:nullable
            "itemInstanceId": 0,
            // Type: integer:int32
            "quantity": 0,
            // Type: [[ItemBindStatus|Destiny-ItemBindStatus]]:Enum
            "bindStatus": 0,
            // Type: [[ItemLocation|Destiny-ItemLocation]]:Enum
            "location": 0,
            // Type: [[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:ManifestDefinition:integer:uint32
            "bucketHash": 0,
            // Type: [[TransferStatuses|Destiny-TransferStatuses]]:Enum
            "transferStatus": 0,
            // Type: boolean
            "lockable": false,
            // Type: [[ItemState|Destiny-ItemState]]:Enum
            "state": 0
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[SingleComponentResponse&lt;DestinyItemInstanceComponent&gt;|SingleComponentResponseOfDestinyItemInstanceComponent]]
    "instance": {
        // Type: [[DestinyItemInstanceComponent|Destiny-Entities-Items-DestinyItemInstanceComponent]]
        "data": {
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
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[SingleComponentResponse&lt;DestinyItemObjectivesComponent&gt;|SingleComponentResponseOfDestinyItemObjectivesComponent]]
    "objectives": {
        // Type: [[DestinyItemObjectivesComponent|Destiny-Entities-Items-DestinyItemObjectivesComponent]]
        "data": {
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
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[SingleComponentResponse&lt;DestinyItemPerksComponent&gt;|SingleComponentResponseOfDestinyItemPerksComponent]]
    "perks": {
        // Type: [[DestinyItemPerksComponent|Destiny-Entities-Items-DestinyItemPerksComponent]]
        "data": {
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
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[SingleComponentResponse&lt;DestinyItemRenderComponent&gt;|SingleComponentResponseOfDestinyItemRenderComponent]]
    "renderData": {
        // Type: [[DestinyItemRenderComponent|Destiny-Entities-Items-DestinyItemRenderComponent]]
        "data": {
            // Type: boolean
            "useCustomDyes": false,
            // Type: Dictionary&lt;integer:int32,integer:int32&gt;
            "artRegions": {
                "0": 0
            }
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[SingleComponentResponse&lt;DestinyItemStatsComponent&gt;|SingleComponentResponseOfDestinyItemStatsComponent]]
    "stats": {
        // Type: [[DestinyItemStatsComponent|Destiny-Entities-Items-DestinyItemStatsComponent]]
        "data": {
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
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[SingleComponentResponse&lt;DestinyItemTalentGridComponent&gt;|SingleComponentResponseOfDestinyItemTalentGridComponent]]
    "talentGrid": {
        // Type: [[DestinyItemTalentGridComponent|Destiny-Entities-Items-DestinyItemTalentGridComponent]]
        "data": {
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
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[SingleComponentResponse&lt;DestinyItemSocketsComponent&gt;|SingleComponentResponseOfDestinyItemSocketsComponent]]
    "sockets": {
        // Type: [[DestinyItemSocketsComponent|Destiny-Entities-Items-DestinyItemSocketsComponent]]
        "data": {
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
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Responses-DestinyItemResponse.html#schema_Destiny-Responses-DestinyItemResponse
