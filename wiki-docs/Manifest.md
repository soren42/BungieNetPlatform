## Introduction
The manifest is a collection compressed SQLite files holding static definitions of objects found within Destiny. It be retrieved using the [[GetDestinyManifest]] endpoint and supports 7 different languages.

## PHP 2.0
This is an updated solution using some of the new knowledge mentioned in the old explanation (see below).
```php
<?php
define('COOKIE_FILE', 'cookie.txt');
define('BUNGIE_URL', 'https://www.bungie.net');
define('API_KEY', '{INSERT_YOUR_API_KEY_HERE}');
define('USER_AGENT', 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.1) Gecko/20061204 Firefox/2.0.0.1');
 
define('SETTING_FILE', 'settings.json');
 
$default_options = array(
    CURLOPT_USERAGENT => USER_AGENT,
    CURLOPT_COOKIEJAR => COOKIE_FILE,
    CURLOPT_COOKIEFILE => COOKIE_FILE,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_SSL_VERIFYHOST => 2,
);
 
function loadSettings() {
    if (!file_exists(SETTING_FILE)) return new stdClass();
    return json_decode(file_get_contents(SETTING_FILE));
}
function setSetting($name, $value) {
    $settings = loadSettings();
    $settings->{$name} = $value;
    file_put_contents(SETTING_FILE, json_encode($settings));
}
function getSetting($name) {
    $settings = loadSettings();
    if (isset($settings->{$name})) return $settings->{$name};
    return '';
}
 
function parseCookieFile($file) {
    $cookies = array();
    if (file_exists($_SERVER['DOCUMENT_ROOT'].'/'.$file)) {
        $lines = file($file);
        foreach($lines as $line) {
            if (substr_count($line, "\t") == 6) {
                $tokens = explode("\t", $line);
                $tokens = array_map('trim', $tokens);
 
                $domain = preg_replace('/#[^_]+_/i', '', $tokens[0]);
                $flag = $tokens[1] == 'TRUE';
                $path = $tokens[2];
                $secure = $tokens[3] == 'TRUE';
                $expiration = $tokens[4];
                $name = $tokens[5];
                $value = $tokens[6];
                if (!isset($cookies[$domain])) $cookies[$domain] = array();
                $cookies[$domain][$name] = array(
                    'flag' => $flag,
                    'path' => $path,
                    'secure' => $secure,
                    'expiration' => $expiration,
                    'value' => $value
                );
            }
        }
    }
    return $cookies;
}
 
function doRequest($path) {
    global $default_options;
 
    $cookies = parseCookieFile(COOKIE_FILE);
    $bungieCookies = isset($cookies['www.bungie.net']) ? $cookies['www.bungie.net'] : array();
 
    $ch = curl_init(BUNGIE_URL.$path);
    curl_setopt_array($ch, $default_options);
    curl_setopt_array($ch, array(
        CURLOPT_HTTPHEADER => array(
            'x-api-key: '.API_KEY,
            'x-csrf: '.(isset($bungieCookies['bungled']) ? $bungieCookies['bungled']['value'] : '')
        )
    ));
    $response = curl_exec($ch);
    curl_close($ch);
 
    return json_decode($response);
}
 
function updateManifest($url) {
    $ch = curl_init(BUNGIE_URL.$url);
    curl_setopt_array($ch, array(
        CURLOPT_RETURNTRANSFER => true
    ));
    $data = curl_exec($ch);
    curl_close($ch);
 
    $cacheFilePath = 'cache/'.pathinfo($url, PATHINFO_BASENAME);
    if (!file_exists(dirname($cacheFilePath))) mkdir(dirname($cacheFilePath), 0777, true);
    file_put_contents($cacheFilePath.'.zip', $data);
 
    $zip = new ZipArchive();
    if ($zip->open($cacheFilePath.'.zip') === TRUE) {
        $zip->extractTo('cache');
        $zip->close();
    }
 
    $tables = array();
    if ($db = new SQLite3($cacheFilePath)) {
        $result = $db->query("SELECT name FROM sqlite_master WHERE type='table'");
        while($row = $result->fetchArray()) {
            $table = array();
            $result2 = $db->query("PRAGMA table_info(".$row['name'].")");
            while($row2 = $result2->fetchArray()) {
                $table[] = $row2[1];
            }
            $tables[$row['name']] = $table;
        }
    }
 
    return $tables;
}
 
function checkManifest() {
    // Checking for Manifest changes.
    $result = doRequest('/Platform/Destiny/Manifest/');
 
    // Grab the path of the language you want
    $database = $result->Response->mobileWorldContentPaths->en;
 
    // Check to see if had been changed
    if ($database != getSetting('database')) {
        // New database found.
        $tables = updateManifest($database);
        setSetting('database', $database);
        setSetting('tables', $tables);
    }
}
 
function queryManifest($query) {
    $database = getSetting('database');
    $cacheFilePath = 'cache/'.pathinfo($database, PATHINFO_BASENAME);
 
    $results = array();
    if ($db = new SQLite3($cacheFilePath)) {
        $result = $db->query($query);
        while($row = $result->fetchArray()) {
            $key = is_numeric($row[0]) ? sprintf('%u', $row[0] & 0xFFFFFFFF) : $row[0];
            $results[$key] = json_decode($row[1]);
        }
    }
    return $results;
}
 
function getDefinition($tableName) {
    return queryManifest('SELECT * FROM '.$tableName);
}
 
function getSingleDefinition($tableName, $id) {
    $tables = getSetting('tables');
 
    $key = $tables->{$tableName}[0];
    $where = ' WHERE '.(is_numeric($id) ? $key.'='.$id.' OR '.$key.'='.($id-4294967296) : $key.'="'.$id.'"');
    $results = queryManifest('SELECT * FROM '.$tableName.$where);
 
    return isset($results[$id]) ? $results[$id] : false;
}
 
checkManifest();
 
echo '<pre>Get Gjallarhorn: '.json_encode(getSingleDefinition('DestinyInventoryItemDefinition', 1274330687), JSON_PRETTY_PRINT).'</pre>';
 
echo '<pre>DestinyInventoryBucketDefinition: '.json_encode(getDefinition('DestinyInventoryBucketDefinition'), JSON_PRETTY_PRINT).'</pre>';
```

## PHP
Below is a PHP solution taken from a topic by [lowlines](https://www.bungie.net/en/Clan/Post/39966/105901734/0/0) that describes how read information from the manifest.

### Response
```php
{
    "Response": {
        "version": "45194.15.05.13.1136-2",
        "mobileAssetContentPath": "\/common\/destiny_content\/sqlite\/asset\/asset_sql_content_7c23eefeaa0003dbc141793135dae141.content",
        "mobileGearAssetDataBases": [
            {
                "version": 0,
                "path": "\/common\/destiny_content\/sqlite\/asset\/asset_sql_content_7c23eefeaa0003dbc141793135dae141.content"
            },
            {
                "version": 1,
                "path": "\/common\/destiny_content\/sqlite\/asset\/asset_sql_content_039b4a64b68a7ae75a1d349c301e494c.content"
            }
        ],
        "mobileWorldContentPaths": {
            "en": "\/common\/destiny_content\/sqlite\/en\/world_sql_content_bafce26a4daec6ba6932e93bb5bd200c.content",
            "fr": "\/common\/destiny_content\/sqlite\/fr\/world_sql_content_50895b556dfee93a1f3d5a3817c18b19.content",
            "es": "\/common\/destiny_content\/sqlite\/es\/world_sql_content_d016ba5a8d83b1526212bddaefbd96c6.content",
            "de": "\/common\/destiny_content\/sqlite\/de\/world_sql_content_52fbe64346a0110511a86238aec07310.content",
            "it": "\/common\/destiny_content\/sqlite\/it\/world_sql_content_bd613d541a690aa21896eb4ce761e42f.content",
            "ja": "\/common\/destiny_content\/sqlite\/ja\/world_sql_content_884749c1a137aa80b701fb175eb9620d.content",
            "pt-br": "\/common\/destiny_content\/sqlite\/pt-br\/world_sql_content_7a0cc97e802c88dee6a0ecff953194f2.content"
        },
        "mobileGearCDN": {
            "Geometry": "\/common\/destiny_content\/geometry\/platform\/mobile\/geometry",
            "Texture": "\/common\/destiny_content\/geometry\/platform\/mobile\/textures",
            "PlateRegion": "\/common\/destiny_content\/geometry\/platform\/mobile\/plated_textures",
            "Gear": "\/common\/destiny_content\/geometry\/gear"
        }
    },
    "ErrorCode": 1,
    "ThrottleSeconds": 0,
    "ErrorStatus": "Success",
    "Message": "Ok",
    "MessageData": {
 
    }
}
```

### Extracting Information
The main files you will probably want to look at are the "mobileWorldContentPaths" (the other 2 I believe are for getting assets needed to render 3D models). Each of these files are an SQLite database file that has been put into a Zip file.

Extracting them in PHP is pretty straightforward (get_url is a function I wrote that basically does a cURL request which includes stuff like cookies and my API key etc, file_get_contents can be used here, but it can be much slower than using cURL):
```php
$cacheFilePath = 'cache/'.pathinfo($path, PATHINFO_BASENAME);
file_put_contents($cacheFilePath.'.zip', get_url($path));
 
$zip = new ZipArchive();
if ($zip->open($cacheFilePath.'.zip') === TRUE) {
    $zip->extractTo($_SERVER['DOCUMENT_ROOT'].'/cache');
    $zip->close();
}
```

Now if you are like me, and don't have an SQLite viewer on hand, you have an SQLite file that you don't know what tables it contains or what columns are in said tables. Basically each table will generally have two columns, "id" or "key" and "json". Most of the time, "id" is not the entry's hash so you can't just query for a given entry like you can the /Manifest/{type}/{hash} API. So instead, we need to extract these SQLite files further into something we can actually look at and be able to access.

Note: $dbtype is referring to the section in the manifest the file is from (gear, asset, world).

```php
if ($db = new SQLite3($dbfile)) {
    $result = $db->query("SELECT name FROM sqlite_master WHERE type='table'");
    while($row = $result->fetchArray()) {
        $result2 = $db->query('SELECT * FROM '.$row['name']);
        $data = array();
        while ($col = $result2->fetchArray(true)) {
            $json = json_decode($col['json'], true);
 
            if (isset($col['id'])) {
                $data[$col['id']] = $json;
            } else if (isset($col['key'])) {
                $data[$col['key']] = $json;
            } else {
                $data[] = $json;
            }
        }
        if (!file_exists($dbtype)) mkdir($dbtype);
        file_put_contents($dbtype.'/'.$row['name'].'.json', json_encode($data));
    }
}
```

You should now have some json files you can open up and view. When loading these json files, you should load them in so that the {dataType}Hash value becomes the key so you can reference them directly, though not all tables use a hash to identify objects.

### Entry IDs
It has been [discovered](https://www.bungie.net/en/Clan/Post/39966/118930686/0/0/1) that the ID column is actually the hash as an unsigned 32bit number. As long as you properly convert it you can do quick look up queries by ID.

PHP will read it as a signed number so a little conversion is necessary.
```php
$id = sprintf('%u', $index & 0xFFFFFFFF);
```
Or if you want to query the ID in your SQLite queries.
```sql
SELECT CASE WHEN id < 0 THEN id + 4294967296 ELSE id END AS id, json FROM DestinyInventoryItemDefinition
```

## Python (v3.X)
This code was written by [JAMeador13](https://github.com/JAMeador13).

```python
#All of these imports used, if the code is broken down into several sections like it is on the wiki,
#might not make sense to include all of them at the beginning, but will save time for new devs

import requests, zipfile, os, pickle, json, sqlite3

def get_manifest():
    manifest_url = 'http://www.bungie.net/Platform/Destiny/Manifest/'

    #get the manifest location from the json
    r = requests.get(manifest_url)
    manifest = r.json()
    mani_url = 'http://www.bungie.net'+manifest['Response']['mobileWorldContentPaths']['en']

    #Download the file, write it to 'MANZIP'
    r = requests.get(mani_url)
    with open("MANZIP", "wb") as zip:
        zip.write(r.content)
    print("Download Complete!")

    #Extract the file contents, and rename the extracted file
    # to 'Manifest.content'
    with zipfile.ZipFile('MANZIP') as zip:
        name = zip.namelist()
        zip.extractall()
    os.rename(name[0], 'Manifest.content')
    print('Unzipped!')

hashes = {
    'DestinyActivityDefinition': 'activityHash',
    'DestinyActivityTypeDefinition': 'activityTypeHash',
    'DestinyClassDefinition': 'classHash',
    'DestinyGenderDefinition': 'genderHash',
    'DestinyInventoryBucketDefinition': 'bucketHash',
    'DestinyInventoryItemDefinition': 'itemHash',
    'DestinyProgressionDefinition': 'progressionHash',
    'DestinyRaceDefinition': 'raceHash',
    'DestinyTalentGridDefinition': 'gridHash',
    'DestinyUnlockFlagDefinition': 'flagHash',
    'DestinyHistoricalStatsDefinition': 'statId',
    'DestinyDirectorBookDefinition': 'bookHash',
    'DestinyStatDefinition': 'statHash',
    'DestinySandboxPerkDefinition': 'perkHash',
    'DestinyDestinationDefinition': 'destinationHash',
    'DestinyPlaceDefinition': 'placeHash',
    'DestinyActivityBundleDefinition': 'bundleHash',
    'DestinyStatGroupDefinition': 'statGroupHash',
    'DestinySpecialEventDefinition': 'eventHash',
    'DestinyFactionDefinition': 'factionHash',
    'DestinyVendorCategoryDefinition': 'categoryHash',
    'DestinyEnemyRaceDefinition': 'raceHash',
    'DestinyScriptedSkullDefinition': 'skullHash',
    'DestinyGrimoireCardDefinition': 'cardId'
}

hashes_trunc = {
    'DestinyInventoryItemDefinition': 'itemHash',
    'DestinyTalentGridDefinition': 'gridHash',
    'DestinyHistoricalStatsDefinition': 'statId',
    'DestinyStatDefinition': 'statHash',
    'DestinySandboxPerkDefinition': 'perkHash',
    'DestinyStatGroupDefinition': 'statGroupHash'
}

def build_dict(hash_dict):
    #connect to the manifest
    con = sqlite3.connect('manifest.content')
    print('Connected')
    #create a cursor object
    cur = con.cursor()

    all_data = {}
    #for every table name in the dictionary
    for table_name in hash_dict.keys():
        #get a list of all the jsons from the table
        cur.execute('SELECT json from '+table_name)
        print('Generating '+table_name+' dictionary....')

        #this returns a list of tuples: the first item in each tuple is our json
        items = cur.fetchall()

        #create a list of jsons
        item_jsons = [json.loads(item[0]) for item in items]

        #create a dictionary with the hashes as keys
        #and the jsons as values
        item_dict = {}
        hash = hash_dict[table_name]
        for item in item_jsons:
            item_dict[item[hash]] = item

        #add that dictionary to our all_data using the name of the table
        #as a key.
        all_data[table_name] = item_dict

    print('Dictionary Generated!')
    return all_data
#check if pickle exists, if not create one.
if os.path.isfile(r'path\to\file\manifest.content') == False:
    get_manifest()
    all_data = build_dict(hashes)
    with open('manifest.pickle', 'wb') as data:
        pickle.dump(all_data, data)
        print("'manifest.pickle' created!\nDONE!")
else:
    print('Pickle Exists')

with open('manifest.pickle', 'rb') as data:
    all_data = pickle.load(data)

hash = 1274330687
ghorn = all_data['DestinyInventoryItemDefinition'][hash]

print('Name: '+ghorn['itemName'])
print('Type: '+ghorn['itemTypeName'])
print('Tier: '+ghorn['tierTypeName'])
print(ghorn['itemDescription'])
```

## Python (v2.X)
Below is an example from [xIntangible's pastebin](http://pastebin.com/gwCuvYKb), describing how to use the data in the manifest in Python.

Downloading and Extracting the Manifest File Edit
First we get the location of the manifest file, download it, and extract it.

### Downloading and Extracting the Manifest File
First we get the location of the manifest file, download it, and extract it.
```python
 def get_manifest():
     manifest_url = 'http://www.bungie.net/Platform/Destiny/Manifest/'
 
     #get the manifest location from the json
     r = requests.get(manifest_url)
     manifest = r.json()
     mani_url = 'http://www.bungie.net'+manifest['Response']['mobileWorldContentPaths']['en']
 
     #Download the file, write it to 'MANZIP'
     r = requests.get(mani_url)
     with open("MANZIP", "wb") as zip:
         zip.write(r.content)
     print "Download Complete!"
 
     #Extract the file contents, and rename the extracted file
     # to 'Manifest.content'
     with zipfile.ZipFile('MANZIP') as zip:
         name = zip.namelist()
         zip.extractall()
     os.rename(name[0], 'Manifest.content')
     print 'Unzipped!'
```

Note that this renames the .content file to 'Manifest.content'. This is just for simplicity.

### Defining Hash Locations for Each Table
I didn't find it necessary to use the 'id' column, and instead used the hash from the 'json' column in each table, the only hurdle with this is that the hash is stored under a different key for every table.

So, we create a dictionary with the relevant hash locations for each table.
```python
hash_dict = {
    'DestinyActivityDefinition': 'activityHash',
    'DestinyActivityTypeDefinition': 'activityTypeHash',
    'DestinyClassDefinition': 'classHash',
    'DestinyGenderDefinition': 'genderHash',
    'DestinyInventoryBucketDefinition': 'bucketHash',
    'DestinyInventoryItemDefinition': 'itemHash',
    'DestinyProgressionDefinition': 'progressionHash',
    'DestinyRaceDefinition': 'raceHash',
    'DestinyTalentGridDefinition': 'gridHash',
    'DestinyUnlockFlagDefinition': 'flagHash',
    'DestinyHistoricalStatsDefinition': 'statId',
    'DestinyDirectorBookDefinition': 'bookHash',
    'DestinyStatDefinition': 'statHash',
    'DestinySandboxPerkDefinition': 'perkHash',
    'DestinyDestinationDefinition': 'destinationHash',
    'DestinyPlaceDefinition': 'placeHash',
    'DestinyActivityBundleDefinition': 'bundleHash',
    'DestinyStatGroupDefinition': 'statGroupHash',
    'DestinySpecialEventDefinition': 'eventHash',
    'DestinyFactionDefinition': 'factionHash',
    'DestinyVendorCategoryDefinition': 'categoryHash',
    'DestinyEnemyRaceDefinition': 'raceHash',
    'DestinyScriptedSkullDefinition': 'skullHash',
    'DestinyGrimoireCardDefinition': 'cardId'
}
```
Note, this is every table I know how to use. So if you were only interested in getting data from Tables you planned on using, you could simply remove the tables you were uninterested in.

For example, if you only wanted data on items, perks, and stats:

```python
hashes = {
    'DestinyInventoryItemDefinition': 'itemHash',
    'DestinyTalentGridDefinition': 'gridHash',
    'DestinyHistoricalStatsDefinition': 'statId',
    'DestinyStatDefinition': 'statHash',
    'DestinySandboxPerkDefinition': 'perkHash',
    'DestinyStatGroupDefinition': 'statGroupHash'
}
```

### Creating a Nested Dictionary
Now, we create a nested dictionary. Structured like so:
```python
{ 'TableName' : { hash : {json} }
```
This will make more sense when we get to actually using the dictionary.
```python
def build_dict(hash_dict):
     #connect to the manifest
     con = sqlite3.connect('Manifest.content')
     print 'Connected'
     #create a cursor object
     cur = con.cursor()
 
     all_data = {}
     #for every table name in the dictionary
     for table_name in hash_dict.keys():
         #get a list of all the jsons from the table
         cur.execute('SELECT json from '+table_name)
         print 'Generating '+table_name+' dictionary....'
 
         #this returns a list of tuples: the first item in each tuple is our json
         items = cur.fetchall()
 
         #create a list of jsons
         item_jsons = [json.loads(item[0]) for item in items]
 
         #create a dictionary with the hashes as keys
         #and the jsons as values
         item_dict = {}
         hash = hash_dict[table_name]
         for item in item_jsons:   
             item_dict[item[hash]] = item
 
         #add that dictionary to our all_data using the name of the table
         #as a key. 
         all_data[table_name] = item_dict 
     print 'Dictionary Generated!'
     return all_data
```

### Call Our Functions and Optionally, Pickle Our Data
Now, we could just call our functions.
```python
get_manifest()
all_data = build_dict(hashes)
```
But that would be too easy.

Optionally, you could store your new dictionary in a pickle file, and only run this script whenever:

You want to.
There is no existing pickle file, like below.
Or you could get fancy, and do something based on the age of the existing one.
Create a pickle file, if one doesn't exist:
```python
#check if pickle exists, if not create one. 
 if os.path.isfile('manifest.pickle') == False:
     get_manifest()        
     all_data = build_dict(weapon_hashes)
     with open('manifest.pickle', 'wb') as data:
         pickle.dump(all_data, data)
     print "'manifest.pickle' created!\nDONE!"
 else:
     print 'Pickle Exists'
```
### Using Our Nested Dictionary
Below is a simple script using our dictionary as 'all_data'. This script displays some basic information about everyone's favorite exotic rocket launcher.
```python
with open('manifest.pickle', 'rb') as data:
     all_data = pickle.load(data)
 
 
 hash = 1274330687
 ghorn = all_data['DestinyInventoryItemDefinition'][hash]
 
 print 'Name: '+ghorn['itemName']
 print 'Type: '+ghorn['itemTypeName']
 print 'Tier: '+ghorn['tierTypeName']
 print ghorn['itemDescription']
```

#### Output
```
Name: Gjallarhorn
Type: Rocket Launcher
Tier: Exotic
"If there is beauty in destruction, why not also in its delivery?" - Feizel Crux
```
This code in it's entirety can be found [here](http://pastebin.com/gwCuvYKb)