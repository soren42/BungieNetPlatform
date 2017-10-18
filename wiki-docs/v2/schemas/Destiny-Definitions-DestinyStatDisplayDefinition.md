<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Describes the way that an Item Stat (see DestinyStatDefinition) is transformedusing the DestinyStatGroupDefinition related to that item.  See both of the aforementioneddefinitions for more information about the stages of stat transformation. This represents the transformation of a stat into a &quot;Display&quot; stat (the closest valuethat BNet can get to the in-game display value of the stat)

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
statHash | [[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32 | The hash identifier for the stat being transformed into a Display stat. Use it to look up the DestinyStatDefinition, or key into a DestinyInventoryItemDefinition'sstats property.
maximumValue | integer:int32 | Regardless of the output of interpolation, this is the maximum possible valuethat the stat can be.  It should also be used as the upper boundfor displaying the stat as a progress bar (the minimum always being 0)
displayAsNumeric | boolean | If this is true, the stat should be displayed as a number.  Otherwise, display it asa progress bar.  Or, you know, do whatever you want.  There's no displayAsNumericpolice.
displayInterpolation | [[InterpolationPoint|Interpolation-InterpolationPoint]][] | The interpolation table representing how the Investment Stat is transformed intoa Display Stat. See DestinyStatDefinition for a description of the stages ofstat transformation.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:integer:uint32
    "statHash": 0,
    // Type: integer:int32
    "maximumValue": 0,
    // Type: boolean
    "displayAsNumeric": false,
    // Type: [[InterpolationPoint|Interpolation-InterpolationPoint]][]
    "displayInterpolation": [
       // Type: [[InterpolationPoint|Interpolation-InterpolationPoint]]
        {
            // Type: integer:int32
            "value": 0,
            // Type: integer:int32
            "weight": 0
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyStatDisplayDefinition.html#schema_Destiny-Definitions-DestinyStatDisplayDefinition
