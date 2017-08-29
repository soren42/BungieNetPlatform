<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Well, we're here in Destiny 2, and Talent Grids are unfortunately still around. The good news is that they're pretty much only being used for certain base informationon items and for Builds/Subclasses.  The bad news is that they still suck.If you really want this information, grab this component. An important note is that talent grids are defined as such: A Grid has 1:M Nodes, which has 1:M Steps. Any given node can only have a single stepactive at one time, which represents the actual visual contents and effects of the Node(for instance, if you see a &quot;Super Cool Bonus&quot; node, the actual icon and text for the nodeis coming from the current Step of that node). Nodes can be grouped into exclusivity sets*and* as of D2, exclusivity groups (which are collections of exclusivity sets that affecteach other). See DestinyTalentGridDefinition for more information.  Brace yourself, the water's coldout there in the deep end.

## Schema
* **Type:** Class
* **Component Type Dependency:** ItemTalentGrids

## Properties
Name | Type | Description
---- | ---- | -----------
talentGridHash | [[DestinyTalentGridDefinition|Destiny-Definitions-DestinyTalentGridDefinition]]:ManifestDefinition:integer:uint32 | Most items don't have useful talent grids anymore, but Builds in particular still do. You can use this hash to lookup the DestinyTalentGridDefinition attached to this item,which will be crucial for understanding the node values on the item.
nodes | [[DestinyTalentNode|Destiny-DestinyTalentNode]][] | Detailed information about the individual nodes in the talent grid. A node represents a single visual &quot;pip&quot; in the talent grid or Build detail view,though each node may have multiple &quot;steps&quot; which indicate the actual bonusesand visual representation of that node.
isGridComplete | boolean | Indicates whether the talent grid on this item is completed, and thus whether it should have a gold border around it. Only will be true if the item actually *has* a talent grid, and only then if it is completed (i.e. every exclusive sethas an activated node, and every non-exclusive set node has been activated)
gridProgression | [[DestinyProgression|Destiny-DestinyProgression]] | If the item has a progression, it will be detailed here.  A progressionmeans that the item can gain experience.  Thresholds of experience are what determineswhether and when a talent node can be activated.

## Example
```javascript
{
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Items-DestinyItemTalentGridComponent.html#schema_Destiny-Entities-Items-DestinyItemTalentGridComponent
