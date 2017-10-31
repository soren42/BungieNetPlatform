<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This component contains base properties of the character. You'll probably want to always request this component, but hey you do you.

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** Characters

## Properties
Name | Type | Description
---- | ---- | -----------
membershipId | integer:int64 | Every Destiny Profile has a membershipId. This is provided on the character as well for convenience.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | membershipType tells you the platform on which the character plays. Examine the BungieMembershipType enumeration for possible values.
characterId | integer:int64 | The unique identifier for the character.
dateLastPlayed | string:date-time | The last date that the user played Destiny.
minutesPlayedThisSession | integer:int64 | If the user is currently playing, this is how long they've been playing.
minutesPlayedTotal | integer:int64 | If this value is 525,600, then they played Destiny for a year. Or they're a very dedicated Rent fan. Note that this includes idle time, not just time spent actually in activities shooting things.
light | integer:int32 | The user's calculated &quot;Light Level&quot;. Light level is an indicator of your power that mostly matters in the end game, once you've reached the maximum character level: it's a level that's dependent on the average Attack/Defense power of your items.
stats | Dictionary&lt;integer:uint32,integer:int32&gt; | Your character's stats, such as Agility, Resilience, etc... *not* historical stats. You'll have to call a different endpoint for those.
raceHash | [[Destiny.Definitions.DestinyRaceDefinition|Destiny-Definitions-DestinyRaceDefinition]]:integer:uint32 | Use this hash to look up the character's DestinyRaceDefinition.
genderHash | [[Destiny.Definitions.DestinyGenderDefinition|Destiny-Definitions-DestinyGenderDefinition]]:integer:uint32 | Use this hash to look up the character's DestinyGenderDefinition.
classHash | [[Destiny.Definitions.DestinyClassDefinition|Destiny-Definitions-DestinyClassDefinition]]:integer:uint32 | Use this hash to look up the character's DestinyClassDefinition.
raceType | [[DestinyRace|Destiny-DestinyRace]]:Enum | Mostly for historical purposes at this point, this is an enumeration for the character's race. It'll be preferable in the general case to look up the related definition: but for some people this was too convenient to remove.
classType | [[DestinyClass|Destiny-DestinyClass]]:Enum | Mostly for historical purposes at this point, this is an enumeration for the character's class. It'll be preferable in the general case to look up the related definition: but for some people this was too convenient to remove.
genderType | [[DestinyGender|Destiny-DestinyGender]]:Enum | Mostly for historical purposes at this point, this is an enumeration for the character's Gender. It'll be preferable in the general case to look up the related definition: but for some people this was too convenient to remove. And yeah, it's an enumeration and not a boolean. Fight me.
emblemPath | string | A shortcut path to the user's currently equipped emblem image. If you're just showing summary info for a user, this is more convenient than examining their equipped emblem and looking up the definition.
emblemBackgroundPath | string | A shortcut path to the user's currently equipped emblem background image. If you're just showing summary info for a user, this is more convenient than examining their equipped emblem and looking up the definition.
emblemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | The hash of the currently equipped emblem for the user. Can be used to look up the DestinyInventoryItemDefinition.
emblemColor | [[DestinyColor|Destiny-Misc-DestinyColor]] | A shortcut for getting the background color of the user's currently equipped emblem without having to do a DestinyInventoryItemDefinition lookup.
levelProgression | [[DestinyProgression|Destiny-DestinyProgression]] | The progression that indicates your character's level. Not their light level, but their character level: you know, the thing you max out a couple hours in and then ignore for the sake of light level.
baseCharacterLevel | integer:int32 | The &quot;base&quot; level of your character, not accounting for any light level.
percentToNextLevel | number:float | A number between 0 and 100, indicating the whole and fractional % remaining to get to the next character level.

## Example
```javascript
{
    // Type: integer:int64
    "membershipId": 0,
    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
    "membershipType": {},
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
    // Type: [[Destiny.Definitions.DestinyRaceDefinition|Destiny-Definitions-DestinyRaceDefinition]]:integer:uint32
    "raceHash": 0,
    // Type: [[Destiny.Definitions.DestinyGenderDefinition|Destiny-Definitions-DestinyGenderDefinition]]:integer:uint32
    "genderHash": 0,
    // Type: [[Destiny.Definitions.DestinyClassDefinition|Destiny-Definitions-DestinyClassDefinition]]:integer:uint32
    "classHash": 0,
    // Type: [[DestinyRace|Destiny-DestinyRace]]:Enum
    "raceType": {},
    // Type: [[DestinyClass|Destiny-DestinyClass]]:Enum
    "classType": {},
    // Type: [[DestinyGender|Destiny-DestinyGender]]:Enum
    "genderType": {},
    // Type: string
    "emblemPath": "",
    // Type: string
    "emblemBackgroundPath": "",
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "emblemHash": 0,
    // Type: [[DestinyColor|Destiny-Misc-DestinyColor]]
    "emblemColor": {},
    // Type: [[DestinyProgression|Destiny-DestinyProgression]]
    "levelProgression": {},
    // Type: integer:int32
    "baseCharacterLevel": 0,
    // Type: number:float
    "percentToNextLevel": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Characters-DestinyCharacterComponent.html#schema_Destiny-Entities-Characters-DestinyCharacterComponent
