<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns Destiny excellence badges for a given account. No longer in use.
* **URI:** [[/Destiny/Stats/GetExcellenceBadges/{membershipType}/{destinyMembershipId}/|https://www.bungie.net/Platform/Destiny/Stats/GetExcellenceBadges/{membershipType}/{destinyMembershipId}/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
Name | Description
---- | -----------
[[membershipType|Enums#BungieMembershipType]] | A valid Bungie.net membershipType.
destinyMembershipId | A valid destinyMembershipId.

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Stats/GetExcellenceBadges/2/4611686018428939884/?definitions=true
```javascript
{
    "Response": {
        "data": {
            "badges": [
                {
                    "badgeHashId": 10,
                    "ackState": {
                        "needsAck": true,
                        "ackId": "4_10"
                    }
                },
                {
                    "badgeHashId": 11,
                    "ackState": {
                        "needsAck": true,
                        "ackId": "4_11"
                    }
                }
            ]
        },
        "definitions": {
            "badges": {
                "10": {
                    "badgeHashId": 10,
                    "badgeName": "Queen's Wrath Badge",
                    "badgeDescription": "Gain rank 1 of the Queen's Reputation.",
                    "tier": 1,
                    "largeImageUrl": "\/img\/theme\/destiny\/icons\/profilebadges\/queen_tier1.png",
                    "smallImageUrl": "\/img\/theme\/destiny\/icons\/profilebadges\/queen_small_tier1.png"
                },
                "11": {
                    "badgeHashId": 11,
                    "badgeName": "Queen's Wrath Badge",
                    "badgeDescription": "Gain rank 2 of the Queen's Reputation.",
                    "tier": 2,
                    "largeImageUrl": "\/img\/theme\/destiny\/icons\/profilebadges\/queen_tier2.png",
                    "smallImageUrl": "\/img\/theme\/destiny\/icons\/profilebadges\/queen_small_tier2.png"
                }
            }
        }
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
1. https://www.bungie.net/en/Clan/Post/39966/118496335/0/0/1
