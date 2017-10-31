<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
A Kiosk is a Vendor (DestinyVendorDefinition) that sells items based on whether you have already acquired that item before. This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the individual character's DestinyCharacterKiosksComponent. Note that, because this component returns vendorItemIndexes (that is to say, indexes into the Kiosk Vendor's itemList property), these results are necessarily content version dependent. Make sure that you have the latest version of the content manifest databases before using this data.

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** Kiosks

## Properties
Name | Type | Description
---- | ---- | -----------
kioskItems | Dictionary&lt;[[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32,[[DestinyKioskItem|Destiny-Components-Kiosks-DestinyKioskItem]][]&gt; | A dictionary keyed by the Kiosk Vendor's hash identifier (use it to look up the DestinyVendorDefinition for the relevant kiosk vendor), and whose value is a list of all the items that the user can &quot;see&quot; in the Kiosk, and any other interesting metadata.

## Example
```javascript
{
    // Type: Dictionary&lt;[[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32,[[DestinyKioskItem|Destiny-Components-Kiosks-DestinyKioskItem]][]&gt;
    "kioskItems": {
        "0": [
           // Type: [[DestinyKioskItem|Destiny-Components-Kiosks-DestinyKioskItem]]
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
        ]
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Components-Kiosks-DestinyKiosksComponent.html#schema_Destiny-Components-Kiosks-DestinyKiosksComponent
