<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If you're going to report someone for a Terms of Service violation, you need to choose a category and reason for the report. This definition holds both the categories and the reasons within those categories, for simplicity and my own laziness' sake. Note tha this means that, to refer to a Reason by reasonHash, you need a combination of the reasonHash *and* the associated ReasonCategory's hash: there are some reasons defined under multiple categories.

## Schema
* **Schema Type:** Manifest Definition
* **Type:** object
* **Mobile Manifest:** ReportReasonCategories

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
reasons | Dictionary&lt;integer:uint32,[[DestinyReportReasonDefinition|Destiny-Definitions-Reporting-DestinyReportReasonDefinition]]:Definition&gt; | The specific reasons for the report under this category.
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
    // Type: Dictionary&lt;integer:uint32,[[DestinyReportReasonDefinition|Destiny-Definitions-Reporting-DestinyReportReasonDefinition]]:Definition&gt;
    "reasons": {
        "0": {
            // Type: integer:uint32
            "reasonHash": 0,
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
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Reporting-DestinyReportReasonCategoryDefinition.html#schema_Destiny-Definitions-Reporting-DestinyReportReasonCategoryDefinition
