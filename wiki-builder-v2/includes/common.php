<?php
function getUrl($url, $options=array()) {
	$ch = curl_init($url);
	$curl = array(
		CURLOPT_FOLLOWLOCATION => true,
		CURLOPT_RETURNTRANSFER => true
	);
	if (isset($options['curl'])) {
		$curl = array_merge($curl, $options['curl']);
	}
	if (isset($options['get'])) {
		$url .= (strpos($url, '?') === false ? '?' : '').http_build_query($options['get']);
	}
	if (isset($options['post'])) {
		$curl[CURLOPT_POST] = true;
		$curl[CURLOPT_POSTFIELDS] = $options['post'];
	}
	if (isset($options['headers'])) {
		$curl[CURLOPT_HTTPHEADER] = $options['headers'];
	}
	curl_setopt_array($ch, $curl);
	$response = curl_exec($ch);
	if (isset($options['info'])) {
		$response = curl_getinfo($ch);
	}
	curl_close($ch);
	return $response;
}

function getJson($url, $options=array()) {
	return json_decode(getUrl($url, $options));
}

function getUrlHeaders($url, $options=array()) {
	if (!isset($options['curl'])) $options['curl'] = array();
	$options['curl'][CURLOPT_FILETIME] = true;
	$options['curl'][CURLOPT_NOBODY] = true;
	return getUrl($url, $options);
}

function getSchemaReferenceType($ref) {
	global $openapi;
	$refPath = explode('/', $ref);
	$schemaId = end($refPath);
	if (!isset($openapi->components->schemas->{$schemaId})) {
		return 'MissingReference';
	}
	$schema = $openapi->components->schemas->{$schemaId};
	if (isset($schema->enum)) {
		return 'Enum';
	}
	else if (strpos($schemaId, '[]') !== false) {
		return 'Array';
	}
	else if (strpos($schemaId, '<') !== false || strpos($schemaId, 'Of') !== false) {
		return 'Generic';
	}
	else if (strpos($schemaId, 'Definitions') !== false) {
		return 'Definition';
	}
	return 'Class';
}
function getSchemaReferenceShortName($ref) {
	global $openapi;

	$refPath = explode('/', $ref);
	$refName = @end($refPath);

	$refType = $refPath[2] == 'schemas' ? getSchemaReferenceType($ref) : 'Response';

	$shortName = htmlspecialchars($refName);
	switch($refType) {
		case 'Definition':
		case 'Class':
		case 'Enum':
			$shortName = @end(explode('.', $refName));
			break;
		case 'Array':
			$shortName = @end(explode('.', explode('[', $refName)[0])).'[]';
			break;
		case 'Generic':
			if (strpos($refName, 'And') !== false) {
				$key = preg_replace('/.+Of(.+)And.+/', '$1', $refName);//buildSchemaString($schema->properties->data->{'x-dictionary-key'});
				$value = preg_replace('/.+Of.+And(.+)/', '$1', $refName);//buildSchemaString($schema->properties->data->additionalProperties);
				$shortName = explode('Of', $refName)[0].htmlspecialchars('<'.$key.','.$value.'>');
			}
			else {
				$key = preg_replace('/.+Of(.+)/', '$1', $refName);
				$shortName = explode('Of', $refName)[0].htmlspecialchars('<'.$key.'>');
			}
			break;
	}
	$shortName = str_replace('[]', '&#91;&#93;', $shortName);
	return $shortName;
}

function getSchemaReferenceScope($ref) {
	$refPath = explode('/', $ref);
	$refName = @end($refPath);

	$refType = $refPath[2] == 'schemas' ? getSchemaReferenceType($ref) : 'Response';

	$scope = '';
	switch($refType) {
		case 'Definition':
		case 'Class':
		case 'Enum':
		case 'Array':
			$refNamePath = explode('.', $refName);
			$scope = implode('.', array_slice($refNamePath, 0, count($refNamePath)-1));
			break;
	}
	return $scope;
}

function truncateDescription($description) {
	if (count(explode("\r\n", $description)) > 1) {
		$description = explode("\r\n", $description)[0].' (truncated)';
	}
	$description = htmlspecialchars($description);
	return $description;
}

function cleanDescription($description) {
	$description = htmlspecialchars($description);
	$description = str_replace("\r\n\r\n", '<br/><br/>', $description);
	$description = preg_replace('/\s*\r\n\s*/', ' ', $description);
	//$description = str_replace('<br/><br/>', "\r\n\r\n", $description);
	return $description;
}