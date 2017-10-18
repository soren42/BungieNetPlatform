<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents localized, extended content related to Milestones.This is intentionally returned by a separate endpoint and not with Character-level Milestone databecause we do not put localized data into standard Destiny responses, both for brevity of responseand for caching purposes.  If you really need this data, hit the Milestone Content endpoint.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
about | string | The &quot;About this Milestone&quot; text from the Firehose.
status | string | The Current Status of the Milestone, as driven by the Firehose.
tips | string[] | A list of tips, provided by the Firehose.
itemCategories | [[DestinyMilestoneContentItemCategory|Destiny-Milestones-DestinyMilestoneContentItemCategory]][] | If DPS has defined items related to this Milestone, they can categorize those items in the Firehose.That data will then be returned as item categories here.

## Example
```javascript
{
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyMilestoneContent.html#schema_Destiny-Milestones-DestinyMilestoneContent
