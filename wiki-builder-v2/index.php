<?php
require_once('includes/common.php');
require_once('includes/platformlib.php');

define('BUILDERPATH', __DIR__);
define('BASEPATH', dirname(dirname(__DIR__)));

define('CACHEPATH', BUILDERPATH.'/cache');
define('DATAPATH', BUILDERPATH.'/data');
//define('PAGESPATH', BASEPATH.'/gh-pages');
//define('WIKIPATH', BASEPATH.'/wiki');

define('BUNGIE_URL', 'https://www.bungie.net');

if (!file_exists(CACHEPATH)) mkdir(CACHEPATH);
if (!file_exists(DATAPATH)) mkdir(DATAPATH);

if (file_exists('../api-key.php')) include('../api-key.php');
if (!defined('API_KEY')) define('API_KEY', '{insert-api-key}');

ini_set('max_execution_time', 300);

define('BUNGIE_API_VERSION', 2);

header('Content-Type: text/plain');

if (isset($_GET['wiki'])) {
	include('includes/wiki.php');
} else if (isset($_GET['pages'])) {
	include('includes/pages.php');
} else {
	include('includes/update.php');
}