<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Create a group with minimal settings. Used for creating an alliance.
* **URI:** [[/Group/Create/Minimal/|https://www.bungie.net/Platform/Group/Create/Minimal/]]
* **Method:** POST
* **Accessibility:** Private
* **Service:** [[GroupService|Endpoints#GroupService]]

## Parameters
### Path Parameters
None

### Query String Parameters
None

### JSON POST Parameters
Name | Description
---- | -----------
groupName | The name of the group.
groupAbout | A description about the group.

## Example
POST https://www.bungie.net/Platform/Group/Create/Minimal/
```javascript
{
    "groupName": "TestAllianceGroup",
    "groupAbout": "This is test group of the CreateMinimalGroup endpoint."
}
```
 ```javascript

```

## References
