<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Acknowledges that the user has viewed a given notification, (ie new Grimoire Card)
* **URI:** [[/User/Acknowledged/{ackId}/|https://www.bungie.net/Platform/User/Acknowledged/{ackId}/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[UserService|Endpoints#UserService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
ackId | The acknowledge id of a given item.

### Query String Parameters
None

### JSON POST Parameters
None

## Example
POST https://www.bungie.net/Platform/User/Acknowledged/1_68803000/

This will acknowledge that the "Wanted: Skoriks, Archon-Slayer" Grimoire Card has been viewed.
```javascript
{
    "Response": true,
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {

    }
}
```

## References
