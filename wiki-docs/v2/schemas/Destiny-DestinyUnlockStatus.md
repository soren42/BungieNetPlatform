<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Indicates the status of an &quot;Unlock Flag&quot; on a Character or Profile. These are individual bits of state that can be either set or not set, and sometimes provide interestinghuman-readable information in their related DestinyUnlockDefinition.

## Schema
* **Schema Type:** Class
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
unlockHash | [[Destiny.Definitions.DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]]:integer:uint32 | The hash identifier for the Unlock Flag.  Use to lookup DestinyUnlockDefinition for static data.Not all unlocks have human readable data - in fact, most don't.  But when they do, it can be very useful to show.Even if they don't have human readable data, you might be able to infer the meaning of an unlock flagwith a bit of experimentation...
isSet | boolean | Whether the unlock flag is set.

## Example
```javascript
{
    // Type: [[Destiny.Definitions.DestinyUnlockDefinition|Destiny-Definitions-DestinyUnlockDefinition]]:integer:uint32
    "unlockHash": 0,
    // Type: boolean
    "isSet": false
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-DestinyUnlockStatus.html#schema_Destiny-DestinyUnlockStatus
