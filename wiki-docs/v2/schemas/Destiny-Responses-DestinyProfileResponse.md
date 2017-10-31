<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The response for GetDestinyProfile, with components for character and item-level data.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
vendorReceipts | [[SingleComponentResponseOfDestinyVendorReceiptsComponent|SingleComponentResponseOfDestinyVendorReceiptsComponent]] | Recent, refundable purchases you have made from vendors. When will you use it? Couldn't say... COMPONENT TYPE: VendorReceipts
profileInventory | [[SingleComponentResponseOfDestinyInventoryComponent|SingleComponentResponseOfDestinyInventoryComponent]] | The profile-level inventory of the Destiny Profile. COMPONENT TYPE: ProfileInventories
profileCurrencies | [[SingleComponentResponseOfDestinyInventoryComponent|SingleComponentResponseOfDestinyInventoryComponent]] | The profile-level currencies owned by the Destiny Profile. COMPONENT TYPE: ProfileCurrencies
profile | [[SingleComponentResponseOfDestinyProfileComponent|SingleComponentResponseOfDestinyProfileComponent]] | The basic information about the Destiny Profile (formerly &quot;Account&quot;). COMPONENT TYPE: Profiles
profileKiosks | [[SingleComponentResponseOfDestinyKiosksComponent|SingleComponentResponseOfDestinyKiosksComponent]] | Items available from Kiosks that are available Profile-wide (i.e. across all characters) This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the characterKiosks property. COMPONENT TYPE: Kiosks
characters | [[DictionaryComponentResponseOfint64AndDestinyCharacterComponent|DictionaryComponentResponseOfint64AndDestinyCharacterComponent]] | Basic information about each character, keyed by the CharacterId. COMPONENT TYPE: Characters
characterInventories | [[DictionaryComponentResponseOfint64AndDestinyInventoryComponent|DictionaryComponentResponseOfint64AndDestinyInventoryComponent]] | The character-level non-equipped inventory items, keyed by the Character's Id. COMPONENT TYPE: CharacterInventories
characterProgressions | [[DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent|DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent]] | Character-level progression data, keyed by the Character's Id. COMPONENT TYPE: CharacterProgressions
characterRenderData | [[DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent|DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent]] | Character rendering data - a minimal set of info needed to render a character in 3D - keyed by the Character's Id. COMPONENT TYPE: CharacterRenderData
characterActivities | [[DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent|DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent]] | Character activity data - the activities available to this character and its status, keyed by the Character's Id. COMPONENT TYPE: CharacterActivities
characterEquipment | [[DictionaryComponentResponseOfint64AndDestinyInventoryComponent|DictionaryComponentResponseOfint64AndDestinyInventoryComponent]] | The character's equipped items, keyed by the Character's Id. COMPONENT TYPE: CharacterEquipment
characterKiosks | [[DictionaryComponentResponseOfint64AndDestinyKiosksComponent|DictionaryComponentResponseOfint64AndDestinyKiosksComponent]] | Items available from Kiosks that are available to a specific character as opposed to the account as a whole. It must be combined with data from the profileKiosks property to get a full picture of the character's available items to check out of a kiosk. This component returns information about what Kiosk items are available to you on a *Character* level. Usually, kiosk items will be earned for the entire Profile (all characters) at once. To find those, look in the profileKiosks property. COMPONENT TYPE: Kiosks
itemComponents | [[DestinyItemComponentSetOfint64|DestinyItemComponentSetOfint64]] | Information about instanced items across all returned characters, keyed by the item's instance ID. COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]

## Example
```javascript
{
    // Type: [[SingleComponentResponseOfDestinyVendorReceiptsComponent|SingleComponentResponseOfDestinyVendorReceiptsComponent]]
    "vendorReceipts": {},
    // Type: [[SingleComponentResponseOfDestinyInventoryComponent|SingleComponentResponseOfDestinyInventoryComponent]]
    "profileInventory": {},
    // Type: [[SingleComponentResponseOfDestinyInventoryComponent|SingleComponentResponseOfDestinyInventoryComponent]]
    "profileCurrencies": {},
    // Type: [[SingleComponentResponseOfDestinyProfileComponent|SingleComponentResponseOfDestinyProfileComponent]]
    "profile": {},
    // Type: [[SingleComponentResponseOfDestinyKiosksComponent|SingleComponentResponseOfDestinyKiosksComponent]]
    "profileKiosks": {},
    // Type: [[DictionaryComponentResponseOfint64AndDestinyCharacterComponent|DictionaryComponentResponseOfint64AndDestinyCharacterComponent]]
    "characters": {},
    // Type: [[DictionaryComponentResponseOfint64AndDestinyInventoryComponent|DictionaryComponentResponseOfint64AndDestinyInventoryComponent]]
    "characterInventories": {},
    // Type: [[DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent|DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent]]
    "characterProgressions": {},
    // Type: [[DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent|DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent]]
    "characterRenderData": {},
    // Type: [[DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent|DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent]]
    "characterActivities": {},
    // Type: [[DictionaryComponentResponseOfint64AndDestinyInventoryComponent|DictionaryComponentResponseOfint64AndDestinyInventoryComponent]]
    "characterEquipment": {},
    // Type: [[DictionaryComponentResponseOfint64AndDestinyKiosksComponent|DictionaryComponentResponseOfint64AndDestinyKiosksComponent]]
    "characterKiosks": {},
    // Type: [[DestinyItemComponentSetOfint64|DestinyItemComponentSetOfint64]]
    "itemComponents": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Responses-DestinyProfileResponse.html#schema_Destiny-Responses-DestinyProfileResponse
