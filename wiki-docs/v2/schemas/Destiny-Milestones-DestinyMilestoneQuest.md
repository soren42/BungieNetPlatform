<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If a Milestone has one or more Quests, this will contain the live information for the character's status with one of those quests.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
questItemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | Quests are defined as Items in content. As such, this is the hash identifier of the DestinyInventoryItemDefinition that represents this quest. It will have pointers to all of the steps in the quest, and display information for the quest (title, description, icon etc) Individual steps will be referred to in the Quest item's DestinyInventoryItemDefinition.setData property, and themselves are Items with their own renderable data.
status | [[DestinyQuestStatus|Destiny-Quests-DestinyQuestStatus]] | The current status of the quest for the character making the request.
activity | [[DestinyMilestoneActivity|Destiny-Milestones-DestinyMilestoneActivity]] | *IF* the Milestone has an active Activity that can give you greater details about what you need to do, it will be returned here. Remember to associate this with the DestinyMilestoneDefinition's activities to get details about the activity, including what specific quest it is related to if you have multiple quests to choose from.
challenges | [[DestinyChallengeStatus|Destiny-Challenges-DestinyChallengeStatus]][] | The activities referred to by this quest can have many associated challenges. They are all contained here, with activityHashes so that you can associate them with the specific activity variants in which they can be found. In retrospect, I probably should have put these under the specific Activity Variants, but it's too late to change it now. Theoretically, a quest without Activities can still have Challenges, which is why this is on a higher level than activity/variants, but it probably should have been in both places. That may come as a later revision.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "questItemHash": 0,
    // Type: [[DestinyQuestStatus|Destiny-Quests-DestinyQuestStatus]]
    "status": {},
    // Type: [[DestinyMilestoneActivity|Destiny-Milestones-DestinyMilestoneActivity]]
    "activity": {},
    // Type: [[DestinyChallengeStatus|Destiny-Challenges-DestinyChallengeStatus]][]
    "challenges": [
       // Type: [[DestinyChallengeStatus|Destiny-Challenges-DestinyChallengeStatus]]
        {
            // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]]
            "objective": {}
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyMilestoneQuest.html#schema_Destiny-Milestones-DestinyMilestoneQuest
