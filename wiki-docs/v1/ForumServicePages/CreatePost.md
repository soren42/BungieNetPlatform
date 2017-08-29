<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Creates a forum post.
* **URI:** [[/Forum/CreatePost/|https://www.bungie.net/Platform/Forum/CreatePost/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[ForumService|Endpoints#ForumService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
Name | Description
---- | -----------
body | The body of the post.
[[category|Enums#ForumPostCategory]] | The forum post category.
groupId | A valid groupId.
isGroupPrivate | true or false
metadata | 
parentPostId | A valid parentPostId.
subTopicOverride | true or false
subject | The subject of the post.
urlLinkOrImage | 

## Example
POST https://www.bungie.net/Platform/Forum/CreatePost/
```javascript
{
    "parentPostId":"122410116",
    "subTopicOverride":false,
    "subject":"",
    "body":"{postBody}",
    "category":0,
    "groupId":39966,
    "isGroupPrivate":null,
    "urlLinkOrImage":"",
    "metadata":""
}
```
 ```javascript
{
    "Response": {
        "postId":"126596110",
        "parentPostId":"122410116",
        "topicId":"122410116",
        "threadDepth":2,
        "category":1,
        "authorMembershipId":"5197148",
        "body":"{postBody}",
        "urlLinkOrImage":"",
        "creationDate":"2015-06-02T06:47:46.062Z",
        "lastModified":"0001-01-01T00:00:00Z",
        "editCount":0,
        "replyCount":0,
        "topicReplyCount":0,
        "ratingCount":1,
        "rating":53,
        "upvotes":1,
        "downvotes":0,
        "ratingScore":1,
        "groupOwnerId":"39966",
        "isGroupPrivate":false,
        "flags":0,
        "lockedForReplies":false,
        "parentAuthorId":"68974",
        "topicAuthorId":"68974",
        "isTopicBanned":false,
        "actualParentPostId":"122410116",
        "playerSupportFlags":0,
        "pinned":0,
        "IsPinned":false,
        "popularity":1,
        "isActive":false,
        "isAnnouncement":false,
        "userRating":100,
        "userHasRated":true,
        "userHasMutedPost":false,
        "latestReplyPostId":"0",
        "latestReplyAuthorId":"0",
        "ignoreStatus": {
            "isIgnored":false,
            "ignoreFlags":0
        }
    },
    "ErrorCode":1,
    "ThrottleSeconds":0,
    "ErrorStatus":"Success",
    "Message":"Ok",
    "MessageData":{

    }
}
```

## References
