<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The static data about Activities in Destiny 2. Note that an Activity must be combined with an ActivityMode to know - from a Gameplay perspective -what the user is &quot;Playing&quot;. In most PvE activities, this is fairly straightforward.  A Story Activity can only be played in the StoryActivity Mode. However, in PvP activities, the Activity alone only tells you the map being played, or the Playlist that the userchose to enter.  You'll need to know the Activity Mode they're playing to know that they're playing Mode X on Map Y. Activity Definitions tell a great deal of information about what *could* be relevant to a user: what rewards theycan earn, what challenges could be performed, what modifiers could be applied.  To figure out which of these propertiesis actually live, you'll need to combine the definition with &quot;Live&quot; data from one of the Destiny endpoints. Activities also have Activity Types, but unfortunately in Destiny 2 these are even less reliable of a source ofinformation than they were in Destiny 1.  I will be looking into ways to provide more reliable sources for type informationas time goes on, but for now we're going to have to deal with the limitations.  See DestinyActivityTypeDefinitionfor more information.

## Schema
* **Schema Type:** Manifest Definition
* **Mobile Manifest:** Activities

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | The title, subtitle, and icon for the activity.
releaseIcon | string | If the activity has an icon associated with a specific release (such as a DLC),this is the path to that release's icon.
releaseTime | integer:int32 | If the activity will not be visible until a specific and known time, this will bethe seconds since the Epoch when it will become visible.
activityLevel | integer:int32 | The difficulty level of the activity.
activityLightLevel | integer:int32 | The recommended light level for this activity.
destinationHash | [[Destiny.Definitions.DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:integer:uint32 | The hash identifier for the Destination on which this Activity is played.  Use it to look upthe DestinyDestinationDefinition for human readable info about the destination.A Destination can be thought of as a more specific location than a &quot;Place&quot;.  For instance,if the &quot;Place&quot; is Earth, the &quot;Destination&quot; would be a specific city or region on Earth.
placeHash | [[Destiny.Definitions.DestinyPlaceDefinition|Destiny-Definitions-DestinyPlaceDefinition]]:integer:uint32 | The hash identifier for the &quot;Place&quot; on which this Activity is played.  Use it to look upthe DestinyPlaceDefinition for human readable info about the Place.A Place is the largest-scoped concept for location information.  For instance,if the &quot;Place&quot; is Earth, the &quot;Destination&quot; would be a specific city or region on Earth.
activityTypeHash | [[Destiny.Definitions.DestinyActivityTypeDefinition|Destiny-Definitions-DestinyActivityTypeDefinition]]:integer:uint32 | The hash identifier for the Activity Type of this Activity.  You may use it to look upthe DestinyActivityTypeDefinition for human readable info, but be forewarned: Playlists andmany PVP Map Activities will map to generic Activity Types.  You'll have to use your knowledgeof the Activity Mode being played to get more specific information about what the user is playing.
tier | integer:int32 | The difficulty tier of the activity.
pgcrImage | string | When Activities are completed, we generate a &quot;Post-Game Carnage Report&quot;, or PGCR, with details aboutwhat happened in that activity (how many kills someone got, which team won, etc...)  We use this imageas the background when displaying PGCR information, and often use it when we refer to the Activity in general.
rewards | [[DestinyActivityRewardDefinition|Destiny-Definitions-DestinyActivityRewardDefinition]]:Definition[] | The expected possible rewards for the activity.  These rewards may or may not be accessible for an individual playerbased on their character state, the account state, and even the game's state overall.  But it is a useful referencefor possible rewards you can earn in the activity.  These match up to rewards displayed when you hover overthe Activity in the in-game Director, and often refer to Placeholder or &quot;Dummy&quot; items: items that tell you what you can earn in vague terms rather than what you'll specifically be earning (partly because the gamedoesn't even know what you'll earn specifically until you roll for it at the end)
modifiers | [[DestinyActivityModifierReferenceDefinition|Destiny-Definitions-DestinyActivityModifierReferenceDefinition]]:Definition[] | Activities can have Modifiers, as defined in DestinyActivityModifierDefinition.  These are referencesto the modifiers that *can* be applied to that activity, along with data that we use to determine ifthat modifier is actually active at any given point in time.
isPlaylist | boolean | If True, this Activity is actually a Playlist that refers to multiple possible specific Activities and ActivityModes.  For instance, a Crucible Playlist may have references to multiple Activities (Maps) with multiple Activity Modes(specific PvP gameplay modes).  If this is true, refer to the playlistItems property for the specific entriesin the playlist.
challenges | [[DestinyActivityChallengeDefinition|Destiny-Definitions-DestinyActivityChallengeDefinition]]:Definition[] | An activity can have many Challenges, of which any subset of them may be active for playat any given period of time.  This gives the information about the challenges and datathat we use to understand when they're active and what rewards they provide.Sadly, at the moment there's no central definition for challenges: much like &quot;Skulls&quot; werein Destiny 1, these are defined on individual activities and there can be many duplicates/near duplicatesacross the Destiny 2 ecosystem.  I have it in mind to centralize these in a future revision of the API, butwe are out of time.
optionalUnlockStrings | [[DestinyActivityUnlockStringDefinition|Destiny-Definitions-DestinyActivityUnlockStringDefinition]]:Definition[] | If there are status strings related to the activity and based on internal state of the game, account, or character,then this will be the definition of those strings and the states needed in order for the strings to be shown.
activityGraphList | [[DestinyActivityGraphListEntryDefinition|Destiny-Definitions-DestinyActivityGraphListEntryDefinition]]:Definition[] | Unfortunately, in practice this is almost never populated.  In theory, this is supposed to tellwhich Activity Graph to show if you bring up the director while in this activity.
matchmaking | [[DestinyActivityMatchmakingBlockDefinition|Destiny-Definitions-DestinyActivityMatchmakingBlockDefinition]]:Definition | This block of data provides information about the Activity's matchmaking attributes: how many people can join and such.
guidedGame | [[DestinyActivityGuidedBlockDefinition|Destiny-Definitions-DestinyActivityGuidedBlockDefinition]]:Definition | This block of data, if it exists, provides information about the guided game experience and restrictions for thisactivity.  If it doesn't exist, the game is not able to be played as a guided game.
activityModeHash | integer:uint32 | The Activity Mode for this activity.  Note that if this is a playlist, the specific playlist entry chosenwill determine the actual activity mode that ends up being played.
isPvP | boolean | If true, this activity is a PVP activity or playlist.
hash | integer:uint32 | The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet isnot yet allowed to show it.  Sorry!

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
    // Type: [[DestinyActivityGraphListEntryDefinition|Destiny-Definitions-DestinyActivityGraphListEntryDefinition]]:Definition[]
    "activityGraphList": [
       // Type: [[DestinyActivityGraphListEntryDefinition|Destiny-Definitions-DestinyActivityGraphListEntryDefinition]]:Definition
        {
            // Type: [[Destiny.Definitions.Director.DestinyActivityGraphDefinition|Destiny-Definitions-Director-DestinyActivityGraphDefinition]]:integer:uint32
            "activityGraphHash": 0
        }
    ],
    // Type: [[DestinyActivityMatchmakingBlockDefinition|Destiny-Definitions-DestinyActivityMatchmakingBlockDefinition]]:Definition
    "matchmaking": {
        // Type: boolean
        "isMatchmade": false,
        // Type: integer:int32
        "minParty": 0,
        // Type: integer:int32
        "maxParty": 0,
        // Type: integer:int32
        "maxPlayers": 0,
        // Type: boolean
        "requiresGuardianOath": false
    },
    // Type: [[DestinyActivityGuidedBlockDefinition|Destiny-Definitions-DestinyActivityGuidedBlockDefinition]]:Definition
    "guidedGame": {
        // Type: integer:int32
        "guidedMaxLobbySize": 0,
        // Type: integer:int32
        "guidedMinLobbySize": 0,
        // Type: integer:int32
        "guidedDisbandCount": 0
    },
    // Type: integer:uint32
    "activityModeHash": 0,
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
