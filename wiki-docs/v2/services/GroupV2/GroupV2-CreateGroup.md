<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Create a new group.

* **URI:** [[/GroupV2/Create/|https://www.bungie.net/Platform/GroupV2/Create/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** POST
* **Service:** [[GroupV2|Endpoints#GroupV2]]
* **Permissions:** BnetWrite
* **Officially Supported:** Yes

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
POST https://www.bungie.net/Platform/GroupV2/Create/
```javascript
{
    // Type: [[GroupType|GroupsV2-GroupType]]:Enum
    "groupType": {},
    // Type: string
    "name": "",
    // Type: string
    "about": "",
    // Type: string
    "motto": "",
    // Type: string
    "theme": "",
    // Type: integer:int32
    "avatarImageIndex": 0,
    // Type: string
    "tags": "",
    // Type: boolean
    "isPublic": false,
    // Type: [[MembershipOption|GroupsV2-MembershipOption]]:Enum
    "membershipOption": 0,
    // Type: boolean
    "isPublicTopicAdminOnly": false,
    // Type: boolean
    "isDefaultPostPublic": false,
    // Type: boolean
    "allowChat": false,
    // Type: boolean
    "isDefaultPostAlliance": false,
    // Type: [[ChatSecuritySetting|GroupsV2-ChatSecuritySetting]]:Enum
    "chatSecurity": 0,
    // Type: string
    "callsign": "",
    // Type: string
    "locale": "",
    // Type: [[GroupHomepage|GroupsV2-GroupHomepage]]:Enum
    "homepage": 0,
    // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
    "platformMembershipType": {},
    // Type: [[GroupAction|GroupsV2-GroupAction]]
}

```

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[GroupCreationResponse|GroupsV2-GroupCreationResponse]]
    "Response": {
        // Type: integer:int64
        "groupId": 0
    },
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
1. https://bungie-net.github.io/multi/operation_post_GroupV2-CreateGroup.html#operation_post_GroupV2-CreateGroup
