<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The list of perks to display in an item tooltip - and whether or not they have been activated. Perks apply a variety of effects to a character, and are generally either intrinsic to the itemor provided in activated talent nodes or sockets.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
perkHash | [[Destiny.Definitions.DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:integer:uint32 | The hash identifier for the perk, which can be used to look up DestinySandboxPerkDefinition if it exists.Be warned, perks frequently do not have user-viewable information.  You should examine whether you actuallyfound a name/description in the perk's definition before you show it to the user.
iconPath | string | The icon for the perk.
isActive | boolean | Whether this perk is currently active.  (We may return perks that you have not actually activated yet:these represent perks that you should show in the item's tooltip, but that the user has not yetactivated.)
visible | boolean | Some perks provide benefits, but aren't visible in the UI.  This value will let you know if this isperk should be shown in your UI.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:integer:uint32
    "perkHash": 0,
    // Type: string
    "iconPath": "",
    // Type: boolean
    "isActive": false,
    // Type: boolean
    "visible": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Perks-DestinyPerkReference.html#schema_Destiny-Perks-DestinyPerkReference
