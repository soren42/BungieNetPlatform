<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Many Destiny*Definition contracts - the &quot;first order&quot; entities of Destiny that have their own tables in the Manifest Database - also have displayable information. This is the base class for that display information.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
description | string | 
name | string | 
icon | string | Note that &quot;icon&quot; is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book. But usually, it will be a small square image that you can use as... well, an icon.
hasIcon | boolean | 

## Example
```javascript
{
    // Type: string
    "description": "",
    // Type: string
    "name": "",
    // Type: string
    "icon": "",
    // Type: boolean
    "hasIcon": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition.html#schema_Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition
