<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This definition represents an &quot;Activity Mode&quot; as it exists in the Historical Stats endpoints. An individual Activity Mode represents a collection of activities that are played in a certain way. For example, Nightfall Strikes are part of a &quot;Nightfall&quot; activity mode, and any activities played as the PVP mode &quot;Clash&quot; are part of the &quot;Clash activity mode. Activity modes are nested under each other in a hierarchy, so that if you ask for - for example - &quot;AllPvP&quot;, you will get any PVP activities that the user has played, regardless of what specific PVP mode was being played.

## Schema
* **Schema Type:** Manifest Definition
* **Type:** object
* **Mobile Manifest:** ActivityModes

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
pgcrImage | string | If this activity mode has a related PGCR image, this will be the path to said image.
modeType | [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum | The Enumeration value for this Activity Mode. Pass this identifier into Stats endpoints to get aggregate stats for this mode.
activityModeCategory | [[DestinyActivityModeCategory|Destiny-DestinyActivityModeCategory]]:Enum | The type of play being performed in broad terms (PVP, PVE)
isTeamBased | boolean | If True, this mode has oppositional teams fighting against each other rather than &quot;Free-For-All&quot; or Co-operative modes of play. Note that Aggregate modes are never marked as team based, even if they happen to be team based at the moment. At any time, an aggregate whose subordinates are only team based could be changed so that one or more aren't team based, and then this boolean won't make much sense (the aggregation would become &quot;sometimes team based&quot;). Let's not deal with that right now.
isAggregateMode | boolean | If true, this mode is an aggregation of other, more specific modes rather than being a mode in itself. This includes modes that group Features/Events rather than Gameplay, such as Trials of The Nine: Trials of the Nine being an Event that is interesting to see aggregate data for, but when you play the activities within Trials of the Nine they are more specific activity modes such as Clash.
parentHashes | integer:uint32[] | The hash identifiers of the DestinyActivityModeDefinitions that represent all of the &quot;parent&quot; modes for this mode. For instance, the Nightfall Mode is also a member of AllStrikes and AllPvE.
friendlyName | string | A Friendly identifier you can use for referring to this Activity Mode. We really only used this in our URLs, so... you know, take that for whatever it's worth.
activityModeMappings | Dictionary&lt;integer:uint32,[[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum&gt; | If this exists, the mode has specific Activities (referred to by the Key) that should instead map to other Activity Modes when they are played. This was useful in D1 for Private Matches, where we wanted to have Private Matches as an activity mode while still referring to the specific mode being played.
display | boolean | If FALSE, we want to ignore this type when we're showing activity modes in BNet UI. It will still be returned in case 3rd parties want to use it for any purpose.
order | integer:int32 | The relative ordering of activity modes.
hash | integer:uint32 | The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

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
    // Type: string
    "pgcrImage": "",
    // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
    "modeType": {},
    // Type: [[DestinyActivityModeCategory|Destiny-DestinyActivityModeCategory]]:Enum
    "activityModeCategory": {},
    // Type: boolean
    "isTeamBased": false,
    // Type: boolean
    "isAggregateMode": false,
    // Type: integer:uint32[]
    "parentHashes": [
       // Type: integer:uint32
        0
    ],
    // Type: string
    "friendlyName": "",
    // Type: Dictionary&lt;integer:uint32,[[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum&gt;
    "activityModeMappings": {
        "0": 0
    },
    // Type: boolean
    "display": false,
    // Type: integer:int32
    "order": 0,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyActivityModeDefinition.html#schema_Destiny-Definitions-DestinyActivityModeDefinition
