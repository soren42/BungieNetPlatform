<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A response containing all of the components for a vendor.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
vendor | [[SingleComponentResponse&lt;DestinyVendorComponent&gt;|SingleComponentResponseOfDestinyVendorComponent]] | The base properties of the vendor. COMPONENT TYPE: Vendors
categories | [[SingleComponentResponse&lt;DestinyVendorCategoriesComponent&gt;|SingleComponentResponseOfDestinyVendorCategoriesComponent]] | Categories that the vendor has available, and references to the sales therein. COMPONENT TYPE: VendorCategories
sales | [[DictionaryComponentResponse&lt;int32,DestinyVendorSaleItemComponent&gt;|DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent]] | Sales, keyed by the vendorItemIndex of the item being sold. COMPONENT TYPE: VendorSales
items | [[DestinyItemComponentSet&lt;int32&gt;|DestinyItemComponentSetOfint32]] | Item components, keyed by the vendorItemIndex of the active sale items. COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]

## Example
```javascript
{
    // Type: [[SingleComponentResponse&lt;DestinyVendorComponent&gt;|SingleComponentResponseOfDestinyVendorComponent]]
    "vendor": {
        // Type: [[DestinyVendorComponent|Destiny-Entities-Vendors-DestinyVendorComponent]]
        "data": {
            // Type: [[DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:ManifestDefinition:integer:uint32
            "vendorHash": 0,
            // Type: [[AckState|User-AckState]]
            "ackState": {
                // Type: boolean
                "needsAck": false,
                // Type: string
                "ackId": ""
            },
            // Type: string:date-time
            "nextRefreshDate": "",
            // Type: boolean
            "enabled": false,
            // Type: boolean
            "canPurchase": false,
            // Type: [[DestinyProgression|Destiny-DestinyProgression]]
            "progression": {
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
    // Type: [[SingleComponentResponse&lt;DestinyVendorCategoriesComponent&gt;|SingleComponentResponseOfDestinyVendorCategoriesComponent]]
    "categories": {
        // Type: [[DestinyVendorCategoriesComponent|Destiny-Entities-Vendors-DestinyVendorCategoriesComponent]]
        "data": {
            // Type: [[DestinyVendorCategory|Destiny-Entities-Vendors-DestinyVendorCategory]][]
            "categories": [
               // Type: [[DestinyVendorCategory|Destiny-Entities-Vendors-DestinyVendorCategory]]
                {
                    // Type: integer:int32
                    "categoryIndex": 0,
                    // Type: integer:int32[]
                    "itemIndexes": [
                       // Type: integer:int32
                        0
                    ]
                }
            ]
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[DictionaryComponentResponse&lt;int32,DestinyVendorSaleItemComponent&gt;|DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent]]
    "sales": {
        // Type: Dictionary&lt;integer:int32,[[DestinyVendorSaleItemComponent|Destiny-Entities-Vendors-DestinyVendorSaleItemComponent]]&gt;
        "data": {
            "0": {
                // Type: integer:int32
                "vendorItemIndex": 0,
                // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
                "itemHash": 0,
                // Type: [[VendorItemStatus|Destiny-VendorItemStatus]]:Enum
                "saleStatus": 0,
                // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
                "costs": [
                   // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]]
                    {
                        // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
                        "itemHash": 0,
                        // Type: integer:int64:nullable
                        "itemInstanceId": 0,
                        // Type: integer:int32
                        "quantity": 0
                    }
                ],
                // Type: [[DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]]:ManifestDefinition:integer:uint32[]
                "requiredUnlocks": [
                   // Type: integer:uint32
                    0
                ],
                // Type: [[DestinyUnlockStatus|Destiny-DestinyUnlockStatus]][]
                "unlockStatuses": [
                   // Type: [[DestinyUnlockStatus|Destiny-DestinyUnlockStatus]]
                    {
                        // Type: [[DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]]:ManifestDefinition:integer:uint32
                        "unlockHash": 0,
                        // Type: boolean
                        "isSet": false
                    }
                ],
                // Type: integer:int32[]
                "failureIndexes": [
                   // Type: integer:int32
                    0
                ]
            }
        },
        // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
        "privacy": 0
    },
    // Type: [[DestinyItemComponentSet&lt;int32&gt;|DestinyItemComponentSetOfint32]]
    "items": {
        // Type: [[DictionaryComponentResponse&lt;int32,DestinyItemInstanceComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent]]
        "instances": {
            // Type: Dictionary&lt;integer:int32,[[DestinyItemInstanceComponent|Destiny-Entities-Items-DestinyItemInstanceComponent]]&gt;
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
        // Type: [[DictionaryComponentResponse&lt;int32,DestinyItemObjectivesComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent]]
        "objectives": {
            // Type: Dictionary&lt;integer:int32,[[DestinyItemObjectivesComponent|Destiny-Entities-Items-DestinyItemObjectivesComponent]]&gt;
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
        // Type: [[DictionaryComponentResponse&lt;int32,DestinyItemPerksComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemPerksComponent]]
        "perks": {
            // Type: Dictionary&lt;integer:int32,[[DestinyItemPerksComponent|Destiny-Entities-Items-DestinyItemPerksComponent]]&gt;
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
        // Type: [[DictionaryComponentResponse&lt;int32,DestinyItemRenderComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemRenderComponent]]
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
        // Type: [[DictionaryComponentResponse&lt;int32,DestinyItemStatsComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemStatsComponent]]
        "stats": {
            // Type: Dictionary&lt;integer:int32,[[DestinyItemStatsComponent|Destiny-Entities-Items-DestinyItemStatsComponent]]&gt;
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
        // Type: [[DictionaryComponentResponse&lt;int32,DestinyItemSocketsComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent]]
        "sockets": {
            // Type: Dictionary&lt;integer:int32,[[DestinyItemSocketsComponent|Destiny-Entities-Items-DestinyItemSocketsComponent]]&gt;
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
        // Type: [[DictionaryComponentResponse&lt;int32,DestinyItemTalentGridComponent&gt;|DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent]]
        "talentGrids": {
            // Type: Dictionary&lt;integer:int32,[[DestinyItemTalentGridComponent|Destiny-Entities-Items-DestinyItemTalentGridComponent]]&gt;
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
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Responses-DestinyVendorResponse.html#schema_Destiny-Responses-DestinyVendorResponse
