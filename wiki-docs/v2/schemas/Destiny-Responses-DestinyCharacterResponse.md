<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
inventory | [[SingleComponentResponseOfDestinyInventoryComponent|SingleComponentResponseOfDestinyInventoryComponent]] | The character-level non-equipped inventory items. COMPONENT TYPE: CharacterInventories
character | [[SingleComponentResponseOfDestinyCharacterComponent|SingleComponentResponseOfDestinyCharacterComponent]] | Base information about the character in question. COMPONENT TYPE: Characters
progressions | [[SingleComponentResponseOfDestinyCharacterProgressionComponent|SingleComponentResponseOfDestinyCharacterProgressionComponent]] | Character progression data, including Milestones. COMPONENT TYPE: CharacterProgressions
renderData | [[SingleComponentResponseOfDestinyCharacterRenderComponent|SingleComponentResponseOfDestinyCharacterRenderComponent]] | Character rendering data - a minimal set of information about equipment and dyes used for rendering. COMPONENT TYPE: CharacterRenderData
activities | [[SingleComponentResponseOfDestinyCharacterActivitiesComponent|SingleComponentResponseOfDestinyCharacterActivitiesComponent]] | Activity data - info about current activities available to the player. COMPONENT TYPE: CharacterActivities
equipment | [[SingleComponentResponseOfDestinyInventoryComponent|SingleComponentResponseOfDestinyInventoryComponent]] | Equipped items on the character. COMPONENT TYPE: CharacterEquipment
kiosks | [[SingleComponentResponseOfDestinyKiosksComponent|SingleComponentResponseOfDestinyKiosksComponent]] | Items available from Kiosks that are available to this specific character. COMPONENT TYPE: Kiosks
itemComponents | [[DestinyItemComponentSetOfint64|DestinyItemComponentSetOfint64]] | The set of components belonging to the player's instanced items. COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]

## Example
```javascript
{
    // Type: [[SingleComponentResponseOfDestinyInventoryComponent|SingleComponentResponseOfDestinyInventoryComponent]]
    "inventory": {},
    // Type: [[SingleComponentResponseOfDestinyCharacterComponent|SingleComponentResponseOfDestinyCharacterComponent]]
    "character": {},
    // Type: [[SingleComponentResponseOfDestinyCharacterProgressionComponent|SingleComponentResponseOfDestinyCharacterProgressionComponent]]
    "progressions": {},
    // Type: [[SingleComponentResponseOfDestinyCharacterRenderComponent|SingleComponentResponseOfDestinyCharacterRenderComponent]]
    "renderData": {},
    // Type: [[SingleComponentResponseOfDestinyCharacterActivitiesComponent|SingleComponentResponseOfDestinyCharacterActivitiesComponent]]
    "activities": {},
    // Type: [[SingleComponentResponseOfDestinyInventoryComponent|SingleComponentResponseOfDestinyInventoryComponent]]
    "equipment": {},
    // Type: [[SingleComponentResponseOfDestinyKiosksComponent|SingleComponentResponseOfDestinyKiosksComponent]]
    "kiosks": {},
    // Type: [[DestinyItemComponentSetOfint64|DestinyItemComponentSetOfint64]]
    "itemComponents": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Responses-DestinyCharacterResponse.html#schema_Destiny-Responses-DestinyCharacterResponse
