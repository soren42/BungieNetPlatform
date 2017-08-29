<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Unfollow a given tag.
* **URI:** [[/Activity/Tag/Unfollow/|https://www.bungie.net/Platform/Activity/Tag/Unfollow/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[ActivityService|Endpoints#ActivityService]]

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Description
---- | -----------
tag | A hashtag.

### JSON POST Parameters
None

## Example
POST https://www.bungie.net/Platform/Activity/Tag/Unfollow/?tag=%230OffTopic
 ```javascript
{
  "Response": {
      "tagText": "#Offtopic"
  },
  "ErrorCode": 1,
  "ThrottleSeconds": 0,
  "ErrorStatus": "Success",
  "Message": "Ok",
  "MessageData": {
 
  }
}
```

## References
