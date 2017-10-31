<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The static data about Activities in Destiny 2. Note that an Activity must be combined with an ActivityMode to know - from a Gameplay perspective - what the user is &quot;Playing&quot;. In most PvE activities, this is fairly straightforward. A Story Activity can only be played in the Story Activity Mode. However, in PvP activities, the Activity alone only tells you the map being played, or the Playlist that the user chose to enter. You'll need to know the Activity Mode they're playing to know that they're playing Mode X on Map Y. Activity Definitions tell a great deal of information about what *could* be relevant to a user: what rewards they can earn, what challenges could be performed, what modifiers could be applied. To figure out which of these properties is actually live, you'll need to combine the definition with &quot;Live&quot; data from one of the Destiny endpoints. Activities also have Activity Types, but unfortunately in Destiny 2 these are even less reliable of a source of information than they were in Destiny 1. I will be looking into ways to provide more reliable sources for type information as time goes on, but for now we're going to have to deal with the limitations. See DestinyActivityTypeDefinition for more information.

## Schema
* **Schema Type:** Manifest Definition
* **Type:** object
* **Mobile Manifest:** Activities

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | The title, subtitle, and icon for the activity.
releaseIcon | string | If the activity has an icon associated with a specific release (such as a DLC), this is the path to that release's icon.
releaseTime | integer:int32 | If the activity will not be visible until a specific and known time, this will be the seconds since the Epoch when it will become visible.
activityLevel | integer:int32 | The difficulty level of the activity.
activityLightLevel | integer:int32 | The recommended light level for this activity.
destinationHash | [[Destiny.Definitions.DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:integer:uint32 | The hash identifier for the Destination on which this Activity is played. Use it to look up the DestinyDestinationDefinition for human readable info about the destination. A Destination can be thought of as a more specific location than a &quot;Place&quot;. For instance, if the &quot;Place&quot; is Earth, the &quot;Destination&quot; would be a specific city or region on Earth.
placeHash | [[Destiny.Definitions.DestinyPlaceDefinition|Destiny-Definitions-DestinyPlaceDefinition]]:integer:uint32 | The hash identifier for the &quot;Place&quot; on which this Activity is played. Use it to look up the DestinyPlaceDefinition for human readable info about the Place. A Place is the largest-scoped concept for location information. For instance, if the &quot;Place&quot; is Earth, the &quot;Destination&quot; would be a specific city or region on Earth.
activityTypeHash | [[Destiny.Definitions.DestinyActivityTypeDefinition|Destiny-Definitions-DestinyActivityTypeDefinition]]:integer:uint32 | The hash identifier for the Activity Type of this Activity. You may use it to look up the DestinyActivityTypeDefinition for human readable info, but be forewarned: Playlists and many PVP Map Activities will map to generic Activity Types. You'll have to use your knowledge of the Activity Mode being played to get more specific information about what the user is playing.
tier | integer:int32 | The difficulty tier of the activity.
pgcrImage | string | When Activities are completed, we generate a &quot;Post-Game Carnage Report&quot;, or PGCR, with details about what happened in that activity (how many kills someone got, which team won, etc...) We use this image as the background when displaying PGCR information, and often use it when we refer to the Activity in general.
rewards | [[DestinyActivityRewardDefinition|Destiny-Definitions-DestinyActivityRewardDefinition]]:Definition[] | The expected possible rewards for the activity. These rewards may or may not be accessible for an individual player based on their character state, the account state, and even the game's state overall. But it is a useful reference for possible rewards you can earn in the activity. These match up to rewards displayed when you hover over the Activity in the in-game Director, and often refer to Placeholder or &quot;Dummy&quot; items: items that tell you what you can earn in vague terms rather than what you'll specifically be earning (partly because the game doesn't even know what you'll earn specifically until you roll for it at the end)
modifiers | [[DestinyActivityModifierReferenceDefinition|Destiny-Definitions-DestinyActivityModifierReferenceDefinition]]:Definition[] | Activities can have Modifiers, as defined in DestinyActivityModifierDefinition. These are references to the modifiers that *can* be applied to that activity, along with data that we use to determine if that modifier is actually active at any given point in time.
isPlaylist | boolean | If True, this Activity is actually a Playlist that refers to multiple possible specific Activities and Activity Modes. For instance, a Crucible Playlist may have references to multiple Activities (Maps) with multiple Activity Modes (specific PvP gameplay modes). If this is true, refer to the playlistItems property for the specific entries in the playlist.
challenges | [[DestinyActivityChallengeDefinition|Destiny-Definitions-DestinyActivityChallengeDefinition]]:Definition[] | An activity can have many Challenges, of which any subset of them may be active for play at any given period of time. This gives the information about the challenges and data that we use to understand when they're active and what rewards they provide. Sadly, at the moment there's no central definition for challenges: much like &quot;Skulls&quot; were in Destiny 1, these are defined on individual activities and there can be many duplicates/near duplicates across the Destiny 2 ecosystem. I have it in mind to centralize these in a future revision of the API, but we are out of time.
optionalUnlockStrings | [[DestinyActivityUnlockStringDefinition|Destiny-Definitions-DestinyActivityUnlockStringDefinition]]:Definition[] | If there are status strings related to the activity and based on internal state of the game, account, or character, then this will be the definition of those strings and the states needed in order for the strings to be shown.
playlistItems | [[DestinyActivityPlaylistItemDefinition|Destiny-Definitions-DestinyActivityPlaylistItemDefinition]]:Definition[] | Represents all of the possible activities that could be played in the Playlist, along with information that we can use to determine if they are active at the present time.
activityGraphList | [[DestinyActivityGraphListEntryDefinition|Destiny-Definitions-DestinyActivityGraphListEntryDefinition]]:Definition[] | Unfortunately, in practice this is almost never populated. In theory, this is supposed to tell which Activity Graph to show if you bring up the director while in this activity.
matchmaking | [[DestinyActivityMatchmakingBlockDefinition|Destiny-Definitions-DestinyActivityMatchmakingBlockDefinition]]:Definition | This block of data provides information about the Activity's matchmaking attributes: how many people can join and such.
guidedGame | [[DestinyActivityGuidedBlockDefinition|Destiny-Definitions-DestinyActivityGuidedBlockDefinition]]:Definition | This block of data, if it exists, provides information about the guided game experience and restrictions for this activity. If it doesn't exist, the game is not able to be played as a guided game.
directActivityModeHash | [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32:nullable | If this activity had an activity mode directly defined on it, this will be the hash of that mode.
directActivityModeType | integer:int32:nullable | If the activity had an activity mode directly defined on it, this will be the enum value of that mode.
activityModeHashes | [[Destiny.Definitions.DestinyActivityModeDefinition|Destiny-Definitions-DestinyActivityModeDefinition]]:integer:uint32[] | The hash identifiers for Activity Modes relevant to this activity.  Note that if this is a playlist, the specific playlist entry chosen will determine the actual activity modes that end up being relevant.
activityModeTypes | [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum[] | The activity modes - if any - in enum form. Because we can't seem to escape the enums.
isPvP | boolean | If true, this activity is a PVP activity or playlist.
hash | integer:uint32 | The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

## Example
```javascript
{
    // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
    "displayProperties": {},
    // Type: string
    "releaseIcon": "",
    // Type: integer:int32
    "releaseTime": 0,
    // Type: integer:int32
    "activityLevel": 0,
    // Type: integer:int32
    "activityLightLevel": 0,
    // Type: [[Destiny.Definitions.DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:integer:uint32
    "destinationHash": 0,
    // Type: [[Destiny.Definitions.DestinyPlaceDefinition|Destiny-Definitions-DestinyPlaceDefinition]]:integer:uint32
    "placeHash": 0,
    // Type: [[Destiny.Definitions.DestinyActivityTypeDefinition|Destiny-Definitions-DestinyActivityTypeDefinition]]:integer:uint32
    "activityTypeHash": 0,
    // Type: integer:int32
    "tier": 0,
    // Type: string
    "pgcrImage": "",
    // Type: [[DestinyActivityRewardDefinition|Destiny-Definitions-DestinyActivityRewardDefinition]]:Definition[]
    "rewards": [
       // Type: [[DestinyActivityRewardDefinition|Destiny-Definitions-DestinyActivityRewardDefinition]]:Definition
        {
            // Type: string
            "rewardText": "",
            // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
            "rewardItems": [
               // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]]
                {
                    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                    "itemHash": 0,
                    // Type: integer:int64:nullable
                    "itemInstanceId": 0,
                    // Type: integer:int32
                    "quantity": 0
                }
            ]
        }
    ],
    // Type: [[DestinyActivityModifierReferenceDefinition|Destiny-Definitions-DestinyActivityModifierReferenceDefinition]]:Definition[]
    "modifiers": [
       // Type: [[DestinyActivityModifierReferenceDefinition|Destiny-Definitions-DestinyActivityModifierReferenceDefinition]]:Definition
        {
            // Type: [[Destiny.Definitions.ActivityModifiers.DestinyActivityModifierDefinition|Destiny-Definitions-ActivityModifiers-DestinyActivityModifierDefinition]]:integer:uint32
            "activityModifierHash": 0
        }
    ],
    // Type: boolean
    "isPlaylist": false,
    // Type: [[DestinyActivityChallengeDefinition|Destiny-Definitions-DestinyActivityChallengeDefinition]]:Definition[]
    "challenges": [
       // Type: [[DestinyActivityChallengeDefinition|Destiny-Definitions-DestinyActivityChallengeDefinition]]:Definition
        {
            // Type: [[Destiny.Definitions.DestinyObjectiveDefinition|Destiny-Definitions-DestinyObjectiveDefinition]]:integer:uint32
            "objectiveHash": 0
        }
    ],
    // Type: [[DestinyActivityUnlockStringDefinition|Destiny-Definitions-DestinyActivityUnlockStringDefinition]]:Definition[]
    "optionalUnlockStrings": [
       // Type: [[DestinyActivityUnlockStringDefinition|Destiny-Definitions-DestinyActivityUnlockStringDefinition]]:Definition
        {
            // Type: string
            "displayString": ""
        }
    ],
    // Type: [[DestinyActivityPlaylistItemDefinition|Destiny-Definitions-DestinyActivityPlaylistItemDefinition]]:Definition[]
    "playlistItems": [
       // Type: [[DestinyActivityPlaylistItemDefinition|Destiny-Definitions-DestinyActivityPlaylistItemDefinition]]:Definition
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
    ],
    // Type: [[DestinyActivityGraphListEntryDefinition|Destiny-Definitions-DestinyActivityGraphListEntryDefinition]]:Definition[]
    "activityGraphList": [
       // Type: [[DestinyActivityGraphListEntryDefinition|Destiny-Definitions-DestinyActivityGraphListEntryDefinition]]:Definition
        {
            // Type: [[Destiny.Definitions.Director.DestinyActivityGraphDefinition|Destiny-Definitions-Director-DestinyActivityGraphDefinition]]:integer:uint32
            "activityGraphHash": 0
        }
    ],
    // Type: [[DestinyActivityMatchmakingBlockDefinition|Destiny-Definitions-DestinyActivityMatchmakingBlockDefinition]]:Definition
    "matchmaking": {},
    // Type: [[DestinyActivityGuidedBlockDefinition|Destiny-Definitions-DestinyActivityGuidedBlockDefinition]]:Definition
    "guidedGame": {},
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
    ],
    // Type: boolean
    "isPvP": false,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyActivityDefinition.html#schema_Destiny-Definitions-DestinyActivityDefinition
