<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If the item can exist in an inventory - the overwhelming majority of them can and do -then this is the basic properties regarding the item's relationship with the inventory.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
stackUniqueLabel | string | If this string is populated, you can't have more than one stack with this label in a given inventory.Note that this is different from the equipping block's unique label, which is used for equipping uniqueness.
maxStackSize | integer:int32 | The maximum quantity of this item that can exist in a stack.
bucketTypeHash | [[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:ManifestDefinition:integer:uint32 | The hash identifier for the DestinyInventoryBucketDefinition to which this item belongs.I should have named this &quot;bucketHash&quot;, but too many things refer to it now.  Sigh.
recoveryBucketTypeHash | [[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:ManifestDefinition:integer:uint32 | If the item is picked up by the lost loot queue, this is the hash identifierfor the DestinyInventoryBucketDefinition into which it will be placed.Again, I should have named this recoveryBucketHash instead.
tierTypeHash | [[DestinyItemTierTypeDefinition|Destiny-Definitions-Items-DestinyItemTierTypeDefinition]]:ManifestDefinition:integer:uint32 | The hash identifier for the Tier Type of the item, use to look up its DestinyItemTierTypeDefinitionif you need to show localized data for the item's tier.
isInstanceItem | boolean | If TRUE, this item is instanced.  Otherwise, it is a generic item that merely has a quantity in a stack (like Glimmer).
tierTypeName | string | The localized name of the tier type, which is a useful shortcut so you don't have to look up the definition every time.  However, it's mostly a holdover from days before we had a DestinyItemTierTypeDefinition to refer to.
tierType | [[TierType|Destiny-TierType]]:Enum | The enumeration matching the tier type of the item to known values, again for convenience sake.

## Example
```javascript
{
    // Type: string
    "stackUniqueLabel": "",
    // Type: integer:int32
    "maxStackSize": 0,
    // Type: [[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:ManifestDefinition:integer:uint32
    "bucketTypeHash": 0,
    // Type: [[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:ManifestDefinition:integer:uint32
    "recoveryBucketTypeHash": 0,
    // Type: [[DestinyItemTierTypeDefinition|Destiny-Definitions-Items-DestinyItemTierTypeDefinition]]:ManifestDefinition:integer:uint32
    "tierTypeHash": 0,
    // Type: boolean
    "isInstanceItem": false,
    // Type: string
    "tierTypeName": "",
    // Type: [[TierType|Destiny-TierType]]:Enum
    "tierType": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemInventoryBlockDefinition.html#schema_Destiny-Definitions-DestinyItemInventoryBlockDefinition
