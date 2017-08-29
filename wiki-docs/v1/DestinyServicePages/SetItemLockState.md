<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Changes the lock state on an equipable item.
* **URI:** [[/Destiny/SetLockState/|https://www.bungie.net/Platform/Destiny/SetLockState/]]
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
itemId | A valid instanceId of an item to lock/unlock.
characterId | A valid characterId that is associated with the given account.
state | The item lock state, true to lock, false to unlock.

## Example
POST https://www.bungie.net/platform/Destiny/SetLockState/
```javascript
{
    "membershipType": "2",
    "characterId": "2305843009292996472",
    "itemId": "6917529046752863891",
    "state": true
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
