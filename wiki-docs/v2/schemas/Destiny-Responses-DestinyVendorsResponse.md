<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A response containing all of the components for all requested vendors.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
vendors | [[DictionaryComponentResponseOfuint32AndDestinyVendorComponent|DictionaryComponentResponseOfuint32AndDestinyVendorComponent]] | The base properties of the vendor. COMPONENT TYPE: Vendors
categories | [[DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent|DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent]] | Categories that the vendor has available, and references to the sales therein. COMPONENT TYPE: VendorCategories
sales | [[DictionaryComponentResponseOfuint32AndDestinyVendorSaleItemSetComponent|DictionaryComponentResponseOfuint32AndDestinyVendorSaleItemSetComponent]] | Sales, keyed by the vendorItemIndex of the item being sold. COMPONENT TYPE: VendorSales
itemComponents | Dictionary&lt;integer:uint32,[[DestinyItemComponentSetOfint32|DestinyItemComponentSetOfint32]]&gt; | 

## Example
```javascript
{
    // Type: [[DictionaryComponentResponseOfuint32AndDestinyVendorComponent|DictionaryComponentResponseOfuint32AndDestinyVendorComponent]]
    "vendors": {},
    // Type: [[DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent|DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent]]
    "categories": {},
    // Type: [[DictionaryComponentResponseOfuint32AndDestinyVendorSaleItemSetComponent|DictionaryComponentResponseOfuint32AndDestinyVendorSaleItemSetComponent]]
    "sales": {},
    // Type: Dictionary&lt;integer:uint32,[[DestinyItemComponentSetOfint32|DestinyItemComponentSetOfint32]]&gt;
    "itemComponents": {
        "0": {
            // Type: [[DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent|DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent]]
            "instances": {
                // Type: Dictionary&lt;integer:int32,[[DestinyItemInstanceComponent|Destiny-Entities-Items-DestinyItemInstanceComponent]]&gt;
                "data": {
                    "0": {
                        // Type: [[DamageType|Destiny-DamageType]]:Enum
                        "damageType": {},
                        // Type: [[Destiny.Definitions.DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:integer:uint32:nullable
                        "damageTypeHash": 0,
                        // Type: [[DestinyStat|Destiny-DestinyStat]]
                        "primaryStat": {},
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
                        // Type: [[Destiny.Definitions.DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]]:integer:uint32[]
                        "unlockHashesRequiredToEquip": [
                           // Type: integer:uint32
                            0
                        ],
                        // Type: [[EquipFailureReason|Destiny-EquipFailureReason]]:Enum
                        "cannotEquipReason": {}
                    }
                },
                // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
                "privacy": 0
            },
            // Type: [[DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent|DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent]]
            "objectives": {
                // Type: Dictionary&lt;integer:int32,[[DestinyItemObjectivesComponent|Destiny-Entities-Items-DestinyItemObjectivesComponent]]&gt;
                "data": {
                    "0": {
                        // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]][]
                        "objectives": [
                           // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]]
                            {
                                // Type: [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32
                                "objectiveHash": 0,
                                // Type: [[Destiny.Definitions.DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:integer:uint32:nullable
                                "destinationHash": 0,
                                // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32:nullable
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
            // Type: [[DictionaryComponentResponseOfint32AndDestinyItemPerksComponent|DictionaryComponentResponseOfint32AndDestinyItemPerksComponent]]
            "perks": {
                // Type: Dictionary&lt;integer:int32,[[DestinyItemPerksComponent|Destiny-Entities-Items-DestinyItemPerksComponent]]&gt;
                "data": {
                    "0": {
                        // Type: [[DestinyPerkReference|Destiny-Perks-DestinyPerkReference]][]
                        "perks": [
                           // Type: [[DestinyPerkReference|Destiny-Perks-DestinyPerkReference]]
                            {
                                // Type: [[Destiny.Definitions.DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:integer:uint32
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
            // Type: [[DictionaryComponentResponseOfint32AndDestinyItemRenderComponent|DictionaryComponentResponseOfint32AndDestinyItemRenderComponent]]
            "renderData": {
                // Type: Dictionary&lt;integer:int32,[[DestinyItemRenderComponent|Destiny-Entities-Items-DestinyItemRenderComponent]]&gt;
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
            // Type: [[DictionaryComponentResponseOfint32AndDestinyItemStatsComponent|DictionaryComponentResponseOfint32AndDestinyItemStatsComponent]]
            "stats": {
                // Type: Dictionary&lt;integer:int32,[[DestinyItemStatsComponent|Destiny-Entities-Items-DestinyItemStatsComponent]]&gt;
                "data": {
                    "0": {
                        // Type: Dictionary&lt;[[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32,[[DestinyStat|Destiny-DestinyStat]]&gt;
                        "stats": {
                            "0": {
                                // Type: [[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32
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
            // Type: [[DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent|DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent]]
            "sockets": {
                // Type: Dictionary&lt;integer:int32,[[DestinyItemSocketsComponent|Destiny-Entities-Items-DestinyItemSocketsComponent]]&gt;
                "data": {
                    "0": {
                        // Type: [[DestinyItemSocketState|Destiny-Entities-Items-DestinyItemSocketState]][]
                        "sockets": [
                           // Type: [[DestinyItemSocketState|Destiny-Entities-Items-DestinyItemSocketState]]
                            {
                                // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32:nullable
                                "plugHash": 0,
                                // Type: boolean
                                "isEnabled": false,
                                // Type: integer:int32[]
                                "enableFailIndexes": [
                                   // Type: integer:int32
                                    0
                                ],
                                // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32[]
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
            // Type: [[DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent|DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent]]
            "talentGrids": {
                // Type: Dictionary&lt;integer:int32,[[DestinyItemTalentGridComponent|Destiny-Entities-Items-DestinyItemTalentGridComponent]]&gt;
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
                                "state": {},
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
                                "nodeStatsBlock": {}
                            }
                        ],
                        // Type: boolean
                        "isGridComplete": false,
                        // Type: [[DestinyProgression|Destiny-DestinyProgression]]
                        "gridProgression": {}
                    }
                },
                // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
                "privacy": 0
            },
            // Type: [[DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent|DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent]]
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
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Responses-DestinyVendorsResponse.html#schema_Destiny-Responses-DestinyVendorsResponse
