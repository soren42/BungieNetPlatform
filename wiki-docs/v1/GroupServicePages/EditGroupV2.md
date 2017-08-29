<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Edit a group that the current user is an admin for. 
* **URI:** [[/Group/{groupId}/EditV2/|https://www.bungie.net/Platform/Group/{groupId}/EditV2/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.

### Query String Parameters
None

### JSON POST Parameters
Name | Description
---- | -----------
name | The name of the group. Max 25 characters.
clanCallSign | 
motto | One line statement about the group.
about | Description about the group.
theme | 
tags | List of tags this group applies to. Comma separated.
avatarImageIndex | 
chatSecurity | 
allowChat | 
membershipOptions | 
homepage | 
locale | 
isPublic | 
isPublicTopicAdminOnly | 
defaultPublicity | 
isDefaultPostPublic | 
clanReviewType | 
enableInvitationMessagingForAdmins | 
clanName | 
[[clanMembershipTypes|Enums#BungieMembershipType]] | An array of clanMembershipTypes. 1=Xbox, 2=PSN, 10=Demon

## Example
POST https://www.bungie.net/Platform/Group/177526/EditV2/
```javascript
{
    "name": "ClanName",
    "clanCallsign": "CLNM",
    "motto": "Motto goes here",
    "about": "Mission statement goes here.",
    "tags": ""
}
```
 ```javascript
{
  "Response": 0,
  "ErrorCode": 1,
  "ThrottleSeconds": 0,
  "ErrorStatus": "Success",
  "Message": "Ok",
  "MessageData": {
 
  }
}
```

## References
1. https://www.bungie.net/Scripts/bungienet/clans/clans.min.js
