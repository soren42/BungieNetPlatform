<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The definition of a category of rewards, that contains many individual rewards.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
categoryHash | integer:uint32 | Identifies the reward category.  Only guaranteed unique within this specific component!
categoryIdentifier | string | The string identifier for the category, if you want to use it for some end.  Guaranteed uniquewithin the specific component.
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | Hopefully this is obvious by now.
rewardEntries | Dictionary&lt;integer:uint32,[[DestinyMilestoneRewardEntryDefinition|Destiny-Definitions-Milestones-DestinyMilestoneRewardEntryDefinition]]:Definition&gt; | If this milestone can provide rewards, this will define the setsof rewards that can be earned, the conditions under which they can be acquired,internal data that we'll use at runtime to determine whether you'vealready earned or redeemed this set of rewards,and the category that this reward should be placed under.
order | integer:int32 | If you want to use BNet's recommended order for rendering categories programmatically,use this value and compare it to other categories to determine the order in whichthey should be rendered.  I don't feel great about putting this here, I won't lie.

## Example
```javascript
{
    // Type: integer:uint32
    "categoryHash": 0,
    // Type: string
    "categoryIdentifier": "",
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
            // Type: integer:int32
            "order": 0
        }
    },
    // Type: integer:int32
    "order": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Milestones-DestinyMilestoneRewardCategoryDefinition.html#schema_Destiny-Definitions-Milestones-DestinyMilestoneRewardCategoryDefinition
