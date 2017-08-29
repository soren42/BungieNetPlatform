<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
questItemHash | [[DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:ManifestDefinition:integer:uint32 | Quests are defined as Items in content.  As such, this is the hash identifier of the DestinyInventoryItemDefinition that represents this quest.  It will have pointers to all of the stepsin the quest, and display information for the quest (title, description, icon etc)Individual steps will be referred to in the Quest item's DestinyInventoryItemDefinition.setDataproperty, and themselves are Items with their own renderable data.
activity | [[DestinyPublicMilestoneActivity|Destiny-Milestones-DestinyPublicMilestoneActivity]] | A milestone need not have an active activity, but if there is one it will be returned here,along with any variant and additional information.
challenges | [[DestinyPublicMilestoneChallenge|Destiny-Milestones-DestinyPublicMilestoneChallenge]][] | For the given quest there could be 0-to-Many challenges: mini queststhat you can perform in the course of doing this quest, that may grant you rewards and benefits.

## Example
```javascript
{
    // Type: [[DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:ManifestDefinition:integer:uint32
    "questItemHash": 0,
    // Type: [[DestinyPublicMilestoneActivity|Destiny-Milestones-DestinyPublicMilestoneActivity]]
    "activity": {
        // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
        "activityHash": 0,
        // Type: [[DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]]:ManifestDefinition:integer:uint32[]
        "modifierHashes": [
           // Type: integer:uint32
            0
        ],
        // Type: [[DestinyPublicMilestoneActivityVariant|Destiny-Milestones-DestinyPublicMilestoneActivityVariant]][]
        "variants": [
           // Type: [[DestinyPublicMilestoneActivityVariant|Destiny-Milestones-DestinyPublicMilestoneActivityVariant]]
            {
                // Type: integer:uint32
                "activityHash": 0
            }
        ]
    },
    // Type: [[DestinyPublicMilestoneChallenge|Destiny-Milestones-DestinyPublicMilestoneChallenge]][]
    "challenges": [
       // Type: [[DestinyPublicMilestoneChallenge|Destiny-Milestones-DestinyPublicMilestoneChallenge]]
        {
            // Type: [[DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:ManifestDefinition:integer:uint32
            "objectiveHash": 0,
            // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32:nullable
            "activityHash": 0
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyPublicMilestoneQuest.html#schema_Destiny-Milestones-DestinyPublicMilestoneQuest
