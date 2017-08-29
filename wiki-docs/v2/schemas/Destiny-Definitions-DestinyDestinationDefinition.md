<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
On to one of the more confusing subjects of the API.  What is a Destination, and whatis the relationship between it, Activities, Locations, and Places? A &quot;Destination&quot; is a specific region/city/area of a larger &quot;Place&quot;.For instance, a Place might be Earth where a Destination might be Bellevue, Washington.(Please, pick a more interesting destination if you come to visit Earth).

## Schema
* **Schema Type:** Definition
* **Mobile Manifest:** Destinations

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
placeHash | [[DestinyPlaceDefinition|Destiny-Definitions-DestinyPlaceDefinition]]:ManifestDefinition:integer:uint32 | The place that &quot;owns&quot; this Destination.  Use this hash to look up the DestinyPlaceDefinition.
defaultFreeroamActivityHash | [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32 | If this Destination has a default Free-Roam activity, this is the hash for that Activity.Use it to look up the DestinyActivityDefintion.
activityGraphEntries | [[DestinyActivityGraphListEntryDefinition|Destiny-Definitions-DestinyActivityGraphListEntryDefinition]]:Definition[] | If the Destination has default Activity Graphs (i.e. &quot;Map&quot;) that should be shownin the director, this is the list of those Graphs.  At most, only one should be activeat any given time for a Destination: these would represent, for example, differentvariants on a Map if the Destination is changing on a macro level based on game state.
bubbleSettings | [[DestinyDestinationBubbleSettingDefinition|Destiny-Definitions-DestinyDestinationBubbleSettingDefinition]]:Definition[] | A Destination may have many &quot;Bubbles&quot; zones with human readable properties. We don't get as much info as I'd like about them - I'd love to return info like where on the map they are located - but at least this gives you the name of those bubbles.bubbleSettings and bubbles both have the identical number of entries, and you shouldmatch up their indexes to provide matching bubble and bubbleSettings data.
bubbles | [[DestinyBubbleDefinition|Destiny-Definitions-DestinyBubbleDefinition]]:Definition[] | This provides the unique identifiers for every bubble in the destination(only guaranteed unique within the destination), and any intrinsic properties of the bubble. bubbleSettings and bubbles both have the identical number of entries, and you shouldmatch up their indexes to provide matching bubble and bubbleSettings data.
hash | integer:uint32 | The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet isnot yet allowed to show it.  Sorry!

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
    // Type: [[DestinyPlaceDefinition|Destiny-Definitions-DestinyPlaceDefinition]]:ManifestDefinition:integer:uint32
    "placeHash": 0,
    // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
    "defaultFreeroamActivityHash": 0,
    // Type: [[DestinyActivityGraphListEntryDefinition|Destiny-Definitions-DestinyActivityGraphListEntryDefinition]]:Definition[]
    "activityGraphEntries": [
       // Type: [[DestinyActivityGraphListEntryDefinition|Destiny-Definitions-DestinyActivityGraphListEntryDefinition]]:Definition
        {
            // Type: [[DestinyActivityGraphDefinition|Destiny-Definitions-Director-DestinyActivityGraphDefinition]]:ManifestDefinition:integer:uint32
            "activityGraphHash": 0
        }
    ],
    // Type: [[DestinyDestinationBubbleSettingDefinition|Destiny-Definitions-DestinyDestinationBubbleSettingDefinition]]:Definition[]
    "bubbleSettings": [
       // Type: [[DestinyDestinationBubbleSettingDefinition|Destiny-Definitions-DestinyDestinationBubbleSettingDefinition]]:Definition
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
            }
        }
    ],
    // Type: [[DestinyBubbleDefinition|Destiny-Definitions-DestinyBubbleDefinition]]:Definition[]
    "bubbles": [
       // Type: [[DestinyBubbleDefinition|Destiny-Definitions-DestinyBubbleDefinition]]:Definition
        {
            // Type: integer:uint32
            "hash": 0
        }
    ],
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyDestinationDefinition.html#schema_Destiny-Definitions-DestinyDestinationDefinition
