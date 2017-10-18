<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Items can have objectives and progression.  When you request this block, you will obtaininformation about any Objectives and progression tied to this item.

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** ItemObjectives

## Properties
Name | Type | Description
---- | ---- | -----------
objectives | [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]][] | If the item has a hard association with objectives, your progress on themwill be defined here. Objectives are our standard way to describe a series of tasks that have to be completed for a reward.

## Example
```javascript
{
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Items-DestinyItemObjectivesComponent.html#schema_Destiny-Entities-Items-DestinyItemObjectivesComponent
