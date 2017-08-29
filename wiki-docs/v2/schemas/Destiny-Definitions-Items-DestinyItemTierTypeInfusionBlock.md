<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Definition

## Properties
Name | Type | Description
---- | ---- | -----------
baseQualityTransferRatio | number:float | The default portion of quality that will transfer from the infuser to the infusee item.(InfuserQuality - InfuseeQuality) * baseQualityTransferRatio = base quality transferred.
minimumQualityIncrement | integer:int32 | As long as InfuserQuality &gt; InfuseeQuality, the amount of quality bestowed is guaranteedto be at least this value, even if the transferRatio would dictate that it should be less.The total amount of quality that ends up in the Infusee cannot exceed the Infuser's quality however(for instance, if you infuse a 300 item with a 301 item and the minimum quality incrementis 10, the infused item will not end up with 310 quality)

## Example
```javascript
{
    // Type: number:float
    "baseQualityTransferRatio": 0,
    // Type: integer:int32
    "minimumQualityIncrement": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Items-DestinyItemTierTypeInfusionBlock.html#schema_Destiny-Definitions-Items-DestinyItemTierTypeInfusionBlock
