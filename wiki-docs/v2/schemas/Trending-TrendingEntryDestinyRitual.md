<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
image | string | 
icon | string | 
title | string | 
subtitle | string | 
dateStart | string:date-time:nullable | 
dateEnd | string:date-time:nullable | 
milestoneDetails | [[DestinyPublicMilestone|Destiny-Milestones-DestinyPublicMilestone]] | A destiny event does not necessarily have a related Milestone, but if it does the detailswill be returned here.
eventContent | [[DestinyMilestoneContent|Destiny-Milestones-DestinyMilestoneContent]] | A destiny event will not necessarily have milestone &quot;custom content&quot;, but if it doesthe details will be here.

## Example
```javascript
{
    // Type: string
    "image": "",
    // Type: string
    "icon": "",
    // Type: string
    "title": "",
    // Type: string
    "subtitle": "",
    // Type: string:date-time:nullable
    "dateStart": "",
    // Type: string:date-time:nullable
    "dateEnd": "",
    // Type: [[DestinyPublicMilestone|Destiny-Milestones-DestinyPublicMilestone]]
    "milestoneDetails": {
        // Type: [[Destiny.Definitions.Milestones.DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:integer:uint32
        "milestoneHash": 0,
        // Type: [[DestinyPublicMilestoneQuest|Destiny-Milestones-DestinyPublicMilestoneQuest]][]
        "availableQuests": [
           // Type: [[DestinyPublicMilestoneQuest|Destiny-Milestones-DestinyPublicMilestoneQuest]]
            {
                // Type: [[Destiny.Definitions.Milestones.DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:integer:uint32
                "questItemHash": 0,
                // Type: [[DestinyPublicMilestoneActivity|Destiny-Milestones-DestinyPublicMilestoneActivity]]
                "activity": {
                    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
                    "activityHash": 0,
                    // Type: [[Destiny.Definitions.ActivityModifiers.DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]]:integer:uint32[]
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
                        // Type: [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32
                        "objectiveHash": 0,
                        // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32:nullable
                        "activityHash": 0
                    }
                ]
            }
        ],
        // Type: integer:uint32[]
        "vendorHashes": [
           // Type: integer:uint32
            0
        ],
        // Type: string:date-time:nullable
        "startDate": "",
        // Type: string:date-time:nullable
        "endDate": ""
    },
    // Type: [[DestinyMilestoneContent|Destiny-Milestones-DestinyMilestoneContent]]
    "eventContent": {
        // Type: string
        "about": "",
        // Type: string
        "status": "",
        // Type: string[]
        "tips": [
           // Type: string
            ""
        ],
        // Type: [[DestinyMilestoneContentItemCategory|Destiny-Milestones-DestinyMilestoneContentItemCategory]][]
        "itemCategories": [
           // Type: [[DestinyMilestoneContentItemCategory|Destiny-Milestones-DestinyMilestoneContentItemCategory]]
            {
                // Type: string
                "title": "",
                // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32[]
                "itemHashes": [
                   // Type: integer:uint32
                    0
                ]
            }
        ]
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Trending-TrendingEntryDestinyRitual.html#schema_Trending-TrendingEntryDestinyRitual
