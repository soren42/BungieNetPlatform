<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Dictates a rule around whether the plug is enabled or insertable. In practice, the live Destiny data will refer to these entries by index.  You can thenlook up that index in the appropriate property (enabledRules or insertionRules) to getthe localized string for the failure message if it failed.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
failureMessage | string | The localized string to show if this rule fails.

## Example
```javascript
{
    // Type: string
    "failureMessage": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-Items-DestinyPlugRuleDefinition.html#schema_Destiny-Definitions-Items-DestinyPlugRuleDefinition
