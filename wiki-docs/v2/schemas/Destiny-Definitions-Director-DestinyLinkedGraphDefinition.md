<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This describes links between the current graph and others, as well as when that link is relevant.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
description | string | 
name | string | 
unlockExpression | [[DestinyUnlockExpressionDefinition|Destiny-Definitions-DestinyUnlockExpressionDefinition]]:Definition | 
linkedGraphId | integer:uint32 | 
linkedGraphs | [[DestinyLinkedGraphEntryDefinition|Destiny-Definitions-Director-DestinyLinkedGraphEntryDefinition]]:Definition[] | 
overview | string | 

## Example
```javascript
{
    // Type: string
    "description": "",
    // Type: string
    "name": "",
    // Type: [[DestinyUnlockExpressionDefinition|Destiny-Definitions-DestinyUnlockExpressionDefinition]]:Definition
    "unlockExpression": {
        // Type: [[DestinyGatingScope|Destiny-DestinyGatingScope]]:Enum
        "scope": 0
    },
    // Type: integer:uint32
    "linkedGraphId": 0,
    // Type: [[DestinyLinkedGraphEntryDefinition|Destiny-Definitions-Director-DestinyLinkedGraphEntryDefinition]]:Definition[]
    "linkedGraphs": [
       // Type: [[DestinyLinkedGraphEntryDefinition|Destiny-Definitions-Director-DestinyLinkedGraphEntryDefinition]]:Definition
        {
            // Type: integer:uint32
            "activityGraphHash": 0
        }
    ],
    // Type: string
    "overview": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Director-DestinyLinkedGraphDefinition.html#schema_Destiny-Definitions-Director-DestinyLinkedGraphDefinition
