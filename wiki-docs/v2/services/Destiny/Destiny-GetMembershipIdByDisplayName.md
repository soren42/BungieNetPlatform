<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns the numerical id of a player based on their display name, zero if not found.

* **URI:** [[/Destiny/{membershipType}/Stats/GetMembershipIdByDisplayName/{displayName}/|https://bungie.net/d1/Platform/Destiny/{membershipType}/Stats/GetMembershipIdByDisplayName/{displayName}/]]
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
displayName | string | Yes | A valid PSN Id or Gamertag display name.

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
ignorecase | boolean | No | Default is false when not specified. True to cause a caseless search to be used.

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/{membershipType}/Stats/GetMembershipIdByDisplayName/{displayName}/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetMembershipIdByDisplayName]
    "Response": null,
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
