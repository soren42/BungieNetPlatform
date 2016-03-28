<?php

require_once('parsedown-master/Parsedown.php');

define('LN', "\n");

$root = '';

$searchData = array();

function getMarkdownPages($path, $root='') {
	if (!$root) $root = $path;
	$pages = array();
	foreach(array_diff(scandir($path), array('.', '..')) as $file) {
		$filePath = $path.'/'.$file;
		if (is_dir($filePath)) {
			$pages = array_merge($pages, getMarkdownPages($filePath, $root));
		} else if (pathinfo($filePath, PATHINFO_EXTENSION) == 'md' /*&& strpos($filePath, 'Pages') !== false*/) {
			$pages[] = str_replace($root, '', $filePath);
		}
	}
	return $pages;
}

function locatePage($url) {
	global $pages, $root;
	//echo 'Locate: '.$url.' | '.$root."\n";
	if (strpos($url, '//') !== 0 && strpos($url, 'http') !== 0) {
		$anchor = '';
		if (strpos($url, '#') !== false) {
			$anchor = '#' . explode('#', $url)[1];
			$url = explode('#', $url)[0];
		}
		foreach ($pages as $page) {
			if (pathinfo($page, PATHINFO_FILENAME) == pathinfo($url, PATHINFO_FILENAME)) {
				$url = str_replace('.md', '', $page);
				$url = $root . 'docs' . str_replace('Pages', '', $url);
				$url .= $anchor;
				//echo 'Found: '.$url."\n";
				return $url;
			}
		}
		$url = '#'.$url;
	}
	return $url;
}

function parseMarkdown($markdownPath) {
	$markdown = file_get_contents($markdownPath);

	$markdown = preg_replace('/\[([^\]]+)\]\(([^\)]+)\)/', '[[$1|$2]]', $markdown);
	$markdown = preg_replace('/\[\[([^\]\|]+)\|([^\]]+)\]\]/', '<a href="$2">$1</a>', $markdown);
	$markdown = preg_replace('/\[\[([^\]]+)\]\]/', '<a href="$1">$1</a>', $markdown);

	$markdown = preg_replace('/\| ([\n\|])/m', '| &nbsp; $1', $markdown);

	$parse = new Parsedown();
	$html = $parse->text($markdown);

	preg_match_all('/href="([^"]+)"/', $html, $urlMatches, PREG_SET_ORDER);
	foreach($urlMatches as $urlMatch) {
		$pageUrl = locatePage($urlMatch[1]);
		if ($pageUrl != $urlMatch[1]) $html = str_replace('"'.$urlMatch[1].'"', '"'.$pageUrl.'"', $html);
	}

	$html = str_replace('<table>', '<table class="table table-bordered">', $html);
	$html = str_replace('<code class="language-', '<code class="', $html);

	return $html;
}

function buildPage($markdownPath, $outputPath) {
	global $root, $searchData, $buildCache;

	$outputUri = str_replace(BASEPATH.'/gh-pages/', '', $outputPath);

	$buildId = pathinfo($markdownPath, PATHINFO_FILENAME);
	$cachePath = str_replace('/docs', '/docs-old', $outputPath);
	if (file_exists($cachePath) && isset($buildCache[$buildId]) && filemtime($markdownPath) == $buildCache[$buildId]) {
		//echo 'Cache Page: '. str_replace(BASEPATH, '', $markdownPath) . ' -> ' . str_replace(BASEPATH, '', $outputPath) . "\n";
		if (!file_exists(dirname($outputPath))) mkdir(dirname($outputPath), 0777, true);
		copy($cachePath, $outputPath);
	} else {

		//echo 'Root: '.$root."\n";
		$root = ltrim(str_repeat('../', count(explode('/', $outputUri)) - 1), '/');
		$content = parseMarkdown($markdownPath) . "\n";

		$site_title = 'BungieNetPlatform';
		$site_desc = 'A community run wiki for the Bungie.net Platform APIs.';

		$page_title = str_replace('-', ' ', str_replace('docs/', '', explode('.', $outputUri)[0]));
		$page_title = str_replace('/index', '', $page_title);
		$page_title = str_replace('/', ' / ', $page_title);
		$page_desc = '';
		if ($page_title == 'index') {
			$page_title = $site_title;
			$page_desc = $site_desc;
		}
		$page_name = pathinfo($markdownPath, PATHINFO_FILENAME);
		$page_url = $root . trim(str_replace('index.html', '', $outputUri), '/');

		$title = $site_title;

		$segments = str_replace('docs/', '', $outputUri);
		foreach (explode('/', $segments) as $segment) {
			$segment = pathinfo($segment, PATHINFO_FILENAME);
			$segment = str_replace('-', ' ', $segment);
			if ($segment == 'index') continue;
			$title = $segment . ' | ' . $title;
		}

		ob_start();
		include(BUILDERPATH . '/templates/header.php');
		$wikiPath = str_replace('/index.html', '', $outputPath);
		$wikiPath = str_replace('/gh-pages', '/Home', $wikiPath);
		echo '<a href="https://github.com/DestinyDevs/BungieNetPlatform/wiki/' . pathinfo($wikiPath, PATHINFO_FILENAME) . '/_edit" target="_blank" class="edit-link"><i class="fa fa-pencil"></i> Edit Wiki</a>';
		echo $content;
		include(BUILDERPATH . '/templates/footer.php');

		$html = ob_get_clean();

		echo 'Built Page: ' . str_replace(BASEPATH, '', $markdownPath) . ' -> ' . str_replace(BASEPATH, '', $outputPath) . "\n";
		if (!file_exists(dirname($outputPath))) mkdir(dirname($outputPath), 0777, true);
		file_put_contents($outputPath, $html);
	}
	$buildCache[$buildId] = filemtime($markdownPath);

	// Generate Search Data
	$markdown = file_get_contents($markdownPath);
	$searchHeaders = array();
	preg_match_all('/## (.+)/', $markdown, $headerMatches, PREG_SET_ORDER);
	foreach($headerMatches as $headerMatch) {
		$searchHeaders[] = $headerMatch[1];
	}
	$searchData[] = array('path' => $outputUri, 'headers' => $searchHeaders);
}

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

$pages = getMarkdownPages(BASEPATH.'/wiki');
$buildCachePath = BUILDERPATH.'/cache/build-cache.json';
$buildCache = file_exists($buildCachePath) ? json_decode(file_get_contents($buildCachePath), true) : array();

$logPath = BUILDERPATH.'/log.txt';

//emptyDocs(BASEPATH.'/gh-pages/docs');
rename(BASEPATH.'/gh-pages/docs', BASEPATH.'/gh-pages/docs-old');

ob_start();

buildPage(BASEPATH.'/wiki/Home.md', BASEPATH.'/gh-pages/index.html');

if (file_exists($logPath)) unlink($logPath);
//echo json_encode($pages, JSON_PRETTY_PRINT)."\n";

$log = ob_get_clean();

//echo var_export($pages, true)."\n";
foreach($pages as $pageIndex => $page) {
	$pagePath = $page;
	//$pagePath = str_replace('/Enums.md', '/Enums/index.html', $pagePath);
	//$pagePath = str_replace('/Endpoints.md', '/Endpoints/index.html', $pagePath);
	$pagePath = str_replace('/Definitions.md', '/Definitions/index.html', $pagePath);
	$pagePath = str_replace('/EnemyHistoricalStats.md', '/EnemyHistoricalStats/index.html', $pagePath);
	$pagePath = str_replace('.md', '.html', $pagePath);
	$pagePath = str_replace('Pages', '', $pagePath);

	//echo $pagePath.LN;

	if (strpos($page, 'Pages') === false) {
		if (strpos($page, 'Home.md') === false && strpos($page, '_') === false) {
			buildPage(BASEPATH.'/wiki'.$page, BASEPATH.'/gh-pages/docs/'.trim($pagePath, '/'));
		}
		continue;
	}

	ob_start();
	buildPage(BASEPATH.'/wiki'.$page, BASEPATH.'/gh-pages/docs/'.trim($pagePath, '/'));

	$buildLog = ob_get_clean();

	$log .= $buildLog;
	file_put_contents($logPath, $log);
}

emptyDocs(BASEPATH.'/gh-pages/docs-old');
file_put_contents($buildCachePath, json_encode($buildCache, JSON_PRETTY_PRINT));

// Copy Data Files
$dataPath = BASEPATH.'/gh-pages/data';
if (!file_exists($dataPath)) mkdir($dataPath, 0777, true);

@copy('data/enums.json', $dataPath.'/enums.json');
@copy('data/endpoints.json', $dataPath.'/endpoints.json');
@copy('data/api-data.json', $dataPath.'/api-data.json');
@copy('data/historical-stats.json', $dataPath.'/historical-stats.json');

// Build Search Data
$searchDataPath = $dataPath.'/search.json';
if (!file_exists(dirname($searchDataPath))) mkdir(dirname($searchDataPath), 0777, true);
file_put_contents($searchDataPath, json_encode($searchData));

// Output Log File
echo file_get_contents($logPath);