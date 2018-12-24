<?php

// Refresh every 60 minutes
$expiryTime = 60*60;

// Download Official API Doc master from Github
$masterUrl = 'https://github.com/Bungie-net/api/archive/master.zip';
$masterZipCachePath = CACHEPATH.'/api-master.zip';

if (!isset($_GET['offline'])) {
	if (!file_exists($masterZipCachePath) || time()-filemtime($masterZipCachePath) > $expiryTime || isset($_GET['update'])) {
		$masterZip = getUrl($masterUrl);
		file_put_contents($masterZipCachePath, $masterZip);

		$zip = new ZipArchive();
		if ($zip->open($masterZipCachePath) === TRUE) {
			$zip->extractTo(CACHEPATH);
			$zip->close();
		}
	}
}

// Download the latest platformlib

$platformlibCachePath = 'platformlib-d'.BUNGIE_API_VERSION.'.js';
$platformlibUrl = 'https://www.bungie.net/sharedbundle/platformlib';

if (!isset($_GET['offline'])) {
	if (!file_exists($platformlibCachePath) || time()-filemtime($platformlibCachePath) > $expiryTime || isset($_GET['update'])) {
		$platformlib = getUrl($platformlibUrl);
		if ($platformlib) file_put_contents($platformlibCachePath, $platformlib);
	}
}

$serviceLookup = array();

// Load OpenAPI json file
$openapiCachePath = CACHEPATH.'/api-master/openapi.json';
$openapi = json_decode(file_get_contents($openapiCachePath));
foreach($openapi->paths as $path => $pathData) {
	$summary = explode('.', $pathData->summary);
	$service = $summary[0];
	$name = $summary[1];
	if (!isset($serviceLookup[$service])) $serviceLookup[$service] = array('name' => $service, 'endpoints' => array());
	$serviceLookup[$service]['endpoints'][$name] = $path;
}

//echo '<pre>'.json_encode($serviceLookup, JSON_PRETTY_PRINT).'</pre>';

$openapiTemplate = (object)array(
	'openapi' => '3.0.0',
	'info' => (object)array(
		'title' => '',
		'description' => '',
		'termsOfService' => $openapi->info->termsOfService,
		'contact' => (object)array(
			'name' => 'lowlines',
			'url' => 'https://github.com/DestinyDevs/BungieNetPlatform',
			'email' => 'lowlines89@gmail.com'
		),
		'license' => (object)array(
			'name' => $openapi->info->license->name,
			'url' => 'https://github.com/DestinyDevs/BungieNetPlatform/blob/master/wiki-builder-v2/LICENSE'
		),
		'version' => '1.0.0'
	),
	'servers' => array(),
	'paths' => (object)array()
);

function checkEndpoint($endpoint, $serviceName) {
	global $serviceLookup, $servicesData, $openapi;

	//echo '<pre>'.json_encode($endpoint, JSON_PRETTY_PRINT).'</pre>';

	$endpointName = $endpoint->name;

	// Skip officially supported endpoints
	if (isset($serviceLookup[$serviceName]) && isset($serviceLookup[$serviceName]['endpoints'][$endpointName])) {
		//echo 'OfficiallySupported: '.$endpoint->openapi->summary.LN;
		return false;
	}

	if (isset($openapi->paths->{$endpoint->endpoint})) {
		echo 'EndpointConflict: '.$endpoint->endpoint.LN;
		return false;
	}

	if (!isset($servicesData[$serviceName]) || !isset($servicesData[$serviceName][$endpointName])) {
		echo 'NewEndpoint: '.str_pad($endpoint->openapi->summary, 60, ' ', STR_PAD_RIGHT).' | '.$endpoint->endpoint.LN;
	}
	else if (!$servicesData[$serviceName][$endpointName]) {
		echo LN.'NeedsData: '.str_pad($endpoint->openapi->summary, 60, ' ', STR_PAD_RIGHT).' | '.$endpoint->endpoint.LN.LN;
		//echo '<pre>'.json_encode($endpoint, JSON_PRETTY_PRINT).'</pre>';
	}
	else {
		$endpointData = $servicesData[$serviceName][$endpointName];
//		if (isset($endpointData['path'])) {
//			foreach($endpointData['path'] as $param) {
//				if (is_string($param)) {
//					$param = array(
//						'name' => $param,
//						'in' => 'path'
//					);
//				}
//			}
//		}
		//echo 'Endpoint: '.str_pad($endpoint->openapi->summary, 60, ' ', STR_PAD_RIGHT).' | '.$endpoint->endpoint.LN;
	}
	return $endpoint;
}

for ($i=1; $i<=BUNGIE_API_VERSION; $i++) {
	$platformlibCachePath = 'platformlib-d'.$i.'.js';
	$platformlib = file_get_contents($platformlibCachePath);

	$platformServices = parseServices($platformlib);
	switch($i) {
		case 1:
			$legacyOpenapi = json_decode(json_encode($openapiTemplate));
			$legacyOpenapi->info->title = 'Unofficial Bungie.net API for Destiny 1';
			$legacyOpenapi->info->description = 'These are legacy endpoints for Destiny 1 that are no longer supported officially by Bungie.';

			$legacyOpenapi->servers[] = (object)array(
				'url' => 'https://bungie.net/d1/Platform',
				'description' => 'The final resting place for the first 3 years of Destiny.'
			);
			$legacyOpenapi->components = (object)array(
				'schemas' => array(),
				'responses' => array(),
				'headers' => $openapi->components->headers,
				'securitySchemes' => $openapi->components->securitySchemes
			);
			$legacyOpenapi->components->schemas = $servicesComponents;
			$legacyOpenapi->tags = array(
				(object)array('name' => 'Destiny', 'description' => 'destiny')
			);

			$destinyService = $platformServices['Destiny'];
			foreach($destinyService['endpoints'] as $endpoint) {
				//echo '<pre>'.json_encode($endpoint, JSON_PRETTY_PRINT).'</pre>';
				$endpoint = checkEndpoint($endpoint, 'Destiny');
				if ($endpoint) $legacyOpenapi->paths->{$endpoint->endpoint} = $endpoint->openapi;
				$legacyOpenapi = parseResponses($legacyOpenapi, $endpoint);
			}

			file_put_contents(DATAPATH.'/openapi-d'.$i.'.json', json_encode($legacyOpenapi, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
			break;
		default:
			$unOpenapi = json_decode(json_encode($openapiTemplate));
			$unOpenapi->info->title = 'Unofficial Bungie.net API';
			$unOpenapi->info->description = 'This is an automated extension of the official Bungie.net APIs with information on undocumented/unsupported stuff.';
			$unOpenapi->info->version = $openapi->info->version;
			$unOpenapi->servers = $openapi->servers;
			$unOpenapi->components = (object)array(
				'schemas' => array(),
				'responses' => array(),
				'headers' => $openapi->components->headers,
				'securitySchemes' => $openapi->components->securitySchemes
			);
			$unOpenapi->components->schemas = $servicesComponents;

			foreach($platformServices as $service) {
				$serviceName = $service['name'];
				foreach($service['endpoints'] as $endpoint) {
					$endpoint = checkEndpoint($endpoint, $serviceName);
					if ($endpoint) $unOpenapi->paths->{$endpoint->endpoint} = $endpoint->openapi;

					$unOpenapi = parseResponses($unOpenapi, $endpoint);
				}

				if (!isset($serviceLookup[$serviceName])) {
					$unOpenapi->tags[] = (object)array(
						'name' => $serviceName,
						'description' => strtolower($serviceName)
					);
				}
			}
			file_put_contents(DATAPATH.'/openapi-d'.$i.'.json', json_encode($unOpenapi, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
			break;
	}
}