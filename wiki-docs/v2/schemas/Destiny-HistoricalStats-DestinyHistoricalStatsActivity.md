<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
referenceId | [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32 | Hash ID that can be looked up in the DestinyActivityTable.
instanceId | integer:int64 | This value can be used to get additional data about this activity such as who else was playing.
mode | [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum | Indicates the game mode of the activity.
activityTypeHashOverride | [[DestinyActivityTypeDefinition|Destiny-Definitions-DestinyActivityTypeDefinition]]:ManifestDefinition:integer:uint32 | Hash ID that can be looked up in the DestinyActivityTypeTable. Prefer this value over the type used by the activity if it is specified.
isPrivate | boolean | Whether or not the match was a private match.

## Example
```javascript
{
    // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
    "referenceId": 0,
    // Type: integer:int64
    "instanceId": 0,
    // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
    "mode": 0,
    // Type: [[DestinyActivityTypeDefinition|Destiny-Definitions-DestinyActivityTypeDefinition]]:ManifestDefinition:integer:uint32
    "activityTypeHashOverride": 0,
    // Type: boolean
    "isPrivate": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyHistoricalStatsActivity.html#schema_Destiny-HistoricalStats-DestinyHistoricalStatsActivity
