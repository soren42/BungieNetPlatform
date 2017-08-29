<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This property has some history.  A talent grid can provide stats on both the item it's related to andthe character equipping the item.  This returns data about those stat bonuses.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
currentStepStats | [[DestinyStat|Destiny-DestinyStat]][] | The stat benefits conferred when this talent node is activated for the current Step that is active on the node.
nextStepStats | [[DestinyStat|Destiny-DestinyStat]][] | This is a holdover from the old days of Destiny 1, when a node could be activated multiple times, conferringmultiple steps worth of benefits: you would use this property to show what activating the &quot;next&quot; step on the nodewould provide vs. what the current step is providing.While Nodes are currently not being used this way, the underlying system for this functionality still exists.I hesitate to remove this property while the ability for designers to make such a talent grid still exists.Whether you want to show it is up to you.

## Example
```javascript
{
    // Type: [[DestinyStat|Destiny-DestinyStat]][]
    "currentStepStats": [
       // Type: [[DestinyStat|Destiny-DestinyStat]]
        {
            // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
            "statHash": 0,
            // Type: integer:int32
            "value": 0,
            // Type: integer:int32
            "maximumValue": 0
        }
    ],
    // Type: [[DestinyStat|Destiny-DestinyStat]][]
    "nextStepStats": [
       // Type: [[DestinyStat|Destiny-DestinyStat]]
        {
            // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
            "statHash": 0,
            // Type: integer:int32
            "value": 0,
            // Type: integer:int32
            "maximumValue": 0
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-DestinyTalentNodeStatBlock.html#schema_Destiny-DestinyTalentNodeStatBlock
