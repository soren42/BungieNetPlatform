<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A shortcut for the fact that some items have a &quot;Preview Vendor&quot;- See DestinyInventoryItemDefinition.preview.previewVendorHash - that is intendedto be used to show what items you can get as a result of acquiring or using this item. A common example of this in Destiny 1 was Eververse &quot;Boxes,&quot; which could have many possible items.This &quot;Preview Vendor&quot; is not a vendor you can actually see in the game, but it defines categories and sale items for all of the possibleitems you could get from the Box so that the game can show them to you.  We summarize that info hereso that you don't have to do that Vendor lookup and aggregation manually.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
categoryDescription | string | The localized string for the category title.  This will be something describingthe items you can get as a group, or your likelihood/the quantity you'll get.
items | [[DestinyDerivedItemDefinition|Destiny-Definitions-Items-DestinyDerivedItemDefinition]]:Definition[] | This is the list of all of the items for this category and the basic properties we'llknow about them.

## Example
```javascript
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Items-DestinyDerivedItemCategoryDefinition.html#schema_Destiny-Definitions-Items-DestinyDerivedItemCategoryDefinition
