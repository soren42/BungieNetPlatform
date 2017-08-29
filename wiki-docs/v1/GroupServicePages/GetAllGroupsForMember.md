<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Get all groups for a given user.
* **URI:** [[/Group/User/{membershipId}/All/|https://www.bungie.net/Platform/Group/User/{membershipId}/All/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
membershipId | A valid Bungie.net membershipId.

### Query String Parameters
Name | Description
---- | -----------
clanonly | true or false. Default false.
populatefriends | true or false. Default false.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Group/68974/All/
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
                "about": "Got a question or have something to say? Read here first: http:\/\/goo.gl\/25Thhj",
                "firstAccess": "2007-09-30T11:39:45.6Z",
                "lastUpdate": "2015-05-11T18:42:37.392Z",
                "context": {
                    "isFollowing": false,
                    "ignoreStatus": {
                        "isIgnored": false,
                        "ignoreFlags": 0
                    }
                },
                "showActivity": true,
                "followerCount": 238,
                "followingUserCount": 1,
                "locale": "en",
                "localeInheritDefault": true,
                "showGroupMessaging": true,
                "profilePicturePath": "https:\/\/halo.bungie.net\/Stats\/emblem.ashx?s=90&0=0&1=0&2=0&3=9&fi=47&bi=4&fl=0&m=1",
                "profileThemeName": "septagon",
                "userTitleDisplay": "Newbie"
            },
            {
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
                "lastUpdate": "2015-06-02T03:27:22.251Z",
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
                "followerCount": 48,
                "followingUserCount": 52,
                "locale": "en",
                "localeInheritDefault": true,
                "showGroupMessaging": true,
                "profilePicturePath": "\/img\/profile\/avatars\/bungieday_03.jpg",
                "profileThemeName": "bungieday1303",
                "userTitleDisplay": "Newbie"
            }
        ],
        "relatedGroups": [

        ],
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
                    "ratingCount": 1164,
                    "memberCount": 1018,
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
                    "enableInvitationMessagingForAdmins": true
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
                    "about": "Got a question or have something to say? Read here first: http:\/\/goo.gl\/25Thhj",
                    "firstAccess": "2007-09-30T11:39:45.6Z",
                    "lastUpdate": "2015-05-11T18:42:37.392Z",
                    "context": {
                        "isFollowing": false,
                        "ignoreStatus": {
                            "isIgnored": false,
                            "ignoreFlags": 0
                        }
                    },
                    "showActivity": true,
                    "followerCount": 238,
                    "followingUserCount": 1,
                    "locale": "en",
                    "localeInheritDefault": true,
                    "showGroupMessaging": true,
                    "profilePicturePath": "https:\/\/halo.bungie.net\/Stats\/emblem.ashx?s=90&0=0&1=0&2=0&3=9&fi=47&bi=4&fl=0&m=1",
                    "profileThemeName": "septagon",
                    "userTitleDisplay": "Newbie"
                },
                "followerCount": 1140,
                "currentUserStatus": {
                    "isFollowing": true,
                    "membershipStatus": {
                        "Response": {
                            "clanMembershipTypes": [

                            ],
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
                                "lastUpdate": "2015-06-02T03:27:22.251Z",
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
                                "followerCount": 48,
                                "followingUserCount": 52,
                                "locale": "en",
                                "localeInheritDefault": true,
                                "showGroupMessaging": true,
                                "profilePicturePath": "\/img\/profile\/avatars\/bungieday_03.jpg",
                                "profileThemeName": "bungieday1303",
                                "userTitleDisplay": "Newbie"
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
                        "MessageData": {

                        }
                    }
                },
                "alliedIds": [

                ],
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
                "membershipIds": [

                ],
                "clanMembershipTypes": [

                ],
                "allianceStatus": 0,
                "friends": [

                ],
                "groupJoinRequestCount": 0,
                "groupJoinInviteCount": 0,
                "clanJoinRequestCount": 0,
                "clanJoinInviteCount": 0
            }
        ],
        "totalResults": "2",
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
    "MessageData": {

    }
}
```

## References
