<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Instanced items can have perks: benefits that the item bestows. These are related to DestinySandboxPerkDefinition, and sometimes - but not always - have human readable info.When they do, they are the icons and text that you see in an item's tooltip. Talent Grids, Sockets, and the item itself can apply Perks, which are then summarized here for your convenience.

## Schema
* **Schema Type:** Class
* **Type:** object
* **Component Type Dependency:** ItemPerks

## Properties
Name | Type | Description
---- | ---- | -----------
perks | [[DestinyPerkReference|Destiny-Perks-DestinyPerkReference]][] | The list of perks to display in an item tooltip - and whether or not they have been activated.

## Example
```javascript
{
    // Type: [[DestinyPerkReference|Destiny-Perks-DestinyPerkReference]][]
    "perks": [
       // Type: [[DestinyPerkReference|Destiny-Perks-DestinyPerkReference]]
        {
            // Type: [[Destiny.Definitions.DestinySandboxPerkDefinition|Destiny-Definitions-DestinySandboxPerkDefinition]]:integer:uint32
            "perkHash": 0,
            // Type: string
            "iconPath": "",
            // Type: boolean
            "isActive": false,
            // Type: boolean
            "visible": false
        }
    ]
}

```

## References
1. https://bungie-net.github.io/multi/schema_Destiny-Entities-Items-DestinyItemPerksComponent.html#schema_Destiny-Entities-Items-DestinyItemPerksComponent
