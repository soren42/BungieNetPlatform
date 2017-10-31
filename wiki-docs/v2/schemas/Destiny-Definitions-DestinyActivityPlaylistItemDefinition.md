<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If the activity is a playlist, this is the definition for a specific entry in the playlist: a single possible combination of Activity and Activity Mode that can be chosen.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
activityHash | [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32 | The hash identifier of the Activity that can be played. Use it to look up the DestinyActivityDefinition.
directActivityModeHash | [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32:nullable | If this playlist entry had an activity mode directly defined on it, this will be the hash of that mode.
directActivityModeType | integer:int32:nullable | If the playlist entry had an activity mode directly defined on it, this will be the enum value of that mode.
activityModeHashes | [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32[] | The hash identifiers for Activity Modes relevant to this entry.
activityModeTypes | [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum[] | The activity modes - if any - in enum form. Because we can't seem to escape the enums.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
    "activityHash": 0,
    // Type: [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32:nullable
    "directActivityModeHash": 0,
    // Type: integer:int32:nullable
    "directActivityModeType": 0,
    // Type: [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32[]
    "activityModeHashes": [
       // Type: integer:uint32
        0
    ],
    // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum[]
    "activityModeTypes": [
       // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyActivityPlaylistItemDefinition.html#schema_Destiny-Definitions-DestinyActivityPlaylistItemDefinition
