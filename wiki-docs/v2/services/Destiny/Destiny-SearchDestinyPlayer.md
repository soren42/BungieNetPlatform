<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of players by username and platform.

* **URI:** [[/Destiny/SearchDestinyPlayer/{membershipType}/{displayName}/|https://bungie.net/d1/Platform/Destiny/SearchDestinyPlayer/{membershipType}/{displayName}/]]
* **Basepath:** https://bungie.net/d1/Platform
* **Method:** GET
* **Service:** [[Destiny|Endpoints#Destiny]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
membershipType | [[BungieMembershipType|BungieMembershipType]]:Enum | Yes | The type of account for which info will be extracted.
displayName | string | Yes | A valid display name to search for.

### Query String Parameters
None

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/SearchDestinyPlayer/{membershipType}/{displayName}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [[SearchDestinyPlayer|Destiny-SearchDestinyPlayer]]
    "Response": [
       // Type: [[UserInfoCard|User-UserInfoCard]]
        {
            // Type: string
            "supplementalDisplayName": "",
            // Type: string
            "iconPath": "",
            // Type: [[BungieMembershipType|BungieMembershipType]]:Enum
            "membershipType": {},
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
