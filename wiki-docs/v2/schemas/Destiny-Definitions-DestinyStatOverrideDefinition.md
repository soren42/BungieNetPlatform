<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Stat Groups (DestinyStatGroupDefinition) has the ability to override the localized textassociated with stats that are to be shown on the items with which they are associated. This defines a specific overridden stat.  You could theoretically check these beforerendering your stat UI, and for each stat that has an override show these displayPropertiesinstead of those on the DestinyStatDefinition. Or you could be like us, and skip that for now because the game has yet to actuallyuse this feature.  But know that it's here, waiting for a resilliant young designer totake up the mantle and make us all look foolish by showing the wrong name for stats. Note that, if this gets used, the override will apply only to items using the overridingStat Group.  Other items will still show the default stat's name/description.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
statHash | [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32 | The hash identifier of the stat whose display properties are being overridden.
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | The display properties to show instead of the base DestinyStatDefinition display properties.

## Example
```javascript
{
    // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
    "statHash": 0,
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
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyStatOverrideDefinition.html#schema_Destiny-Definitions-DestinyStatOverrideDefinition
