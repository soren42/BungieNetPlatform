<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Enum
* **Type:** integer
* **Format:** int64

## Enum Values
Identifier | Value | Description
---------- | ----- | -----------
ReadBasicUserProfile | 1 | Read basic user profile information such as the user's handle, avatar icon, etc.
ReadGroups | 2 | Read Group/Clan Forums, Wall, and Members for groups and clans that the user has joined.
WriteGroups | 4 | Write Group/Clan Forums, Wall, and Members for groups and clans that the user has joined.
AdminGroups | 8 | Administer Group/Clan Forums, Wall, and Members for groups and clans that the user is a founder or an administrator.
BnetWrite | 16 | Create new groups, clans, and forum posts.
MoveEquipDestinyItems | 32 | Move or equip Destiny items
ReadDestinyInventoryAndVault | 64 | Read Destiny 1 Inventory and Vault contents. For Destiny 2, this scope is needed to read anything regarded as private. This is the only scope a Destiny 2 app needs for read operations against Destiny 2 data such as inventory, vault, currency, vendors, milestones, progression, etc.
ReadUserData | 128 | Read user data such as who they are web notifications, clan/group memberships, recent activity, muted users.
EditUserData | 256 | Edit user data such as preferred language, status, motto, avatar selection and theme.
ReadDestinyVendorsAndAdvisors | 512 | Access vendor and advisor data specific to a user. OBSOLETE. This scope is only used on the Destiny 1 API.
ReadAndApplyTokens | 1024 | Read offer history and claim and apply tokens for the user.

## References
1. https://bungie-net.github.io/multi/schema_Applications-ApplicationScopes.html#schema_Applications-ApplicationScopes
