<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Represents this player's personal completion status for the Activity under a Milestone, if theactivity has trackable completion and progress information. (most activities won't, or the conceptwon't apply.  For instance, it makes sense to talk about a tier of a raid as being Completed or havingprogress, but it doesn't make sense to talk about a Crucible Playlist in those terms.

## Schema
* **Type:** Class

## Properties
Name | Type | Description
---- | ---- | -----------
completed | boolean | If the activity has been &quot;completed&quot;, that information will be returned here.
phases | [[DestinyMilestoneActivityPhase|Destiny-Milestones-DestinyMilestoneActivityPhase]][] | If the Activity has discrete &quot;phases&quot; that we can track, that info will be here.  Otherwise,this value will be NULL.Note that this is a list and not a dictionary: the order implies the ascending order of phasesor progression in this activity.

## Example
```javascript
{
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

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Milestones-DestinyMilestoneActivityCompletionStatus.html#schema_Destiny-Milestones-DestinyMilestoneActivityCompletionStatus
