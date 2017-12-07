<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## <a name="apiKey"></a>apiKey
Every request requires an API key.  To get an API key, register a new application at https://www.bungie.net/en/Application.

* **Type:** apiKey
* **Name:** X-API-Key
* **Location:** header

## <a name="oauth2"></a>oauth2
For requests that require Authentication, you will need to have your users authenticate via our OAuth mechanisms.  See https://github.com/Bungie-net/api/wiki/OAuth-Documentation for more details.

* **Type:** oauth2

### <a name="oauth2-authorizationCode"></a>authorizationCode
> * **Authorization URL:** https://www.bungie.net/en/OAuth/Authorize
> * **Token URL:** https://www.bungie.net/Platform/App/OAuth/token/
> * **Refresh URL:** https://www.bungie.net/Platform/App/OAuth/token/
> * **Scopes:**

> Name | Description
---- | -----------
> ReadBasicUserProfile | Read basic user profile information such as the user's handle, avatar icon, etc.
> ReadGroups | Read Group/Clan Forums, Wall, and Members for groups and clans that the user has joined.
> WriteGroups | Write Group/Clan Forums, Wall, and Members for groups and clans that the user has joined.
> AdminGroups | Administer Group/Clan Forums, Wall, and Members for groups and clans that the user is a founder or an administrator.
> BnetWrite | Create new groups, clans, and forum posts.
> MoveEquipDestinyItems | Move or equip Destiny items
> ReadDestinyInventoryAndVault | Read Destiny 1 Inventory and Vault contents.For Destiny 2, this scope is needed to read anything regarded as private. This is the only scope aDestiny 2 app needs for read operations against Destiny 2 data such as inventory, vault, currency,vendors, milestones, progression, etc.
> ReadUserData | Read user data such as who they are web notifications, clan/group memberships, recent activity, muted users.
> EditUserData | Edit user data such as preferred language, status, motto, avatar selection and theme.
> ReadDestinyVendorsAndAdvisors | Access vendor and advisor data specific to a user. OBSOLETE. This scope is only used on the Destiny 1 API.
> ReadAndApplyTokens | Read offer history and claim and apply tokens for the user.


