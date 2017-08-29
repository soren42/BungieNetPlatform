<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Generic

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:uint32,[[DestinyItemPlugComponent|Destiny-Components-Items-DestinyItemPlugComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:uint32,[[DestinyItemPlugComponent|Destiny-Components-Items-DestinyItemPlugComponent]]&gt;
    "data": {
        "0": {
            // Type: integer:int32[]
            "insertFailIndexes": [
               // Type: integer:int32
                0
            ],
            // Type: integer:int32[]
            "enableFailIndexes": [
               // Type: integer:int32
                0
            ]
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent.html#schema_DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent
