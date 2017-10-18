<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Characters can not only have Inventory buckets (containers of items that are generally matched by their type orfunctionality), they can also have Equipment Slots. The Equipment Slot is an indicator that the related bucket can have instanced items equippedon the character.  For instance, the Primary Weapon bucket has an Equipment Slot that determineswhether you can equip primary weapons, and holds the association between its slot and the inventory bucketfrom which it can have items equipped. An Equipment Slot must have a related Inventory Bucket, but notall inventory buckets must have Equipment Slots.

## Schema
* **Schema Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
equipmentCategoryHash | integer:uint32 | These technically point to &quot;Equipment Category Definitions&quot;.  But don't get excited.  There'snothing of significant value in those definitions, so I didn't bother to expose them.  You can use thehash here to group equipment slots by common functionality, which serves the same purpose as if we hadthe Equipment Category definitions exposed.
bucketTypeHash | [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32 | The inventory bucket that owns this equipment slot.
applyCustomArtDyes | boolean | If True, equipped items should have their custom art dyes applied when rendering the item.Otherwise, custom art dyes on an item should be ignored if the item is equipped in this slot.
hash | integer:uint32 | The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet isnot yet allowed to show it.  Sorry!

## Example
```javascript
{
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
    // Type: integer:uint32
    "equipmentCategoryHash": 0,
    // Type: [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32
    "bucketTypeHash": 0,
    // Type: boolean
    "applyCustomArtDyes": false,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyEquipmentSlotDefinition.html#schema_Destiny-Definitions-DestinyEquipmentSlotDefinition
