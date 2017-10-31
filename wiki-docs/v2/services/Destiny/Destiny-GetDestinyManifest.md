<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the current version of the Destiny 1 mobile manifest as a json object.

* **URI:** [[/Destiny/Manifest/|https://bungie.net/d1/Platform/Destiny/Manifest/]]
* **Basepath:** https://bungie.net/d1/Platform
* **Method:** GET
* **Service:** [[Destiny|Endpoints#Destiny]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/Manifest/

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
