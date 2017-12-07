<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
These definitions represent Factions in the game. Factions have ended up unilaterally being related to Vendors that represent them, but that need not necessarily be the case. A Faction is really just an entity that has a related progression for which a character can gain experience. In Destiny 1, Dead Orbit was an example of a Faction: there happens to be a Vendor that represents Dead Orbit (and indeed, DestinyVendorDefinition.factionHash defines to this relationship), but Dead Orbit could theoretically exist without the Vendor that provides rewards.

## Schema
* **Schema Type:** Manifest Definition
* **Type:** object
* **Mobile Manifest:** Factions

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
progressionHash | [[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:integer:uint32 | The hash identifier for the DestinyProgressionDefinition that indicates the character's relationship with this faction in terms of experience and levels.
tokenValues | Dictionary&lt;integer:uint32,integer:uint32&gt; | The faction token item hashes, and their respective progression values.
rewardItemHash | [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32 | The faction reward item hash, usually an engram.
rewardVendorHash | [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32 | The faction reward vendor hash, used for faction engram previews.
vendors | [[Destiny.Definitions.DestinyFactionVendorDefinition|Destiny-Definitions-DestinyFactionVendorDefinition]][] | List of vendors that are associated with this faction. The last vendor that passes the unlock flag checks is the one that should be shown.
hash | integer:uint32 | The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!

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
    // Type: [[Destiny.Definitions.DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:integer:uint32
    "progressionHash": 0,
    // Type: Dictionary&lt;integer:uint32,integer:uint32&gt;
    "tokenValues": {
        "0": 0
    },
    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
    "rewardItemHash": 0,
    // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32
    "rewardVendorHash": 0,
    // Type: [[Destiny.Definitions.DestinyFactionVendorDefinition|Destiny-Definitions-DestinyFactionVendorDefinition]][]
    "vendors": [
       // Type: [[Destiny.Definitions.DestinyFactionVendorDefinition|Destiny-Definitions-DestinyFactionVendorDefinition]]
        {
            // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32
            "vendorHash": 0,
            // Type: [[Destiny.Definitions.DestinyDestinationDefinition|Destiny-Definitions-DestinyDestinationDefinition]]:integer:uint32
            "destinationHash": 0,
            // Type: string
            "backgroundImagePath": ""
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
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyFactionDefinition.html#schema_Destiny-Definitions-DestinyFactionDefinition
