<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Equips an item from a character's inventory. The endpoint will fail if the character is logged in and doing an activity.
* **URI:** [[/Destiny/EquipItem/|https://www.bungie.net/Platform/Destiny/EquipItem/]]
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
itemId | The instanceId of an equipable item.
characterId | A valid characterId that is associated with the given account.

## Example
POST https://www.bungie.net/Platform/Destiny/EquipItem
```javascript
{
    "membershipType": 2,
    "itemId": "6917529044280138738",
    "characterId": "2305843009234425075"
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
