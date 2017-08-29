<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Information about a current character's status with a Progression.A progression is a value that can increase with activity and has levels.Think Character Level and Reputation Levels.Combine this &quot;live&quot; data with the related DestinyProgressionDefinition for a full pictureof the Progression.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
progressionHash | [[DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:ManifestDefinition:integer:uint32 | The hash identifier of the Progression in question.  Use it to look up the DestinyProgressionDefinition in static data.
dailyProgress | integer:int32 | The amount of progress earned today for this progression.
dailyLimit | integer:int32 | If this progression has a daily limit, this is that limit.
weeklyProgress | integer:int32 | The amount of progress earned toward this progression in the current week.
weeklyLimit | integer:int32 | If this progression has a weekly limit, this is that limit.
currentProgress | integer:int32 | This is the total amount of progress obtained overall for thisprogression (for instance, the total amount of Character Level experience earned)
level | integer:int32 | This is the level of the progression (for instance, the Character Level).
levelCap | integer:int32 | This is the maximum possible level you can achieve for this progression (for example, the maximumcharacter level obtainable)
stepIndex | integer:int32 | Progressions define their levels in &quot;steps&quot;.  Since the last step may be repeatable, the user maybe at a higher level than the actual Step achieved in the progression.  Not necessarily useful, butpotentially interesting for those cruising the API.  Relate this to the &quot;steps&quot; property of the DestinyProgressionto see which step the user is on, if you care about that.  (Note that this is Content Version dependent sinceit refers to indexes.)
progressToNextLevel | integer:int32 | The amount of progression (i.e. &quot;Experience&quot;) needed to reach the next level of this Progression.Jeez, progression is such an overloaded word.
nextLevelAt | integer:int32 | The total amount of progression (i.e. &quot;Experience&quot;) needed in order to reach the next level.

## Example
```javascript
{
    // Type: [[DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:ManifestDefinition:integer:uint32
    "progressionHash": 0,
    // Type: integer:int32
    "dailyProgress": 0,
    // Type: integer:int32
    "dailyLimit": 0,
    // Type: integer:int32
    "weeklyProgress": 0,
    // Type: integer:int32
    "weeklyLimit": 0,
    // Type: integer:int32
    "currentProgress": 0,
    // Type: integer:int32
    "level": 0,
    // Type: integer:int32
    "levelCap": 0,
    // Type: integer:int32
    "stepIndex": 0,
    // Type: integer:int32
    "progressToNextLevel": 0,
    // Type: integer:int32
    "nextLevelAt": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-DestinyProgression.html#schema_Destiny-DestinyProgression
