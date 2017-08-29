<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
These are the definitions for Vendors. In Destiny, a Vendor can be a lot of things - some things that you wouldn't expect, and some thingsthat you don't even see directly in the game.  Vendors are the Dolly Levi of the Destiny universe. - Traditional Vendors as you see in game: people who you come up to and who give you quests, rewards, or whoyou can buy things from. - Kiosks/Collections, which are really just Vendors that don't charge currency (or charge some pittance of a currency)and whose gating for purchases revolves more around your character's state. - Previews for rewards or the contents of sacks.  These are implemented as Vendors, where you can't actually purchase fromthem but the items that they have for sale and the categories of sale items reflect the rewards or contents of the sack.This is so that the game could reuse the existing Vendor display UI for rewards and save a bunch of wheel reinvention. - Item Transfer capabilities, like the Vault and Postmaster.  Vendors can have &quot;acceptedItem&quot; buckets that determinethe source and destination buckets for transfers.  When you interact with such a vendor, these buckets are whatgets shown in the UI instead of any items that the Vendor would have for sale.  Yep, the Vault is a vendor. It is pretty much guaranteed that they'll be used for even more features in the future.  They have cometo be seen more as generic categorized containers for items than &quot;vendors&quot; in a traditional sense, forbetter or worse. Where possible and time allows, we'll attempt to split those out into their own moredigestible derived &quot;Definitions&quot;: but often time does not allow that, as you can see from the above waysthat vendors are used which we never split off from Vendor Definitions externally. Since Vendors are so many things to so many parts of the game, the definition is understandably complex.You will want to combine this data with live Vendor information from the API when it is available.

## Schema
* **Type:** Definition
* **Mobile Manifest:** Vendors

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyVendorDisplayPropertiesDefinition|Destiny-Definitions-DestinyVendorDisplayPropertiesDefinition]]:Definition | 
buyString | string | If the vendor has a custom localized string describing the &quot;buy&quot; action, that isreturned here.
sellString | string | Ditto for selling.  Not that you can sell items to a vendor anymore.  Will it come back?Who knows.  The string's still there.
displayItemHash | [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32 | If the vendor has an item that should be displayed as the &quot;featured&quot; item, this isthe hash identifier for that DestinyVendorItemDefinition. Apparently this is usually a related currency, like a reputation token.  But it need not be restricted to that.
inhibitBuying | boolean | If this is true, you aren't allowed to buy whatever the vendor is selling.
inhibitSelling | boolean | If this is true, you're not allowed to sell whatever the vendor is buying.
factionHash | [[DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]]:ManifestDefinition:integer:uint32 | If the Vendor has a faction, this hash will be valid and point to a DestinyFactionDefinition. The game UI and BNet often mine the faction definition for additional elements and details to placeon the screen, such as the faction's Progression status (aka &quot;Reputation&quot;).
resetIntervalMinutes | integer:int32 | A number used for calculating the frequency of a vendor's inventory resetting/refreshing. Don't worry about calculating this - we do it on the server side and send you the next refreshdate with the live data.
resetOffsetMinutes | integer:int32 | Again, used for reset/refreshing of inventory.  Don't worry too much about it.  Unless you want to.
failureStrings | string[] | If an item can't be purchased from the vendor, there may be many &quot;custom&quot;/game state specific reasons why not. This is a list of localized strings with messages for those custom failures.  The live BNet data will return afailureIndexes property for items that can't be purchased: using those values to index into this array,you can show the user the appropriate failure message for the item that can't be bought.
unlockRanges | [[DateRange|Dates-DateRange]][] | If we were able to predict the dates when this Vendor will be visible/available, this will be the listof those date ranges.  Sadly, we're not able to predict this very frequently, so this will often be useless data.
vendorIdentifier | string | The internal identifier for the Vendor.  A holdover from the old days of Vendors, but we don't havetime to refactor it away.
vendorPortrait | string | A portrait of the Vendor's smiling mug.  Or frothing tentacles.
vendorBanner | string | If the vendor has a custom banner image, that can be found here.
enabled | boolean | If a vendor is not enabled, we won't even save the vendor's definition, and we won't return any items or info about them.It's as if they don't exist.
visible | boolean | If a vendor is not visible, we still have and will give vendor definition info, but we won't use themfor things like Advisors or UI.
vendorCategoryIdentifier | string | The identifier of the VendorCategoryDefinition for this vendor.
vendorSubcategoryIdentifier | string | The identifier of the VendorCategoryDefinition for this vendor's subcategory.
consolidateCategories | boolean | If TRUE, consolidate categories that only differ by trivial properties (such as having minor differences in name)
actions | [[DestinyVendorActionDefinition|Destiny-Definitions-DestinyVendorActionDefinition]]:Definition[] | Describes &quot;actions&quot; that can be performed on a vendor.  Currently, none of these exist.  But theoreticallya Vendor could let you interact with it by performing actions.  We'll see what these end up lookinglike if they ever get used.
categories | [[DestinyVendorCategoryEntryDefinition|Destiny-Definitions-DestinyVendorCategoryEntryDefinition]]:Definition[] | These are the headers for sections of items that the vendor is selling.When you see items organized by category in the header, it is these categoriesthat it is showing. Well, technically not *exactly* these.  On BNet, it doesn't make sense to have categoriesbe &quot;paged&quot; as we do in Destiny, so we run some heuristics to attempt to aggregate pages ofcategories together. These are the categories post-concatenation, if the vendor had concatenationapplied.  If you want the pre-aggregated category data, use originalCategories.
originalCategories | [[DestinyVendorCategoryEntryDefinition|Destiny-Definitions-DestinyVendorCategoryEntryDefinition]]:Definition[] | See the categories property for a description of categories and why originalCategories exists.
displayCategories | [[DestinyDisplayCategoryDefinition|Destiny-Definitions-DestinyDisplayCategoryDefinition]]:Definition[] | Display Categories are different from &quot;categories&quot; in that these are specifically for visual groupingand display of categories in Vendor UI. The &quot;categories&quot; structure is for validation of the containeditems, and can be categorized entirely separately from &quot;Display Categories&quot;, there need be and often will beno meaningful relationship between the two.
interactions | [[DestinyVendorInteractionDefinition|Destiny-Definitions-DestinyVendorInteractionDefinition]]:Definition[] | In addition to selling items, vendors can have &quot;interactions&quot;: UI where you &quot;talk&quot; with the vendorand they offer you a reward, some item, or merely acknowledge via dialog that you did something cool.
inventoryFlyouts | [[DestinyVendorInventoryFlyoutDefinition|Destiny-Definitions-DestinyVendorInventoryFlyoutDefinition]]:Definition[] | If the vendor shows you items from your own inventory - such as the Vault vendor does -this data describes the UI around showing those inventory buckets and which ones get shown.
itemList | [[DestinyVendorItemDefinition|Destiny-Definitions-DestinyVendorItemDefinition]]:Definition[] | If the vendor sells items (or merely has a list of items to show like the &quot;Sack&quot; vendors do),this is the list of those items that the vendor can sell.  From this list, only a subset will beavailable from the vendor at any given time, selected randomly and reset on the vendor's refresh interval. Note that a vendor can sell the same item multiple ways: for instance, nothing stops a vendor from sellingyou some specific weapon but using two different currencies, or the same weapon at multiple &quot;item levels&quot;.
services | [[DestinyVendorServiceDefinition|Destiny-Definitions-DestinyVendorServiceDefinition]]:Definition[] | BNet doesn't use this data yet, but it appears to be an optional list of flavor textabout services that the Vendor can provide.
acceptedItems | [[DestinyVendorAcceptedItemDefinition|Destiny-Definitions-DestinyVendorAcceptedItemDefinition]]:Definition[] | If the Vendor is actually a vehicle for the transferring of items (like the Vault and Postmastervendors), this defines the list of source-&gt;destination buckets for transferring.
hash | integer:uint32 | The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet isnot yet allowed to show it.  Sorry!

## Example
```javascript
{
    // Type: [[DestinyVendorDisplayPropertiesDefinition|Destiny-Definitions-DestinyVendorDisplayPropertiesDefinition]]:Definition
    "displayProperties": {
        // Type: string
        "largeIcon": "",
        // Type: string
        "subtitle": "",
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
    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
    "displayItemHash": 0,
    // Type: boolean
    "inhibitBuying": false,
    // Type: boolean
    "inhibitSelling": false,
    // Type: [[DestinyFactionDefinition|Destiny-Definitions-DestinyFactionDefinition]]:ManifestDefinition:integer:uint32
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
            "overlay": {
                // Type: string
                "choiceDescription": "",
                // Type: string
                "description": "",
                // Type: string
                "icon": "",
                // Type: string
                "title": ""
            }
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
            "overlay": {
                // Type: string
                "choiceDescription": "",
                // Type: string
                "description": "",
                // Type: string
                "icon": "",
                // Type: string
                "title": ""
            }
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
                    "itemRewardsSelection": 0,
                    // Type: string
                    "reply": "",
                    // Type: [[DestinyVendorReplyType|Destiny-DestinyVendorReplyType]]:Enum
                    "replyType": 0
                }
            ],
            // Type: integer:int32
            "vendorCategoryIndex": 0,
            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
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
            "headerDisplayProperties": {
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
            // Type: [[DestinyVendorInventoryFlyoutBucketDefinition|Destiny-Definitions-DestinyVendorInventoryFlyoutBucketDefinition]]:Definition[]
            "buckets": [
               // Type: [[DestinyVendorInventoryFlyoutBucketDefinition|Destiny-Definitions-DestinyVendorInventoryFlyoutBucketDefinition]]:Definition
                {
                    // Type: boolean
                    "collapsible": false,
                    // Type: [[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:ManifestDefinition:integer:uint32
                    "inventoryBucketHash": 0,
                    // Type: [[DestinyItemSortType|Destiny-DestinyItemSortType]]:Enum
                    "sortItemsBy": 0
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
            // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
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
                    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
                    "itemHash": 0,
                    // Type: integer:int64:nullable
                    "itemInstanceId": 0,
                    // Type: integer:int32
                    "quantity": 0
                }
            ],
            // Type: [[DestinyVendorItemRefundPolicy|Destiny-DestinyVendorItemRefundPolicy]]:Enum
            "refundPolicy": 0,
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
            "action": {
                // Type: number:float
                "executeSeconds": 0,
                // Type: boolean
                "isPositive": false
            },
            // Type: string
            "displayCategory": "",
            // Type: integer:uint32
            "inventoryBucketHash": 0,
            // Type: [[DestinyGatingScope|Destiny-DestinyGatingScope]]:Enum
            "visibilityScope": 0,
            // Type: [[DestinyGatingScope|Destiny-DestinyGatingScope]]:Enum
            "purchasableScope": 0
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
            // Type: [[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:ManifestDefinition:integer:uint32
            "acceptedInventoryBucketHash": 0,
            // Type: [[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:ManifestDefinition:integer:uint32
            "destinationInventoryBucketHash": 0
        }
    ],
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
