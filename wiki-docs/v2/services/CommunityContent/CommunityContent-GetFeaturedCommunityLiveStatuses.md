<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns info about Featured live streams.

* **URI:** [[/CommunityContent/Live/Featured/{partnershipType}/{sort}/{page}/|https://bungie.net/Platform/CommunityContent/Live/Featured/{partnershipType}/{sort}/{page}/]]
* **Basepath:** https://bungie.net/Platform
* **Method:** GET
* **Service:** [[CommunityContent|Endpoints#CommunityContent]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
page | integer:int32 | Yes | Zero based page.
partnershipType | [[PartnershipType|Partnerships-PartnershipType]]:Enum | Yes | The type of partnership for which the status should be returned.
sort | [[CommunityStatusSort|Community-CommunityStatusSort]]:Enum | Yes | The sort mode.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
streamLocale | string | No | The locale for streams you'd like to see.  Don't pass this to fall back on your BNet locale.  Pass 'ALL' to not filter by locale.

## Example
### Request
GET https://bungie.net/Platform/CommunityContent/Live/Featured/{partnershipType}/{sort}/{page}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[SearchResultOfCommunityLiveStatus|SearchResultOfCommunityLiveStatus]]
    "Response": {
        // Type: [[CommunityLiveStatus|Community-CommunityLiveStatus]][]
        "results": [
           // Type: [[CommunityLiveStatus|Community-CommunityLiveStatus]]
            {
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
            }
        ],
        // Type: integer:int32
        "totalResults": 0,
        // Type: boolean
        "hasMore": false,
        // Type: [[PagedQuery|Queries-PagedQuery]]
        "query": {
            // Type: integer:int32
            "itemsPerPage": 0,
            // Type: integer:int32
            "currentPage": 0,
            // Type: string
            "requestContinuationToken": ""
        },
        // Type: string
        "replacementContinuationToken": "",
        // Type: boolean
        "useTotalResults": false
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
1. https://bungie-net.github.io/multi/operation_get_CommunityContent-GetFeaturedCommunityLiveStatuses.html#operation_get_CommunityContent-GetFeaturedCommunityLiveStatuses
