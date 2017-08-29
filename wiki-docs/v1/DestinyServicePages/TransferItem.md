<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Moves items to and from a character and the vault.
* **URI:** [[/Destiny/TransferItem/|https://www.bungie.net/Platform/Destiny/TransferItem/]]
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
itemReferenceHash | The inventoryItemHash for an item.
itemId | The instanceId of an equipable item. Should be "0" otherwise.
stackSize | How many items to transfer. Should be "1" for equipable items.
characterId | A valid characterId that is associated with the given account.
transferToVault | Move the item to or from the vault; true or false

## Example
POST https://www.bungie.net/Platform/Destiny/TransferItem
```javascript
{
    "membershipType": 2,
    "itemReferenceHash": "2166567782",
    "itemId": "6917529050196876642",
    "stackSize": 1,
    "characterId": "2305843009234425075",
    "transferToVault": true
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
