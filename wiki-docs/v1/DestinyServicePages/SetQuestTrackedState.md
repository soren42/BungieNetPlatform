<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Set the track state of a given quest.
* **URI:** [[/Destiny/SetQuestTrackedState/|https://www.bungie.net/Platform/Destiny/SetQuestTrackedState/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
Name | Description
---- | -----------
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.
membershipId | A valid membership ID.
characterId | A valid characterId that is associated with the given account.
itemId | The unique item hash of the quest item.
state | true = tracked, false = not-tracked

## Example
POST https://www.bungie.net/Platform/Destiny/SetQuestTrackedState/
```javascript
{
    "membershipType": "2",
    "membershipId": "4611686018428939884",
    "characterId": "2305843009221011538",
    "itemId": "6917529057237444288",
    "state": "true"
}
```
 ```javascript
{
    "Response": 0,
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {

    }
}
```

## References
