<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
largeIcon | string | 
subtitle | string | 
requirementsDisplay | [[DestinyVendorRequirementDisplayEntryDefinition|Destiny-Definitions-DestinyVendorRequirementDisplayEntryDefinition]]:Definition[] | Vendors, in addition to expected display property data, may also showsome &quot;common requirements&quot; as statically defined definition data.  This might be whena vendor accepts a single type of currency, or when the currency is unique to the vendorand the designers wanted to show that currency when you interact with the vendor.
description | string | 
name | string | 
icon | string | Note that &quot;icon&quot; is sometimes misleading, and should be interpreted in the context of the entity.For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book. But usually, it will be a small square image that you can use as... well, an icon.
hasIcon | boolean | 

## Example
```javascript
{
    // Type: string
    "largeIcon": "",
    // Type: string
    "subtitle": "",
    // Type: [[DestinyVendorRequirementDisplayEntryDefinition|Destiny-Definitions-DestinyVendorRequirementDisplayEntryDefinition]]:Definition[]
    "requirementsDisplay": [
       // Type: [[DestinyVendorRequirementDisplayEntryDefinition|Destiny-Definitions-DestinyVendorRequirementDisplayEntryDefinition]]:Definition
        {
            // Type: string
            "icon": "",
            // Type: string
            "name": "",
            // Type: string
            "source": "",
            // Type: string
            "type": ""
        }
    ],
    // Type: string
    "description": "",
    // Type: string
    "name": "",
    // Type: string
    "icon": "",
    // Type: boolean
    "hasIcon": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyVendorDisplayPropertiesDefinition.html#schema_Destiny-Definitions-DestinyVendorDisplayPropertiesDefinition
