<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
activities | [[DestinyAggregateActivityStats|Destiny-HistoricalStats-DestinyAggregateActivityStats]][] | List of all activities the player has participated in.

## Example
```javascript
{
    // Type: [[DestinyAggregateActivityStats|Destiny-HistoricalStats-DestinyAggregateActivityStats]][]
    "activities": [
       // Type: [[DestinyAggregateActivityStats|Destiny-HistoricalStats-DestinyAggregateActivityStats]]
        {
            // Type: [[DestinyActivityDefinition|Destiny-Definitions-DestinyActivityDefinition]]:ManifestDefinition:integer:uint32
            "activityHash": 0,
            // Type: Dictionary&lt;string,[[DestinyHistoricalStatsValue|Destiny-HistoricalStats-DestinyHistoricalStatsValue]]&gt;
            "values": {
                "{string}": {
                    // Type: string
                    "statId": "",
                    // Type: [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]]
                    "basic": {
                        // Type: number:double
                        "value": 0,
                        // Type: string
                        "displayValue": ""
                    },
                    // Type: [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]]
                    "pga": {
                        // Type: number:double
                        "value": 0,
                        // Type: string
                        "displayValue": ""
                    },
                    // Type: [[DestinyHistoricalStatsValuePair|Destiny-HistoricalStats-DestinyHistoricalStatsValuePair]]
                    "weighted": {
                        // Type: number:double
                        "value": 0,
                        // Type: string
                        "displayValue": ""
                    }
                }
            }
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-HistoricalStats-DestinyAggregateActivityResults.html#schema_Destiny-HistoricalStats-DestinyAggregateActivityResults
