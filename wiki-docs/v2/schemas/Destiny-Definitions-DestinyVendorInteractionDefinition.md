<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A Vendor Interaction is a dialog shown by the vendor other than sale items or transfer screens.The vendor is showing you something, and asking you to reply to it by choosing an option or reward.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
replies | [[DestinyVendorInteractionReplyDefinition|Destiny-Definitions-DestinyVendorInteractionReplyDefinition]]:Definition[] | The potential replies that the user can make to the interaction.
vendorCategoryIndex | integer:int32 | If &gt;= 0, this is the category of sale items to show along with this interaction dialog.
questlineItemHash | [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32 | If this interaction dialog is about a quest, this is the questline related to the interaction.You can use this to show the quest overview, or even the character's status with the quest ifyou use it to find the character's current Quest Step by checking their inventory against this questlineItemHash'sDestinyInventoryItemDefinition.setData.
sackInteractionList | [[DestinyVendorInteractionSackEntryDefinition|Destiny-Definitions-DestinyVendorInteractionSackEntryDefinition]]:Definition[] | If this interaction is meant to show you sacks, this is the list of types of sacks to be shown.If empty, the interaction is not meant to show sacks.
uiInteractionType | integer:uint32 | A UI hint for the behavior of the interaction screen.  BNet doesn't use this, but you can choose to.
rewardBlockLabel | string | If this interaction is displaying rewards, this is the text to use for the header of thereward-displaying section of the interaction.
rewardVendorCategoryIndex | integer:int32 | If the vendor's reward list is sourced from one of his categories, this is the index intothe category array of items to show.
flavorLineOne | string | If the vendor interaction has flavor text, this is some of it.
flavorLineTwo | string | If the vendor interaction has flavor text, this is the rest of it.
headerDisplayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | The header for the interaction dialog.
instructions | string | The localized text telling the player what to do when they see this dialog.

## Example
```javascript
{
    // Type: [[DestinyVendorInteractionReplyDefinition|Destiny-Definitions-DestinyVendorInteractionReplyDefinition]]:Definition[]
    "replies": [
       // Type: [[DestinyVendorInteractionReplyDefinition|Destiny-Definitions-DestinyVendorInteractionReplyDefinition]]:Definition
        {
            // Type: [[DestinyVendorInteractionRewardSelection|Destiny-DestinyVendorInteractionRewardSelection]]:Enum
            "itemRewardsSelection": 0,
            // Type: string
            "reply": "",
            // Type: [[DestinyVendorReplyType|Destiny-DestinyVendorReplyType]]:Enum
            "replyType": 0
        }
    ],
    // Type: integer:int32
    "vendorCategoryIndex": 0,
    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
    "questlineItemHash": 0,
    // Type: [[DestinyVendorInteractionSackEntryDefinition|Destiny-Definitions-DestinyVendorInteractionSackEntryDefinition]]:Definition[]
    "sackInteractionList": [
       // Type: [[DestinyVendorInteractionSackEntryDefinition|Destiny-Definitions-DestinyVendorInteractionSackEntryDefinition]]:Definition
        {
            // Type: integer:uint32
            "sackType": 0
        }
    ],
    // Type: integer:uint32
    "uiInteractionType": 0,
    // Type: string
    "rewardBlockLabel": "",
    // Type: integer:int32
    "rewardVendorCategoryIndex": 0,
    // Type: string
    "flavorLineOne": "",
    // Type: string
    "flavorLineTwo": "",
    // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
    "headerDisplayProperties": {
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
    "instructions": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyVendorInteractionDefinition.html#schema_Destiny-Definitions-DestinyVendorInteractionDefinition
