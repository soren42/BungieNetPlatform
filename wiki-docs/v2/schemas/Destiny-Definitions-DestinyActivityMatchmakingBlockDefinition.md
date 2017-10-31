<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Information about matchmaking and party size for the activity.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
isMatchmade | boolean | If TRUE, the activity is matchmade. Otherwise, it requires explicit forming of a party.
minParty | integer:int32 | The minimum # of people in the fireteam for the activity to launch.
maxParty | integer:int32 | The maximum # of people allowed in a Fireteam.
maxPlayers | integer:int32 | The maximum # of people allowed across all teams in the activity.
requiresGuardianOath | boolean | If true, you have to Solemnly Swear to be up to Nothing But Good(tm) to play.

## Example
```javascript
{
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
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyActivityMatchmakingBlockDefinition.html#schema_Destiny-Definitions-DestinyActivityMatchmakingBlockDefinition
