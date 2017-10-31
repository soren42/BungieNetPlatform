<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of "tiles" used on the Bungie.net website.

* **URI:** [[/Destiny/LiveTiles/|https://bungie.net/d1/Platform/Destiny/LiveTiles/]]
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
GET https://bungie.net/d1/Platform/Destiny/LiveTiles/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetDestinyLiveTileContentItems]
    "Response": null,
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
