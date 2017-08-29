<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of triumph sets for a given account.
* **URI:** [[/Destiny/{membershipType}/Account/{destinyMembershipId}/Triumphs/|https://www.bungie.net/Platform/Destiny/{membershipType}/Account/{destinyMembershipId}/Triumphs/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.
destinyMembershipId | A valid destinyMembershipId.

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/2/Account/4611686018428939884/Triumphs/
```javascript
{
    "Response": {
        "data": {
            "triumphSets": [
                {
                    "triumphSetHash": 1,
                    "triumphs": [
                        {
                            "complete": true,
                            "progress": 20,
                            "actual": 20
                        },
                        {
                            "complete": true,
                            "progress": 0,
                            "actual": 0
                        },
                        {
                            "complete": true,
                            "progress": 0,
                            "actual": 0
                        },
                        {
                            "complete": true,
                            "progress": 0,
                            "actual": 0
                        },
                        {
                            "complete": true,
                            "progress": 0,
                            "actual": 0
                        },
                        {
                            "complete": true,
                            "progress": 0,
                            "actual": 0
                        },
                        {
                            "complete": true,
                            "progress": 0,
                            "actual": 0
                        },
                        {
                            "complete": true,
                            "progress": 50,
                            "actual": 548
                        },
                        {
                            "complete": true,
                            "progress": 100,
                            "actual": 5895
                        },
                        {
                            "complete": true,
                            "progress": 20,
                            "actual": 20
                        }
                    ]
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
