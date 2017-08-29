<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
This enumeration represents the most restrictive type of gating that is being performedby an entity.  This is useful as a shortcut to avoid a lot of lookups when determiningwhether the gating on an Entity applies to everyone equally, or to their specific Profileor Character states. None = There is no gating on this item.Global = The gating on this item is based entirely on global game state.  It will be gated the same for everyone.Clan = The gating on this item is at the Clan level.  For instance, if you're gated by Clan level this will be the case.Profile = The gating includes Profile-specific checks, but not on the Profile's characters.  An example of this might be when you acquire an Emblem: the Emblem will be available in your Kiosk for all characters in your Profile from that point onward.Character = The gating includes Character-specific checks, including character level restrictions.  An example of this might be an item that you can't purchase from a Vendor until you reach a specific Character Level.Item = The gating includes item-specific checks.  For BNet, this generally implies that we'll show this data only on a character level or deeper.AssumedWorstCase = The unlocks and checks being used for this calculation are of an unknown type and are used for unknown purposes.For instance, if some great person decided that an unlock value should be globally scoped, but then the game changes it usingcharacter-specific data in a way that BNet doesn't know about.  Because of the open-ended potential for this to occur, many unlock checksfor &quot;globally&quot; scoped unlock data may be assumed as the worst case unless it has been specifically whitelisted as otherwise.  That sucks, butthem's the breaks.

## Schema
* **Schema Type:** Enum
* **Type:** integer
* **Format:** int32

## Enum Values
Identifier | Value | Description
---------- | ----- | -----------
None | 0 | 
Global | 1 | 
Clan | 2 | 
Profile | 3 | 
Character | 4 | 
Item | 5 | 
AssumedWorstCase | 6 | 

## References
1. https://bungie-net.github.io/multi/schema_Destiny-DestinyGatingScope.html#schema_Destiny-DestinyGatingScope
