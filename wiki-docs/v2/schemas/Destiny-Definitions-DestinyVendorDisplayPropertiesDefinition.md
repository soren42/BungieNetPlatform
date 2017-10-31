<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
largeIcon | string | I regret calling this a &quot;large icon&quot;. It's more like a medium-sized image with a picture of the vendor's mug on it, trying their best to look cool. Not what one would call an icon.
subtitle | string | 
originalIcon | string | If we replaced the icon with something more glitzy, this is the original icon that the vendor had according to the game's content. It may be more lame and/or have less razzle-dazzle. But who am I to tell you which icon to use.
requirementsDisplay | [[DestinyVendorRequirementDisplayEntryDefinition|Destiny-Definitions-DestinyVendorRequirementDisplayEntryDefinition]]:Definition[] | Vendors, in addition to expected display property data, may also show some &quot;common requirements&quot; as statically defined definition data. This might be when a vendor accepts a single type of currency, or when the currency is unique to the vendor and the designers wanted to show that currency when you interact with the vendor.
description | string | 
name | string | 
icon | string | Note that &quot;icon&quot; is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book. But usually, it will be a small square image that you can use as... well, an icon.
hasIcon | boolean | 

## Example
```javascript
{
    // Type: string
    "largeIcon": "",
    // Type: string
    "subtitle": "",
    // Type: string
    "originalIcon": "",
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
