<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Create a new group. 
* **URI:** [[/Group/Create/V2/|https://www.bungie.net/Platform/Group/Create/V2/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
Name | Description
---- | -----------
name | The name of the group.
clanCallSign | The 4 letter A-Z0-9 Clan ID.
motto | The group motto.
about | The group mission statement.
theme | 
tags | Comma separated list of tags.
avatarImageIndex | 
isPublic | 
membershipOption | 
isPublicTopicAdminOnly | 
isDefaultPostPublic | 
clanMembershipTypes | A list of clanMembershipTypes. 1=Xbox, 2=PSN, 10=Demon
attributes | 
allowChat | 
locale | 
clanReviewType | 
clanName | 

## Example
POST https://www.bungie.net/Platform/Group/Create/V2/
 ```javascript
{
    "Response": 0,
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {}
}
```

## References
1. https://www.bungie.net/Scripts/bungienet/clans/clans.min.js
