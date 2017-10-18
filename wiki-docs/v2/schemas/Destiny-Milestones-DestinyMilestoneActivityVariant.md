<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents custom data that we know about an individual variant of an activity.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
activityHash | [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32 | The hash for the specific variant of the activity related to this milestone.You can pull more detailed static info from the DestinyActivityDefinition, such as difficulty level.
completionStatus | [[DestinyMilestoneActivityCompletionStatus|Destiny-Milestones-DestinyMilestoneActivityCompletionStatus]] | An OPTIONAL component: if it makes sense to talk about this activity variant in terms ofwhether or not it has been completed or what progress you have made in it, this will be returned.Otherwise, this will be NULL.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:integer:uint32
    "activityHash": 0,
    // Type: [[DestinyMilestoneActivityCompletionStatus|Destiny-Milestones-DestinyMilestoneActivityCompletionStatus]]
    "completionStatus": {
        // Type: boolean
        "completed": false,
        // Type: [[DestinyMilestoneActivityPhase|Destiny-Milestones-DestinyMilestoneActivityPhase]][]
        "phases": [
           // Type: [[DestinyMilestoneActivityPhase|Destiny-Milestones-DestinyMilestoneActivityPhase]]
            {
                // Type: boolean
                "complete": false
            }
        ]
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyMilestoneActivityVariant.html#schema_Destiny-Milestones-DestinyMilestoneActivityVariant
