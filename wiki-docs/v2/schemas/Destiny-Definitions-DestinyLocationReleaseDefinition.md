<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A specific &quot;spot&quot; referred to by a location.  Only one of these can be active at a time fora given Location.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | Sadly, these don't appear to be populated anymore (ever?)
spawnPoint | integer:uint32 | If we had map information, this spawnPoint would be interesting.  But sadly, we don't have that info.
destinationHash | [[DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:ManifestDefinition:integer:uint32 | The Destination being pointed to by this location.
activityHash | [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32 | The Activity being pointed to by this location.
activityGraphHash | integer:uint32 | The Activity Graph being pointed to by this location.
activityGraphNodeHash | integer:uint32 | The Activity Graph Node being pointed to by this location.  (Remember thatActivity Graph Node hashes are only unique within an Activity Graph: so use the combinationto find the node being spoken of)
activityBubbleName | integer:uint32 | The Activity Bubble within the Destination.  Look this up in the DestinyDestinationDefinition'sbubbles and bubbleSettings properties.
activityPathBundle | integer:uint32 | If we had map information, this would tell us something cool about the path this location wantsyou to take.  I wish we had map information.
activityPathDestination | integer:uint32 | If we had map information, this would tell us about path information related to destinationon the map.  Sad.  Maybe you can do something cool with it.  Go to town man.
navPointType | [[DestinyActivityNavPointType|Destiny-DestinyActivityNavPointType]]:Enum | The type of Nav Point that this represents.  See the enumeration for more info.
worldPosition | integer:int32[] | Looks like it should be the position on the map, but sadly it does not look populated... yet?

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
    // Type: integer:uint32
    "spawnPoint": 0,
    // Type: [[DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:ManifestDefinition:integer:uint32
    "destinationHash": 0,
    // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
    "activityHash": 0,
    // Type: integer:uint32
    "activityGraphHash": 0,
    // Type: integer:uint32
    "activityGraphNodeHash": 0,
    // Type: integer:uint32
    "activityBubbleName": 0,
    // Type: integer:uint32
    "activityPathBundle": 0,
    // Type: integer:uint32
    "activityPathDestination": 0,
    // Type: [[DestinyActivityNavPointType|Destiny-DestinyActivityNavPointType]]:Enum
    "navPointType": 0,
    // Type: integer:int32[]
    "worldPosition": [
       // Type: integer:int32
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyLocationReleaseDefinition.html#schema_Destiny-Definitions-DestinyLocationReleaseDefinition
