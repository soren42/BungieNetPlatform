<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
version | string | 
mobileAssetContentPath | string | 
mobileGearAssetDataBases | [[GearAssetDataBaseDefinition|Destiny-Config-GearAssetDataBaseDefinition]][] | 
mobileWorldContentPaths | Dictionary&lt;string,string&gt; | 
mobileClanBannerDatabasePath | string | 
mobileGearCDN | Dictionary&lt;string,string&gt; | 

## Example
```javascript
{
    // Type: string
    "version": "",
    // Type: string
    "mobileAssetContentPath": "",
    // Type: [[GearAssetDataBaseDefinition|Destiny-Config-GearAssetDataBaseDefinition]][]
    "mobileGearAssetDataBases": [
       // Type: [[GearAssetDataBaseDefinition|Destiny-Config-GearAssetDataBaseDefinition]]
        {
            // Type: integer:int32
            "version": 0,
            // Type: string
            "path": ""
        }
    ],
    // Type: Dictionary&lt;string,string&gt;
    "mobileWorldContentPaths": {
        "{string}": ""
    },
    // Type: string
    "mobileClanBannerDatabasePath": "",
    // Type: Dictionary&lt;string,string&gt;
    "mobileGearCDN": {
        "{string}": ""
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Config-DestinyManifest.html#schema_Destiny-Config-DestinyManifest
