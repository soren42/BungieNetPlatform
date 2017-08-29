<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of currently active events.
* **URI:** [[/Destiny/Events/|https://www.bungie.net/Platform/Destiny/Events/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Events/
```javascript
{
    "Response": {
        "data": {
            "events": [
                {
                    "eventHash": 4,
                    "eventIdentifier": "SPECIAL_EVENT_SALVAGE",
                    "expirationDate": "2015-05-26T17:00:00Z",
                    "startDate": "2015-05-19T17:00:00Z",
                    "expirationKnown": true
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
