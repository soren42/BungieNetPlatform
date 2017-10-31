<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the current version of the manifest as a json object.

* **URI:** [[/Destiny2/Manifest/|https://www.bungie.net/Platform/Destiny2/Manifest/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/Destiny2/Manifest/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[DestinyManifest|Destiny-Config-DestinyManifest]]
    "Response": {
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
    },
    // Type: [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum
    "ErrorCode": 0,
    // Type: integer:int32
    "ThrottleSeconds": 0,
    // Type: string
    "ErrorStatus": "",
    // Type: string
    "Message": "",
    // Type: Dictionary&lt;string,string&gt;
    "MessageData": {
        "{string}": ""
    },
    // Type: object
}

```

## References
1. https://bungie-net.github.io/multi/operation_get_Destiny2-GetDestinyManifest.html#operation_get_Destiny2-GetDestinyManifest
