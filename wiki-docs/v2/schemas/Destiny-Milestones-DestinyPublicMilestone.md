<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Information about milestones, presented in a character state-agnostic manner.Combine this data with DestinyMilestoneDefinition to get a full picture of the milestone, whichis basically a checklist of things to do in the game.  Think of this as GetPublicAdvisors 3.0, for those who used the Destiny 1 API.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
milestoneHash | [[Destiny.Definitions.Milestones.DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:integer:uint32 | The hash identifier for the milestone.  Use it to look up the DestinyMilestoneDefinition forstatic data about the Milestone.
availableQuests | [[DestinyPublicMilestoneQuest|Destiny-Milestones-DestinyPublicMilestoneQuest]][] | A milestone not need have even a single quest, but if there are active quests they will be returned here.
vendorHashes | integer:uint32[] | Sometimes milestones - or activities active in milestones - will have relevant vendors.These are the vendors that are currently relevant.
startDate | string:date-time:nullable | If known, this is the date when the Milestone started/became active.
endDate | string:date-time:nullable | If known, this is the date when the Milestone will expire/recycle/end.

## Example
```javascript
{
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
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyPublicMilestone.html#schema_Destiny-Milestones-DestinyPublicMilestone
