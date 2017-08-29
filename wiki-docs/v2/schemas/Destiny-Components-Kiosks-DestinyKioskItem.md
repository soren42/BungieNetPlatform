<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
index | integer:int32 | The index of the item in the related DestinyVendorDefintion's itemList property, representingthe sale.
canAcquire | boolean | If true, the user can not only see the item, but they can acquire it.  It is possible that a usercan see a kiosk item and not be able to acquire it.
failureIndexes | integer:int32[] | Indexes into failureStrings for the Vendor, indicating the reasons why it failed if any.

## Example
```javascript
{
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "canAcquire": false,
    // Type: integer:int32[]
    "failureIndexes": [
       // Type: integer:int32
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Components-Kiosks-DestinyKioskItem.html#schema_Destiny-Components-Kiosks-DestinyKioskItem
