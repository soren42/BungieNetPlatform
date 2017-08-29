<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:int64,[[DestinyInventoryComponent|Destiny-Entities-Inventory-DestinyInventoryComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:int64,[[DestinyInventoryComponent|Destiny-Entities-Inventory-DestinyInventoryComponent]]&gt;
    "data": {
        "0": {
            // Type: [[DestinyItemComponent|Destiny-Entities-Items-DestinyItemComponent]][]
            "items": [
               // Type: [[DestinyItemComponent|Destiny-Entities-Items-DestinyItemComponent]]
                {
                    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
                    "itemHash": 0,
                    // Type: integer:int64:nullable
                    "itemInstanceId": 0,
                    // Type: integer:int32
                    "quantity": 0,
                    // Type: [[ItemBindStatus|Destiny-ItemBindStatus]]:Enum
                    "bindStatus": 0,
                    // Type: [[ItemLocation|Destiny-ItemLocation]]:Enum
                    "location": 0,
                    // Type: [[DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:ManifestDefinition:integer:uint32
                    "bucketHash": 0,
                    // Type: [[TransferStatuses|Destiny-TransferStatuses]]:Enum
                    "transferStatus": 0,
                    // Type: boolean
                    "lockable": false,
                    // Type: [[ItemState|Destiny-ItemState]]:Enum
                    "state": 0
                }
            ]
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfint64AndDestinyInventoryComponent.html#schema_DictionaryComponentResponseOfint64AndDestinyInventoryComponent
