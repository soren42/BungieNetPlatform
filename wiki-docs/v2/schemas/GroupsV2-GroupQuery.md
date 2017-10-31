<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
name | string | 
groupType | [[GroupType|GroupsV2-GroupType]]:Enum | 
creationDate | [[GroupDateRange|GroupsV2-GroupDateRange]]:Enum | 
sortBy | [[GroupSortBy|GroupsV2-GroupSortBy]]:Enum | 
groupMemberCountFilter | integer:int32:nullable | 
localeFilter | string | 
tagText | string | 
itemsPerPage | integer:int32 | 
currentPage | integer:int32 | 
requestContinuationToken | string | 

## Example
```javascript
{
    // Type: string
    "name": "",
    // Type: [[GroupType|GroupsV2-GroupType]]:Enum
    "groupType": 0,
    // Type: [[GroupDateRange|GroupsV2-GroupDateRange]]:Enum
    "creationDate": 0,
    // Type: [[GroupSortBy|GroupsV2-GroupSortBy]]:Enum
    "sortBy": 0,
    // Type: integer:int32:nullable
    "groupMemberCountFilter": 0,
    // Type: string
    "localeFilter": "",
    // Type: string
    "tagText": "",
    // Type: integer:int32
    "itemsPerPage": 0,
    // Type: integer:int32
    "currentPage": 0,
    // Type: string
    "requestContinuationToken": ""
}

```

## References
1. https://bungie-net.github.io/multi/schema_GroupsV2-GroupQuery.html#schema_GroupsV2-GroupQuery
