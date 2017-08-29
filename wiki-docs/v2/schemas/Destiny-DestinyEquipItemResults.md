<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The results of a bulk Equipping operation performed through the Destiny API.

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
equipResults | [[DestinyEquipItemResult|Destiny-DestinyEquipItemResult]][] | 

## Example
```javascript
{
    // Type: [[DestinyEquipItemResult|Destiny-DestinyEquipItemResult]][]
    "equipResults": [
       // Type: [[DestinyEquipItemResult|Destiny-DestinyEquipItemResult]]
        {
            // Type: integer:int64
            "itemInstanceId": 0,
            // Type: [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum
            "equipStatus": 0
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-DestinyEquipItemResults.html#schema_Destiny-DestinyEquipItemResults
