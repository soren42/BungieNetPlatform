<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This defines information that can only come from a talent grid on an item.Items mostly have negligible talent grid data these days, but instanced items still retaingrids as a source for some of this common information. Builds/Subclasses are the only items left that still have talent grids with meaningfulNodes.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
talentGridHash | [[Destiny.Definitions.DestinyTalentGridDefinition|Destiny-Definitions-DestinyTalentGridDefinition]]:integer:uint32 | The hash identifier of the DestinyTalentGridDefinition attached to this item.
itemDetailString | string | This is meant to be a subtitle for looking at the talent grid.In practice, somewhat frustratingly, this always merely says the localized wordfor &quot;Details&quot;.  Great.  Maybe it'll have more if talent grids ever get usedfor more than builds and subclasses again.
buildName | string | A shortcut string identifier for the &quot;build&quot; in question, if this talent gridhas an associated build.  Doesn't map to anything we can expose at the moment.
hudDamageType | [[DamageType|Destiny-DamageType]]:Enum | If the talent grid implies a damage type, this is the enum value for that damage type.
hudIcon | string | If the talent grid has a special icon that's shown in the game UI (like builds, funny that),this is the identifier for that icon.Sadly, we don't actually get that icon right now.  I'll be looking to replace thiswith a path to the actual icon itself.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyTalentGridDefinition|Destiny-Definitions-DestinyTalentGridDefinition]]:integer:uint32
    "talentGridHash": 0,
    // Type: string
    "itemDetailString": "",
    // Type: string
    "buildName": "",
    // Type: [[DamageType|Destiny-DamageType]]:Enum
    "hudDamageType": 0,
    // Type: string
    "hudIcon": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyItemTalentGridBlockDefinition.html#schema_Destiny-Definitions-DestinyItemTalentGridBlockDefinition
