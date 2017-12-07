<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
These are the definitions for Vendors. In Destiny, a Vendor can be a lot of things - some things that you wouldn't expect, and some things that you don't even see directly in the game. Vendors are the Dolly Levi of the Destiny universe. - Traditional Vendors as you see in game: people who you come up to and who give you quests, rewards, or who you can buy things from. - Kiosks/Collections, which are really just Vendors that don't charge currency (or charge some pittance of a currency) and whose gating for purchases revolves more around your character's state. - Previews for rewards or the contents of sacks. These are implemented as Vendors, where you can't actually purchase from them but the items that they have for sale and the categories of sale items reflect the rewards or contents of the sack. This is so that the game could reuse the existing Vendor display UI for rewards and save a bunch of wheel reinvention. - Item Transfer capabilities, like the Vault and Postmaster. Vendors can have &quot;acceptedItem&quot; buckets that determine the source and destination buckets for transfers. When you interact with such a vendor, these buckets are what gets shown in the UI instead of any items that the Vendor would have for sale. Yep, the Vault is a vendor. It is pretty much guaranteed that they'll be used for even more features in the future. They have come to be seen more as generic categorized containers for items than &quot;vendors&quot; in a traditional sense, for better or worse. Where possible and time allows, we'll attempt to split those out into their own more digestible derived &quot;Definitions&quot;: but often time does not allow that, as you can see from the above ways that vendors are used which we never split off from Vendor Definitions externally. Since Vendors are so many things to so many parts of the game, the definition is understandably complex. You will want to combine this data with live Vendor information from the API when it is available.

## Schema
* **Schema Type:** Manifest Definition
* **Type:** object
* **Mobile Manifest:** Vendors

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyVendorDisplayPropertiesDefinition|Destiny-Definitions-DestinyVendorDisplayPropertiesDefinition]]:Definition | 
buyString | string | If the vendor has a custom localized string describing the &quot;buy&quot; action, that is returned here.
sellString | string | Ditto for selling. Not that you can sell items to a vendor anymore. Will it come back? Who knows. The string's still there.
displayItemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | If the vendor has an item that should be displayed as the &quot;featured&quot; item, this is the hash identifier for that DestinyVendorItemDefinition. Apparently this is usually a related currency, like a reputation token. But it need not be restricted to that.
inhibitBuying | boolean | If this is true, you aren't allowed to buy whatever the vendor is selling.
inhibitSelling | boolean | If this is true, you're not allowed to sell whatever the vendor is buying.
factionHash | [[Destiny.Definitions.DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]]:integer:uint32 | If the Vendor has a faction, this hash will be valid and point to a DestinyFactionDefinition. The game UI and BNet often mine the faction definition for additional elements and details to place on the screen, such as the faction's Progression status (aka &quot;Reputation&quot;).
resetIntervalMinutes | integer:int32 | A number used for calculating the frequency of a vendor's inventory resetting/refreshing. Don't worry about calculating this - we do it on the server side and send you the next refresh date with the live data.
resetOffsetMinutes | integer:int32 | Again, used for reset/refreshing of inventory. Don't worry too much about it. Unless you want to.
failureStrings | string[] | If an item can't be purchased from the vendor, there may be many &quot;custom&quot;/game state specific reasons why not. This is a list of localized strings with messages for those custom failures. The live BNet data will return a failureIndexes property for items that can't be purchased: using those values to index into this array, you can show the user the appropriate failure message for the item that can't be bought.
unlockRanges | [[DateRange|Dates-DateRange]][] | If we were able to predict the dates when this Vendor will be visible/available, this will be the list of those date ranges. Sadly, we're not able to predict this very frequently, so this will often be useless data.
vendorIdentifier | string | The internal identifier for the Vendor. A holdover from the old days of Vendors, but we don't have time to refactor it away.
vendorPortrait | string | A portrait of the Vendor's smiling mug. Or frothing tentacles.
vendorBanner | string | If the vendor has a custom banner image, that can be found here.
enabled | boolean | If a vendor is not enabled, we won't even save the vendor's definition, and we won't return any items or info about them. It's as if they don't exist.
visible | boolean | If a vendor is not visible, we still have and will give vendor definition info, but we won't use them for things like Advisors or UI.
vendorCategoryIdentifier | string | The identifier of the VendorCategoryDefinition for this vendor.
vendorSubcategoryIdentifier | string | The identifier of the VendorCategoryDefinition for this vendor's subcategory.
consolidateCategories | boolean | If TRUE, consolidate categories that only differ by trivial properties (such as having minor differences in name)
actions | [[DestinyVendorActionDefinition|Destiny-Definitions-DestinyVendorActionDefinition]]:Definition[] | Describes &quot;actions&quot; that can be performed on a vendor. Currently, none of these exist. But theoretically a Vendor could let you interact with it by performing actions. We'll see what these end up looking like if they ever get used.
categories | [[DestinyVendorCategoryEntryDefinition|Destiny-Definitions-DestinyVendorCategoryEntryDefinition]]:Definition[] | These are the headers for sections of items that the vendor is selling. When you see items organized by category in the header, it is these categories that it is showing. Well, technically not *exactly* these. On BNet, it doesn't make sense to have categories be &quot;paged&quot; as we do in Destiny, so we run some heuristics to attempt to aggregate pages of categories together. These are the categories post-concatenation, if the vendor had concatenation applied. If you want the pre-aggregated category data, use originalCategories.
originalCategories | [[DestinyVendorCategoryEntryDefinition|Destiny-Definitions-DestinyVendorCategoryEntryDefinition]]:Definition[] | See the categories property for a description of categories and why originalCategories exists.
displayCategories | [[DestinyDisplayCategoryDefinition|Destiny-Definitions-DestinyDisplayCategoryDefinition]]:Definition[] | Display Categories are different from &quot;categories&quot; in that these are specifically for visual grouping and display of categories in Vendor UI. The &quot;categories&quot; structure is for validation of the contained items, and can be categorized entirely separately from &quot;Display Categories&quot;, there need be and often will be no meaningful relationship between the two.
interactions | [[DestinyVendorInteractionDefinition|Destiny-Definitions-DestinyVendorInteractionDefinition]]:Definition[] | In addition to selling items, vendors can have &quot;interactions&quot;: UI where you &quot;talk&quot; with the vendor and they offer you a reward, some item, or merely acknowledge via dialog that you did something cool.
inventoryFlyouts | [[DestinyVendorInventoryFlyoutDefinition|Destiny-Definitions-DestinyVendorInventoryFlyoutDefinition]]:Definition[] | If the vendor shows you items from your own inventory - such as the Vault vendor does - this data describes the UI around showing those inventory buckets and which ones get shown.
itemList | [[DestinyVendorItemDefinition|Destiny-Definitions-DestinyVendorItemDefinition]]:Definition[] | If the vendor sells items (or merely has a list of items to show like the &quot;Sack&quot; vendors do), this is the list of those items that the vendor can sell. From this list, only a subset will be available from the vendor at any given time, selected randomly and reset on the vendor's refresh interval. Note that a vendor can sell the same item multiple ways: for instance, nothing stops a vendor from selling you some specific weapon but using two different currencies, or the same weapon at multiple &quot;item levels&quot;.
services | [[DestinyVendorServiceDefinition|Destiny-Definitions-DestinyVendorServiceDefinition]]:Definition[] | BNet doesn't use this data yet, but it appears to be an optional list of flavor text about services that the Vendor can provide.
acceptedItems | [[DestinyVendorAcceptedItemDefinition|Destiny-Definitions-DestinyVendorAcceptedItemDefinition]]:Definition[] | If the Vendor is actually a vehicle for the transferring of items (like the Vault and Postmaster vendors), this defines the list of source-&gt;destination buckets for transferring.
returnWithVendorRequest | boolean | As many of you know, Vendor data has historically been pretty brutal on the BNet servers. In an effort to reduce this workload, only Vendors with this flag set will be returned on Vendor requests. This allows us to filter out Vendors that don't dynamic data that's particularly useful: things like &quot;Preview/Sack&quot; vendors, for example, that you can usually suss out the details for using just the definitions themselves.
hash | integer:uint32 | The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

## Example
```javascript
{
    // Type: [[DestinyVendorDisplayPropertiesDefinition|Destiny-Definitions-DestinyVendorDisplayPropertiesDefinition]]:Definition
    "displayProperties": {
        // Type: string
        "largeIcon": "",
        // Type: string
        "subtitle": "",
        // Type: string
        "originalIcon": "",
        // Type: [[DestinyVendorRequirementDisplayEntryDefinition|Destiny-Definitions-DestinyVendorRequirementDisplayEntryDefinition]]:Definition[]
        "requirementsDisplay": [
           // Type: [[DestinyVendorRequirementDisplayEntryDefinition|Destiny-Definitions-DestinyVendorRequirementDisplayEntryDefinition]]:Definition
            {
                // Type: string
                "icon": "",
                // Type: string
                "name": "",
                // Type: string
                "source": "",
                // Type: string
                "type": ""
            }
        ],
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
    "buyString": "",
    // Type: string
    "sellString": "",
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "displayItemHash": 0,
    // Type: boolean
    "inhibitBuying": false,
    // Type: boolean
    "inhibitSelling": false,
    // Type: [[Destiny.Definitions.DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]]:integer:uint32
    "factionHash": 0,
    // Type: integer:int32
    "resetIntervalMinutes": 0,
    // Type: integer:int32
    "resetOffsetMinutes": 0,
    // Type: string[]
    "failureStrings": [
       // Type: string
        ""
    ],
    // Type: [[DateRange|Dates-DateRange]][]
    "unlockRanges": [
       // Type: [[DateRange|Dates-DateRange]]
        {
            // Type: string:date-time
            "start": "",
            // Type: string:date-time
            "end": ""
        }
    ],
    // Type: string
    "vendorIdentifier": "",
    // Type: string
    "vendorPortrait": "",
    // Type: string
    "vendorBanner": "",
    // Type: boolean
    "enabled": false,
    // Type: boolean
    "visible": false,
    // Type: string
    "vendorCategoryIdentifier": "",
    // Type: string
    "vendorSubcategoryIdentifier": "",
    // Type: boolean
    "consolidateCategories": false,
    // Type: [[DestinyVendorActionDefinition|Destiny-Definitions-DestinyVendorActionDefinition]]:Definition[]
    "actions": [
       // Type: [[DestinyVendorActionDefinition|Destiny-Definitions-DestinyVendorActionDefinition]]:Definition
        {
            // Type: string
            "description": "",
            // Type: integer:int32
            "executeSeconds": 0,
            // Type: string
            "icon": "",
            // Type: string
            "name": "",
            // Type: string
            "verb": "",
            // Type: boolean
            "isPositive": false,
            // Type: string
            "actionId": "",
            // Type: integer:uint32
            "actionHash": 0,
            // Type: boolean
            "autoPerformAction": false
        }
    ],
    // Type: [[DestinyVendorCategoryEntryDefinition|Destiny-Definitions-DestinyVendorCategoryEntryDefinition]]:Definition[]
    "categories": [
       // Type: [[DestinyVendorCategoryEntryDefinition|Destiny-Definitions-DestinyVendorCategoryEntryDefinition]]:Definition
        {
            // Type: integer:int32
            "categoryIndex": 0,
            // Type: string
            "categoryId": "",
            // Type: integer:uint32
            "categoryHash": 0,
            // Type: integer:int32
            "quantityAvailable": 0,
            // Type: boolean
            "showUnavailableItems": false,
            // Type: boolean
            "hideIfNoCurrency": false,
            // Type: boolean
            "hideFromRegularPurchase": false,
            // Type: string
            "buyStringOverride": "",
            // Type: string
            "disabledDescription": "",
            // Type: string
            "displayTitle": "",
            // Type: [[DestinyVendorCategoryOverlayDefinition|Destiny-Definitions-DestinyVendorCategoryOverlayDefinition]]:Definition
            "overlay": {},
            // Type: integer:int32[]
            "vendorItemIndexes": [
               // Type: integer:int32
                0
            ]
        }
    ],
    // Type: [[DestinyVendorCategoryEntryDefinition|Destiny-Definitions-DestinyVendorCategoryEntryDefinition]]:Definition[]
    "originalCategories": [
       // Type: [[DestinyVendorCategoryEntryDefinition|Destiny-Definitions-DestinyVendorCategoryEntryDefinition]]:Definition
        {
            // Type: integer:int32
            "categoryIndex": 0,
            // Type: string
            "categoryId": "",
            // Type: integer:uint32
            "categoryHash": 0,
            // Type: integer:int32
            "quantityAvailable": 0,
            // Type: boolean
            "showUnavailableItems": false,
            // Type: boolean
            "hideIfNoCurrency": false,
            // Type: boolean
            "hideFromRegularPurchase": false,
            // Type: string
            "buyStringOverride": "",
            // Type: string
            "disabledDescription": "",
            // Type: string
            "displayTitle": "",
            // Type: [[DestinyVendorCategoryOverlayDefinition|Destiny-Definitions-DestinyVendorCategoryOverlayDefinition]]:Definition
            "overlay": {},
            // Type: integer:int32[]
            "vendorItemIndexes": [
               // Type: integer:int32
                0
            ]
        }
    ],
    // Type: [[DestinyDisplayCategoryDefinition|Destiny-Definitions-DestinyDisplayCategoryDefinition]]:Definition[]
    "displayCategories": [
       // Type: [[DestinyDisplayCategoryDefinition|Destiny-Definitions-DestinyDisplayCategoryDefinition]]:Definition
        {
            // Type: string
            "identifier": "",
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
            }
        }
    ],
    // Type: [[DestinyVendorInteractionDefinition|Destiny-Definitions-DestinyVendorInteractionDefinition]]:Definition[]
    "interactions": [
       // Type: [[DestinyVendorInteractionDefinition|Destiny-Definitions-DestinyVendorInteractionDefinition]]:Definition
        {
            // Type: [[DestinyVendorInteractionReplyDefinition|Destiny-Definitions-DestinyVendorInteractionReplyDefinition]]:Definition[]
            "replies": [
               // Type: [[DestinyVendorInteractionReplyDefinition|Destiny-Definitions-DestinyVendorInteractionReplyDefinition]]:Definition
                {
                    // Type: [[DestinyVendorInteractionRewardSelection|Destiny-DestinyVendorInteractionRewardSelection]]:Enum
                    "itemRewardsSelection": {},
                    // Type: string
                    "reply": "",
                    // Type: [[DestinyVendorReplyType|Destiny-DestinyVendorReplyType]]:Enum
                    "replyType": {}
                }
            ],
            // Type: integer:int32
            "vendorCategoryIndex": 0,
            // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
            "questlineItemHash": 0,
            // Type: [[DestinyVendorInteractionSackEntryDefinition|Destiny-Definitions-DestinyVendorInteractionSackEntryDefinition]]:Definition[]
            "sackInteractionList": [
               // Type: [[DestinyVendorInteractionSackEntryDefinition|Destiny-Definitions-DestinyVendorInteractionSackEntryDefinition]]:Definition
                {
                    // Type: integer:uint32
                    "sackType": 0
                }
            ],
            // Type: integer:uint32
            "uiInteractionType": 0,
            // Type: string
            "rewardBlockLabel": "",
            // Type: integer:int32
            "rewardVendorCategoryIndex": 0,
            // Type: string
            "flavorLineOne": "",
            // Type: string
            "flavorLineTwo": "",
            // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
            "headerDisplayProperties": {},
            // Type: string
            "instructions": ""
        }
    ],
    // Type: [[DestinyVendorInventoryFlyoutDefinition|Destiny-Definitions-DestinyVendorInventoryFlyoutDefinition]]:Definition[]
    "inventoryFlyouts": [
       // Type: [[DestinyVendorInventoryFlyoutDefinition|Destiny-Definitions-DestinyVendorInventoryFlyoutDefinition]]:Definition
        {
            // Type: string
            "lockedDescription": "",
            // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
            "displayProperties": {},
            // Type: [[DestinyVendorInventoryFlyoutBucketDefinition|Destiny-Definitions-DestinyVendorInventoryFlyoutBucketDefinition]]:Definition[]
            "buckets": [
               // Type: [[DestinyVendorInventoryFlyoutBucketDefinition|Destiny-Definitions-DestinyVendorInventoryFlyoutBucketDefinition]]:Definition
                {
                    // Type: boolean
                    "collapsible": false,
                    // Type: [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32
                    "inventoryBucketHash": 0,
                    // Type: [[DestinyItemSortType|Destiny-DestinyItemSortType]]:Enum
                    "sortItemsBy": {}
                }
            ],
            // Type: integer:uint32
            "flyoutId": 0,
            // Type: boolean
            "suppressNewness": false
        }
    ],
    // Type: [[DestinyVendorItemDefinition|Destiny-Definitions-DestinyVendorItemDefinition]]:Definition[]
    "itemList": [
       // Type: [[DestinyVendorItemDefinition|Destiny-Definitions-DestinyVendorItemDefinition]]:Definition
        {
            // Type: integer:int32
            "vendorItemIndex": 0,
            // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
            "itemHash": 0,
            // Type: integer:int32
            "quantity": 0,
            // Type: integer:int32[]
            "failureIndexes": [
               // Type: integer:int32
                0
            ],
            // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
            "currencies": [
               // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]]
                {
                    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                    "itemHash": 0,
                    // Type: integer:int64:nullable
                    "itemInstanceId": 0,
                    // Type: integer:int32
                    "quantity": 0
                }
            ],
            // Type: [[DestinyVendorItemRefundPolicy|Destiny-DestinyVendorItemRefundPolicy]]:Enum
            "refundPolicy": {},
            // Type: integer:int32
            "refundTimeLimit": 0,
            // Type: [[DestinyItemCreationEntryLevelDefinition|Destiny-Definitions-DestinyItemCreationEntryLevelDefinition]]:Definition[]
            "creationLevels": [
               // Type: [[DestinyItemCreationEntryLevelDefinition|Destiny-Definitions-DestinyItemCreationEntryLevelDefinition]]:Definition
                {
                    // Type: integer:int32
                    "level": 0
                }
            ],
            // Type: integer:int32
            "displayCategoryIndex": 0,
            // Type: integer:int32
            "categoryIndex": 0,
            // Type: integer:int32
            "originalCategoryIndex": 0,
            // Type: integer:int32
            "minimumLevel": 0,
            // Type: integer:int32
            "maximumLevel": 0,
            // Type: [[DestinyVendorSaleItemActionBlockDefinition|Destiny-Definitions-DestinyVendorSaleItemActionBlockDefinition]]:Definition
            "action": {},
            // Type: string
            "displayCategory": "",
            // Type: integer:uint32
            "inventoryBucketHash": 0,
            // Type: [[DestinyGatingScope|Destiny-DestinyGatingScope]]:Enum
            "visibilityScope": {},
            // Type: [[DestinyGatingScope|Destiny-DestinyGatingScope]]:Enum
            "purchasableScope": {},
            // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
            "exclusivity": {},
            // Type: boolean:nullable
            "isOffer": false,
            // Type: boolean:nullable
            "isCrm": false
        }
    ],
    // Type: [[DestinyVendorServiceDefinition|Destiny-Definitions-DestinyVendorServiceDefinition]]:Definition[]
    "services": [
       // Type: [[DestinyVendorServiceDefinition|Destiny-Definitions-DestinyVendorServiceDefinition]]:Definition
        {
            // Type: string
            "name": ""
        }
    ],
    // Type: [[DestinyVendorAcceptedItemDefinition|Destiny-Definitions-DestinyVendorAcceptedItemDefinition]]:Definition[]
    "acceptedItems": [
       // Type: [[DestinyVendorAcceptedItemDefinition|Destiny-Definitions-DestinyVendorAcceptedItemDefinition]]:Definition
        {
            // Type: [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32
            "acceptedInventoryBucketHash": 0,
            // Type: [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32
            "destinationInventoryBucketHash": 0
        }
    ],
    // Type: boolean
    "returnWithVendorRequest": false,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyVendorDefinition.html#schema_Destiny-Definitions-DestinyVendorDefinition
