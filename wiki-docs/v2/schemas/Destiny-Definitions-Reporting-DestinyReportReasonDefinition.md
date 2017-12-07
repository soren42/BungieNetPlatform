<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A specific reason for being banned. Only accessible under the related category (DestinyReportReasonCategoryDefinition) under which it is shown. Note that this means that report reasons' reasonHash are not globally unique: and indeed, entries like &quot;Other&quot; are defined under most categories for example.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
reasonHash | integer:uint32 | The identifier for the reason: they are only guaranteed unique under the Category in which they are found.
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 

## Example
```javascript
{
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Reporting-DestinyReportReasonDefinition.html#schema_Destiny-Definitions-Reporting-DestinyReportReasonDefinition
