<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Defines a specific stat value on an item, and the minimum/maximum range that we couldcompute for the item based on our heuristics for how the item might be generated. Not guaranteed to match real-world instances of the item, but should hopefully at leastbe close.  If it's not close, let us know on the Bungie API forums.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
statHash | [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32 | The hash for the DestinyStatDefinition representing this stat.
value | integer:int32 | This value represents the stat value assuming the minimum possible rollbut accounting for any mandatory bonuses that should be applied to the stat on item creation. In Destiny 1, this was different from the &quot;minimum&quot; value because there were certain conditionswhere an item could be theoretically lower level/value than the initial roll. In Destiny 2, this is not possible unless Talent Grids begin to be used again for these purposes or some othersystem change occurs... thus in practice, value and minimum should be the same in Destiny 2.  Good riddance.
minimum | integer:int32 | The minimum possible value for this stat that we think the item can roll.
maximum | integer:int32 | The maximum possible value for this stat that we think the item can roll.

## Example
```javascript
{
    // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
    "statHash": 0,
    // Type: integer:int32
    "value": 0,
    // Type: integer:int32
    "minimum": 0,
    // Type: integer:int32
    "maximum": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyInventoryItemStatDefinition.html#schema_Destiny-Definitions-DestinyInventoryItemStatDefinition
