<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Respond to an invitation message. 
* **URI:** [[/Message/Invitations/ReviewDirect/{invitationId}/{invitationResponseState}/|https://www.bungie.net/Platform/Message/Invitations/ReviewDirect/{invitationId}/{invitationResponseState}/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[MessageService|Endpoints#MessageService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
invitationId | A valid invitationId.
[[invitationResponseState|Enums#InvitationResponseState]] | How to respond to the invitation.

### Query String Parameters
None

### JSON POST Parameters
None

## Example
POST https://www.bungie.net/Platform/Message/Invitations/ReviewDirect/9101845/1/
 ```javascript
{
    "Response": {
        "invitationId":"9101845",
        "invitationType":5,
        "dateCreated":"2016-02-05T04:13:42.596Z",
        "dateResolved":"2016-02-05T04:19:02.97Z",
        "expireDate":"2016-02-15T04:13:42.791Z",
        "membershipIdCreated":"6294617",
        "membershipIdResolved":"5197148",
        "requestingObjectId":"6294617",
        "resolutionStatus":1,
        "targetObjectId":"177526",
        "targetState":2,
        "requestMessage":"{user} wants to join {clanName}'s PlayStation Network Clan.",
        "responseMessage":"This invitation was approved.",
        "isExpired":false
    },
    "ErrorCode":1,
    "ThrottleSeconds":0,
    "ErrorStatus":"Success",
    "Message":"Ok",
    "MessageData":{}
}
```

## References
1. https://www.bungie.net/Scripts/bungienet/clans/clans.min.js
