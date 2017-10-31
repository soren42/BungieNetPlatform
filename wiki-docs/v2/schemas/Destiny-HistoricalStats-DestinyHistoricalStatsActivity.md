<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Summary information about the activity that was played.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
referenceId | [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32 | The unique hash identifier of the DestinyActivityDefinition that was played. If I had this to do over, it'd be named activityHash. Too late now.
directorActivityHash | [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32 | The unique hash identifier of the DestinyActivityDefinition that was played.
instanceId | integer:int64 | The unique identifier for this *specific* match that was played. This value can be used to get additional data about this activity such as who else was playing via the GetPostGameCarnageReport endpoint.
mode | [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum | Indicates the most specific game mode of the activity that we could find.
modes | [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum[] | The list of all Activity Modes to which this activity applies, including aggregates. This will let you see, for example, whether the activity was both Clash and part of the Trials of the Nine event.
isPrivate | boolean | Whether or not the match was a private match. There's no private matches in Destiny 2... yet... DUN DUN DUNNNN

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
    "referenceId": 0,
    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
    "directorActivityHash": 0,
    // Type: integer:int64
    "instanceId": 0,
    // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
    "mode": {},
    // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum[]
    "modes": [
       // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
        0
    ],
    // Type: boolean
    "isPrivate": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyHistoricalStatsActivity.html#schema_Destiny-HistoricalStats-DestinyHistoricalStatsActivity
