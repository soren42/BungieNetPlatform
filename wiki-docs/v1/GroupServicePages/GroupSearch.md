<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Searches for groups matching input string.  Returns matching group information.
* **URI:** [[/Group/Search/|https://www.bungie.net/Platform/Group/Search/]]
* **Method:** POST
* **Accessibility:** Public
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Description
---- | -----------
populatefriends | true or false.

### JSON POST Parameters
Name | Description
---- | -----------
contents.searchValue | Group name to search for.
[[contents.searchType|Enums#GroupTypeSearchFilter]] | Filter by group type. Default 0.
creationDate | 
currentPage | The current page to return. Starts at 1.
[[groupMemberCountFilter|Enums#GroupMemberCountFilter]] | Filter groups based on how many members they have.
itemsPerPage | Number of results per page. Default is 10.
localeFilter | 
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.
sortBy | Default 0.
tagText | 

## Example
POST https://www.bungie.net/Platform/Group/Search/
 ```javascript
{
 	"contents": {
		"searchValue": "HeisenbergClan",
		"searchType": 0
	},
	"creationDate": 0,
	"sortBy": 0,
	"itemsPerPage": 10,
	"currentPage": 1,
	"membershipType": 0,
	"tagText": "",
	"localeFilter": "en",
	"groupMemberCountFilter": 0
 }
```
 ```javascript
{
    "Response": {
        "founders": [{
            "membershipId": "6046610",
            "uniqueName": "6046610",
            "displayName": "CAPNPLAN3T",
            "profilePicture": 69987,
            "profileTheme": 66,
            "userTitle": 0,
            "successMessageFlags": "0",
            "isDeleted": false,
            "about": "",
            "firstAccess": "2014-09-09T11:08:59.821Z",
            "lastUpdate": "2014-09-12T11:37:53.104Z",
            "psnDisplayName": "CAP-N_PLAN3T",
            "showActivity": true,
            "followerCount": 51,
            "followingUserCount": 55,
            "locale": "en",
            "localeInheritDefault": true,
            "showGroupMessaging": true,
            "profilePicturePath": "/img/profile/avatars/odst_skull_5_4.png",
            "profileThemeName": "Destiny1",
            "userTitleDisplay": "Newbie",
            "statusText": "",
            "statusDate": "0001-01-01T00:00:00Z"
        }],
        "relatedGroups": [],
        "results": [{
            "detail": {
                "groupId": "700997",
                "name": "HeisenbergClan",
                "membershipIdCreated": "6046610",
                "creationDate": "2014-12-29T14:21:31.006Z",
                "modificationDate": "2015-05-20T12:58:16.77Z",
                "groupType": 0,
                "about": "We shoot things, preferably in the face.",
                "isDeleted": false,
                "tags": ["#face", "#shoot"],
                "rating": 63,
                "ratingCount": 4,
                "memberCount": 5,
                "pendingMemberCount": 0,
                "isPublic": true,
                "isMembershipClosed": false,
                "isMembershipReviewed": true,
                "isPublicTopicAdminOnly": true,
                "primaryAlliedGroupId": "0",
                "motto": "Shoot",
                "clanCallsign": "HSBN",
                "allowChat": true,
                "isDefaultPostPublic": true,
                "isDefaultPostAlliance": false,
                "chatSecurity": 0,
                "locale": "en",
                "avatarImageIndex": 60046,
                "founderMembershipId": "6046610",
                "homepage": 0,
                "membershipOption": 0,
                "defaultPublicity": 0,
                "theme": "Group_Director",
                "bannerPath": "/img/Themes/Group_Director/struct_images/group_top_banner.jpg",
                "avatarPath": "/img/profile/avatars/group/avatars_groups_hunter.jpg",
                "isAllianceOwner": false,
                "conversationId": "7882965",
                "clanReviewType": 0,
                "enableInvitationMessagingForAdmins": true
            },
            "founderMembershipId": "6046610",
            "founder": {
                "membershipId": "6046610",
                "uniqueName": "6046610",
                "displayName": "CAPNPLAN3T",
                "profilePicture": 69987,
                "profileTheme": 66,
                "userTitle": 0,
                "successMessageFlags": "0",
                "isDeleted": false,
                "about": "",
                "firstAccess": "2014-09-09T11:08:59.821Z",
                "lastUpdate": "2014-09-12T11:37:53.104Z",
                "psnDisplayName": "CAP-N_PLAN3T",
                "showActivity": true,
                "followerCount": 51,
                "followingUserCount": 55,
                "locale": "en",
                "localeInheritDefault": true,
                "showGroupMessaging": true,
                "profilePicturePath": "/img/profile/avatars/odst_skull_5_4.png",
                "profileThemeName": "Destiny1",
                "userTitleDisplay": "Newbie",
                "statusText": "",
                "statusDate": "0001-01-01T00:00:00Z"
            },
            "followerCount": 4,
            "currentUserStatus": {
                "isFollowing": false
            },
            "alliedIds": [],
            "attributes": [{
                "attributeId": 1,
                "minValue": 0,
                "maxValue": 100
            }, {
                "attributeId": 2,
                "minValue": 0,
                "maxValue": 100
            }, {
                "attributeId": 3,
                "minValue": 0,
                "maxValue": 100
            }, {
                "attributeId": 4,
                "minValue": 0,
                "maxValue": 0
            }, {
                "attributeId": 5,
                "minValue": 0,
                "maxValue": 0
            }, {
                "attributeId": 6,
                "minValue": 0,
                "maxValue": 0
            }, {
                "attributeId": 7,
                "minValue": 0,
                "maxValue": 0
            }, {
                "attributeId": 8,
                "minValue": 0,
                "maxValue": 0
            }],
            "membershipIds": [],
            "clanMembershipTypes": [{
                "membershipType": 2,
                "memberCount": 5,
                "isProbation": false,
                "isWorld": false,
                "needsFounder": false
            }],
            "allianceStatus": 0,
            "friends": [],
            "groupJoinRequestCount": 0,
            "groupJoinInviteCount": 0,
            "clanJoinRequestCount": 0,
            "clanJoinInviteCount": 0
        }],
        "totalResults": "1",
        "hasMore": false,
        "query": {
            "contents": {
                "searchValue": "heisenbergclan",
                "searchType": 0
            },
            "creationDate": 0,
            "sortBy": 0,
            "membershipType": 0,
            "groupMemberCountFilter": 0,
            "localeFilter": "en",
            "tagText": "",
            "itemsPerPage": 26,
            "currentPage": 1
        },
        "useTotalResults": false
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {}
}
}
```

## References