<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those. PREVIEW: This service is not yet active, but we are returning the planned schema of the endpoint for review, comment, and preparation for its eventual implementation.

* **URI:** [[/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/|https://www.bungie.net/Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
characterId | integer:int64 | Yes | The Destiny Character ID of the character for whom we're getting vendor info.
destinyMembershipId | integer:int64 | Yes | Destiny membership ID of another user. You may be denied.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | A valid non-BungieNet membership type.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
components | [[DestinyComponentType|Destiny-DestinyComponentType]]:Enum[] | No | A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.

## Example
### Request
GET https://www.bungie.net/Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyVendorsResponse|Destiny-Responses-DestinyVendorsResponse]]
    "Response": {
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
    },
    // Type: [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum
    "ErrorCode": 0,
    // Type: integer:int32
    "ThrottleSeconds": 0,
    // Type: string
    "ErrorStatus": "",
    // Type: string
    "Message": "",
    // Type: Dictionary&lt;string,string&gt;
    "MessageData": {
        "{string}": ""
    },
    // Type: object
}

```

## References
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetVendors.html#operation_get_Destiny2-GetVendors
