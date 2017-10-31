<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
As of Destiny 2, nodes can exist as part of &quot;Exclusive Groups&quot;. These differ from exclusive sets in that, within the group, many nodes can be activated. But the act of activating any node in the group will cause &quot;opposing&quot; nodes (nodes in groups that are not allowed to be activated at the same time as this group) to deactivate.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
groupHash | integer:uint32 | The identifier for this exclusive group. Only guaranteed unique within the talent grid, not globally.
loreHash | [[Destiny.Definitions.Lore.DestinyLoreDefinition|Destiny-Definitions-Lore-DestinyLoreDefinition]]:integer:uint32:nullable | If this group has an associated piece of lore to show next to it, this will be the identifier for that DestinyLoreDefinition.
nodeHashes | integer:uint32[] | A quick reference of the talent nodes that are part of this group, by their Talent Node hashes. (See DestinyTalentNodeDefinition.nodeHash)
opposingGroupHashes | integer:uint32[] | A quick reference of Groups whose nodes will be deactivated if any node in this group is activated.
opposingNodeHashes | integer:uint32[] | A quick reference of Nodes that will be deactivated if any node in this group is activated, by their Talent Node hashes. (See DestinyTalentNodeDefinition.nodeHash)

## Example
```javascript
{
    // Type: integer:uint32
    "groupHash": 0,
    // Type: [[Destiny.Definitions.Lore.DestinyLoreDefinition|Destiny-Definitions-Lore-DestinyLoreDefinition]]:integer:uint32:nullable
    "loreHash": 0,
    // Type: integer:uint32[]
    "nodeHashes": [
       // Type: integer:uint32
        0
    ],
    // Type: integer:uint32[]
    "opposingGroupHashes": [
       // Type: integer:uint32
        0
    ],
    // Type: integer:uint32[]
    "opposingNodeHashes": [
       // Type: integer:uint32
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyTalentExclusiveGroup.html#schema_Destiny-Definitions-DestinyTalentExclusiveGroup
