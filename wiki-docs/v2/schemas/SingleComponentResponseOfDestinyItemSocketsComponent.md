<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyItemSocketsComponent|Destiny-Entities-Items-DestinyItemSocketsComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyItemSocketsComponent|Destiny-Entities-Items-DestinyItemSocketsComponent]]
    "data": {
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
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyItemSocketsComponent.html#schema_SingleComponentResponseOfDestinyItemSocketsComponent
