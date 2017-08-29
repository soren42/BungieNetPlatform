<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the account information for the given membershipId and type, including any exposed BungieNet and Destiny information. Will respect privacy of links based on requesting user for anonymous requests.
* **URI:** [[/User/GetBungieAccount/{membershipId}/{membershipType}/|https://www.bungie.net/Platform/User/GetBungieAccount/{membershipId}/{membershipType}/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[UserService|Endpoints#UserService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
membershipId | A valid Bungie.net membership ID.
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.

### Query String Parameters
None

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/User/GetBungieAccount/8011/254/
 ```javascript
{
    "Response": {
        "destinyAccountResult": 1,
        "destinyAccounts": [
            {
                "userInfo": {
                    "iconPath": "\/common\/destiny_content\/icons\/ca7a9bb4a45b7d33a4848577a67cfa33.jpg",
                    "membershipType": 1,
                    "membershipId": "4611686018429501017",
                    "displayName": "DeeJ BNG"
                },
                "grimoireScore": 2625,
                "clanName": "TTL Gunslingers",
                "clanTag": "TTL",
                "characters": [
                    {
                        "characterId": "2305843009292996472",
                        "raceHash": 898834093,
                        "genderHash": 3111576190,
                        "classHash": 2271682572,
                        "emblemHash": 1443409297,
                        "race": {
                            "raceHash": 898834093,
                            "raceType": 2,
                            "raceName": "Exo",
                            "raceNameMale": "Exo Male",
                            "raceNameFemale": "Exo Female",
                            "raceDescription": "Self-aware machines built for a long-forgotten war."
                        },
                        "gender": {
                            "genderHash": 3111576190,
                            "genderType": 0,
                            "genderName": "Male",
                            "genderDescription": "###Missing String: lc en index 50 hash 2652775957 name gender_male_description###"
                        },
                        "characterClass": {
                            "classHash": 2271682572,
                            "classType": 2,
                            "className": "Warlock",
                            "classNameMale": "Warlock",
                            "classNameFemale": "Warlock",
                            "classIdentifier": "CLASS_WARLOCK",
                            "mentorVendorIdentifier": "VENDOR_WARLOCK_MENTOR"
                        },
                        "emblemPath": "\/common\/destiny_content\/icons\/ca7a9bb4a45b7d33a4848577a67cfa33.jpg",
                        "backgroundPath": "\/common\/destiny_content\/icons\/0fc2957b437530a6fec4b241257089bd.jpg",
                        "level": 32,
                        "powerLevel": 32,
                        "dateLastPlayed": "2015-05-31T06:37:38Z",
                        "membershipId": "4611686018429501017",
                        "membershipType": 1,
                        "levelProgression": {
                            "dailyProgress": 26515,
                            "weeklyProgress": 42025,
                            "currentProgress": 5498447,
                            "level": 68,
                            "step": 0,
                            "progressToNextLevel": 58447,
                            "nextLevelAt": 80000,
                            "progressionHash": 2030054750
                        },
                        "isPrestigeLevel": true,
                        "genderType": 0,
                        "classType": 2,
                        "percentToNextLevel": 0
                    }
                ],
                "lastPlayed": "0001-01-01T00:00:00Z"
            },
            {
                "userInfo": {
                    "iconPath": "\/common\/destiny_content\/icons\/ca7a9bb4a45b7d33a4848577a67cfa33.jpg",
                    "membershipType": 2,
                    "membershipId": "4611686018428388138",
                    "displayName": "DeeJ_BNG"
                },
                "grimoireScore": 2260,
                "clanName": "TTL Gunslingers",
                "clanTag": "TTL",
                "characters": [
                    {
                        "characterId": "2305843009267191713",
                        "raceHash": 898834093,
                        "genderHash": 3111576190,
                        "classHash": 2271682572,
                        "emblemHash": 1443409297,
                        "race": {
                            "raceHash": 898834093,
                            "raceType": 2,
                            "raceName": "Exo",
                            "raceNameMale": "Exo Male",
                            "raceNameFemale": "Exo Female",
                            "raceDescription": "Self-aware machines built for a long-forgotten war."
                        },
                        "gender": {
                            "genderHash": 3111576190,
                            "genderType": 0,
                            "genderName": "Male",
                            "genderDescription": "###Missing String: lc en index 50 hash 2652775957 name gender_male_description###"
                        },
                        "characterClass": {
                            "classHash": 2271682572,
                            "classType": 2,
                            "className": "Warlock",
                            "classNameMale": "Warlock",
                            "classNameFemale": "Warlock",
                            "classIdentifier": "CLASS_WARLOCK",
                            "mentorVendorIdentifier": "VENDOR_WARLOCK_MENTOR"
                        },
                        "emblemPath": "\/common\/destiny_content\/icons\/ca7a9bb4a45b7d33a4848577a67cfa33.jpg",
                        "backgroundPath": "\/common\/destiny_content\/icons\/0fc2957b437530a6fec4b241257089bd.jpg",
                        "level": 31,
                        "powerLevel": 31,
                        "dateLastPlayed": "2015-05-08T05:18:38Z",
                        "membershipId": "4611686018428388138",
                        "membershipType": 2,
                        "levelProgression": {
                            "dailyProgress": 29971,
                            "weeklyProgress": 29971,
                            "currentProgress": 4895440,
                            "level": 61,
                            "step": 0,
                            "progressToNextLevel": 15440,
                            "nextLevelAt": 80000,
                            "progressionHash": 2030054750
                        },
                        "isPrestigeLevel": true,
                        "genderType": 0,
                        "classType": 2,
                        "percentToNextLevel": 25
                    }
                ],
                "lastPlayed": "0001-01-01T00:00:00Z"
            }
        ],
        "bungieNetUser": {
            "membershipId": "8011",
            "uniqueName": "DeeJ",
            "displayName": "DeeJ",
            "profilePicture": 770057,
            "profileTheme": 67,
            "userTitle": 0,
            "successMessageFlags": "59",
            "isDeleted": false,
            "about": "Your friendly neighborhood Community Manager.",
            "firstAccess": "2004-10-29T18:14:49.77Z",
            "lastUpdate": "2015-02-27T23:28:26.83Z",
            "context": {
                "isFollowing": false,
                "ignoreStatus": {
                    "isIgnored": false,
                    "ignoreFlags": 0
                }
            },
            "psnDisplayName": "DeeJ_BNG",
            "xboxDisplayName": "DeeJ BNG",
            "showActivity": true,
            "followerCount": 15445,
            "followingUserCount": 264,
            "locale": "en",
            "localeInheritDefault": true,
            "showGroupMessaging": true,
            "profilePicturePath": "\/img\/profile\/avatars\/admin\/deej_icon.jpg",
            "profileThemeName": "Destiny2",
            "userTitleDisplay": "Newbie"
        },
        "clans": [
            {
                "groupId": "681",
                "platformType": 1
            },
            {
                "groupId": "681",
                "platformType": 2
            }
        ],
        "relatedGroups": {
            "681": {
                "groupId": "681",
                "name": "TTL Gunslingers",
                "membershipIdCreated": "8011",
                "creationDate": "2005-10-28T07:42:20.437Z",
                "modificationDate": "2014-09-07T16:43:04.149Z",
                "groupType": 0,
                "about": "United by a common code of conduct, we uphold a time-honored standard for sportsmanship and fair-play. We fight with honor and a light heart, but with an intention to carry the day. At the conclusion of a match, in either victory or defeat, you can expect to hear little else from us than \u201cGood Game!\u201d",
                "isDeleted": false,
                "deletionDate": "2001-01-01T00:00:00Z",
                "deletedByMembershipId": "0",
                "tags": [

                ],
                "rating": 100,
                "ratingCount": 1489,
                "memberCount": 83,
                "pendingMemberCount": 13,
                "isPublic": false,
                "isMembershipClosed": false,
                "isMembershipReviewed": true,
                "isPublicTopicAdminOnly": true,
                "primaryAlliedGroupId": "0",
                "motto": "We are one from many. We deal in lead.",
                "clanCallsign": "TTL",
                "allowChat": false,
                "isDefaultPostPublic": false,
                "isDefaultPostAlliance": false,
                "chatSecurity": 0,
                "locale": "en",
                "avatarImageIndex": 70018,
                "founderMembershipId": "8011",
                "homepage": 1,
                "membershipOption": 0,
                "defaultPublicity": 2,
                "theme": "Group_Guns",
                "bannerPath": "\/img\/Themes\/Group_Guns\/struct_images\/group_top_banner.jpg",
                "avatarPath": "\/img\/profile\/avatars\/group\/018.jpg",
                "isAllianceOwner": false,
                "conversationId": "3781016",
                "clanReviewType": 1,
                "enableInvitationMessagingForAdmins": true
            }
        }
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
1. http://www.bungie.net/platform/user/help/HelpDetail/GET?uri=GetBungieAccount%2f%7bmembershipId%7d%2f%7bmembershipType%7d%2f
