<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
If you're showing an unlock value in the UI, this is the format in which it should be shown. You'll have to build your own algorithms on the client side to determine how best to render these options.

## Schema
* **Schema Type:** Enum
* **Type:** integer
* **Format:** int32

## Enum Values
Identifier | Value | Description
---------- | ----- | -----------
Automatic | 0 | Generally, Automatic means &quot;Just show the number&quot;
Fraction | 1 | Show the number as a fractional value. For this to make sense, the value being displayed should have a comparable upper bound, like the progress to the next level of a Progression.
Checkbox | 2 | Show the number as a checkbox. 0 Will mean unchecked, any other value will mean checked.
Percentage | 3 | Show the number as a percentage. For this to make sense, the value being displayed should have a comparable upper bound, like the progress to the next level of a Progression.
DateTime | 4 | Show the number as a date and time. The number will be the number of seconds since the Unix Epoch (January 1st, 1970 at midnight UTC). It'll be up to you to convert this into a date and time format understandable to the user in their time zone.
FractionFloat | 5 | Show the number as a floating point value that represents a fraction, where 0 is min and 1 is max. For this to make sense, the value being displayed should have a comparable upper bound, like the progress to the next level of a Progression.
Integer | 6 | Show the number as a straight-up integer.
TimeDuration | 7 | Show the number as a time duration. The value will be returned as seconds.
Hidden | 8 | Don't bother showing the value at all, it's not easily human-interpretable, and used for some internal purpose.

## References
1. https://bungie-net.github.io/multi/schema_Destiny-DestinyUnlockValueUIStyle.html#schema_Destiny-DestinyUnlockValueUIStyle
