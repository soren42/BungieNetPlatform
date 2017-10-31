<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents a runtime instance of a user's milestone status. Live Milestone data should be combined with DestinyMilestoneDefinition data to show the user a picture of what is available for them to do in the game, and their status in regards to said &quot;things to do.&quot; Consider it a big, wonky to-do list, or Advisors 3.0 for those who remember the Destiny 1 API.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
milestoneHash | [[Destiny.Definitions.Milestones.DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:integer:uint32 | The unique identifier for the Milestone. Use it to look up the DestinyMilestoneDefinition, so you can combine the other data in this contract with static definition data.
availableQuests | [[DestinyMilestoneQuest|Destiny-Milestones-DestinyMilestoneQuest]][] | Indicates what quests are available for this Milestone. Usually this will be only a single Quest, but some quests have multiple available that you can choose from at any given time. All possible quests for a milestone can be found in the DestinyMilestoneDefinition, but they must be combined with this Live data to determine which one(s) are actually active right now. It is possible for Milestones to not have any quests.
values | Dictionary&lt;string,number:float&gt; | Milestones may have arbitrary key/value pairs associated with them, for data that users will want to know about but that doesn't fit neatly into any of the common components such as Quests. A good example of this would be - if this existed in Destiny 1 - the number of wins you currently have on your Trials of Osiris ticket. Looking in the DestinyMilestoneDefinition, you can use the string identifier of this dictionary to look up more info about the value, including localized string content for displaying the value. The value in the dictionary is the floating point number. The definition will tell you how to format this number.
vendorHashes | [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32[] | A milestone may have one or more active vendors that are &quot;related&quot; to it (that provide rewards, or that are the initiators of the Milestone). I already regret this, even as I'm typing it. [I told you I'd regret this] You see, sometimes a milestone may be directly correlated with a set of vendors that provide varying tiers of rewards. The player may not be able to interact with one or more of those vendors. This will return the hashes of the Vendors that the player *can* interact with, allowing you to show their current inventory as rewards or related items to the Milestone or its activities. Before we even use it, it's already deprecated! How much of a bummer is that? We need more data.
vendors | [[DestinyMilestoneVendor|Destiny-Milestones-DestinyMilestoneVendor]][] | Replaces vendorHashes, which I knew was going to be trouble the day it walked in the door. This will return not only what Vendors are active and relevant to the activity (in an implied order that you can choose to ignore), but also other data - for example, if the Vendor is featuring a specific item relevant to this event that you should show with them.
rewards | [[DestinyMilestoneRewardCategory|Destiny-Milestones-DestinyMilestoneRewardCategory]][] | If the entity to which this component is attached has known active Rewards for the player, this will detail information about those rewards, keyed by the RewardEntry Hash. (See DestinyMilestoneDefinition for more information about Reward Entries) Note that these rewards are not for the Quests related to the Milestone. Think of these as &quot;overview/checklist&quot; rewards that may be provided for Milestones that may provide rewards for performing a variety of tasks that aren't under a specific Quest.
startDate | string:date-time:nullable | If known, this is the date when the event last began or refreshed. It will only be populated for events with fixed and repeating start and end dates.
endDate | string:date-time:nullable | If known, this is the date when the event will next end or repeat. It will only be populated for events with fixed and repeating start and end dates.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.Milestones.DestinyMilestoneDefinition|Destiny-Definitions-Milestones-DestinyMilestoneDefinition]]:integer:uint32
    "milestoneHash": 0,
    // Type: [[DestinyMilestoneQuest|Destiny-Milestones-DestinyMilestoneQuest]][]
    "availableQuests": [
       // Type: [[DestinyMilestoneQuest|Destiny-Milestones-DestinyMilestoneQuest]]
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
    ],
    // Type: Dictionary&lt;string,number:float&gt;
    "values": {
        "{string}": 0
    },
    // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32[]
    "vendorHashes": [
       // Type: integer:uint32
        0
    ],
    // Type: [[DestinyMilestoneVendor|Destiny-Milestones-DestinyMilestoneVendor]][]
    "vendors": [
       // Type: [[DestinyMilestoneVendor|Destiny-Milestones-DestinyMilestoneVendor]]
        {
            // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32
            "vendorHash": 0,
            // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32:nullable
            "previewItemHash": 0
        }
    ],
    // Type: [[DestinyMilestoneRewardCategory|Destiny-Milestones-DestinyMilestoneRewardCategory]][]
    "rewards": [
       // Type: [[DestinyMilestoneRewardCategory|Destiny-Milestones-DestinyMilestoneRewardCategory]]
        {
            // Type: integer:uint32
            "rewardCategoryHash": 0,
            // Type: [[DestinyMilestoneRewardEntry|Destiny-Milestones-DestinyMilestoneRewardEntry]][]
            "entries": [
               // Type: [[DestinyMilestoneRewardEntry|Destiny-Milestones-DestinyMilestoneRewardEntry]]
                {
                    // Type: integer:uint32
                    "rewardEntryHash": 0,
                    // Type: boolean
                    "earned": false,
                    // Type: boolean
                    "redeemed": false
                }
            ]
        }
    ],
    // Type: string:date-time:nullable
    "startDate": "",
    // Type: string:date-time:nullable
    "endDate": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyMilestone.html#schema_Destiny-Milestones-DestinyMilestone
