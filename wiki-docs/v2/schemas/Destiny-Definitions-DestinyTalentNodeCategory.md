<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
An artificial construct provided by Bungie.Net, where we attempt to group talent nodesby functionality. This is a single set of references to Talent Nodes that share a commontrait or purpose.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
identifier | string | Mostly just for debug purposes, but if you find it useful you can have it.This is BNet's manually created identifier for this category.
isLoreDriven | boolean | If true, we found the localized content in a related DestinyLoreDefinitioninstead of local BNet localization files.  This is mostly for ease of my own future investigations.
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | Will contain at least the &quot;name&quot;, which will be the title of the category.We will likely not have description and an icon yet, but I'm going to keep my optionsopen.
nodeHashes | integer:uint32[] | The set of all hash identifiers for Talent Nodes (DestinyTalentNodeDefinition)in this Talent Grid that are part of this Category.

## Example
```javascript
{
    // Type: string
    "identifier": "",
    // Type: boolean
    "isLoreDriven": false,
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
    // Type: integer:uint32[]
    "nodeHashes": [
       // Type: integer:uint32
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyTalentNodeCategory.html#schema_Destiny-Definitions-DestinyTalentNodeCategory
