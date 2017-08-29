<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This component contains base properties of the character.  You'll probably want to always request this component,but hey you do you.

## Schema
* **Type:** Class
* **Component Type Dependency:** Characters

## Properties
Name | Type | Description
---- | ---- | -----------
membershipId | integer:int64 | Every Destiny Profile has a membershipId.  This is provided on the character as well for convenience.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | membershipType tells you the platform on which the character plays.Examine the BungieMembershipType enumeration for possible values.
characterId | integer:int64 | The unique identifier for the character.
dateLastPlayed | string:date-time | The last date that the user played Destiny.
minutesPlayedThisSession | integer:int64 | If the user is currently playing, this is how long they've been playing.
minutesPlayedTotal | integer:int64 | If this value is 525,600, then they played Destiny for a year.  Or they're a very dedicated Rent fan.Note that this includes idle time, not just time spent actually in activities shooting things.
light | integer:int32 | The user's calculated &quot;Light Level&quot;.  Light level is an indicator of your power that mostly matters inthe end game, once you've reached the maximum character level: it's a level that's dependent on the averageAttack/Defense power of your items.
stats | Dictionary&lt;integer:uint32,integer:int32&gt; | Your character's stats, such as Agility, Resilience, etc... *not* historical stats. You'll have to call a different endpoint for those.
raceHash | [[DestinyRaceDefinition|Destiny-Definitions-DestinyRaceDefinition]]:ManifestDefinition:integer:uint32 | Use this hash to look up the character's DestinyRaceDefinition.
genderHash | [[DestinyGenderDefinition|Destiny-Definitions-DestinyGenderDefinition]]:ManifestDefinition:integer:uint32 | Use this hash to look up the character's DestinyGenderDefinition.
classHash | [[DestinyClassDefinition|Destiny-Definitions-DestinyClassDefinition]]:ManifestDefinition:integer:uint32 | Use this hash to look up the character's DestinyClassDefinition.
raceType | [[DestinyRace|Destiny-DestinyRace]]:Enum | Mostly for historical purposes at this point, this is an enumeration for the character's race. It'll be preferable in the general case to look up the related definition: but for some people thiswas too convenient to remove.
classType | [[DestinyClass|Destiny-DestinyClass]]:Enum | Mostly for historical purposes at this point, this is an enumeration for the character's class. It'll be preferable in the general case to look up the related definition: but for some people thiswas too convenient to remove.
genderType | [[DestinyGender|Destiny-DestinyGender]]:Enum | Mostly for historical purposes at this point, this is an enumeration for the character's Gender. It'll be preferable in the general case to look up the related definition: but for some people thiswas too convenient to remove.  And yeah, it's an enumeration and not a boolean.  Fight me.
emblemPath | string | A shortcut path to the user's currently equipped emblem image.  If you're just showing summaryinfo for a user, this is more convenient than examining their equipped emblem and looking up the definition.
emblemBackgroundPath | string | A shortcut path to the user's currently equipped emblem background image.  If you're just showing summaryinfo for a user, this is more convenient than examining their equipped emblem and looking up the definition.
emblemHash | [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32 | The hash of the currently equipped emblem for the user.  Can be used to look up the DestinyInventoryItemDefinition.
levelProgression | [[DestinyProgression|Destiny-DestinyProgression]] | The progression that indicates your character's level.  Not their light level, but theircharacter level: you know, the thing you max out a couple hours in and then ignore forthe sake of light level.
baseCharacterLevel | integer:int32 | The &quot;base&quot; level of your character, not accounting for any light level.
percentToNextLevel | number:float | A number between 0 and 100, indicating the whole and fractional % remaining to get tothe next character level.

## Example
```javascript
{
    // Type: integer:int64
    "membershipId": 0,
    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
    "membershipType": 0,
    // Type: integer:int64
    "characterId": 0,
    // Type: string:date-time
    "dateLastPlayed": "",
    // Type: integer:int64
    "minutesPlayedThisSession": 0,
    // Type: integer:int64
    "minutesPlayedTotal": 0,
    // Type: integer:int32
    "light": 0,
    // Type: Dictionary&lt;integer:uint32,integer:int32&gt;
    "stats": {
        "0": 0
    },
    // Type: [[DestinyRaceDefinition|Destiny-Definitions-DestinyRaceDefinition]]:ManifestDefinition:integer:uint32
    "raceHash": 0,
    // Type: [[DestinyGenderDefinition|Destiny-Definitions-DestinyGenderDefinition]]:ManifestDefinition:integer:uint32
    "genderHash": 0,
    // Type: [[DestinyClassDefinition|Destiny-Definitions-DestinyClassDefinition]]:ManifestDefinition:integer:uint32
    "classHash": 0,
    // Type: [[DestinyRace|Destiny-DestinyRace]]:Enum
    "raceType": 0,
    // Type: [[DestinyClass|Destiny-DestinyClass]]:Enum
    "classType": 0,
    // Type: [[DestinyGender|Destiny-DestinyGender]]:Enum
    "genderType": 0,
    // Type: string
    "emblemPath": "",
    // Type: string
    "emblemBackgroundPath": "",
    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
    "emblemHash": 0,
    // Type: [[DestinyProgression|Destiny-DestinyProgression]]
    "levelProgression": {
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
    },
    // Type: integer:int32
    "baseCharacterLevel": 0,
    // Type: number:float
    "percentToNextLevel": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Characters-DestinyCharacterComponent.html#schema_Destiny-Entities-Characters-DestinyCharacterComponent
