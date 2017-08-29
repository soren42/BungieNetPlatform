<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents the &quot;Live&quot; data that we can obtain about a Character's status with a specific Activity.This will tell you whether the character can participate in the activity, as well as some otherbasic mutable information. Meant to be combined with static DestinyActivityDefinition data for a fullpicture of the Activity.

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
activityHash | [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32 | The hash identifier of the Activity.  Use this to look up the DestinyActivityDefinition of the activity.
isNew | boolean | If true, then the activity should have a &quot;new&quot; indicator in the Director UI.
canLead | boolean | If true, the user is allowed to lead a Fireteam into this activity.
canJoin | boolean | If true, the user is allowed to join with another Fireteam in this activity.
isCompleted | boolean | If true, we both have the ability to know that the user has completed this activity andthey have completed it.  Unfortunately, we can't necessarily know this for all activities.  As such,this should probably only be used if you already know in advance which specific activities you wish to check.
isVisible | boolean | If true, the user should be able to see this activity.
displayLevel | integer:int32:nullable | The difficulty level of the activity, if applicable.
recommendedLight | integer:int32:nullable | The recommended light level for the activity, if applicable.
difficultyTier | [[DestinyActivityDifficultyTier|Destiny-DestinyActivityDifficultyTier]]:Enum | A DestinyActivityDifficultyTier enum value indicating the difficulty of the activity.

## Example
```javascript
{
    // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
    "activityHash": 0,
    // Type: boolean
    "isNew": false,
    // Type: boolean
    "canLead": false,
    // Type: boolean
    "canJoin": false,
    // Type: boolean
    "isCompleted": false,
    // Type: boolean
    "isVisible": false,
    // Type: integer:int32:nullable
    "displayLevel": 0,
    // Type: integer:int32:nullable
    "recommendedLight": 0,
    // Type: [[DestinyActivityDifficultyTier|Destiny-DestinyActivityDifficultyTier]]:Enum
    "difficultyTier": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-DestinyActivity.html#schema_Destiny-DestinyActivity
