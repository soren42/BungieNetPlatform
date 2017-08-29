<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
The actual activity to be redirected to when you click on the node.Note that a node can have many Activities attached to it: but only one will be active at anygiven time.  The list of Node Activities will be traversed, and the first one found to be activewill be displayed.  This way, a node can layer multiple variants of an activity on top of each other.For instance, one node can control the weekly Crucible Playlist.  There are multiple possible playlists,but only one is active for the week.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
nodeActivityId | integer:uint32 | An identifier for this node activity.  It is only guaranteed to be unique within the Activity Graph.
activityHash | [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32 | The activity that will be activated if the user clicks on this node.  Controls all activity-relatedinformation displayed on the node if it is active (the text shown in the tooltip etc)

## Example
```javascript
{
    // Type: integer:uint32
    "nodeActivityId": 0,
    // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
    "activityHash": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Director-DestinyActivityGraphNodeActivityDefinition.html#schema_Destiny-Definitions-Director-DestinyActivityGraphNodeActivityDefinition
