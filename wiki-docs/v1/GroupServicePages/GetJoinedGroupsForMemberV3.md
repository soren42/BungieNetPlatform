<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

* **URI:** [[/Group/User/{membershipId}/JoinedV3/{currentPage}/|https://www.bungie.net/Platform/Group/User/{membershipId}/JoinedV3/{currentPage}/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
membershipId | A valid Bungie.net membershipId.
currentPage | The current page to return. Starts at 1.

### Query String Parameters
Name | Description
---- | -----------
populatefriends | true or false

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Group/User/5197148/JoinedV3/1/
```javascript
{
    "Response": {
        "founders": [
            {
                "membershipId": "68974",
                "uniqueName": "dazarobbo",
                "displayName": "dazarobbo",
                "profilePicture": -3,
                "profileTheme": 54,
                "userTitle": 0,
                "successMessageFlags": "0",
                "isDeleted": false,
                "about": "Got a question or have something to say? Read here first: http:\/\/goo.gl\/Aco7as",
                "firstAccess": "2007-09-30T11:39:45.6Z",
                "lastUpdate": "2015-09-20T17:32:31.056Z",
                "context": {
                    "isFollowing": false,
                    "ignoreStatus": {
                        "isIgnored": false,
                        "ignoreFlags": 0
                    }
                },
                "showActivity": false,
                "followerCount": 262,
                "followingUserCount": 8,
                "locale": "en",
                "localeInheritDefault": true,
                "showGroupMessaging": true,
                "profilePicturePath": "https:\/\/halo.bungie.net\/Stats\/emblem.ashx?s=90&0=0&1=0&2=0&3=9&fi=47&bi=4&fl=0&m=1",
                "profileThemeName": "septagon",
                "userTitleDisplay": "Newbie",
                "statusText": "online-420464832",
                "statusDate": "2015-09-20T17:32:31.056Z"
            }
        ],
        "relatedGroups": [],
        "results": [
            {
                "detail": {
                    "groupId": "39966",
                    "name": "BungieNetPlatform",
                    "membershipIdCreated": "68974",
                    "creationDate": "2013-04-17T10:23:46.69Z",
                    "modificationDate": "2014-08-24T06:54:42.874Z",
                    "groupType": 0,
                    "about": "Documentation for the BungieNetPlatform API.",
                    "isDeleted": false,
                    "tags": [
                        "#programming",
                        "#BungieNetPlatform",
                        "#api"
                    ],
                    "rating": 100,
                    "ratingCount": 1857,
                    "memberCount": 2006,
                    "pendingMemberCount": 0,
                    "isPublic": true,
                    "isMembershipClosed": false,
                    "isMembershipReviewed": false,
                    "isPublicTopicAdminOnly": false,
                    "primaryAlliedGroupId": "0",
                    "clanCallsign": "",
                    "allowChat": true,
                    "isDefaultPostPublic": true,
                    "isDefaultPostAlliance": false,
                    "chatSecurity": 1,
                    "locale": "en",
                    "avatarImageIndex": 70000,
                    "founderMembershipId": "68974",
                    "homepage": 1,
                    "membershipOption": 1,
                    "defaultPublicity": 0,
                    "theme": "Group_Community3",
                    "bannerPath": "\/img\/Themes\/Group_Community3\/struct_images\/group_top_banner.jpg",
                    "avatarPath": "\/img\/profile\/avatars\/group\/defaultGroup.png",
                    "isAllianceOwner": false,
                    "conversationId": "3780924",
                    "clanReviewType": 1,
                    "enableInvitationMessagingForAdmins": true,
                    "banExpireDate": "2001-01-01T00:00:00Z"
                },
                "founderMembershipId": "68974",
                "founder": {
                    "membershipId": "68974",
                    "uniqueName": "dazarobbo",
                    "displayName": "dazarobbo",
                    "profilePicture": -3,
                    "profileTheme": 54,
                    "userTitle": 0,
                    "successMessageFlags": "0",
                    "isDeleted": false,
                    "about": "Got a question or have something to say? Read here first: http:\/\/goo.gl\/Aco7as",
                    "firstAccess": "2007-09-30T11:39:45.6Z",
                    "lastUpdate": "2015-09-20T17:32:31.056Z",
                    "context": {
                        "isFollowing": false,
                        "ignoreStatus": {
                            "isIgnored": false,
                            "ignoreFlags": 0
                        }
                    },
                    "showActivity": false,
                    "followerCount": 262,
                    "followingUserCount": 8,
                    "locale": "en",
                    "localeInheritDefault": true,
                    "showGroupMessaging": true,
                    "profilePicturePath": "https:\/\/halo.bungie.net\/Stats\/emblem.ashx?s=90&0=0&1=0&2=0&3=9&fi=47&bi=4&fl=0&m=1",
                    "profileThemeName": "septagon",
                    "userTitleDisplay": "Newbie",
                    "statusText": "online-420464832",
                    "statusDate": "2015-09-20T17:32:31.056Z"
                },
                "followerCount": 2035,
                "currentUserStatus": {
                    "isFollowing": true,
                    "membershipStatus": {
                        "Response": {
                            "clanMembershipTypes": [],
                            "clanMemberTypes": {},
                            "user": {
                                "membershipId": "5197148",
                                "uniqueName": "5197148",
                                "displayName": "lowlines",
                                "profilePicture": 70525,
                                "profileTheme": 84,
                                "userTitle": 0,
                                "successMessageFlags": "33",
                                "isDeleted": false,
                                "about": "",
                                "firstAccess": "2014-07-18T08:03:04.916Z",
                                "lastUpdate": "2016-02-05T03:48:09.563Z",
                                "context": {
                                    "isFollowing": false,
                                    "ignoreStatus": {
                                        "isIgnored": false,
                                        "ignoreFlags": 0
                                    }
                                },
                                "psnDisplayName": "lowlines",
                                "xboxDisplayName": "Low Lines",
                                "showActivity": true,
                                "followerCount": 78,
                                "followingUserCount": 86,
                                "locale": "en",
                                "localeInheritDefault": true,
                                "showGroupMessaging": true,
                                "profilePicturePath": "\/img\/profile\/avatars\/bungieday_03.jpg",
                                "profileThemeName": "bungieday1303",
                                "userTitleDisplay": "Newbie",
                                "statusText": "Join the Friendly Ghosts! (PS4)",
                                "statusDate": "2016-02-05T03:48:09.563Z"
                            },
                            "hasPendingApplication": false,
                            "hasRated": false,
                            "approvalDate": "2015-02-27T01:27:46.191Z",
                            "approvedByMembershipId": "5197148",
                            "rating": 0,
                            "groupId": "39966",
                            "membershipType": 0,
                            "membershipId": "5197148",
                            "isMember": true,
                            "memberType": 0,
                            "isOriginalFounder": false
                        },
                        "ErrorCode": 1,
                        "ThrottleSeconds": 0,
                        "ErrorStatus": "Success",
                        "MessageData": {}
                    }
                },
                "alliedIds": [],
                "attributes": [
                    {
                        "attributeId": 1,
                        "minValue": 0,
                        "maxValue": 100
                    },
                    {
                        "attributeId": 2,
                        "minValue": 0,
                        "maxValue": 100
                    },
                    {
                        "attributeId": 3,
                        "minValue": 0,
                        "maxValue": 100
                    },
                    {
                        "attributeId": 4,
                        "minValue": 0,
                        "maxValue": 0
                    },
                    {
                        "attributeId": 5,
                        "minValue": 0,
                        "maxValue": 0
                    },
                    {
                        "attributeId": 6,
                        "minValue": 0,
                        "maxValue": 0
                    },
                    {
                        "attributeId": 7,
                        "minValue": 0,
                        "maxValue": 0
                    },
                    {
                        "attributeId": 8,
                        "minValue": 0,
                        "maxValue": 0
                    }
                ],
                "membershipIds": [],
                "clanMembershipTypes": [],
                "allianceStatus": 0,
                "friends": [],
                "groupJoinRequestCount": 0,
                "groupJoinInviteCount": 0,
                "clanJoinRequestCount": 0,
                "clanJoinInviteCount": 0
            }
        ],
        "totalResults": "1",
        "hasMore": false,
        "query": {
            "itemsPerPage": 50,
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
```

## References
