<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This defines an item's &quot;Value&quot;.Unfortunately, this appears to be used in different ways depending on the way that the item itselfis used. For items being sold at a Vendor, this is the default &quot;sale price&quot; of the item.  These days, the vendor itselfalmost always sets the price, but it still possible for the price to fall back to this value.For quests, it is a preview of rewards you can gain by completing the quest.For dummy items, if the itemValue refers to an Emblem, it is the emblem that should be shownas the reward. (jeez louise) It will likely be used in a number of other ways in the future, it appears to be a bucket wherethey put arbitrary items and quantities into the item.

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
itemValue | [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][] | References to the items that make up this item's &quot;value&quot;, and the quantity.
valueDescription | string | If there's a localized text description of the value provided, this will be said description.

## Example
```javascript
{
    // Type: [[DestinyItemQuantity|Destiny-DestinyItemQuantity]][]
    "itemValue": [
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
    // Type: string
    "valueDescription": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemValueBlockDefinition.html#schema_Destiny-Definitions-DestinyItemValueBlockDefinition
