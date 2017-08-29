<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If an item is a Plug, its DestinyInventoryItemDefinition.plug property will be populatedwith an instance of one of these bad boys. This gives information about when it can be inserted, what the plug's categoryis (and thus whether it is compatible with a socket... see DestinySocketTypeDefinitionfor information about Plug Categories and socket compatibility), whether it is enabledand other Plug info.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
insertionRules | [[DestinyPlugRuleDefinition|Destiny-Definitions-Items-DestinyPlugRuleDefinition]]:Definition[] | The rules around when this plug can be inserted into a socket, asidefrom the socket's individual restrictions. The live data DestinyItemPlugComponent.insertFailIndexes will be an index intothis array, so you can pull out the failure strings appropriate for the user.
plugCategoryIdentifier | string | The string identifier for the plug's category.  Use the socket's DestinySocketTypeDefinition.plugWhitelistto determine whether this plug can be inserted into the socket.
plugCategoryHash | integer:uint32 | The hash for the plugCategoryIdentifier.  You can use this instead if you wish: I put both in the definitionfor debugging purposes.
onActionRecreateSelf | boolean | If you successfully socket the item, this will determine whether or not you get &quot;refunded&quot; on the plug.
insertionMaterialRequirementHash | [[DestinyMaterialRequirementSetDefinition|Destiny-Definitions-DestinyMaterialRequirementSetDefinition]]:Definition:integer:uint32 | If inserting this plug requires materials, this is the hash identifier for looking up theDestinyMaterialRequirementSetDefinition for those requirements.
previewItemOverrideHash | [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32 | In the game, if you're inspecting a plug item directly, this will be the item shownwith the plug attached.  Look up the DestinyInventoryItemDefinition for this hash for the item.
enabledMaterialRequirementHash | [[DestinyMaterialRequirementSetDefinition|Destiny-Definitions-DestinyMaterialRequirementSetDefinition]]:Definition:integer:uint32 | It's not enough for the plug to be inserted.  It has to be enabled as well.For it to be enabled, it may require materials.This is the hash identifier for the DestinyMaterialRequirementSetDefinition for those requirements,if there is one.
enabledRules | [[DestinyPlugRuleDefinition|Destiny-Definitions-Items-DestinyPlugRuleDefinition]]:Definition[] | The rules around whether the plug, once inserted, is enabled and providing its benefits. The live data DestinyItemPlugComponent.enableFailIndexes will be an index intothis array, so you can pull out the failure strings appropriate for the user.

## Example
```javascript
{
    // Type: [[DestinyPlugRuleDefinition|Destiny-Definitions-Items-DestinyPlugRuleDefinition]]:Definition[]
    "insertionRules": [
       // Type: [[DestinyPlugRuleDefinition|Destiny-Definitions-Items-DestinyPlugRuleDefinition]]:Definition
        {
            // Type: string
            "failureMessage": ""
        }
    ],
    // Type: string
    "plugCategoryIdentifier": "",
    // Type: integer:uint32
    "plugCategoryHash": 0,
    // Type: boolean
    "onActionRecreateSelf": false,
    // Type: [[DestinyMaterialRequirementSetDefinition|Destiny-Definitions-DestinyMaterialRequirementSetDefinition]]:Definition:integer:uint32
    "insertionMaterialRequirementHash": 0,
    // Type: [[DestinyInventoryItemDefinition|Destiny-Definitions-DestinyInventoryItemDefinition]]:ManifestDefinition:integer:uint32
    "previewItemOverrideHash": 0,
    // Type: [[DestinyMaterialRequirementSetDefinition|Destiny-Definitions-DestinyMaterialRequirementSetDefinition]]:Definition:integer:uint32
    "enabledMaterialRequirementHash": 0,
    // Type: [[DestinyPlugRuleDefinition|Destiny-Definitions-Items-DestinyPlugRuleDefinition]]:Definition[]
    "enabledRules": [
       // Type: [[DestinyPlugRuleDefinition|Destiny-Definitions-Items-DestinyPlugRuleDefinition]]:Definition
        {
            // Type: string
            "failureMessage": ""
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Items-DestinyItemPlugDefinition.html#schema_Destiny-Definitions-Items-DestinyItemPlugDefinition
