<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents a Map View in the director: be them overview views, destination views, or other. They have nodes which map to activities, and other various visual elements that we (or others) mayor may not be able to use. Activity graphs, most importantly, have nodes which can have activities in various states ofplayability. Unfortunately, activity graphs are combined at runtime with Game UI-only assets such as fragments ofmap images, various in-game special effects, decals etc... that we don't get in these definitions. If we end up having time, we may end up trying to manually populate those here: but the last time we tried that,before the lead-up to D1, it proved to be unmaintainable as the game's content changed.  So don't bet the farmon us providing that content in this definition.

## Schema
* **Schema Type:** Manifest Definition
* **Mobile Manifest:** ActivityGraphs

## Properties
Name | Type | Description
---- | ---- | -----------
nodes | [[DestinyActivityGraphNodeDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeDefinition]]:Definition[] | These represent the visual &quot;nodes&quot; on the map's view.  These are the activities youcan click on in the map.
artElements | [[DestinyActivityGraphArtElementDefinition|Destiny-Definitions-Director-DestinyActivityGraphArtElementDefinition]]:Definition[] | Represents one-off/special UI elements that appear on the map.
connections | [[DestinyActivityGraphConnectionDefinition|Destiny-Definitions-Director-DestinyActivityGraphConnectionDefinition]]:Definition[] | Represents connections between graph nodes.  However, it lacks context that we'd need to make good use of it.
displayObjectives | [[DestinyActivityGraphDisplayObjectiveDefinition|Destiny-Definitions-Director-DestinyActivityGraphDisplayObjectiveDefinition]]:Definition[] | Objectives can display on maps, and this is supposedly metadata for that.  I have not had the time toanalyze the details of what is useful within however: we could be missing important data to make this work.Expect this property to be expanded on later if possible.
displayProgressions | [[DestinyActivityGraphDisplayProgressionDefinition|Destiny-Definitions-Director-DestinyActivityGraphDisplayProgressionDefinition]]:Definition[] | Progressions can also display on maps, but similarly to displayObjectives we appear to lack some requiredinformation and context right now.  We will have to look into it later and add more data if possible.
linkedGraphs | [[DestinyLinkedGraphDefinition|Destiny-Definitions-Director-DestinyLinkedGraphDefinition]]:Definition[] | Represents links between this Activity Graph and other ones.
hash | integer:uint32 | The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet isnot yet allowed to show it.  Sorry!

## Example
```javascript
{
    // Type: [[DestinyActivityGraphNodeDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeDefinition]]:Definition[]
    "nodes": [
       // Type: [[DestinyActivityGraphNodeDefinition|Destiny-Definitions-Director-DestinyActivityGraphNodeDefinition]]:Definition
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
    ],
    // Type: [[DestinyActivityGraphArtElementDefinition|Destiny-Definitions-Director-DestinyActivityGraphArtElementDefinition]]:Definition[]
    "artElements": [
       // Type: [[DestinyActivityGraphArtElementDefinition|Destiny-Definitions-Director-DestinyActivityGraphArtElementDefinition]]:Definition
        {
            // Type: [[DestinyPositionDefinition|Destiny-Definitions-Common-DestinyPositionDefinition]]:Definition
            "position": {
                // Type: integer:int32
                "x": 0,
                // Type: integer:int32
                "y": 0,
                // Type: integer:int32
                "z": 0
            }
        }
    ],
    // Type: [[DestinyActivityGraphConnectionDefinition|Destiny-Definitions-Director-DestinyActivityGraphConnectionDefinition]]:Definition[]
    "connections": [
       // Type: [[DestinyActivityGraphConnectionDefinition|Destiny-Definitions-Director-DestinyActivityGraphConnectionDefinition]]:Definition
        {
            // Type: integer:uint32
            "sourceNodeHash": 0,
            // Type: integer:uint32
            "destNodeHash": 0
        }
    ],
    // Type: [[DestinyActivityGraphDisplayObjectiveDefinition|Destiny-Definitions-Director-DestinyActivityGraphDisplayObjectiveDefinition]]:Definition[]
    "displayObjectives": [
       // Type: [[DestinyActivityGraphDisplayObjectiveDefinition|Destiny-Definitions-Director-DestinyActivityGraphDisplayObjectiveDefinition]]:Definition
        {
            // Type: integer:uint32
            "id": 0,
            // Type: [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32
            "objectiveHash": 0
        }
    ],
    // Type: [[DestinyActivityGraphDisplayProgressionDefinition|Destiny-Definitions-Director-DestinyActivityGraphDisplayProgressionDefinition]]:Definition[]
    "displayProgressions": [
       // Type: [[DestinyActivityGraphDisplayProgressionDefinition|Destiny-Definitions-Director-DestinyActivityGraphDisplayProgressionDefinition]]:Definition
        {
            // Type: integer:uint32
            "id": 0,
            // Type: integer:uint32
            "progressionHash": 0
        }
    ],
    // Type: [[DestinyLinkedGraphDefinition|Destiny-Definitions-Director-DestinyLinkedGraphDefinition]]:Definition[]
    "linkedGraphs": [
       // Type: [[DestinyLinkedGraphDefinition|Destiny-Definitions-Director-DestinyLinkedGraphDefinition]]:Definition
        {
            // Type: string
            "description": "",
            // Type: string
            "name": "",
            // Type: [[DestinyUnlockExpressionDefinition|Destiny-Definitions-DestinyUnlockExpressionDefinition]]:Definition
            "unlockExpression": {
                // Type: [[DestinyGatingScope|Destiny-DestinyGatingScope]]:Enum
                "scope": 0
            },
            // Type: integer:uint32
            "linkedGraphId": 0,
            // Type: [[DestinyLinkedGraphEntryDefinition|Destiny-Definitions-Director-DestinyLinkedGraphEntryDefinition]]:Definition[]
            "linkedGraphs": [
               // Type: [[DestinyLinkedGraphEntryDefinition|Destiny-Definitions-Director-DestinyLinkedGraphEntryDefinition]]:Definition
                {
                    // Type: integer:uint32
                    "activityGraphHash": 0
                }
            ],
            // Type: string
            "overview": ""
        }
    ],
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Director-DestinyActivityGraphDefinition.html#schema_Destiny-Definitions-Director-DestinyActivityGraphDefinition
