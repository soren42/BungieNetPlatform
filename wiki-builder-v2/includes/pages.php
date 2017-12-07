<?php

require_once('parsedown-master/Parsedown.php');

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

function findSchema($pageName, $schemaTypeOverride='') {
	global $openapi;

	foreach($openapi->components as $schemaType => $schemas) {
		if ($schemaTypeOverride && $schemaTypeOverride != $schemaType) continue;
		foreach($schemas as $schemaId => $schema) {
			$schemaName = preg_replace(SCHEMA_URL_REGEX, '-', $schemaId);
			if ($schemaName == $pageName) {
				return '#/components/'.$schemaType.'/'.$schemaId;
			}
		}
	}
	return false;
}

function findPage($pageName) {
	global $pages;
	foreach($pages as $page) {
		if ($page['id'] == $pageName) {
			return $page;
		}
	}
	return false;
}

function getMarkdownPages($path, $root='') {
	global $openapi;

	if (!$root) $root = $path;
	$pages = array();
	foreach(array_diff(scandir($path), array('.', '..')) as $file) {
		$filePath = $path.'/'.$file;
		if (is_dir($filePath)) {
			$pages = array_merge($pages, getMarkdownPages($filePath, $root));
		} else if (pathinfo($filePath, PATHINFO_EXTENSION) == 'md' /*&& strpos($filePath, 'Pages') !== false*/) {
			$pagePath = str_replace($root, '', $filePath);

			$pageName = pathinfo($pagePath, PATHINFO_FILENAME);

			if (substr($pageName, 0, 1) == '_') continue;

			$pageVersion = -1;

			$pageParts = explode('/', ltrim($pagePath, '/'));
			preg_match('/^v[0-9]$/', $pageParts[0], $versionMatch);
			if ($versionMatch) {
				$pageParts = array_slice($pageParts, 1);
				$pageVersion = intval(substr($versionMatch[0], 1));
				if ($pageVersion != BUNGIE_API_VERSION) continue;
			}

			$page = array(
				'path' => $pagePath,
				'id' => $pageName,
				'name' => str_replace('-', ' ', $pageName),
				'version' => $pageVersion,
				'docPath' => '/'.implode('/', $pageParts)
			);

			if ($pageParts[0] == 'schemas' || $pageParts[0] == 'responses') {
				$schema = findSchema($pageName, $pageParts[0]);
				$page['name'] = @end(explode('/', $schema));
				$page['schema'] = $schema;
			}
			else if ($pageParts[0] == 'services') {
				$pageParts = array_slice($pageParts, 1);
				//echo '<pre>'.json_encode($pageParts, JSON_PRETTY_PRINT).'</pre>';
				foreach($openapi->paths as $endpointPath => $endpoint) {
					$endpointName = str_replace('.', '-', $endpoint->summary);
					$endpointPath = preg_replace('/[\<\>\.,\[\]]/', '-', $endpointName);
					//echo $endpointPath.LN;
					//echo implode('.', $pageParts).LN;
					//echo $endpoint->summary.LN;
					//$endpointName = str_replace('.md', '', implode('.', $pageParts));
					//echo $endpoint->summary.' | '.$endpointName.' | '.$pageName."\n";
					if ($pageName == $endpointName) {
						$page['name'] = $endpoint->summary;
						$page['endpoint'] = $endpointPath;
						break;
					}
				}
			}

			$page['docPath'] = DOCSPATH.str_replace('.md', '.html', $page['docPath']);
			if ($pageName == 'Home') {
				$page['docPath'] = str_replace('/docs/Home.html', '/index.html', $page['docPath']); // Move Homepage into the root
			}

			$page['docUrl'] = str_replace(PAGESPATH.'/', '', $page['docPath']);

			$pages[] = $page;
		}
	}
	return $pages;
}

function parseMarkdown($markdownPath) {
	$markdown = file_get_contents($markdownPath);
	return parseMarkdownText($markdown);
}

function parseMarkdownText($markdown) {
	global $root;

	$markdown = preg_replace('/\[([^\]]+)\]\(([^\)]+)\)/', '[[$1|$2]]', $markdown);
	$markdown = preg_replace('/\[\[([^\]\|]+)\|([^\]]+)\]\]/', '<a href="$2">$1</a>', $markdown);
	$markdown = preg_replace('/\[\[([^\]]+)\]\]/', '<a href="$1">$1</a>', $markdown);

	$markdown = preg_replace('/\| ([\n\|])/m', '| &nbsp; $1', $markdown);

	$parse = new Parsedown();
	$html = $parse->text($markdown);

	preg_match_all('/href="([^"]+)"/', $html, $urlMatches, PREG_SET_ORDER);
	foreach($urlMatches as $urlMatch) {
		$pageId = $urlMatch[1];
		$pageAnchor = '';
		if (strpos($pageId, '#') !== false) {
			$pageAnchor = '#'.explode('#', $pageId)[1];
			$pageId = explode('#', $pageId)[0];
		}
		$page = findPage($pageId);
		//echo json_encode($page, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
		if ($page) {
			$pageUrl = $root.str_replace('.html', '', $page['docUrl']);
			$html = str_replace('"'.$urlMatch[1].'"', '"'.$pageUrl.$pageAnchor.'"', $html);
		}
		//$pageUrl = locatePage($urlMatch[1]);
		//if ($pageUrl != $urlMatch[1]) $html = str_replace('"'.$urlMatch[1].'"', '"'.$pageUrl.'"', $html);
	}

	$html = str_replace('<table>', '<table class="table table-bordered parameters">', $html);
	$html = str_replace('<code class="language-', '<code class="', $html);

	// Make comment links clickable
	preg_match_all('/\/\/.*&lt;a.+\/a&gt;/', $html, $codeLinkMatches, PREG_SET_ORDER);
	foreach($codeLinkMatches as $codeLinkMatch) {
		$codeLink = $codeLinkMatch[0];
		$codeLink = str_replace('&lt;', '<', $codeLink);
		$codeLink = str_replace('&gt;', '>', $codeLink);

		//echo $codeLinkMatch[0].LN;
		$html = str_replace($codeLinkMatch[0], $codeLink, $html);
	}

	$html = str_replace('&amp;lt;', '&lt;', $html);
	$html = str_replace('&amp;gt;', '&gt;', $html);

	return $html;
}

function buildPage($page) {
	global $sitemap, $searchData, $root;

	$headerTemplate = BUILDERPATH.'/templates/header.php';
	$footerTemplate = BUILDERPATH.'/templates/footer.php';

	$site_title = 'BungieNetPlatform';
	$site_desc = 'A community run wiki for the Bungie.net Platform APIs.';

	$markdownPath = WIKIPATH.$page['path'];
	$docPath = $page['docPath'];
	$baseUri = str_replace(PAGESPATH.'/', '', $docPath);

	$root = ltrim(str_repeat('../', count(explode('/', $baseUri)) - 1), '/');

	$page_desc = $site_desc;
	$page_title = htmlspecialchars($page['name']);
	$page_name = pathinfo($markdownPath, PATHINFO_FILENAME);
	$page_url = trim(str_replace('index.html', '', $baseUri), '/');

	$title = $page_title.' | '.$site_title;

//	$segments = str_replace('docs/', '', $baseUri);
//	foreach (explode('/', $segments) as $segment) {
//		$segment = pathinfo($segment, PATHINFO_FILENAME);
//		$segment = str_replace('-', ' ', $segment);
//		if ($segment == 'index') continue;
//		$title = $segment.' | '.$title;
//	}

	//echo json_encode($page, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
	$content = parseMarkdown($markdownPath);

	if ($page_name == 'Home') {

		$changelog = file_get_contents(WIKIPATH.'/Changelog.md');
		$changes = array();
		foreach(explode("\n## ", $changelog) as $entryIndex => $entry) {
			if ($entryIndex == 0) continue;
			if ($entryIndex > 1) $entry = implode("\n", array_slice(explode("\n", $entry), 0, 2));
			$change = '### '.str_replace('## ', '### ', $entry);
			$lines = explode("\n", $change);
			if (count($lines) > 20) {
				$lines = array_slice($lines, 0, 20);
				$change = implode("\n", $lines).LN.LN.'[truncated]';
			}
			$changes[] = $change;
			//echo '<pre>['.$entry.']</pre>';
			//if (count($changes) == 5) break;
			if (count($changes) == 1) break;
		}

		$changes [] = LN.'<hr/>'.LN.'Read the [[full changelog|Changelog]].';

		$content .= '</div>'
			.'<div class="inner">'
				.'<h2>Changelog</h2>'
				.parseMarkdownText(implode("\n", $changes))
			.'</div>'
			.'<div class="inner">'
				.'<h2>Community Apps</h2>'
				.'<p>Cool apps built by the talented Destiny community!</p>'
				.'<div id="wiki-apps" ng-controller="AppSearchCtrl">'
					.'<div class="app-actions">'
						.'<a href="https://goo.gl/forms/eKTqppizDA3vhD8E3" target="_blank" class="btn btn-primary">Submit An App</a>'
					.'</div>'
					.'<div class="app-tile" ng-repeat="app in apps track by $index" app-entry="app"></div>'
				.'</div>'
			.'</div>'
//			.'<div class="row">'
//				.'<div class="col-md-8"><div class="inner">Test</div></div>'
//				.'<div class="col-md-4"><div class="inner">Test2</div></div>'
//			.'</div>'
		;
	}

	ob_start();
	include($headerTemplate);
	$header = ob_get_clean();

	ob_start();
	include($footerTemplate);
	$footer = ob_get_clean();

	$html = $header
		.'<a href="https://github.com/DestinyDevs/BungieNetPlatform/tree/master/wiki-docs'.str_replace(WIKIPATH.'/', '', $page['path']).'" target="_blank" class="edit-link"><i class="fa fa-code"></i> Source</a>'
		.$content.LN
		.$footer
	;

	$oldDocPath = str_replace('/docs/', '/docs-old/', $docPath);

	if (!file_exists(dirname($docPath))) mkdir(dirname($docPath), 0777, true);

	if (!file_exists($oldDocPath) || file_get_contents($oldDocPath) != $html) {
		echo 'Updated: '.str_replace(DOCSPATH, '', $docPath).LN;
		file_put_contents($docPath, $html);
		//touch($docPath, filemtime($markdownPath));
	} else {
		rename($oldDocPath, $docPath);
	}

	// Add page to the sitemap
	$sitemap[] = array('uri' => '/'.str_replace('.html', '', str_replace('index', '', $baseUri)), 'modified' => filemtime($docPath));

	// Generate Search Data
	$markdown = file_get_contents($markdownPath);
	$searchHeaders = array();
	preg_match_all('/## (.+)/', $markdown, $headerMatches, PREG_SET_ORDER);
	foreach($headerMatches as $headerMatch) {
		$searchHeaders[] = $headerMatch[1];
	}
	$searchData[] = array(
		'path' => $baseUri,
		'title' => $page_title,
		'headers' => $searchHeaders
	);
}

// Rename current docs folder
if (file_exists(DOCSPATH) && !file_exists(DOCSPATH.'-old')) rename(DOCSPATH, DOCSPATH.'-old');

$sitemap = array();
$searchData = array();
$openapi = loadOpenApi();

// Find all markdown pages
$pages = getMarkdownPages(WIKIPATH);

// Build pages
foreach($pages as $page) {
	//echo json_encode($page, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES).LN;
	buildPage($page);
}

// Delete old docs
emptyDocs(DOCSPATH.'-old');

// Build Search Data
$searchDataPath = PAGESPATH.'/data/search.json';
if (!file_exists(dirname($searchDataPath))) mkdir(dirname($searchDataPath), 0777, true);
file_put_contents($searchDataPath, json_encode($searchData, JSON_UNESCAPED_SLASHES));

// Build Sitemap
$sitemapXml = '<?xml version="1.0" encoding="utf-8"?>'.LN
	.'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'
	.' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"'
	.' xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">'.LN;

foreach($sitemap as $entry) {
	$sitemapXml .= '<url>'
		.'<loc>http://destinydevs.github.io/BungieNetPlatform'.$entry['uri'].'</loc>'
		.'<lastmod>'.date('Y-m-d\TH:i:sP', $entry['modified']).'</lastmod>'
		//.'<changefreq>daily</changefreq>'
		//.'<priority>0.8</priority>'
		.'</url>'.LN;
}
$sitemapXml .= '</urlset>';
$sitemapPath = PAGESPATH.'/sitemap.xml';
file_put_contents($sitemapPath, $sitemapXml);
echo 'Built Sitemap: '.$sitemapPath.LN;