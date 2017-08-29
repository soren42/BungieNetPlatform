<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Get a paged list of pending members for a given group.
* **URI:** [[/Group/{groupId}/Members/PendingV2/|https://www.bungie.net/Platform/Group/{groupId}/Members/PendingV2/]]
* **Method:** GET
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
groupId | A valid groupId.

### Query String Parameters
Name | Description
---- | -----------
currentPage | The current page to return. Starts at 1.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Group/39966/Members/PendingV2/
 ```javascript
{
    "Response": {
        "results": [],
        "totalResults": "0",
        "hasMore": false,
        "query": {
            "itemsPerPage": 10,
            "currentPage": 1
        },
        "useTotalResults": true
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {}
}
```

## References
