<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyItemComponent|Destiny-Entities-Items-DestinyItemComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyItemComponent|Destiny-Entities-Items-DestinyItemComponent]]
    "data": {
        // Type: [[Destiny.Definitions.DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:integer:uint32
        "itemHash": 0,
        // Type: integer:int64:nullable
        "itemInstanceId": 0,
        // Type: integer:int32
        "quantity": 0,
        // Type: [[ItemBindStatus|Destiny-ItemBindStatus]]:Enum
        "bindStatus": 0,
        // Type: [[ItemLocation|Destiny-ItemLocation]]:Enum
        "location": 0,
        // Type: [[Destiny.Definitions.DestinyInventoryBucketDefinition|Destiny-Definitions-DestinyInventoryBucketDefinition]]:integer:uint32
        "bucketHash": 0,
        // Type: [[TransferStatuses|Destiny-TransferStatuses]]:Enum
        "transferStatus": 0,
        // Type: boolean
        "lockable": false,
        // Type: [[ItemState|Destiny-ItemState]]:Enum
        "state": 0
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyItemComponent.html#schema_SingleComponentResponseOfDestinyItemComponent
