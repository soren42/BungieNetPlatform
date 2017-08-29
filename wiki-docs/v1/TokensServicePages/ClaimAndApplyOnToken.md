<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

* **URI:** [[/Tokens/ClaimAndApplyToken/{tokenType}/|https://www.bungie.net/Platform/Tokens/ClaimAndApplyToken/{tokenType}/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[TokensService|Endpoints#TokensService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
tokenType | Default is 0.

### Query String Parameters
None

### JSON POST Parameters
Name | Description
---- | -----------
redeemCode | 

## Example
POST https://www.bungie.net/Platform/Tokens/ClaimAndApplyToken/0/

Request Payload (as a string): X4C-FGX-MX3
```javascript
{
    "Response": {
        "OfferKey": "r1_collectors_edition.code2",
        "OfferDisplayName": "Emblem: Note of Conquest",
        "OfferDisplayDetail": "Pick up your emblem at the Special Orders Vendor in the Tower.",
        "OfferImagePath": "/img/theme/destiny/icons/icon_glimmer.jpg",
        "OfferPurchaseDate": "2015-06-25T23:59:51.16Z",
        "OfferQuantity": 1,
        "ConsumableQuantity": 0,
        "RedeemType": 1
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {}
}
```

## References
