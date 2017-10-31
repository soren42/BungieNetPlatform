<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an &quot;itemInstanceId&quot;: for those, get your information from the DestinyInventoryDefinition.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
characterId | integer:int64:nullable | If the item is on a character, this will return the ID of the character that is holding the item.
item | [[SingleComponentResponseOfDestinyItemComponent|SingleComponentResponseOfDestinyItemComponent]] | Common data for the item relevant to its non-instanced properties. COMPONENT TYPE: ItemCommonData
instance | [[SingleComponentResponseOfDestinyItemInstanceComponent|SingleComponentResponseOfDestinyItemInstanceComponent]] | Basic instance data for the item. COMPONENT TYPE: ItemInstances
objectives | [[SingleComponentResponseOfDestinyItemObjectivesComponent|SingleComponentResponseOfDestinyItemObjectivesComponent]] | Information specifically about the item's objectives. COMPONENT TYPE: ItemObjectives
perks | [[SingleComponentResponseOfDestinyItemPerksComponent|SingleComponentResponseOfDestinyItemPerksComponent]] | Information specifically about the perks currently active on the item. COMPONENT TYPE: ItemPerks
renderData | [[SingleComponentResponseOfDestinyItemRenderComponent|SingleComponentResponseOfDestinyItemRenderComponent]] | Information about how to render the item in 3D. COMPONENT TYPE: ItemRenderData
stats | [[SingleComponentResponseOfDestinyItemStatsComponent|SingleComponentResponseOfDestinyItemStatsComponent]] | Information about the computed stats of the item: power, defense, etc... COMPONENT TYPE: ItemStats
talentGrid | [[SingleComponentResponseOfDestinyItemTalentGridComponent|SingleComponentResponseOfDestinyItemTalentGridComponent]] | Information about the talent grid attached to the item. Talent nodes can provide a variety of benefits and abilities, and in Destiny 2 are used almost exclusively for the character's &quot;Builds&quot;. COMPONENT TYPE: ItemTalentGrids
sockets | [[SingleComponentResponseOfDestinyItemSocketsComponent|SingleComponentResponseOfDestinyItemSocketsComponent]] | Information about the sockets of the item: which are currently active, what potential sockets you could have and the stats/abilities/perks you can gain from them. COMPONENT TYPE: ItemSockets

## Example
```javascript
{
    // Type: integer:int64:nullable
    "characterId": 0,
    // Type: [[SingleComponentResponseOfDestinyItemComponent|SingleComponentResponseOfDestinyItemComponent]]
    "item": {},
    // Type: [[SingleComponentResponseOfDestinyItemInstanceComponent|SingleComponentResponseOfDestinyItemInstanceComponent]]
    "instance": {},
    // Type: [[SingleComponentResponseOfDestinyItemObjectivesComponent|SingleComponentResponseOfDestinyItemObjectivesComponent]]
    "objectives": {},
    // Type: [[SingleComponentResponseOfDestinyItemPerksComponent|SingleComponentResponseOfDestinyItemPerksComponent]]
    "perks": {},
    // Type: [[SingleComponentResponseOfDestinyItemRenderComponent|SingleComponentResponseOfDestinyItemRenderComponent]]
    "renderData": {},
    // Type: [[SingleComponentResponseOfDestinyItemStatsComponent|SingleComponentResponseOfDestinyItemStatsComponent]]
    "stats": {},
    // Type: [[SingleComponentResponseOfDestinyItemTalentGridComponent|SingleComponentResponseOfDestinyItemTalentGridComponent]]
    "talentGrid": {},
    // Type: [[SingleComponentResponseOfDestinyItemSocketsComponent|SingleComponentResponseOfDestinyItemSocketsComponent]]
    "sockets": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Responses-DestinyItemResponse.html#schema_Destiny-Responses-DestinyItemResponse
