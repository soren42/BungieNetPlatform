<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This is the position and other data related to nodes in the activity graph that you can clickto launch activities.  An Activity Graph node will only have one active Activity at a time,which will determine the activity to be launched (and, unless overrideDisplay information is provided,will also determine the tooltip and other UI related to the node)

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
nodeId | integer:uint32 | An identifier for the Activity Graph Node, only guaranteed to be unique within its parent Activity Graph.
overrideDisplay | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | The node *may* have display properties that override the active Activity's display properties.
position | [[DestinyPositionDefinition|Destiny-Definitions-Common-DestinyPositionDefinition]]:Definition | The position on the map for this node.
featuringStates | [[DestinyActivityGraphNodeFeaturingStateDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeFeaturingStateDefinition]]:Definition[] | The node may have various visual accents placed on it, or styles applied.  These are the list of possible stylesthat the Node can have.  The game iterates through each, looking for the first one that passes a check of the requiredgame/character/account state in order to show that style, and then renders the node in that style.
activities | [[DestinyActivityGraphNodeActivityDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeActivityDefinition]]:Definition[] | The node may have various possible activities that could be active for it, however only one may be activeat a time.  See the DestinyActivityGraphNodeActivityDefinition for details.

## Example
```javascript
{
    // Type: integer:uint32
    "nodeId": 0,
    // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
    "overrideDisplay": {
        // Type: string
        "description": "",
        // Type: string
        "name": "",
        // Type: string
        "icon": "",
        // Type: boolean
        "hasIcon": false
    },
    // Type: [[DestinyPositionDefinition|Destiny-Definitions-Common-DestinyPositionDefinition]]:Definition
    "position": {
        // Type: integer:int32
        "x": 0,
        // Type: integer:int32
        "y": 0,
        // Type: integer:int32
        "z": 0
    },
    // Type: [[DestinyActivityGraphNodeFeaturingStateDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeFeaturingStateDefinition]]:Definition[]
    "featuringStates": [
       // Type: [[DestinyActivityGraphNodeFeaturingStateDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeFeaturingStateDefinition]]:Definition
        {
            // Type: [[ActivityGraphNodeHighlightType|Destiny-ActivityGraphNodeHighlightType]]:Enum
            "highlightType": 0
        }
    ],
    // Type: [[DestinyActivityGraphNodeActivityDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeActivityDefinition]]:Definition[]
    "activities": [
       // Type: [[DestinyActivityGraphNodeActivityDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeActivityDefinition]]:Definition
        {
            // Type: integer:uint32
            "nodeActivityId": 0,
            // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
            "activityHash": 0
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Director-DestinyActivityGraphNodeDefinition.html#schema_Destiny-Definitions-Director-DestinyActivityGraphNodeDefinition
