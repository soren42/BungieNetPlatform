<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Gets the Live Streaming status of a particular Account and Membership Type.

* **URI:** [[/CommunityContent/Live/Users/{partnershipType}/{membershipType}/{membershipId}/|https://bungie.net/Platform/CommunityContent/Live/Users/{partnershipType}/{membershipType}/{membershipId}/]]
* **Basepath:** https://bungie.net/Platform
* **Method:** GET
* **Service:** [[CommunityContent|Endpoints#CommunityContent]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
membershipId | integer:int64 | Yes | The membershipId related to that type.
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | The type of account for which info will be extracted.
partnershipType | [[PartnershipType|Partnerships-PartnershipType]]:Enum | Yes | The type of partnership for which info will be extracted.

### Query String Parameters
None

## Example
### Request
GET https://bungie.net/Platform/CommunityContent/Live/Users/{partnershipType}/{membershipType}/{membershipId}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[CommunityLiveStatus|Community-CommunityLiveStatus]]
    "Response": {
        // Type: string:date-time
        "dateStatusUpdated": "",
        // Type: string
        "url": "",
        // Type: string
        "partnershipIdentifier": "",
        // Type: [[PartnershipType|Partnerships-PartnershipType]]:Enum
        "partnershipType": 0,
        // Type: string
        "thumbnail": "",
        // Type: string
        "thumbnailSmall": "",
        // Type: string
        "thumbnailLarge": "",
        // Type: integer:int64
        "destinyCharacterId": 0,
        // Type: [[UserInfoCard|User-UserInfoCard]]
        "userInfo": {
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
        },
        // Type: integer:uint32
        "currentActivityHash": 0,
        // Type: string:date-time
        "dateLastPlayed": "",
        // Type: string:date-time
        "dateStreamStarted": "",
        // Type: string
        "locale": "",
        // Type: integer:int32
        "currentViewers": 0,
        // Type: integer:int32
        "followers": 0,
        // Type: integer:int32
        "overallViewers": 0,
        // Type: boolean
        "isFeatured": false,
        // Type: string
        "title": "",
        // Type: integer:uint32
        "activityModeHash": 0,
        // Type: string:date-time:nullable
        "dateFeatured": "",
        // Type: number:float
        "trendingValue": 0,
        // Type: boolean
        "isSubscribable": false
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
1. https://bungie-net.github.io/multi/operation_get_CommunityContent-GetStreamingStatusForMember.html#operation_get_CommunityContent-GetStreamingStatusForMember
