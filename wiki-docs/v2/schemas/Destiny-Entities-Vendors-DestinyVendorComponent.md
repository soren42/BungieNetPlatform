<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This component contains essential/summary information about the vendor.

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** Vendors

## Properties
Name | Type | Description
---- | ---- | -----------
vendorHash | [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32 | The unique identifier for the vendor. Use it to look up their DestinyVendorDefinition.
ackState | [[AckState|User-AckState]] | Long ago, we thought it would be a good idea to have special UI that showed whether or not you've seen a Vendor's inventory after cycling. For now, we don't have that UI anymore. This property still exists for historical purposes. Don't worry about it.
nextRefreshDate | string:date-time | The date when this vendor's inventory will next rotate/refresh.
enabled | boolean | If True, the Vendor is currently accessible. If False, they may not actually be visible in the world at the moment.
canPurchase | boolean | If True, you can purchase from the Vendor. Theoretically, Vendors can be restricted from selling items. In practice, none do that (yet?).
progression | [[DestinyProgression|Destiny-DestinyProgression]] | If the Vendor has a related Reputation, this is the Progression data that represents the character's Reputation level with this Vendor.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32
    "vendorHash": 0,
    // Type: [[AckState|User-AckState]]
    "ackState": {},
    // Type: string:date-time
    "nextRefreshDate": "",
    // Type: boolean
    "enabled": false,
    // Type: boolean
    "canPurchase": false,
    // Type: [[DestinyProgression|Destiny-DestinyProgression]]
    "progression": {}
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Vendors-DestinyVendorComponent.html#schema_Destiny-Entities-Vendors-DestinyVendorComponent
