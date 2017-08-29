<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyItemObjectivesComponent|Destiny-Entities-Items-DestinyItemObjectivesComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyItemObjectivesComponent|Destiny-Entities-Items-DestinyItemObjectivesComponent]]
    "data": {
        // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]][]
        "objectives": [
           // Type: [[DestinyObjectiveProgress|Destiny-Quests-DestinyObjectiveProgress]]
            {
                // Type: [[DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:ManifestDefinition:integer:uint32
                "objectiveHash": 0,
                // Type: [[DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:ManifestDefinition:integer:uint32:nullable
                "destinationHash": 0,
                // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32:nullable
                "activityHash": 0,
                // Type: integer:int32:nullable
                "progress": 0,
                // Type: boolean
                "complete": false
            }
        ]
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyItemObjectivesComponent.html#schema_SingleComponentResponseOfDestinyItemObjectivesComponent
