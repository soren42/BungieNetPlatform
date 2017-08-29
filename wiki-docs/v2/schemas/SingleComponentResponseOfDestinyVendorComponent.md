<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyVendorComponent|Destiny-Entities-Vendors-DestinyVendorComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyVendorComponent|Destiny-Entities-Vendors-DestinyVendorComponent]]
    "data": {
        // Type: [[DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:ManifestDefinition:integer:uint32
        "vendorHash": 0,
        // Type: [[AckState|User-AckState]]
        "ackState": {
            // Type: boolean
            "needsAck": false,
            // Type: string
            "ackId": ""
        },
        // Type: string:date-time
        "nextRefreshDate": "",
        // Type: boolean
        "enabled": false,
        // Type: boolean
        "canPurchase": false,
        // Type: [[DestinyProgression|Destiny-DestinyProgression]]
        "progression": {
            // Type: [[DestinyProgressionDefinition|Destiny-Definitions-DestinyProgressionDefinition]]:ManifestDefinition:integer:uint32
            "progressionHash": 0,
            // Type: integer:int32
            "dailyProgress": 0,
            // Type: integer:int32
            "dailyLimit": 0,
            // Type: integer:int32
            "weeklyProgress": 0,
            // Type: integer:int32
            "weeklyLimit": 0,
            // Type: integer:int32
            "currentProgress": 0,
            // Type: integer:int32
            "level": 0,
            // Type: integer:int32
            "levelCap": 0,
            // Type: integer:int32
            "stepIndex": 0,
            // Type: integer:int32
            "progressToNextLevel": 0,
            // Type: integer:int32
            "nextLevelAt": 0
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyVendorComponent.html#schema_SingleComponentResponseOfDestinyVendorComponent
