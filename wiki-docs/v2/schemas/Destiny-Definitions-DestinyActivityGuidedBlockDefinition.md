<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Guided Game information for this activity.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
guidedMaxLobbySize | integer:int32 | The maximum amount of people that can be in the waiting lobby.
guidedMinLobbySize | integer:int32 | The minimum amount of people that can be in the waiting lobby.
guidedDisbandCount | integer:int32 | If -1, the guided group cannot be disbanded.  Otherwise, take the total # of players in the activityand subtract this number: that is the total # of votes needed for the guided group to disband.

## Example
```javascript
{
    // Type: integer:int32
    "guidedMaxLobbySize": 0,
    // Type: integer:int32
    "guidedMinLobbySize": 0,
    // Type: integer:int32
    "guidedDisbandCount": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyActivityGuidedBlockDefinition.html#schema_Destiny-Definitions-DestinyActivityGuidedBlockDefinition
