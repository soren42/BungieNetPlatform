<span class="wiki-builder">This page was generated with Wiki Builder. Do not change the format!</span>

## Info
Returns advisor information about the vendor Xur in Destiny.
* **URI:** [[/Destiny/Advisors/Xur/|https://www.bungie.net/Platform/Destiny/Advisors/Xur/]]
* **Method:** GET
* **Accessibility:** Public
* **Service:** [[DestinyService|Endpoints#DestinyService]]

## Parameters
### Path Parameters
None

### Query String Parameters
Name | Description
---- | -----------
definitions | Include definitions in the response. Use while testing.

### JSON POST Parameters
None

## Example
GET https://www.bungie.net/Platform/Destiny/Advisors/Xur/

When Xur isn't available.
```javascript
{
    "Response": {

    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {

    }
}
```

When Xur is available.
```javascript
{
   "Response":{
      "data":{
         "vendorHash":2796397637,
         "ackState":{
            "needsAck":false,
            "ackId":""
         },
         "nextRefreshDate":"2015-06-12T09:00:00Z",
         "enabled":true,
         "saleItemCategories":[
            {
               "categoryTitle":"Exotic Gear",
               "saleItems":[
                  {
                     "item":{
                        "itemHash":2994845059,
                        "bindStatus":0,
                        "isEquipped":false,
                        "itemInstanceId":"0",
                        "itemLevel":24,
                        "stackSize":1,
                        "qualityLevel":70,
                        "stats":[
                           {
                              "statHash":2391494160,
                              "value":36,
                              "maximumValue":0
                           },
                           {
                              "statHash":144602215,
                              "value":111,
                              "maximumValue":0
                           },
                           {
                              "statHash":1735777505,
                              "value":0,
                              "maximumValue":0
                           },
                           {
                              "statHash":4244567218,
                              "value":0,
                              "maximumValue":0
                           }
                        ],
                        "primaryStat":{
                           "statHash":3897883278,
                           "value":451,
                           "maximumValue":0
                        },
                        "canEquip":false,
                        "equipRequiredLevel":20,
                        "unlockFlagHashRequiredToEquip":2166136261,
                        "cannotEquipReason":2,
                        "damageType":0,
                        "damageTypeNodeIndex":-1,
                        "damageTypeStepIndex":-1,
                        "progression":{
                           "dailyProgress":0,
                           "weeklyProgress":0,
                           "currentProgress":0,
                           "level":0,
                           "step":0,
                           "progressToNextLevel":0,
                           "nextLevelAt":0,
                           "progressionHash":2043912351
                        },
                        "talentGridHash":4175720268,
                        "nodes":[
                           {
                              "isActivated":false,
                              "stepIndex":0,
                              "state":7,
                              "hidden":false,
                              "nodeHash":835183238
                           },
                           {
                              "isActivated":false,
                              "stepIndex":0,
                              "state":7,
                              "hidden":false,
                              "nodeHash":1144665524
                           },
                           {
                              "isActivated":false,
                              "stepIndex":0,
                              "state":7,
                              "hidden":false,
                              "nodeHash":3428940937
                           },
                           {
                              "isActivated":true,
                              "stepIndex":0,
                              "state":10,
                              "hidden":true,
                              "nodeHash":1777049967
                           },
                           {
                              "isActivated":false,
                              "stepIndex":0,
                              "state":7,
                              "hidden":false,
                              "nodeHash":3452924987
                           },
                           {
                              "isActivated":true,
                              "stepIndex":0,
                              "state":10,
                              "hidden":true,
                              "nodeHash":3330202799
                           },
                           {
                              "isActivated":false,
                              "stepIndex":0,
                              "state":7,
                              "hidden":false,
                              "nodeHash":4076480290
                           },
                           {
                              "isActivated":false,
                              "stepIndex":0,
                              "state":7,
                              "hidden":false,
                              "nodeHash":1173110174
                           },
                           {
                              "isActivated":false,
                              "stepIndex":0,
                              "state":7,
                              "hidden":false,
                              "nodeHash":99489719
                           },
                           {
                              "isActivated":false,
                              "stepIndex":0,
                              "state":13,
                              "hidden":true,
                              "nodeHash":402641165
                           }
                        ],
                        "useCustomDyes":false,
                        "artRegions":{

                        },
                        "isEquipment":true,
                        "isGridComplete":false,
                        "perks":[
                           {
                              "iconPath":"\/common\/destiny_content\/icons\/ee878e2ed59c4ac5c3d4a3a8a19486c7.png",
                              "perkHash":632126377,
                              "isActive":false
                           },
                           {
                              "iconPath":"\/common\/destiny_content\/icons\/e2e1efd7513ef2bf56f58184d92c51c2.png",
                              "perkHash":2661061678,
                              "isActive":false
                           },
                           {
                              "iconPath":"\/common\/destiny_content\/icons\/e73fa676bc492284204f066af0afc414.png",
                              "perkHash":2070475581,
                              "isActive":false
                           }
                        ],
                        "location":3,
                        "transferStatus":0,
                        "locked":false,
                        "lockable":false
                     },
                     "vendorItemIndex":74,
                     "itemStatus":0,
                     "costs":[
                        {
                           "itemHash":1738186005,
                           "value":13
                        }
                     ],
                     "unlockStatuses":[

                     ]
                  }
               ]
            },
            {
               "categoryTitle":"Curios",
               "saleItems":[]
            },
            {
               "categoryTitle":"Material Exchange",
               "saleItems":[]
            }
         ],
         "inventoryBuckets":[

         ]
      }
   },
   "ErrorCode":1,
   "ThrottleSeconds":0,
   "ErrorStatus":"Success",
   "Message":"Ok",
   "MessageData":{

   }
}
```

## References
