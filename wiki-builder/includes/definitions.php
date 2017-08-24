<?php

ini_set('max_execution_time', 300);

include('diff-master/LCS/LongestCommonSubsequence.php');
include('diff-master/LCS/MemoryEfficientLongestCommonSubsequenceImplementation.php');
include('diff-master/LCS/TimeEfficientLongestCommonSubsequenceImplementation.php');
include('diff-master/Differ.php');
include('diff-master/Diff.php');
use SebastianBergmann\Diff\Differ;

$cachePath = BUILDERPATH.'/cache/cache.json';

function emptyDocs($str) {
	if (is_file($str)) {
		@unlink($str);
	}
	elseif (is_dir($str)) {
		$scan = glob(rtrim($str,'/').'/*');
		foreach($scan as $index=>$path) {
			emptyDocs($path);
		}
		@rmdir($str);
	}
}

function getDefinition($dbfile, $table, $type, $id) {
	$def = '';

	if ($db = new SQLite3($dbfile)) {
		$result = $db->querySingle('SELECT * FROM '.$table.' WHERE '.$type.'='.(is_numeric($id) ? $id.' OR '.$type.'='.($id-4294967296) : '"'.$id.'"'), true);
		if (isset($result['json'])) {
			$def = $result['json'];
			$def = preg_replace('/(\\/icons\\/)[^\.]+/', '$1', $def);
			$def = json_encode(json_decode($def), JSON_PRETTY_PRINT);
		}
	}

	return $def;
}

function checkManifest($dbfile) {
	$manifest = array();
	if ($db = new SQLite3($dbfile)) {
		$result = $db->query("SELECT name FROM sqlite_master WHERE type='table'");
		while($row = $result->fetchArray()) {
			$entries = array();

			$type = false;

			$classified = array();

			$result2 = $db->query('SELECT * FROM ' . $row['name']);
			while ($col = $result2->fetchArray(true)) {
				if (!$type) $type = isset($col['id']) ? 'id' : 'key';

				$id = isset($col['id']) ? $col['id'] : $col['key'];
				if (is_numeric($id)) $id = sprintf('%u', $id & 0xFFFFFFFF);
				$entries[] = $id;
				if (strpos($col['json'], 'Name":"Classified"') !== false) $classified[] = $id;
			}

			$manifest[$row['name']] = array(
				'name' => $row['name'],
				'type' => $type,
				'entries' => $entries,
				'classified' => $classified
			);
		}
	}
	return $manifest;
}

function getManifest($type, $file) {
	$path = BASEPATH . '/manifest/' . $type . '/archive/' . date('Y-m-d\TH-i-s', $file['modified']) . '-' . $file['hash'];
	if (!file_exists($path)) mkdir($path, 0777, true);

	//echo 'Manifest[' . $file['hash'] . ']: ' . date('Y-m-d\TH:i:s', $file['modified']) . "\n";

	if (!file_exists($path . '/manifest.json')) {
		$manifest = checkManifest(BUILDERPATH . '/cache/' . $file['path']);
		file_put_contents($path . '/manifest.json', json_encode($manifest, JSON_PRETTY_PRINT));
	} else {
		$manifest = json_decode(file_get_contents($path . '/manifest.json'), true);
	}
	return $manifest;
}

if (isset($_GET['cache'])) {
	$cache = array();

	foreach (array_diff(scandir(BUILDERPATH . '/cache'), array('..', '.')) as $file) {
		if (pathinfo($file, PATHINFO_EXTENSION) != 'content') continue;
		preg_match('/([^_]+)_sql_content_([^\.]+)/', $file, $match);
		//echo $file."\n";
		$path = BUILDERPATH . '/cache/' . $file;
		$type = $match[1];
		$hash = $match[2];
		if (!isset($cache[$type])) $cache[$type] = array();
		$mtime = filemtime($path);
		$cache[$type][] = array(
			'path' => $file,
			'hash' => $hash,
			'modified' => $mtime,
			'modified_timestamp' => date('Y-m-d\TH:i:s', $mtime)
		);
	}
	foreach ($cache as $type => &$files) {
		usort($files, function ($a, $b) {
			return $a['modified'] - $b['modified'];
		});
		/*foreach($files as &$file) {
			$file['diff'] = array();
			$file['manifest'] = checkManifest(BUILDERPATH.'/cache/'.$file['path']);
		}*/
	}

	file_put_contents(BASEPATH . '/manifest/cache.json', json_encode($cache, JSON_PRETTY_PRINT));

	header('Content-Type: application/json');
	echo json_encode($cache);
	exit();
}
else if (isset($_GET['manifest'])) {
	$cache = json_decode(file_get_contents(BASEPATH.'/manifest/cache.json'), true);
	$type = $_GET['type'];
	$index = intval($_GET['manifest']);

	$files = $cache[$type];

	$manifest = array();

	if (isset($cache[$type])) {
		if (isset($files[$index])) {
			$manifest = getManifest($type, $files[$index]);
		}
	}

	header('Content-Type: application/json');
	echo json_encode($manifest, JSON_PRETTY_PRINT);
	exit();
}
else if (isset($_GET['compare'])) {
	$cache = json_decode(file_get_contents(BASEPATH.'/manifest/cache.json'), true);

	$type = $_GET['type'];
	$offset = intval($_GET['compare']);
	$tableName = $_GET['table'];

	$results = array();

	$files = $cache[$type];

	if (isset($cache[$type])) {
		for ($i = 0; $i < 2; $i++) {
			$index = $offset - 1 + $i;

			//foreach(explode(',', $_GET['compare']) as $index) {
			if (isset($files[$index])) {
				$file = $files[$index];
				$path = BASEPATH . '/manifest/' . $type . '/archive/' . date('Y-m-d\TH-i-s', $file['modified']) . '-' . $file['hash'];

				//echo 'Manifest['.$file['hash'].']: '.date('Y-m-d\TH:i:s', $file['modified'])."\n";

				$manifest = getManifest($type, $files[$index]);

				//echo var_export(array_keys($manifest), true)."\n";

				$diffPath = $path.'/diff.json';

				$diff = file_exists($diffPath) ? json_decode(file_get_contents($diffPath), true) : array();

				$lastManifest = isset($results[$i - 1]) ? $results[$i - 1]['manifest'] : array();
				$hasTable = isset($lastManifest[$tableName]);

				if (!isset($diff[$tableName]) && $i > 0) {

					$table = $manifest[$tableName];
					$tableDiff = array_diff(array_keys($manifest), array_keys($lastManifest));
					//foreach ($manifest as $tableName => $table) {

						$lastEntries = $hasTable ? $lastManifest[$tableName]['entries'] : array();
						$entries = $table['entries'];
						$addedDiff = array_values(array_diff($entries, $lastEntries));
						$removedDiff = array_values(array_diff($lastEntries, $entries));
						$changedDiff = array();
						$classified = $table['classified'];
						if ($hasTable) {
							foreach ($table['entries'] as $entryId) {
								$oldEntry = getDefinition(BUILDERPATH . '/cache/' . $files[$index - 1]['path'], $tableName, $table['type'], $entryId);
								$entry = getDefinition(BUILDERPATH . '/cache/' . $file['path'], $tableName, $table['type'], $entryId);

								if ($oldEntry && $oldEntry != $entry) {
									//$entryDiff = $differ->diff($oldEntry, $entry);
									//$changedDiff[] = array('id' => $entryId, 'diff' => $entryDiff);
									$changedDiff[] = $entryId;
								}
							}
						}
						if (!$hasTable || count($addedDiff) > 0 || count($removedDiff) > 0 || count($changedDiff) > 0) {
							$diff[$tableName] = array(
								'added' => $addedDiff,
								'removed' => $removedDiff,
								'changed' => $changedDiff,
								'classified' => $hasTable ? array_values(array_diff($classified, $lastManifest[$tableName]['classified'])) : $classified,
								'declassified' => $hasTable ? array_values(array_diff($lastManifest[$tableName]['classified'], $classified)) : array()
							);
						}
					//}
				}
				if (!isset($diff[$tableName])) {
					$diff[$tableName] = array(
						'added' => array(),
						'removed' => array(),
						'changed' => array(),
						'classified' => array(),
						'declassified' => array()
					);
				}
				$diff[$tableName]['new'] = !$hasTable;
				file_put_contents($path.'/diff.json', json_encode($diff, JSON_PRETTY_PRINT));
				$results[] = array('diff' => $diff, 'manifest' => $manifest);
			}
		}

		header('Content-Type: application/json');
		$diff = end($results)['diff'];
		echo json_encode($diff[$tableName], JSON_PRETTY_PRINT);
		exit();
	}
}
else if (isset($_GET['diff'])) {
	$cache = json_decode(file_get_contents(BASEPATH.'/manifest/cache.json'), true);

	$type = $_GET['type'];
	$index = intval($_GET['diff']);
	$tableName = $_GET['table'];
	$entryId = $_GET['id'];
	$differ = new Differ;

	$result = array();

	if (isset($cache[$type])) {
		$files = $cache[$type];
		$file = $files[$index];

		$path = BASEPATH . '/manifest/' . $type . '/archive/' . date('Y-m-d\TH-i-s', $file['modified']) . '-' . $file['hash'].'/changes';
		if (!file_exists($path)) mkdir($path, 0777, true);

		$diffPath = $path.'/'.$tableName.'-'.$entryId.'.json';

		if (file_exists($diffPath)) {
			$result = json_decode(file_get_contents($diffPath), true);
		} else {
			/*$match = false;
			if (file_exists($path.'/changes.json')) {
				$changes = json_decode(file_get_contents($path.'/changes.json'), true);
				if (isset($changes[$tableName]) && isset($changes[$tableName][$entryId])) {
					$result = $changes[$tableName][$entryId];
					$match = true;
				}
			}
			if (!$match) {*/
				//$changes = file_exists($path.'/changes.json') ? json_decode(file_get_contents($path.'/changes.json'), true) : array();
				//if (!isset($changes[$tableName])) $changes[$tableName] = array();

				//if (isset($changes[$tableName][$entryId])) {
				//	$result = $changes[$tableName][$entryId];
				//} else {

				$lastManifest = isset($files[$index - 1]) ? getManifest($type, $files[$index - 1]) : array();
				$manifest = getManifest($type, $files[$index]);


				$table = $manifest[$tableName];

				if (isset($lastManifest[$tableName])) {
					$oldEntry = getDefinition(BUILDERPATH . '/cache/' . $files[$index - 1]['path'], $tableName, $table['type'], $entryId);
					$entry = getDefinition(BUILDERPATH . '/cache/' . $file['path'], $tableName, $table['type'], $entryId);

					$diff = $differ->diffToArray($oldEntry, $entry);
					//echo $differ->diff($oldEntry, $entry)."\n";
					//echo var_export($diff, true)."\n";
					$entryDiff = array();
					foreach ($diff as $line => $lineDiff) {
						$lastDiffIndex = count($entryDiff) - 1;

						if (!isset($entryDiff[$lastDiffIndex]) || $entryDiff[$lastDiffIndex]['type'] != $lineDiff[1]) {
							$entryDiff[] = array('text' => $lineDiff[0], 'type' => $lineDiff[1]);
						} else {
							$entryDiff[$lastDiffIndex]['text'] .= "\n" . $lineDiff[0];
						}
					}
					$result = $entryDiff;
				}


				//$changes[$tableName][$entryId] = $result;
				//file_put_contents($path . '/changes.json', json_encode($changes, JSON_PRETTY_PRINT));
			//}
		}
		file_put_contents($diffPath, json_encode($result, JSON_PRETTY_PRINT));
	}

	header('Content-Type: application/json');
	echo json_encode($result, JSON_PRETTY_PRINT);
	exit();
}

?>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		var $log = $('pre');
		$.getJSON('?definitions&cache', function (data) {
			//console.log(data);
			var queue = [];
			for (var type in data) {
				if (type != 'world') continue;
				var files = data[type];
				for (var i=files.length-1; i<files.length; i++) {
					var file = files[i];
					console.log(file);
					queue.push(i);
					//if (i == 1) break;
				}
			}

			var diffQueue = [];
			var doDiffQueue = function() {
				if (diffQueue.length == 0) return;
				var diff = diffQueue[0];
				$.getJSON('?definitions&diff='+diff.index+'&type='+diff.type+'&table='+diff.table+'&id='+diff.id, function(result) {
					console.log(diff.type+'/'+diff.table+'/'+diff.id, result);
					diffQueue = diffQueue.slice(1);

					var $logCount = $log.find('#manifest-log-diff .count');
					$logCount.text(parseInt($logCount.text())+1);
					doDiffQueue();
				});
			};

			var tableQueue = [];
			var doTableQueue = function() {
				if (tableQueue.length == 0) {
					queue = queue.slice(1);
					$log.append('<br/>');
					doQueue();
					return;
				}
				//console.log('Check Table['+type+'/'+queue[0]+'/'+tableQueue[0]+']');
				$.getJSON('?definitions&compare='+queue[0]+'&type='+type+'&table='+tableQueue[0], function(result) {
					var tableName = tableQueue[0].replace('Destiny', '');
					console.log(tableName, result);

					for (var i=0; i<result.changed.length; i++) {
						diffQueue.push({
							index: queue[0],
							type: type,
							table: tableQueue[0],
							id: result.changed[i]
						})
					}

					var $logCount = $log.find('#manifest-log-'+queue[0]+' .count');
					$logCount.text(parseInt($logCount.text())+1);

					var logStats = ''
						+(result.added.length > 0 ? ' | Added('+result.added.length+')' : '')
						+(result.removed.length > 0 ? ' | Removed('+result.removed.length+')' : '')
						+(result.changed.length > 0 ? ' | Changed('+result.changed.length+')' : '')
						+(result.classified.length > 0 ? ' | Classified('+result.classified.length+')' : '')
						+(result.declassified.length > 0 ? ' | Declassified('+result.declassified.length+')' : '')
						;
					if (logStats.length > 0) {
						while(tableName.length < 25) tableName += ' ';
						$log.append('<div>'+tableName+logStats+'</div>');
					}
					tableQueue = tableQueue.slice(1);
					doTableQueue();
				});
			};

			var doQueue = function() {
				if (queue.length == 0) {
					$log.append('<div id="manifest-log-diff">Definition Changes Checked <span class="count">0</span>/'+diffQueue.length+'</div>');
					doDiffQueue();
					return;
				}
				console.log('Check Manifest['+type+'/'+queue[0]+']');
				$.getJSON('?definitions&manifest='+queue[0]+'&type='+type, function(manifest) {
					var file = data[type][queue[0]];
					console.log('Manifest '+file.modified_timestamp, manifest);

					tableQueue = Object.keys(manifest);
					$log.append('<div id="manifest-log-'+queue[0]+'">Manifest '+file.modified_timestamp+' ['+type+'/'+file.hash+']: <span class="count">0</span>/'+tableQueue.length+' Tables Checked</div>');

					doTableQueue();
				});
			};
			doQueue();
		});
	});
</script>
<pre></pre>