<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Plugs are non-instanced items that can provide Stat and Perk benefits when socketed into an instanced item. Items have Sockets, and Plugs are inserted into Sockets. This component finds all items that are considered &quot;Plugs&quot; in your inventory, and return information about the plug aside from any specific Socket into which it could be inserted.

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** ItemPlugStates

## Properties
Name | Type | Description
---- | ---- | -----------
insertFailIndexes | integer:int32[] | If the plug cannot be inserted for some reason, this will have the indexes into the plug item definition's plug.insertionRules property, so you can show the reasons why it can't be inserted. This list will be empty if the plug can be inserted.
enableFailIndexes | integer:int32[] | If a plug is not enabled, this will be populated with indexes into the plug item definition's plug.enabledRules property, so that you can show the reasons why it is not enabled. This list will be empty if the plug is enabled.

## Example
```javascript
{
    // Type: integer:int32[]
    "insertFailIndexes": [
       // Type: integer:int32
        0
    ],
    // Type: integer:int32[]
    "enableFailIndexes": [
       // Type: integer:int32
        0
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Components-Items-DestinyItemPlugComponent.html#schema_Destiny-Components-Items-DestinyItemPlugComponent
