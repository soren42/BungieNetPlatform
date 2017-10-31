<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Advanced search for TalentNodes.

* **URI:** [[/Destiny/Explorer/TalentNodeSteps/|https://bungie.net/d1/Platform/Destiny/Explorer/TalentNodeSteps/]]
* **Basepath:** https://bungie.net/d1/Platform
* **Method:** GET
* **Service:** [[Destiny|Endpoints#Destiny]]
* **Permissions:** None
* **Officially Supported:** No

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Schema | Required | Description
---- | ------ | -------- | -----------
page | integer:int32 | No | The current page to return. Starts at 1.
count | integer:int32 | No | The number of results per page. Default is 10.
name | string | No | Filter by name.
damageTypes | [#/components/schemas/DamageType][] | No | Filter by damage type.
definitions | boolean | No | Include definitions in the response. Use while testing.
impactEffects | string | No | 
guardianAttributes | string | No | 
lightAbilities | string | No | 
damageTypes | string | No | 
definitions | string | No | 

## Example
### Request
GET https://bungie.net/d1/Platform/Destiny/Explorer/TalentNodeSteps/

### Response
PlatformErrorCode: 200
```javascript
{
    // Type: [#/components/schemas/Destiny.GetDestinyExplorerTalentNodeSteps]
    "Response": null,
    // Type: [[PlatformErrorCodes|Exceptions-PlatformErrorCodes]]:Enum
    "ErrorCode": 0,
    // Type: integer:int32
    "ThrottleSeconds": 0,
    // Type: string
    "ErrorStatus": "",
    // Type: string
    "Message": "",
    // Type: Dictionary&lt;string,string&gt;
    "MessageData": {
        "{string}": ""
    },
    // Type: object
}

```

## References
