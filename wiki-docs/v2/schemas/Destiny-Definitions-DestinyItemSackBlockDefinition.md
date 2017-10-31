<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Some items are &quot;sacks&quot; - they can be &quot;opened&quot; to produce other items. This is information related to its sack status, mostly UI strings. Engrams are an example of items that are considered to be &quot;Sacks&quot;.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
detailAction | string | A description of what will happen when you open the sack. As far as I can tell, this is blank currently. Unknown whether it will eventually be populated with useful info.
openAction | string | The localized name of the action being performed when you open the sack.
selectItemCount | integer:int32 | 
vendorSackType | string | 

## Example
```javascript
{
    // Type: string
    "detailAction": "",
    // Type: string
    "openAction": "",
    // Type: integer:int32
    "selectItemCount": 0,
    // Type: string
    "vendorSackType": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemSackBlockDefinition.html#schema_Destiny-Definitions-DestinyItemSackBlockDefinition
