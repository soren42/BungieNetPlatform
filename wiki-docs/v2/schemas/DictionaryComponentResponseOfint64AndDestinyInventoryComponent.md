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
                    // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
                    "itemHash": 0,
                    // Type: integer:int64:nullable
                    "itemInstanceId": 0,
                    // Type: integer:int32
                    "quantity": 0,
                    // Type: [[ItemBindStatus|Destiny-ItemBindStatus]]:Enum
                    "bindStatus": {},
                    // Type: [[ItemLocation|Destiny-ItemLocation]]:Enum
                    "location": {},
                    // Type: [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32
                    "bucketHash": 0,
                    // Type: [[TransferStatuses|Destiny-TransferStatuses]]:Enum
                    "transferStatus": {},
                    // Type: boolean
                    "lockable": false,
                    // Type: [[ItemState|Destiny-ItemState]]:Enum
                    "state": {}
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
