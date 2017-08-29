<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns paged forum results using a given set of filters.
* **URI:** [[/Forum/GetTopicsPaged/{page}/{pageSize}/{group}/{sort}/{quickDate}/{categoryFilter}/|https://www.bungie.net/Platform/Forum/GetTopicsPaged/{page}/{pageSize}/{group}/{sort}/{quickDate}/{categoryFilter}/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[ForumService|Endpoints#ForumService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
page | The current page to return. Starts at 1.
pageSize | The number of results to return. Seems to ignore this and returns 25 results.
group | A valid groupId. Use 0 to get all forum posts.
[[sort|Enums#ForumTopicsSort]] | How to sort the result. Default is 0 (Default).
[[quickDate|Enums#ForumTopicsQuickDate]] | Return results from a predefined date range. Default is 0 (All).
[[categoryFilter|Enums#ForumTopicsCategoryFilters]] | Filter results by a topic category. Default is 0 (None).

### Query String Parameters
Name | Description
---- | -----------
tagstring | Filter by tags. Comma separated.
locales | 

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Forum/GetTopicsPaged/1/1/39966/0/0/0/?tagstring=help
```javascript
{
    "Response": {
        "relatedPosts": [
            {
                "postId": "163519602",
                "parentPostId": "162430615",
                "topicId": "161599163",
                "threadDepth": 3,
                "category": 1,
                "authorMembershipId": "377430",
                "body": "That&#39;s fair.  Thanks!",
                "urlLinkOrImage": "",
                "creationDate": "2015-10-16T18:14:12.885Z",
                "lastModified": "2015-10-16T18:14:12.885Z",
                "lastReplyDate": "2015-10-16T19:47:43.453Z",
                "editCount": 0,
                "replyCount": 0,
                "topicReplyCount": 0,
                "ratingCount": 2,
                "rating": 5666,
                "upvotes": 2,
                "downvotes": 0,
                "ratingScore": 2,
                "groupOwnerId": "39966",
                "isGroupPrivate": true,
                "parentGroupId": "39966",
                "flags": 0,
                "lockedForReplies": false,
                "parentAuthorId": "0",
                "topicAuthorId": "0",
                "isTopicBanned": false,
                "actualParentPostId": "162430615",
                "playerSupportFlags": 0,
                "pinned": 0,
                "awaitingApproval": false,
                "lastReplyTimestamp": "2015-10-16T19:47:43.453Z",
                "IsPinned": false,
                "urlMediaType": 0,
                "popularity": 1,
                "isActive": false,
                "isAnnouncement": false,
                "userRating": 50,
                "userHasRated": false,
                "userHasMutedPost": false,
                "latestReplyPostId": "0",
                "latestReplyAuthorId": "0",
                "ignoreStatus": {
                    "isIgnored": false,
                    "ignoreFlags": 0
                }
            }
        ],
        "authors": [
            {
                "membershipId": "377430",
                "uniqueName": "zyxwiley",
                "displayName": "zyxwiley",
                "profilePicture": 70532,
                "profileTheme": 54,
                "userTitle": 0,
                "successMessageFlags": "2",
                "isDeleted": false,
                "about": "",
                "firstAccess": "2009-05-25T02:42:05.13Z",
                "lastUpdate": "2014-09-06T15:53:14.797Z",
                "context": {
                    "isFollowing": false,
                    "ignoreStatus": {
                        "isIgnored": false,
                        "ignoreFlags": 0
                    }
                },
                "showActivity": false,
                "followerCount": 0,
                "followingUserCount": 31,
                "locale": "en",
                "localeInheritDefault": true,
                "showGroupMessaging": true,
                "profilePicturePath": "\/img\/profile\/avatars\/bungieday_10.jpg",
                "profileThemeName": "septagon",
                "userTitleDisplay": "Newbie",
                "statusText": "",
                "statusDate": "0001-01-01T00:00:00Z"
            }
        ],
        "groups": [
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
                    "memberCount": 2017,
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
                                "followingUserCount": 93,
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
        "searchedTags": [
            {
                "tagText": "#Help",
                "ignoreStatus": {
                    "isIgnored": false,
                    "ignoreFlags": 0
                }
            }
        ],
        "polls": [],
        "results": [
            {
                "postId": "161599163",
                "lastReplyId": "163519602",
                "threadDepth": 1,
                "category": 16,
                "authorMembershipId": "377430",
                "subject": "Missing items in \/Explorer\/Items\/ ?",
                "urlLinkOrImage": "",
                "creationDate": "2015-10-11T01:21:26.057Z",
                "lastModified": "2015-10-11T01:21:26.057Z",
                "lastReplyDate": "2015-10-16T18:14:12.885Z",
                "editCount": 0,
                "replyCount": 1,
                "topicReplyCount": 2,
                "ratingCount": 1,
                "rating": 5300,
                "upvotes": 1,
                "downvotes": 0,
                "ratingScore": 1,
                "groupOwnerId": "39966",
                "isGroupPrivate": true,
                "parentGroupId": "39966",
                "flags": 0,
                "lockedForReplies": false,
                "parentAuthorId": "0",
                "topicAuthorId": "0",
                "tags": [
                    "#Help"
                ],
                "isTopicBanned": false,
                "playerSupportFlags": 0,
                "pinned": 0,
                "awaitingApproval": false,
                "forumId": 3,
                "lastReplyTimestamp": "2015-10-16T18:14:12.885Z",
                "IsPinned": false,
                "urlMediaType": 0,
                "popularity": 1,
                "isActive": false,
                "isAnnouncement": false,
                "userRating": 50,
                "userHasRated": false,
                "userHasMutedPost": false,
                "latestReplyPostId": "163519602",
                "latestReplyAuthorId": "377430",
                "ignoreStatus": {
                    "isIgnored": false,
                    "ignoreFlags": 0
                }
            }
        ],
        "totalResults": "25",
        "hasMore": true,
        "query": {
            "itemsPerPage": 25,
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
1. https://www.bungie.net/Scripts/bungienet/clans/groupwall.min.js
