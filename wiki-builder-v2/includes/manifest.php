<?php

function doRequest($endpoint, $options=array()) {
	$options['headers'] = array(
		'X-API-Key: '.API_KEY
	);
	return getJson(BUNGIE_URL.$endpoint, $options);
}

function doGetRequest($endpoint, $params=array(), $options=array()) {
	$options['get'] = $params;
	return doRequest($endpoint, $options);
}

function doPostRequest($endpoint, $params=array(), $options=array()) {
	$options['post'] = $params;
	return doRequest($endpoint, $options);
}

function getManifest() {
	$manifestCachePath = CACHEPATH.'/manifest.json';
	$manifestCache = file_exists($manifestCachePath) ? json_decode(file_get_contents($manifestCachePath)) : false;
	if (!$manifestCache || time()-filemtime($manifestCachePath) > 30*60) {
		$result = doRequest('/Platform/Destiny2/Manifest/');

		if ($result->ErrorCode == 1) {
			$manifest = $result->Response;

			// Manifest change
			if (!$manifestCache || $manifestCache->mobileWorldContentPaths->en != $manifest->mobileWorldContentPaths->en) {
				// Remove old database files
				if ($manifestCache) {
					$oldDatabaseCachePath = CACHEPATH.'/'.pathinfo($manifestCache->mobileWorldContentPaths->en, PATHINFO_BASENAME);
					@unlink($oldDatabaseCachePath . '.zip');
					@unlink($oldDatabaseCachePath);
				}

				$manifestCache = $manifest;
				file_put_contents($manifestCachePath, json_encode($manifest, JSON_PRETTY_PRINT));
			}
		} else {
			echo 'ErrorCheckingManifest: '.$result->ErrorCode.' - '.$result->ErrorStatus.LN;
		}
	}
	return $manifestCache;
}

function getDatabase($langauge='en') {
	$manifest = getManifest();
	if ($manifest) {
		$worldContentPath = $manifest->mobileWorldContentPaths->{$langauge};
		$databaseCachePath = CACHEPATH.'/'.pathinfo($worldContentPath, PATHINFO_BASENAME);
		file_put_contents($databaseCachePath.'.zip', getUrl(BUNGIE_URL.$worldContentPath));

		$zip = new ZipArchive();
		if ($zip->open($databaseCachePath.'.zip') === TRUE) {
			$zip->extractTo(CACHEPATH);
			$zip->close();

			// Remove compressed copy
			@unlink($databaseCachePath.'.zip');
		}
		return $databaseCachePath;
	}
	return false;
}

function queryDatabase($query, $language='en') {
	$databasePath = getDatabase($language);
	//echo $databasePath.LN;
	if ($databasePath) {
		if ($db = new SQLite3($databasePath)) {
			$result = $db->query($query);

			$entries = array();
			while ($row = $result->fetchArray(true)) {
				if (isset($row['json'])) {
					$id = isset($row['id']) ? sprintf('%u', $row['id'] & 0xFFFFFFFF) : $row['key'];
					$entries[$id] = json_decode($row['json']);
				} else {
					$entries[] = $row;
				}
			}
			return $entries;
		}
	}
	return false;
}

$manifest = getManifest();

//$tables = queryDatabase("SELECT name FROM sqlite_master WHERE type='table'");
//foreach($tables as $row) {
//	echo $row['name'].LN;
//}
//echo json_encode($tables, JSON_PRETTY_PRINT).LN;

if (isset($_GET['def'])) {
	$defs = queryDatabase('SELECT * FROM '.$_GET['def'].(isset($_GET['hash']) ? ' WHERE id='.$_GET['hash'].' OR id='.sprintf('%u', $_GET['hash']) : ''));
	foreach($defs as $def) {
		echo json_encode($def, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
//		echo '['.$def->hash.'] '.$def->displayProperties->name;
//		if (isset($def->itemTypeDisplayName)) echo ' | '.$def->itemTypeDisplayName;
//		if (isset($def->displayProperties->description)) echo LN.$def->displayProperties->description;
		echo LN;
		//break;
	}
}