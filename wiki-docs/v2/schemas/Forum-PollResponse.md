<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
topicId | integer:int64 | 
results | [[PollResult|Forum-PollResult]][] | 
totalVotes | integer:int32 | 

## Example
```javascript
{
    // Type: integer:int64
    "topicId": 0,
    // Type: [[PollResult|Forum-PollResult]][]
    "results": [
       // Type: [[PollResult|Forum-PollResult]]
        {
            // Type: string
            "answerText": "",
            // Type: integer:int32
            "answerSlot": 0,
            // Type: string:date-time
            "lastVoteDate": "",
            // Type: integer:int32
            "votes": 0,
            // Type: boolean
            "requestingUserVoted": false
        }
    ],
    // Type: integer:int32
    "totalVotes": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Forum-PollResponse.html#schema_Forum-PollResponse
