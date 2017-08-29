<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of Destiny memberships given a full Gamertag or PSN ID.

* **URI:** [[/Destiny2/SearchDestinyPlayer/{membershipType}/{displayName}/|https://bungie.net/Platform/Destiny2/SearchDestinyPlayer/{membershipType}/{displayName}/]]
* **Basepath:** https://bungie.net/Platform
* **Method:** GET
* **Service:** [[Destiny2|Endpoints#Destiny2]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
displayName | string | Yes | The full gamertag or PSN id of the player. Spaces and case are ignored.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | A valid non-BungieNet membership type, or All.

### Query String Parameters
None

## Example
### Request
GET https://bungie.net/Platform/Destiny2/SearchDestinyPlayer/{membershipType}/{displayName}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[UserInfoCard|User-UserInfoCard]][]
    "Response": [
       // Type: [[UserInfoCard|User-UserInfoCard]]
        {
            // Type: string
            "supplementalDisplayName": "",
            // Type: string
            "iconPath": "",
            // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
            "membershipType": 0,
            // Type: integer:int64
            "membershipId": 0,
            // Type: string
            "displayName": ""
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
1. https://bungie-net.github.io/multi/operation_get_Destiny2-SearchDestinyPlayer.html#operation_get_Destiny2-SearchDestinyPlayer
