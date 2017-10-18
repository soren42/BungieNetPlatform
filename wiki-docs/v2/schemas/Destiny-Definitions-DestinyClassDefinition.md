<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Defines a Character Class in Destiny 2.  These are types of characters you can play, likeTitan, Warlock, and Hunter.

## Schema
* **Schema Type:** Manifest Definition
* **Mobile Manifest:** Classes

## Properties
Name | Type | Description
---- | ---- | -----------
classType | [[DestinyClass|Destiny-DestinyClass]]:Enum | In Destiny 1, we added a convenience Enumeration for referring to classes.  We've kept it,though mostly for posterity.  This is the enum value for this definition's class.
displayProperties | [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition | 
genderedClassNames | Dictionary&lt;[[DestinyGender|Destiny-DestinyGender]]:Enum,string&gt; | A localized string referring to the singular form of the Class's name when referred to in gendered form.Keyed by the DestinyGender.
mentorVendorHash | [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32:nullable | If the Class has a Mentor (all classes *should*), this will be the hash identifier for that Vendor if you care.
hash | integer:uint32 | The unique identifier for this entity.  Guaranteed to be unique for the type of entity, but not globally. When entities refer to each other in Destiny content, it is this hash that they are referring to.
index | integer:int32 | The index of the entity as it was found in the investment tables.
redacted | boolean | If this is true, then there is an entity with this identifier/type combination, but BNet isnot yet allowed to show it.  Sorry!

## Example
```javascript
{
    // Type: [[DestinyClass|Destiny-DestinyClass]]:Enum
    "classType": 0,
    // Type: [[DestinyDisplayPropertiesDefinition|Destiny-Definitions-Common-DestinyDisplayPropertiesDefinition]]:Definition
    "displayProperties": {
        // Type: string
        "description": "",
        // Type: string
        "name": "",
        // Type: string
        "icon": "",
        // Type: boolean
        "hasIcon": false
    },
    // Type: Dictionary&lt;[[DestinyGender|Destiny-DestinyGender]]:Enum,string&gt;
    "genderedClassNames": {
        "0": ""
    },
    // Type: [[Destiny.Definitions.DestinyVendorDefinition|Destiny-Definitions-DestinyVendorDefinition]]:integer:uint32:nullable
    "mentorVendorHash": 0,
    // Type: integer:uint32
    "hash": 0,
    // Type: integer:int32
    "index": 0,
    // Type: boolean
    "redacted": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyClassDefinition.html#schema_Destiny-Definitions-DestinyClassDefinition
