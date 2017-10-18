<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
In an attempt to categorize items by type, usage, and other interesting properties, we createdDestinyItemCategoryDefinition: information about types that is assembled using a set of heuristicsthat examine the properties of an item such as what inventory bucket it's in, its item type name,and whether it has or is missing certain blocks of data. This heuristic is imperfect, however.  If you find an item miscategorized, let us know on the BungieAPI forums! We then populate all of the categories that we think an item belongs to in its DestinyInventoryItemDefinition.itemCategoryHashes property.  You can use that to provideyour own custom item filtering, sorting, aggregating... go nuts on it!  And let us know if yousee more categories that you wish would be added!

## Schema
* **Schema Type:** Manifest Definition
* **Mobile Manifest:** ItemCategories

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
visible | boolean | If True, this category should be visible in UI.  Sometimes we make categories that wedon't think are interesting externally.  It's up to you if you want to skip on showing them.
shortTitle | string | A shortened version of the title.  The reason why we have this is because the Armory in Germanhad titles that were too long to display in our UI, so these were localized abbreviated versionsof those categories.  The property still exists today, even though the Armory doesn't exist for D2... yet.
itemTypeRegex | string | The janky regular expression we used against the item type to try and discern whetherthe item belongs to this category.
itemTypeRegexNot | string | If the item type matches this janky regex, it does *not* belong to this category.
originBucketIdentifier | string | If the item belongs to this bucket, it does belong to this category.
grantDestinyItemType | [[DestinyItemType|Destiny-DestinyItemType]]:Enum | If an item belongs to this category, it will also receive this item type.This is now how DestinyItemType is populated for items: it used to be an even jankier process,but that's a story that requires more alcohol.
grantDestinySubType | [[DestinyItemSubType|Destiny-DestinyItemSubType]]:Enum | If an item belongs to this category, it will also receive this subtype enum value. I know what you're thinking - what if it belongs to multiple categories that provide sub-types? The last one processed wins, as is the case with all of these &quot;grant&quot; enums.  Now you can seeone reason why we moved away from these enums... but they're so convenient when they work, aren't they?
grantDestinyClass | [[DestinyClass|Destiny-DestinyClass]]:Enum | If an item belongs to this category, it will also get this class restriction enum value. See the other &quot;grant&quot;-prefixed properties on this definition for my color commentary.
groupedCategoryHashes | [[Destiny.Definitions.DestinyItemCategoryDefinition|Destiny-Definitions-DestinyItemCategoryDefinition]]:integer:uint32[] | If this category is a &quot;parent&quot; category of other categories, those children will have theirhashes listed in rendering order here, and can be looked up using these hashes againstDestinyItemCategoryDefinition. In this way, you can build up a visual hierarchy of item categories.  That's what we did,and you can do it too.  I believe in you.  Yes, you, Carl. (I hope someone named Carl reads this someday)
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
    // Type: boolean
    "visible": false,
    // Type: string
    "shortTitle": "",
    // Type: string
    "itemTypeRegex": "",
    // Type: string
    "itemTypeRegexNot": "",
    // Type: string
    "originBucketIdentifier": "",
    // Type: [[DestinyItemType|Destiny-DestinyItemType]]:Enum
    "grantDestinyItemType": 0,
    // Type: [[DestinyItemSubType|Destiny-DestinyItemSubType]]:Enum
    "grantDestinySubType": 0,
    // Type: [[DestinyClass|Destiny-DestinyClass]]:Enum
    "grantDestinyClass": 0,
    // Type: [[Destiny.Definitions.DestinyItemCategoryDefinition|Destiny-Definitions-DestinyItemCategoryDefinition]]:integer:uint32[]
    "groupedCategoryHashes": [
       // Type: integer:uint32
        0
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
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemCategoryDefinition.html#schema_Destiny-Definitions-DestinyItemCategoryDefinition
