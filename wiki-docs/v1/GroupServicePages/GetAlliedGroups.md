<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a paged list of groups allied with a given group.
* **URI:** [[/Group/{groupId}/Allies/|https://www.bungie.net/Platform/Group/{groupId}/Allies/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.

### Query String Parameters
Name | Description
---- | -----------
currentpage | The current page to return. Starts at 1.
populatefriends | 

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Group/177526/Allies/
 ```javascript
{
    "Response": {
        "founders": [],
        "relatedGroups": [],
        "results": [],
        "totalResults": "0",
        "hasMore": false,
        "query": {
            "itemsPerPage": 10,
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
