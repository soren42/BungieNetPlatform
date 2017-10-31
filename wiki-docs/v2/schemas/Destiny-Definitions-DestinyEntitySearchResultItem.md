<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
An individual Destiny Entity returned from the entity search.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
hash | integer:uint32 | The hash identifier of the entity. You will use this to look up the DestinyDefinition relevant for the entity found.
entityType | string | The type of entity, returned as a string matching the DestinyDefinition's contract class name. You'll have to have your own mapping from class names to actually looking up those definitions in the manifest databases.
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | Basic display properties on the entity, so you don't have to look up the definition to show basic results for the item.
weight | number:double | The ranking value for sorting that we calculated using our relevance formula. This will hopefully get better with time and iteration.

## Example
```javascript
{
    // Type: integer:uint32
    "hash": 0,
    // Type: string
    "entityType": "",
    // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
    "displayProperties": {},
    // Type: number:double
    "weight": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyEntitySearchResultItem.html#schema_Destiny-Definitions-DestinyEntitySearchResultItem
