<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Type:** Generic

## Properties
Name | Type | Description
---- | ---- | -----------
data | [[DestinyItemInstanceComponent|Destiny-Entities-Items-DestinyItemInstanceComponent]] | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: [[DestinyItemInstanceComponent|Destiny-Entities-Items-DestinyItemInstanceComponent]]
    "data": {
        // Type: [[DamageType|Destiny-DamageType]]:Enum
        "damageType": 0,
        // Type: [[DestinyDamageTypeDefinition|Destiny-Definitions-DestinyDamageTypeDefinition]]:ManifestDefinition:integer:uint32:nullable
        "damageTypeHash": 0,
        // Type: [[DestinyStat|Destiny-DestinyStat]]
        "primaryStat": {
            // Type: [[DestinyStatDefinition|Destiny-Definitions-DestinyStatDefinition]]:ManifestDefinition:integer:uint32
            "statHash": 0,
            // Type: integer:int32
            "value": 0,
            // Type: integer:int32
            "maximumValue": 0
        },
        // Type: integer:int32
        "itemLevel": 0,
        // Type: integer:int32
        "quality": 0,
        // Type: boolean
        "isEquipped": false,
        // Type: boolean
        "canEquip": false,
        // Type: integer:int32
        "equipRequiredLevel": 0,
        // Type: [[DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]]:ManifestDefinition:integer:uint32[]
        "unlockHashesRequiredToEquip": [
           // Type: integer:uint32
            0
        ],
        // Type: [[EquipFailureReason|Destiny-EquipFailureReason]]:Enum
        "cannotEquipReason": 0
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_SingleComponentResponseOfDestinyItemInstanceComponent.html#schema_SingleComponentResponseOfDestinyItemInstanceComponent
