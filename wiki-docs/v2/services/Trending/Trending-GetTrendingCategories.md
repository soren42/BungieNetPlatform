<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns trending items for Bungie.net, collapsed into the first page of items per category.  For pagination within a category, call GetTrendingCategory.

* **URI:** [[/Trending/Categories/|https://bungie.net/Platform/Trending/Categories/]]
* **Basepath:** https://bungie.net/Platform
* **Method:** GET
* **Service:** [[Trending|Endpoints#Trending]]
* **Permissions:** None
* **Officially Supported:** Yes

## Parameters
### Path Parameters
None

### Query String Parameters
None

## Example
### Request
GET https://bungie.net/Platform/Trending/Categories/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[TrendingCategories|Trending-TrendingCategories]]
    "Response": {
        // Type: [[TrendingCategory|Trending-TrendingCategory]][]
        "categories": [
           // Type: [[TrendingCategory|Trending-TrendingCategory]]
            {
                // Type: string
                "categoryName": "",
                // Type: [[SearchResultOfTrendingEntry|SearchResultOfTrendingEntry]]
                "entries": {
                    // Type: [[TrendingEntry|Trending-TrendingEntry]][]
                    "results": [
                       // Type: [[TrendingEntry|Trending-TrendingEntry]]
                        {
                            // Type: number:double
                            "weight": 0,
                            // Type: boolean
                            "isFeatured": false,
                            // Type: string
                            "identifier": "",
                            // Type: [[TrendingEntryType|Trending-TrendingEntryType]]:Enum
                            "entityType": 0,
                            // Type: string
                            "displayName": "",
                            // Type: string
                            "tagline": "",
                            // Type: string
                            "image": "",
                            // Type: string:date-time:nullable
                            "startDate": "",
                            // Type: string:date-time:nullable
                            "endDate": "",
                            // Type: string
                            "link": "",
                            // Type: string
                            "webmVideo": "",
                            // Type: string
                            "mp4Video": "",
                            // Type: string
                            "featureImage": ""
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
                // Type: string
                "categoryId": ""
            }
        ]
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
1. https://bungie-net.github.io/multi/operation_get_Trending-GetTrendingCategories.html#operation_get_Trending-GetTrendingCategories
