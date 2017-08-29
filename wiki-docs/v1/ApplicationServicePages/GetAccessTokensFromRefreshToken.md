<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

* **URI:** [[/App/GetAccessTokensFromRefreshToken/|https://www.bungie.net/Platform/App/GetAccessTokensFromRefreshToken/]]
* **Method:** POST
* **Accessibility:** Public
* **Service:** [[ApplicationService|Endpoints#ApplicationService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
None

## Example
### Request
```javascript
POST https://www.bungie.net/Platform/App/GetAccessTokensFromRefreshToken/
X-API-Key: {your-api-key}
{"refreshToken":"{your-refresh-token}"}
```

### Response
```javascript
{
    "Response": {
        "accessToken": {
            "value": "{your-access-token}",
            "readyin": 0,
            "expires": 3600
        },
        "refreshToken": {
            "value": "{your-refresh-token}",
            "readyin": 1800,
            "expires": 7776000
        },
        "scope": 225
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {}
}
```

### Response (If run within 30 minutes of generating the Refresh Token)
```javascript
{
    "ErrorCode": 2110,
    "ThrottleSeconds": 0,
    "ErrorStatus": "RefreshTokenNotYetValid",
    "Message": "The provided refresh token is not yet valid.",
    "MessageData": {}
}
```

## References
https://www.bungie.net/en/Help/Article/45481