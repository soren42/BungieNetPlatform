<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The type of milestone. Milestones can be Tutorials, one-time/triggered/non-repeating but not necessarily tutorials, or Repeating Milestones.

## Schema
* **Schema Type:** Enum
* **Type:** integer
* **Format:** int32

## Enum Values
Identifier | Value | Description
---------- | ----- | -----------
Unknown | 0 | 
Tutorial | 1 | One-time milestones that are specifically oriented toward teaching players about new mechanics and gameplay modes.
OneTime | 2 | Milestones that, once completed a single time, can never be repeated.
Weekly | 3 | Milestones that repeat/reset on a weekly basis. They need not all reset on the same day or time, but do need to reset weekly to qualify for this type.
Daily | 4 | Milestones that repeat or reset on a daily basis.
Special | 5 | Special indicates that the event is not on a daily/weekly cadence, but does occur more than once. For instance, Iron Banner in Destiny 1 or the Dawning were examples of what could be termed &quot;Special&quot; events.

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Milestones-DestinyMilestoneType.html#schema_Destiny-Definitions-Milestones-DestinyMilestoneType
