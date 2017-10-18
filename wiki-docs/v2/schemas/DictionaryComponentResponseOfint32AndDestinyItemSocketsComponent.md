<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:int32,[[DestinyItemSocketsComponent|Destiny-Entities-Items-DestinyItemSocketsComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:int32,[[DestinyItemSocketsComponent|Destiny-Entities-Items-DestinyItemSocketsComponent]]&gt;
    "data": {
        "0": {
            // Type: [[DestinyItemSocketState|Destiny-Entities-Items-DestinyItemSocketState]][]
            "sockets": [
               // Type: [[DestinyItemSocketState|Destiny-Entities-Items-DestinyItemSocketState]]
                {
                    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32:nullable
                    "plugHash": 0,
                    // Type: boolean
                    "isEnabled": false,
                    // Type: integer:int32[]
                    "enableFailIndexes": [
                       // Type: integer:int32
                        0
                    ],
                    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32[]
                    "reusablePlugHashes": [
                       // Type: integer:uint32
                        0
                    ]
                }
            ]
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent.html#schema_DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent
