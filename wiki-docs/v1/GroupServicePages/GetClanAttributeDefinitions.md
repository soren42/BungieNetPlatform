<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns a list of supported Clan Attribute Definitions.
* **URI:** [[/Group/GetClanAttributeDefinitions/|https://www.bungie.net/Platform/Group/GetClanAttributeDefinitions/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Group/GetClanAttributeDefinitions/
 ```javascript
{
    "Response": [
        {
            "categoryId": 1,
            "key": "ClanAttributesCategory",
            "displayName": "Attributes",
            "attributes": [
                {
                    "attributeId": 1,
                    "key": "ClanAttributeCommitment",
                    "displayName": "Commitment",
                    "defaultMinimum": 0,
                    "defaultMaximum": 100,
                    "attributeType": 2,
                    "minimumLabel": "Recreational",
                    "maximumLabel": "Hardcore",
                    "tooltips": [],
                    "minimum": 0,
                    "maximum": 100,
                    "stepIncrement": 20,
                    "stepCount": 5
                },
                {
                    "attributeId": 2,
                    "key": "ClanAttributeSkill",
                    "displayName": "Skill Level",
                    "defaultMinimum": 0,
                    "defaultMaximum": 100,
                    "attributeType": 2,
                    "minimumLabel": "Newbie",
                    "maximumLabel": "Skilled",
                    "tooltips": [],
                    "minimum": 0,
                    "maximum": 100,
                    "stepIncrement": 20,
                    "stepCount": 5
                },
                {
                    "attributeId": 3,
                    "key": "ClanAttributeAge",
                    "displayName": "Age Level",
                    "defaultMinimum": 0,
                    "defaultMaximum": 100,
                    "attributeType": 2,
                    "minimumLabel": "Young",
                    "maximumLabel": "Old",
                    "tooltips": [],
                    "minimum": 0,
                    "maximum": 100,
                    "stepIncrement": 20,
                    "stepCount": 5
                }
            ]
        },
        {
            "categoryId": 2,
            "key": "ClanActivitiesCategory",
            "displayName": "Preferred Activities",
            "attributes": [
                {
                    "attributeId": 4,
                    "key": "ClanAttributeRaid",
                    "displayName": "Raids",
                    "defaultMinimum": 0,
                    "defaultMaximum": 0,
                    "attributeType": 1,
                    "minimumLabel": "Raids",
                    "maximumLabel": "",
                    "tooltips": [
                        "We never raid.",
                        "We raid on occasion.",
                        "We raid monthly.",
                        "We raid weekly.",
                        "We raid daily."
                    ],
                    "minimum": 0,
                    "maximum": 100,
                    "stepIncrement": 20,
                    "stepCount": 5
                },
                {
                    "attributeId": 5,
                    "key": "ClanAttributeFactionWars",
                    "displayName": "Faction Wars",
                    "defaultMinimum": 0,
                    "defaultMaximum": 0,
                    "attributeType": 1,
                    "minimumLabel": "Faction Wars",
                    "maximumLabel": "",
                    "tooltips": [
                        "We never play Faction Wars.",
                        "We play Faction Wars on occasion.",
                        "We play Faction Wars monthly.",
                        "We play Faction Wars weekly.",
                        "We play Faction Wars daily."
                    ],
                    "minimum": 0,
                    "maximum": 100,
                    "stepIncrement": 20,
                    "stepCount": 5
                },
                {
                    "attributeId": 6,
                    "key": "ClanAttributePatrols",
                    "displayName": "Patrols",
                    "defaultMinimum": 0,
                    "defaultMaximum": 0,
                    "attributeType": 1,
                    "minimumLabel": "Patrols",
                    "maximumLabel": "",
                    "tooltips": [
                        "We never do patrols.",
                        "We do patrols on occasion.",
                        "We do patrols monthly.",
                        "We do patrols weekly.",
                        "We do patrols daily."
                    ],
                    "minimum": 0,
                    "maximum": 100,
                    "stepIncrement": 20,
                    "stepCount": 5
                },
                {
                    "attributeId": 7,
                    "key": "ClanAttributeStory",
                    "displayName": "Story",
                    "defaultMinimum": 0,
                    "defaultMaximum": 0,
                    "attributeType": 1,
                    "minimumLabel": "Story",
                    "maximumLabel": "",
                    "tooltips": [
                        "We never do story missions.",
                        "We do story missions on occasion.",
                        "We do story missions monthly.",
                        "We do story missions weekly.",
                        "We do story missions daily."
                    ],
                    "minimum": 0,
                    "maximum": 100,
                    "stepIncrement": 20,
                    "stepCount": 5
                },
                {
                    "attributeId": 8,
                    "key": "ClanAttributeStrikes",
                    "displayName": "Strikes",
                    "defaultMinimum": 0,
                    "defaultMaximum": 0,
                    "attributeType": 1,
                    "minimumLabel": "Strikes",
                    "maximumLabel": "",
                    "tooltips": [
                        "We never do strikes.",
                        "We do strikes on occasion.",
                        "We do strikes monthly.",
                        "We do strikes weekly.",
                        "We do strikes daily."
                    ],
                    "minimum": 0,
                    "maximum": 100,
                    "stepIncrement": 20,
                    "stepCount": 5
                }
            ]
        }
    ],
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {}
}
```

## References
