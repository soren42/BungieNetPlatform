<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Where the sausage gets made.  Unlock Expressions are the foundation of the game's gatingmechanics and investment-related restrictions.  They can test Unlock Flags and Unlock Valuesfor certain states, using a sufficient amount of logical operators such thatunlock expressions are effectively Turing complete. Use UnlockExpressionParser to evaluate expressions using an IUnlockContext parsed from Babel.

## Schema
* **Schema Type:** Definition
* **Type:** object

## Properties
Name | Type | Description
---- | ---- | -----------
scope | [[DestinyGatingScope|Destiny-DestinyGatingScope]]:Enum | A shortcut for determining the most restrictive gating that this expression performs.See the DestinyGatingScope enum's documentation for more details.

## Example
```javascript
{
    // Type: [[DestinyGatingScope|Destiny-DestinyGatingScope]]:Enum
    "scope": 0
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyUnlockExpressionDefinition.html#schema_Destiny-Definitions-DestinyUnlockExpressionDefinition
