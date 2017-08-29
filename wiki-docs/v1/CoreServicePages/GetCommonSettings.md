<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns common settings for the Bungie.net. The "systems" property can also be used to determine which services are online/offline and should be checked before making calls to the API unless your code is able to handle error responses.
* **URI:** [[//Settings/|https://www.bungie.net/Platform//Settings/]]
* **Method:** GET
* **Accessibility:** 
* **Service:** [[CoreService|Endpoints#CoreService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform//Settings/
```javascript
{
    "Response": {
        "ignoreReasons": [
            {
                "identifier": "0",
                "isDefault": true,
                "displayName": "Personal Reasons"
            },
            {
                "identifier": "64",
                "isDefault": false,
                "displayName": "Personal Attacks\/Harassment"
            },
            {
                "identifier": "4",
                "isDefault": false,
                "displayName": "Disrespect\/Insults\/Disruption"
            },
            {
                "identifier": "1",
                "isDefault": false,
                "displayName": "Gory Violence\/Explicit Sexuality"
            },
            {
                "identifier": "256",
                "isDefault": false,
                "displayName": "Illegal Activity"
            },
            {
                "identifier": "32",
                "isDefault": false,
                "displayName": "Hacking\/Cheating"
            },
            {
                "identifier": "16",
                "isDefault": false,
                "displayName": "Spoilers\/Stolen Content"
            },
            {
                "identifier": "512",
                "isDefault": false,
                "displayName": "Soliciting\/Phishing\/Impersonation"
            }
        ],
        "forumCategories": [
            {
                "identifier": "Destiny",
                "isDefault": false,
                "displayName": "Destiny",
                "summary": "Be Brave.",
                "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_destiny_v2.jpg",
                "childSettings": [
                    {
                        "identifier": "Classes",
                        "isDefault": false,
                        "displayName": "Classes",
                        "summary": "Titan, Hunter, or Warlock?",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_destiny_v2.jpg"
                    },
                    {
                        "identifier": "Missions",
                        "isDefault": false,
                        "displayName": "Missions",
                        "summary": "Strike, Patrol, and Story.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_destiny_v2.jpg"
                    },
                    {
                        "identifier": "Competitive",
                        "isDefault": false,
                        "displayName": "Competitive",
                        "summary": "Competitive Multiplayer Discussion",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_destiny_v2.jpg"
                    },
                    {
                        "identifier": "Rewards",
                        "isDefault": false,
                        "displayName": "Rewards",
                        "summary": "Gear up. Level Up.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_destiny_v2.jpg"
                    },
                    {
                        "identifier": "Endgame",
                        "isDefault": false,
                        "displayName": "Endgame",
                        "summary": "Become Legend.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_destiny_v2.jpg"
                    }
                ]
            },
            {
                "identifier": "Recruitment",
                "isDefault": false,
                "displayName": "Recruitment",
                "summary": "Make friends, play games.",
                "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_clans_v2.jpg",
                "childSettings": [
                    {
                        "identifier": "Crucible",
                        "isDefault": false,
                        "displayName": "Crucible",
                        "summary": "Look for competitive allies.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_clans_v2.jpg"
                    },
                    {
                        "identifier": "Heroics",
                        "isDefault": false,
                        "displayName": "Heroics",
                        "summary": "Look for endgame Fireteams.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_clans_v2.jpg"
                    },
                    {
                        "identifier": "Raids",
                        "isDefault": false,
                        "displayName": "Raids",
                        "summary": "Look for a Raiding party.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_clans_v2.jpg"
                    },
                    {
                        "identifier": "Clans",
                        "isDefault": false,
                        "displayName": "Clans",
                        "summary": "Look for Clans or seek new members.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_clans_v2.jpg"
                    },
                    {
                        "identifier": "Bounties",
                        "isDefault": false,
                        "displayName": "Bounties",
                        "summary": "Looking for hunting partners.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_clans_v2.jpg"
                    }
                ]
            },
            {
                "identifier": "Help",
                "isDefault": false,
                "displayName": "Help",
                "summary": "Help us help you.",
                "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_support_v2.jpg",
                "childSettings": [
                    {
                        "identifier": "ErrorCodes",
                        "isDefault": false,
                        "displayName": "Error Codes",
                        "summary": "Get assistance with error codes.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_support_v2.jpg"
                    },
                    {
                        "identifier": "Networking",
                        "isDefault": false,
                        "displayName": "Networking",
                        "summary": "Troubleshoot your connection.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_support_v2.jpg"
                    },
                    {
                        "identifier": "Eververse",
                        "isDefault": false,
                        "displayName": "Eververse",
                        "summary": "Assistance with all things Eververse.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_support_v2.jpg"
                    },
                    {
                        "identifier": "Gameplay",
                        "isDefault": false,
                        "displayName": "Gameplay",
                        "summary": "Tell us what seems broken.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_support_v2.jpg"
                    },
                    {
                        "identifier": "BnetIssues",
                        "isDefault": false,
                        "displayName": "Bungie.net Issues",
                        "summary": "Help us make the website better.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_support_v2.jpg"
                    },
                    {
                        "identifier": "MobileIssues",
                        "isDefault": false,
                        "displayName": "Mobile Issues",
                        "summary": "Help us make the application better.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_support_v2.jpg"
                    }
                ]
            },
            {
                "identifier": "Feedback",
                "isDefault": false,
                "displayName": "Feedback",
                "summary": "Feedback and suggestions for Destiny.",
                "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_feedback_v2.jpg",
                "childSettings": [
                    {
                        "identifier": "Balance",
                        "isDefault": false,
                        "displayName": "Balance",
                        "summary": "What seems overpowered?",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_feedback_v2.jpg"
                    },
                    {
                        "identifier": "Bugs",
                        "isDefault": false,
                        "displayName": "Bugs",
                        "summary": "What\u2019s not working in the game?",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_feedback_v2.jpg"
                    },
                    {
                        "identifier": "Weapons",
                        "isDefault": false,
                        "displayName": "Weapons",
                        "summary": "Which guns need improvement?",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_feedback_v2.jpg"
                    },
                    {
                        "identifier": "Gear",
                        "isDefault": false,
                        "displayName": "Gear",
                        "summary": "Which items in your inventory need work?",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_feedback_v2.jpg"
                    },
                    {
                        "identifier": "Favorites",
                        "isDefault": false,
                        "displayName": "Favorites",
                        "summary": "What do you like about Destiny?",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_feedback_v2.jpg"
                    },
                    {
                        "identifier": "BungieNet",
                        "isDefault": false,
                        "displayName": "Bungie.net",
                        "summary": "What needs work on the Bungie.net web site?",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_feedback_v2.jpg"
                    },
                    {
                        "identifier": "Companion",
                        "isDefault": false,
                        "displayName": "Companion App",
                        "summary": "What needs work in the Companion App?",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_feedback_v2.jpg"
                    }
                ]
            },
            {
                "identifier": "Community",
                "isDefault": false,
                "displayName": "Community",
                "summary": "Join the Bungie Community.",
                "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_community_v2.jpg",
                "childSettings": [
                    {
                        "identifier": "Gallery",
                        "isDefault": false,
                        "displayName": "Gallery",
                        "summary": "Express your creativity.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_community_v2.jpg"
                    },
                    {
                        "identifier": "SeventhColumn",
                        "isDefault": false,
                        "displayName": "Seventh Column",
                        "summary": "Discuss what we all have in common.",
                        "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_community_v2.jpg"
                    }
                ]
            },
            {
                "identifier": "Bungie",
                "isDefault": false,
                "displayName": "Bungie",
                "summary": "Don\u2019t make us kick your ass.",
                "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_bungie_v2.jpg"
            },
            {
                "identifier": "Gaming",
                "isDefault": false,
                "displayName": "Gaming",
                "summary": "Talk about any game. We don't mind.",
                "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_gaming_v2.jpg"
            },
            {
                "identifier": "OffTopic",
                "isDefault": false,
                "displayName": "OffTopic",
                "summary": "Surf a Flood of random discussion.",
                "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_offtopic_v2.jpg"
            },
            {
                "identifier": "",
                "isDefault": true,
                "displayName": "All Topics",
                "summary": "Drink from the firehose.",
                "imagePath": "\/img\/theme\/destiny\/headers\/forum_headers_all.jpg"
            }
        ],
        "groupAvatars": [
            {
                "identifier": "70000",
                "isDefault": true,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/defaultGroup.png"
            },
            {
                "identifier": "70001",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/001.jpg"
            },
            {
                "identifier": "70002",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/002.jpg"
            },
            {
                "identifier": "70003",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/003.jpg"
            },
            {
                "identifier": "70004",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/004.jpg"
            },
            {
                "identifier": "70005",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/005.jpg"
            },
            {
                "identifier": "70006",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/006.jpg"
            },
            {
                "identifier": "70007",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/007.jpg"
            },
            {
                "identifier": "70008",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/008.jpg"
            },
            {
                "identifier": "70009",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/009.jpg"
            },
            {
                "identifier": "70010",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/010.jpg"
            },
            {
                "identifier": "70011",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/011.jpg"
            },
            {
                "identifier": "70012",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/012.jpg"
            },
            {
                "identifier": "70013",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/013.jpg"
            },
            {
                "identifier": "70014",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/014.jpg"
            },
            {
                "identifier": "70015",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/015.jpg"
            },
            {
                "identifier": "70016",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/016.jpg"
            },
            {
                "identifier": "70017",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/017.jpg"
            },
            {
                "identifier": "70018",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/018.jpg"
            },
            {
                "identifier": "70019",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/019.jpg"
            },
            {
                "identifier": "70020",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/020.jpg"
            },
            {
                "identifier": "70021",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/021.jpg"
            },
            {
                "identifier": "70022",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/022.jpg"
            },
            {
                "identifier": "70023",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/023.jpg"
            },
            {
                "identifier": "70024",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/024.png"
            },
            {
                "identifier": "70025",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/025.png"
            },
            {
                "identifier": "70026",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/026.png"
            },
            {
                "identifier": "70027",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/027.png"
            },
            {
                "identifier": "70028",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/028.png"
            },
            {
                "identifier": "70029",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/029.png"
            },
            {
                "identifier": "70031",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/031.png"
            },
            {
                "identifier": "70032",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/032.png"
            },
            {
                "identifier": "70033",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/033.png"
            },
            {
                "identifier": "70034",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/034.png"
            },
            {
                "identifier": "70035",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/035.png"
            },
            {
                "identifier": "70036",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/036.png"
            },
            {
                "identifier": "70037",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/037.png"
            },
            {
                "identifier": "70038",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/038.png"
            },
            {
                "identifier": "70039",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/039.png"
            },
            {
                "identifier": "70040",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/040.png"
            },
            {
                "identifier": "70041",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/041.png"
            },
            {
                "identifier": "70042",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/042.png"
            },
            {
                "identifier": "70043",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/043.png"
            },
            {
                "identifier": "70044",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/044.png"
            },
            {
                "identifier": "60045",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/avatars_groups_fallen.jpg"
            },
            {
                "identifier": "60046",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/avatars_groups_hunter.jpg"
            },
            {
                "identifier": "60047",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/avatars_groups_hunter1.jpg"
            },
            {
                "identifier": "60048",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/avatars_groups_hunter2.jpg"
            },
            {
                "identifier": "60049",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/avatars_groups_racer.jpg"
            },
            {
                "identifier": "60050",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/avatars_groups_titan.jpg"
            },
            {
                "identifier": "60051",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/avatars_groups_titan1.jpg"
            },
            {
                "identifier": "60052",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/avatars_groups_titan2.jpg"
            },
            {
                "identifier": "60053",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/avatars_groups_warlock.jpg"
            },
            {
                "identifier": "60054",
                "isDefault": false,
                "displayName": "",
                "summary": "",
                "imagePath": "\/img\/profile\/avatars\/group\/avatars_groups_warlock1.jpg"
            }
        ],
        "destinyMembershipTypes": [
            {
                "identifier": "TigerXbox",
                "isDefault": false,
                "displayName": "XBox",
                "summary": "",
                "imagePath": ""
            },
            {
                "identifier": "TigerPsn",
                "isDefault": false,
                "displayName": "PSN",
                "summary": "",
                "imagePath": ""
            },
            {
                "identifier": "TigerDemon",
                "isDefault": false,
                "displayName": "Demonware",
                "summary": "",
                "imagePath": ""
            }
        ],
        "systems": {
            "MobileAnalyticsSampleRate": {
                "enabled": true,
                "parameters": {
                    "iosRate": "50.0",
                    "androidRate": "50.0"
                }
            },
            "iosVersion": {
                "enabled": true,
                "parameters": {
                    "MinVersionMajor": "0"
                }
            },
            "androidVersion": {
                "enabled": true,
                "parameters": {
                    "MinVersionMajor": "0"
                }
            },
            "MobileVersionControl": {
                "enabled": true,
                "parameters": {}
            },
            "MobileGeariOS": {
                "enabled": true,
                "parameters": {}
            },
            "MobileGearAndroid": {
                "enabled": true,
                "parameters": {}
            },
            "MobileGear": {
                "enabled": true,
                "parameters": {}
            },
            "MobileClients": {
                "enabled": true,
                "parameters": {}
            },
            "PSNLiveTiles": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyExplorer": {
                "enabled": true,
                "parameters": {}
            },
            "Grimoire": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyAdvisorTrials": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyAdvisorArmsDay": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyAdvisorNightfall": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyAdvisorHeroicStrike": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyAdvisorBonds": {
                "enabled": true,
                "parameters": {}
            },
            "GetAdvisorsForOtherUsers": {
                "enabled": false,
                "parameters": {}
            },
            "DestinyAdvisors": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyVendors": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyCharacterSummary": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyCharacterInventorySummary": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyCharacters": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyTalentNodes": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyAccountSummary": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyAccounts": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyItems": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyTriumphs": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyVaultSummary": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyVault": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyAllItemsSummary": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyReadActions": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyEquipItem": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyTransferItem": {
                "enabled": true,
                "parameters": {}
            },
            "DestinySetItemLockState": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyBuyItem": {
                "enabled": false,
                "parameters": {}
            },
            "DestinyRefund": {
                "enabled": false,
                "parameters": {}
            },
            "DestinySetQuestTrackedState": {
                "enabled": true,
                "parameters": {
                    "MaxTrackedQuests": "4"
                }
            },
            "DestinyWriteActions": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyClans": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyQuests": {
                "enabled": true,
                "parameters": {}
            },
            "LeaderboardLiveTile": {
                "enabled": true,
                "parameters": {}
            },
            "DestinyDrivenLiveTiles": {
                "enabled": true,
                "parameters": {}
            },
            "BungieTokens": {
                "enabled": true,
                "parameters": {}
            },
            "Destiny": {
                "enabled": true,
                "parameters": {}
            },
            "AccountCreation": {
                "enabled": true,
                "parameters": {}
            },
            "PSNAuth": {
                "enabled": true,
                "parameters": {}
            },
            "MsaXbox": {
                "enabled": true,
                "parameters": {}
            },
            "XuidAuth": {
                "enabled": true,
                "parameters": {}
            },
            "WLIDAuth": {
                "enabled": false,
                "parameters": {}
            },
            "GoogleAuth": {
                "enabled": false,
                "parameters": {}
            },
            "FacebookAuth": {
                "enabled": false,
                "parameters": {}
            },
            "Authentication": {
                "enabled": true,
                "parameters": {}
            },
            "Profiles": {
                "enabled": true,
                "parameters": {}
            },
            "Careers": {
                "enabled": true,
                "parameters": {}
            },
            "Content": {
                "enabled": true,
                "parameters": {}
            },
            "Activities": {
                "enabled": true,
                "parameters": {}
            },
            "FriendsXboxLive": {
                "enabled": true,
                "parameters": {}
            },
            "FriendsPSN": {
                "enabled": true,
                "parameters": {}
            },
            "FriendsFacebook": {
                "enabled": false,
                "parameters": {}
            },
            "ForumsWrite": {
                "enabled": true,
                "parameters": {}
            },
            "Forums": {
                "enabled": true,
                "parameters": {}
            },
            "Clans": {
                "enabled": true,
                "parameters": {}
            },
            "Groups": {
                "enabled": true,
                "parameters": {}
            },
            "Ignores": {
                "enabled": true,
                "parameters": {}
            },
            "Messages": {
                "enabled": true,
                "parameters": {}
            },
            "Notifications": {
                "enabled": true,
                "parameters": {}
            },
            "ForceHttps": {
                "enabled": true,
                "parameters": {}
            },
            "StaticHostEnabled": {
                "enabled": false,
                "parameters": {
                    "StaticHost": "www.bungie.net"
                }
            },
            "UserStatus": {
                "enabled": true,
                "parameters": {
                    "CharacterLimit": "40"
                }
            },
            "Pagination": {
                "enabled": true,
                "parameters": {
                    "UserSearchMaxPageSize": "50",
                    "FollowersMaxPageSize": "50",
                    "ContentMaxPageSize": "50",
                    "GroupMemberMaxPageSize": "50",
                    "GroupMaxPageSize": "50",
                    "FriendMaxPageSize": "25",
                    "ConversationMaxPageSize": "20"
                }
            },
            "GlobalMasterControl": {
                "enabled": true,
                "parameters": {}
            }
        }
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {}
}
```

## References
