<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

* **URI:** [[/Destiny/{membershipType}/MyAccount/Character/{characterId}/Vendors/|https://www.bungie.net/Platform/Destiny/{membershipType}/MyAccount/Character/{characterId}/Vendors/]]
* **Method:** GET
* **Accessibility:** 
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.
characterId | A valid characterId that is associated with the given account.

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/2/MyAccount/Character/2305843009221011538/Vendors/Summaries/
```javascript
{
    "Response": {
        "data": {
            "vendors": [
                {
                    "vendorHash": 134701236,
                    "ackState": {
                        "needsAck": false,
                        "ackId": ""
                    },
                    "nextRefreshDate": "2015-05-26T08:00:00Z",
                    "enabled": true
                }
            ]
        }
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {

    }
}
```

## References
