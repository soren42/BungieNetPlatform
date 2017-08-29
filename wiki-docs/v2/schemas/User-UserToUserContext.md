<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
isFollowing | boolean | 
ignoreStatus | [[IgnoreResponse|Ignores-IgnoreResponse]] | 
globalIgnoreEndDate | string:date-time:nullable | 

## Example
```javascript
{
    // Type: boolean
    "isFollowing": false,
    // Type: [[IgnoreResponse|Ignores-IgnoreResponse]]
    "ignoreStatus": {
        // Type: boolean
        "isIgnored": false,
        // Type: [[IgnoreStatus|Ignores-IgnoreStatus]]:Enum
        "ignoreFlags": 0
    },
    // Type: string:date-time:nullable
    "globalIgnoreEndDate": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_User-UserToUserContext.html#schema_User-UserToUserContext
