## API Key
Sign in to bungie.net and visit the [API registration portal](https://www.bungie.net/en/User/API). If you haven't already verified the [email address associated](https://www.bungie.net/en/Profile/Settings#context=settings&tab=notificationsAndEmail) with your bungie.net account, now is the time to do so. Make sure to check your spam or junk mail folder if the email verification link doesn't appear.

## Query the Platform
To fetch data from the platform, it's as simple as sending a HTTP request to it along with your API key and making use of the response, which is [JSON-encoded](http://json.org/).

### PHP
```php
<?php
 $apiKey = 'YOUR-API-KEY-HERE';
 
 $ch = curl_init();
 curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/');
 curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
 curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));
 
 $json = json_decode(curl_exec($ch));
 echo $json->Response->data->inventoryItem->itemName; //Gjallarhorn
```

### Javascript
```javascript
var apiKey = "YOUR-API-KEY-HERE";
 
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
xhr.setRequestHeader("X-API-Key", apiKey);
 
xhr.onreadystatechange = function(){
 if(this.readyState === 4 && this.status === 200){
  var json = JSON.parse(this.responseText);
  console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn
 }
}
 
xhr.send();
```

### JavaScript (with jQuery)
```javascript
var apiKey = "YOUR-API-KEY-HERE";
 
$.ajax({
 url: "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/",
 headers: {
  "X-API-Key": apiKey
 }
}).done(function(json){
 console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn
});
```

### C# (Blocking)
```cs
// Uses JSON.NET - http://www.nuget.org/packages/Newtonsoft.Json
using (var client = new HttpClient())
{
  client.DefaultRequestHeaders.Add("X-API-Key", "YOUR-API-KEY-HERE");
 
  var response = client.GetAsync("https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/").Result;
  var content = response.Content.ReadAsStringAsync().Result;
  dynamic item = Newtonsoft.Json.JsonConvert.DeserializeObject(content);
 
  Console.WriteLine(item.Response.data.inventoryItem.itemName); //Gjallarhorn
}
```

### C# (Non-Blocking)
```cs
// Uses JSON.NET - http://www.nuget.org/packages/Newtonsoft.Json
using (var client = new HttpClient())
{
  client.DefaultRequestHeaders.Add("X-API-Key", "YOUR-API-KEY-HERE");
 
  var response = await client.GetAsync("https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/");
  var content = await response.Content.ReadAsStringAsync();
  dynamic item = Newtonsoft.Json.JsonConvert.DeserializeObject(content);
 
  Console.WriteLine(item.Response.data.inventoryItem.itemName); //Gjallarhorn
}
```

### Java
```java
String apiKey = "YOUR-API-KEY-HERE";
 
 // Endpoint for Gjallarhorn
 String url = "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/";
 
 URL obj = new URL(url);
 HttpURLConnection con = (HttpURLConnection) obj.openConnection();
 
 con.setRequestMethod("GET");
 
 // Set header
 con.setRequestProperty("X-API-KEY", apiKey);
 
 int responseCode = con.getResponseCode();
 System.out.println("\nSending 'GET' request to Bungie.Net : " + url);
 System.out.println("Response Code : " + responseCode);
 
 BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
 String inputLine;
 String response = "";
 
 while ((inputLine = in.readLine()) != null) {
     response += inputLine;
 }
 
 in.close();
 
 // Uses Gson - https://github.com/google/gson
 JsonParser parser = new JsonParser();
 JsonObject json = (JsonObject) parser.parse(response);
 
 System.out.println();
 System.out.println(json.getAsJsonObject("Response").getAsJsonObject("data").getAsJsonObject("inventoryItem").get("itemName"));
 //Gjallarhorn
```

### Python
```python
import requests
 
#dictionary to hold extra headers
HEADERS = {"X-API-Key":'YOUR_API_KEY_HERE'}
 
#make request for Gjallarhorn
r = requests.get("https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", headers=HEADERS);
 
#convert the json object we received into a Python dictionary object
#and print the name of the item
inventoryItem = r.json()
print(inventoryItem['Response']['data']['inventoryItem']['itemName'])
 
#Gjallarhorn
```

## Where to Next?
* Read more [[about the API|API-Details]].
* See a [[list of endpoints|Endpoints]].