<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Items like Sacks or Boxes can have items that it shows in-game when you view detailsthat represent the items you can obtain if you use or acquire the item. This defines those categories, and gives some insights into that data's source.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
previewVendorHash | [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32 | If the preview data is derived from a fake &quot;Preview&quot; Vendor, this willbe the hash identifier for the DestinyVendorDefinition of that fake vendor.
previewActionString | string | If the preview has an associated action (like &quot;Open&quot;), this will be the localizedstring for that action.
derivedItemCategories | [[DestinyDerivedItemCategoryDefinition|Destiny-Definitions-Items-DestinyDerivedItemCategoryDefinition]]:Definition[] | This is a list of the items being previewed, categorized in the same way as they arein the preview UI.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32
    "previewVendorHash": 0,
    // Type: string
    "previewActionString": "",
    // Type: [[DestinyDerivedItemCategoryDefinition|Destiny-Definitions-Items-DestinyDerivedItemCategoryDefinition]]:Definition[]
    "derivedItemCategories": [
       // Type: [[DestinyDerivedItemCategoryDefinition|Destiny-Definitions-Items-DestinyDerivedItemCategoryDefinition]]:Definition
        {
            // Type: string
            "categoryDescription": "",
            // Type: [[DestinyDerivedItemDefinition|Destiny-Definitions-Items-DestinyDerivedItemDefinition]]:Definition[]
            "items": [
               // Type: [[DestinyDerivedItemDefinition|Destiny-Definitions-Items-DestinyDerivedItemDefinition]]:Definition
                {
                    // Type: integer:uint32:nullable
                    "itemHash": 0,
                    // Type: string
                    "itemName": "",
                    // Type: string
                    "itemDetail": "",
                    // Type: string
                    "itemDescription": "",
                    // Type: string
                    "iconPath": "",
                    // Type: integer:int32
                    "vendorItemIndex": 0
                }
            ]
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemPreviewBlockDefinition.html#schema_Destiny-Definitions-DestinyItemPreviewBlockDefinition
