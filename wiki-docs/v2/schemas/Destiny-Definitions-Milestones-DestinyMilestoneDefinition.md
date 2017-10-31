<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Milestones are an in-game concept where they're attempting to tell you what you can do next in-game. If that sounds a lot like Advisors in Destiny 1, it is! So we threw out Advisors in the Destiny 2 API and tacked all of the data we would have put on Advisors onto Milestones instead. Each Milestone represents something going on in the game right now: - A &quot;ritual activity&quot; you can perform, like nightfall - A &quot;special event&quot; that may have activities related to it, like Taco Tuesday (there's no Taco Tuesday in Destiny 2) - A checklist you can fulfill, like helping your Clan complete all of its weekly objectives - A tutorial quest you can play through, like the introduction to the Crucible. Most of these milestones appear in game as well. Some of them are BNet only, because we're so extra. You're welcome.

## Schema
* **Schema Type:** Manifest Definition
* **Type:** object
* **Mobile Manifest:** Milestones

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
image | string | A custom image someone made just for the milestone. Isn't that special?
milestoneType | [[DestinyMilestoneType|Destiny-Definitions-Milestones-DestinyMilestoneType]]:Enum | An enumeration listing one of the possible types of milestones. Check out the DestinyMilestoneType enum for more info!
recruitable | boolean | If True, then the Milestone has been integrated with BNet's recruiting feature.
friendlyName | string | If the milestone has a friendly identifier for association with other features - such as Recruiting - that identifier can be found here. This is &quot;friendly&quot; in that it looks better in a URL than whatever the identifier for the Milestone actually is.
showInExplorer | boolean | If TRUE, this entry should be returned in the list of milestones for the &quot;Explore Destiny&quot; (i.e. new BNet homepage) features of Bungie.net (as long as the underlying event is active)
hasPredictableDates | boolean | A shortcut for clients - and the server - to understand whether we can predict the start and end dates for this event. In practice, there are multiple ways that an event could have predictable date ranges, but not all events will be able to be predicted via any mechanism (for instance, events that are manually triggered on and off)
quests | Dictionary&lt;integer:uint32,[[DestinyMilestoneQuestDefinition|Destiny-Definitions-Milestones-DestinyMilestoneQuestDefinition]]:Definition&gt; | The full set of possible Quests that give the overview of the Milestone event/activity in question. Only one of these can be active at a time for a given Conceptual Milestone, but many of them may be &quot;available&quot; for the user to choose from. (for instance, with Milestones you can choose from the three available Quests, but only one can be active at a time) Keyed by the quest item.
rewards | Dictionary&lt;integer:uint32,[[DestinyMilestoneRewardCategoryDefinition|Destiny-Definitions-Milestones-DestinyMilestoneRewardCategoryDefinition]]:Definition&gt; | If this milestone can provide rewards, this will define the categories into which the individual reward entries are placed.
vendorsDisplayTitle | string | If you're going to show Vendors for the Milestone, you can use this as a localized &quot;header&quot; for the section where you show that vendor data. It'll provide a more context-relevant clue about what the vendor's role is in the Milestone.
vendors | [[DestinyMilestoneVendorDefinition|Destiny-Definitions-Milestones-DestinyMilestoneVendorDefinition]]:Definition[] | Sometimes, milestones will have rewards provided by Vendors. This definition gives the information needed to understand which vendors are relevant, the order in which they should be returned if order matters, and the conditions under which the Vendor is relevant to the user.
values | Dictionary&lt;string,[[DestinyMilestoneValueDefinition|Destiny-Definitions-Milestones-DestinyMilestoneValueDefinition]]:Definition&gt; | Sometimes, milestones will have arbitrary values associated with them that are of interest to us or to third party developers. This is the collection of those values' definitions, keyed by the identifier of the value and providing useful definition information such as localizable names and descriptions for the value.
isInGameMilestone | boolean | Some milestones are explicit objectives that you can see and interact with in the game. Some milestones are more conceptual, built by BNet to help advise you on activities and events that happen in-game but that aren't explicitly shown in game as Milestones. If this is TRUE, you can see this as a milestone in the game. If this is FALSE, it's an event or activity you can participate in, but you won't see it as a Milestone in the game's UI.
hash | integer:uint32 | The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

## Example
```javascript
{
    // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
    "displayProperties": {
        // Type: string
        "description": "",
        // Type: string
        "name": "",
        // Type: string
        "icon": "",
        // Type: boolean
        "hasIcon": false
    },
    // Type: string
    "image": "",
    // Type: [[DestinyMilestoneType|Destiny-Definitions-Milestones-DestinyMilestoneType]]:Enum
    "milestoneType": {},
    // Type: boolean
    "recruitable": false,
    // Type: string
    "friendlyName": "",
    // Type: boolean
    "showInExplorer": false,
    // Type: boolean
    "hasPredictableDates": false,
    // Type: Dictionary&lt;integer:uint32,[[DestinyMilestoneQuestDefinition|Destiny-Definitions-Milestones-DestinyMilestoneQuestDefinition]]:Definition&gt;
    "quests": {
        "0": {
            // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
            "questItemHash": 0,
            // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
            "displayProperties": {},
            // Type: string
            "overrideImage": "",
            // Type: [[DestinyMilestoneQuestRewardsDefinition|Destiny-Definitions-Milestones-DestinyMilestoneQuestRewardsDefinition]]:Definition
            "questRewards": {},
            // Type: Dictionary&lt;[[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32,[[DestinyMilestoneActivityDefinition|Destiny-Definitions-Milestones-DestinyMilestoneActivityDefinition]]:Definition&gt;
            "activities": {
                "0": {
                    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
                    "conceptualActivityHash": 0,
                    // Type: Dictionary&lt;[[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32,[[DestinyMilestoneActivityVariantDefinition|Destiny-Definitions-Milestones-DestinyMilestoneActivityVariantDefinition]]:Definition&gt;
                    "variants": {
                        "0": {
                            // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
                            "activityHash": 0,
                            // Type: integer:int32
                            "order": 0
                        }
                    }
                }
            }
        }
    },
    // Type: Dictionary&lt;integer:uint32,[[DestinyMilestoneRewardCategoryDefinition|Destiny-Definitions-Milestones-DestinyMilestoneRewardCategoryDefinition]]:Definition&gt;
    "rewards": {
        "0": {
            // Type: integer:uint32
            "categoryHash": 0,
            // Type: string
            "categoryIdentifier": "",
            // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
            "displayProperties": {},
            // Type: Dictionary&lt;integer:uint32,[[DestinyMilestoneRewardEntryDefinition|Destiny-Definitions-Milestones-DestinyMilestoneRewardEntryDefinition]]:Definition&gt;
            "rewardEntries": {
                "0": {
                    // Type: integer:uint32
                    "rewardEntryHash": 0,
                    // Type: string
                    "rewardEntryIdentifier": "",
                    // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
                    "items": [
                       // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]]
                        {
                            // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                            "itemHash": 0,
                            // Type: integer:int64:nullable
                            "itemInstanceId": 0,
                            // Type: integer:int32
                            "quantity": 0
                        }
                    ],
                    // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32:nullable
                    "vendorHash": 0,
                    // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
                    "displayProperties": {},
                    // Type: integer:int32
                    "order": 0
                }
            },
            // Type: integer:int32
            "order": 0
        }
    },
    // Type: string
    "vendorsDisplayTitle": "",
    // Type: [[DestinyMilestoneVendorDefinition|Destiny-Definitions-Milestones-DestinyMilestoneVendorDefinition]]:Definition[]
    "vendors": [
       // Type: [[DestinyMilestoneVendorDefinition|Destiny-Definitions-Milestones-DestinyMilestoneVendorDefinition]]:Definition
        {
            // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32
            "vendorHash": 0
        }
    ],
    // Type: Dictionary&lt;string,[[DestinyMilestoneValueDefinition|Destiny-Definitions-Milestones-DestinyMilestoneValueDefinition]]:Definition&gt;
    "values": {
        "{string}": {
            // Type: string
            "key": "",
            // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
            "displayProperties": {
                // Type: string
                "description": "",
                // Type: string
                "name": "",
                // Type: string
                "icon": "",
                // Type: boolean
                "hasIcon": false
            }
        }
    },
    // Type: boolean
    "isInGameMilestone": false,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Milestones-DestinyMilestoneDefinition.html#schema_Destiny-Definitions-Milestones-DestinyMilestoneDefinition
