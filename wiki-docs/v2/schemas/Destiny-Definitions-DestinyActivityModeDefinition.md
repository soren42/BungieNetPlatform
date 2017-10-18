<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Manifest Definition
* **Mobile Manifest:** ActivityModes

## Properties
Name | Type | Description
---- | ---- | -----------
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
pgcrImage | string | 
modeType | [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum | 
activityModeCategory | [[DestinyActivityModeCategory|Destiny-DestinyActivityModeCategory]]:Enum | 
parentHashes | integer:uint32[] | 
friendlyName | string | 
activityModeMappings | Dictionary&lt;integer:uint32,[[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum&gt; | 
display | boolean | If FALSE, we want to ignore this type when we're showing activity modes in BNet UI.  It will still be returned in case3rd parties want to use it for any purpose.
order | integer:int32 | The relative ordering of activity modes.
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
    // Type: string
    "pgcrImage": "",
    // Type: [[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum
    "modeType": 0,
    // Type: [[DestinyActivityModeCategory|Destiny-DestinyActivityModeCategory]]:Enum
    "activityModeCategory": 0,
    // Type: integer:uint32[]
    "parentHashes": [
       // Type: integer:uint32
        0
    ],
    // Type: string
    "friendlyName": "",
    // Type: Dictionary&lt;integer:uint32,[[DestinyActivityModeType|Destiny-HistoricalStats-Definitions-DestinyActivityModeType]]:Enum&gt;
    "activityModeMappings": {
        "0": 0
    },
    // Type: boolean
    "display": false,
    // Type: integer:int32
    "order": 0,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyActivityModeDefinition.html#schema_Destiny-Definitions-DestinyActivityModeDefinition
