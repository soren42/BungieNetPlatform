<?php
require_once('platformlib-data.php');

function parseServices($platformlib) {
	global $servicesData;

	preg_match_all('/[a-z]\.([a-zA-Z]+Service)=\{/im', $platformlib, $serviceMatchOffs, PREG_SET_ORDER);
	$serviceMatches = array();
	foreach($serviceMatchOffs as $match) {
		$start = strpos($platformlib, $match[0]);
		$end = strpos($platformlib, '(jQuery)', $start);

		$matchText = substr($platformlib, $start, $end-$start);
		$matchService = $match[1];

		$endpointStart = $start+strlen($match[0]);//-1;
		$endpointEnd = $end-($start+strlen($match[0]));

		if ($matchService == 'ExternalService') continue;

		$matchEndpoints = substr($platformlib, $endpointStart, $endpointEnd);

		$serviceMatches[] = array(
			$matchText,
			$matchService,
			'{,'.$matchEndpoints
		);

	}

	if (count($serviceMatches) == 0) echo '<pre>API Service Regex Broken :\'(</pre>';

	$services = array();

	foreach($serviceMatches as $serviceIndex => $service) {
		$serviceName = str_replace('Service', '', ucfirst($service[1]));
		$serviceData = $service[2];

		$services[$serviceName] = array(
			'name' => $serviceName,
			'endpoints' => array()
		);

		preg_match_all('/,([A-Z]+[a-zA-Z0-9]+):function\(([^\)]+)\)\{'
			//.'(.*?)\.buildUrl\((.*?)\)[,;].*?\.serviceLibrary\.([^\(]+)'
			.'(.*?)\.buildUrl\((.*?)\)[,;].*?\.serviceLibrary\.([^\(]+)'
			//.'(.*)a\.buildUrl\((.*?)\);'
			.'/m', $serviceData, $serviceDataFunctions, PREG_SET_ORDER);

		//	echo '<pre>'.$name.' | '.$data.'</pre>';
		//	echo '<pre>'.json_encode($funcs, JSON_PRETTY_PRINT).'</pre>'; continue;

		foreach($serviceDataFunctions as $funcIndex => $func) {
			$endpointName = $func[1];
			$pathParams = $func[2];
			$params2 = $func[3];
			$method = $func[5];

			$query = array();
			preg_match_all('/\.addParam\([a-z]+,"([^,]+)",([a-z]+)\)/m', $params2, $params3, PREG_SET_ORDER);
			foreach($params3 as $param) {
				$query[] = $param[1].'={'.$param[2].'}';
			}
			$query = implode('&', $query);

			$api = $func[4];
			$api = preg_replace('/encodeURIComponent\(([^\)]+)\)/i', '$1', $api);
			$api = preg_replace('/\),.*/i', '', $api);
			$api = preg_replace('/",([^,])/i', '|', $api);
			$api = preg_replace('/,(.*)/i', '', $api);
			$api = preg_replace('/"\+([^\+]+)\+"/i', '{$1}', $api);

			$api = str_replace('"/', '/', $api);

			$api_data = $api.str_replace('&', ',', preg_replace('/=\{[^\}]+\}/', '', $query));

			// Load in manually maintained endpoint data
			$endpointData = isset($servicesData[$serviceName]) && isset($servicesData[$serviceName][$endpointName]) ? $servicesData[$serviceName][$endpointName] : array();

			// Find minified path parameters
			preg_match_all('/\{([^\}]+)\}/', $api_data, $pathParamMatches, PREG_SET_ORDER);
			//echo '<pre>'.var_export($param_matches, true).'</pre>';

			$pathParamNames = isset($endpointData['path']) ? $endpointData['path'] : array();

			$keys = array();
			$pathParams = array();
			foreach($pathParamMatches as $pathParamMatch) {
				$serviceId = $pathParamMatch[1];
				if (!in_array($serviceId, $keys)) {
					$keyIndex = count($keys);
					$pathParams[$serviceId] = $keyIndex < count($pathParamNames) ? $pathParamNames[$keyIndex] : 'param'.($keyIndex+1);
					$keys[] = $serviceId;
				}
			}

			// Replace minified path parameters with proper names
			foreach($pathParams as $oldParam => $newParam) {
				$api_data = str_replace('{'.$oldParam.'}', '{'.$newParam.'}', $api_data);
			}

			// TODO: Some of the logic here was originally built for exporting to the old Wikia, should probably clean this up at some point
			$api_data = explode('|', $api_data);

			// The old way we did endpoint data structures, unfortunately not to any standard
			//$endpoint = array(
			//	'name' => $endpointName,
			//	'method' => strtoupper($method),
			//	'endpoint' => $api_data[0],
			//	'params' => $api_data[1] ? explode(',', $api_data[1]) : array(),
			//	'post' => isset($endpointData['post']) ? $endpointData['post'] : array()
			//);

			// The new OpenAPI 3.0 standard used by the official docs
			$endpoint = (object)array(
				'name' => $endpointName,
				'endpoint' => $api_data[0]
			);

			$openapi = (object)array(
				'summary' => $serviceName.'.'.$endpointName,
				'description' => isset($api_param['description']) ? $api_param['description'] : ''
			);

			// Get path parameters
			$params = array();

			preg_match_all('/\{([^\}]+)\}/', $endpoint->endpoint, $pathMatches, PREG_SET_ORDER);
			if (count($pathMatches) > 0) {
				foreach($pathMatches as $pathMatch) {
					$param = array(
						'name' => $pathMatch[1],
						'in' => 'path',
						'description' => '',
						'required' => true,
						'schema' => (object)array()
					);
					$params[] = (object)$param;
				}
				//echo '<pre>'.json_encode($pathMatches, JSON_PRETTY_PRINT).'</pre>';
			}

			// Get query parameters
			$queryParams = $api_data[1] ? explode(',', $api_data[1]) : array();
			foreach($queryParams as $paramName) {
				$param = array(
					'name' => $paramName,
					'in' => 'query',
					'description' => '',
					'schema' => (object)array()
				);
				$params[] = (object)$param;
			}

			// Get post parameters
			$postParams = isset($endpointData['post']) ? $endpointData['post'] : array();

			$params = array_merge($params, $postParams);

			$openapi->{$method} = (object)array(
				'tags' => array(
					$serviceName,
					'Unofficial'
				),
				'description' => $openapi->description,
				'operationId' => $serviceName.'.'.$endpointName,
				'parameters' => $params,
				'responses' => (object)(isset($api_param['responses']) ? $api_param['responses'] : array())
			);

			$endpoint->openapi = $openapi;

			$services[$serviceName]['endpoints'][$endpointName] = $endpoint;
		}
		$services[$serviceName]['endpoints'] = (object)$services[$serviceName]['endpoints'];
	}
	return $services;
}

function parseEnums($lib_data) {
	$enums = array();

	//preg_match_all('/[a-z]+=[a-z]+\.([^,]+),function\([^\)]+\)\{([^\}]+)\}/i', $lib_data, $enums_matches, PREG_SET_ORDER);
	preg_match_all('/function\([^\)]+\)\{([^\}]+)\}\([^\|]+\|\|\([a-z]+\.([^=]+)=/i', $lib_data, $enums_matches, PREG_SET_ORDER);
	foreach($enums_matches as $match) {
		$key = $match[2];
		$enums_match = $match[1];
		//echo '<pre>'.var_export($match, true).'</pre>';
		foreach(explode(';', $enums_match) as $enum_entry) {
			preg_match('/\[[^\.]+\.([^=]+)=([^\]]+)/i', $enum_entry, $enum_match);
			if (!isset($enum_match[2])) {
				//echo '<pre>'.$enum_entry.'</pre>';
				//echo '<pre>' . var_export($enum_match, true) . '</pre>';
				continue;
			}
			$enums[$key][$enum_match[1]] = intval($enum_match[2]);
		}
	}
}