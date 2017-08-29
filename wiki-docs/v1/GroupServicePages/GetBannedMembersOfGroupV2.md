<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of members for a group that the current user is an admin for.
* **URI:** [[/Group/{groupId}/BannedV2/|https://www.bungie.net/Platform/Group/{groupId}/BannedV2/]]
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
itemsPerPage | Items per page. Default is 10.
currentPage | The current page to return. Starts at 1.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Group/177526/BannedV2/
 ```javascript
{
    "Response": {
        "results": [],
        "totalResults": "0",
        "hasMore": false,
        "query": {
            "groupId": "177526",
            "memberType": -1,
            "platformType": 0,
            "sort": 0,
            "nameSearch": "",
            "itemsPerPage": 50,
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
