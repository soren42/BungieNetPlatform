<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A &quot;Location&quot; is a sort of shortcut for referring to a specificcombination of Activity, Destination, Place, and even Bubble or NavPoint withina space. Most of this data isn't intrinsically useful to us, but Objectives refer tolocations, and through that we can at least infer the Activity, Destination, and Placebeing referred to by the Objective.

## Schema
* **Type:** Definition
* **Mobile Manifest:** Locations

## Properties
Name | Type | Description
---- | ---- | -----------
vendorHash | [[DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:ManifestDefinition:integer:uint32 | If the location has a Vendor on it, this is the hash identifier for that Vendor.Look them up with DestinyVendorDefinition.
locationReleases | [[DestinyLocationReleaseDefinition|Destiny-Definitions-DestinyLocationReleaseDefinition]]:Definition[] | A Location may refer to different specific spots in the world based on the world's current state.This is a list of those potential spots, and the data we can use at runtime to determinewhich one of the spots is the currently valid one.
hash | integer:uint32 | The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet isnot yet allowed to show it.  Sorry!

## Example
```javascript
{
    // Type: [[DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:ManifestDefinition:integer:uint32
    "vendorHash": 0,
    // Type: [[DestinyLocationReleaseDefinition|Destiny-Definitions-DestinyLocationReleaseDefinition]]:Definition[]
    "locationReleases": [
       // Type: [[DestinyLocationReleaseDefinition|Destiny-Definitions-DestinyLocationReleaseDefinition]]:Definition
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
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyLocationDefinition.html#schema_Destiny-Definitions-DestinyLocationDefinition
