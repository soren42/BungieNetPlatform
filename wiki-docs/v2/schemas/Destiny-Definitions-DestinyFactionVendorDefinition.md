<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
These definitions represent faction vendors at different points in the game. A single faction may contain multiple vendors, or the same vendor available at two different locations.

## Schema
* **Schema Type:** Manifest Definition
* **Type:** object
* **Mobile Manifest:** Factions

## Properties
Name | Type | Description
---- | ---- | -----------
vendorHash | [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32 | The faction vendor hash.
destinationHash | [[Destiny.Definitions.DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:integer:uint32 | The faction vendor destination hash.
backgroundImagePath | string | The relative path to the background image, for use in a banner.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32
    "vendorHash": 0,
    // Type: [[Destiny.Definitions.DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:integer:uint32
    "destinationHash": 0,
    // Type: string
    "backgroundImagePath": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyFactionVendorDefinition.html#schema_Destiny-Definitions-DestinyFactionVendorDefinition
