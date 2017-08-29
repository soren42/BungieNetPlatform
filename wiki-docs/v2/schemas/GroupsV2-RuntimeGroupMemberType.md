<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The member levels used by all V2 Groups API.  Individual group types use their own mappings in theirnative storage (general uses BnetDbGroupMemberType and D2 clans use ClanMemberLevel), but they are all translatedto this in the runtime api.  These runtime values should NEVER be stored anywhere, so the values can be changed as necessary.

## Schema
* **Schema Type:** Enum
* **Type:** integer
* **Format:** int32

## Enum Values
Identifier | Value | Description
---------- | ----- | -----------
None | 0 | 
Beginner | 1 | 
Member | 2 | 
Admin | 3 | 
ActingFounder | 4 | 
Founder | 5 | 

## References
1. https://bungie-net.github.io/multi/schema_GroupsV2-RuntimeGroupMemberType.html#schema_GroupsV2-RuntimeGroupMemberType
