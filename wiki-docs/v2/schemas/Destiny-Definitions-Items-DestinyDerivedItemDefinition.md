<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This is a reference to, and summary data for, a specific item thatyou can get as a result of Using or Acquiring some other Item (For example,this could be summary information for an Emote that you can get by opening an an Eververse Box)See DestinyDerivedItemCategoryDefinition for more information.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
itemHash | integer:uint32:nullable | The hash for the DestinyInventoryItemDefinition of this derived item, if there is one.Sometimes we are given this information as a manual override, in which case there won't bean actual DestinyInventoryItemDefinition for what we display, but you can still show the stringsfrom this object itself.
itemName | string | The name of the derived item.
itemDetail | string | Additional details about the derived item, in addition to the description.
itemDescription | string | A brief description of the item.
iconPath | string | An icon for the item.
vendorItemIndex | integer:int32 | If the item was derived from a &quot;Preview Vendor&quot;, this will be an index intothe DestinyVendorDefinition's itemList property.  Otherwise, -1.

## Example
```javascript
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Items-DestinyDerivedItemDefinition.html#schema_Destiny-Definitions-Items-DestinyDerivedItemDefinition
