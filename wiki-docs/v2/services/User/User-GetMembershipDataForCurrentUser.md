<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.

* **URI:** [[/User/GetMembershipsForCurrentUser/|https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/]]
* **Basepath:** https://www.bungie.net/Platform
* **Method:** GET
* **Service:** [[User|Endpoints#User]]
* **Permissions:** ReadBasicUserProfile
* **Officially Supported:** Yes

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
GET https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[UserMembershipData|User-UserMembershipData]]
    "Response": {
        // Type: [[UserInfoCard|User-UserInfoCard]][]
        "destinyMemberships": [
           // Type: [[UserInfoCard|User-UserInfoCard]]
            {
                // Type: string
                "supplementalDisplayName": "",
                // Type: string
                "iconPath": "",
                // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
                "membershipType": {},
                // Type: integer:int64
                "membershipId": 0,
                // Type: string
                "displayName": ""
            }
        ],
        // Type: [[GeneralUser|User-GeneralUser]]
        "bungieNetUser": {
            // Type: integer:int64
            "membershipId": 0,
            // Type: string
            "uniqueName": "",
            // Type: string
            "normalizedName": "",
            // Type: string
            "displayName": "",
            // Type: integer:int32
            "profilePicture": 0,
            // Type: integer:int32
            "profileTheme": 0,
            // Type: integer:int32
            "userTitle": 0,
            // Type: integer:int64
            "successMessageFlags": 0,
            // Type: boolean
            "isDeleted": false,
            // Type: string
            "about": "",
            // Type: string:date-time:nullable
            "firstAccess": "",
            // Type: string:date-time:nullable
            "lastUpdate": "",
            // Type: integer:int64:nullable
            "legacyPortalUID": 0,
            // Type: [[UserToUserContext|User-UserToUserContext]]
            "context": {
                // Type: boolean
                "isFollowing": false,
                // Type: [[IgnoreResponse|Ignores-IgnoreResponse]]
                "ignoreStatus": {
                    // Type: boolean
                    "isIgnored": false,
                    // Type: [[IgnoreStatus|Ignores-IgnoreStatus]]:Enum
                    "ignoreFlags": 0
                },
                // Type: string:date-time:nullable
                "globalIgnoreEndDate": ""
            },
            // Type: string
            "psnDisplayName": "",
            // Type: string
            "xboxDisplayName": "",
            // Type: string
            "fbDisplayName": "",
            // Type: boolean:nullable
            "showActivity": false,
            // Type: string
            "locale": "",
            // Type: boolean
            "localeInheritDefault": false,
            // Type: integer:int64:nullable
            "lastBanReportId": 0,
            // Type: boolean
            "showGroupMessaging": false,
            // Type: string
            "profilePicturePath": "",
            // Type: string
            "profilePictureWidePath": "",
            // Type: string
            "profileThemeName": "",
            // Type: string
            "userTitleDisplay": "",
            // Type: string
            "statusText": "",
            // Type: string:date-time
            "statusDate": "",
            // Type: string:date-time:nullable
            "profileBanExpire": "",
            // Type: string
            "blizzardDisplayName": ""
        }
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
1. https://bungie-net.github.io/multi/operation_get_User-GetMembershipDataForCurrentUser.html#operation_get_User-GetMembershipDataForCurrentUser
