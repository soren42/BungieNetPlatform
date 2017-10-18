<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:int32,[[DestinyItemObjectivesComponent|Destiny-Entities-Items-DestinyItemObjectivesComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:int32,[[DestinyItemObjectivesComponent|Destiny-Entities-Items-DestinyItemObjectivesComponent]]&gt;
    "data": {
        "0": {
            // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]][]
            "objectives": [
               // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]]
                {
                    // Type: [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32
                    "objectiveHash": 0,
                    // Type: [[Destiny.Definitions.DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:integer:uint32:nullable
                    "destinationHash": 0,
                    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32:nullable
                    "activityHash": 0,
                    // Type: integer:int32:nullable
                    "progress": 0,
                    // Type: boolean
                    "complete": false
                }
            ]
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent.html#schema_DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent
