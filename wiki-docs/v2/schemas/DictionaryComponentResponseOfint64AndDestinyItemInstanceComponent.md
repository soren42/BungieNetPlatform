<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Generic Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
data | Dictionary&lt;integer:int64,[[DestinyItemInstanceComponent|Destiny-Entities-Items-DestinyItemInstanceComponent]]&gt; | 
privacy | [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum | 

## Example
```javascript
{
    // Type: Dictionary&lt;integer:int64,[[DestinyItemInstanceComponent|Destiny-Entities-Items-DestinyItemInstanceComponent]]&gt;
    "data": {
        "0": {
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
        }
    },
    // Type: [[ComponentPrivacySetting|Components-ComponentPrivacySetting]]:Enum
    "privacy": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent.html#schema_DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent
