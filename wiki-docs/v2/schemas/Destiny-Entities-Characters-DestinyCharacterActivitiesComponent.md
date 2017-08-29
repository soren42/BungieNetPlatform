<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This component holds activity data for a character.  It will tell you about the character's current activity status,as well as activities that are available to the user.

## Schema
* **Type:** Class
* **Component Type Dependency:** CharacterActivities

## Properties
Name | Type | Description
---- | ---- | -----------
dateActivityStarted | string:date-time | The last date that the user started playing an activity.
availableActivities | [[DestinyActivity|Destiny-DestinyActivity]][] | The list of activities that the user can play.
currentActivityHash | [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32 | If the user is in an activity, this will be the hash of the Activity being played.Note that you must combine this info with currentActivityModeHash to get a real picture of whatthe user is doing right now.  For instance, PVP &quot;Activities&quot; are just maps: it's the ActivityModethat determines what type of PVP game they're playing.
currentActivityModeHash | [[DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:ManifestDefinition:integer:uint32 | If the user is in an activity, this will be the hash of the activity mode being played.Combine with currentActivityHash to give a person a full picture of what they're doing right now.
lastCompletedStoryHash | [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32 | This will have the activity hash of the last completed story/campaign mission, in case you care about that.

## Example
```javascript
{
    // Type: string:date-time
    "dateActivityStarted": "",
    // Type: [[DestinyActivity|Destiny-DestinyActivity]][]
    "availableActivities": [
       // Type: [[DestinyActivity|Destiny-DestinyActivity]]
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
    ],
    // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
    "currentActivityHash": 0,
    // Type: [[DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:ManifestDefinition:integer:uint32
    "currentActivityModeHash": 0,
    // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
    "lastCompletedStoryHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Characters-DestinyCharacterActivitiesComponent.html#schema_Destiny-Entities-Characters-DestinyCharacterActivitiesComponent
