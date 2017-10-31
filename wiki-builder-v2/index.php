<?php
require_once('includes/common.php');
require_once('includes/platformlib.php');

define('BUILDERPATH', __DIR__);
define('BASEPATH', dirname(dirname(__DIR__)));

define('CACHEPATH', BUILDERPATH.'/cache');
define('DATAPATH', BUILDERPATH.'/data');
define('WIKIPATH', dirname(BUILDERPATH).'/wiki-docs');

define('PAGESPATH', BASEPATH.'/gh-pages');
define('DOCSPATH', PAGESPATH.'/docs');

define('BUNGIE_URL', 'https://www.bungie.net');
define('BUNGIE_API_VERSION', 2);

define('BR', '<br/>');
define('LN', "\n");
define('SCHEMA_URL_REGEX', '/[<>\.,\[\]\+]/'); // Wiki Schema URL > Filepath
define('SCHEMA_URL_REGEX_API', '/[<>\.,\+]/'); // Official Schema URL > Filepath

if (!file_exists(CACHEPATH)) mkdir(CACHEPATH);
if (!file_exists(DATAPATH)) mkdir(DATAPATH);

if (file_exists('../api-key.php')) include('../api-key.php');
if (!defined('API_KEY')) define('API_KEY', '{insert-api-key}');

ini_set('max_execution_time', 300);

//header('Content-Type: text/plain');

$offline = isset($_GET['offline']) ? '&offline' : '';

$actions = array(
	array('link' => '?manifest'.$offline, 'title' => 'Check Manifest'),
	array('link' => '?api'.$offline, 'title' => 'Check For API Changes'),
	array('link' => '?wiki'.$offline, 'title' => 'Build Wiki'),
	array('link' => '?pages'.$offline, 'title' => 'Build Pages')
);

echo '<ul>';
foreach($actions as $action) {
	echo '<li><a href="'.$action['link'].'">'.$action['title'].'</a> | <a href="'.$action['link'].'&update">Force Update</a></li>';
}
echo '</ul>';
echo '<hr/>';

echo '<pre>';

if (isset($_GET['wiki'])) {
	include('includes/wiki.php');
} else if (isset($_GET['pages'])) {
	include('includes/pages.php');
} else if (isset($_GET['api'])) {
	include('includes/update.php');
} else {
	include('includes/manifest.php');
}

echo '</pre>';