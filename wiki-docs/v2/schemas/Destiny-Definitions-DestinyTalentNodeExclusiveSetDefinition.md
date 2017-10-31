<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The list of indexes into the Talent Grid's &quot;nodes&quot; property for nodes in this exclusive set. (See DestinyTalentNodeDefinition.nodeIndex)

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
nodeIndexes | integer:int32[] | The list of node indexes for the exclusive set. Historically, these were indexes. I would have liked to replace this with nodeHashes for consistency, but it's way too late for that. (9:09 PM, he's right!)

## Example
```javascript
{
    // Type: integer:int32[]
    "nodeIndexes": [
       // Type: integer:int32
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyTalentNodeExclusiveSetDefinition.html#schema_Destiny-Definitions-DestinyTalentNodeExclusiveSetDefinition
