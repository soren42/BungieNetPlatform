<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of available themes the user can set on their profile.
* **URI:** [[/User/GetAvailableThemes/|https://www.bungie.net/Platform/User/GetAvailableThemes/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[UserService|Endpoints#UserService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/User/GetAvailableThemes/
 ```javascript
{
    "Response": [
        {
            "userThemeId": 54,
            "userThemeName": "septagon",
            "userThemeDescription": "septagon"
        },
        {
            "userThemeId": 66,
            "userThemeName": "Destiny1",
            "userThemeDescription": "Destiny1"
        },
        {
            "userThemeId": 67,
            "userThemeName": "Destiny2",
            "userThemeDescription": "Destiny2"
        }
    ],
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {

    }
}
```

## References
1. http://www.bungie.net/platform/user/help/HelpDetail/GET?uri=GetAvailableThemes%2f
