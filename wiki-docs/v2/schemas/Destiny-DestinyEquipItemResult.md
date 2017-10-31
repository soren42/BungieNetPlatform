<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The results of an Equipping operation performed through the Destiny API.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
itemInstanceId | integer:int64 | The instance ID of the item in question (all items that can be equipped must, but definition, be Instanced and thus have an Instance ID that you can use to refer to them)
equipStatus | [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum | A PlatformErrorCodes enum indicating whether it succeeded, and if it failed why.

## Example
```javascript
{
    // Type: integer:int64
    "itemInstanceId": 0,
    // Type: [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum
    "equipStatus": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-DestinyEquipItemResult.html#schema_Destiny-DestinyEquipItemResult
