<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
InvitePermissionOverride | boolean:nullable | Minimum Member Level allowed to invite new members to group Always Allowed: Founder, Acting Founder True means admins have this power, false means they don't Default is false for clans, true for groups.
UpdateCulturePermissionOverride | boolean:nullable | Minimum Member Level allowed to update group culture Always Allowed: Founder, Acting Founder True means admins have this power, false means they don't Default is false for clans, true for groups.
HostGuidedGamePermissionOverride | integer:int32:nullable | Minimum Member Level allowed to host guided games Always Allowed: Founder, Acting Founder, Admin Allowed Overrides: None, Member, Beginner Default is Member for clans, None for groups, although this means nothing for groups.
UpdateBannerPermissionOverride | boolean:nullable | Minimum Member Level allowed to update banner Always Allowed: Founder, Acting Founder True means admins have this power, false means they don't Default is false for clans, true for groups.
JoinLevel | integer:int32:nullable | Level to join a member at when accepting an invite, application, or joining an open clan Default is Beginner.

## Example
```javascript
{
    // Type: boolean:nullable
    "InvitePermissionOverride": false,
    // Type: boolean:nullable
    "UpdateCulturePermissionOverride": false,
    // Type: integer:int32:nullable
    "HostGuidedGamePermissionOverride": 0,
    // Type: boolean:nullable
    "UpdateBannerPermissionOverride": false,
    // Type: integer:int32:nullable
    "JoinLevel": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_GroupsV2-GroupOptionsEditAction.html#schema_GroupsV2-GroupOptionsEditAction
