<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets groups recommended for you based on the groups to whom those you follow belong.

* **URI:** [[/GroupV2/Recommended/{groupType}/{createDateRange}/|https://www.bungie.net/Platform/GroupV2/Recommended/{groupType}/{createDateRange}/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** ReadGroups
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
createDateRange | [[GroupDateRange|GroupsV2-GroupDateRange]]:Enum | Yes | The date range of activity of groups for which we should search. Is that proper grammar I don't know
groupType | [[GroupType|GroupsV2-GroupType]]:Enum | Yes | The type of group to get.

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/GroupV2/Recommended/{groupType}/{createDateRange}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[GroupV2Card|GroupsV2-GroupV2Card]][]
    "Response": [
       // Type: [[GroupV2Card|GroupsV2-GroupV2Card]]
        {
            // Type: integer:int64
            "groupId": 0,
            // Type: string
            "name": "",
            // Type: [[GroupType|GroupsV2-GroupType]]:Enum
            "groupType": 0,
            // Type: string:date-time
            "creationDate": "",
            // Type: string
            "about": "",
            // Type: string
            "motto": "",
            // Type: integer:int32
            "memberCount": 0,
            // Type: string
            "locale": "",
            // Type: [[MembershipOption|GroupsV2-MembershipOption]]:Enum
            "membershipOption": 0,
            // Type: [[Capabilities|GroupsV2-Capabilities]]:Enum
            "capabilities": 0,
            // Type: [[GroupV2ClanInfo|GroupsV2-GroupV2ClanInfo]]
            "clanInfo": {
                // Type: string
                "clanCallsign": "",
                // Type: [[ClanBanner|GroupsV2-ClanBanner]]
                "clanBannerData": {
                    // Type: integer:uint32
                    "decalId": 0,
                    // Type: integer:uint32
                    "decalColorId": 0,
                    // Type: integer:uint32
                    "decalBackgroundColorId": 0,
                    // Type: integer:uint32
                    "gonfalonId": 0,
                    // Type: integer:uint32
                    "gonfalonColorId": 0,
                    // Type: integer:uint32
                    "gonfalonDetailId": 0,
                    // Type: integer:uint32
                    "gonfalonDetailColorId": 0
                }
            },
            // Type: string
            "avatarPath": "",
            // Type: string
            "theme": ""
        }
    ],
    // Type: [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum
    "ErrorCode": 0,
    // Type: integer:int32
    "ThrottleSeconds": 0,
    // Type: string
    "ErrorStatus": "",
    // Type: string
    "Message": "",
    // Type: Dictionary&lt;string,string&gt;
    "MessageData": {
        "{string}": ""
    },
    // Type: object
}

```

## References
1. https://bungie-net.github.io/multi/operation_post_GroupV2-GetRecommendedGroups.html#operation_post_GroupV2-GetRecommendedGroups
