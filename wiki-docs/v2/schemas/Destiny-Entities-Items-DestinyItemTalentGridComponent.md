<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Well, we're here in Destiny 2, and Talent Grids are unfortunately still around. The good news is that they're pretty much only being used for certain base information on items and for Builds/Subclasses. The bad news is that they still suck. If you really want this information, grab this component. An important note is that talent grids are defined as such: A Grid has 1:M Nodes, which has 1:M Steps. Any given node can only have a single step active at one time, which represents the actual visual contents and effects of the Node (for instance, if you see a &quot;Super Cool Bonus&quot; node, the actual icon and text for the node is coming from the current Step of that node). Nodes can be grouped into exclusivity sets *and* as of D2, exclusivity groups (which are collections of exclusivity sets that affect each other). See DestinyTalentGridDefinition for more information. Brace yourself, the water's cold out there in the deep end.

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** ItemTalentGrids

## Properties
Name | Type | Description
---- | ---- | -----------
talentGridHash | [[Destiny.Definitions.DestinyTalentGridDefinition|Destiny-Definitions-DestinyTalentGridDefinition]]:integer:uint32 | Most items don't have useful talent grids anymore, but Builds in particular still do. You can use this hash to lookup the DestinyTalentGridDefinition attached to this item, which will be crucial for understanding the node values on the item.
nodes | [[DestinyTalentNode|Destiny-DestinyTalentNode]][] | Detailed information about the individual nodes in the talent grid. A node represents a single visual &quot;pip&quot; in the talent grid or Build detail view, though each node may have multiple &quot;steps&quot; which indicate the actual bonuses and visual representation of that node.
isGridComplete | boolean | Indicates whether the talent grid on this item is completed, and thus whether it should have a gold border around it. Only will be true if the item actually *has* a talent grid, and only then if it is completed (i.e. every exclusive set has an activated node, and every non-exclusive set node has been activated)
gridProgression | [[DestinyProgression|Destiny-DestinyProgression]] | If the item has a progression, it will be detailed here. A progression means that the item can gain experience. Thresholds of experience are what determines whether and when a talent node can be activated.

## Example
```javascript
{
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Items-DestinyItemTalentGridComponent.html#schema_Destiny-Entities-Items-DestinyItemTalentGridComponent
