<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Many items can be rendered in 3D.  When you request this block, you will obtainthe custom data needed to render this specific instance of the item.

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** ItemRenderData

## Properties
Name | Type | Description
---- | ---- | -----------
useCustomDyes | boolean | If you should use custom dyes on this item, it will be indicated here.
artRegions | Dictionary&lt;integer:int32,integer:int32&gt; | A dictionary for rendering gear components, with: key = Art Arrangement Region Index value = The chosen Arrangement Index for the Region, based on the value of a stat on the item used for making the choice.

## Example
```javascript
{
    // Type: boolean
    "useCustomDyes": false,
    // Type: Dictionary&lt;integer:int32,integer:int32&gt;
    "artRegions": {
        "0": 0
    }
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Items-DestinyItemRenderComponent.html#schema_Destiny-Entities-Items-DestinyItemRenderComponent
